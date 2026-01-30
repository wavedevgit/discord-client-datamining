/** chunk id: 683071, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    w: () => o
});
var r = n(627968);
n(64700);
var i = n(512950);

function a(e) {
    switch (e) {
        case "critical":
            return i.Y.ERROR;
        case "warning":
            return i.Y.WARNING;
        case "info":
            return i.Y.INFO;
        case "success":
            return i.Y.POSITIVE
    }
}

function o(e) {
    let {
        type: t,
        hidden: n,
        children: o
    } = e;
    return (0, r.jsx)(i.p, {
        messageType: a(t),
        hidden: n,
        children: o
    })
}