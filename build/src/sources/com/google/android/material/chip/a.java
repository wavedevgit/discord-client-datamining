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
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.material.internal.j;
import com.google.android.material.internal.l;
import com.google.android.material.internal.o;
import java.lang.ref.WeakReference;
import java.util.Arrays;
import lh.d;
import mh.b;
import oh.g;
import r1.c;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends g implements Drawable.Callback, j.b {
    private static final int[] U0 = {16842910};
    private static final ShapeDrawable V0 = new ShapeDrawable(new OvalShape());
    private int A0;
    private int B0;
    private int C0;
    private int D0;
    private int E0;
    private boolean F0;
    private int G0;
    private int H0;
    private ColorFilter I0;
    private PorterDuffColorFilter J0;
    private ColorStateList K;
    private ColorStateList K0;
    private ColorStateList L;
    private PorterDuff.Mode L0;
    private float M;
    private int[] M0;
    private float N;
    private boolean N0;
    private ColorStateList O;
    private ColorStateList O0;
    private float P;
    private WeakReference P0;
    private ColorStateList Q;
    private TextUtils.TruncateAt Q0;
    private CharSequence R;
    private boolean R0;
    private boolean S;
    private int S0;
    private Drawable T;
    private boolean T0;
    private ColorStateList U;
    private float V;
    private boolean W;
    private boolean X;
    private Drawable Y;
    private Drawable Z;

    /* renamed from: a0  reason: collision with root package name */
    private ColorStateList f14448a0;

    /* renamed from: b0  reason: collision with root package name */
    private float f14449b0;

    /* renamed from: c0  reason: collision with root package name */
    private CharSequence f14450c0;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f14451d0;

    /* renamed from: e0  reason: collision with root package name */
    private boolean f14452e0;

    /* renamed from: f0  reason: collision with root package name */
    private Drawable f14453f0;

    /* renamed from: g0  reason: collision with root package name */
    private ColorStateList f14454g0;

    /* renamed from: h0  reason: collision with root package name */
    private zg.g f14455h0;

    /* renamed from: i0  reason: collision with root package name */
    private zg.g f14456i0;

    /* renamed from: j0  reason: collision with root package name */
    private float f14457j0;

    /* renamed from: k0  reason: collision with root package name */
    private float f14458k0;

    /* renamed from: l0  reason: collision with root package name */
    private float f14459l0;

    /* renamed from: m0  reason: collision with root package name */
    private float f14460m0;

    /* renamed from: n0  reason: collision with root package name */
    private float f14461n0;

    /* renamed from: o0  reason: collision with root package name */
    private float f14462o0;

    /* renamed from: p0  reason: collision with root package name */
    private float f14463p0;

    /* renamed from: q0  reason: collision with root package name */
    private float f14464q0;

    /* renamed from: r0  reason: collision with root package name */
    private final Context f14465r0;

    /* renamed from: s0  reason: collision with root package name */
    private final Paint f14466s0;

    /* renamed from: t0  reason: collision with root package name */
    private final Paint f14467t0;

    /* renamed from: u0  reason: collision with root package name */
    private final Paint.FontMetrics f14468u0;

    /* renamed from: v0  reason: collision with root package name */
    private final RectF f14469v0;

    /* renamed from: w0  reason: collision with root package name */
    private final PointF f14470w0;

    /* renamed from: x0  reason: collision with root package name */
    private final Path f14471x0;

    /* renamed from: y0  reason: collision with root package name */
    private final j f14472y0;

    /* renamed from: z0  reason: collision with root package name */
    private int f14473z0;

    /* renamed from: com.google.android.material.chip.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0165a {
        void a();
    }

    private a(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        this.N = -1.0f;
        this.f14466s0 = new Paint(1);
        this.f14468u0 = new Paint.FontMetrics();
        this.f14469v0 = new RectF();
        this.f14470w0 = new PointF();
        this.f14471x0 = new Path();
        this.H0 = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.L0 = PorterDuff.Mode.SRC_IN;
        this.P0 = new WeakReference(null);
        N(context);
        this.f14465r0 = context;
        j jVar = new j(this);
        this.f14472y0 = jVar;
        this.R = "";
        jVar.f().density = context.getResources().getDisplayMetrics().density;
        this.f14467t0 = null;
        int[] iArr = U0;
        setState(iArr);
        l2(iArr);
        this.R0 = true;
        if (b.f38858a) {
            V0.setTint(-1);
        }
    }

    private void A0(Canvas canvas, Rect rect) {
        if (!this.T0) {
            this.f14466s0.setColor(this.f14473z0);
            this.f14466s0.setStyle(Paint.Style.FILL);
            this.f14469v0.set(rect);
            canvas.drawRoundRect(this.f14469v0, I0(), I0(), this.f14466s0);
        }
    }

    private void B0(Canvas canvas, Rect rect) {
        if (P2()) {
            o0(rect, this.f14469v0);
            RectF rectF = this.f14469v0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.Y.setBounds(0, 0, (int) this.f14469v0.width(), (int) this.f14469v0.height());
            if (b.f38858a) {
                this.Z.setBounds(this.Y.getBounds());
                this.Z.jumpToCurrentState();
                this.Z.draw(canvas);
            } else {
                this.Y.draw(canvas);
            }
            canvas.translate(-f10, -f11);
        }
    }

    private void C0(Canvas canvas, Rect rect) {
        this.f14466s0.setColor(this.D0);
        this.f14466s0.setStyle(Paint.Style.FILL);
        this.f14469v0.set(rect);
        if (!this.T0) {
            canvas.drawRoundRect(this.f14469v0, I0(), I0(), this.f14466s0);
            return;
        }
        h(new RectF(rect), this.f14471x0);
        super.p(canvas, this.f14466s0, this.f14471x0, u());
    }

    private void D0(Canvas canvas, Rect rect) {
        Canvas canvas2;
        Paint paint = this.f14467t0;
        if (paint != null) {
            paint.setColor(c.l(-16777216, 127));
            canvas.drawRect(rect, this.f14467t0);
            if (O2() || N2()) {
                l0(rect, this.f14469v0);
                canvas.drawRect(this.f14469v0, this.f14467t0);
            }
            if (this.R != null) {
                canvas2 = canvas;
                canvas2.drawLine(rect.left, rect.exactCenterY(), rect.right, rect.exactCenterY(), this.f14467t0);
            } else {
                canvas2 = canvas;
            }
            if (P2()) {
                o0(rect, this.f14469v0);
                canvas2.drawRect(this.f14469v0, this.f14467t0);
            }
            this.f14467t0.setColor(c.l(-65536, 127));
            n0(rect, this.f14469v0);
            canvas2.drawRect(this.f14469v0, this.f14467t0);
            this.f14467t0.setColor(c.l(-16711936, 127));
            p0(rect, this.f14469v0);
            canvas2.drawRect(this.f14469v0, this.f14467t0);
        }
    }

    private void E0(Canvas canvas, Rect rect) {
        boolean z10;
        if (this.R != null) {
            Paint.Align t02 = t0(rect, this.f14470w0);
            r0(rect, this.f14469v0);
            if (this.f14472y0.e() != null) {
                this.f14472y0.f().drawableState = getState();
                this.f14472y0.l(this.f14465r0);
            }
            this.f14472y0.f().setTextAlign(t02);
            int i10 = 0;
            if (Math.round(this.f14472y0.g(h1().toString())) > Math.round(this.f14469v0.width())) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                i10 = canvas.save();
                canvas.clipRect(this.f14469v0);
            }
            CharSequence charSequence = this.R;
            if (z10 && this.Q0 != null) {
                charSequence = TextUtils.ellipsize(charSequence, this.f14472y0.f(), this.f14469v0.width(), this.Q0);
            }
            CharSequence charSequence2 = charSequence;
            int length = charSequence2.length();
            PointF pointF = this.f14470w0;
            canvas.drawText(charSequence2, 0, length, pointF.x, pointF.y, this.f14472y0.f());
            if (z10) {
                canvas.restoreToCount(i10);
            }
        }
    }

    private boolean N2() {
        if (this.f14452e0 && this.f14453f0 != null && this.F0) {
            return true;
        }
        return false;
    }

    private boolean O2() {
        if (this.S && this.T != null) {
            return true;
        }
        return false;
    }

    private boolean P2() {
        if (this.X && this.Y != null) {
            return true;
        }
        return false;
    }

    private void Q2(Drawable drawable) {
        if (drawable != null) {
            drawable.setCallback(null);
        }
    }

    private void R2() {
        ColorStateList colorStateList;
        if (this.N0) {
            colorStateList = b.a(this.Q);
        } else {
            colorStateList = null;
        }
        this.O0 = colorStateList;
    }

    private void S2() {
        this.Z = new RippleDrawable(b.a(f1()), this.Y, V0);
    }

    private float Z0() {
        Drawable drawable;
        if (this.F0) {
            drawable = this.f14453f0;
        } else {
            drawable = this.T;
        }
        float f10 = this.V;
        if (f10 <= 0.0f && drawable != null) {
            f10 = (float) Math.ceil(o.d(this.f14465r0, 24));
            if (drawable.getIntrinsicHeight() <= f10) {
                return drawable.getIntrinsicHeight();
            }
        }
        return f10;
    }

    private float a1() {
        Drawable drawable;
        if (this.F0) {
            drawable = this.f14453f0;
        } else {
            drawable = this.T;
        }
        float f10 = this.V;
        if (f10 <= 0.0f && drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return f10;
    }

    private void b2(ColorStateList colorStateList) {
        if (this.K != colorStateList) {
            this.K = colorStateList;
            onStateChange(getState());
        }
    }

    private void k0(Drawable drawable) {
        if (drawable != null) {
            drawable.setCallback(this);
            s1.a.m(drawable, s1.a.f(this));
            drawable.setLevel(getLevel());
            drawable.setVisible(isVisible(), false);
            if (drawable == this.Y) {
                if (drawable.isStateful()) {
                    drawable.setState(W0());
                }
                s1.a.o(drawable, this.f14448a0);
                return;
            }
            Drawable drawable2 = this.T;
            if (drawable == drawable2 && this.W) {
                s1.a.o(drawable2, this.U);
            }
            if (drawable.isStateful()) {
                drawable.setState(getState());
            }
        }
    }

    private void l0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (!O2() && !N2()) {
            return;
        }
        float f10 = this.f14457j0 + this.f14458k0;
        float a12 = a1();
        if (s1.a.f(this) == 0) {
            float f11 = rect.left + f10;
            rectF.left = f11;
            rectF.right = f11 + a12;
        } else {
            float f12 = rect.right - f10;
            rectF.right = f12;
            rectF.left = f12 - a12;
        }
        float Z0 = Z0();
        float exactCenterY = rect.exactCenterY() - (Z0 / 2.0f);
        rectF.top = exactCenterY;
        rectF.bottom = exactCenterY + Z0;
    }

    private ColorFilter l1() {
        ColorFilter colorFilter = this.I0;
        if (colorFilter != null) {
            return colorFilter;
        }
        return this.J0;
    }

    private void n0(Rect rect, RectF rectF) {
        rectF.set(rect);
        if (P2()) {
            float f10 = this.f14464q0 + this.f14463p0 + this.f14449b0 + this.f14462o0 + this.f14461n0;
            if (s1.a.f(this) == 0) {
                rectF.right = rect.right - f10;
            } else {
                rectF.left = rect.left + f10;
            }
        }
    }

    private static boolean n1(int[] iArr, int i10) {
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

    private void o0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (P2()) {
            float f10 = this.f14464q0 + this.f14463p0;
            if (s1.a.f(this) == 0) {
                float f11 = rect.right - f10;
                rectF.right = f11;
                rectF.left = f11 - this.f14449b0;
            } else {
                float f12 = rect.left + f10;
                rectF.left = f12;
                rectF.right = f12 + this.f14449b0;
            }
            float exactCenterY = rect.exactCenterY();
            float f13 = this.f14449b0;
            float f14 = exactCenterY - (f13 / 2.0f);
            rectF.top = f14;
            rectF.bottom = f14 + f13;
        }
    }

    private void p0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (P2()) {
            float f10 = this.f14464q0 + this.f14463p0 + this.f14449b0 + this.f14462o0 + this.f14461n0;
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

    private void r0(Rect rect, RectF rectF) {
        rectF.setEmpty();
        if (this.R != null) {
            float m02 = this.f14457j0 + m0() + this.f14460m0;
            float q02 = this.f14464q0 + q0() + this.f14461n0;
            if (s1.a.f(this) == 0) {
                rectF.left = rect.left + m02;
                rectF.right = rect.right - q02;
            } else {
                rectF.left = rect.left + q02;
                rectF.right = rect.right - m02;
            }
            rectF.top = rect.top;
            rectF.bottom = rect.bottom;
        }
    }

    private static boolean r1(ColorStateList colorStateList) {
        if (colorStateList != null && colorStateList.isStateful()) {
            return true;
        }
        return false;
    }

    private float s0() {
        this.f14472y0.f().getFontMetrics(this.f14468u0);
        Paint.FontMetrics fontMetrics = this.f14468u0;
        return (fontMetrics.descent + fontMetrics.ascent) / 2.0f;
    }

    private static boolean s1(Drawable drawable) {
        if (drawable != null && drawable.isStateful()) {
            return true;
        }
        return false;
    }

    private static boolean t1(d dVar) {
        if (dVar != null && dVar.i() != null && dVar.i().isStateful()) {
            return true;
        }
        return false;
    }

    private boolean u0() {
        if (this.f14452e0 && this.f14453f0 != null && this.f14451d0) {
            return true;
        }
        return false;
    }

    private void u1(AttributeSet attributeSet, int i10, int i11) {
        TypedArray i12 = l.i(this.f14465r0, attributeSet, k.f54493x0, i10, i11, new int[0]);
        this.T0 = i12.hasValue(k.f54355i1);
        b2(lh.c.a(this.f14465r0, i12, k.V0));
        F1(lh.c.a(this.f14465r0, i12, k.I0));
        T1(i12.getDimension(k.Q0, 0.0f));
        if (i12.hasValue(k.J0)) {
            H1(i12.getDimension(k.J0, 0.0f));
        }
        X1(lh.c.a(this.f14465r0, i12, k.T0));
        Z1(i12.getDimension(k.U0, 0.0f));
        y2(lh.c.a(this.f14465r0, i12, k.f54345h1));
        D2(i12.getText(k.C0));
        d f10 = lh.c.f(this.f14465r0, i12, k.f54502y0);
        f10.l(i12.getDimension(k.f54511z0, f10.j()));
        E2(f10);
        int i13 = i12.getInt(k.A0, 0);
        if (i13 != 1) {
            if (i13 != 2) {
                if (i13 == 3) {
                    q2(TextUtils.TruncateAt.END);
                }
            } else {
                q2(TextUtils.TruncateAt.MIDDLE);
            }
        } else {
            q2(TextUtils.TruncateAt.START);
        }
        S1(i12.getBoolean(k.P0, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "chipIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "chipIconVisible") == null) {
            S1(i12.getBoolean(k.M0, false));
        }
        L1(lh.c.d(this.f14465r0, i12, k.L0));
        if (i12.hasValue(k.O0)) {
            P1(lh.c.a(this.f14465r0, i12, k.O0));
        }
        N1(i12.getDimension(k.N0, -1.0f));
        o2(i12.getBoolean(k.f54295c1, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "closeIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "closeIconVisible") == null) {
            o2(i12.getBoolean(k.X0, false));
        }
        c2(lh.c.d(this.f14465r0, i12, k.W0));
        m2(lh.c.a(this.f14465r0, i12, k.f54285b1));
        h2(i12.getDimension(k.Z0, 0.0f));
        x1(i12.getBoolean(k.D0, false));
        E1(i12.getBoolean(k.H0, false));
        if (attributeSet != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "checkedIconEnabled") != null && attributeSet.getAttributeValue("http://schemas.android.com/apk/res-auto", "checkedIconVisible") == null) {
            E1(i12.getBoolean(k.F0, false));
        }
        z1(lh.c.d(this.f14465r0, i12, k.E0));
        if (i12.hasValue(k.G0)) {
            B1(lh.c.a(this.f14465r0, i12, k.G0));
        }
        B2(zg.g.b(this.f14465r0, i12, k.f54365j1));
        r2(zg.g.b(this.f14465r0, i12, k.f54315e1));
        V1(i12.getDimension(k.S0, 0.0f));
        v2(i12.getDimension(k.f54335g1, 0.0f));
        t2(i12.getDimension(k.f54325f1, 0.0f));
        J2(i12.getDimension(k.f54385l1, 0.0f));
        G2(i12.getDimension(k.f54375k1, 0.0f));
        j2(i12.getDimension(k.f54275a1, 0.0f));
        e2(i12.getDimension(k.Y0, 0.0f));
        J1(i12.getDimension(k.K0, 0.0f));
        x2(i12.getDimensionPixelSize(k.B0, Integer.MAX_VALUE));
        i12.recycle();
    }

    public static a v0(Context context, AttributeSet attributeSet, int i10, int i11) {
        a aVar = new a(context, attributeSet, i10, i11);
        aVar.u1(attributeSet, i10, i11);
        return aVar;
    }

    private void w0(Canvas canvas, Rect rect) {
        if (N2()) {
            l0(rect, this.f14469v0);
            RectF rectF = this.f14469v0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.f14453f0.setBounds(0, 0, (int) this.f14469v0.width(), (int) this.f14469v0.height());
            this.f14453f0.draw(canvas);
            canvas.translate(-f10, -f11);
        }
    }

    private boolean w1(int[] iArr, int[] iArr2) {
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
        ColorStateList colorStateList = this.K;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(iArr, this.f14473z0);
        } else {
            i10 = 0;
        }
        int l10 = l(i10);
        boolean z14 = true;
        if (this.f14473z0 != l10) {
            this.f14473z0 = l10;
            onStateChange = true;
        }
        ColorStateList colorStateList2 = this.L;
        if (colorStateList2 != null) {
            i11 = colorStateList2.getColorForState(iArr, this.A0);
        } else {
            i11 = 0;
        }
        int l11 = l(i11);
        if (this.A0 != l11) {
            this.A0 = l11;
            onStateChange = true;
        }
        int i16 = eh.a.i(l10, l11);
        if (this.B0 != i16) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (x() == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 | z11) {
            this.B0 = i16;
            X(ColorStateList.valueOf(i16));
            onStateChange = true;
        }
        ColorStateList colorStateList3 = this.O;
        if (colorStateList3 != null) {
            i12 = colorStateList3.getColorForState(iArr, this.C0);
        } else {
            i12 = 0;
        }
        if (this.C0 != i12) {
            this.C0 = i12;
            onStateChange = true;
        }
        if (this.O0 != null && b.b(iArr)) {
            i13 = this.O0.getColorForState(iArr, this.D0);
        } else {
            i13 = 0;
        }
        if (this.D0 != i13) {
            this.D0 = i13;
            if (this.N0) {
                onStateChange = true;
            }
        }
        if (this.f14472y0.e() != null && this.f14472y0.e().i() != null) {
            i14 = this.f14472y0.e().i().getColorForState(iArr, this.E0);
        } else {
            i14 = 0;
        }
        if (this.E0 != i14) {
            this.E0 = i14;
            onStateChange = true;
        }
        if (n1(getState(), 16842912) && this.f14451d0) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.F0 != z12 && this.f14453f0 != null) {
            float m02 = m0();
            this.F0 = z12;
            if (m02 != m0()) {
                onStateChange = true;
                z13 = true;
            } else {
                z13 = false;
                onStateChange = true;
            }
        } else {
            z13 = false;
        }
        ColorStateList colorStateList4 = this.K0;
        if (colorStateList4 != null) {
            i15 = colorStateList4.getColorForState(iArr, this.G0);
        } else {
            i15 = 0;
        }
        if (this.G0 != i15) {
            this.G0 = i15;
            this.J0 = com.google.android.material.drawable.c.l(this, this.K0, this.L0);
        } else {
            z14 = onStateChange;
        }
        if (s1(this.T)) {
            z14 |= this.T.setState(iArr);
        }
        if (s1(this.f14453f0)) {
            z14 |= this.f14453f0.setState(iArr);
        }
        if (s1(this.Y)) {
            int[] iArr3 = new int[iArr.length + iArr2.length];
            System.arraycopy(iArr, 0, iArr3, 0, iArr.length);
            System.arraycopy(iArr2, 0, iArr3, iArr.length, iArr2.length);
            z14 |= this.Y.setState(iArr3);
        }
        if (b.f38858a && s1(this.Z)) {
            z14 |= this.Z.setState(iArr2);
        }
        if (z14) {
            invalidateSelf();
        }
        if (z13) {
            v1();
        }
        return z14;
    }

    private void x0(Canvas canvas, Rect rect) {
        if (!this.T0) {
            this.f14466s0.setColor(this.A0);
            this.f14466s0.setStyle(Paint.Style.FILL);
            this.f14466s0.setColorFilter(l1());
            this.f14469v0.set(rect);
            canvas.drawRoundRect(this.f14469v0, I0(), I0(), this.f14466s0);
        }
    }

    private void y0(Canvas canvas, Rect rect) {
        if (O2()) {
            l0(rect, this.f14469v0);
            RectF rectF = this.f14469v0;
            float f10 = rectF.left;
            float f11 = rectF.top;
            canvas.translate(f10, f11);
            this.T.setBounds(0, 0, (int) this.f14469v0.width(), (int) this.f14469v0.height());
            this.T.draw(canvas);
            canvas.translate(-f10, -f11);
        }
    }

    private void z0(Canvas canvas, Rect rect) {
        if (this.P > 0.0f && !this.T0) {
            this.f14466s0.setColor(this.C0);
            this.f14466s0.setStyle(Paint.Style.STROKE);
            if (!this.T0) {
                this.f14466s0.setColorFilter(l1());
            }
            RectF rectF = this.f14469v0;
            float f10 = this.P;
            rectF.set(rect.left + (f10 / 2.0f), rect.top + (f10 / 2.0f), rect.right - (f10 / 2.0f), rect.bottom - (f10 / 2.0f));
            float f11 = this.N - (this.P / 2.0f);
            canvas.drawRoundRect(this.f14469v0, f11, f11, this.f14466s0);
        }
    }

    public void A1(int i10) {
        z1(g.a.b(this.f14465r0, i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A2(boolean z10) {
        this.R0 = z10;
    }

    public void B1(ColorStateList colorStateList) {
        if (this.f14454g0 != colorStateList) {
            this.f14454g0 = colorStateList;
            if (u0()) {
                s1.a.o(this.f14453f0, colorStateList);
            }
            onStateChange(getState());
        }
    }

    public void B2(zg.g gVar) {
        this.f14455h0 = gVar;
    }

    public void C1(int i10) {
        B1(g.a.a(this.f14465r0, i10));
    }

    public void C2(int i10) {
        B2(zg.g.c(this.f14465r0, i10));
    }

    public void D1(int i10) {
        E1(this.f14465r0.getResources().getBoolean(i10));
    }

    public void D2(CharSequence charSequence) {
        if (charSequence == null) {
            charSequence = "";
        }
        if (!TextUtils.equals(this.R, charSequence)) {
            this.R = charSequence;
            this.f14472y0.k(true);
            invalidateSelf();
            v1();
        }
    }

    public void E1(boolean z10) {
        if (this.f14452e0 != z10) {
            boolean N2 = N2();
            this.f14452e0 = z10;
            boolean N22 = N2();
            if (N2 != N22) {
                if (N22) {
                    k0(this.f14453f0);
                } else {
                    Q2(this.f14453f0);
                }
                invalidateSelf();
                v1();
            }
        }
    }

    public void E2(d dVar) {
        this.f14472y0.j(dVar, this.f14465r0);
    }

    public Drawable F0() {
        return this.f14453f0;
    }

    public void F1(ColorStateList colorStateList) {
        if (this.L != colorStateList) {
            this.L = colorStateList;
            onStateChange(getState());
        }
    }

    public void F2(int i10) {
        E2(new d(this.f14465r0, i10));
    }

    public ColorStateList G0() {
        return this.f14454g0;
    }

    public void G1(int i10) {
        F1(g.a.a(this.f14465r0, i10));
    }

    public void G2(float f10) {
        if (this.f14461n0 != f10) {
            this.f14461n0 = f10;
            invalidateSelf();
            v1();
        }
    }

    public ColorStateList H0() {
        return this.L;
    }

    public void H1(float f10) {
        if (this.N != f10) {
            this.N = f10;
            setShapeAppearanceModel(D().w(f10));
        }
    }

    public void H2(int i10) {
        G2(this.f14465r0.getResources().getDimension(i10));
    }

    public float I0() {
        if (this.T0) {
            return G();
        }
        return this.N;
    }

    public void I1(int i10) {
        H1(this.f14465r0.getResources().getDimension(i10));
    }

    public void I2(float f10) {
        d i12 = i1();
        if (i12 != null) {
            i12.l(f10);
            this.f14472y0.f().setTextSize(f10);
            a();
        }
    }

    public float J0() {
        return this.f14464q0;
    }

    public void J1(float f10) {
        if (this.f14464q0 != f10) {
            this.f14464q0 = f10;
            invalidateSelf();
            v1();
        }
    }

    public void J2(float f10) {
        if (this.f14460m0 != f10) {
            this.f14460m0 = f10;
            invalidateSelf();
            v1();
        }
    }

    public Drawable K0() {
        Drawable drawable = this.T;
        if (drawable != null) {
            return s1.a.q(drawable);
        }
        return null;
    }

    public void K1(int i10) {
        J1(this.f14465r0.getResources().getDimension(i10));
    }

    public void K2(int i10) {
        J2(this.f14465r0.getResources().getDimension(i10));
    }

    public float L0() {
        return this.V;
    }

    public void L1(Drawable drawable) {
        Drawable drawable2;
        Drawable K0 = K0();
        if (K0 != drawable) {
            float m02 = m0();
            if (drawable != null) {
                drawable2 = s1.a.r(drawable).mutate();
            } else {
                drawable2 = null;
            }
            this.T = drawable2;
            float m03 = m0();
            Q2(K0);
            if (O2()) {
                k0(this.T);
            }
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public void L2(boolean z10) {
        if (this.N0 != z10) {
            this.N0 = z10;
            R2();
            onStateChange(getState());
        }
    }

    public ColorStateList M0() {
        return this.U;
    }

    public void M1(int i10) {
        L1(g.a.b(this.f14465r0, i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean M2() {
        return this.R0;
    }

    public float N0() {
        return this.M;
    }

    public void N1(float f10) {
        if (this.V != f10) {
            float m02 = m0();
            this.V = f10;
            float m03 = m0();
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public float O0() {
        return this.f14457j0;
    }

    public void O1(int i10) {
        N1(this.f14465r0.getResources().getDimension(i10));
    }

    public ColorStateList P0() {
        return this.O;
    }

    public void P1(ColorStateList colorStateList) {
        this.W = true;
        if (this.U != colorStateList) {
            this.U = colorStateList;
            if (O2()) {
                s1.a.o(this.T, colorStateList);
            }
            onStateChange(getState());
        }
    }

    public float Q0() {
        return this.P;
    }

    public void Q1(int i10) {
        P1(g.a.a(this.f14465r0, i10));
    }

    public Drawable R0() {
        Drawable drawable = this.Y;
        if (drawable != null) {
            return s1.a.q(drawable);
        }
        return null;
    }

    public void R1(int i10) {
        S1(this.f14465r0.getResources().getBoolean(i10));
    }

    public CharSequence S0() {
        return this.f14450c0;
    }

    public void S1(boolean z10) {
        if (this.S != z10) {
            boolean O2 = O2();
            this.S = z10;
            boolean O22 = O2();
            if (O2 != O22) {
                if (O22) {
                    k0(this.T);
                } else {
                    Q2(this.T);
                }
                invalidateSelf();
                v1();
            }
        }
    }

    public float T0() {
        return this.f14463p0;
    }

    public void T1(float f10) {
        if (this.M != f10) {
            this.M = f10;
            invalidateSelf();
            v1();
        }
    }

    public float U0() {
        return this.f14449b0;
    }

    public void U1(int i10) {
        T1(this.f14465r0.getResources().getDimension(i10));
    }

    public float V0() {
        return this.f14462o0;
    }

    public void V1(float f10) {
        if (this.f14457j0 != f10) {
            this.f14457j0 = f10;
            invalidateSelf();
            v1();
        }
    }

    public int[] W0() {
        return this.M0;
    }

    public void W1(int i10) {
        V1(this.f14465r0.getResources().getDimension(i10));
    }

    public ColorStateList X0() {
        return this.f14448a0;
    }

    public void X1(ColorStateList colorStateList) {
        if (this.O != colorStateList) {
            this.O = colorStateList;
            if (this.T0) {
                f0(colorStateList);
            }
            onStateChange(getState());
        }
    }

    public void Y0(RectF rectF) {
        p0(getBounds(), rectF);
    }

    public void Y1(int i10) {
        X1(g.a.a(this.f14465r0, i10));
    }

    public void Z1(float f10) {
        if (this.P != f10) {
            this.P = f10;
            this.f14466s0.setStrokeWidth(f10);
            if (this.T0) {
                super.g0(f10);
            }
            invalidateSelf();
        }
    }

    @Override // com.google.android.material.internal.j.b
    public void a() {
        v1();
        invalidateSelf();
    }

    public void a2(int i10) {
        Z1(this.f14465r0.getResources().getDimension(i10));
    }

    public TextUtils.TruncateAt b1() {
        return this.Q0;
    }

    public zg.g c1() {
        return this.f14456i0;
    }

    public void c2(Drawable drawable) {
        Drawable drawable2;
        Drawable R0 = R0();
        if (R0 != drawable) {
            float q02 = q0();
            if (drawable != null) {
                drawable2 = s1.a.r(drawable).mutate();
            } else {
                drawable2 = null;
            }
            this.Y = drawable2;
            if (b.f38858a) {
                S2();
            }
            float q03 = q0();
            Q2(R0);
            if (P2()) {
                k0(this.Y);
            }
            invalidateSelf();
            if (q02 != q03) {
                v1();
            }
        }
    }

    public float d1() {
        return this.f14459l0;
    }

    public void d2(CharSequence charSequence) {
        if (this.f14450c0 != charSequence) {
            this.f14450c0 = a2.a.c().h(charSequence);
            invalidateSelf();
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Canvas canvas2;
        int i10;
        Rect bounds = getBounds();
        if (!bounds.isEmpty() && getAlpha() != 0) {
            int i11 = this.H0;
            if (i11 < 255) {
                canvas2 = canvas;
                i10 = ah.a.a(canvas2, bounds.left, bounds.top, bounds.right, bounds.bottom, i11);
            } else {
                canvas2 = canvas;
                i10 = 0;
            }
            A0(canvas2, bounds);
            x0(canvas2, bounds);
            if (this.T0) {
                super.draw(canvas2);
            }
            z0(canvas2, bounds);
            C0(canvas2, bounds);
            y0(canvas2, bounds);
            w0(canvas2, bounds);
            if (this.R0) {
                E0(canvas2, bounds);
            }
            B0(canvas2, bounds);
            D0(canvas2, bounds);
            if (this.H0 < 255) {
                canvas2.restoreToCount(i10);
            }
        }
    }

    public float e1() {
        return this.f14458k0;
    }

    public void e2(float f10) {
        if (this.f14463p0 != f10) {
            this.f14463p0 = f10;
            invalidateSelf();
            if (P2()) {
                v1();
            }
        }
    }

    public ColorStateList f1() {
        return this.Q;
    }

    public void f2(int i10) {
        e2(this.f14465r0.getResources().getDimension(i10));
    }

    public zg.g g1() {
        return this.f14455h0;
    }

    public void g2(int i10) {
        c2(g.a.b(this.f14465r0, i10));
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.H0;
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        return this.I0;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return (int) this.M;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return Math.min(Math.round(this.f14457j0 + m0() + this.f14460m0 + this.f14472y0.g(h1().toString()) + this.f14461n0 + q0() + this.f14464q0), this.S0);
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        Outline outline2;
        if (this.T0) {
            super.getOutline(outline);
            return;
        }
        Rect bounds = getBounds();
        if (!bounds.isEmpty()) {
            outline.setRoundRect(bounds, this.N);
            outline2 = outline;
        } else {
            outline2 = outline;
            outline2.setRoundRect(0, 0, getIntrinsicWidth(), getIntrinsicHeight(), this.N);
        }
        outline2.setAlpha(getAlpha() / 255.0f);
    }

    public CharSequence h1() {
        return this.R;
    }

    public void h2(float f10) {
        if (this.f14449b0 != f10) {
            this.f14449b0 = f10;
            invalidateSelf();
            if (P2()) {
                v1();
            }
        }
    }

    public d i1() {
        return this.f14472y0.e();
    }

    public void i2(int i10) {
        h2(this.f14465r0.getResources().getDimension(i10));
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.invalidateDrawable(this);
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!r1(this.K) && !r1(this.L) && !r1(this.O)) {
            if ((!this.N0 || !r1(this.O0)) && !t1(this.f14472y0.e()) && !u0() && !s1(this.T) && !s1(this.f14453f0) && !r1(this.K0)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public float j1() {
        return this.f14461n0;
    }

    public void j2(float f10) {
        if (this.f14462o0 != f10) {
            this.f14462o0 = f10;
            invalidateSelf();
            if (P2()) {
                v1();
            }
        }
    }

    public float k1() {
        return this.f14460m0;
    }

    public void k2(int i10) {
        j2(this.f14465r0.getResources().getDimension(i10));
    }

    public boolean l2(int[] iArr) {
        if (!Arrays.equals(this.M0, iArr)) {
            this.M0 = iArr;
            if (P2()) {
                return w1(getState(), iArr);
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m0() {
        if (!O2() && !N2()) {
            return 0.0f;
        }
        return this.f14458k0 + a1() + this.f14459l0;
    }

    public boolean m1() {
        return this.N0;
    }

    public void m2(ColorStateList colorStateList) {
        if (this.f14448a0 != colorStateList) {
            this.f14448a0 = colorStateList;
            if (P2()) {
                s1.a.o(this.Y, colorStateList);
            }
            onStateChange(getState());
        }
    }

    public void n2(int i10) {
        m2(g.a.a(this.f14465r0, i10));
    }

    public boolean o1() {
        return this.f14451d0;
    }

    public void o2(boolean z10) {
        if (this.X != z10) {
            boolean P2 = P2();
            this.X = z10;
            boolean P22 = P2();
            if (P2 != P22) {
                if (P22) {
                    k0(this.Y);
                } else {
                    Q2(this.Y);
                }
                invalidateSelf();
                v1();
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean onLayoutDirectionChanged(int i10) {
        boolean onLayoutDirectionChanged = super.onLayoutDirectionChanged(i10);
        if (O2()) {
            onLayoutDirectionChanged |= s1.a.m(this.T, i10);
        }
        if (N2()) {
            onLayoutDirectionChanged |= s1.a.m(this.f14453f0, i10);
        }
        if (P2()) {
            onLayoutDirectionChanged |= s1.a.m(this.Y, i10);
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
        if (O2()) {
            onLevelChange |= this.T.setLevel(i10);
        }
        if (N2()) {
            onLevelChange |= this.f14453f0.setLevel(i10);
        }
        if (P2()) {
            onLevelChange |= this.Y.setLevel(i10);
        }
        if (onLevelChange) {
            invalidateSelf();
        }
        return onLevelChange;
    }

    @Override // oh.g, android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        if (this.T0) {
            super.onStateChange(iArr);
        }
        return w1(iArr, W0());
    }

    public boolean p1() {
        return s1(this.Y);
    }

    public void p2(InterfaceC0165a interfaceC0165a) {
        this.P0 = new WeakReference(interfaceC0165a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float q0() {
        if (P2()) {
            return this.f14462o0 + this.f14449b0 + this.f14463p0;
        }
        return 0.0f;
    }

    public boolean q1() {
        return this.X;
    }

    public void q2(TextUtils.TruncateAt truncateAt) {
        this.Q0 = truncateAt;
    }

    public void r2(zg.g gVar) {
        this.f14456i0 = gVar;
    }

    public void s2(int i10) {
        r2(zg.g.c(this.f14465r0, i10));
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.scheduleDrawable(this, runnable, j10);
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (this.H0 != i10) {
            this.H0 = i10;
            invalidateSelf();
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        if (this.I0 != colorFilter) {
            this.I0 = colorFilter;
            invalidateSelf();
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        if (this.K0 != colorStateList) {
            this.K0 = colorStateList;
            onStateChange(getState());
        }
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        if (this.L0 != mode) {
            this.L0 = mode;
            this.J0 = com.google.android.material.drawable.c.l(this, this.K0, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        boolean visible = super.setVisible(z10, z11);
        if (O2()) {
            visible |= this.T.setVisible(z10, z11);
        }
        if (N2()) {
            visible |= this.f14453f0.setVisible(z10, z11);
        }
        if (P2()) {
            visible |= this.Y.setVisible(z10, z11);
        }
        if (visible) {
            invalidateSelf();
        }
        return visible;
    }

    Paint.Align t0(Rect rect, PointF pointF) {
        pointF.set(0.0f, 0.0f);
        Paint.Align align = Paint.Align.LEFT;
        if (this.R != null) {
            float m02 = this.f14457j0 + m0() + this.f14460m0;
            if (s1.a.f(this) == 0) {
                pointF.x = rect.left + m02;
            } else {
                pointF.x = rect.right - m02;
                align = Paint.Align.RIGHT;
            }
            pointF.y = rect.centerY() - s0();
        }
        return align;
    }

    public void t2(float f10) {
        if (this.f14459l0 != f10) {
            float m02 = m0();
            this.f14459l0 = f10;
            float m03 = m0();
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public void u2(int i10) {
        t2(this.f14465r0.getResources().getDimension(i10));
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
        Drawable.Callback callback = getCallback();
        if (callback != null) {
            callback.unscheduleDrawable(this, runnable);
        }
    }

    protected void v1() {
        InterfaceC0165a interfaceC0165a = (InterfaceC0165a) this.P0.get();
        if (interfaceC0165a != null) {
            interfaceC0165a.a();
        }
    }

    public void v2(float f10) {
        if (this.f14458k0 != f10) {
            float m02 = m0();
            this.f14458k0 = f10;
            float m03 = m0();
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public void w2(int i10) {
        v2(this.f14465r0.getResources().getDimension(i10));
    }

    public void x1(boolean z10) {
        if (this.f14451d0 != z10) {
            this.f14451d0 = z10;
            float m02 = m0();
            if (!z10 && this.F0) {
                this.F0 = false;
            }
            float m03 = m0();
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public void x2(int i10) {
        this.S0 = i10;
    }

    public void y1(int i10) {
        x1(this.f14465r0.getResources().getBoolean(i10));
    }

    public void y2(ColorStateList colorStateList) {
        if (this.Q != colorStateList) {
            this.Q = colorStateList;
            R2();
            onStateChange(getState());
        }
    }

    public void z1(Drawable drawable) {
        if (this.f14453f0 != drawable) {
            float m02 = m0();
            this.f14453f0 = drawable;
            float m03 = m0();
            Q2(this.f14453f0);
            k0(this.f14453f0);
            invalidateSelf();
            if (m02 != m03) {
                v1();
            }
        }
    }

    public void z2(int i10) {
        y2(g.a.a(this.f14465r0, i10));
    }
}
