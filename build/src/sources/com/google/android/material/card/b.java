package com.google.android.material.card;

import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.StateListDrawable;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import androidx.core.view.h0;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import mh.c;
import ph.d;
import ph.e;
import ph.g;
import ph.k;
import zg.f;
import zg.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {
    private static final Drawable A;

    /* renamed from: z  reason: collision with root package name */
    private static final double f14720z = Math.cos(Math.toRadians(45.0d));

    /* renamed from: a  reason: collision with root package name */
    private final MaterialCardView f14721a;

    /* renamed from: c  reason: collision with root package name */
    private final g f14723c;

    /* renamed from: d  reason: collision with root package name */
    private final g f14724d;

    /* renamed from: e  reason: collision with root package name */
    private int f14725e;

    /* renamed from: f  reason: collision with root package name */
    private int f14726f;

    /* renamed from: g  reason: collision with root package name */
    private int f14727g;

    /* renamed from: h  reason: collision with root package name */
    private int f14728h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f14729i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f14730j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14731k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14732l;

    /* renamed from: m  reason: collision with root package name */
    private k f14733m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f14734n;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f14735o;

    /* renamed from: p  reason: collision with root package name */
    private LayerDrawable f14736p;

    /* renamed from: q  reason: collision with root package name */
    private g f14737q;

    /* renamed from: r  reason: collision with root package name */
    private g f14738r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f14740t;

    /* renamed from: u  reason: collision with root package name */
    private ValueAnimator f14741u;

    /* renamed from: v  reason: collision with root package name */
    private final TimeInterpolator f14742v;

    /* renamed from: w  reason: collision with root package name */
    private final int f14743w;

    /* renamed from: x  reason: collision with root package name */
    private final int f14744x;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f14722b = new Rect();

    /* renamed from: s  reason: collision with root package name */
    private boolean f14739s = false;

    /* renamed from: y  reason: collision with root package name */
    private float f14745y = 0.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends InsetDrawable {
        a(Drawable drawable, int i10, int i11, int i12, int i13) {
            super(drawable, i10, i11, i12, i13);
        }

        @Override // android.graphics.drawable.Drawable
        public int getMinimumHeight() {
            return -1;
        }

        @Override // android.graphics.drawable.Drawable
        public int getMinimumWidth() {
            return -1;
        }

        @Override // android.graphics.drawable.InsetDrawable, android.graphics.drawable.DrawableWrapper, android.graphics.drawable.Drawable
        public boolean getPadding(Rect rect) {
            return false;
        }
    }

    static {
        ColorDrawable colorDrawable;
        if (Build.VERSION.SDK_INT <= 28) {
            colorDrawable = new ColorDrawable();
        } else {
            colorDrawable = null;
        }
        A = colorDrawable;
    }

    public b(MaterialCardView materialCardView, AttributeSet attributeSet, int i10, int i11) {
        this.f14721a = materialCardView;
        g gVar = new g(materialCardView.getContext(), attributeSet, i10, i11);
        this.f14723c = gVar;
        gVar.N(materialCardView.getContext());
        gVar.c0(-12303292);
        k.b v10 = gVar.D().v();
        TypedArray obtainStyledAttributes = materialCardView.getContext().obtainStyledAttributes(attributeSet, zg.k.f55903s0, i10, j.f55702a);
        if (obtainStyledAttributes.hasValue(zg.k.f55912t0)) {
            v10.o(obtainStyledAttributes.getDimension(zg.k.f55912t0, 0.0f));
        }
        this.f14724d = new g();
        Y(v10.m());
        this.f14742v = kh.g.g(materialCardView.getContext(), zg.b.Q, ah.a.f625a);
        this.f14743w = kh.g.f(materialCardView.getContext(), zg.b.K, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f14744x = kh.g.f(materialCardView.getContext(), zg.b.J, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        obtainStyledAttributes.recycle();
    }

    private Drawable D(Drawable drawable) {
        int i10;
        int i11;
        if (this.f14721a.getUseCompatPadding()) {
            i11 = (int) Math.ceil(f());
            i10 = (int) Math.ceil(e());
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new a(drawable, i10, i11, i10, i11);
    }

    private boolean G() {
        if ((this.f14727g & 80) == 80) {
            return true;
        }
        return false;
    }

    private boolean H() {
        if ((this.f14727g & 8388613) == 8388613) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(b bVar, ValueAnimator valueAnimator) {
        bVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        bVar.f14730j.setAlpha((int) (255.0f * floatValue));
        bVar.f14745y = floatValue;
    }

    private float c() {
        return Math.max(Math.max(d(this.f14733m.q(), this.f14723c.G()), d(this.f14733m.s(), this.f14723c.H())), Math.max(d(this.f14733m.k(), this.f14723c.t()), d(this.f14733m.i(), this.f14723c.s())));
    }

    private boolean c0() {
        if (this.f14721a.getPreventCornerOverlap() && !g()) {
            return true;
        }
        return false;
    }

    private float d(d dVar, float f10) {
        if (dVar instanceof ph.j) {
            return (float) ((1.0d - f14720z) * f10);
        }
        if (dVar instanceof e) {
            return f10 / 2.0f;
        }
        return 0.0f;
    }

    private boolean d0() {
        if (this.f14721a.getPreventCornerOverlap() && g() && this.f14721a.getUseCompatPadding()) {
            return true;
        }
        return false;
    }

    private float e() {
        float f10;
        float maxCardElevation = this.f14721a.getMaxCardElevation();
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean e0() {
        if (this.f14721a.isClickable()) {
            return true;
        }
        View view = this.f14721a;
        while (view.isDuplicateParentStateEnabled() && (view.getParent() instanceof View)) {
            view = (View) view.getParent();
        }
        return view.isClickable();
    }

    private float f() {
        float f10;
        float maxCardElevation = this.f14721a.getMaxCardElevation() * 1.5f;
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean g() {
        if (this.f14723c.Q()) {
            return true;
        }
        return false;
    }

    private Drawable h() {
        StateListDrawable stateListDrawable = new StateListDrawable();
        g j10 = j();
        this.f14737q = j10;
        j10.X(this.f14731k);
        stateListDrawable.addState(new int[]{16842919}, this.f14737q);
        return stateListDrawable;
    }

    private Drawable i() {
        if (nh.b.f41306a) {
            this.f14738r = j();
            return new RippleDrawable(this.f14731k, null, this.f14738r);
        }
        return h();
    }

    private void i0(Drawable drawable) {
        if (this.f14721a.getForeground() instanceof InsetDrawable) {
            ((InsetDrawable) this.f14721a.getForeground()).setDrawable(drawable);
        } else {
            this.f14721a.setForeground(D(drawable));
        }
    }

    private g j() {
        return new g(this.f14733m);
    }

    private void k0() {
        Drawable drawable;
        if (nh.b.f41306a && (drawable = this.f14735o) != null) {
            ((RippleDrawable) drawable).setColor(this.f14731k);
            return;
        }
        g gVar = this.f14737q;
        if (gVar != null) {
            gVar.X(this.f14731k);
        }
    }

    private Drawable t() {
        if (this.f14735o == null) {
            this.f14735o = i();
        }
        if (this.f14736p == null) {
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{this.f14735o, this.f14724d, this.f14730j});
            this.f14736p = layerDrawable;
            layerDrawable.setId(2, f.D);
        }
        return this.f14736p;
    }

    private float v() {
        if (this.f14721a.getPreventCornerOverlap() && this.f14721a.getUseCompatPadding()) {
            return (float) ((1.0d - f14720z) * this.f14721a.getCardViewRadius());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList A() {
        return this.f14734n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int B() {
        return this.f14728h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect C() {
        return this.f14722b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        return this.f14739s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        return this.f14740t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(TypedArray typedArray) {
        Drawable drawable;
        ColorStateList a10 = c.a(this.f14721a.getContext(), typedArray, zg.k.S3);
        this.f14734n = a10;
        if (a10 == null) {
            this.f14734n = ColorStateList.valueOf(-1);
        }
        this.f14728h = typedArray.getDimensionPixelSize(zg.k.T3, 0);
        boolean z10 = typedArray.getBoolean(zg.k.K3, false);
        this.f14740t = z10;
        this.f14721a.setLongClickable(z10);
        this.f14732l = c.a(this.f14721a.getContext(), typedArray, zg.k.Q3);
        Q(c.d(this.f14721a.getContext(), typedArray, zg.k.M3));
        T(typedArray.getDimensionPixelSize(zg.k.P3, 0));
        S(typedArray.getDimensionPixelSize(zg.k.O3, 0));
        this.f14727g = typedArray.getInteger(zg.k.N3, 8388661);
        ColorStateList a11 = c.a(this.f14721a.getContext(), typedArray, zg.k.R3);
        this.f14731k = a11;
        if (a11 == null) {
            this.f14731k = ColorStateList.valueOf(fh.a.d(this.f14721a, zg.b.f55550i));
        }
        M(c.a(this.f14721a.getContext(), typedArray, zg.k.L3));
        k0();
        h0();
        l0();
        this.f14721a.setBackgroundInternal(D(this.f14723c));
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f14724d;
        }
        this.f14729i = drawable;
        this.f14721a.setForeground(D(drawable));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        if (this.f14736p != null) {
            if (this.f14721a.getUseCompatPadding()) {
                i12 = (int) Math.ceil(f() * 2.0f);
                i13 = (int) Math.ceil(e() * 2.0f);
            } else {
                i12 = 0;
                i13 = 0;
            }
            if (H()) {
                i14 = ((i10 - this.f14725e) - this.f14726f) - i13;
            } else {
                i14 = this.f14725e;
            }
            if (G()) {
                i15 = this.f14725e;
            } else {
                i15 = ((i11 - this.f14725e) - this.f14726f) - i12;
            }
            int i20 = i15;
            if (H()) {
                i16 = this.f14725e;
            } else {
                i16 = ((i10 - this.f14725e) - this.f14726f) - i13;
            }
            if (G()) {
                i17 = ((i11 - this.f14725e) - this.f14726f) - i12;
            } else {
                i17 = this.f14725e;
            }
            int i21 = i17;
            if (h0.z(this.f14721a) == 1) {
                i19 = i16;
                i18 = i14;
            } else {
                i18 = i16;
                i19 = i14;
            }
            this.f14736p.setLayerInset(2, i19, i21, i18, i20);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f14739s = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.f14723c.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(ColorStateList colorStateList) {
        g gVar = this.f14724d;
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        gVar.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(boolean z10) {
        this.f14740t = z10;
    }

    public void O(boolean z10) {
        P(z10, false);
    }

    public void P(boolean z10, boolean z11) {
        int i10;
        float f10;
        Drawable drawable = this.f14730j;
        if (drawable != null) {
            if (z11) {
                b(z10);
                return;
            }
            if (z10) {
                i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
            } else {
                i10 = 0;
            }
            drawable.setAlpha(i10);
            if (z10) {
                f10 = 1.0f;
            } else {
                f10 = 0.0f;
            }
            this.f14745y = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(Drawable drawable) {
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f14730j = mutate;
            s1.a.o(mutate, this.f14732l);
            O(this.f14721a.isChecked());
        } else {
            this.f14730j = A;
        }
        LayerDrawable layerDrawable = this.f14736p;
        if (layerDrawable != null) {
            layerDrawable.setDrawableByLayerId(f.D, this.f14730j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        this.f14727g = i10;
        J(this.f14721a.getMeasuredWidth(), this.f14721a.getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(int i10) {
        this.f14725e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        this.f14726f = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(ColorStateList colorStateList) {
        this.f14732l = colorStateList;
        Drawable drawable = this.f14730j;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(float f10) {
        Y(this.f14733m.w(f10));
        this.f14729i.invalidateSelf();
        if (d0() || c0()) {
            g0();
        }
        if (d0()) {
            j0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(float f10) {
        this.f14723c.Y(f10);
        g gVar = this.f14724d;
        if (gVar != null) {
            gVar.Y(f10);
        }
        g gVar2 = this.f14738r;
        if (gVar2 != null) {
            gVar2.Y(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ColorStateList colorStateList) {
        this.f14731k = colorStateList;
        k0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(k kVar) {
        this.f14733m = kVar;
        this.f14723c.setShapeAppearanceModel(kVar);
        g gVar = this.f14723c;
        gVar.b0(!gVar.Q());
        g gVar2 = this.f14724d;
        if (gVar2 != null) {
            gVar2.setShapeAppearanceModel(kVar);
        }
        g gVar3 = this.f14738r;
        if (gVar3 != null) {
            gVar3.setShapeAppearanceModel(kVar);
        }
        g gVar4 = this.f14737q;
        if (gVar4 != null) {
            gVar4.setShapeAppearanceModel(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(ColorStateList colorStateList) {
        if (this.f14734n == colorStateList) {
            return;
        }
        this.f14734n = colorStateList;
        l0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(int i10) {
        if (i10 == this.f14728h) {
            return;
        }
        this.f14728h = i10;
        l0();
    }

    public void b(boolean z10) {
        float f10;
        float f11;
        int i10;
        if (z10) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        if (z10) {
            f11 = 1.0f - this.f14745y;
        } else {
            f11 = this.f14745y;
        }
        ValueAnimator valueAnimator = this.f14741u;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            this.f14741u = null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f14745y, f10);
        this.f14741u = ofFloat;
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.card.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                b.a(b.this, valueAnimator2);
            }
        });
        this.f14741u.setInterpolator(this.f14742v);
        ValueAnimator valueAnimator2 = this.f14741u;
        if (z10) {
            i10 = this.f14743w;
        } else {
            i10 = this.f14744x;
        }
        valueAnimator2.setDuration(i10 * f11);
        this.f14741u.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(int i10, int i11, int i12, int i13) {
        this.f14722b.set(i10, i11, i12, i13);
        g0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0() {
        Drawable drawable;
        Drawable drawable2 = this.f14729i;
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f14724d;
        }
        this.f14729i = drawable;
        if (drawable2 != drawable) {
            i0(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0() {
        float c10;
        if (!c0() && !d0()) {
            c10 = 0.0f;
        } else {
            c10 = c();
        }
        int v10 = (int) (c10 - v());
        MaterialCardView materialCardView = this.f14721a;
        Rect rect = this.f14722b;
        materialCardView.e(rect.left + v10, rect.top + v10, rect.right + v10, rect.bottom + v10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0() {
        this.f14723c.W(this.f14721a.getCardElevation());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j0() {
        if (!E()) {
            this.f14721a.setBackgroundInternal(D(this.f14723c));
        }
        this.f14721a.setForeground(D(this.f14729i));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        Drawable drawable = this.f14735o;
        if (drawable != null) {
            Rect bounds = drawable.getBounds();
            int i10 = bounds.bottom;
            this.f14735o.setBounds(bounds.left, bounds.top, bounds.right, i10 - 1);
            this.f14735o.setBounds(bounds.left, bounds.top, bounds.right, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g l() {
        return this.f14723c;
    }

    void l0() {
        this.f14724d.e0(this.f14728h, this.f14734n);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList m() {
        return this.f14723c.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList n() {
        return this.f14724d.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable o() {
        return this.f14730j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f14727g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f14725e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f14726f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList s() {
        return this.f14732l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float u() {
        return this.f14723c.G();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f14723c.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList x() {
        return this.f14731k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k y() {
        return this.f14733m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int z() {
        ColorStateList colorStateList = this.f14734n;
        if (colorStateList == null) {
            return -1;
        }
        return colorStateList.getDefaultColor();
    }
}
