/** chunk id: 125040 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(421380),
    l = n(397927),
    r = n(631670),
    a = n(985018);

function o(e) {
    let {
        onClose: t
    } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.UNGZDI),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.string(a.t.alpAUm)
        })
    })
}

function d(e) {
    let {
        onClose: t
    } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.I5UrbV),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.string(a.t.UyVVan)
        })
    })
}

function c(e) {
    let {
        onClose: t
    } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t["8lQ2rR"]),
        confirmText: a.intl.string(a.t["8lQ2rR"]),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, r.U_)("", !0).then(t),
        children: (0, i.jsx)(l.Text, {
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
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: a.intl.string(a.t.LX0nT8),
        confirmText: a.intl.string(a.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: n
        })
    })
}

function _(e) {
    let {
        shouldRenderOwnedTeamsModal: t,
        shouldRenderOwnedGuildsModal: n,
        shouldRenderDeleteAccountConfirmModal: s,
        shouldRenderDisableAccountErrorModal: l,
        disableAccountErrorMessage: r,
        onOwnedTeamsWarningModalClose: a,
        onOwnedGuildsWarningModalClose: _,
        onDeleteAccountConfirmModalClose: m,
        onDisableAccountErrorModalClose: g
    } = e;
    return t ? (0, i.jsx)(o, {
        onClose: a
    }) : n ? (0, i.jsx)(d, {
        onClose: _
    }) : s ? (0, i.jsx)(c, {
        onClose: m
    }) : l ? (0, i.jsx)(u, {
        onClose: g,
        errorMessage: r
    }) : null
}