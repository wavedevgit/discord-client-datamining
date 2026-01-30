/** chunk id: 704824, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    U: () => c,
    j: () => l
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(824552),
    o = n(546183),
    s = n(403362);

function l(e, t) {
    let {
        disableFetch: n = !1
    } = null != t ? t : {}, l = (0, i.yK)([o.default], () => {
        var t;
        return null != (t = null == e ? void 0 : e.map(e => o.default.getNewestTokenForApplication(e)).filter(s.Vq)) ? t : []
    }, [e]), c = (0, i.bG)([o.default], () => {
        var t;
        return null != (t = null == e ? void 0 : e.every(e => o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED)) && t
    }, [e]), u = (0, i.yK)([o.default], () => {
        var t;
        return null != (t = null == e ? void 0 : e.filter(e => o.default.getFetchStateForApplication(e) === o.FetchState.NOT_FETCHED)) ? t : []
    }, [e]);
    return r.useEffect(() => {
        if (!n && 0 !== u.length)
            for (let e of u) a.A.fetchByApplicationId(e)
    }, [n, u]), {
        tokens: l,
        fetched: c
    }
}

function c(e, t) {
    let {
        tokens: n,
        fetched: i
    } = l(r.useMemo(() => null != e ? [e] : null, [e]), t);
    return {
        token: n.length > 0 ? n[0] : null,
        fetched: i
    }
}