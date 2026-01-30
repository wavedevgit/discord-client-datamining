/** chunk id: 428249, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => o,
    d: () => a
});
var r = n(843472),
    i = n(451909);

function a(e) {
    let {
        channel: t,
        content: n,
        entry: a,
        whenReady: o,
        doNotNotifyOnError: s,
        location: l
    } = e, c = i.Ay.parse(t, n), u = {
        unverified_content: a
    };
    return r.A.sendMessage(t.id, c, o, {
        contentInventoryEntry: u,
        doNotNotifyOnError: s,
        location: l
    })
}

function o(e) {
    let {
        channel: t,
        content: n,
        whenReady: a,
        doNotNotifyOnError: o,
        location: s
    } = e, l = i.Ay.parse(t, n);
    return r.A.sendMessage(t.id, l, a, {
        doNotNotifyOnError: o,
        location: s
    })
}