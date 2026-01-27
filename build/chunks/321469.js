/** Chunk was on web.js **/
/** chunk id: 321469, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var i = n(540239);

function a(e) {
    let {
        disabled: t,
        deviceId: n,
        width: a,
        height: o
    } = e;
    return t ? (0, r.jsx)("div", {
        className: "media-engine-video",
        style: {
            width: a,
            height: o
        }
    }) : (0, r.jsx)(i.A, {
        streamId: n,
        style: {
            width: a,
            height: o
        }
    })
}
a.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
}