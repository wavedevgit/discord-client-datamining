/** chunk id: 494492, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(397927),
    a = n(997509),
    o = n(555337),
    c = n(985018);

function d(e) {
    let {
        profile: t,
        canManageGuild: n
    } = e, d = t.id, u = i.useCallback(e => {
        a.A.updateGuild({
            description: e
        }), a.A.updateGuildProfile(d, {
            description: e
        })
    }, [d]), g = (0, l.bG)([o.A], () => o.A.getError("description"));
    return (0, r.jsx)(s.fs1, {
        label: c.intl.string(c.t.Z27SCb),
        description: c.intl.string(c.t.pw0MIk),
        value: t.description,
        placeholder: c.intl.string(c.t.Nvfowl),
        onChange: u,
        maxLength: 300,
        disabled: !n,
        error: g
    })
}