package com.google.android.material.chip;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.OvalShape;
import android.text.TextUtils;
import android.util.AttributeSet;
import bh.l;
import ch.g;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.material.internal.j;
import com.google.android.material.internal.m;
import com.google.android.material.internal.p;
import java.lang.ref.WeakReference;
import java.util.Arrays;
import qh.c;
import qh.d;
import th.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends h implements Drawable.Callback, j.b {

    /* renamed from: e1  reason: collision with root package name */
    private static final int[] f15574e1 = {16842910};

    /* renamed from: f1  reason: collision with root package name */
    private static final ShapeDrawable f15575f1 = new ShapeDrawable(new OvalShape());
    private float A0;
    private final Context B0;
    private final Paint C0;
    private final Paint D0;
    private final Paint.FontMetrics E0;
    private final RectF F0;
    private final PointF G0;
    private final Path H0;
    private final j I0;
    private int J0;
    private int K0;
    private int L0;
    private int M0;
    private int N0;
    private int O0;
    private boolean P0;
    private int Q0;
    private int R0;
    private ColorFilter S0;
    private PorterDuffColorFilter T0;
    private ColorStateList U;
    private ColorStateList U0;
    private ColorStateList V;
    private PorterDuff.Mode V0;
    private float W;
    private int[] W0;
    private float X;
    private boolean X0;
    private ColorStateList Y;
    private ColorStateList Y0;
    private float Z;
    private WeakReference Z0;

    /* renamed from: a0  reason: collision with root package name */
    private ColorStateList f15576a0;

    /* renamed from: a1  reason: collision with root package name */
    private TextUtils.TruncateAt f15577a1;

    /* renamed from: b0  reason: collision with root package name */
    private CharSequence f15578b0;

    /* renamed from: b1  reason: collision with root package name */
    private boolean f15579b1;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f15580c0;

    /* renamed from: c1  reason: collision with root package name */
    private int f15581c1;

    /* renamed from: d0  reason: collision with root package name */
    private Drawable f15582d0;

    /* renamed from: d1  reason: collision with root package name */
    private boolean f15583d1;

    /* renamed from: e0  reason: collision with root package name */
    private ColorStateList f15584e0;

    /* renamed from: f0  reason: collision with root package name */
    private float f15585f0;

    /* renamed from: g0  reason: collision with root package name */
    private boolean f15586g0;

    /* renamed from: h0  reason: collision with root package name */
    private boolean f15587h0;

    /* renamed from: i0  reason: collision with root package name */
    private Drawable f15588i0;

    /* renamed from: j0  reason: collision with root package name */
    private Drawable f15589j0;

    /* renamed from: k0  reason: collision with root package name */
    private ColorStateList f15590k0;

    /* renamed from: l0  reason: collision with root package name */
    private float f15591l0;

    /* renamed from: m0  reason: collision with root package name */
    private CharSequence f15592m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f15593n0;

    /* renamed from: o0  reason: collision with root package name */
    private boolean f15594o0;

    /* renamed from: p0  reason: collision with root package name */
    private Drawable f15595p0;

    /* renamed from: q0  reason: collision with root package name */
    private ColorStateList f15596q0;

    /* renamed from: r0  reason: collision with root package name */
    private g f15597r0;

    /* renamed from: s0  reason: collision with root package name */
    private g f15598s0;

    /* renamed from: t0  reason: collision with root package name */
    private float f15599t0;

    /* renamed from: u0  reason: collision with root package name */
    private float f15600u0;

    /* renamed from: v0  reason: collision with root package name */
    private float f15601v0;

    /* renamed from: w0  reason: collision with root package name */
    private float f15602w0;

    /* renamed from: x0  reason: collision with root package name */
    private float f15603x0;

    /* renamed from: y0  reason: collision with root package name */
    private float f15604y0;

    /* renamed from: z0  reason: collision with root package name */
    private float f15605z0;

    /* renamed from: com.google.android.material.chip.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0179a {
        void a();
    }

    private a(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        this.X = -1.0f;
        this.C0 = new Paint(1);
        this.E0 = new Paint.FontMetrics();
        this.F0 = new RectF();
        this.G0 = new PointF();
        this.H0 = new Path();
        this.R0 = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.V0 = PorterDuff.Mode.SRC_IN;
        this.Z0 = new WeakReference(null);
        T(context);
        this.B0 = context;
        j jVar = new j(this);
        this.I0 = jVar;
        this.f15578b0 = "";
        jVar.g().density = context.getResources().getDisplayMetrics().density;
        this.D0 = null;
        int[] iArr = f15574e1;
        setState(iArr);
        z2(iArr);
        this.f15579b1 = true;
        f15575f1.setTint(-1);
    }

    private void A0(Rect rect, RectF rectF) {
        rectF.set(rect);
        if (d3()) {
            float f10 = this.A0 + this.f15605z0 + this.f15591l0 + this.f15604y0 + this.f15603x0;
            if (s1.a.f(this) == 0) {
                rectF.right = rect.right - f10;
            } else {
                rectF.left = rect.left + f10;
            }
        }
    }

    private static boolean A1(int[] iArr, int i10) {
        if (iArr == null) {
            return false;
        }
        for (int i11 : iArr) {
            if (i11 == i10) {
                return true;
            }
        }
        return false;
    }

    private void B0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (d3()) {
            float f10 = this.A0 + this.f15605z0;
            if (s1.a.f(this) == 0) {
                float f11 = rect.right - f10;
                rectF.right = f11;
                rectF.left = f11 - this.f15591l0;
            } else {
                float f12 = rect.left + f10;
                rectF.left = f12;
                rectF.right = f12 + this.f15591l0;
            }
            float exactCenterY = rect.exactCenterY();
            float f13 = this.f15591l0;
            float f14 = exactCenterY - (f13 / 2.0f);
            rectF.top = f14;
            rectF.bottom = f14 + f13;
        }
    }

    private void C0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (d3()) {
            float f10 = this.A0 + this.f15605z0 + this.f15591l0 + this.f15604y0 + this.f15603x0;
            if (s1.a.f(this) == 0) {
                float f11 = rect.right;
                rectF.right = f11;
                rectF.left = f11 - f10;
            } else {
                int i10 = rect.left;
                rectF.left = i10;
                rectF.right = i10 + f10;
            }
            rectF.top = rect.top;
            rectF.bottom = rect.bottom;
        }
    }

    private void E0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (this.f15578b0 != null) {
            float z02 = this.f15599t0 + z0() + this.f15602w0;
            float D0 = this.A0 + D0() + this.f15603x0;
            if (s1.a.f(this) == 0) {
                rectF.left = rect.left + z02;
                rectF.right = rect.right - D0;
            } else {
                rectF.left = rect.left + D0;
                rectF.right = rect.right - z02;
            }
            rectF.top = rect.top;
            rectF.bottom = rect.bottom;
        }
    }

    private static boolean E1(ColorStateList colorStateList) {
        if (colorStateList != null && colorStateList.isStateful()) {
            return true;
        }
        return false;
    }

    private float F0() {
        this.I0.g().getFontMetrics(this.E0);
        Paint.FontMetrics fontMetrics = this.E0;
        return (fontMetrics.descent + fontMetrics.ascent) / 2.0f;
    }

    private static boolean F1(Drawable drawable) {
        if (drawable != null && drawable.isStateful()) {
            return true;
        }
        return false;
    }

    private static boolean G1(d dVar) {
        if (dVar != null && dVar.j() != null && dVar.j().isStateful()) {
            return true;
        }
        return false;
    }

    private boolean H0() {
        if (this.f15594o0 && this.f15595p0 != null && this.f15593n0) {
            return true;
        }
        return false;
    }

    private void H1(AttributeSet attributeSet, int i10, int i11) {
        TypedArray i12 = m.i(this.B0, attributeSet, l.N0, i10, i11, new int[0]);
        this.f15583d1 = i12.hasValue(l.f7185y1);
        p2(c.a(this.B0, i12, l.f7064l1));
        T1(c.a(this.B0, i12, l.Y0));
        h2(i12.getDimension(l.f7014g1, 0.0f));
        if (i12.hasValue(l.Z0)) {
            V1(i12.getDimension(l.Z0, 0.0f));
        }
        l2(c.a(this.B0, i12, l.f7044j1));
        n2(i12.getDimension(l.f7054k1, 0.0f));
        M2(c.a(this.B0, i12, l.f7176x1));
        R2(i12.getText(l.S0));
        d h10 = c.h(this.B0, i12, l.O0);
        h10.o(i12.getDimension(l.P0, h10.k()));
        S2(h10);
        int i13 = i12.getInt(l.Q0, 0);
        if (i13 != 1) {
            if (i13 != 2) {
                if (i13 == 3) {
                    E2(TextUtils.TruncateAt.END);
                }
            } else {
                E2(TextUtils.TruncateAt.MIDDLE);
            }
        } else {
            E2(TextUtils.TruncateAt.START);
        }
        g2(i12.getBoolean(l.f7004f1, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "chipIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "chipIconVisible") == null) {
            g2(i12.getBoolean(l.f6974c1, false));
        }
        Z1(c.e(this.B0, i12, l.f6964b1));
        if (i12.hasValue(l.f6994e1)) {
            d2(c.a(this.B0, i12, l.f6994e1));
        }
        b2(i12.getDimension(l.f6984d1, -1.0f));
        C2(i12.getBoolean(l.f7131s1, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "closeIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "closeIconVisible") == null) {
            C2(i12.getBoolean(l.f7084n1, false));
        }
        q2(c.e(this.B0, i12, l.f7074m1));
        A2(c.a(this.B0, i12, l.f7122r1));
        v2(i12.getDimension(l.f7104p1, 0.0f));
        L1(i12.getBoolean(l.T0, false));
        S1(i12.getBoolean(l.X0, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "checkedIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "checkedIconVisible") == null) {
            S1(i12.getBoolean(l.V0, false));
        }
        N1(c.e(this.B0, i12, l.U0));
        if (i12.hasValue(l.W0)) {
            P1(c.a(this.B0, i12, l.W0));
        }
        P2(g.b(this.B0, i12, l.f7194z1));
        F2(g.b(this.B0, i12, l.f7149u1));
        j2(i12.getDimension(l.f7034i1, 0.0f));
        J2(i12.getDimension(l.f7167w1, 0.0f));
        H2(i12.getDimension(l.f7158v1, 0.0f));
        X2(i12.getDimension(l.B1, 0.0f));
        U2(i12.getDimension(l.A1, 0.0f));
        x2(i12.getDimension(l.f7113q1, 0.0f));
        s2(i12.getDimension(l.f7094o1, 0.0f));
        X1(i12.getDimension(l.f6954a1, 0.0f));
        L2(i12.getDimensionPixelSize(l.R0, Integer.MAX_VALUE));
        i12.recycle();
    }

    public static a I0(Context context, AttributeSet attributeSet, int i10, int i11) {
        a aVar = new a(context, attributeSet, i10, i11);
        aVar.H1(attributeSet, i10, i11);
        return aVar;
    }

    private void J0(Canvas canvas, Rect rect) {
        if (b3()) {
            y0(rect, this.F0);
            RectF rectF = this.F0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.f15595p0.setBounds(0, 0, (int) this.F0.width(), (int) this.F0.height());
            this.f15595p0.draw(canvas);
            canvas.translate(-f10, -f11);
        }
    }

    private boolean J1(int[] iArr, int[] iArr2) {
        int i10;
        int i11;
        boolean z10;
        boolean z11;
        int i12;
        int i13;
        int i14;
        boolean z12;
        boolean z13;
        int i15;
        boolean onStateChange = super.onStateChange(iArr);
        ColorStateList colorStateList = this.U;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(iArr, this.J0);
        } else {
            i10 = 0;
        }
        int q10 = q(i10);
        boolean z14 = true;
        if (this.J0 != q10) {
            this.J0 = q10;
            onStateChange = true;
        }
        ColorStateList colorStateList2 = this.V;
        if (colorStateList2 != null) {
            i11 = colorStateList2.getColorForState(iArr, this.K0);
        } else {
            i11 = 0;
        }
        int q11 = q(i11);
        if (this.K0 != q11) {
            this.K0 = q11;
            onStateChange = true;
        }
        int i16 = jh.a.i(q10, q11);
        if (this.L0 != i16) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (D() == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 | z11) {
            this.L0 = i16;
            f0(ColorStateList.valueOf(i16));
            onStateChange = true;
        }
        ColorStateList colorStateList3 = this.Y;
        if (colorStateList3 != null) {
            i12 = colorStateList3.getColorForState(iArr, this.M0);
        } else {
            i12 = 0;
        }
        if (this.M0 != i12) {
            this.M0 = i12;
            onStateChange = true;
        }
        if (this.Y0 != null && rh.a.e(iArr)) {
            i13 = this.Y0.getColorForState(iArr, this.N0);
        } else {
            i13 = 0;
        }
        if (this.N0 != i13) {
            this.N0 = i13;
            if (this.X0) {
                onStateChange = true;
            }
        }
        if (this.I0.e() != null && this.I0.e().j() != null) {
            i14 = this.I0.e().j().getColorForState(iArr, this.O0);
        } else {
            i14 = 0;
        }
        if (this.O0 != i14) {
            this.O0 = i14;
            onStateChange = true;
        }
        if (A1(getState(), 16842912) && this.f15593n0) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.P0 != z12 && this.f15595p0 != null) {
            float z02 = z0();
            this.P0 = z12;
            if (z02 != z0()) {
                onStateChange = true;
                z13 = true;
            } else {
                z13 = false;
                onStateChange = true;
            }
        } else {
            z13 = false;
        }
        ColorStateList colorStateList4 = this.U0;
        if (colorStateList4 != null) {
            i15 = colorStateList4.getColorForState(iArr, this.Q0);
        } else {
            i15 = 0;
        }
        if (this.Q0 != i15) {
            this.Q0 = i15;
            this.T0 = com.google.android.material.drawable.c.m(this, this.U0, this.V0);
        } else {
            z14 = onStateChange;
        }
        if (F1(this.f15582d0)) {
            z14 |= this.f15582d0.setState(iArr);
        }
        if (F1(this.f15595p0)) {
            z14 |= this.f15595p0.setState(iArr);
        }
        if (F1(this.f15588i0)) {
            int[] iArr3 = new int[iArr.length + iArr2.length];
            System.arraycopy(iArr, 0, iArr3, 0, iArr.length);
            System.arraycopy(iArr2, 0, iArr3, iArr.length, iArr2.length);
            z14 |= this.f15588i0.setState(iArr3);
        }
        if (F1(this.f15589j0)) {
            z14 |= this.f15589j0.setState(iArr2);
        }
        if (z14) {
            invalidateSelf();
        }
        if (z13) {
            I1();
        }
        return z14;
    }

    private void K0(Canvas canvas, Rect rect) {
        if (!this.f15583d1) {
            this.C0.setColor(this.K0);
            this.C0.setStyle(Paint.Style.FILL);
            this.C0.setColorFilter(y1());
            this.F0.set(rect);
            canvas.drawRoundRect(this.F0, V0(), V0(), this.C0);
        }
    }

    private void L0(Canvas canvas, Rect rect) {
        if (c3()) {
            y0(rect, this.F0);
            RectF rectF = this.F0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.f15582d0.setBounds(0, 0, (int) this.F0.width(), (int) this.F0.height());
            this.f15582d0.draw(canvas);
            canvas.translate(-f10, -f11);
        }
    }

    private void M0(Canvas canvas, Rect rect) {
        if (this.Z > 0.0f && !this.f15583d1) {
            this.C0.setColor(this.M0);
            this.C0.setStyle(Paint.Style.STROKE);
            if (!this.f15583d1) {
                this.C0.setColorFilter(y1());
            }
            RectF rectF = this.F0;
            float f10 = this.Z;
            rectF.set(rect.left + (f10 / 2.0f), rect.top + (f10 / 2.0f), rect.right - (f10 / 2.0f), rect.bottom - (f10 / 2.0f));
            float f11 = this.X - (this.Z / 2.0f);
            canvas.drawRoundRect(this.F0, f11, f11, this.C0);
        }
    }

    private void N0(Canvas canvas, Rect rect) {
        if (!this.f15583d1) {
            this.C0.setColor(this.J0);
            this.C0.setStyle(Paint.Style.FILL);
            this.F0.set(rect);
            canvas.drawRoundRect(this.F0, V0(), V0(), this.C0);
        }
    }

    private void O0(Canvas canvas, Rect rect) {
        if (d3()) {
            B0(rect, this.F0);
            RectF rectF = this.F0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.f15588i0.setBounds(0, 0, (int) this.F0.width(), (int) this.F0.height());
            this.f15589j0.setBounds(this.f15588i0.getBounds());
            this.f15589j0.jumpToCurrentState();
            this.f15589j0.draw(canvas);
            canvas.translate(-f10, -f11);
        }
    }

    private void P0(Canvas canvas, Rect rect) {
        this.C0.setColor(this.N0);
        this.C0.setStyle(Paint.Style.FILL);
        this.F0.set(rect);
        if (!this.f15583d1) {
            canvas.drawRoundRect(this.F0, V0(), V0(), this.C0);
            return;
        }
        l(new RectF(rect), this.H0);
        super.u(canvas, this.C0, this.H0, z());
    }

    private void Q0(Canvas canvas, Rect rect) {
        Canvas canvas2;
        Paint paint = this.D0;
        if (paint != null) {
            paint.setColor(r1.c.l(-16777216, 127));
            canvas.drawRect(rect, this.D0);
            if (c3() || b3()) {
                y0(rect, this.F0);
                canvas.drawRect(this.F0, this.D0);
            }
            if (this.f15578b0 != null) {
                canvas2 = canvas;
                canvas2.drawLine(rect.left, rect.exactCenterY(), rect.right, rect.exactCenterY(), this.D0);
            } else {
                canvas2 = canvas;
            }
            if (d3()) {
                B0(rect, this.F0);
                canvas2.drawRect(this.F0, this.D0);
            }
            this.D0.setColor(r1.c.l(-65536, 127));
            A0(rect, this.F0);
            canvas2.drawRect(this.F0, this.D0);
            this.D0.setColor(r1.c.l(-16711936, 127));
            C0(rect, this.F0);
            canvas2.drawRect(this.F0, this.D0);
        }
    }

    private void R0(Canvas canvas, Rect rect) {
        boolean z10;
        if (this.f15578b0 != null) {
            Paint.Align G0 = G0(rect, this.G0);
            E0(rect, this.F0);
            if (this.I0.e() != null) {
                this.I0.g().drawableState = getState();
                this.I0.n(this.B0);
            }
            this.I0.g().setTextAlign(G0);
            int i10 = 0;
            if (Math.round(this.I0.h(u1().toString())) > Math.round(this.F0.width())) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                i10 = canvas.save();
                canvas.clipRect(this.F0);
            }
            CharSequence charSequence = this.f15578b0;
            if (z10 && this.f15577a1 != null) {
                charSequence = TextUtils.ellipsize(charSequence, this.I0.g(), this.F0.width(), this.f15577a1);
            }
            CharSequence charSequence2 = charSequence;
            int length = charSequence2.length();
            PointF pointF = this.G0;
            canvas.drawText(charSequence2, 0, length, pointF.x, pointF.y, this.I0.g());
            if (z10) {
                canvas.restoreToCount(i10);
            }
        }
    }

    private boolean b3() {
        if (this.f15594o0 && this.f15595p0 != null && this.P0) {
            return true;
        }
        return false;
    }

    private boolean c3() {
        if (this.f15580c0 && this.f15582d0 != null) {
            return true;
        }
        return false;
    }

    private boolean d3() {
        if (this.f15587h0 && this.f15588i0 != null) {
            return true;
        }
        return false;
    }

    private void e3(Drawable drawable) {
        if (drawable != null) {
            drawable.setCallback(null);
        }
    }

    private void f3() {
        ColorStateList colorStateList;
        if (this.X0) {
            colorStateList = rh.a.d(this.f15576a0);
        } else {
            colorStateList = null;
        }
        this.Y0 = colorStateList;
    }

    private void g3() {
        this.f15589j0 = new RippleDrawable(rh.a.d(s1()), this.f15588i0, f15575f1);
    }

    private float m1() {
        Drawable drawable;
        if (this.P0) {
            drawable = this.f15595p0;
        } else {
            drawable = this.f15582d0;
        }
        float f10 = this.f15585f0;
        if (f10 <= 0.0f && drawable != null) {
            f10 = (float) Math.ceil(p.d(this.B0, 24));
            if (drawable.getIntrinsicHeight() <= f10) {
                return drawable.getIntrinsicHeight();
            }
        }
        return f10;
    }

    private float n1() {
        Drawable drawable;
        if (this.P0) {
            drawable = this.f15595p0;
        } else {
            drawable = this.f15582d0;
        }
        float f10 = this.f15585f0;
        if (f10 <= 0.0f && drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return f10;
    }

    private void p2(ColorStateList colorStateList) {
        if (this.U != colorStateList) {
            this.U = colorStateList;
            onStateChange(getState());
        }
    }

    private void x0(Drawable drawable) {
        if (drawable != null) {
            drawable.setCallback(this);
            s1.a.m(drawable, s1.a.f(this));
            drawable.setLevel(getLevel());
            drawable.setVisible(isVisible(), false);
            if (drawable == this.f15588i0) {
                if (drawable.isStateful()) {
                    drawable.setState(j1());
                }
                drawable.setTintList(this.f15590k0);
                return;
            }
            Drawable drawable2 = this.f15582d0;
            if (drawable == drawable2 && this.f15586g0) {
                drawable2.setTintList(this.f15584e0);
            }
            if (drawable.isStateful()) {
                drawable.setState(getState());
            }
        }
    }

    private void y0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (!c3() && !b3()) {
            return;
        }
        float f10 = this.f15599t0 + this.f15600u0;
        float n12 = n1();
        if (s1.a.f(this) == 0) {
            float f11 = rect.left + f10;
            rectF.left = f11;
            rectF.right = f11 + n12;
        } else {
            float f12 = rect.right - f10;
            rectF.right = f12;
            rectF.left = f12 - n12;
        }
        float m12 = m1();
        float exactCenterY = rect.exactCenterY() - (m12 / 2.0f);
        rectF.top = exactCenterY;
        rectF.bottom = exactCenterY + m12;
    }

    private ColorFilter y1() {
        ColorFilter colorFilter = this.S0;
        if (colorFilter != null) {
            return colorFilter;
        }
        return this.T0;
    }

    public void A2(ColorStateList colorStateList) {
        if (this.f15590k0 != colorStateList) {
            this.f15590k0 = colorStateList;
            if (d3()) {
                this.f15588i0.setTintList(colorStateList);
            }
            onStateChange(getState());
        }
    }

    public boolean B1() {
        return this.f15593n0;
    }

    public void B2(int i10) {
        A2(g.a.a(this.B0, i10));
    }

    public boolean C1() {
        return F1(this.f15588i0);
    }

    public void C2(boolean z10) {
        if (this.f15587h0 != z10) {
            boolean d32 = d3();
            this.f15587h0 = z10;
            boolean d33 = d3();
            if (d32 != d33) {
                if (d33) {
                    x0(this.f15588i0);
                } else {
                    e3(this.f15588i0);
                }
                invalidateSelf();
                I1();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float D0() {
        if (d3()) {
            return this.f15604y0 + this.f15591l0 + this.f15605z0;
        }
        return 0.0f;
    }

    public boolean D1() {
        return this.f15587h0;
    }

    public void D2(InterfaceC0179a interfaceC0179a) {
        this.Z0 = new WeakReference(interfaceC0179a);
    }

    public void E2(TextUtils.TruncateAt truncateAt) {
        this.f15577a1 = truncateAt;
    }

    public void F2(g gVar) {
        this.f15598s0 = gVar;
    }

    Paint.Align G0(Rect rect, PointF pointF) {
        pointF.set(0.0f, 0.0f);
        Paint.Align align = Paint.Align.LEFT;
        if (this.f15578b0 != null) {
            float z02 = this.f15599t0 + z0() + this.f15602w0;
            if (s1.a.f(this) == 0) {
                pointF.x = rect.left + z02;
            } else {
                pointF.x = rect.right - z02;
                align = Paint.Align.RIGHT;
            }
            pointF.y = rect.centerY() - F0();
        }
        return align;
    }

    public void G2(int i10) {
        F2(g.c(this.B0, i10));
    }

    public void H2(float f10) {
        if (this.f15601v0 != f10) {
            float z02 = z0();
            this.f15601v0 = f10;
            float z03 = z0();
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    protected void I1() {
        InterfaceC0179a interfaceC0179a = (InterfaceC0179a) this.Z0.get();
        if (interfaceC0179a != null) {
            interfaceC0179a.a();
        }
    }

    public void I2(int i10) {
        H2(this.B0.getResources().getDimension(i10));
    }

    public void J2(float f10) {
        if (this.f15600u0 != f10) {
            float z02 = z0();
            this.f15600u0 = f10;
            float z03 = z0();
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean K1(boolean z10) {
        if (this.f15588i0 == null) {
            return false;
        }
        return z2(z10 ? new int[]{16842919, 16842910} : f15574e1);
    }

    public void K2(int i10) {
        J2(this.B0.getResources().getDimension(i10));
    }

    public void L1(boolean z10) {
        if (this.f15593n0 != z10) {
            this.f15593n0 = z10;
            float z02 = z0();
            if (!z10 && this.P0) {
                this.P0 = false;
            }
            float z03 = z0();
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    public void L2(int i10) {
        this.f15581c1 = i10;
    }

    public void M1(int i10) {
        L1(this.B0.getResources().getBoolean(i10));
    }

    public void M2(ColorStateList colorStateList) {
        if (this.f15576a0 != colorStateList) {
            this.f15576a0 = colorStateList;
            f3();
            onStateChange(getState());
        }
    }

    public void N1(Drawable drawable) {
        if (this.f15595p0 != drawable) {
            float z02 = z0();
            this.f15595p0 = drawable;
            float z03 = z0();
            e3(this.f15595p0);
            x0(this.f15595p0);
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    public void N2(int i10) {
        M2(g.a.a(this.B0, i10));
    }

    public void O1(int i10) {
        N1(g.a.b(this.B0, i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O2(boolean z10) {
        this.f15579b1 = z10;
    }

    public void P1(ColorStateList colorStateList) {
        if (this.f15596q0 != colorStateList) {
            this.f15596q0 = colorStateList;
            if (H0()) {
                this.f15595p0.setTintList(colorStateList);
            }
            onStateChange(getState());
        }
    }

    public void P2(g gVar) {
        this.f15597r0 = gVar;
    }

    public void Q1(int i10) {
        P1(g.a.a(this.B0, i10));
    }

    public void Q2(int i10) {
        P2(g.c(this.B0, i10));
    }

    public void R1(int i10) {
        S1(this.B0.getResources().getBoolean(i10));
    }

    public void R2(CharSequence charSequence) {
        if (charSequence == null) {
            charSequence = "";
        }
        if (!TextUtils.equals(this.f15578b0, charSequence)) {
            this.f15578b0 = charSequence;
            this.I0.m(true);
            invalidateSelf();
            I1();
        }
    }

    public Drawable S0() {
        return this.f15595p0;
    }

    public void S1(boolean z10) {
        if (this.f15594o0 != z10) {
            boolean b32 = b3();
            this.f15594o0 = z10;
            boolean b33 = b3();
            if (b32 != b33) {
                if (b33) {
                    x0(this.f15595p0);
                } else {
                    e3(this.f15595p0);
                }
                invalidateSelf();
                I1();
            }
        }
    }

    public void S2(d dVar) {
        this.I0.k(dVar, this.B0);
    }

    public ColorStateList T0() {
        return this.f15596q0;
    }

    public void T1(ColorStateList colorStateList) {
        if (this.V != colorStateList) {
            this.V = colorStateList;
            onStateChange(getState());
        }
    }

    public void T2(int i10) {
        S2(new d(this.B0, i10));
    }

    public ColorStateList U0() {
        return this.V;
    }

    public void U1(int i10) {
        T1(g.a.a(this.B0, i10));
    }

    public void U2(float f10) {
        if (this.f15603x0 != f10) {
            this.f15603x0 = f10;
            invalidateSelf();
            I1();
        }
    }

    public float V0() {
        if (this.f15583d1) {
            return M();
        }
        return this.X;
    }

    public void V1(float f10) {
        if (this.X != f10) {
            this.X = f10;
            setShapeAppearanceModel(J().x(f10));
        }
    }

    public void V2(int i10) {
        U2(this.B0.getResources().getDimension(i10));
    }

    public float W0() {
        return this.A0;
    }

    public void W1(int i10) {
        V1(this.B0.getResources().getDimension(i10));
    }

    public void W2(float f10) {
        d v12 = v1();
        if (v12 != null) {
            v12.o(f10);
            this.I0.g().setTextSize(f10);
            a();
        }
    }

    public Drawable X0() {
        Drawable drawable = this.f15582d0;
        if (drawable != null) {
            return s1.a.q(drawable);
        }
        return null;
    }

    public void X1(float f10) {
        if (this.A0 != f10) {
            this.A0 = f10;
            invalidateSelf();
            I1();
        }
    }

    public void X2(float f10) {
        if (this.f15602w0 != f10) {
            this.f15602w0 = f10;
            invalidateSelf();
            I1();
        }
    }

    public float Y0() {
        return this.f15585f0;
    }

    public void Y1(int i10) {
        X1(this.B0.getResources().getDimension(i10));
    }

    public void Y2(int i10) {
        X2(this.B0.getResources().getDimension(i10));
    }

    public ColorStateList Z0() {
        return this.f15584e0;
    }

    public void Z1(Drawable drawable) {
        Drawable drawable2;
        Drawable X0 = X0();
        if (X0 != drawable) {
            float z02 = z0();
            if (drawable != null) {
                drawable2 = s1.a.r(drawable).mutate();
            } else {
                drawable2 = null;
            }
            this.f15582d0 = drawable2;
            float z03 = z0();
            e3(X0);
            if (c3()) {
                x0(this.f15582d0);
            }
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    public void Z2(boolean z10) {
        if (this.X0 != z10) {
            this.X0 = z10;
            f3();
            onStateChange(getState());
        }
    }

    @Override // com.google.android.material.internal.j.b
    public void a() {
        I1();
        invalidateSelf();
    }

    public float a1() {
        return this.W;
    }

    public void a2(int i10) {
        Z1(g.a.b(this.B0, i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a3() {
        return this.f15579b1;
    }

    public float b1() {
        return this.f15599t0;
    }

    public void b2(float f10) {
        if (this.f15585f0 != f10) {
            float z02 = z0();
            this.f15585f0 = f10;
            float z03 = z0();
            invalidateSelf();
            if (z02 != z03) {
                I1();
            }
        }
    }

    public ColorStateList c1() {
        return this.Y;
    }

    public void c2(int i10) {
        b2(this.B0.getResources().getDimension(i10));
    }

    public float d1() {
        return this.Z;
    }

    public void d2(ColorStateList colorStateList) {
        this.f15586g0 = true;
        if (this.f15584e0 != colorStateList) {
            this.f15584e0 = colorStateList;
            if (c3()) {
                this.f15582d0.setTintList(colorStateList);
            }
            onStateChange(getState());
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Canvas canvas2;
        int i10;
        Rect bounds = getBounds();
        if (!bounds.isEmpty() && getAlpha() != 0) {
            int i11 = this.R0;
            if (i11 < 255) {
                canvas2 = canvas;
                i10 = fh.a.a(canvas2, bounds.left, bounds.top, bounds.right, bounds.bottom, i11);
            } else {
                canvas2 = canvas;
                i10 = 0;
            }
            N0(canvas2, bounds);
            K0(canvas2, bounds);
            if (this.f15583d1) {
                super.draw(canvas2);
            }
            M0(canvas2, bounds);
            P0(canvas2, bounds);
            L0(canvas2, bounds);
            J0(canvas2, bounds);
            if (this.f15579b1) {
                R0(canvas2, bounds);
            }
            O0(canvas2, bounds);
            Q0(canvas2, bounds);
            if (this.R0 < 255) {
                canvas2.restoreToCount(i10);
            }
        }
    }

    public Drawable e1() {
        Drawable drawable = this.f15588i0;
        if (drawable != null) {
            return s1.a.q(drawable);
        }
        return null;
    }

    public void e2(int i10) {
        d2(g.a.a(this.B0, i10));
    }

    public CharSequence f1() {
        return this.f15592m0;
    }

    public void f2(int i10) {
        g2(this.B0.getResources().getBoolean(i10));
    }

    public float g1() {
        return this.f15605z0;
    }

    public void g2(boolean z10) {
        if (this.f15580c0 != z10) {
            boolean c32 = c3();
            this.f15580c0 = z10;
            boolean c33 = c3();
            if (c32 != c33) {
                if (c33) {
                    x0(this.f15582d0);
                } else {
                    e3(this.f15582d0);
                }
                invalidateSelf();
                I1();
            }
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.R0;
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        return this.S0;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return (int) this.W;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return Math.min(Math.round(this.f15599t0 + z0() + this.f15602w0 + this.I0.h(u1().toString()) + this.f15603x0 + D0() + this.A0), this.f15581c1);
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        Outline outline2;
        if (this.f15583d1) {
            super.getOutline(outline);
            return;
        }
        Rect bounds = getBounds();
        if (!bounds.isEmpty()) {
            outline.setRoundRect(bounds, this.X);
            outline2 = outline;
        } else {
            outline2 = outline;
            outline2.setRoundRect(0, 0, getIntrinsicWidth(), getIntrinsicHeight(), this.X);
        }
        outline2.setAlpha(getAlpha() / 255.0f);
    }

    public float h1() {
        return this.f15591l0;
    }

    public void h2(float f10) {
        if (this.W != f10) {
            this.W = f10;
            invalidateSelf();
            I1();
        }
    }

    public float i1() {
        return this.f15604y0;
    }

    public void i2(int i10) {
        h2(this.B0.getResources().getDimension(i10));
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.invalidateDrawable(this);
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!E1(this.U) && !E1(this.V) && !E1(this.Y)) {
            if ((!this.X0 || !E1(this.Y0)) && !G1(this.I0.e()) && !H0() && !F1(this.f15582d0) && !F1(this.f15595p0) && !E1(this.U0)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public int[] j1() {
        return this.W0;
    }

    public void j2(float f10) {
        if (this.f15599t0 != f10) {
            this.f15599t0 = f10;
            invalidateSelf();
            I1();
        }
    }

    public ColorStateList k1() {
        return this.f15590k0;
    }

    public void k2(int i10) {
        j2(this.B0.getResources().getDimension(i10));
    }

    public void l1(RectF rectF) {
        C0(getBounds(), rectF);
    }

    public void l2(ColorStateList colorStateList) {
        if (this.Y != colorStateList) {
            this.Y = colorStateList;
            if (this.f15583d1) {
                p0(colorStateList);
            }
            onStateChange(getState());
        }
    }

    public void m2(int i10) {
        l2(g.a.a(this.B0, i10));
    }

    public void n2(float f10) {
        if (this.Z != f10) {
            this.Z = f10;
            this.C0.setStrokeWidth(f10);
            if (this.f15583d1) {
                super.q0(f10);
            }
            invalidateSelf();
        }
    }

    public TextUtils.TruncateAt o1() {
        return this.f15577a1;
    }

    public void o2(int i10) {
        n2(this.B0.getResources().getDimension(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public boolean onLayoutDirectionChanged(int i10) {
        boolean onLayoutDirectionChanged = super.onLayoutDirectionChanged(i10);
        if (c3()) {
            onLayoutDirectionChanged |= s1.a.m(this.f15582d0, i10);
        }
        if (b3()) {
            onLayoutDirectionChanged |= s1.a.m(this.f15595p0, i10);
        }
        if (d3()) {
            onLayoutDirectionChanged |= s1.a.m(this.f15588i0, i10);
        }
        if (onLayoutDirectionChanged) {
            invalidateSelf();
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        boolean onLevelChange = super.onLevelChange(i10);
        if (c3()) {
            onLevelChange |= this.f15582d0.setLevel(i10);
        }
        if (b3()) {
            onLevelChange |= this.f15595p0.setLevel(i10);
        }
        if (d3()) {
            onLevelChange |= this.f15588i0.setLevel(i10);
        }
        if (onLevelChange) {
            invalidateSelf();
        }
        return onLevelChange;
    }

    @Override // th.h, android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        if (this.f15583d1) {
            super.onStateChange(iArr);
        }
        return J1(iArr, j1());
    }

    public g p1() {
        return this.f15598s0;
    }

    public float q1() {
        return this.f15601v0;
    }

    public void q2(Drawable drawable) {
        Drawable drawable2;
        Drawable e12 = e1();
        if (e12 != drawable) {
            float D0 = D0();
            if (drawable != null) {
                drawable2 = s1.a.r(drawable).mutate();
            } else {
                drawable2 = null;
            }
            this.f15588i0 = drawable2;
            g3();
            float D02 = D0();
            e3(e12);
            if (d3()) {
                x0(this.f15588i0);
            }
            invalidateSelf();
            if (D0 != D02) {
                I1();
            }
        }
    }

    public float r1() {
        return this.f15600u0;
    }

    public void r2(CharSequence charSequence) {
        if (this.f15592m0 != charSequence) {
            this.f15592m0 = a2.a.c().h(charSequence);
            invalidateSelf();
        }
    }

    public ColorStateList s1() {
        return this.f15576a0;
    }

    public void s2(float f10) {
        if (this.f15605z0 != f10) {
            this.f15605z0 = f10;
            invalidateSelf();
            if (d3()) {
                I1();
            }
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.scheduleDrawable(this, runnable, j10);
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (this.R0 != i10) {
            this.R0 = i10;
            invalidateSelf();
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        if (this.S0 != colorFilter) {
            this.S0 = colorFilter;
            invalidateSelf();
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        if (this.U0 != colorStateList) {
            this.U0 = colorStateList;
            onStateChange(getState());
        }
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        if (this.V0 != mode) {
            this.V0 = mode;
            this.T0 = com.google.android.material.drawable.c.m(this, this.U0, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        boolean visible = super.setVisible(z10, z11);
        if (c3()) {
            visible |= this.f15582d0.setVisible(z10, z11);
        }
        if (b3()) {
            visible |= this.f15595p0.setVisible(z10, z11);
        }
        if (d3()) {
            visible |= this.f15588i0.setVisible(z10, z11);
        }
        if (visible) {
            invalidateSelf();
        }
        return visible;
    }

    public g t1() {
        return this.f15597r0;
    }

    public void t2(int i10) {
        s2(this.B0.getResources().getDimension(i10));
    }

    public CharSequence u1() {
        return this.f15578b0;
    }

    public void u2(int i10) {
        q2(g.a.b(this.B0, i10));
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.unscheduleDrawable(this, runnable);
        }
    }

    public d v1() {
        return this.I0.e();
    }

    public void v2(float f10) {
        if (this.f15591l0 != f10) {
            this.f15591l0 = f10;
            invalidateSelf();
            if (d3()) {
                I1();
            }
        }
    }

    public float w1() {
        return this.f15603x0;
    }

    public void w2(int i10) {
        v2(this.B0.getResources().getDimension(i10));
    }

    public float x1() {
        return this.f15602w0;
    }

    public void x2(float f10) {
        if (this.f15604y0 != f10) {
            this.f15604y0 = f10;
            invalidateSelf();
            if (d3()) {
                I1();
            }
        }
    }

    public void y2(int i10) {
        x2(this.B0.getResources().getDimension(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float z0() {
        if (!c3() && !b3()) {
            return 0.0f;
        }
        return this.f15600u0 + n1() + this.f15601v0;
    }

    public boolean z1() {
        return this.X0;
    }

    public boolean z2(int[] iArr) {
        if (!Arrays.equals(this.W0, iArr)) {
            this.W0 = iArr;
            if (d3()) {
                return J1(getState(), iArr);
            }
            return false;
        }
        return false;
    }
}
