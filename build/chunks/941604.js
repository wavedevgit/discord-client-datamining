/** chunk id: 941604, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(606256),
    a = n(985018);
let r = "DOWNLOAD_APPS";

function o() {
    let e = (0, s.red)(e => (0, s.fDT)(e, r));
    return (0, i.jsx)(l.A, {
        id: "app-download-button",
        onClick: () => {
            (0, s.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                return t => (0, i.jsx)(e, {
                    source: "Guilds",
                    ...t
                })
            }, {
                modalKey: r
            })
        },
        selected: e,
        tooltip: a.intl.string(a.t.Z7jwrJ),
        icon: s.s3U
    })
}