var recipes = {first: "eggs", second: "bacon", third: "onions"}

function updateObjectWithKeyAndValue(object, key, value) {
  return  Object.assign ({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}