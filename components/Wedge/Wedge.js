import React, { PropTypes } from 'react'
import {
    ART,
    View,
    Text
} from 'react-native';
const {
    Shape,
    Path,
    Surface
} = ART;


const circleRadians=Math.PI * 2;
const radiansPerDegree=Math.PI / 180;

_degreesToRadians=(degrees)=> {
    if (degrees !== 0 && degrees % 360 === 0) {
        return this.circleRadians;
    } else {
        return degrees * radiansPerDegree % circleRadians;
    }
};

_createCirclePath=(or, ir) =>{
    const path = Path();
    path.move(0, or)
        .arc(or * 2, 0, or)
        .arc(-or * 2, 0, or);
    if (ir) {
        path.move(or - ir, 0)
            .counterArc(ir * 2, 0, ir)
            .counterArc(-ir * 2, 0, ir);
    }
    path.close();
    return path;

};


_createArcPath=(startAngle, endAngle, or, ir)=> {
    const path = Path();
    const sa = this._degreesToRadians(startAngle);
    const ea = this._degreesToRadians(endAngle);
    const ca = sa > ea ? circleRadians - sa + ea : ea - sa;

    const ss = Math.sin(sa);
    const es = Math.sin(ea);
    const sc = Math.cos(sa);
    const ec = Math.cos(ea);

    const ds = es - ss;
    const dc = ec - sc;
    const dr = ir - or;

    const large = ca > Math.PI;

    path.move(or + or * ss, or - or * sc)
        .arc(or * ds, or * -dc, or, or, large)
        .line(dr * es, dr * -ec);
    if (ir) {
        path.counterArc(ir * -ds, ir * dc, ir, ir, large);
    }
    return path;
};

const Wedge=({ startAngle, endAngle, innerRadius, outerRadius ,fill})=>{
    if (startAngle - endAngle === 0) {
        return;
    }

    const ir = Math.min(innerRadius, outerRadius);
    const or = Math.max(innerRadius, outerRadius);

    let path;
    if (endAngle >= startAngle + 360) {
        path = this._createCirclePath(or, ir);
    } else {
        path = this._createArcPath(startAngle, endAngle, or, ir);
    }

    return   <Surface width={outerRadius * 2} height={outerRadius * 2}>
        <Shape {...this.props} d={path} fill={fill}/>
    </Surface>
};

export default Wedge;

Wedge.defaultProps = {
    outerRadius:70,
    innerRadius:50,
    startAngle:10,
    endAngle:180,
    fill:'yellow',
};














