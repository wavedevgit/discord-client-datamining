/** chunk id: 639149, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(397927),
    o = n(166532),
    s = n(985018),
    l = n(818413);

function c(e) {
    let {
        step: t,
        onClose: n,
        isGift: c
    } = e, u = (0, i.YW)(t).with(o.pn.REVIEW, () => c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)).with(o.pn.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak)).with(o.pn.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"])).with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H)).with(o.pn.CONFIRM, () => "").otherwise(() => null);
    return null == u ? null : (0, r.jsxs)(a.rQ0, {
        "data-migration-pending": !0,
        className: l.H,
        separator: t !== o.pn.CONFIRM,
        children: [(0, r.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            children: u
        }), (0, r.jsx)(a.s_y, {
            "data-migration-pending": !0,
            onClick: n,
            className: l.P
        })]
    })
}