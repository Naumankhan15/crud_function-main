import Requests from "../requestDTO/userRequest.js";

export const getuserobject = (reqbody) => {
    let req = new Requests();
    req.setFirstname( reqbody.firstname); 
    req.setLastname(reqbody.lastname);
    req.setEmail(reqbody.email);
    req.setUsername(reqbody.username);
    req.setPassword(reqbody.password);

    return req;
}
