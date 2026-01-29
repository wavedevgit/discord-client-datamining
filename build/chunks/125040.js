/** Chunk was on 2827 **/
/** chunk id: 125040, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(421380),
    l = n(397927),
    s = n(631670),
    a = n(985018);

function o(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.UNGZDI),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.string(a.t.alpAUm)
        })
    })
}

function c(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.I5UrbV),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.string(a.t.UyVVan)
        })
    })
}

function d(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t["8lQ2rR"]),
        confirmText: a.intl.string(a.t["8lQ2rR"]),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, s.U_)("", !0).then(t),
        children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.string(a.t.FB4H1D)
        })
    })
}

function u(e) {
    let {
        onClose: t,
        errorMessage: n
    } = e;
    return (0, r.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.LX0nT8),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: n
        })
    })
}

function _(e) {
    let {
        shouldRenderOwnedTeamsModal: t,
        shouldRenderOwnedGuildsModal: n,
        shouldRenderDeleteAccountConfirmModal: i,
        shouldRenderDisableAccountErrorModal: l,
        disableAccountErrorMessage: s,
        onOwnedTeamsWarningModalClose: a,
        onOwnedGuildsWarningModalClose: _,
        onDeleteAccountConfirmModalClose: p,
        onDisableAccountErrorModalClose: m
    } = e;
    return t ? (0, r.jsx)(o, {
        onClose: a
    }) : n ? (0, r.jsx)(c, {
        onClose: _
    }) : i ? (0, r.jsx)(d, {
        onClose: p
    }) : l ? (0, r.jsx)(u, {
        onClose: m,
        errorMessage: s
    }) : null
}