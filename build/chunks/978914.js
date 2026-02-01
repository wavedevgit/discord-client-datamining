/** chunk id: 978914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => f
}), n(896048);
var l = n(735438),
    r = n.n(l),
    i = n(311907),
    a = n(562465),
    s = n(73153),
    o = n(320501),
    c = n(222823),
    u = n(401565),
    d = n(652215);
let h = new Set,
    p = null;

function f(e) {
    var t;
    let {
        id: n
    } = e, {
        loaded: l,
        message: r,
        error: a
    } = (0, i.cf)([u.A, o.A, c.Ay], () => {
        let e = c.Ay.lastMessageId(n),
            t = u.A.getMessageRequestPreview(n);
        if (null == t.message && null != e) {
            let t = o.A.getMessage(n, e);
            if (null != t) return {
                loaded: !0,
                error: !1,
                message: t
            }
        }
        return t
    }, [n]), s = (0, i.bG)([u.A], () => u.A.shouldLoadMessageRequestPreview(n), [n]);
    return !l && null == r && s && (t = n, h.add(t), null == p && (p = setTimeout(m, 0))), {
        loaded: l,
        error: a,
        message: r
    }
}
async function m() {
    try {
        for (; !r().isEmpty(h);) await g()
    } finally {
        p = null
    }
}
async function g() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await a.Bo.get({
            url: d.Rsh.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: {
                channel_ids: e
            },
            rejectWithError: !0
        });
        s.h.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
            requestedChannelIds: e,
            supplementalData: t.body
        })
    } catch (t) {
        s.h.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
            requestedChannelIds: e
        })
    } finally {
        for (let t of e) h.delete(t)
    }
}