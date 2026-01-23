/** Chunk was on 31748 **/
/** chunk id: 763845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(457529);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(205693),
    s = n(397927),
    c = n(233545),
    u = n(229659),
    d = n(253932),
    f = n(430452),
    p = n(954571),
    g = n(957565),
    m = n(975571),
    _ = n(917592),
    h = n(652215),
    y = n(731854),
    A = n(985018),
    b = n(101937);
let E = () => {
        f.A.getMediaEngine().once(o.bg.ConnectionStats, e => {
            let t = JSON.stringify(Object.values(y.x).map(t => {
                let n = e.filter(e => {
                    let {
                        connection: n
                    } = e;
                    return n.context === t
                }).map((e, n) => {
                    let r = e.stats;
                    return r.context = t, r.index = n, r
                });
                for (let e of n) {
                    var r;
                    (null == e || null == (r = e.transport) ? void 0 : r.localAddress) != null && (e.transport.localAddress = "(redacted)")
                }
                return n
            }).filter(e => e.length > 0), null, 2);
            (0, g.C)(t, () => (0, s.showToast)((0, s.createToast)(A.intl.string(A.t.t5VZ88), s.ToastType.SUCCESS)))
        })
    },
    v = function(e) {
        (0, l.useEffect)(() => {
            p.default.track(h.HAw.OPEN_POPOUT, {
                type: "RTC Connection"
            })
        }, []);
        let t = (0, l.useCallback)(() => {
                let {
                    closePopout: t
                } = e;
                null != t && t(), c.ho()
            }, [e]),
            n = (0, l.useCallback)(() => {
                let {
                    hostname: t,
                    averagePing: n,
                    lastPing: i,
                    outboundLossRate: o
                } = e, s = d.Q_.getSetting();
                return (0, r.jsxs)(l.Fragment, {
                    children: [s && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            className: b.o0,
                            children: (0, r.jsx)(u.A, {
                                dataPoints: e.pings,
                                width: 258,
                                height: 80
                            })
                        }), (0, r.jsx)("div", {
                            className: b.xB,
                            children: (0, r.jsx)("strong", {
                                children: _.A.getShortHostname(t)
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: b.xB,
                        children: A.intl.format(A.t["X58/lN"], {
                            averagePing: n.toFixed(0)
                        })
                    }), null != i ? (0, r.jsx)("div", {
                        className: b.xB,
                        children: A.intl.format(A.t["6iv2TF"], {
                            lastPing: i.toFixed(0)
                        })
                    }) : null, null != o ? (0, r.jsx)("div", {
                        className: b.xB,
                        children: A.intl.format(A.t["VIBJM+"], {
                            outboundLossRate: o.toFixed(1)
                        })
                    }) : null, (0, r.jsxs)("div", {
                        className: a()(b.xB, b.xJ),
                        children: [null == o ? A.intl.formatToPlainString(A.t.vggaMt, {
                            badPing: 250
                        }) : null, null != o ? A.intl.formatToPlainString(A.t["3pFz1P"], {
                            badPing: 250,
                            badLossRate: 10
                        }) : null]
                    })]
                })
            }, [e]),
            {
                connectionState: i,
                connectionTypeText: o
            } = e,
            g = d.Q_.getSetting(),
            v = {
                [h.S7L.AWAITING_ENDPOINT]: A.intl.format(A.t.Eu2vUR, {
                    url: h.qF7.STATUS
                }),
                [h.S7L.CONNECTING]: A.intl.string(A.t["y+E8aD"]),
                [h.S7L.AUTHENTICATING]: A.intl.string(A.t["5lGIZH"]),
                [h.S7L.DISCONNECTED]: A.intl.string(A.t.fOX25I),
                [h.S7L.RTC_CONNECTING]: A.intl.string(A.t.b5Ubd5),
                [h.S7L.ICE_CHECKING]: A.intl.format(A.t.SyoYUb, {
                    url: m.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
                }),
                [h.S7L.DTLS_CONNECTING]: A.intl.format(A.t.SyoYUb, {
                    url: m.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
                }),
                [h.S7L.RTC_CONNECTED]: n,
                [h.S7L.NO_ROUTE]: A.intl.format(A.t["2tgQnk"], {
                    url: m.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
                }),
                [h.S7L.RTC_DISCONNECTED]: A.intl.string(A.t.fOX25I)
            } [i];
        return (0, r.jsxs)(r.Fragment, {
            children: ["function" == typeof v ? v() : (0, r.jsx)("p", {
                className: a()(b.xB, b.xJ),
                children: v
            }), (0, r.jsx)("hr", {
                className: b.me
            }), (0, r.jsxs)("div", {
                className: b.Vf,
                children: [(0, r.jsxs)("span", {
                    className: a()(b.uO, b.ro),
                    children: [(0, r.jsx)(s.XAi, {
                        size: "xxs",
                        color: s.LU0.colors.TEXT_FEEDBACK_POSITIVE.css,
                        className: b.__invalid_icon
                    }), o]
                }), g && f.A.supports(y.O5.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.MzZ, {
                        className: a()(b.Ce, b.ro),
                        onClick: t,
                        children: [A.intl.string(A.t.KBoWg9), (0, r.jsx)(s.tfB, {
                            size: "xxs",
                            color: "currentColor",
                            className: b.__invalid_icon
                        })]
                    }), (0, r.jsxs)(s.MzZ, {
                        className: a()(b.d3, b.ro),
                        onClick: E,
                        title: "Copy to clipboard",
                        children: [A.intl.string(A.t["XEb+Sj"]), (0, r.jsx)(s.TdU, {
                            size: "xxs",
                            color: "currentColor",
                            className: b.__invalid_icon
                        })]
                    })]
                }), !g && !__OVERLAY__ && (0, r.jsx)(s.MzZ, {
                    className: b.Ce,
                    href: m.A.getArticleURL(h.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                    children: A.intl.string(A.t.hvVgAZ)
                })]
            })]
        })
    }