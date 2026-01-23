/** Chunk was on 88014 **/
/** chunk id: 627261, original params: l,n,i (module,exports,require) **/
i.d(n, {
    default: () => h
});
var r = i(627968);
i(64700);
var t = i(311907),
    e = i(421380),
    a = i(397927),
    d = i(587895),
    s = i(235986),
    o = i(755439),
    c = i(975571),
    u = i(985018),
    p = i(137397);
let h = l => {
    let {
        onClose: n,
        transitionState: i
    } = l, {
        error: h,
        applicationName: v
    } = (0, t.cf)([o.A, d.A], () => {
        let l = o.A.getLastError(),
            n = null;
        if (null != l && null != l.applicationId) {
            let i = d.A.getApplication(l.applicationId);
            null != i && (n = i.name)
        }
        return {
            error: l,
            applicationName: n
        }
    });
    return (0, r.jsxs)(a.EOs, {
        transitionState: i,
        size: a.rIJ.SMALL,
        "aria-label": u.intl.string(u.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [(0, r.jsxs)(a.rQ0, {
            justify: s.A.Justify.BETWEEN,
            separator: !1,
            children: [(0, r.jsx)(s.A.Child, {
                grow: 1,
                children: (0, r.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children: u.intl.string(u.t["6kHRYP"])
                })
            }), (0, r.jsx)(s.A.Child, {
                grow: 0,
                children: (0, r.jsx)(a.s_y, {
                    onClick: n
                })
            })]
        }), (0, r.jsx)(a.$mQ, {
            children: (0, r.jsxs)("div", {
                className: p.rf,
                children: [(0, r.jsx)("div", {
                    children: u.intl.format(u.t["NnE/6P"], {
                        link: "https://dis.gd/dispatch-error"
                    })
                }), (0, r.jsx)("div", {
                    className: p.dr,
                    children: u.intl.string(u.t["o+efY9"])
                }), (0, r.jsx)("div", {
                    className: p.Vk,
                    children: u.intl.string(u.t.BiSnZ9)
                }), (0, r.jsx)("div", {
                    className: p.nf,
                    children: (0, r.jsxs)("div", {
                        children: [null != v ? "Game: ".concat(v, "\n") : null, (null == h ? void 0 : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null, (null == h ? void 0 : h.branchId) != null && (null == h ? void 0 : h.applicationId) !== (null == h ? void 0 : h.branchId) ? "Branch ID: ".concat(null == h ? void 0 : h.branchId, "\n") : null, (null == h ? void 0 : h.code) != null ? "Error Code: ".concat(null == h ? void 0 : h.code, "\n") : null, (null == h ? void 0 : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? void 0 : h.uuid) : null]
                    })
                })]
            })
        }), (0, r.jsxs)(a.jlY, {
            children: [(0, r.jsx)(a.Button, {
                variant: "primary",
                text: u.intl.string(u.t.VdyWmB),
                onClick: () => {
                    window.open(c.A.getSubmitRequestURL())
                }
            }), (0, r.jsx)(e.$n, {
                look: e.$n.Looks.LINK,
                onClick: n,
                color: p.bE,
                children: u.intl.string(u.t.cpT0Cq)
            })]
        })]
    })
}