/** chunk id: 830917 params = (module,exports,require) **/
function a(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: a,
        maxDimensions: i,
        imageRotation: r = 0,
        flipHorizontal: o = !1
    } = e, s = t.naturalWidth / t.width, c = function(e, t) {
        let n, a, {
                x: i,
                y: r
            } = e,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (t) {
            case 90:
                n = r, a = -i;
                break;
            case 180:
                n = -i, a = -r;
                break;
            case 270:
                n = -r, a = i;
                break;
            default:
                n = i, a = r
        }
        return {
            x: o ? -n : n,
            y: a
        }
    }(a, r, o), l = r % 180 != 0, _ = n.width * s, d = n.height * s, u = Math.min(_, i.width), h = Math.min(d, i.height), A = (l ? n.height : n.width) / 2, g = (l ? n.width : n.height) / 2, m = (t.width / 2 - A - c.x) * s, x = (t.height / 2 - g - c.y) * s, b = l ? d : _, f = l ? _ : d, {
        x: p,
        y: N
    } = function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (a) switch (n) {
            case 0:
                return {
                    x: -e, y: 0
                };
            case 90:
                return {
                    x: -t, y: -e
                };
            case 180:
                return {
                    x: 0, y: -t
                };
            case 270:
                return {
                    x: 0, y: 0
                }
        } else switch (n) {
            case 0:
                return {
                    x: 0, y: 0
                };
            case 90:
                return {
                    x: 0, y: -e
                };
            case 180:
                return {
                    x: -e, y: -t
                };
            case 270:
                return {
                    x: -t, y: 0
                }
        }
    }(_, d, r, o);
    return i.width < _ && (p *= i.width / _), i.height < d && (N *= i.height / d), {
        sourceX: m,
        sourceY: x,
        sourceWidth: b,
        sourceHeight: f,
        destinationX: p,
        destinationY: N,
        destinationWidth: l ? h : u,
        destinationHeight: l ? u : h,
        canvasWidth: u,
        canvasHeight: h
    }
}

function i(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: r,
        imageRotation: o = 0,
        flipHorizontal: s = !1
    } = e, {
        sourceX: c,
        sourceY: l,
        sourceWidth: _,
        sourceHeight: d,
        destinationX: u,
        destinationY: h,
        destinationWidth: A,
        destinationHeight: g,
        canvasWidth: m,
        canvasHeight: x
    } = a({
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: r,
        imageRotation: o,
        flipHorizontal: s
    }), b = document.createElement("canvas");
    b.width = m, b.height = x;
    let f = b.getContext("2d");
    if (null != f) {
        s && f.scale(-1, 1);
        let e = s ? -o : o;
        f.rotate(e * Math.PI / 180), f.drawImage(t, c, l, _, d, u, h, A, g)
    }
    return b.toDataURL("image/png")
}

function r(e, t, n) {
    let a = e.naturalWidth / e.naturalHeight,
        r = t,
        o = n;
    e.naturalWidth > e.naturalHeight ? r /= a : o *= a;
    let s = {
        height: r,
        width: o
    };
    return i({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: s
    })
}
n.d(t, {
    R7: () => a,
    h_: () => r,
    iL: () => i
})