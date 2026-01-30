/** chunk id: 9905, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(573435),
    a = n(427157),
    o = n(71393),
    c = n(961291),
    u = n(192849);
let d = e => {
        let {
            mask: t
        } = e;
        return null == t ? null : (0, r.jsx)("div", {
            className: u.tK,
            style: {
                backgroundColor: t.color.css
            },
            children: (0, r.jsx)("img", {
                className: u.QR,
                alt: "",
                src: t.icon
            })
        })
    },
    h = l.memo(function(e) {
        var t, n;
        let {
            item: l
        } = e, h = null, p = !1, g = (0, i.bG)([o.A], () => o.A.getGuild(l.guild_id));
        if (null != l.icon_name) h = (0, r.jsx)("img", {
            alt: "",
            src: c.rr[(0, c.yI)(l.icon_name)]
        });
        else if (null != l.other_user) {
            let e = l.other_user instanceof a.A ? l.other_user : new a.A(l.other_user),
                n = null != (t = e.globalName) ? t : e.username;
            h = (0, r.jsx)("img", {
                alt: n,
                className: u.Sl,
                src: e.getAvatarURL(void 0, 40)
            }), p = !0
        } else h = null != l.icon_url ? (0, r.jsx)("img", {
            alt: null != (n = null == g ? void 0 : g.name) ? n : "",
            className: u.Sl,
            src: l.icon_url
        }) : (0, r.jsx)("img", {
            alt: "",
            src: c.rr[(0, c.sW)(l)]
        });
        let f = (0, c.rS)(l.type);
        return (0, r.jsxs)("div", {
            className: u.kL,
            children: [(0, r.jsx)(s.Ay, {
                mask: null == f ? s.hW.AVATAR_DEFAULT : s.hW.AVATAR_STATUS_ROUND_16,
                width: 40,
                height: 40,
                rightOverhang: 3,
                bottomOverhang: 3,
                className: u.dK,
                children: (0, r.jsx)("div", {
                    className: u.ZS,
                    style: p ? void 0 : {
                        backgroundColor: (0, c.Pm)(l)
                    },
                    children: h
                })
            }), (0, r.jsx)(d, {
                mask: f
            })]
        })
    })