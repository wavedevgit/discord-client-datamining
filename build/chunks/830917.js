/** chunk id: 830917 params = (module,exports,require) **/
function a(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: a,
        maxDimensions: i,
        imageRotation: r = 0,
        flipHorizontal: o = !1
    } = e, s = t.naturalWidth / t.width, l = function(e, t) {
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
    }(a, r, o), c = r % 180 != 0, _ = n.width * s, d = n.height * s, A = Math.min(_, i.width), u = Math.min(d, i.height), g = (c ? n.height : n.width) / 2, m = (c ? n.width : n.height) / 2, h = (t.width / 2 - g - l.x) * s, L = (t.height / 2 - m - l.y) * s, x = c ? d : _, C = c ? _ : d, {
        x: f,
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
    return i.width < _ && (f *= i.width / _), i.height < d && (N *= i.height / d), {
        sourceX: h,
        sourceY: L,
        sourceWidth: x,
        sourceHeight: C,
        destinationX: f,
        destinationY: N,
        destinationWidth: c ? u : A,
        destinationHeight: c ? A : u,
        canvasWidth: A,
        canvasHeight: u
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
        sourceX: l,
        sourceY: c,
        sourceWidth: _,
        sourceHeight: d,
        destinationX: A,
        destinationY: u,
        destinationWidth: g,
        destinationHeight: m,
        canvasWidth: h,
        canvasHeight: L
    } = a({
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: r,
        imageRotation: o,
        flipHorizontal: s
    }), x = document.createElement("canvas");
    x.width = h, x.height = L;
    let C = x.getContext("2d");
    if (null != C) {
        s && C.scale(-1, 1);
        let e = s ? -o : o;
        C.rotate(e * Math.PI / 180), C.drawImage(t, l, c, _, d, A, u, g, m)
    }
    return x.toDataURL("image/png")
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