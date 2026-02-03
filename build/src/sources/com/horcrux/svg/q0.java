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
    private static final float[] f16625u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16626d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16627e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16628i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16629o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f16630p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f16631q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f16632r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f16633s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f16634t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f16634t = null;
    }

    public void c(Dynamic dynamic) {
        this.f16630p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f16631q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f16626d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16627e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f16632r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f16625u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f16634t == null) {
                    this.f16634t = new Matrix();
                }
                this.f16634t.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f16634t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16633s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16633s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f16628i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f16629o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0187a.RADIAL_GRADIENT, new SVGLength[]{this.f16626d, this.f16627e, this.f16628i, this.f16629o, this.f16630p, this.f16631q}, this.f16633s);
            aVar.e(this.f16632r);
            Matrix matrix = this.f16634t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f16633s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
