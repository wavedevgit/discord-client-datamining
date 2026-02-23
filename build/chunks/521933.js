/** chunk id: 521933, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(204925),
    r = n(818348);
let l = {
    openNewUserAgeGateModal: e => {
        (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("1143").then(n.bind(n, 284778));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: a.jc,
            onCloseRequest: r.tE,
            onCloseCallback: e
        })
    },
    openClaimAccountModal: function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, s.mMO)(async () => {
            let {
                default: t
            } = await n.e("27672").then(n.bind(n, 888363));
            return n => (0, i.jsx)(t, {
                claimRequired: e,
                ...n
            })
        }, {
            onCloseRequest: e ? r.tE : null,
            onCloseCallback: t
        })
    }
}