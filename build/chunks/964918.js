/** chunk id: 964918, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(638769), n(264879);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(730134),
    u = n(378570),
    d = n(863005),
    h = n(707539),
    p = n(747926),
    g = n(576705),
    f = n(222823),
    m = n(287809),
    b = n(486020),
    A = n(661191),
    y = n(652215),
    O = n(37411),
    _ = n(985018),
    j = n(533848);

function x(e) {
    let {
        channel: t
    } = e, i = (0, a.yK)([d.A, f.Ay, g.A], () => {
        let e = d.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
        return s()(d.A.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(s().values(d.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && g.A.can(y.xBc.VIEW_CHANNEL, t)).sort((e, t) => {
            let n = f.Ay.lastMessageId(e.id),
                r = f.Ay.lastMessageId(t.id);
            return A.default.compare(n, r)
        }).reverse().value()
    }), c = t.isForumLikeChannel() ? 5 : 3;
    return l.useEffect(() => {
        (0, h.TE)()
    }, []), (0, r.jsxs)("div", {
        className: j.SW,
        children: [(0, r.jsx)(o.Text, {
            className: j.DD,
            variant: "text-xs/bold",
            color: "text-default",
            children: t.isForumLikeChannel() ? _.intl.string(_.t.ioVdO2) : _.intl.string(_.t.VNYs2v)
        }), i.slice(0, t.isForumLikeChannel() ? i.length : c).map(e => (0, r.jsx)(v, {
            thread: e
        }, e.id)).filter(e => l.isValidElement(e)).slice(0, c), (0, r.jsx)(o.DUT, {
            className: j.OS,
            onClick: () => {
                t.isForumLikeChannel() ? (0, u.iN)(t.id) : (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("65225").then(n.bind(n, 126768));
                    return n => (0, r.jsx)(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({
                        channel: t
                    }, n))
                })
            },
            children: (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "none",
                children: _.intl.string(_.t["4qdZ93"])
            })
        })]
    })
}

function v(e) {
    let {
        thread: t
    } = e, n = (0, a.bG)([m.default], () => m.default.getUser(t.ownerId)), l = (0, h.JO)(t);
    return (0, r.jsxs)(o.DUT, {
        className: j.nM,
        onClick: e => {
            (0, p.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, O.H9.POPOUT)
        },
        children: [null == n ? (0, r.jsx)("img", {
            className: j.my,
            src: b.Ay.getDefaultAvatarURL(void 0, void 0),
            alt: ""
        }) : (0, r.jsx)(c.A, {
            className: j.my,
            user: n,
            size: o._3J.SIZE_16
        }), (0, r.jsx)(o.Text, {
            className: j.UU,
            variant: "text-sm/normal",
            color: "none",
            children: t.name
        }), (0, r.jsxs)(o.Text, {
            className: j.vE,
            variant: "text-sm/normal",
            color: "none",
            children: [(0, r.jsx)("span", {
                className: j.xE,
                children: "•"
            }), (0, h.aK)(l)]
        })]
    })
}