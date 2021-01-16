
/* Trig functions */
function toDegrees(){
	var r = document.getElementById("radian").value;
	var out = r * (180/Math.PI);
	document.getElementById("radConOut").innerHTML = out;
}
function toRadians(){
	var d = document.getElementById("degree").value;
	var out = d * (Math.PI/180);
	document.getElementById("degConOut").innerHTML = out;
}
function calcEq() {
	$('.EqResults').empty();
	
	var amp = findAmp();
	var period = findPeriod();
	var disp = findDisp();
	var vertex = findVertex();
	var vertical = findVertical();
	
	displayEqResults(amp, period, disp, vertex, vertical);
}
function displayEqResults(amp, period, disp, vertex, vertical) {
	$('.eq-type').append("Sinusoidal");
	$('.eq-amp').append('<td>' + amp + '</td>');
	$('.eq-period').append('<td>' + period + '</td>');
	$('.eq-disp').append('<td>' + disp + '</td>');
	$('.eq-vert').append('<td>' + vertex + '</td>');
	$('.eq-vertical').append('<td>' + vertical + '</td>');
}
function findAmp() {
	var amp = parseInt($('.coeffA').val());
	return Math.abs(amp);
}
function findPeriod() {
	var period = parseInt($('.coeffB').val());
	return ((2*Math.PI)/period)
}
function findDisp() {
	var disp = parseInt($('.coeffC').val());
	var B = parseInt($('.coeffB').val());
	return (disp/B) * -1;
}
function findVertex() {
	var A = parseInt($('.coeffA').val());
	var B = parseInt($('.coeffB').val());
	var D = parseInt($('.coeffD').val());
	if (A >= 0) {
		var yVal = A + D;
	}
	else {
		var yVal = A - D;
	}
	var vertex = ((-1 * B)/(2*A));
	var out = '(' + vertex.toString() + ' , ' + yVal.toString() + ')';
	return out;
}
function findVertical() {
	var vertical = parseInt($('.coeffD').val());
	return vertical;
}
function calcEllipse() {
	$('.EllipResults').empty();
	
	var type = findEllipType();
	var a = findEllipA();
	var b = findEllipB();
	var c = findEllipC();
	var r = findEllipR();
	var center = findEllipCenter();
	var area = findEllipArea();
	var sMajAxis = findEllipMajAxis();
	var sMinAxis = findEllipMinAxis();
	var foci = findEllipFoci();
	var vertices = findEllipVertices();
	
	displayEllipResults(type, a, b, c, r, center, area, sMajAxis, sMinAxis, foci, vertices);
}
function drawEllipse() {
	$('#ellipseDraw').empty();
	var a = findEllipA();
	var b = findEllipB();
	var rx;
	var ry;
	if (a > b) {
		rx = a;
		ry = b;
	}
	else {
		rx = b;
		ry = a;
	}
	d3.select('#ellipseDraw')
	.append('svg')
	.attr('width', 720)
	.attr('height', 500)
	.style('background', '#bce8f1')
	.append('ellipse')
	.attr('cx', 360)
	.attr('cy', 250)
	.attr('rx', rx*10)
	.attr('ry', ry*10)
	.style('fill', '#d9edf7')
	.style('stroke', '#31708f')
	.style('stroke-width', '1%')
}
function findEllipA() {
	var A = parseInt($('.EllipA').val());
	var a = Math.sqrt(A);
	return a.toFixed(2);
}
function findEllipB() {
	var B = parseInt($('.EllipB').val());
	var b = Math.sqrt(B);
	return b.toFixed(2);
}
function findEllipC() {
	var A = parseInt($('.EllipA').val());
	var B = parseInt($('.EllipB').val());
	if (A > B) {
		var C = A - B;
	}
	else {
		var C = B - A;
	}
	var c = Math.sqrt(C);
	return c.toFixed(2);
}
function findEllipR() {
	var R = parseInt($('.EllipR').val());
	var r = Math.sqrt(R);
	return r.toFixed(2);
}
function findEllipH() {
	var h = parseInt($('.EllipH').val());
	if (isNaN(h)) {
		return 0;
	}
	else {
		return h;
	}
}
function findEllipK() {
	var k = parseInt($('.EllipK').val());
	if (isNaN(k)) {
		return 0;
	}
	else {
		return k;
	}
}
function findEllipType() {
	var h = findEllipH();
	var k = findEllipK();
	if (h == 0 && k == 0) {
		return "At Center"
	}
	else {
		return "Off Center"
	}
}
function findEllipCenter() {
	var h = findEllipH();
	var k = findEllipK();
	return "(" + h + ' , ' + k + ')';
}
function findEllipArea() {
	var a = findEllipA();
	var b = findEllipB();
	var area = Math.PI * a * b;
	return area.toFixed(2);
}
function findEllipMajAxis() {
	var a = findEllipA();
	var b = findEllipB();
	console.log(a > b);
	if (a > b) {
		return a;
	}
	else if (b > a) {
		return b;
	}
	else {
		return a;
	}
}
function findEllipMinAxis() {
	var a = findEllipA();
	var b = findEllipB();
	if (a > b) {
		return b;
	}
	else if (b > a) {
		return a;
	}
	else {
		return b;
	}
}
function findEllipFoci() {
	var c = findEllipC();
	var h = findEllipH();
	var k = findEllipK();
	return "(" + h + " , " + ((k * 1) + (c * 1)) + ")" + " , " + "(" + h + " , " + (k - c) + ")";
}
function findEllipVertices() {
	var b = findEllipMajAxis();
	var h = findEllipH();
	var k = findEllipK();
	return "(" + h + " , " + ((k * 1) + (b * 1)) + ")" + " , " + "(" + h + " , " + (k - b) + ")";
}
function displayEllipResults(EllipType, a, b, c, r, center, area, sMajAxis, sMinAxis, foci, vertices) {
	$('.Ellip-type').append(EllipType);
	$('.Ellip-a').append('<td>' + a + '</td>');
	$('.Ellip-b').append('<td>' + b + '</td>');
	$('.Ellip-c').append('<td>' + c + '</td>');
	$('.Ellip-r').append('<td>' + r + '</td>');
	$('.Ellip-cent').append('<td>' + center + '</td>');
	$('.Ellip-area').append('<td>' + area + '</td>');
	$('.Ellip-sMajAxis').append('<td>' + sMajAxis + '</td>');
	$('.Ellip-sMinAxis').append('<td>' + sMinAxis + '</td>');
	$('.Ellip-foci').append('<td>' + foci + '</td>');
	$('.Ellip-vertices').append('<td>' + vertices + '</td>');
}
$(function() {
    function lawOfCosinesSideA(b, c, angleA) {
        return Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(angleA));
    }

    function lawOfCosinesSideB(a, c, angleB) {
        return Math.sqrt(a * a + c * c - 2 * a * c * Math.cos(angleB));
    }

    function lawOfCosinesSideC(a, b, angleC) {
        return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC));
    }

    function lawOfSinesSideAGivenB(b, angleA, angleB) {
        return b * Math.sin(angleA) / Math.sin(angleB);
    }

    function lawOfSinesSideAGivenC(c, angleA, angleC) {
        return c * Math.sin(angleA) / Math.sin(angleC);
    }

    function lawOfSinesSideBGivenA(a, angleB, angleA) {
        return a * Math.sin(angleB) / Math.sin(angleA);
    }

    function lawOfSinesSideBGivenC(c, angleB, angleC) {
        return c * Math.sin(angleB) / Math.sin(angleC);
    }

    function lawOfSinesSideCGivenA(a, angleC, angleA) {
        return a * Math.sin(angleC) / Math.sin(angleA);
    }

    function lawOfSinesSideCGivenB(b, angleC, angleB) {
        return b * Math.sin(angleC) / Math.sin(angleB);
    }

    function lawOfSinesAngleAGivenB(a, angleB, b) {
        return Math.asin(a * Math.sin(angleB) / b);
    }

    function lawOfSinesAngleAGivenC(a, angleC, c) {
        return Math.asin(a * Math.sin(angleC) / c);
    }

    function lawOfSinesAngleBGivenA(b, angleA, a) {
        return Math.asin(b * Math.sin(angleA) / a);
    }

    function lawOfSinesAngleBGivenC(b, angleC, c) {
        return Math.asin(b * Math.sin(angleC) / c);
    }

    function lawOfSinesAngleCGivenA(c, angleA, a) {
        return Math.asin(c * Math.sin(angleA) / a);
    }

    function lawOfSinesAngleCGivenB(c, angleB, b) {
        return Math.asin(c * Math.sin(angleB) / b);
    }

    function findLastAngle(angleA, angleB) {
        return 180 - angleA - angleB;
    }

    var getDegrees = function(radians) {
        return radians * (180 / Math.PI);
    };

    var getRadians = function(degrees) {
        return degrees * (Math.PI / 180);
    };

    var round = function(num) {
        return Math.round(num * 1000) / 1000;
    };


    function checkInput() {
        $('.results, .message').empty();

        var a = parseInt($('.js-input-a').val());
        var b = parseInt($('.js-input-b').val());
        var c = parseInt($('.js-input-c').val());
        var aRad = getRadians(parseInt($('.js-input-angle-a').val()));
        var bRad = getRadians(parseInt($('.js-input-angle-b').val()));
        var cRad = getRadians(parseInt($('.js-input-angle-c').val()));
        var filled = !isNaN(a) + !isNaN(b) + !isNaN(c) + !isNaN(aRad) + !isNaN(bRad) + !isNaN(cRad);

        if (filled === 3) {
            getMissingSides(a, b, c, aRad, bRad, cRad);
        } else if (filled > 3 || filled < 3) {
            $('.message').append('Give exactly 3 pieces of information');
        }
    }

    function getMissingSides(a, b, c, aRad, bRad, cRad) {
        var aDeg,
            bDeg,
            cDeg;

        // 1 side given
        if (!isNaN(a) && isNaN(b) && isNaN(c)) {                                       // a
            console.log('1 side given (a)');

            if (!isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                         // A B
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(bRad);
                cDeg = findLastAngle(aDeg, bDeg);
                cRad = getRadians(cDeg);
                b = lawOfSinesSideBGivenA(a, bRad, aRad);
                c = lawOfSinesSideCGivenA(a, cRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && !isNaN(cRad)) {                    // B C
                bDeg = getDegrees(bRad);
                cDeg = getDegrees(cRad);
                aDeg = findLastAngle(bDeg, cDeg);
                aRad = getRadians(aDeg);
                b = lawOfSinesSideBGivenA(a, bRad, aRad);
                c = lawOfSinesSideCGivenA(a, cRad, aRad);
                solveTriangle(a, b, c, aDeg, bDeg, cDeg);

            }
            else if (!isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                    // A C
                aDeg = getDegrees(aRad);
                cDeg = getDegrees(cRad);
                bDeg = findLastAngle(aDeg, cDeg);
                bRad = getRadians(bDeg);
                b = lawOfSinesSideBGivenA(a, bRad, aRad);
                c = lawOfSinesSideCGivenA(a, cRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        }
        else if (isNaN(a) && !isNaN(b) && isNaN(c)) {                                  // b
            console.log('1 side given (b)');

            if (!isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                         // A B
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(bRad);
                cDeg = findLastAngle(aDeg, bDeg);
                cRad = getRadians(cDeg);
                a = lawOfSinesSideAGivenB(b, aRad, bRad);
                c = lawOfSinesSideCGivenB(b, cRad, bRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && !isNaN(cRad)) {                    // B C
                bDeg = getDegrees(bRad);
                cDeg = getDegrees(cRad);
                aDeg = findLastAngle(bDeg, cDeg);
                aRad = getRadians(aDeg);
                a = lawOfSinesSideAGivenB(b, aRad, bRad);
                c = lawOfSinesSideCGivenB(b, cRad, bRad);
                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (!isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                    // A C
                aDeg = getDegrees(aRad);
                cDeg = getDegrees(cRad);
                bDeg = findLastAngle(aDeg, cDeg);
                bRad = getRadians(bDeg);
                a = lawOfSinesSideAGivenB(b, aRad, bRad);
                c = lawOfSinesSideCGivenB(b, cRad, bRad);
                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        } else if (isNaN(a) && isNaN(b) && !isNaN(c)) {                                // c
            console.log('one side given (c)');

            if (!isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                         // A B
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(bRad);
                cDeg = findLastAngle(aDeg, bDeg);
                cRad = getRadians(cDeg);
                a = lawOfSinesSideAGivenC(c, aRad, cRad);
                b = lawOfSinesSideBGivenC(c, bRad, cRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && !isNaN(cRad)) {                    // B C
                bDeg = getDegrees(bRad);
                cDeg = getDegrees(cRad);
                aDeg = findLastAngle(bDeg, cDeg);
                aRad = getRadians(aDeg);
                a = lawOfSinesSideAGivenC(c, aRad, cRad);
                b = lawOfSinesSideBGivenC(c, bRad, cRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (!isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                    // A C
                aDeg = getDegrees(aRad);
                cDeg = getDegrees(cRad);
                bDeg = findLastAngle(aDeg, cDeg);
                bRad = getRadians(bDeg);
                a = lawOfSinesSideAGivenC(c, aRad, cRad);
                b = lawOfSinesSideBGivenC(c, bRad, cRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        }
        // 2 sides given
        else if (!isNaN(a) && !isNaN(b) && isNaN(c)) {                                 // a b
            console.log('two sides given ab');

            if (!isNaN(aRad) && isNaN(bRad) && isNaN(cRad)) {                          // A
                bRad = lawOfSinesAngleBGivenA(b, aRad, a);
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(bRad);
                cDeg = findLastAngle(aDeg, bDeg);
                cRad = getRadians(cDeg);
                c = lawOfSinesSideCGivenA(a, cRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                     // B
                aRad = lawOfSinesAngleAGivenB(a, bRad, b);
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(bRad);
                cDeg = findLastAngle(aDeg, bDeg);
                cRad = getRadians(cDeg);
                c = lawOfSinesSideCGivenA(a, cRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                     // C
                cDeg = getDegrees(cRad);
                c = lawOfCosinesSideC(a, b, cRad);
                aDeg = getDegrees(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
                bDeg = 180 - cDeg - aDeg;

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        }
        else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {                                 // a c
            console.log('two sides given ac');

            if (!isNaN(aRad) && isNaN(bRad) && isNaN(cRad)) {                          // A
                cRad = lawOfSinesAngleCGivenA(c, aRad, a);
                aDeg = getDegrees(aRad);
                cDeg = getDegrees(cRad);
                bDeg = findLastAngle(aDeg, cDeg);
                bRad = getRadians(bDeg);
                b = lawOfSinesSideBGivenA(a, bRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                     // B
                bDeg = getDegrees(bRad);
                b = lawOfCosinesSideC(a, c, bRad);
                aDeg = getDegrees(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
                cDeg = 180 - aDeg - bDeg;

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                     // C
                aRad = lawOfSinesAngleAGivenC(a, cRad, c);
                aDeg = getDegrees(aRad);
                cDeg = getDegrees(cRad);
                bDeg = findLastAngle(aDeg, cDeg);
                bRad = getRadians(bDeg);
                b = lawOfSinesSideBGivenA(a, bRad, aRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        }
        else if (isNaN(a) && !isNaN(b) && !isNaN(c)) {                                 // b c
            console.log('two sides given bc');

            if (!isNaN(aRad) && isNaN(bRad) && isNaN(cRad)) {                          // A
                a = lawOfCosinesSideC(b, c, aRad);
                aDeg = getDegrees(aRad);
                bDeg = getDegrees(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
                cDeg = 180 - aDeg - bDeg;

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && !isNaN(bRad) && isNaN(cRad)) {                     // B
                cRad = lawOfSinesAngleCGivenB(c, bRad, b);
                bDeg = getDegrees(bRad);
                cDeg = getDegrees(cRad);
                aDeg = findLastAngle(bDeg, cDeg);
                aRad = getRadians(aDeg);
                a = lawOfSinesSideAGivenB(b, aRad, bRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
            else if (isNaN(aRad) && isNaN(bRad) && !isNaN(cRad)) {                     // C
                bRad = lawOfSinesAngleBGivenC(b, cRad, c);
                bDeg = getDegrees(bRad);
                cDeg = getDegrees(cRad);
                aDeg = findLastAngle(bDeg, cDeg);
                aRad = getRadians(aDeg);
                a = lawOfSinesSideAGivenB(b, aRad, bRad);

                solveTriangle(a, b, c, aDeg, bDeg, cDeg);
            }
        }
        // all sides given
        else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            aDeg = getDegrees(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
            bDeg = getDegrees(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
            cDeg = 180 - aDeg - bDeg;

            solveTriangle(a, b, c, aDeg, bDeg, cDeg);
        } else {
            $('.message').append('Give at least one side length');
        }
    }

    function solveTriangle(sideA, sideB, sideC, angleA, angleB, angleC) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            if (angleA > 0 && angleB > 0 && angleC > 0 && angleA + angleB + angleC === 180) {
                calculateTriangle(sideA, sideB, sideC, angleA, angleB, angleC);
            } else {
                $('.message').append('Unable to create triangle with given sides/angles');
            }
        } else {
            $('.message').append('Unable to create triangle with given sides/angles');
        }
    }

    function getTriangleType(sideA, sideB, sideC, angleA, angleB, angleC) {
        var type;

        if ((sideA === sideB && sideB === sideC) || angleA === angleB === angleC) {
            type = 'Equilateral (võrdkülgne)';
        }
        else if (sideA === sideB || sideA === sideC || sideB === sideC || angleA === angleB || angleA === angleC || angleB === angleC) {
            type = 'Isosceles (võrdhaarne)';
        }
        else if (sideA * sideA + sideB * sideB === sideC * sideC || angleA === 90 || angleB === 90 || angleC === 90) {
            type = 'Right (täisnurkne)';
        }
        else if (sideC * sideC < sideA * sideA + sideB * sideB) {
            type = 'Acute (Teravnurk)';
        }
        else if (sideC * sideC > sideA * sideA + sideB * sideB) {
            type = 'Obtuse (Nürinurk)';
        }
        else {
            type = 'Unknown'; // this should never show
        }

        return type;
    }

    function calculateTriangle(a, b, c, angleA, angleB, angleC) {
        var sp = (a + b + c) / 2;
        var area = round(Math.sqrt(sp * ((sp - a) * (sp - b) * (sp - c))));
        var circ = round(a + b + c);
        var type = getTriangleType(a, b, c, angleA, angleB, angleC);

        displayResults(type, circ, area, a, b, c, angleA, angleB, angleC);
    }

    function displayResults(type, circ, area, a, b, c, angleA, angleB, angleC) {
        $('.tri-type').append(type);
        $('.tri-circ').append(circ + ' units');
        $('.tri-area').append('<td>' + area + ' units&sup2;</td>');
        $('.tri-a').append('<td>' + round(a) + '</td>');
        $('.tri-b').append('<td>' + round(b) + '</td>');
        $('.tri-c').append('<td>' + round(c) + '</td>');
        $('.tri-angle-a').append('<td>' + round(angleA) + '&ordm</td>');
        $('.tri-angle-b').append('<td>' + round(angleB) + '&ordm</td>');
        $('.tri-angle-c').append('<td>' + round(angleC) + '&ordm</td>');
    }

    $('.btn').on('click', checkInput);
});