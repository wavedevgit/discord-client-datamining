/** chunk id: 210954, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(536246),
    c = n(398866),
    u = n(793574),
    d = n(688810),
    f = n(429913),
    p = n(869146),
    _ = n(272812),
    h = n(461782),
    m = n(334463),
    g = n(625180),
    E = n(91242),
    y = n(113192),
    b = n(165610),
    O = n(652215),
    v = n(360469),
    A = n(463967),
    I = n(319567),
    S = n(976092);

function T(e) {
    let {
        isLoading: t
    } = e, n = (0, o.bG)([E.A], () => E.A.getConnectedFrame()), i = (0, o.bG)([E.A], () => E.A.getFrameLayoutMode()), u = (0, f.h)(null == n ? void 0 : n.applicationId), d = (0, o.bG)([E.A], () => null != u && E.A.isProxyTicketRefreshing(u.id), [u]), T = (0, o.bG)([p.A], () => p.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT)), C = (0, o.bG)([m.A], () => m.A.isFrameHidden()), N = i === b.y.PIP && !C && !T, w = N && null != m.A.pipVideoWindow && null != m.A.pipFrameWindow;
    if (null == n || null == u || T) return null;
    let R = {
        instance_id: "example-cl-instance",
        platform: v.vu.DESKTOP
    };

    function P(e) {
        let {
            onActive: t,
            onForceIdle: i,
            idle: a
        } = e;
        return N && null != n ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                onMouseMove: t,
                onMouseDown: t,
                onMouseLeave: i,
                className: A.OB
            }), (0, r.jsx)(y.v, {
                idle: a,
                onMouseMove: t,
                onMouseDown: t,
                onMouseLeave: i,
                onFocus: () => {
                    g.A.updateFrameLayoutMode({
                        applicationId: n.applicationId,
                        layoutMode: b.y.FOCUSED
                    })
                },
                applicationId: n.applicationId
            })]
        }) : null
    }
    return null != n.proxyTicket && (R.discord_proxy_ticket = n.proxyTicket), (0, r.jsx)(h.Ay, {
        timeout: 2e3,
        children: e => {
            let {
                idle: i,
                onActive: o,
                onForceIdle: f
            } = e;
            return (0, r.jsxs)(_.A, {
                className: a()(A.zr, {
                    [A.NW]: N,
                    [S.a8]: N,
                    [I.N7]: i,
                    [A.p0]: N,
                    [A.R]: C,
                    [A.Gq]: w
                }),
                noBorder: !N,
                children: [(0, r.jsx)("div", {
                    className: "theme-dark",
                    children: P({
                        onActive: o,
                        onForceIdle: f,
                        idle: i
                    })
                }), t || d ? (0, r.jsx)(s.y$y, {
                    className: a()(A.pU, {
                        [A.p0]: N
                    })
                }) : (0, r.jsx)(c.o, {
                    allowPopups: (0, l.b)(u),
                    referrerPolicy: "origin",
                    url: n.url,
                    queryParams: R,
                    className: a()(A.pU, {
                        [A.p0]: N,
                        [A.v8]: N
                    }),
                    shouldRefocus: !N
                })]
            })
        }
    })
}
let C = () => {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(u.A.FRAME_PIP), t = (0, o.bG)([E.A], () => E.A.isFrameActive());
    return (0, r.jsx)(d.f5, {
        value: e,
        children: (0, r.jsx)(T, {
            isLoading: !t
        })
    })
}