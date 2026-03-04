/** chunk id: 929548, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => y
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    a = i(311907),
    r = i(139033),
    u = i(314116),
    o = i(421380),
    d = i(397927),
    A = i(827343),
    T = i(77729),
    S = i(839214),
    E = i(98919),
    g = i(487329),
    c = i(419954),
    _ = i(430452),
    I = i(353835),
    C = i(780964),
    N = i(652215),
    O = i(731854),
    b = i(985018);
let p = (0, S.D)(() => ({
    isUploading: !1,
    isDisabled: !1
}));
async function D() {
    let t = await T.A.fileManager.getLogPath();
    T.A.fileManager.showItemInFolder(t)
}

function L(t) {
    (0, u.A)({
        title: b.intl.string(b.t["7UXEF2"]),
        subtitle: b.intl.string(b.t.IYPrRl),
        confirmText: b.intl.string(b.t.BddRzS),
        onConfirm: () => A.A.setDebugLogging(t)
    })
}
async function m(t) {
    let {
        onUploadStart: e,
        onUploadFinish: i
    } = t;
    e?.();
    try {
        let t, e;
        await _.Ay.getMediaEngine().writeAudioDebugState(), await I.A.submitLiveCrashReport({
            message: {
                message: "User Live Dump"
            }
        }), await (0, E.a)(N.Umv.RTC), t = b.intl.string(b.t["fKBB8+"]), e = b.intl.string(b.t.BvyxE7), (0, r.A)({
            title: t,
            subtitle: e
        })
    } catch (a) {
        var l;
        let t, e, i, s;
        l = a.displayMessage, t = b.intl.string(b.t.QZg0J7), e = l ?? b.intl.string(b.t.VzHcSm), i = (0, g.B1)(g.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode, s = b.intl.formatToPlainString(b.t.ejOT95, {
            errorCode: i
        }), (0, d.qfG)(i => (0, n.jsx)(d.VoidConfirmModal, {
            header: t,
            confirmButtonColor: o.$n.Colors.BRAND,
            confirmText: b.intl.string(b.t.BddRzS),
            ...i,
            children: (0, n.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                },
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: e
                }), (0, n.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    selectable: !0,
                    style: {
                        marginTop: "auto"
                    },
                    children: s
                })]
            })
        }))
    } finally {
        i?.()
    }
}
async function R() {
    await m({
        onUploadStart: () => p.setState({
            isUploading: !0
        }),
        onUploadFinish: () => p.setState({
            isUploading: !1,
            isDisabled: !0
        })
    })
}
let y = (0, c.E2)(C.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [b.intl.string(b.t["726JHL"]), b.intl.string(b.t.EbwFfR), b.intl.string(b.t.nuPtYi)],
    usePredicate: function() {
        let t = (0, a.bG)([_.Ay], () => _.Ay.supports(O.O5.DEBUG_LOGGING));
        return s.Av && t && null != T.A.fileManager.readLogFiles
    },
    Component: function() {
        let t = (0, a.bG)([_.Ay], () => _.Ay.getDebugLogging()),
            e = p.useField("isUploading"),
            i = p.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [(0, n.jsx)(d.AC4, {
                tag: "legend",
                id: s,
                children: b.intl.string(b.t["FjN+et"])
            }), (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, n.jsx)(d.dOG, {
                    label: b.intl.string(b.t["726JHL"]),
                    description: b.intl.string(b.t["/7ak9Q"]),
                    checked: t,
                    onChange: L
                }), (0, n.jsx)("div", {
                    role: "group",
                    "aria-labelledby": s,
                    children: (0, n.jsxs)(d.ButtonGroup, {
                        children: [(0, n.jsx)(d.Button, {
                            variant: "secondary",
                            text: b.intl.string(b.t.EbwFfR),
                            onClick: R,
                            loading: e,
                            disabled: i,
                            "aria-label": b.intl.string(b.t.aY1OH2)
                        }), (0, n.jsx)(d.Button, {
                            variant: "secondary",
                            text: b.intl.string(b.t.nuPtYi),
                            onClick: D,
                            "aria-label": b.intl.string(b.t["L/hFOe"])
                        })]
                    })
                })]
            })]
        })
    }
})