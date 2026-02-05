package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RectF;
import android.view.View;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g0 extends c0 {
    String A;
    int B;
    Matrix C;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f16897q;

    /* renamed from: r  reason: collision with root package name */
    private SVGLength f16898r;

    /* renamed from: s  reason: collision with root package name */
    private SVGLength f16899s;

    /* renamed from: t  reason: collision with root package name */
    private SVGLength f16900t;

    /* renamed from: u  reason: collision with root package name */
    private String f16901u;

    /* renamed from: v  reason: collision with root package name */
    private String f16902v;

    /* renamed from: w  reason: collision with root package name */
    private float f16903w;

    /* renamed from: x  reason: collision with root package name */
    private float f16904x;

    /* renamed from: y  reason: collision with root package name */
    private float f16905y;

    /* renamed from: z  reason: collision with root package name */
    private float f16906z;

    public g0(ReactContext reactContext) {
        super(reactContext);
        this.C = new Matrix();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(Canvas canvas, Paint paint, float f10, o0 o0Var, float f11) {
        double parseDouble;
        int saveAndSetupCanvas = saveAndSetupCanvas(canvas, this.mCTM);
        this.C.reset();
        m0 m0Var = o0Var.f17006b;
        this.C.setTranslate((float) m0Var.f16990a, (float) m0Var.f16991b);
        if ("auto".equals(this.f16902v)) {
            parseDouble = -1.0d;
        } else {
            parseDouble = Double.parseDouble(this.f16902v);
        }
        if (parseDouble == -1.0d) {
            parseDouble = o0Var.f17007c;
        }
        this.C.preRotate(((float) parseDouble) + 180.0f);
        if ("strokeWidth".equals(this.f16901u)) {
            Matrix matrix = this.C;
            float f12 = this.mScale;
            matrix.preScale(f11 / f12, f11 / f12);
        }
        RectF rectF = new RectF(0.0f, 0.0f, (float) relativeOnWidth(this.f16899s), (float) relativeOnHeight(this.f16900t));
        if (this.A != null) {
            float f13 = this.f16903w;
            float f14 = this.mScale;
            float f15 = this.f16904x;
            Matrix a10 = l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f16905y) * f14, (f15 + this.f16906z) * f14), rectF, this.A, this.B);
            float[] fArr = new float[9];
            a10.getValues(fArr);
            this.C.preScale(fArr[0], fArr[4]);
        }
        this.C.preTranslate((float) (-relativeOnWidth(this.f16897q)), (float) (-relativeOnHeight(this.f16898r)));
        canvas.concat(this.C);
        c(canvas, paint, f10);
        restoreCanvas(canvas, saveAndSetupCanvas);
    }

    public void o(Dynamic dynamic) {
        this.f16900t = SVGLength.b(dynamic);
        invalidate();
    }

    public void p(String str) {
        this.f16901u = str;
        invalidate();
    }

    public void q(Dynamic dynamic) {
        this.f16899s = SVGLength.b(dynamic);
        invalidate();
    }

    public void r(String str) {
        this.f16902v = str;
        invalidate();
    }

    public void s(Dynamic dynamic) {
        this.f16897q = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            getSvgView().defineMarker(this, this.mName);
            for (int i10 = 0; i10 < getChildCount(); i10++) {
                View childAt = getChildAt(i10);
                if (childAt instanceof VirtualView) {
                    ((VirtualView) childAt).saveDefinition();
                }
            }
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
        this.f16903w = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f16904x = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f16906z = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f16905y = f10;
        invalidate();
    }

    public void t(Dynamic dynamic) {
        this.f16898r = SVGLength.b(dynamic);
        invalidate();
    }
}
