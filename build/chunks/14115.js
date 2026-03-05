/** chunk id: 14115 params = (module,exports,require) **/
l.d(t, {
    Y: () => n
});
let a = {
        EARN: .25,
        SPEND: .3
    },
    n = (e, t) => {
        let l = e > 0,
            n = t * a[l ? "EARN" : "SPEND"];
        return {
            duration: n,
            delay: l ? t - n : 0
        }
    }