/** chunk id: 939846, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => es
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(731738),
    d = n(311907),
    c = n(554146),
    u = n(342494),
    A = n(397927),
    h = n(944791),
    _ = n(456412),
    m = n(55400),
    p = n(964486),
    g = n(260762),
    E = n(812771),
    I = n(869248),
    f = n(485947),
    C = n(726249),
    T = n(367727),
    N = n(379848),
    S = n(742589),
    x = n(831062),
    v = n(378570),
    y = n(138298),
    b = n(940382),
    O = n(210714),
    L = n(544028),
    R = n(780964),
    P = n(358776),
    j = n(840065),
    D = n(761640),
    M = n(734057),
    w = n(186111),
    U = n(954571),
    G = n(891024),
    k = n(321404),
    V = n(643015),
    B = n(336590),
    H = n(471271),
    F = n(957283),
    Y = n(411976),
    W = n(62112),
    q = n(790499),
    K = n(514426),
    z = n(660564),
    $ = n(4270),
    Q = n(687599),
    X = n(652215),
    Z = n(49999),
    J = n(355097),
    ee = n(985018),
    et = n(608486),
    en = n(370808);

function ei() {
    let e = r.useRef(null),
        t = (0, Y.W)(),
        n = (0, W.A)(),
        l = (0, B.k)(),
        d = (0, m.w)(),
        c = r.useCallback(() => {
            (0, A.showToast)((0, A.createToast)(ee.intl.string(ee.t["EDYbS+"]), A.ToastType.FAILURE))
        }, []),
        {
            rejectAll: u
        } = (0, H.t)({
            onError: c
        }),
        h = (0, g.A)("message-requests-list"),
        {
            channelId: _
        } = (0, F.N)(),
        p = r.useCallback(() => {
            u(n.map(e => e.channel.id))
        }, [n, u]),
        E = r.useCallback(e => {
            let {
                row: t
            } = e, r = n[t], s = n[t + 1]?.channel?.id, o = r.channel.id;
            return (0, i.jsx)(z.A, {
                index: t,
                className: a()({
                    [et.wH]: null != _ && _ === o,
                    [et.wZ]: null != _ && _ === s
                }),
                channel: r.channel,
                user: r.user,
                hasSingleMessageRequest: l
            }, o)
        }, [l, n, _]),
        I = r.useCallback(() => (0, i.jsxs)(f.A, {
            className: et.Gf,
            children: [t > 0 ? ee.intl.formatToPlainString(ee.t.rA4iWY, {
                count: t
            }) : ee.intl.string(ee.t.flPU6g), d && t > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(A.Text, {
                    className: et.sg,
                    variant: "eyebrow",
                    color: "text-default",
                    tag: "span",
                    children: "•"
                }), (0, i.jsx)(A.QWc, {
                    onClick: p,
                    textVariant: "text-sm/normal",
                    text: ee.intl.string(ee.t.p6t7RC),
                    "aria-label": ee.intl.string(ee.t.p6t7RC)
                })]
            }) : null]
        }, "title"), [t, p, d]);
    return (n.length !== t && x.A.increment({
        name: o.K.MESSAGE_REQUEST_COUNT_DRIFT
    }), 0 === n.length) ? (0, i.jsx)(K.A, {
        section: Q.zz.REQUESTS
    }) : (0, i.jsx)(s.hD, {
        navigator: h,
        children: (0, i.jsx)(s.PR, {
            children: t => {
                let {
                    ref: r,
                    role: l,
                    ...a
                } = t;
                return (0, i.jsx)(A.B8B, {
                    className: et.p_,
                    innerRole: l,
                    innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
                    ref: t => {
                        e.current = t, r.current = t?.getScrollerNode() ?? null
                    },
                    paddingTop: 24,
                    paddingBottom: 24,
                    sectionHeight: 26,
                    rowHeight: 73,
                    renderSection: I,
                    renderRow: E,
                    sections: [n.length],
                    chunkSize: 30,
                    fade: !0,
                    ...a
                }, "message-requests-list")
            }
        })
    })
}

function er(e) {
    let {
        pageWidth: t,
        onSidebarResize: n
    } = e, r = (0, d.bG)([D.Ay], () => D.Ay.getSidebarState(D.fe)), l = (0, d.bG)([M.A], () => M.A.getChannel(r?.channelId));
    if (null == r || r.type !== b.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - X.ItT;
    return (0, i.jsx)(E.A, {
        sidebarType: E.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, i.jsx)(I.A, {
            channel: l,
            baseChannelId: D.fe
        })
    })
}
let el = e => {
    let t = (0, V.A)();
    return (r.useEffect(() => {
        (0, T.Vh)(c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), null == e.targetElementRef.current || w.A.hasLayers() || (0, A.ueM)()) ? e.children : (0, i.jsx)(N.Ay, {
        contentTypes: [c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
        children: n => {
            let {
                visibleContent: r,
                markAsDismissed: l
            } = n, a = {
                position: "bottom",
                caretConfig: {
                    position: "top",
                    align: "center"
                },
                shouldShow: !0,
                onRequestClose: () => l(Z.i.USER_DISMISS),
                targetElementRef: e.targetElementRef
            };
            return r === c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK ? (0, i.jsxs)(i.Fragment, {
                children: [e.children, t ? (0, i.jsx)(u.AM, {
                    ...a,
                    title: ee.intl.string(ee.t.hRT8tc),
                    body: ee.intl.string(ee.t.apPgJG),
                    actions: [{
                        text: ee.intl.string(ee.t.LNoAQW),
                        onClick: () => l(Z.i.TAKE_ACTION)
                    }]
                }) : (0, i.jsx)(u.AM, {
                    ...a,
                    title: ee.intl.string(ee.t.hRT8tc),
                    body: ee.intl.string(ee.t["8JWods"]),
                    actions: [{
                        text: ee.intl.string(ee.t.JN6EOJ),
                        onClick: e => {
                            e.stopPropagation();
                            let t = (0, P.WJ)("MessageRequestCoachmark");
                            (0, j.openUserSettings)(t ? R.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING : R.X.CONTENT_AND_SOCIAL_PANEL, {
                                section: X.nc_.CONTENT_AND_SOCIAL,
                                scrollPosition: t ? void 0 : J.d1.MESSAGE_REQUESTS_V2
                            }), l(Z.i.TAKE_ACTION)
                        }
                    }, {
                        text: ee.intl.string(ee.t.LNoAQW),
                        onClick: () => l(Z.i.USER_DISMISS),
                        variant: "secondary"
                    }]
                })]
            }) : e.children
        }
    })
};

function ea(e) {
    let {
        section: t
    } = e;
    return t === Q.zz.SPAM ? (0, i.jsx)($.A, {}) : (0, i.jsx)(ei, {})
}
let es = (0, _.A)(function(e) {
    let {
        width: t
    } = e, n = (0, Y.W)();
    (0, p.Ay)(() => {
        h.I(X.BVt.MESSAGE_REQUESTS), (0, O.d)("message-requests"), U.default.track(X.HAw.MESSAGE_REQUESTS_VIEWED, {
            num_message_requests: n
        }), x.A.increment({
            name: o.K.MESSAGE_REQUEST_VIEW
        })
    });
    let l = (0, d.bG)([L.A], () => L.A.theme),
        s = (0, q.I)(),
        [c, u] = r.useState(!1),
        _ = (0, d.bG)([D.Ay], () => {
            let e = D.Ay.getSidebarState(D.fe);
            return null != e && e.type === b.PE.VIEW_MESSAGE_REQUEST ? e : null
        }),
        m = _?.channelId,
        g = null != _,
        E = (0, k.c)(m),
        I = (0, G.A)(m),
        f = r.useRef(null);
    r.useEffect(() => {
        null != m && !E && I && g && ((0, v.iN)(m), y.A.closeChannelSidebar(D.fe))
    }, [m, I, g, E]);
    let [T, N] = r.useState(Q.zz.REQUESTS), R = e => {
        N(e)
    };
    return (0, C.HU)({
        location: ee.intl.string(ee.t.e7GWjQ)
    }), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(en.TE, et.kL, {
                [en.js]: g,
                [en.jl]: g && c
            }),
            children: [(0, i.jsx)(A.NPJ, {
                theme: l,
                children: e => (0, i.jsxs)(S.A, {
                    className: e,
                    toolbar: !0,
                    children: [(0, i.jsx)(S.A.Icon, {
                        icon: A.u6c,
                        "aria-hidden": !0
                    }), (0, i.jsx)(el, {
                        targetElementRef: f,
                        children: (0, i.jsx)(S.A.Title, {
                            ref: f,
                            children: ee.intl.string(ee.t.e7GWjQ)
                        })
                    }), (0, i.jsx)(S.A.Divider, {}), (0, i.jsxs)(A.VQ0, {
                        "aria-label": ee.intl.string(ee.t.e7GWjQ),
                        selectedItem: T,
                        type: "top-pill",
                        onItemSelect: R,
                        children: [(0, i.jsx)(A.VQ0.Item, {
                            id: Q.zz.REQUESTS,
                            className: et.AS,
                            children: ee.intl.string(ee.t["7RFcXZ"])
                        }), (0, i.jsx)(A.VQ0.Item, {
                            id: Q.zz.SPAM,
                            className: et.AS,
                            children: 0 === s ? ee.intl.string(ee.t.ulKXHp) : ee.intl.formatToPlainString(ee.t["5jtrlZ"], {
                                count: s
                            })
                        })]
                    })]
                })
            }), (0, i.jsx)("div", {
                className: en.Qs,
                children: (0, i.jsx)(ea, {
                    section: T
                })
            })]
        }), g && (0, i.jsx)(er, {
            pageWidth: t,
            onSidebarResize: (e, t) => {
                u(t)
            }
        })]
    })
})