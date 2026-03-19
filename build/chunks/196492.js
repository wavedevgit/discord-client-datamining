/** chunk id: 196492 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(397927),
    a = n(73153),
    r = n(272355),
    o = n(652215),
    c = n(985018);
let d = "ActivityInviteManager",
    u = () => {
        a.h.dispatch({
            type: "ACTIVITY_INVITE_MODAL_CLOSE"
        })
    };
class h extends r.A {
    _initialize() {
        a.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), a.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
    }
    _terminate() {
        a.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), a.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
    }
    handleModalOpen(e) {
        let {
            activity: t,
            isPrivate: a,
            context: r
        } = e, h = r === o.BRT.POPOUT ? l.KX8 : l.SYi;
        a ? (0, l.qfG)(e => (0, i.jsx)(s.Modal, {
            title: c.intl.formatToPlainString(c.t["2tN7ih"], {
                name: t.name
            }),
            actions: [{
                variant: "primary",
                text: c.intl.string(c.t.BddRzS),
                onClick: e.onClose,
                autoFocus: !0
            }],
            ...e,
            children: (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                children: c.intl.string(c.t.MAxtks)
            })
        }), {
            onCloseCallback: u,
            modalKey: d
        }, h) : (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("27759").then(n.bind(n, 555570));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            onCloseCallback: u,
            modalKey: d,
            contextKey: h
        })
    }
    handleModalClose(e) {
        (0, l.OoC)(d)
    }
}
let A = new h