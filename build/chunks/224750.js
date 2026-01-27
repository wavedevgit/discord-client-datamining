/** Chunk was on web.js **/
/** chunk id: 224750, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Yx: () => l,
    vG: () => s,
    wI: () => c,
    yW: () => i.mo
});
var r = n(562465),
    i = n(257474),
    a = n(652215),
    o = n(985018);
async function s(e) {
    let t = a.Rsh.APPLICATION_DISCLOSURES(e),
        n = await r.Bo.get({
            url: t,
            retries: 3,
            rejectWithError: !1
        }),
        i = n.body.disclosures;
    return {
        disclosures: i,
        ackedDisclosures: n.body.acked_disclosures,
        allAcked: n.body.all_acked
    }
}
async function l(e, t) {
    let n = a.Rsh.APPLICATION_DISCLOSURES(e);
    await r.Bo.post({
        url: n,
        body: {
            disclosures: t
        },
        rejectWithError: !1
    })
}

function c(e) {
    switch (e) {
        case i.mo.IP_LOCATION:
            return o.intl.string(o.t["6wPmjo"]);
        case i.mo.DISPLAYS_ADVERTISEMENTS:
            return o.intl.string(o.t["/uOMKZ"]);
        default:
            return null
    }
}