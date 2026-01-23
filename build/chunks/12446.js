/** Chunk was on 33957 **/
/** chunk id: 12446, original params: e,n,l (module,exports,require) **/
l.d(n, {
    Ay: () => T
}), l(896048), l(228524);
var t = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(311907),
    c = l(397927),
    o = l(843472),
    d = l(256265),
    u = l(710948),
    m = l(46054),
    h = l(77350),
    f = l(294520),
    g = l(652176),
    x = l(976860),
    b = l(138298),
    j = l(253932),
    p = l(734057),
    A = l(808728),
    _ = l(320501),
    v = l(576705),
    y = l(531685),
    I = l(486020),
    N = l(225142),
    C = l(248019),
    O = l(639245),
    w = l(652215),
    E = l(985018),
    G = l(446964),
    M = l(206314),
    S = l(296997);

function D(e) {
    let n, l, {
            firstMedia: r,
            channelId: a
        } = e,
        c = (0, s.bG)([p.A], () => p.A.getChannel(a)),
        [o, d] = (0, f.eJ)({
            media: r,
            channel: c
        }),
        m = (0, f.rx)(d),
        x = (0, s.bG)([y.A], () => y.A.isFocused()),
        b = (0, h.ge)(r.src),
        A = j.kt.useSetting(),
        {
            src: _,
            width: v,
            height: I,
            alt: N
        } = r;
    return I > v ? l = 72 : n = 72, (0, t.jsxs)("div", {
        className: G.$_,
        children: [(0, g.LL)({
            src: _,
            maxHeight: n,
            maxWidth: l,
            width: v,
            height: I,
            alt: null != N && o && null != m ? m : N,
            autoPlay: A,
            animated: b && !o && x,
            containerClassName: G.iT,
            imageClassName: i()({
                [G.cd]: o
            }),
            analyticsSource: "ResourceChannelMedia"
        }), o && (0, t.jsx)(u.A, {
            obscureReason: d,
            iconClassname: G.yo
        })]
    })
}

function P(e) {
    let {
        resource: n
    } = e, l = (0, s.bG)([p.A], () => p.A.getChannel(n.channelId)), a = (0, s.bG)([_.A], () => _.A.getMessages(n.channelId)), u = (0, s.bG)([v.A], () => v.A.can(w.xBc.VIEW_CHANNEL, l)), h = a.first(), f = (0, C.A)(h), g = (0, d.yC)(h, !1), x = (null == g ? void 0 : g.length) > 0 ? g[0] : null, j = null != l && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && u;
    if (r.useEffect(() => {
            j && o.A.fetchMessages({
                channelId: n.channelId,
                after: n.channelId,
                limit: 5
            })
        }, [n.channelId, j]), null == l || null == l.guild_id) return null;
    let A = I.Ay.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        y = null == n.description || 0 === n.description.length;
    return (0, t.jsxs)(c.DUT, {
        className: G.G9,
        onClick: e => {
            null != l && (e.shiftKey ? (0, N.bN)(l.guild_id, l.id) : b.A.openResourceChannelAsSidebar({
                guildId: l.guild_id,
                channelId: l.id
            }))
        },
        children: [(0, t.jsxs)("div", {
            className: G.Qs,
            children: [(0, t.jsx)(c.Text, {
                className: G.DD,
                variant: "text-md/bold",
                color: "text-strong",
                children: n.title
            }), y && null != f && (0, t.jsx)(c.Text, {
                className: G.BK,
                variant: "text-sm/normal",
                color: "text-default",
                lineClamp: 3,
                children: m.A.parse(f, !0, {
                    guildId: l.guild_id,
                    channelId: l.id
                })
            }), !y && (0, t.jsx)(c.Text, {
                className: i()(G.BK, M.PT),
                variant: "text-sm/normal",
                color: "text-default",
                lineClamp: 3,
                children: m.A.parse(n.description, !0, {
                    guildId: l.guild_id,
                    channelId: l.id
                })
            })]
        }), null != n.icon && null != A ? (0, t.jsx)("div", {
            className: G.$_,
            children: (0, t.jsx)("img", {
                src: A,
                className: G.__invalid_thumbnail,
                width: 72,
                height: 72,
                alt: "",
                "aria-hidden": !0
            })
        }) : null, null == A && null != x ? (0, t.jsx)(D, {
            firstMedia: x,
            channelId: n.channelId
        }) : null]
    })
}

function T(e) {
    let {
        guild: n,
        isNewMember: l
    } = e, r = (0, O.A)(n.id);
    return 0 === r.length ? l ? null : (0, t.jsxs)("div", {
        className: G.do,
        children: [(0, t.jsx)(c.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: E.intl.string(E.t.owvC9U)
        }), (0, t.jsx)("img", {
            className: G.QT,
            src: S,
            alt: ""
        }), (0, t.jsx)("div", {
            className: G.nM,
            children: (0, t.jsx)(c.Button, {
                size: "md",
                variant: "primary",
                onClick: () => {
                    let e = A.Ay.getDefaultChannel(n.id);
                    null != e && (0, x.pX)(w.BVt.CHANNEL(n.id, e.id))
                },
                fullWidth: !0,
                text: E.intl.string(E.t["3iCBUn"])
            })
        })]
    }) : (0, t.jsxs)("div", {
        className: G.kL,
        children: [(0, t.jsx)(c.Heading, {
            variant: "heading-lg/bold",
            color: "text-strong",
            children: E.intl.string(E.t.xwY4La)
        }), r.map(e => (0, t.jsx)(P, {
            resource: e
        }, e.channelId))]
    })
}