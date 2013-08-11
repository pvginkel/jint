// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If (Evaluate Statement).type is "break" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a "var-loop"
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A12.1_T2.js
 * @description Embedded loops
 */

__str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break nested;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str !== "00101120213031") {
	$ERROR('#1: __str === "00101120213031". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break outer;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "0010112021") {
	$ERROR('#2: __str === "0010112021". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break ;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str !== "00101120213031") {
	$ERROR('#3: __str === "00101120213031". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////



