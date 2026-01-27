/** Chunk was on 7453 **/
/** chunk id: 926956, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => w
});
var l = t(627968),
    r = t(64700),
    i = t(735438),
    a = t.n(i),
    o = t(311907),
    c = t(397927),
    s = t(334738),
    u = t(964486),
    d = t(915089),
    g = t(256587),
    p = t(71393),
    m = t(222823),
    v = t(954571),
    f = t(403362);
t(645034);
var h = t(661191),
    b = t(285059),
    y = t(770666),
    A = t(508654),
    j = t(614170),
    x = t(868711),
    O = t(823508),
    C = t(988794),
    E = t(652215),
    N = t(790782),
    P = t(985018),
    k = t(586426);

function w(e) {
    let {
        transitionState: n,
        onClose: i,
        guildId: w
    } = e, G = (0, d.GV)(), _ = (0, o.bG)([p.A], () => p.A.getGuild(w)), I = (0, y.A)(null == _ ? void 0 : _.id), S = (0, A.Ay)(w), T = r.useRef(m.Ay.ackMessageId(w, N.P.GUILD_EVENT)), D = (0, O.A)();
    return r.useEffect(() => {
        S.forEach(e => b.A.getGuildEventUserCounts(w, e.id, [])), b.A.getGuildEventsForCurrentUser(w)
    }, [S, w]), (0, u.Ay)(() => {
        v.default.track(E.HAw.OPEN_MODAL, {
            type: C.BV,
            guild_id: w,
            guild_events_count: S.length
        })
    }), r.useEffect(() => {
        a()(S).map(e => e.creator_id).filter(f.Vq).uniq().forEach(e => {
            g.A.requestMember(w, e)
        })
    }, [w, S]), r.useEffect(() => {
        null != w && (0, s.hK)(w, N.P.GUILD_EVENT)
    }, [w]), (0, l.jsxs)(c.EOs, {
        size: c.rIJ.MEDIUM,
        transitionState: n,
        "aria-labelledby": G,
        parentComponent: "GuildEventsModal",
        "data-migration-pending": !0,
        children: [(0, l.jsxs)(c.rQ0, {
            className: k.wx,
            "data-migration-pending": !0,
            children: [(0, l.jsx)(c.CTc, {
                size: "md",
                color: "currentColor",
                className: k.Kk
            }), (0, l.jsx)(c.Heading, {
                id: G,
                variant: "heading-md/semibold",
                children: S.length > 0 ? P.intl.formatToPlainString(P.t.IBdqSu, {
                    number: S.length
                }) : P.intl.string(P.t.tlopTM)
            }), I && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    className: k.yF,
                    children: "|"
                }), (0, l.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    onClick: () => {
                        (0, c.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([t.e("28136"), t.e("68587"), t.e("342"), t.e("68505")]).then(t.bind(t, 21653));
                            return n => {
                                var t, r;
                                return (0, l.jsx)(e, (t = function(e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            l = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))), l.forEach(function(n) {
                                            var l;
                                            l = t[n], n in e ? Object.defineProperty(e, n, {
                                                value: l,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : e[n] = l
                                        })
                                    }
                                    return e
                                }({}, n), r = r = {
                                    guildId: w
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, l)
                                    }
                                    return t
                                })(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }), t))
                            }
                        }, D)
                    },
                    text: P.intl.string(P.t["60lJ0C"])
                })]
            }), (0, l.jsx)(c.DUT, {
                onClick: i,
                className: k.gb,
                "aria-label": P.intl.string(P.t.cpT0Cq),
                children: (0, l.jsx)(c.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: k.Kk
                })
            })]
        }), (0, l.jsx)(c.$mQ, {
            className: k.Qs,
            "data-migration-pending": !0,
            children: S.length > 0 ? S.map(e => (0, l.jsx)(j.A, {
                guildEvent: e,
                onActionTaken: i,
                isNew: null != T.current && h.default.compare(e.id, T.current) > 0
            }, e.id)) : (0, l.jsx)(x.A, {
                guildId: w,
                onClose: i
            })
        })]
    })
}