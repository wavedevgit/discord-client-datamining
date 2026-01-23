/** Chunk was on 46875 **/
/** chunk id: 255370, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var r = n(417597),
    i = n(397927),
    a = n(355622),
    s = n(349688),
    o = n(914905),
    c = n(302487),
    d = n(522602),
    u = n(985018),
    m = n(941448);

function h(e) {
    let {
        parentChannel: t
    } = e, n = (0, r.yK)([d.A], () => {
        let e = d.A.getUploads(t.id, a.oU.CREATE_FORUM_POST.drafts.type);
        return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
    });
    return (0, l.jsxs)("div", {
        className: m.kL,
        children: [(0, l.jsx)(i.Text, {
            variant: "text-md/semibold",
            color: "text-muted",
            children: u.intl.string(u.t.omKGKu)
        }), (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: u.intl.string(u.t["zUjLl+"])
        }), (0, l.jsx)("div", {
            children: (0, l.jsx)(i.IpV, {
                className: m.mw,
                orientation: "horizontal",
                paddingFix: !1,
                fade: !0,
                children: (0, l.jsxs)("div", {
                    className: m.p8,
                    children: [n.map(e => (0, l.jsx)(o.A, {
                        channelId: t.id,
                        draftType: a.oU.CREATE_FORUM_POST.drafts.type,
                        upload: e,
                        keyboardModeEnabled: !0,
                        hideFileName: !0,
                        size: s.L.SMALL
                    }, e.id)), (0, l.jsx)(c.A, {
                        channelId: t.id
                    })]
                })
            })
        })]
    })
}