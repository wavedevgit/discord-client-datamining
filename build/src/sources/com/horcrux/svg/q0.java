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
    private static final float[] f17139u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17140d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17141e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17142i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17143o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17144p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17145q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17146r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17147s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17148t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17148t = null;
    }

    public void c(Dynamic dynamic) {
        this.f17144p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f17145q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17140d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17141e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f17146r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17139u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17148t == null) {
                    this.f17148t = new Matrix();
                }
                this.f17148t.setValues(fArr);
            } else if (c10 != -1) {
                q8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17148t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17147s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17147s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17142i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17143o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0222a.RADIAL_GRADIENT, new SVGLength[]{this.f17140d, this.f17141e, this.f17142i, this.f17143o, this.f17144p, this.f17145q}, this.f17147s);
            aVar.e(this.f17146r);
            Matrix matrix = this.f17148t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17147s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
