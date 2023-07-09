const conect = require('../handlers/handlerTestconnection')
const create = require('../handlers/handlerTestcreate')
const deletev = require('../handlers/handlerTestdelete')
const select = require('../handlers/handlerTestselect')
const update = require('../handlers/handlerTestupdate')

describe("Describe los resultados de la conexión con un select * from ", () => {
    
    test("debe responder con un objeto", async () => {
        expect(typeof conect).toBe("object")
    })

})



describe("Describe los resultados del create ", () => {
    
    test("debe responder con un objeto", async () => {
        expect(typeof create).toBe("object")
    })

})


describe("Describe los resultados del delete ", () => {
    
    test("debe responder con un objeto", async () => {
        expect(typeof deletev).toBe("object")
    })

})


describe("Describe los resultados del select por un id ", () => {
    
    test("debe responder con un objeto", async () => {
        expect(typeof select).toBe("object")
    })

})


describe("Describe los resultados de un update ", () => {
    
    test("debe responder con un objeto", async () => {
        expect(typeof update).toBe("object")
    })

})
