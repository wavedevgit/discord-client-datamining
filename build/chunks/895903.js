/** Chunk was on 1113 **/
/** chunk id: 895903, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(827734),
    c = n(397927),
    u = n(104171),
    d = n(47868),
    h = n(986738),
    p = n(394412),
    g = n(859894),
    f = n(931991),
    m = n(426660),
    b = n(576705),
    A = n(233993),
    y = n(19844),
    O = n(505543),
    _ = n(985018),
    j = n(529471);

function x(e) {
    let {
        onClick: t,
        className: n
    } = e, l = c.cNw;
    return (0, r.jsx)(d.A, {
        iconContainerClassName: s()({
            [j.q8]: !1
        }),
        icon: (0, r.jsx)(l, {
            size: "custom",
            color: "currentColor",
            className: j.Pz,
            height: 20,
            width: 20
        }),
        color: o.A.unsafe_rawColors.PRIMARY_700.css,
        title: _.intl.string(_.t["jMLfp/"]),
        description: _.intl.string(_.t["Vd/rEX"]),
        onClick: t,
        className: n
    })
}

function v(e) {
    let {
        channel: t
    } = e, {
        participants: n,
        usersInSummary: l
    } = (0, y.A)(t.id);
    return (0, r.jsxs)("div", {
        className: j.P1,
        children: [(0, r.jsx)(u.Ay, {
            className: j.Ip,
            guildId: t.guild_id,
            users: l,
            size: u.DN.SIZE_16
        }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: function(e) {
                if (0 === e.length) return "";
                if (1 === e.length) return _.intl.formatToPlainString(_.t["5ULgaQ"], {
                    first: e[0].userNick
                });
                if (2 === e.length) return _.intl.formatToPlainString(_.t.BHK0Op, {
                    first: e[0].userNick,
                    second: e[1].userNick
                });
                let t = e.length - 2;
                return _.intl.formatToPlainString(_.t.T3MT4n, {
                    first: e[0].userNick,
                    second: e[1].userNick,
                    numOthers: t
                })
            }(n)
        })]
    })
}

function E(e) {
    let {
        channel: t,
        onContinueClick: n
    } = e, i = (0, a.bG)([b.A], () => b.A.can(A.QY, t), [t]), o = t.guild_id, {
        canCreateGuildEvent: u
    } = (0, f.nr)(t), d = (0, O.A)(t.id), y = l.useRef(null);
    return (0, r.jsxs)("div", {
        className: j.kL,
        ref: y,
        children: [(0, r.jsx)(m.A, {
            eventTargetRef: y
        }), (0, r.jsxs)("div", {
            className: j.Qs,
            children: [(0, r.jsxs)("div", {
                className: j.N1,
                children: [(0, r.jsx)(c.Heading, {
                    className: j.__invalid_title,
                    variant: "heading-xxl/normal",
                    children: _.intl.string(_.t.QGnDLs)
                }), (0, r.jsx)(c.Text, {
                    tag: "div",
                    className: j.VA,
                    variant: "heading-lg/normal",
                    children: _.intl.string(_.t.djfK36)
                })]
            }), d ? null : (0, r.jsx)(p.A, {
                channelId: t.id,
                showDismiss: !1
            }), i ? (0, r.jsx)(g.A, {
                className: j.fN,
                channel: t
            }) : null, u ? (0, r.jsx)(h.A, {
                className: j.fN,
                guildId: o
            }) : null, i ? (0, r.jsx)(x, {
                className: s()({
                    [j.fN]: !0
                }),
                onClick: n
            }) : null, (0, r.jsx)(v, {
                channel: t
            })]
        })]
    })
}