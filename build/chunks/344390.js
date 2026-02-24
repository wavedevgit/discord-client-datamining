/** chunk id: 344390, original params: e,t,r (module,exports,require) **/
r.d(t, {
    V1: () => s
});

function s(e) {
    let t = function(e) {
        var t;
        let r, s, i, {
                PI: n,
                min: l,
                max: a,
                cos: o,
                round: c
            } = Math,
            d = e[0] | e[1] << 8 | e[2] << 16,
            u = e[3] | e[4] << 8,
            f = (63 & d) / 63,
            h = (d >> 6 & 63) / 31.5 - 1,
            x = (d >> 12 & 63) / 31.5 - 1,
            p = d >> 23,
            m = u >> 15,
            _ = a(3, m ? p ? 5 : 7 : 7 & u),
            g = a(3, m ? 7 & u : p ? 5 : 7),
            j = p ? (15 & e[5]) / 15 : 1,
            v = (e[5] >> 4) / 15,
            A = p ? 6 : 5,
            S = 0,
            y = (t, r, s) => {
                let i = [];
                for (let n = 0; n < r; n++)
                    for (let l = +!n; l * r < t * (r - n); l++) i.push(((e[A + (S >> 1)] >> ((1 & S++) << 2) & 15) / 7.5 - 1) * s);
                return i
            },
            C = y(_, g, (d >> 18 & 31) / 31),
            b = y(3, 3, (u >> 3 & 63) / 63 * 1.25),
            w = y(3, 3, (u >> 9 & 63) / 63 * 1.25),
            I = p && y(5, 5, v),
            E = (r = (t = e)[3], s = 128 & t[2], ((i = 128 & t[4]) ? s ? 5 : 7 : 7 & r) / (i ? 7 & r : s ? 5 : 7)),
            N = c(E > 1 ? 32 : 32 * E),
            O = c(E > 1 ? 32 / E : 32),
            T = new Uint8Array(N * O * 4),
            R = [],
            M = [];
        for (let e = 0, t = 0; e < O; e++)
            for (let r = 0; r < N; r++, t += 4) {
                let s = f,
                    i = h,
                    c = x,
                    d = j;
                for (let e = 0, t = a(_, p ? 5 : 3); e < t; e++) R[e] = o(n / N * (r + .5) * e);
                for (let t = 0, r = a(g, p ? 5 : 3); t < r; t++) M[t] = o(n / O * (e + .5) * t);
                for (let e = 0, t = 0; e < g; e++)
                    for (let r = +!e, i = 2 * M[e]; r * g < _ * (g - e); r++, t++) s += C[t] * R[r] * i;
                for (let e = 0, t = 0; e < 3; e++)
                    for (let r = +!e, s = 2 * M[e]; r < 3 - e; r++, t++) {
                        let e = R[r] * s;
                        i += b[t] * e, c += w[t] * e
                    }
                if (p)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let r = +!e, s = 2 * M[e]; r < 5 - e; r++, t++) d += I[t] * R[r] * s;
                let u = s - 2 / 3 * i,
                    m = (3 * s - u + c) / 2,
                    v = m - c;
                T[t] = a(0, 255 * l(1, m)), T[t + 1] = a(0, 255 * l(1, v)), T[t + 2] = a(0, 255 * l(1, u)), T[t + 3] = a(0, 255 * l(1, d))
            }
        return {
            w: N,
            h: O,
            rgba: T
        }
    }(e);
    return function(e, t, r) {
        let s = 4 * e + 1,
            i = 6 + t * (5 + s),
            n = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
            l = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0, -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4],
            a = 1,
            o = 0;
        for (let e = 0, i = 0, l = s - 1; e < t; e++, l += s - 1)
            for (n.push(e + 1 < t ? 0 : 1, 255 & s, s >> 8, 255 & ~s, s >> 8 ^ 255, 0), o = (o + a) % 65521; i < l; i++) {
                let e = 255 & r[i];
                n.push(e), o = (o + (a = (a + e) % 65521)) % 65521
            }
        for (let [e, t] of(n.push(o >> 8, 255 & o, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                [12, 29],
                [37, 41 + i]
            ])) {
            let r = -1;
            for (let s = e; s < t; s++) r ^= n[s], r = (r = r >>> 4 ^ l[15 & r]) >>> 4 ^ l[15 & r];
            r = ~r, n[t++] = r >>> 24, n[t++] = r >> 16 & 255, n[t++] = r >> 8 & 255, n[t++] = 255 & r
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...n))
    }(t.w, t.h, t.rgba)
}