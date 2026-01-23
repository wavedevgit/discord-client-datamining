/** Chunk was on 71138 **/
/** chunk id: 33135, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => k
}), r(321073), r(896048), r(114821), r(339614), r(667532);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    l = r.n(i),
    s = r(311907),
    o = r(397927),
    d = r(233545),
    c = r(83257),
    u = r(361739),
    m = r(235986),
    p = r(97469),
    y = r(544028),
    h = r(734057),
    g = r(696451),
    A = r(383501),
    f = r(412780),
    v = r(287809),
    b = r(427262),
    C = r(817006),
    E = r(121614),
    x = r(663272),
    D = r(820931),
    R = r(307414),
    F = r(244920),
    S = r(652215),
    j = r(731854),
    P = r(985018),
    N = r(518959);

function I(e, t, r, a, i) {
    let s = [];
    if (null == t) return s;
    let {
        transport: c,
        rtp: {
            inbound: p,
            outbound: y
        },
        camera: h
    } = t;
    if (s.push({
            section: u.Fq.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOC, {
                context: e
            })
        }), null != c && s.push({
            section: (0, f.Xi)(e, S.zWA.TRANSPORT, r),
            label: P.intl.string(P.t.wU9IN2),
            element: F.A,
            elementProps: {
                context: e,
                index: r
            }
        }), null == y || l().isEmpty(y) || s.push({
            section: (0, f.Xi)(e, S.zWA.OUTBOUND, r),
            label: P.intl.string(P.t["3u0gII"]),
            element: D.A,
            elementProps: {
                context: e,
                index: r
            }
        }), null != h && s.push({
            section: (0, f.Xi)(e, S.zWA.CAMERA, r),
            label: P.intl.string(P.t["2AGBWH"]),
            element: C.A,
            elementProps: {
                context: e,
                index: r,
                camera: h
            }
        }), null != p && !l().isEmpty(p)) {
        let t = [];
        Object.keys(p).forEach(l => {
            let s, c = v.default.getUser(l),
                u = g.Ay.getNick(i, l),
                y = (0, f.Xi)(e, l, r);
            null != p[l] && p[l].length > 0 && t.push({
                section: y,
                label: null != c ? (0, n.jsx)(m.A, {
                    align: m.A.Align.CENTER,
                    children: (0, n.jsx)(m.A.Child, {
                        children: (0, n.jsxs)(m.A, {
                            align: m.A.Align.CENTER,
                            children: [(0, n.jsx)(o.euF, {
                                size: o._3J.SIZE_24,
                                src: c.getAvatarURL(i, 24),
                                "aria-label": c.username,
                                className: N.my
                            }), (0, n.jsx)("span", {
                                className: N.Xh,
                                children: null != u ? u : b.Ay.getName(c)
                            })]
                        })
                    })
                }) : (s = null != u ? u : l, (0, n.jsx)(m.A, {
                    align: m.A.Align.CENTER,
                    children: (0, n.jsx)(m.A.Child, {
                        children: (0, n.jsx)(m.A, {
                            align: m.A.Align.CENTER,
                            children: (0, n.jsx)("span", {
                                className: N.Xh,
                                children: s
                            })
                        })
                    })
                })),
                ariaLabel: null != c ? c.tag : l,
                onClick: () => {
                    d.c4(y)
                },
                element: x.A,
                elementProps: {
                    context: e,
                    index: r,
                    videoStreams: a
                }
            })
        }), t.length > 0 && (s.push({
            section: u.Fq.HEADER,
            label: P.intl.string(P.t.SJmZaq)
        }), s.push(...t))
    }
    return s
}

function k() {
    var e, t;
    let {
        defaultStats: r,
        streamStats: i
    } = (0, s.bG)([f.Ay], () => ({
        defaultStats: f.Ay.getAllStats(j.x.DEFAULT),
        streamStats: f.Ay.getAllStats(j.x.STREAM)
    }), [], s.My), l = (0, s.bG)([A.A, h.A], () => h.A.getChannel(A.A.getChannelId())), m = null == (e = r.concat(i).find(e => null != e.screenshare)) ? void 0 : e.screenshare, g = null == (t = i.find(e => null != e.clips)) ? void 0 : t.clips, v = (0, s.bG)([y.A], () => y.A.theme), b = (0, p.NC)(), C = (0, s.bG)([f.Ay], () => f.Ay.getSection()), x = function(e) {
        let {
            defaultStats: t,
            streamStats: r,
            videoStreams: a,
            screenshare: i,
            clips: l,
            channel: s,
            connectionState: d
        } = e, c = t.flatMap((e, t) => I(j.x.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())), m = r.flatMap((e, t) => I(j.x.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())), p = [], y = [], h = {
            section: u.Fq.DIVIDER
        };
        return null != i && (p.push(h), p.push({
            section: S.zWA.SCREENSHARE,
            label: P.intl.string(P.t["gWbr/U"]),
            element: R.A,
            elementProps: {
                screenshare: i
            }
        })), null != l && (y.push(h), y.push({
            section: S.zWA.CLIPS,
            label: P.intl.string(P.t.MKrFKE),
            element: E.A,
            elementProps: {
                clips: l
            }
        })), m.length > 0 && m.unshift(h), [...null != s ? [{
            section: u.Fq.CUSTOM,
            label: "Channel Name",
            element: () => (0, n.jsx)(o.Heading, {
                className: N.HA,
                variant: "heading-lg/semibold",
                children: s.name
            })
        }] : [], {
            section: u.Fq.CUSTOM,
            label: "Connection State",
            element: () => (0, n.jsx)(o.Heading, {
                className: N.HA,
                variant: "heading-md/normal",
                children: d === S.S7L.RTC_CONNECTED ? "Connected" : "Disconnected"
            })
        }, ...c, ...m, ...p, ...y]
    }({
        defaultStats: r,
        streamStats: i,
        videoStreams: (0, s.bG)([f.Ay], () => f.Ay.getVideoStreams()),
        screenshare: m,
        clips: g,
        channel: l,
        connectionState: (0, s.bG)([A.A], () => A.A.getState())
    });
    return a.useEffect(() => () => {
        d.VN()
    }, []), (0, n.jsx)(c.Ay, {
        theme: v,
        sidebarTheme: b,
        section: C,
        onSetSection: d.c4,
        sections: x
    })
}