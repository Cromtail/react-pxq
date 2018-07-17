/*谈出console*/
import * as test from './action-type'

export const console_string = (string) => {
    return {
        type: test.CONSOLE_STRING,
        string
    }
}
