const {sayHello,sum}=require("../say")
test("check no numbers",()=>{
    expect(sum()).toBe(0)
})
test('Say Message', () => { 
expect(sayHello()).toBe("Hello Jest");
 });
describe("Chesk sum of All Numbers",()=>{
    describe("Check IF IT no number or one umber",()=>{
        test("sum To Number",()=>{
            expect(sum(3)).toBe(3)
        });  
        test.skip("sum To Number",()=>{
            expect(sum()).toBe(0)
        })
    })
    describe("Check IF IT more Than one Number",()=>{
        test("sum To Number",()=>{
            expect(sum(3,5,5)).toBe(13)
        });
        test("sum To Number",()=>{
            expect(sum(3,5,5,6)).toBe(19)
        });
    })


})