const rewire = require("rewire")
const index = rewire("./index")
const Board = index.__get__("Board")

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "Edmond"], ["George", "Michael", "George"], ["Jean-Philippe", "Anas", "Edmond"]]
        inst = new Board(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
