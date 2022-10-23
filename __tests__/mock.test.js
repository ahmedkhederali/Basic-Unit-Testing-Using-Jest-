const mocker=require("../mock")
test('mock Function h', () => { 
   expect(mocker("Ahmed")).toBe("Hello Ahmed")
   
})
test('test mock Function h', () => { 
     const mocker=jest.fn((name)=>`Hello ${name}`);
    expect(mocker("Ahmed")).toBe("Hello Ahmed")
    expect(mocker("ali")).toBe("Hello ali")
    expect(mocker("Amr")).toBe("Hello Amr")
    expect(mocker).toHaveBeenCalled(); // Times Function calles
    expect(mocker).toHaveBeenCalledTimes(3); // To check If This Function Called Three Times or Not
    expect(mocker).toHaveBeenCalledWith("Ahmed"); // To check If Fuction Called And Send Ahmed As A parameter 
    expect(mocker).toHaveBeenLastCalledWith("Amr"); // To check If Fuction Called And Send Ahmed As A parameter last call 


})