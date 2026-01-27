/** Chunk was on web.js **/
/** chunk id: 965042, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    openPlayground: () => d,
    openPlaygroundFromParsedUrl: () => f
}), n(896048), n(747238);
var r = n(398590),
    i = n(186111),
    a = n(287809),
    o = n(944771),
    s = n(3258),
    l = n(652215);

function c(e) {
    for (let t of o.componentPlaygroundConfigs) {
        let n = t.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
        if (null != n) return n.id
    }
    return null
}

function u(e, t) {
    for (let n of o.componentPlaygroundConfigs) {
        let r = n.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
        if (null != r)
            for (let e of r.groups) {
                let n = e.stories.find(e => e.id.toLowerCase() === t.toLowerCase());
                if (null != n) return n.id
            }
    }
    return null
}

function d(e, t) {
    let n = a.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return !1;
    let o = null != e ? c(e) : null,
        d = null != o && null != t ? u(o, t) : null;
    return s.PlaygroundStore.setState({
        selectedCollection: o,
        selectedStory: d
    }), i.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND), !0
}

function f(e) {
    let {
        match: t
    } = e;
    return d(t.collection, t.story)
}