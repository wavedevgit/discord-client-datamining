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
    private static final float[] f17889u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17890d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17891e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17892i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17893o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17894p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17895q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17896r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17897s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17898t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17898t = null;
    }

    public void d(Dynamic dynamic) {
        this.f17894p = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17895q = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17890d = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17891e = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        this.f17896r = readableArray;
        invalidate();
    }

    public void i(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17889u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17898t == null) {
                    this.f17898t = new Matrix();
                }
                this.f17898t.setValues(fArr);
            } else if (c10 != -1) {
                q8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17898t = null;
        }
        invalidate();
    }

    public void j(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17897s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17897s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17892i = SVGLength.b(dynamic);
        invalidate();
    }

    public void l(Dynamic dynamic) {
        this.f17893o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.RADIAL_GRADIENT, new SVGLength[]{this.f17890d, this.f17891e, this.f17892i, this.f17893o, this.f17894p, this.f17895q}, this.f17897s);
            aVar.e(this.f17896r);
            Matrix matrix = this.f17898t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17897s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
