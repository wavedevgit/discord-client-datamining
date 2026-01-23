/** Chunk was on 31748 **/
/** chunk id: 857341, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(383501),
    s = n(798286),
    c = n(814278),
    u = n(998759),
    d = n(75811),
    f = n(930840);
n(603266);
var p = n(985018),
    g = n(922401);

function m(e) {
    let {
        channelId: t
    } = e, n = (0, i.bG)([o.A], () => {
        var e;
        return null == (e = o.A.getSecureFramesState()) ? void 0 : e.epochAuthenticator
    }), m = (0, u.z)({
        fingerprintBase64: n,
        chunkSize: 5,
        desiredLength: 30
    }), _ = l.useCallback(() => {
        (0, s.k0)({
            channelId: t
        })
    }, [t]);
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [(0, r.jsxs)("div", {
            className: g.Tc,
            children: [(0, r.jsx)(a.XAi, {
                size: "xxs",
                color: a.LU0.colors.TEXT_FEEDBACK_POSITIVE
            }), (0, r.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: p.intl.string(p.t["3BogKe"])
            })]
        }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: p.intl.string(p.t.B9JNsl)
        }), (0, r.jsxs)("div", {
            className: g.wx,
            children: [(0, r.jsx)(a.Heading, {
                variant: "text-sm/bold",
                color: "text-strong",
                children: p.intl.string(p.t.cTQI5t)
            }), null != m && (0, r.jsx)(f.c, {
                chunks: m,
                color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css,
                onCopy: _
            })]
        }), (0, r.jsx)(d.j, {
            className: g.aY,
            chunks: m,
            columns: 3
        }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: p.intl.format(p.t.wKxADe, {
                helpArticle: (0, c.aW)()
            })
        })]
    })
}