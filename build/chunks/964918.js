/** chunk id: 964918 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(730134),
    h = n(378570),
    A = n(863005),
    _ = n(707539),
    m = n(747926),
    p = n(576705),
    g = n(222823),
    f = n(287809),
    x = n(486020),
    E = n(661191),
    I = n(652215),
    C = n(37411),
    N = n(985018),
    T = n(703046),
    S = n(467935);

function b(e) {
    let {
        channel: t
    } = e, s = (0, d.yK)([A.A, g.Ay, p.A], () => {
        let e = A.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
        return o()(A.A.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(o().values(A.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && p.A.can(I.xBc.VIEW_CHANNEL, t)).sort((e, t) => {
            let n = g.Ay.lastMessageId(e.id),
                i = g.Ay.lastMessageId(t.id);
            return E.default.compare(n, i)
        }).reverse().value()
    }), r = t.isForumLikeChannel() ? 5 : 3, u = t.isForumLikeChannel() ? c.bSJ : c.ysw;
    return l.useEffect(() => {
        (0, _.TE)()
    }, []), (0, i.jsxs)("div", {
        className: a()(S.popover, T.SW),
        children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: T.DD,
            children: t.isForumLikeChannel() ? N.intl.string(N.t.ioVdO2) : N.intl.string(N.t.VNYs2v)
        }), (0, i.jsxs)("div", {
            className: T.p_,
            children: [s.slice(0, t.isForumLikeChannel() ? s.length : r).map(e => (0, i.jsx)(v, {
                thread: e
            }, e.id)).filter(e => l.isValidElement(e)).slice(0, r), (0, i.jsxs)(c.DUT, {
                className: T.nM,
                onClick: () => {
                    t.isForumLikeChannel() ? (0, h.iN)(t.id) : (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("65225").then(n.bind(n, 126768));
                        return n => (0, i.jsx)(e, {
                            channel: t,
                            ...n
                        })
                    })
                },
                children: [(0, i.jsx)("div", {
                    className: T.R4,
                    children: (0, i.jsx)(u, {
                        size: "custom",
                        className: T.Kk
                    })
                }), (0, i.jsx)("div", {
                    className: T.Pf,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: N.intl.string(N.t["4qdZ93"])
                    })
                })]
            })]
        })]
    })
}

function v(e) {
    let {
        thread: t
    } = e, n = (0, d.bG)([f.default], () => f.default.getUser(t.ownerId)), l = (0, _.JO)(t);
    return (0, i.jsxs)(c.DUT, {
        className: T.nM,
        onClick: e => {
            (0, m.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, C.H9.POPOUT)
        },
        children: [(0, i.jsx)("div", {
            className: T.R4,
            children: null == n ? (0, i.jsx)("img", {
                className: T.my,
                src: x.Ay.getDefaultAvatarURL(void 0, void 0),
                alt: ""
            }) : (0, i.jsx)(u.A, {
                className: T.my,
                user: n,
                size: c._3J.SIZE_16
            })
        }), (0, i.jsxs)("div", {
            className: T.Pf,
            children: [(0, i.jsx)(c.Text, {
                className: T.UU,
                variant: "text-sm/normal",
                color: "none",
                children: t.name
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "•"
            }), (0, i.jsx)(c.Text, {
                className: T.vE,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, _.aK)(l)
            })]
        })]
    })
}