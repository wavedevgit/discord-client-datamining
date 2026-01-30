/** Chunk was on 1113 **/
/** chunk id: 282978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(3026),
    c = n(990078),
    u = n(397927),
    d = n(104171),
    h = n(793574),
    p = n(688810),
    g = n(919395),
    f = n(657331),
    m = n(696451),
    b = n(71393),
    A = n(287809),
    y = n(583613),
    O = n(403362),
    _ = n(58736),
    j = n(518477),
    x = n(985018),
    v = n(940688);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class C {
    updateData(e) {
        let {
            userId: t,
            user: n,
            channelId: r,
            analyticsLocations: l
        } = e;
        this.userId = t, this.user = n, this.channelId = r, this.analyticsLocations = l
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user)
    }
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [i, s] = t, a = (0, r.jsx)(u.DUT, {
                tag: "span",
                onClick: this.handleClick,
                children: i
            });
            return s.length > 0 && (a = (0, r.jsx)(c.m, {
                asContainer: !0,
                tag: "span",
                text: s.join(", "),
                position: "bottom",
                shouldShow: e,
                delay: 50,
                children: a
            })), (0, r.jsxs)(l.Fragment, {
                children: [0 !== n ? ", " : null, a]
            }, n)
        })
    }
    constructor({
        userId: e,
        user: t,
        channelId: n,
        analyticsLocations: l
    }) {
        E(this, "userId", void 0), E(this, "user", void 0), E(this, "channelId", void 0), E(this, "analyticsLocations", void 0), E(this, "generateNicknameGuildPairs", (0, y.L_)(e => {
            var t;
            return s()(m.Ay.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId)).toPairs().map(e => {
                let [t, n] = e;
                return [t, n.map(e => {
                    var t;
                    return null == (t = b.A.getGuild(e)) ? void 0 : t.name
                }).filter(O.Vq)]
            }).filter(t => {
                let [n] = t;
                return n !== (null == e ? void 0 : e.globalName)
            }).value()
        })), E(this, "renderMoreAvatars", () => (0, r.jsx)(c.m, {
            asContainer: !0,
            tag: "span",
            text: x.intl.string(x.t["UTjRE/"]),
            position: "bottom",
            children: (0, r.jsx)(u.DUT, {
                className: v.OZ,
                onClick: this.handleClick,
                children: (0, r.jsx)(u.U1e, {
                    size: "xs",
                    color: "currentColor",
                    className: v.WW
                })
            })
        }, "more-avatars")), E(this, "handleClick", () => {
            (0, f.openUserProfileModal)({
                userId: this.userId,
                channelId: this.channelId,
                sourceAnalyticsLocations: this.analyticsLocations,
                tabSection: j.RP.MUTUAL_GUILDS
            })
        }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = l
    }
}

function S(e) {
    let {
        channel: t
    } = e, n = t.getRecipientId(), i = (0, g.EI)(n), s = Array(i.length).fill(null), {
        analyticsLocations: f
    } = (0, p.Ay)(h.A.AKA), m = function(e) {
        let {
            userId: t,
            channelId: n,
            analyticsLocations: r
        } = e, i = (0, a.bG)([A.default], () => A.default.getUser(t), [t]), [s] = l.useState(() => new C({
            user: i,
            userId: t,
            channelId: n,
            analyticsLocations: r
        }));
        return s.updateData({
            userId: t,
            user: i,
            channelId: n,
            analyticsLocations: r
        }), s
    }({
        userId: n,
        analyticsLocations: f,
        channelId: t.id
    }), [y, O] = l.useState(!1), j = l.useCallback(() => {
        O(!0)
    }, [O]), E = l.useCallback(() => {
        O(!1)
    }, [O]);
    return 0 === m.getNicknameGuildPairs().length && 0 === i.length ? (0, r.jsx)("div", {
        className: v.jH
    }) : (0, r.jsxs)(p.f5, {
        value: f,
        children: [(0, r.jsx)(_.cG, {
            className: v.yF
        }), (0, r.jsx)(u.LpS, {
            text: x.intl.string(x.t.l1QVfj),
            disableColor: !0,
            className: v.RV
        }), i.length > 0 ? (0, r.jsx)(d.Ay, {
            size: 16,
            users: s,
            showUserPopout: !1,
            renderUser: (e, t, n) => {
                var l;
                let s = m.user,
                    a = i[n];
                return null == a || null == s ? null : (0, r.jsx)(c.m, {
                    asContainer: !0,
                    text: null == (l = b.A.getGuild(a)) ? void 0 : l.name,
                    position: "bottom",
                    children: (0, r.jsx)("img", {
                        alt: "",
                        className: v.my,
                        onClick: m.handleClick,
                        src: s.getAvatarURL(a, 16),
                        "aria-hidden": !0
                    })
                }, a[1])
            },
            renderMoreUsers: m.renderMoreAvatars,
            guildId: void 0,
            max: 3,
            className: v.HD
        }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(o.A, {
            position: "bottom",
            className: v.wm,
            delay: 0,
            onTooltipShow: j,
            onTooltipHide: E,
            children: m.renderNicknamePairs(!y)
        }) : null]
    })
}