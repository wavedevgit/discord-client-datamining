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
    private SVGLength f16877q;

    /* renamed from: r  reason: collision with root package name */
    private SVGLength f16878r;

    /* renamed from: s  reason: collision with root package name */
    private SVGLength f16879s;

    /* renamed from: t  reason: collision with root package name */
    private SVGLength f16880t;

    /* renamed from: u  reason: collision with root package name */
    private String f16881u;

    /* renamed from: v  reason: collision with root package name */
    private String f16882v;

    /* renamed from: w  reason: collision with root package name */
    private float f16883w;

    /* renamed from: x  reason: collision with root package name */
    private float f16884x;

    /* renamed from: y  reason: collision with root package name */
    private float f16885y;

    /* renamed from: z  reason: collision with root package name */
    private float f16886z;

    public g0(ReactContext reactContext) {
        super(reactContext);
        this.C = new Matrix();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(Canvas canvas, Paint paint, float f10, o0 o0Var, float f11) {
        double parseDouble;
        int saveAndSetupCanvas = saveAndSetupCanvas(canvas, this.mCTM);
        this.C.reset();
        m0 m0Var = o0Var.f16986b;
        this.C.setTranslate((float) m0Var.f16970a, (float) m0Var.f16971b);
        if ("auto".equals(this.f16882v)) {
            parseDouble = -1.0d;
        } else {
            parseDouble = Double.parseDouble(this.f16882v);
        }
        if (parseDouble == -1.0d) {
            parseDouble = o0Var.f16987c;
        }
        this.C.preRotate(((float) parseDouble) + 180.0f);
        if ("strokeWidth".equals(this.f16881u)) {
            Matrix matrix = this.C;
            float f12 = this.mScale;
            matrix.preScale(f11 / f12, f11 / f12);
        }
        RectF rectF = new RectF(0.0f, 0.0f, (float) relativeOnWidth(this.f16879s), (float) relativeOnHeight(this.f16880t));
        if (this.A != null) {
            float f13 = this.f16883w;
            float f14 = this.mScale;
            float f15 = this.f16884x;
            Matrix a10 = l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f16885y) * f14, (f15 + this.f16886z) * f14), rectF, this.A, this.B);
            float[] fArr = new float[9];
            a10.getValues(fArr);
            this.C.preScale(fArr[0], fArr[4]);
        }
        this.C.preTranslate((float) (-relativeOnWidth(this.f16877q)), (float) (-relativeOnHeight(this.f16878r)));
        canvas.concat(this.C);
        c(canvas, paint, f10);
        restoreCanvas(canvas, saveAndSetupCanvas);
    }

    public void o(Dynamic dynamic) {
        this.f16880t = SVGLength.b(dynamic);
        invalidate();
    }

    public void p(String str) {
        this.f16881u = str;
        invalidate();
    }

    public void q(Dynamic dynamic) {
        this.f16879s = SVGLength.b(dynamic);
        invalidate();
    }

    public void r(String str) {
        this.f16882v = str;
        invalidate();
    }

    public void s(Dynamic dynamic) {
        this.f16877q = SVGLength.b(dynamic);
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
        this.f16883w = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f16884x = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f16886z = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f16885y = f10;
        invalidate();
    }

    public void t(Dynamic dynamic) {
        this.f16878r = SVGLength.b(dynamic);
        invalidate();
    }
}
