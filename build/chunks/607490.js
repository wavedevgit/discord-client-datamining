/** Chunk was on web.js **/
/** chunk id: 607490, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => u
});
var r = n(317374),
    i = n(681456),
    a = n(988440);

function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(n), !0).forEach(function(t) {
            l(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var c = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null
};

function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case r.Vw:
            return s(s({}, e), {}, {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1
            });
        case r.BS:
            return s(s({}, e), {}, {
                isSourcePublic: !0
            });
        case r.l6:
            return s(s({}, e), {}, {
                targetIds: n.targetIds
            });
        case i.v4:
            if (-1 === e.targetIds.indexOf(n.targetId)) return e;
            return s(s({}, e), {}, {
                targetIds: (0, a.FF)(e.targetIds, n.targetId)
            });
        case r.q2:
            return s(s({}, e), {}, {
                dropResult: n.dropResult,
                didDrop: !0,
                targetIds: []
            });
        case r.dU:
            return s(s({}, e), {}, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return e
    }
}