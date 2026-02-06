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
    private static final float[] f16999u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17000d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17001e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17002i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17003o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17004p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17005q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17006r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17007s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17008t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17008t = null;
    }

    public void c(Dynamic dynamic) {
        this.f17004p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f17005q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17000d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17001e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f17006r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f16999u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17008t == null) {
                    this.f17008t = new Matrix();
                }
                this.f17008t.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17008t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17007s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17007s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17002i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17003o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0195a.RADIAL_GRADIENT, new SVGLength[]{this.f17000d, this.f17001e, this.f17002i, this.f17003o, this.f17004p, this.f17005q}, this.f17007s);
            aVar.e(this.f17006r);
            Matrix matrix = this.f17008t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17007s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
