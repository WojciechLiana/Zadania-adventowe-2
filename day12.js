// day 12/1
console.log('a');
let moon1 =[3, 15, 8, 0, 0, 0];
let moon2 =[5, -1, -2, 0, 0, 0];
let moon3 =[-10, 8, 2, 0, 0, 0];
let moon4 =[8, 4, -5, 0, 0, 0];

let moon11 = moon1.slice();
let moon22 = moon2.slice();
let moon33 = moon3.slice();
let moon44 = moon4.slice();

function position(moon){
  const moonP = moon.slice();
  moonP[0] += moonP[3];
  moonP[1] += moonP[4];
  moonP[2] += moonP[5];
  return moonP;
}

function gravity(moon1, moon2, moon3, moon4, current){
  const moons = [moon1.slice(), moon2.slice(), moon3.slice(), moon4.slice()];
  const currentg = current.slice();
  const gravity = [0,0,0];
  for(let i=0; i<3; i++){
    for(let j=0; j<4; j++){
      if(currentg[i] > moons[j][i]){
            gravity[i] -=1;
         }
            if(currentg[i] < moons[j][i]){
            gravity[i] +=1;
         }
    }
    }
 
  return gravity;
}

function velocity(moon1, moon2, moon3, moon4, moon){
  const moonV = moon.slice();
  moonV[3] = gravity(moon1, moon2, moon3, moon4, moonV)[0];
    moonV[4] = gravity(moon1, moon2, moon3, moon4, moonV)[1];
    moonV[5] = gravity(moon1, moon2, moon3, moon4, moonV)[2];
  return moonV;
}

function final(){
 
  const g1 = gravity(moon1, moon2, moon3, moon4, moon1);
    const g2 = gravity(moon1, moon2, moon3, moon4, moon2);
    const g3 = gravity(moon1, moon2, moon3, moon4, moon3);
    const g4 = gravity(moon1, moon2, moon3, moon4, moon4);
 
  for(let i=0; i<3; i++){
    moon1[i+3] += g1[i];
    moon2[i+3] += g2[i];
    moon3[i+3] += g3[i];
    moon4[i+3] += g4[i];
  }

  moon1= position(moon1);
  moon2= position(moon2);
  moon3= position(moon3);
  moon4= position(moon4);

}


function energySum(steps){
  for(let s=0; s<steps;s++){
    final();
  }
 
  let en = energy(moon1)+energy(moon2)+energy(moon3)+energy(moon4);
 
  console.log(en);
}

function energy(moon){
  let pot = 0;
  let kin = 0;
  for(let i=0; i<3; i++){
    pot += Math.abs(moon[i]);
    kin += Math.abs(moon[i+3]);
  }
  return kin*pot;
}

//energySum(1000);

// 7179

// day 12/2

function initialState(m1,m2,m3,m4){
let isEqual=false;
  let counter = 0;
  while(!isEqual){
    counter ++;
    final();
    if(checker(moon1, m1) && checker(moon2, m2) && checker(moon3, m3) && checker(moon4, m4)){
       isEqual = true;
       }
  }
  return counter;
}
 
function checker(moon, m){
  let counter =0;
    for(let t=0; t<6; t++){
      if(moon[t]===m[t]){
        counter++;
      }
    }
   if(counter == 6){
     return true;
   }else{
     return false;
   }
}

const state = initialState(moon11, moon22, moon33, moon44);

console.log(state);