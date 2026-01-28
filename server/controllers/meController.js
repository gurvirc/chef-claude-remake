import { getDBConnection } from "../db/db.js";
export async function meController(req, res){
    try{
    const db = await getDBConnection()

    //check if userId is attached to the session, if not return {isLoggedIn: false} else search db and return the users name
    if(!req.session.userId){
        return res.json({isLoggedIn: false})
    }

    const user = await db.get(`SELECT name FROM user WHERE id = ?`, [req.session.userId])

        res.json({isLoggedIn: true, name: user.name})

    


    }catch(err){
        console.log('get current user error: ', err)
        res.status(500).json({ error: 'Internal server error' });
    }

}