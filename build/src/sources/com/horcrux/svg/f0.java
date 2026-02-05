package com.horcrux.svg;

import android.graphics.Matrix;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f0 extends e {

    /* renamed from: s  reason: collision with root package name */
    private static final float[] f16880s = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16881d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16882e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16883i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16884o;

    /* renamed from: p  reason: collision with root package name */
    private ReadableArray f16885p;

    /* renamed from: q  reason: collision with root package name */
    private a.b f16886q;

    /* renamed from: r  reason: collision with root package name */
    private Matrix f16887r;

    public f0(ReactContext reactContext) {
        super(reactContext);
        this.f16887r = null;
    }

    public void c(ReadableArray readableArray) {
        this.f16885p = readableArray;
        invalidate();
    }

    public void d(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f16880s;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f16887r == null) {
                    this.f16887r = new Matrix();
                }
                this.f16887r.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f16887r = null;
        }
        invalidate();
    }

    public void e(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16886q = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16886q = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16881d = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f16883i = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f16882e = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f16884o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.LINEAR_GRADIENT, new SVGLength[]{this.f16881d, this.f16882e, this.f16883i, this.f16884o}, this.f16886q);
            aVar.e(this.f16885p);
            Matrix matrix = this.f16887r;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f16886q == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
