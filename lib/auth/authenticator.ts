import Challenge from "../messages/challenge";
import Authenticate from "../messages/authenticate";


interface ClientAuthenticator {
    authMethod: string
    authID: string
    authExtra: object
    authenticate(challenge: Challenge): Authenticate
}
