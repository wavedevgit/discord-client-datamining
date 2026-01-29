package com.horcrux.svg;

import android.graphics.Matrix;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class q0 extends e {

    /* renamed from: u  reason: collision with root package name */
    private static final float[] f18028u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f18029d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f18030e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f18031i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f18032o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f18033p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f18034q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f18035r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f18036s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f18037t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f18037t = null;
    }

    public void c(Dynamic dynamic) {
        this.f18033p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f18034q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f18029d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f18030e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f18035r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f18028u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f18037t == null) {
                    this.f18037t = new Matrix();
                }
                this.f18037t.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f18037t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f18036s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f18036s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f18031i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f18032o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0201a.RADIAL_GRADIENT, new SVGLength[]{this.f18029d, this.f18030e, this.f18031i, this.f18032o, this.f18033p, this.f18034q}, this.f18036s);
            aVar.e(this.f18035r);
            Matrix matrix = this.f18037t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f18036s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
