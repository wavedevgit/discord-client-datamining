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
    private static final float[] f17657u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17658d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17659e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17660i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17661o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17662p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17663q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17664r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17665s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17666t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17666t = null;
    }

    public void c(Dynamic dynamic) {
        this.f17662p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f17663q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17658d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17659e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f17664r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17657u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17666t == null) {
                    this.f17666t = new Matrix();
                }
                this.f17666t.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17666t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17665s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17665s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17660i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17661o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0206a.RADIAL_GRADIENT, new SVGLength[]{this.f17658d, this.f17659e, this.f17660i, this.f17661o, this.f17662p, this.f17663q}, this.f17665s);
            aVar.e(this.f17664r);
            Matrix matrix = this.f17666t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17665s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
