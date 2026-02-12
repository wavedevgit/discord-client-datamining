package com.google.android.material.navigation;

import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.os.Build;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.a1;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.google.android.material.internal.BaselineLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends FrameLayout implements g {

    /* renamed from: u0  reason: collision with root package name */
    private static final int[] f15960u0 = {16842912};

    /* renamed from: v0  reason: collision with root package name */
    private static final c f15961v0 = new c(null);

    /* renamed from: w0  reason: collision with root package name */
    private static final c f15962w0 = new C0185d(null);
    private final LinearLayout A;
    private final LinearLayout B;
    private final View C;
    private final FrameLayout D;
    private final ImageView E;
    private final BaselineLayout F;
    private final TextView G;
    private final TextView H;
    private BaselineLayout I;
    private TextView J;
    private TextView K;
    private BaselineLayout L;
    private int M;
    private int N;
    private int O;
    private int P;
    private int Q;
    private ColorStateList R;
    private boolean S;
    private androidx.appcompat.view.menu.g T;
    private ColorStateList U;
    private Drawable V;
    private Drawable W;

    /* renamed from: a0  reason: collision with root package name */
    private ValueAnimator f15963a0;

    /* renamed from: b0  reason: collision with root package name */
    private c f15964b0;

    /* renamed from: c0  reason: collision with root package name */
    private float f15965c0;

    /* renamed from: d  reason: collision with root package name */
    private boolean f15966d;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f15967d0;

    /* renamed from: e  reason: collision with root package name */
    private ColorStateList f15968e;

    /* renamed from: e0  reason: collision with root package name */
    private int f15969e0;

    /* renamed from: f0  reason: collision with root package name */
    private int f15970f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f15971g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f15972h0;

    /* renamed from: i  reason: collision with root package name */
    Drawable f15973i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f15974i0;

    /* renamed from: j0  reason: collision with root package name */
    private int f15975j0;

    /* renamed from: k0  reason: collision with root package name */
    private int f15976k0;

    /* renamed from: l0  reason: collision with root package name */
    private dh.a f15977l0;

    /* renamed from: m0  reason: collision with root package name */
    private int f15978m0;

    /* renamed from: n0  reason: collision with root package name */
    private int f15979n0;

    /* renamed from: o  reason: collision with root package name */
    private int f15980o;

    /* renamed from: o0  reason: collision with root package name */
    private int f15981o0;

    /* renamed from: p  reason: collision with root package name */
    private int f15982p;

    /* renamed from: p0  reason: collision with root package name */
    private boolean f15983p0;

    /* renamed from: q  reason: collision with root package name */
    private int f15984q;

    /* renamed from: q0  reason: collision with root package name */
    private boolean f15985q0;

    /* renamed from: r  reason: collision with root package name */
    private int f15986r;

    /* renamed from: r0  reason: collision with root package name */
    private boolean f15987r0;

    /* renamed from: s  reason: collision with root package name */
    private float f15988s;

    /* renamed from: s0  reason: collision with root package name */
    private boolean f15989s0;

    /* renamed from: t  reason: collision with root package name */
    private float f15990t;

    /* renamed from: t0  reason: collision with root package name */
    private Rect f15991t0;

    /* renamed from: u  reason: collision with root package name */
    private float f15992u;

    /* renamed from: v  reason: collision with root package name */
    private float f15993v;

    /* renamed from: w  reason: collision with root package name */
    private float f15994w;

    /* renamed from: x  reason: collision with root package name */
    private float f15995x;

    /* renamed from: y  reason: collision with root package name */
    private int f15996y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15997z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f15998d;

        a(int i10) {
            this.f15998d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            d.this.A(this.f15998d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f16000a;

        b(float f10) {
            this.f16000a = f10;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            d.this.p(((Float) valueAnimator.getAnimatedValue()).floatValue(), this.f16000a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {
        private c() {
        }

        protected float a(float f10, float f11) {
            float f12;
            float f13;
            int i10 = (f11 > 0.0f ? 1 : (f11 == 0.0f ? 0 : -1));
            if (i10 == 0) {
                f12 = 0.8f;
            } else {
                f12 = 0.0f;
            }
            if (i10 == 0) {
                f13 = 1.0f;
            } else {
                f13 = 0.2f;
            }
            return ch.a.b(0.0f, 1.0f, f12, f13, f10);
        }

        protected float b(float f10) {
            return ch.a.a(0.4f, 1.0f, f10);
        }

        protected float c(float f10) {
            return 1.0f;
        }

        public void d(float f10, float f11, View view) {
            view.setScaleX(b(f10));
            view.setScaleY(c(f10));
            view.setAlpha(a(f10, f11));
        }

        /* synthetic */ c(a aVar) {
            this();
        }
    }

    /* renamed from: com.google.android.material.navigation.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class C0185d extends c {
        private C0185d() {
            super(null);
        }

        @Override // com.google.android.material.navigation.d.c
        protected float c(float f10) {
            return b(f10);
        }

        /* synthetic */ C0185d(a aVar) {
            this();
        }
    }

    public d(Context context) {
        super(context);
        this.f15966d = false;
        this.M = -1;
        this.N = 0;
        this.O = 0;
        this.P = 0;
        this.Q = 0;
        this.S = false;
        this.f15964b0 = f15961v0;
        this.f15965c0 = 0.0f;
        this.f15967d0 = false;
        this.f15969e0 = 0;
        this.f15970f0 = 0;
        this.f15971g0 = -2;
        this.f15972h0 = 0;
        this.f15974i0 = false;
        this.f15975j0 = 0;
        this.f15976k0 = 0;
        this.f15979n0 = 0;
        this.f15981o0 = 49;
        this.f15983p0 = false;
        this.f15985q0 = false;
        this.f15987r0 = false;
        this.f15989s0 = false;
        this.f15991t0 = new Rect();
        LayoutInflater.from(context).inflate(getItemLayoutResId(), (ViewGroup) this, true);
        this.A = (LinearLayout) findViewById(bh.f.K);
        LinearLayout linearLayout = (LinearLayout) findViewById(bh.f.N);
        this.B = linearLayout;
        this.C = findViewById(bh.f.J);
        this.D = (FrameLayout) findViewById(bh.f.L);
        this.E = (ImageView) findViewById(bh.f.M);
        BaselineLayout baselineLayout = (BaselineLayout) findViewById(bh.f.O);
        this.F = baselineLayout;
        TextView textView = (TextView) findViewById(bh.f.Q);
        this.G = textView;
        TextView textView2 = (TextView) findViewById(bh.f.P);
        this.H = textView2;
        j();
        this.L = baselineLayout;
        setBackgroundResource(getItemBackgroundResId());
        this.f15980o = getResources().getDimensionPixelSize(getItemDefaultMarginResId());
        this.f15982p = baselineLayout.getPaddingBottom();
        this.f15984q = 0;
        this.f15986r = 0;
        textView.setImportantForAccessibility(2);
        textView2.setImportantForAccessibility(2);
        this.J.setImportantForAccessibility(2);
        this.K.setImportantForAccessibility(2);
        setFocusable(true);
        f();
        this.f15972h0 = getResources().getDimensionPixelSize(bh.d.E);
        linearLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.google.android.material.navigation.c
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                d.a(d.this, view, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        });
    }

    private void B() {
        if (k()) {
            this.f15964b0 = f15962w0;
        } else {
            this.f15964b0 = f15961v0;
        }
    }

    private void C() {
        TextView textView = this.H;
        textView.setTypeface(textView.getTypeface(), this.S ? 1 : 0);
        TextView textView2 = this.K;
        textView2.setTypeface(textView2.getTypeface(), this.S ? 1 : 0);
    }

    private void D(TextView textView, int i10) {
        if (textView == null) {
            return;
        }
        t(textView, i10);
        f();
        textView.setMinimumHeight(qh.c.i(textView.getContext(), i10, 0));
        ColorStateList colorStateList = this.R;
        if (colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
        C();
    }

    private void E(TextView textView, int i10) {
        if (textView != null) {
            t(textView, i10);
            f();
            textView.setMinimumHeight(qh.c.i(textView.getContext(), i10, 0));
            ColorStateList colorStateList = this.R;
            if (colorStateList != null) {
                textView.setTextColor(colorStateList);
            }
        }
    }

    private void F() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        this.f15979n0 = 0;
        this.L = this.F;
        int i16 = 8;
        if (this.f15978m0 == 1) {
            if (this.I.getParent() == null) {
                e();
            }
            Rect rect = this.f15991t0;
            int i17 = rect.left;
            int i18 = rect.right;
            int i19 = rect.top;
            i10 = rect.bottom;
            this.f15979n0 = 1;
            int i20 = this.f15976k0;
            this.L = this.I;
            i14 = i19;
            i13 = i18;
            i12 = i17;
            i11 = i20;
            i15 = 0;
        } else {
            i10 = 0;
            i11 = 0;
            i12 = 0;
            i13 = 0;
            i14 = 0;
            i15 = 8;
            i16 = 0;
        }
        this.F.setVisibility(i16);
        this.I.setVisibility(i15);
        ((FrameLayout.LayoutParams) this.A.getLayoutParams()).gravity = this.f15981o0;
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) this.B.getLayoutParams();
        layoutParams.leftMargin = i12;
        layoutParams.rightMargin = i13;
        layoutParams.topMargin = i14;
        layoutParams.bottomMargin = i10;
        setPadding(i11, 0, i11, 0);
        A(getWidth());
    }

    private static void G(View view, int i10) {
        view.setPadding(view.getPaddingLeft(), view.getPaddingTop(), view.getPaddingRight(), i10);
    }

    private void H() {
        int i10;
        androidx.appcompat.view.menu.g gVar = this.T;
        if (gVar != null) {
            if (gVar.isVisible() && (this.f15983p0 || !this.f15985q0)) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            setVisibility(i10);
        }
    }

    public static /* synthetic */ void a(d dVar, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        boolean z10;
        if (dVar.E.getVisibility() == 0) {
            dVar.z(dVar.E);
        }
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) dVar.B.getLayoutParams();
        int i18 = (i12 - i10) + layoutParams.rightMargin + layoutParams.leftMargin;
        int i19 = (i13 - i11) + layoutParams.topMargin + layoutParams.bottomMargin;
        boolean z11 = true;
        if (dVar.f15978m0 == 1 && dVar.f15971g0 == -2) {
            FrameLayout.LayoutParams layoutParams2 = (FrameLayout.LayoutParams) dVar.C.getLayoutParams();
            if (dVar.f15971g0 == -2 && dVar.C.getMeasuredWidth() != i18) {
                layoutParams2.width = Math.max(i18, Math.min(dVar.f15969e0, dVar.getMeasuredWidth() - (dVar.f15975j0 * 2)));
                z10 = true;
            } else {
                z10 = false;
            }
            if (dVar.C.getMeasuredHeight() < i19) {
                layoutParams2.height = i19;
            } else {
                z11 = z10;
            }
            if (z11) {
                dVar.C.setLayoutParams(layoutParams2);
            }
        }
    }

    private void e() {
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(-2, -2);
        layoutParams.gravity = 17;
        this.B.addView(this.I, layoutParams);
        q();
    }

    private void f() {
        float textSize = this.G.getTextSize();
        float textSize2 = this.H.getTextSize();
        this.f15988s = textSize - textSize2;
        this.f15990t = (textSize2 * 1.0f) / textSize;
        this.f15992u = (textSize * 1.0f) / textSize2;
        float textSize3 = this.J.getTextSize();
        float textSize4 = this.K.getTextSize();
        this.f15993v = textSize3 - textSize4;
        this.f15994w = (textSize4 * 1.0f) / textSize3;
        this.f15995x = (textSize3 * 1.0f) / textSize4;
    }

    private int getItemVisiblePosition() {
        ViewGroup viewGroup = (ViewGroup) getParent();
        int indexOfChild = viewGroup.indexOfChild(this);
        int i10 = 0;
        for (int i11 = 0; i11 < indexOfChild; i11++) {
            View childAt = viewGroup.getChildAt(i11);
            if ((childAt instanceof d) && childAt.getVisibility() == 0) {
                i10++;
            }
        }
        return i10;
    }

    private int getSuggestedIconWidth() {
        int minimumWidth;
        dh.a aVar = this.f15977l0;
        if (aVar == null) {
            minimumWidth = 0;
        } else {
            minimumWidth = aVar.getMinimumWidth() - this.f15977l0.o();
        }
        LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.D.getLayoutParams();
        return Math.max(minimumWidth, layoutParams.leftMargin) + this.E.getMeasuredWidth() + Math.max(minimumWidth, layoutParams.rightMargin);
    }

    private static Drawable h(ColorStateList colorStateList) {
        return new RippleDrawable(rh.a.a(colorStateList), null, null);
    }

    private boolean i() {
        if (this.f15977l0 != null) {
            return true;
        }
        return false;
    }

    private void j() {
        float dimension = getResources().getDimension(bh.d.f6776b);
        float dimension2 = getResources().getDimension(bh.d.f6774a);
        BaselineLayout baselineLayout = new BaselineLayout(getContext());
        this.I = baselineLayout;
        baselineLayout.setVisibility(8);
        this.I.setDuplicateParentStateEnabled(true);
        this.I.setMeasurePaddingFromBaseline(this.f15987r0);
        TextView textView = new TextView(getContext());
        this.J = textView;
        textView.setMaxLines(1);
        TextView textView2 = this.J;
        TextUtils.TruncateAt truncateAt = TextUtils.TruncateAt.END;
        textView2.setEllipsize(truncateAt);
        this.J.setDuplicateParentStateEnabled(true);
        this.J.setIncludeFontPadding(false);
        this.J.setGravity(16);
        this.J.setTextSize(dimension);
        TextView textView3 = new TextView(getContext());
        this.K = textView3;
        textView3.setMaxLines(1);
        this.K.setEllipsize(truncateAt);
        this.K.setDuplicateParentStateEnabled(true);
        this.K.setVisibility(4);
        this.K.setIncludeFontPadding(false);
        this.K.setGravity(16);
        this.K.setTextSize(dimension2);
        this.I.addView(this.J);
        this.I.addView(this.K);
    }

    private boolean k() {
        if (this.f15974i0 && this.f15996y == 2) {
            return true;
        }
        return false;
    }

    private void l(float f10) {
        if (this.f15967d0 && this.f15966d && isAttachedToWindow()) {
            ValueAnimator valueAnimator = this.f15963a0;
            if (valueAnimator != null) {
                valueAnimator.cancel();
                this.f15963a0 = null;
            }
            ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f15965c0, f10);
            this.f15963a0 = ofFloat;
            ofFloat.addUpdateListener(new b(f10));
            this.f15963a0.setInterpolator(oh.g.g(getContext(), bh.b.T, ch.a.f8277b));
            this.f15963a0.setDuration(oh.g.f(getContext(), bh.b.J, getResources().getInteger(bh.g.f6869b)));
            this.f15963a0.start();
            return;
        }
        p(f10, f10);
    }

    private void m() {
        androidx.appcompat.view.menu.g gVar = this.T;
        if (gVar != null) {
            setChecked(gVar.isChecked());
        }
    }

    private void n() {
        Drawable drawable = this.f15973i;
        RippleDrawable rippleDrawable = null;
        boolean z10 = true;
        if (this.f15968e != null) {
            Drawable activeIndicatorDrawable = getActiveIndicatorDrawable();
            if (this.f15967d0 && getActiveIndicatorDrawable() != null && activeIndicatorDrawable != null) {
                rippleDrawable = new RippleDrawable(rh.a.d(this.f15968e), null, activeIndicatorDrawable);
                z10 = false;
            } else if (drawable == null) {
                drawable = h(this.f15968e);
            }
        }
        this.D.setPadding(0, 0, 0, 0);
        this.D.setForeground(rippleDrawable);
        setBackground(drawable);
        if (Build.VERSION.SDK_INT >= 26) {
            setDefaultFocusHighlightEnabled(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(float f10, float f11) {
        this.f15964b0.d(f10, f11, this.C);
        this.f15965c0 = f10;
    }

    private void q() {
        int i10;
        int i11;
        int i12 = 0;
        if (this.E.getLayoutParams().width > 0) {
            i10 = this.f15986r;
        } else {
            i10 = 0;
        }
        LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.I.getLayoutParams();
        if (layoutParams != null) {
            if (getLayoutDirection() == 1) {
                i11 = i10;
            } else {
                i11 = 0;
            }
            layoutParams.rightMargin = i11;
            if (getLayoutDirection() != 1) {
                i12 = i10;
            }
            layoutParams.leftMargin = i12;
        }
    }

    private void r(View view, View view2, float f10, float f11) {
        int i10;
        int i11;
        int i12;
        int i13;
        LinearLayout linearLayout = this.A;
        if (this.f15978m0 == 0) {
            i10 = (int) (this.f15980o + f11);
        } else {
            i10 = 0;
        }
        v(linearLayout, i10, 0, this.f15981o0);
        LinearLayout linearLayout2 = this.B;
        int i14 = this.f15978m0;
        if (i14 == 0) {
            i11 = 0;
        } else {
            i11 = this.f15991t0.top;
        }
        if (i14 == 0) {
            i12 = 0;
        } else {
            i12 = this.f15991t0.bottom;
        }
        if (i14 == 0) {
            i13 = 17;
        } else {
            i13 = 8388627;
        }
        v(linearLayout2, i11, i12, i13);
        G(this.F, this.f15982p);
        this.L.setVisibility(0);
        w(view, 1.0f, 1.0f, 0);
        w(view2, f10, f10, 4);
    }

    private void s() {
        int i10;
        LinearLayout linearLayout = this.A;
        int i11 = this.f15980o;
        if (this.f15978m0 == 0) {
            i10 = 17;
        } else {
            i10 = this.f15981o0;
        }
        v(linearLayout, i11, i11, i10);
        v(this.B, 0, 0, 17);
        G(this.F, 0);
        this.L.setVisibility(8);
    }

    private void setLabelPivots(TextView textView) {
        textView.setPivotX(textView.getWidth() / 2);
        textView.setPivotY(textView.getBaseline());
    }

    private void t(TextView textView, int i10) {
        if (this.f15989s0) {
            androidx.core.widget.j.q(textView, i10);
        } else {
            u(textView, i10);
        }
    }

    private static void u(TextView textView, int i10) {
        androidx.core.widget.j.q(textView, i10);
        int j10 = qh.c.j(textView.getContext(), i10, 0);
        if (j10 != 0) {
            textView.setTextSize(0, j10);
        }
    }

    private static void v(View view, int i10, int i11, int i12) {
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) view.getLayoutParams();
        layoutParams.topMargin = i10;
        layoutParams.bottomMargin = i11;
        layoutParams.gravity = i12;
        view.setLayoutParams(layoutParams);
    }

    private static void w(View view, float f10, float f11, int i10) {
        view.setScaleX(f10);
        view.setScaleY(f11);
        view.setVisibility(i10);
    }

    private void x(View view) {
        if (i() && view != null) {
            setClipChildren(false);
            setClipToPadding(false);
            dh.c.a(this.f15977l0, view);
        }
    }

    private void y(View view) {
        if (!i()) {
            return;
        }
        if (view != null) {
            setClipChildren(true);
            setClipToPadding(true);
            dh.c.e(this.f15977l0, view);
        }
        this.f15977l0 = null;
    }

    private void z(View view) {
        if (!i()) {
            return;
        }
        dh.c.f(this.f15977l0, view, null);
    }

    public void A(int i10) {
        if (i10 <= 0 && getVisibility() == 0) {
            return;
        }
        int min = Math.min(this.f15969e0, i10 - (this.f15975j0 * 2));
        int i11 = this.f15970f0;
        if (this.f15978m0 == 1) {
            int i12 = i10 - (this.f15976k0 * 2);
            int i13 = this.f15971g0;
            if (i13 != -1) {
                if (i13 == -2) {
                    i12 = this.A.getMeasuredWidth();
                } else {
                    i12 = Math.min(i13, i12);
                }
            }
            min = i12;
            i11 = Math.max(this.f15972h0, this.B.getMeasuredHeight());
        }
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) this.C.getLayoutParams();
        if (k()) {
            i11 = min;
        }
        layoutParams.height = i11;
        layoutParams.width = Math.max(0, min);
        this.C.setLayoutParams(layoutParams);
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(androidx.appcompat.view.menu.g gVar, int i10) {
        CharSequence title;
        this.T = gVar;
        setCheckable(gVar.isCheckable());
        setChecked(gVar.isChecked());
        setEnabled(gVar.isEnabled());
        setIcon(gVar.getIcon());
        setTitle(gVar.getTitle());
        setId(gVar.getItemId());
        if (!TextUtils.isEmpty(gVar.getContentDescription())) {
            setContentDescription(gVar.getContentDescription());
        }
        if (!TextUtils.isEmpty(gVar.getTooltipText())) {
            title = gVar.getTooltipText();
        } else {
            title = gVar.getTitle();
        }
        a1.a(this, title);
        H();
        this.f15966d = true;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        if (this.f15967d0) {
            this.D.dispatchTouchEvent(motionEvent);
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        o();
        this.T = null;
        this.f15965c0 = 0.0f;
        this.f15966d = false;
    }

    public Drawable getActiveIndicatorDrawable() {
        return this.C.getBackground();
    }

    public dh.a getBadge() {
        return this.f15977l0;
    }

    @NonNull
    public BaselineLayout getExpandedLabelGroup() {
        return this.I;
    }

    protected int getItemBackgroundResId() {
        return bh.e.f6835j;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public androidx.appcompat.view.menu.g getItemData() {
        return this.T;
    }

    protected int getItemDefaultMarginResId() {
        return bh.d.f6809r0;
    }

    protected abstract int getItemLayoutResId();

    public int getItemPosition() {
        return this.M;
    }

    @NonNull
    public BaselineLayout getLabelGroup() {
        return this.F;
    }

    @Override // android.view.View
    protected int getSuggestedMinimumHeight() {
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) this.A.getLayoutParams();
        return this.A.getMeasuredHeight() + layoutParams.topMargin + layoutParams.bottomMargin;
    }

    @Override // android.view.View
    protected int getSuggestedMinimumWidth() {
        if (this.f15978m0 == 1) {
            FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) this.B.getLayoutParams();
            return this.B.getMeasuredWidth() + layoutParams.leftMargin + layoutParams.rightMargin;
        }
        LinearLayout.LayoutParams layoutParams2 = (LinearLayout.LayoutParams) this.F.getLayoutParams();
        return Math.max(getSuggestedIconWidth(), layoutParams2.leftMargin + this.F.getMeasuredWidth() + layoutParams2.rightMargin);
    }

    void o() {
        y(this.E);
    }

    @Override // android.view.ViewGroup, android.view.View
    public int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 1);
        androidx.appcompat.view.menu.g gVar = this.T;
        if (gVar != null && gVar.isCheckable() && this.T.isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, f15960u0);
        }
        return onCreateDrawableState;
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        dh.a aVar = this.f15977l0;
        if (aVar != null && aVar.isVisible()) {
            CharSequence title = this.T.getTitle();
            if (!TextUtils.isEmpty(this.T.getContentDescription())) {
                title = this.T.getContentDescription();
            }
            accessibilityNodeInfo.setContentDescription(((Object) title) + ", " + ((Object) this.f15977l0.l()));
        }
        AccessibilityNodeInfoCompat h12 = AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo);
        h12.z0(AccessibilityNodeInfoCompat.g.b(0, 1, getItemVisiblePosition(), 1, false, isSelected()));
        if (isSelected()) {
            h12.x0(false);
            h12.o0(AccessibilityNodeInfoCompat.a.f3458i);
        }
        h12.T0(getResources().getString(bh.j.f6907h));
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        post(new a(i10));
    }

    public void setActiveIndicatorDrawable(Drawable drawable) {
        this.C.setBackground(drawable);
        n();
    }

    public void setActiveIndicatorEnabled(boolean z10) {
        int i10;
        this.f15967d0 = z10;
        n();
        View view = this.C;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        view.setVisibility(i10);
        requestLayout();
    }

    public void setActiveIndicatorExpandedHeight(int i10) {
        this.f15972h0 = i10;
        A(getWidth());
    }

    public void setActiveIndicatorExpandedMarginHorizontal(int i10) {
        this.f15976k0 = i10;
        if (this.f15978m0 == 1) {
            setPadding(i10, 0, i10, 0);
        }
        A(getWidth());
    }

    public void setActiveIndicatorExpandedPadding(@NonNull Rect rect) {
        this.f15991t0 = rect;
    }

    public void setActiveIndicatorExpandedWidth(int i10) {
        this.f15971g0 = i10;
        A(getWidth());
    }

    public void setActiveIndicatorHeight(int i10) {
        this.f15970f0 = i10;
        A(getWidth());
    }

    public void setActiveIndicatorLabelPadding(int i10) {
        int i11;
        if (this.f15984q != i10) {
            this.f15984q = i10;
            ((LinearLayout.LayoutParams) this.F.getLayoutParams()).topMargin = i10;
            if (this.I.getLayoutParams() != null) {
                LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.I.getLayoutParams();
                if (getLayoutDirection() == 1) {
                    i11 = i10;
                } else {
                    i11 = 0;
                }
                layoutParams.rightMargin = i11;
                if (getLayoutDirection() == 1) {
                    i10 = 0;
                }
                layoutParams.leftMargin = i10;
                requestLayout();
            }
        }
    }

    public void setActiveIndicatorMarginHorizontal(int i10) {
        this.f15975j0 = i10;
        A(getWidth());
    }

    public void setActiveIndicatorResizeable(boolean z10) {
        this.f15974i0 = z10;
    }

    public void setActiveIndicatorWidth(int i10) {
        this.f15969e0 = i10;
        A(getWidth());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setBadge(@NonNull dh.a aVar) {
        if (this.f15977l0 != aVar) {
            if (i() && this.E != null) {
                Log.w("NavigationBar", "Multiple badges shouldn't be attached to one item.");
                y(this.E);
            }
            this.f15977l0 = aVar;
            aVar.T(this.f15979n0);
            ImageView imageView = this.E;
            if (imageView != null) {
                x(imageView);
            }
        }
    }

    public void setCheckable(boolean z10) {
        refreshDrawableState();
    }

    public void setChecked(boolean z10) {
        float f10;
        setLabelPivots(this.H);
        setLabelPivots(this.G);
        setLabelPivots(this.K);
        setLabelPivots(this.J);
        if (z10) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        l(f10);
        TextView textView = this.H;
        TextView textView2 = this.G;
        float f11 = this.f15988s;
        float f12 = this.f15990t;
        float f13 = this.f15992u;
        if (this.f15978m0 == 1) {
            textView = this.K;
            textView2 = this.J;
            f11 = this.f15993v;
            f12 = this.f15994w;
            f13 = this.f15995x;
        }
        int i10 = this.f15996y;
        if (i10 != -1) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        s();
                    }
                } else if (z10) {
                    r(textView, textView2, f12, f11);
                } else {
                    r(textView2, textView, f13, 0.0f);
                }
            } else if (z10) {
                r(textView, textView2, f12, 0.0f);
            } else {
                s();
            }
        } else if (this.f15997z) {
            if (z10) {
                r(textView, textView2, f12, 0.0f);
            } else {
                s();
            }
        } else if (z10) {
            r(textView, textView2, f12, f11);
        } else {
            r(textView2, textView, f13, 0.0f);
        }
        refreshDrawableState();
        setSelected(z10);
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        this.G.setEnabled(z10);
        this.H.setEnabled(z10);
        this.J.setEnabled(z10);
        this.K.setEnabled(z10);
        this.E.setEnabled(z10);
    }

    @Override // com.google.android.material.navigation.g
    public void setExpanded(boolean z10) {
        this.f15983p0 = z10;
        H();
    }

    public void setHorizontalTextAppearanceActive(int i10) {
        this.P = i10;
        TextView textView = this.K;
        if (i10 == 0) {
            i10 = this.N;
        }
        D(textView, i10);
    }

    public void setHorizontalTextAppearanceInactive(int i10) {
        this.Q = i10;
        TextView textView = this.J;
        if (i10 == 0) {
            i10 = this.O;
        }
        E(textView, i10);
    }

    public void setIcon(Drawable drawable) {
        if (drawable == this.V) {
            return;
        }
        this.V = drawable;
        if (drawable != null) {
            Drawable.ConstantState constantState = drawable.getConstantState();
            if (constantState != null) {
                drawable = constantState.newDrawable();
            }
            drawable = s1.a.r(drawable).mutate();
            this.W = drawable;
            ColorStateList colorStateList = this.U;
            if (colorStateList != null) {
                drawable.setTintList(colorStateList);
            }
        }
        this.E.setImageDrawable(drawable);
    }

    public void setIconLabelHorizontalSpacing(int i10) {
        if (this.f15986r != i10) {
            this.f15986r = i10;
            q();
            requestLayout();
        }
    }

    public void setIconSize(int i10) {
        LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.E.getLayoutParams();
        layoutParams.width = i10;
        layoutParams.height = i10;
        this.E.setLayoutParams(layoutParams);
        q();
    }

    public void setIconTintList(ColorStateList colorStateList) {
        Drawable drawable;
        this.U = colorStateList;
        if (this.T != null && (drawable = this.W) != null) {
            drawable.setTintList(colorStateList);
            this.W.invalidateSelf();
        }
    }

    public void setItemBackground(int i10) {
        setItemBackground(i10 == 0 ? null : getContext().getDrawable(i10));
    }

    public void setItemGravity(int i10) {
        this.f15981o0 = i10;
        requestLayout();
    }

    public void setItemIconGravity(int i10) {
        if (this.f15978m0 != i10) {
            this.f15978m0 = i10;
            F();
            n();
        }
    }

    public void setItemPaddingBottom(int i10) {
        if (this.f15982p != i10) {
            this.f15982p = i10;
            m();
        }
    }

    public void setItemPaddingTop(int i10) {
        if (this.f15980o != i10) {
            this.f15980o = i10;
            m();
        }
    }

    public void setItemPosition(int i10) {
        this.M = i10;
    }

    public void setItemRippleColor(ColorStateList colorStateList) {
        this.f15968e = colorStateList;
        n();
    }

    public void setLabelFontScalingEnabled(boolean z10) {
        this.f15989s0 = z10;
        setTextAppearanceActive(this.N);
        setTextAppearanceInactive(this.O);
        setHorizontalTextAppearanceActive(this.P);
        setHorizontalTextAppearanceInactive(this.Q);
    }

    public void setLabelMaxLines(int i10) {
        this.G.setMaxLines(i10);
        this.H.setMaxLines(i10);
        this.J.setMaxLines(i10);
        this.K.setMaxLines(i10);
        if (Build.VERSION.SDK_INT > 34) {
            this.G.setGravity(17);
            this.H.setGravity(17);
        } else if (i10 > 1) {
            this.G.setEllipsize(null);
            this.H.setEllipsize(null);
            this.G.setGravity(17);
            this.H.setGravity(17);
        } else {
            this.G.setGravity(16);
            this.H.setGravity(16);
        }
        requestLayout();
    }

    public void setLabelVisibilityMode(int i10) {
        if (this.f15996y != i10) {
            this.f15996y = i10;
            B();
            A(getWidth());
            m();
        }
    }

    public void setMeasureBottomPaddingFromLabelBaseline(boolean z10) {
        this.f15987r0 = z10;
        this.F.setMeasurePaddingFromBaseline(z10);
        this.G.setIncludeFontPadding(z10);
        this.H.setIncludeFontPadding(z10);
        this.I.setMeasurePaddingFromBaseline(z10);
        this.J.setIncludeFontPadding(z10);
        this.K.setIncludeFontPadding(z10);
        requestLayout();
    }

    @Override // com.google.android.material.navigation.g
    public void setOnlyShowWhenExpanded(boolean z10) {
        this.f15985q0 = z10;
        H();
    }

    public void setShifting(boolean z10) {
        if (this.f15997z != z10) {
            this.f15997z = z10;
            m();
        }
    }

    public void setTextAppearanceActive(int i10) {
        this.N = i10;
        D(this.H, i10);
    }

    public void setTextAppearanceActiveBoldEnabled(boolean z10) {
        this.S = z10;
        setTextAppearanceActive(this.N);
        setHorizontalTextAppearanceActive(this.P);
        C();
    }

    public void setTextAppearanceInactive(int i10) {
        this.O = i10;
        E(this.G, i10);
    }

    public void setTextColor(ColorStateList colorStateList) {
        this.R = colorStateList;
        if (colorStateList != null) {
            this.G.setTextColor(colorStateList);
            this.H.setTextColor(colorStateList);
            this.J.setTextColor(colorStateList);
            this.K.setTextColor(colorStateList);
        }
    }

    public void setTitle(CharSequence charSequence) {
        this.G.setText(charSequence);
        this.H.setText(charSequence);
        this.J.setText(charSequence);
        this.K.setText(charSequence);
        androidx.appcompat.view.menu.g gVar = this.T;
        if (gVar == null || TextUtils.isEmpty(gVar.getContentDescription())) {
            setContentDescription(charSequence);
        }
        androidx.appcompat.view.menu.g gVar2 = this.T;
        if (gVar2 != null && !TextUtils.isEmpty(gVar2.getTooltipText())) {
            charSequence = this.T.getTooltipText();
        }
        a1.a(this, charSequence);
    }

    public void setItemBackground(Drawable drawable) {
        if (drawable != null && drawable.getConstantState() != null) {
            drawable = drawable.getConstantState().newDrawable().mutate();
        }
        this.f15973i = drawable;
        n();
    }
}
