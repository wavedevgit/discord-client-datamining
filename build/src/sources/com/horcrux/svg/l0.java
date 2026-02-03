package com.horcrux.svg;

import android.graphics.Matrix;
import android.graphics.RectF;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l0 extends c0 {
    private static final float[] D = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};
    String A;
    int B;
    private Matrix C;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f16583q;

    /* renamed from: r  reason: collision with root package name */
    private SVGLength f16584r;

    /* renamed from: s  reason: collision with root package name */
    private SVGLength f16585s;

    /* renamed from: t  reason: collision with root package name */
    private SVGLength f16586t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f16587u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f16588v;

    /* renamed from: w  reason: collision with root package name */
    private float f16589w;

    /* renamed from: x  reason: collision with root package name */
    private float f16590x;

    /* renamed from: y  reason: collision with root package name */
    private float f16591y;

    /* renamed from: z  reason: collision with root package name */
    private float f16592z;

    public l0(ReactContext reactContext) {
        super(reactContext);
        this.C = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RectF getViewBox() {
        float f10 = this.f16589w;
        float f11 = this.mScale;
        float f12 = this.f16590x;
        return new RectF(f10 * f11, f12 * f11, (f10 + this.f16591y) * f11, (f12 + this.f16592z) * f11);
    }

    public void n(Dynamic dynamic) {
        this.f16586t = SVGLength.b(dynamic);
        invalidate();
    }

    public void o(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16588v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16588v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void p(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = D;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.C == null) {
                    this.C = new Matrix();
                }
                this.C.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.C = null;
        }
        invalidate();
    }

    public void q(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16587u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16587u = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(Dynamic dynamic) {
        this.f16585s = SVGLength.b(dynamic);
        invalidate();
    }

    public void s(Dynamic dynamic) {
        this.f16583q = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0187a.PATTERN, new SVGLength[]{this.f16583q, this.f16584r, this.f16585s, this.f16586t}, this.f16587u);
            aVar.d(this.f16588v);
            aVar.g(this);
            Matrix matrix = this.C;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            a.b bVar = this.f16587u;
            a.b bVar2 = a.b.USER_SPACE_ON_USE;
            if (bVar == bVar2 || this.f16588v == bVar2) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }

    public void setAlign(String str) {
        this.A = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.B = i10;
        invalidate();
    }

    public void setMinX(float f10) {
        this.f16589w = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f16590x = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f16592z = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f16591y = f10;
        invalidate();
    }

    public void t(Dynamic dynamic) {
        this.f16584r = SVGLength.b(dynamic);
        invalidate();
    }
}
