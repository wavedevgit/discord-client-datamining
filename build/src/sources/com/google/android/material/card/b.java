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
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import oh.g;
import t0.c;
import t0.d;
import th.e;
import th.f;
import th.h;
import th.k;
import th.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: y  reason: collision with root package name */
    private static final double f15447y = Math.cos(Math.toRadians(45.0d));

    /* renamed from: z  reason: collision with root package name */
    private static final Drawable f15448z;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialCardView f15449a;

    /* renamed from: c  reason: collision with root package name */
    private final h f15451c;

    /* renamed from: d  reason: collision with root package name */
    private final h f15452d;

    /* renamed from: e  reason: collision with root package name */
    private int f15453e;

    /* renamed from: f  reason: collision with root package name */
    private int f15454f;

    /* renamed from: g  reason: collision with root package name */
    private int f15455g;

    /* renamed from: h  reason: collision with root package name */
    private int f15456h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f15457i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f15458j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f15459k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f15460l;

    /* renamed from: m  reason: collision with root package name */
    private l f15461m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15462n;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15463o;

    /* renamed from: p  reason: collision with root package name */
    private LayerDrawable f15464p;

    /* renamed from: q  reason: collision with root package name */
    private h f15465q;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15467s;

    /* renamed from: t  reason: collision with root package name */
    private ValueAnimator f15468t;

    /* renamed from: u  reason: collision with root package name */
    private final TimeInterpolator f15469u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15470v;

    /* renamed from: w  reason: collision with root package name */
    private final int f15471w;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f15450b = new Rect();

    /* renamed from: r  reason: collision with root package name */
    private boolean f15466r = false;

    /* renamed from: x  reason: collision with root package name */
    private float f15472x = 0.0f;

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
        f15448z = colorDrawable;
    }

    public b(MaterialCardView materialCardView, AttributeSet attributeSet, int i10, int i11) {
        this.f15449a = materialCardView;
        h hVar = new h(materialCardView.getContext(), attributeSet, i10, i11);
        this.f15451c = hVar;
        hVar.T(materialCardView.getContext());
        hVar.l0(-12303292);
        l.b w10 = hVar.J().w();
        TypedArray obtainStyledAttributes = materialCardView.getContext().obtainStyledAttributes(attributeSet, d.f48990a, i10, c.f48989a);
        if (obtainStyledAttributes.hasValue(d.f48994e)) {
            w10.o(obtainStyledAttributes.getDimension(d.f48994e, 0.0f));
        }
        this.f15452d = new h();
        W(w10.m());
        this.f15469u = g.g(materialCardView.getContext(), bh.b.U, ch.a.f8276a);
        this.f15470v = g.f(materialCardView.getContext(), bh.b.O, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f15471w = g.f(materialCardView.getContext(), bh.b.N, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        obtainStyledAttributes.recycle();
    }

    private Drawable B(Drawable drawable) {
        int i10;
        int i11;
        if (this.f15449a.getUseCompatPadding()) {
            i11 = (int) Math.ceil(f());
            i10 = (int) Math.ceil(e());
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new a(drawable, i10, i11, i10, i11);
    }

    private boolean E() {
        if ((this.f15455g & 80) == 80) {
            return true;
        }
        return false;
    }

    private boolean F() {
        if ((this.f15455g & 8388613) == 8388613) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(b bVar, ValueAnimator valueAnimator) {
        bVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        bVar.f15458j.setAlpha((int) (255.0f * floatValue));
        bVar.f15472x = floatValue;
    }

    private boolean a0() {
        if (this.f15449a.getPreventCornerOverlap() && !g()) {
            return true;
        }
        return false;
    }

    private boolean b0() {
        if (this.f15449a.getPreventCornerOverlap() && g() && this.f15449a.getUseCompatPadding()) {
            return true;
        }
        return false;
    }

    private float c() {
        return Math.max(Math.max(d(this.f15461m.q(), this.f15451c.M()), d(this.f15461m.s(), this.f15451c.N())), Math.max(d(this.f15461m.k(), this.f15451c.y()), d(this.f15461m.i(), this.f15451c.x())));
    }

    private boolean c0() {
        if (this.f15449a.isClickable()) {
            return true;
        }
        View view = this.f15449a;
        while (view.isDuplicateParentStateEnabled() && (view.getParent() instanceof View)) {
            view = (View) view.getParent();
        }
        return view.isClickable();
    }

    private float d(e eVar, float f10) {
        if (eVar instanceof k) {
            return (float) ((1.0d - f15447y) * f10);
        }
        if (eVar instanceof f) {
            return f10 / 2.0f;
        }
        return 0.0f;
    }

    private float e() {
        float f10;
        float maxCardElevation = this.f15449a.getMaxCardElevation();
        if (b0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private float f() {
        float f10;
        float maxCardElevation = this.f15449a.getMaxCardElevation() * 1.5f;
        if (b0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean g() {
        return this.f15451c.W();
    }

    private void g0(Drawable drawable) {
        if (this.f15449a.getForeground() instanceof InsetDrawable) {
            ((InsetDrawable) this.f15449a.getForeground()).setDrawable(drawable);
        } else {
            this.f15449a.setForeground(B(drawable));
        }
    }

    private Drawable h() {
        this.f15465q = new h(this.f15461m);
        return new RippleDrawable(this.f15459k, null, this.f15465q);
    }

    private void i0() {
        Drawable drawable = this.f15463o;
        if (drawable != null) {
            ((RippleDrawable) drawable).setColor(this.f15459k);
        }
    }

    private Drawable r() {
        if (this.f15463o == null) {
            this.f15463o = h();
        }
        if (this.f15464p == null) {
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{this.f15463o, this.f15452d, this.f15458j});
            this.f15464p = layerDrawable;
            layerDrawable.setId(2, bh.f.D);
        }
        return this.f15464p;
    }

    private float t() {
        if (this.f15449a.getPreventCornerOverlap() && this.f15449a.getUseCompatPadding()) {
            return (float) ((1.0d - f15447y) * this.f15449a.getCardViewRadius());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect A() {
        return this.f15450b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean C() {
        return this.f15466r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean D() {
        return this.f15467s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(TypedArray typedArray) {
        Drawable drawable;
        ColorStateList a10 = qh.c.a(this.f15449a.getContext(), typedArray, bh.l.W3);
        this.f15462n = a10;
        if (a10 == null) {
            this.f15462n = ColorStateList.valueOf(-1);
        }
        this.f15456h = typedArray.getDimensionPixelSize(bh.l.X3, 0);
        boolean z10 = typedArray.getBoolean(bh.l.O3, false);
        this.f15467s = z10;
        this.f15449a.setLongClickable(z10);
        this.f15460l = qh.c.a(this.f15449a.getContext(), typedArray, bh.l.U3);
        O(qh.c.e(this.f15449a.getContext(), typedArray, bh.l.Q3));
        R(typedArray.getDimensionPixelSize(bh.l.T3, 0));
        Q(typedArray.getDimensionPixelSize(bh.l.S3, 0));
        this.f15455g = typedArray.getInteger(bh.l.R3, 8388661);
        ColorStateList a11 = qh.c.a(this.f15449a.getContext(), typedArray, bh.l.V3);
        this.f15459k = a11;
        if (a11 == null) {
            this.f15459k = ColorStateList.valueOf(jh.a.d(this.f15449a, f.a.f23296t));
        }
        K(qh.c.a(this.f15449a.getContext(), typedArray, bh.l.P3));
        i0();
        f0();
        j0();
        this.f15449a.setBackgroundInternal(B(this.f15451c));
        if (c0()) {
            drawable = r();
        } else {
            drawable = this.f15452d;
        }
        this.f15457i = drawable;
        this.f15449a.setForeground(B(drawable));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        if (this.f15464p != null) {
            if (this.f15449a.getUseCompatPadding()) {
                i12 = (int) Math.ceil(f() * 2.0f);
                i13 = (int) Math.ceil(e() * 2.0f);
            } else {
                i12 = 0;
                i13 = 0;
            }
            if (F()) {
                i14 = ((i10 - this.f15453e) - this.f15454f) - i13;
            } else {
                i14 = this.f15453e;
            }
            if (E()) {
                i15 = this.f15453e;
            } else {
                i15 = ((i11 - this.f15453e) - this.f15454f) - i12;
            }
            int i20 = i15;
            if (F()) {
                i16 = this.f15453e;
            } else {
                i16 = ((i10 - this.f15453e) - this.f15454f) - i13;
            }
            if (E()) {
                i17 = ((i11 - this.f15453e) - this.f15454f) - i12;
            } else {
                i17 = this.f15453e;
            }
            int i21 = i17;
            if (this.f15449a.getLayoutDirection() == 1) {
                i19 = i16;
                i18 = i14;
            } else {
                i18 = i16;
                i19 = i14;
            }
            this.f15464p.setLayerInset(2, i19, i21, i18, i20);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(boolean z10) {
        this.f15466r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(ColorStateList colorStateList) {
        this.f15451c.f0(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(ColorStateList colorStateList) {
        h hVar = this.f15452d;
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        hVar.f0(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15467s = z10;
    }

    public void M(boolean z10) {
        N(z10, false);
    }

    public void N(boolean z10, boolean z11) {
        int i10;
        float f10;
        Drawable drawable = this.f15458j;
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
            this.f15472x = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(Drawable drawable) {
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f15458j = mutate;
            mutate.setTintList(this.f15460l);
            M(this.f15449a.isChecked());
        } else {
            this.f15458j = f15448z;
        }
        LayerDrawable layerDrawable = this.f15464p;
        if (layerDrawable != null) {
            layerDrawable.setDrawableByLayerId(bh.f.D, this.f15458j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(int i10) {
        this.f15455g = i10;
        H(this.f15449a.getMeasuredWidth(), this.f15449a.getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15453e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        this.f15454f = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        this.f15460l = colorStateList;
        Drawable drawable = this.f15458j;
        if (drawable != null) {
            drawable.setTintList(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(float f10) {
        W(this.f15461m.x(f10));
        this.f15457i.invalidateSelf();
        if (b0() || a0()) {
            e0();
        }
        if (b0()) {
            h0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(float f10) {
        this.f15451c.g0(f10);
        h hVar = this.f15452d;
        if (hVar != null) {
            hVar.g0(f10);
        }
        h hVar2 = this.f15465q;
        if (hVar2 != null) {
            hVar2.g0(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(ColorStateList colorStateList) {
        this.f15459k = colorStateList;
        i0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(l lVar) {
        this.f15461m = lVar;
        this.f15451c.setShapeAppearanceModel(lVar);
        h hVar = this.f15451c;
        hVar.k0(!hVar.W());
        h hVar2 = this.f15452d;
        if (hVar2 != null) {
            hVar2.setShapeAppearanceModel(lVar);
        }
        h hVar3 = this.f15465q;
        if (hVar3 != null) {
            hVar3.setShapeAppearanceModel(lVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ColorStateList colorStateList) {
        if (this.f15462n == colorStateList) {
            return;
        }
        this.f15462n = colorStateList;
        j0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(int i10) {
        if (i10 == this.f15456h) {
            return;
        }
        this.f15456h = i10;
        j0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(int i10, int i11, int i12, int i13) {
        this.f15450b.set(i10, i11, i12, i13);
        e0();
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
            f11 = 1.0f - this.f15472x;
        } else {
            f11 = this.f15472x;
        }
        ValueAnimator valueAnimator = this.f15468t;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            this.f15468t = null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f15472x, f10);
        this.f15468t = ofFloat;
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.card.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                b.a(b.this, valueAnimator2);
            }
        });
        this.f15468t.setInterpolator(this.f15469u);
        ValueAnimator valueAnimator2 = this.f15468t;
        if (z10) {
            i10 = this.f15470v;
        } else {
            i10 = this.f15471w;
        }
        valueAnimator2.setDuration(i10 * f11);
        this.f15468t.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0() {
        Drawable drawable;
        Drawable drawable2 = this.f15457i;
        if (c0()) {
            drawable = r();
        } else {
            drawable = this.f15452d;
        }
        this.f15457i = drawable;
        if (drawable2 != drawable) {
            g0(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0() {
        float c10;
        if (!a0() && !b0()) {
            c10 = 0.0f;
        } else {
            c10 = c();
        }
        int t10 = (int) (c10 - t());
        MaterialCardView materialCardView = this.f15449a;
        Rect rect = this.f15450b;
        materialCardView.e(rect.left + t10, rect.top + t10, rect.right + t10, rect.bottom + t10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0() {
        this.f15451c.e0(this.f15449a.getCardElevation());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0() {
        if (!C()) {
            this.f15449a.setBackgroundInternal(B(this.f15451c));
        }
        this.f15449a.setForeground(B(this.f15457i));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        Drawable drawable = this.f15463o;
        if (drawable != null) {
            Rect bounds = drawable.getBounds();
            int i10 = bounds.bottom;
            this.f15463o.setBounds(bounds.left, bounds.top, bounds.right, i10 - 1);
            this.f15463o.setBounds(bounds.left, bounds.top, bounds.right, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h j() {
        return this.f15451c;
    }

    void j0() {
        this.f15452d.o0(this.f15456h, this.f15462n);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList k() {
        return this.f15451c.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15452d.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable m() {
        return this.f15458j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15455g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f15453e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f15454f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList q() {
        return this.f15460l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f15451c.M();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float u() {
        return this.f15451c.E();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList v() {
        return this.f15459k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l w() {
        return this.f15461m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int x() {
        ColorStateList colorStateList = this.f15462n;
        if (colorStateList == null) {
            return -1;
        }
        return colorStateList.getDefaultColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList y() {
        return this.f15462n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int z() {
        return this.f15456h;
    }
}
