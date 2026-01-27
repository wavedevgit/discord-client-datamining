/** Chunk was on web.js **/
/** chunk id: 116811, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(643479),
    i = n(801765),
    a = n(105423);
let o = 27,
    s = {
        read: l,
        SHOT_INFO_AUTO_ROTATE: 27
    };

function l(e, t, n, o, s) {
    let l = (0, i.y)(e, a.lt, t, t + n, o, s);
    return l.ShotInfo && (l = (0, r.dP)({}, l, c(l.ShotInfo.value)), delete l.ShotInfo), l
}

function c(e) {
    let t = {};
    return void 0 !== e[o] && (t.AutoRotate = {
        value: e[o],
        description: u(e[o])
    }), t
}

function u(e) {
    return 0 === e ? "None" : 1 === e ? "Rotate 90 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 270 CW" : "Unknown"
}