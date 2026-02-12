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
    private SVGLength f17767q;

    /* renamed from: r  reason: collision with root package name */
    private SVGLength f17768r;

    /* renamed from: s  reason: collision with root package name */
    private SVGLength f17769s;

    /* renamed from: t  reason: collision with root package name */
    private SVGLength f17770t;

    /* renamed from: u  reason: collision with root package name */
    private String f17771u;

    /* renamed from: v  reason: collision with root package name */
    private String f17772v;

    /* renamed from: w  reason: collision with root package name */
    private float f17773w;

    /* renamed from: x  reason: collision with root package name */
    private float f17774x;

    /* renamed from: y  reason: collision with root package name */
    private float f17775y;

    /* renamed from: z  reason: collision with root package name */
    private float f17776z;

    public g0(ReactContext reactContext) {
        super(reactContext);
        this.C = new Matrix();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Canvas canvas, Paint paint, float f10, o0 o0Var, float f11) {
        double parseDouble;
        int saveAndSetupCanvas = saveAndSetupCanvas(canvas, this.mCTM);
        this.C.reset();
        m0 m0Var = o0Var.f17876b;
        this.C.setTranslate((float) m0Var.f17860a, (float) m0Var.f17861b);
        if ("auto".equals(this.f17772v)) {
            parseDouble = -1.0d;
        } else {
            parseDouble = Double.parseDouble(this.f17772v);
        }
        if (parseDouble == -1.0d) {
            parseDouble = o0Var.f17877c;
        }
        this.C.preRotate(((float) parseDouble) + 180.0f);
        if ("strokeWidth".equals(this.f17771u)) {
            Matrix matrix = this.C;
            float f12 = this.mScale;
            matrix.preScale(f11 / f12, f11 / f12);
        }
        RectF rectF = new RectF(0.0f, 0.0f, (float) relativeOnWidth(this.f17769s), (float) relativeOnHeight(this.f17770t));
        if (this.A != null) {
            float f13 = this.f17773w;
            float f14 = this.mScale;
            float f15 = this.f17774x;
            Matrix a10 = l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f17775y) * f14, (f15 + this.f17776z) * f14), rectF, this.A, this.B);
            float[] fArr = new float[9];
            a10.getValues(fArr);
            this.C.preScale(fArr[0], fArr[4]);
        }
        this.C.preTranslate((float) (-relativeOnWidth(this.f17767q)), (float) (-relativeOnHeight(this.f17768r)));
        canvas.concat(this.C);
        d(canvas, paint, f10);
        restoreCanvas(canvas, saveAndSetupCanvas);
    }

    public void p(Dynamic dynamic) {
        this.f17770t = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(String str) {
        this.f17771u = str;
        invalidate();
    }

    public void r(Dynamic dynamic) {
        this.f17769s = SVGLength.b(dynamic);
        invalidate();
    }

    public void s(String str) {
        this.f17772v = str;
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
        this.f17773w = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f17774x = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f17776z = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f17775y = f10;
        invalidate();
    }

    public void t(Dynamic dynamic) {
        this.f17767q = SVGLength.b(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f17768r = SVGLength.b(dynamic);
        invalidate();
    }
}
