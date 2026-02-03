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
    private SVGLength f17615q;

    /* renamed from: r  reason: collision with root package name */
    private SVGLength f17616r;

    /* renamed from: s  reason: collision with root package name */
    private SVGLength f17617s;

    /* renamed from: t  reason: collision with root package name */
    private SVGLength f17618t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f17619u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f17620v;

    /* renamed from: w  reason: collision with root package name */
    private float f17621w;

    /* renamed from: x  reason: collision with root package name */
    private float f17622x;

    /* renamed from: y  reason: collision with root package name */
    private float f17623y;

    /* renamed from: z  reason: collision with root package name */
    private float f17624z;

    public l0(ReactContext reactContext) {
        super(reactContext);
        this.C = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RectF getViewBox() {
        float f10 = this.f17621w;
        float f11 = this.mScale;
        float f12 = this.f17622x;
        return new RectF(f10 * f11, f12 * f11, (f10 + this.f17623y) * f11, (f12 + this.f17624z) * f11);
    }

    public void n(Dynamic dynamic) {
        this.f17618t = SVGLength.b(dynamic);
        invalidate();
    }

    public void o(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17620v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17620v = a.b.OBJECT_BOUNDING_BOX;
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
                this.f17619u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17619u = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(Dynamic dynamic) {
        this.f17617s = SVGLength.b(dynamic);
        invalidate();
    }

    public void s(Dynamic dynamic) {
        this.f17615q = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0206a.PATTERN, new SVGLength[]{this.f17615q, this.f17616r, this.f17617s, this.f17618t}, this.f17619u);
            aVar.d(this.f17620v);
            aVar.g(this);
            Matrix matrix = this.C;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            a.b bVar = this.f17619u;
            a.b bVar2 = a.b.USER_SPACE_ON_USE;
            if (bVar == bVar2 || this.f17620v == bVar2) {
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
        this.f17621w = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f17622x = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f17624z = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f17623y = f10;
        invalidate();
    }

    public void t(Dynamic dynamic) {
        this.f17616r = SVGLength.b(dynamic);
        invalidate();
    }
}
