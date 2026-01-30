/** chunk id: 869186, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => g
}), n(896048), n(321073);
var r = n(64700),
    i = n(179771),
    a = n(311907),
    o = n(824552),
    s = n(155718),
    l = n(842209),
    c = n(361926),
    u = n(768879),
    d = n(546183);
n(47325);
var f = n(735991),
    p = n(360469),
    _ = n(73510);
let h = {
        commandTypes: [s.kc.CHAT, s.kc.PRIMARY_ENTRY_POINT]
    },
    m = {
        placeholderCount: 0,
        limit: _.Hi,
        includeFrecency: !0
    };

function g(e) {
    let {
        context: t,
        onlyActivityApps: n,
        allowCommandFetch: r,
        includeAuthorizedAppsAndFetch: i
    } = e, {
        sectionDescriptors: a,
        loading: o
    } = l.cu({
        context: t,
        filters: h,
        options: m,
        allowFetch: r
    });
    return {
        loading: o,
        frecentApps: E({
            sectionDescriptors: a,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: i
        })
    }
}

function E(e) {
    let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: s,
        includeAuthorizedAppsAndFetch: l
    } = e, h = (0, a.bG)([d.default], () => d.default.getFetchState());
    r.useEffect(() => {
        l && h === d.FetchState.NOT_FETCHED && o.A.fetch()
    }, [l, h]);
    let m = (0, a.yK)([d.default], () => l ? d.default.getNewestTokens().filter(e => e.scopes.includes(i.F.APPLICATIONS_COMMANDS)) : []),
        g = t.filter(e => e.id !== _.Ik.FRECENCY && e.id !== _.Ik.BUILT_IN),
        E = "contextless" === n.type,
        y = r.useMemo(() => {
            let e = [];
            return E && e.push(p.gq), e
        }, [E]),
        b = (0, u.I)(g, m);
    return r.useMemo(() => s ? b.filter(e => null != e.application && (0, f.Ag)(e.application) && null != (0, c.eI)(n, e.id)).filter(e => !y.includes(e.id)) : b.filter(e => !y.includes(e.id)), [s, b, n, y])
}