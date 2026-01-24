/** Chunk was on 64939 **/
/** chunk id: 836774, original params: e,i,t (module,exports,require) **/
t.d(i, {
    default: () => b
}), t(896048);
var a = t(627968),
    n = t(64700),
    l = t(397927),
    s = t(444927),
    d = t(915089),
    r = t(937773),
    o = t(770335),
    c = t(405810),
    u = t(808728),
    p = t(486020),
    m = t(515718),
    x = t(307731),
    h = t(985018),
    g = t(510272),
    j = t(230279);

function f() {
    return [{
        name: h.intl.string(h.t["Sp2NF+"]),
        extensions: ["jpg", "jpeg", "png"]
    }]
}
async function C(e) {
    let i = (0, p._O)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0
        }),
        t = await fetch(i),
        a = await t.blob();
    return await (0, m.We)(a)
}
let b = function(e) {
    let {
        guildId: i,
        onUploadIcon: t,
        onSelectUnicodeEmoji: p,
        onClose: m,
        transitionState: b
    } = e, v = (0, d.GV)(), I = u.Ay.getDefaultChannel(i), [N, _] = n.useState("tab-id-role-icon-file-upload"), [y, k] = n.useState(!1), w = (0, s.A)(f);
    return n.useEffect(() => {
        k(!1)
    }, [N]), (0, a.jsx)(l.EOs, {
        transitionState: b,
        "aria-labelledby": v,
        size: l.rIJ.MEDIUM,
        className: g.CR,
        parentComponent: "CustomRoleIconUploadModal",
        "data-migration-pending": !0,
        children: (0, a.jsxs)("div", {
            className: g.FG,
            children: [(0, a.jsxs)(l.VQ0, {
                selectedItem: N,
                onItemSelect: _,
                type: "top",
                look: "grey",
                "aria-label": "Expression Picker",
                className: g.C$,
                children: [(0, a.jsx)(l.VQ0.Item, {
                    id: "tab-id-role-icon-file-upload",
                    children: h.intl.string(h.t.royWSB)
                }), (0, a.jsx)(l.VQ0.Item, {
                    id: "tab-id-role-icon-emoji",
                    children: h.intl.string(h.t["/Ny2wZ"])
                })]
            }), "tab-id-role-icon-file-upload" === N ? (0, a.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                children: (0, a.jsxs)("div", {
                    className: g.PO,
                    children: [(0, a.jsxs)("div", {
                        className: g.HK,
                        children: [(0, a.jsx)("img", {
                            src: j,
                            alt: "sparkles"
                        }), (0, a.jsx)("div", {
                            className: g.sk,
                            children: (0, a.jsx)(l.XGR, {
                                size: "md",
                                color: "currentColor",
                                className: g.T3
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: g.WG,
                        children: h.intl.string(h.t["mz++Qq"])
                    }), (0, a.jsx)(c.A, {
                        onChange: e => {
                            k(!1), t(e), m()
                        },
                        onFileSizeError: () => {
                            k(!0)
                        },
                        maxFileSizeBytes: 256e3,
                        filters: w,
                        text: h.intl.string(h.t.sdCQY4),
                        size: "md",
                        variant: "primary"
                    }), y ? (0, a.jsx)(l.Text, {
                        className: g.Qw,
                        color: "text-feedback-critical",
                        variant: "text-sm/normal",
                        children: h.intl.string(h.t.HFyKsa)
                    }) : null]
                })
            }) : null, "tab-id-role-icon-emoji" === N ? (0, a.jsx)(r.A, {
                hasTabWrapper: !0,
                closePopout: () => m(),
                onSelectEmoji: async e => {
                    let {
                        emoji: i
                    } = e;
                    if ((null == i ? void 0 : i.id) != null)(null == i ? void 0 : i.type) === o.i.GUILD && t(await C(i));
                    else if ((null == i ? void 0 : i.surrogates) != null) {
                        var a, n;
                        p(null != (a = null == (n = i.defaultDiversityChild) ? void 0 : n.surrogates) ? a : i.surrogates)
                    }
                    m()
                },
                pickerIntention: x.b_.COMMUNITY_CONTENT,
                channel: I
            }) : null]
        })
    })
}