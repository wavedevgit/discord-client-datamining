/** Chunk was on 41727 **/
/** chunk id: 978914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => f
}), n(896048);
var r = n(735438),
    l = n.n(r),
    i = n(311907),
    s = n(562465),
    a = n(73153),
    o = n(320501),
    c = n(222823),
    u = n(401565),
    d = n(652215);
let p = new Set,
    h = null;

function f(e) {
    var t;
    let {
        id: n
    } = e, {
        loaded: r,
        message: l,
        error: s
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
    }, [n]), a = (0, i.bG)([u.A], () => u.A.shouldLoadMessageRequestPreview(n), [n]);
    return !r && null == l && a && (t = n, p.add(t), null == h && (h = setTimeout(g, 0))), {
        loaded: r,
        error: s,
        message: l
    }
}
async function g() {
    try {
        for (; !l().isEmpty(p);) await m()
    } finally {
        h = null
    }
}
async function m() {
    let e = Array.from(p).slice(0, 25);
    try {
        let t = await s.Bo.get({
            url: d.Rsh.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: {
                channel_ids: e
            },
            rejectWithError: !0
        });
        a.h.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
            requestedChannelIds: e,
            supplementalData: t.body
        })
    } catch (t) {
        a.h.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
            requestedChannelIds: e
        })
    } finally {
        for (let t of e) p.delete(t)
    }
}