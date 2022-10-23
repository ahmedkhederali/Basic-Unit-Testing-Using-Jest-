const arr=require("../arr")
test('check Length Of Arr', () => {
    expect(arr.length).toBe(6)
 })

 test('check Length Of Arr', () => {
    expect(arr).toHaveLength(6)
 }) 
 test('check Length Of Arr', () => {
    expect(arr).not.toHaveLength(4)
 }) 

 test('check Arr contain Number 3', () => {
    expect(arr).toContain(3)
 }) 
// Looping
 // Check Array Not Contain Number 0
test("check no zero in array",()=>{
    for (var i=0;i<arr.length;i++){
        expect(arr[i]).not.toBe(0)
    }
})
// Check Array Not Contain any string
test("check no zero in array",()=>{
    for (var i=0;i<arr.length;i++){
        expect(isNaN(arr[i])).toBe(false)
    }
})

test("check no zero in array",()=>{
    for (var i=0;i<arr.length;i++){
        expect(isNaN(arr[i])).toBeFalsy()
    }
})
// Equel To toBeFalsy()
test("check no zero in array",()=>{
    for (var i=0;i<arr.length;i++){
        expect(isNaN(arr[i])).not.toBeTruthy()
    }
})

// to Check Number one In Arr Is greater Than one
test("check no zero in array",()=>{
        expect(arr[0]).toBeGreaterThanOrEqual(1)
    
})
// to Check Number one In Arr Is less Than 7
test("check no zero in array",()=>{
    expect(arr[0]).toBeLessThan(4)

})

// to Check if Number Undefined ?
test("check no zero in array",()=>{
    let a;
    expect(a).toBeUndefined()

})

// to Check for substring inside string
test("check no zero in array",()=>{
    const myStr="I Love Ahmed  ahmed"
    expect(myStr).toMatch(/ahmed/ig)
})

// to Check for property inside Obj
// Accept Key and Value But Value IS Optioal 
test("check no zero in array",()=>{
    const myObj={
        name:"ahmed",
        age:22
    }
    expect(myObj).toHaveProperty("age",22)
})

test("check no zero in array",()=>{
    const myObj={
        name:"ahmed",
        age:22
    }
    expect(myObj).toHaveProperty("age")
})


// Custome A Matcher Called ToBeLargerThan to check if Reciver is Larger than target

expect.extend({
    toBeLargerThan(reciver,target){
        const pass=reciver>target;
        if(pass){
            return{
                message:()=> ` Expected ${reciver} is greater Than ${target}`,
                pass:true
            }
        }else{
           return {
            message:()=> `Error: Expected ${reciver} is greater Than ${target}`,
            pass:false
           }

        }
    }
})


test("check Our Custome Matcher",()=>{
    expect(44).toBeLargerThan(10)
})


// create Custome matcher called ToBeBetween
expect.extend({
    ToBeBetween(reciver,start,end){
        const pass=reciver>start   && reciver<end;
        if(pass){
            return{
                message:()=> `Expected ${reciver} is between ${start} ad ${end}`,
                pass:true
            }
        }else{
           return {
            message:()=> `Error: Expected ${reciver} is between ${start} ad ${end}`,
            pass:false
           }

        }
    }
})

test("check Between in range",()=>{
    expect(1999).ToBeBetween(1990,2022)
})

// Equal 
test("Equality",()=>{
    expect("ss").toEqual("ss")
})

//Expect Anything=> Match Anything except Undefined , Null values 
test("Expect Anything 1",()=>{
    expect("ss").toEqual(expect.anything())
})

test("Expect Anything 2",()=>{
    expect([1,2,3,4,5]).toEqual(expect.anything())
})


// any  (Constructor)
test("Expect Anything 3",()=>{
    expect("ss").toEqual(expect.any(String))
})

// arrayContaining(Array)
test("Expect arrayContaining",()=>{
    const arr=[1,2,3,4,56,8,7]
    expect(arr).toEqual(expect.arrayContaining([1,2,8]))
})