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
    private static final double f15446y = Math.cos(Math.toRadians(45.0d));

    /* renamed from: z  reason: collision with root package name */
    private static final Drawable f15447z;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialCardView f15448a;

    /* renamed from: c  reason: collision with root package name */
    private final h f15450c;

    /* renamed from: d  reason: collision with root package name */
    private final h f15451d;

    /* renamed from: e  reason: collision with root package name */
    private int f15452e;

    /* renamed from: f  reason: collision with root package name */
    private int f15453f;

    /* renamed from: g  reason: collision with root package name */
    private int f15454g;

    /* renamed from: h  reason: collision with root package name */
    private int f15455h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f15456i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f15457j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f15458k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f15459l;

    /* renamed from: m  reason: collision with root package name */
    private l f15460m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15461n;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15462o;

    /* renamed from: p  reason: collision with root package name */
    private LayerDrawable f15463p;

    /* renamed from: q  reason: collision with root package name */
    private h f15464q;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15466s;

    /* renamed from: t  reason: collision with root package name */
    private ValueAnimator f15467t;

    /* renamed from: u  reason: collision with root package name */
    private final TimeInterpolator f15468u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15469v;

    /* renamed from: w  reason: collision with root package name */
    private final int f15470w;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f15449b = new Rect();

    /* renamed from: r  reason: collision with root package name */
    private boolean f15465r = false;

    /* renamed from: x  reason: collision with root package name */
    private float f15471x = 0.0f;

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
        f15447z = colorDrawable;
    }

    public b(MaterialCardView materialCardView, AttributeSet attributeSet, int i10, int i11) {
        this.f15448a = materialCardView;
        h hVar = new h(materialCardView.getContext(), attributeSet, i10, i11);
        this.f15450c = hVar;
        hVar.T(materialCardView.getContext());
        hVar.l0(-12303292);
        l.b w10 = hVar.J().w();
        TypedArray obtainStyledAttributes = materialCardView.getContext().obtainStyledAttributes(attributeSet, d.f48421a, i10, c.f48420a);
        if (obtainStyledAttributes.hasValue(d.f48425e)) {
            w10.o(obtainStyledAttributes.getDimension(d.f48425e, 0.0f));
        }
        this.f15451d = new h();
        W(w10.m());
        this.f15468u = g.g(materialCardView.getContext(), bh.b.U, ch.a.f8276a);
        this.f15469v = g.f(materialCardView.getContext(), bh.b.O, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f15470w = g.f(materialCardView.getContext(), bh.b.N, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        obtainStyledAttributes.recycle();
    }

    private Drawable B(Drawable drawable) {
        int i10;
        int i11;
        if (this.f15448a.getUseCompatPadding()) {
            i11 = (int) Math.ceil(f());
            i10 = (int) Math.ceil(e());
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new a(drawable, i10, i11, i10, i11);
    }

    private boolean E() {
        if ((this.f15454g & 80) == 80) {
            return true;
        }
        return false;
    }

    private boolean F() {
        if ((this.f15454g & 8388613) == 8388613) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(b bVar, ValueAnimator valueAnimator) {
        bVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        bVar.f15457j.setAlpha((int) (255.0f * floatValue));
        bVar.f15471x = floatValue;
    }

    private boolean a0() {
        if (this.f15448a.getPreventCornerOverlap() && !g()) {
            return true;
        }
        return false;
    }

    private boolean b0() {
        if (this.f15448a.getPreventCornerOverlap() && g() && this.f15448a.getUseCompatPadding()) {
            return true;
        }
        return false;
    }

    private float c() {
        return Math.max(Math.max(d(this.f15460m.q(), this.f15450c.M()), d(this.f15460m.s(), this.f15450c.N())), Math.max(d(this.f15460m.k(), this.f15450c.y()), d(this.f15460m.i(), this.f15450c.x())));
    }

    private boolean c0() {
        if (this.f15448a.isClickable()) {
            return true;
        }
        View view = this.f15448a;
        while (view.isDuplicateParentStateEnabled() && (view.getParent() instanceof View)) {
            view = (View) view.getParent();
        }
        return view.isClickable();
    }

    private float d(e eVar, float f10) {
        if (eVar instanceof k) {
            return (float) ((1.0d - f15446y) * f10);
        }
        if (eVar instanceof f) {
            return f10 / 2.0f;
        }
        return 0.0f;
    }

    private float e() {
        float f10;
        float maxCardElevation = this.f15448a.getMaxCardElevation();
        if (b0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private float f() {
        float f10;
        float maxCardElevation = this.f15448a.getMaxCardElevation() * 1.5f;
        if (b0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean g() {
        return this.f15450c.W();
    }

    private void g0(Drawable drawable) {
        if (this.f15448a.getForeground() instanceof InsetDrawable) {
            ((InsetDrawable) this.f15448a.getForeground()).setDrawable(drawable);
        } else {
            this.f15448a.setForeground(B(drawable));
        }
    }

    private Drawable h() {
        this.f15464q = new h(this.f15460m);
        return new RippleDrawable(this.f15458k, null, this.f15464q);
    }

    private void i0() {
        Drawable drawable = this.f15462o;
        if (drawable != null) {
            ((RippleDrawable) drawable).setColor(this.f15458k);
        }
    }

    private Drawable r() {
        if (this.f15462o == null) {
            this.f15462o = h();
        }
        if (this.f15463p == null) {
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{this.f15462o, this.f15451d, this.f15457j});
            this.f15463p = layerDrawable;
            layerDrawable.setId(2, bh.f.D);
        }
        return this.f15463p;
    }

    private float t() {
        if (this.f15448a.getPreventCornerOverlap() && this.f15448a.getUseCompatPadding()) {
            return (float) ((1.0d - f15446y) * this.f15448a.getCardViewRadius());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect A() {
        return this.f15449b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean C() {
        return this.f15465r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean D() {
        return this.f15466s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(TypedArray typedArray) {
        Drawable drawable;
        ColorStateList a10 = qh.c.a(this.f15448a.getContext(), typedArray, bh.l.W3);
        this.f15461n = a10;
        if (a10 == null) {
            this.f15461n = ColorStateList.valueOf(-1);
        }
        this.f15455h = typedArray.getDimensionPixelSize(bh.l.X3, 0);
        boolean z10 = typedArray.getBoolean(bh.l.O3, false);
        this.f15466s = z10;
        this.f15448a.setLongClickable(z10);
        this.f15459l = qh.c.a(this.f15448a.getContext(), typedArray, bh.l.U3);
        O(qh.c.e(this.f15448a.getContext(), typedArray, bh.l.Q3));
        R(typedArray.getDimensionPixelSize(bh.l.T3, 0));
        Q(typedArray.getDimensionPixelSize(bh.l.S3, 0));
        this.f15454g = typedArray.getInteger(bh.l.R3, 8388661);
        ColorStateList a11 = qh.c.a(this.f15448a.getContext(), typedArray, bh.l.V3);
        this.f15458k = a11;
        if (a11 == null) {
            this.f15458k = ColorStateList.valueOf(jh.a.d(this.f15448a, f.a.f23295t));
        }
        K(qh.c.a(this.f15448a.getContext(), typedArray, bh.l.P3));
        i0();
        f0();
        j0();
        this.f15448a.setBackgroundInternal(B(this.f15450c));
        if (c0()) {
            drawable = r();
        } else {
            drawable = this.f15451d;
        }
        this.f15456i = drawable;
        this.f15448a.setForeground(B(drawable));
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
        if (this.f15463p != null) {
            if (this.f15448a.getUseCompatPadding()) {
                i12 = (int) Math.ceil(f() * 2.0f);
                i13 = (int) Math.ceil(e() * 2.0f);
            } else {
                i12 = 0;
                i13 = 0;
            }
            if (F()) {
                i14 = ((i10 - this.f15452e) - this.f15453f) - i13;
            } else {
                i14 = this.f15452e;
            }
            if (E()) {
                i15 = this.f15452e;
            } else {
                i15 = ((i11 - this.f15452e) - this.f15453f) - i12;
            }
            int i20 = i15;
            if (F()) {
                i16 = this.f15452e;
            } else {
                i16 = ((i10 - this.f15452e) - this.f15453f) - i13;
            }
            if (E()) {
                i17 = ((i11 - this.f15452e) - this.f15453f) - i12;
            } else {
                i17 = this.f15452e;
            }
            int i21 = i17;
            if (this.f15448a.getLayoutDirection() == 1) {
                i19 = i16;
                i18 = i14;
            } else {
                i18 = i16;
                i19 = i14;
            }
            this.f15463p.setLayerInset(2, i19, i21, i18, i20);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(boolean z10) {
        this.f15465r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(ColorStateList colorStateList) {
        this.f15450c.f0(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(ColorStateList colorStateList) {
        h hVar = this.f15451d;
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        hVar.f0(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15466s = z10;
    }

    public void M(boolean z10) {
        N(z10, false);
    }

    public void N(boolean z10, boolean z11) {
        int i10;
        float f10;
        Drawable drawable = this.f15457j;
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
            this.f15471x = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(Drawable drawable) {
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f15457j = mutate;
            mutate.setTintList(this.f15459l);
            M(this.f15448a.isChecked());
        } else {
            this.f15457j = f15447z;
        }
        LayerDrawable layerDrawable = this.f15463p;
        if (layerDrawable != null) {
            layerDrawable.setDrawableByLayerId(bh.f.D, this.f15457j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(int i10) {
        this.f15454g = i10;
        H(this.f15448a.getMeasuredWidth(), this.f15448a.getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15452e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        this.f15453f = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        this.f15459l = colorStateList;
        Drawable drawable = this.f15457j;
        if (drawable != null) {
            drawable.setTintList(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(float f10) {
        W(this.f15460m.x(f10));
        this.f15456i.invalidateSelf();
        if (b0() || a0()) {
            e0();
        }
        if (b0()) {
            h0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(float f10) {
        this.f15450c.g0(f10);
        h hVar = this.f15451d;
        if (hVar != null) {
            hVar.g0(f10);
        }
        h hVar2 = this.f15464q;
        if (hVar2 != null) {
            hVar2.g0(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(ColorStateList colorStateList) {
        this.f15458k = colorStateList;
        i0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(l lVar) {
        this.f15460m = lVar;
        this.f15450c.setShapeAppearanceModel(lVar);
        h hVar = this.f15450c;
        hVar.k0(!hVar.W());
        h hVar2 = this.f15451d;
        if (hVar2 != null) {
            hVar2.setShapeAppearanceModel(lVar);
        }
        h hVar3 = this.f15464q;
        if (hVar3 != null) {
            hVar3.setShapeAppearanceModel(lVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ColorStateList colorStateList) {
        if (this.f15461n == colorStateList) {
            return;
        }
        this.f15461n = colorStateList;
        j0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(int i10) {
        if (i10 == this.f15455h) {
            return;
        }
        this.f15455h = i10;
        j0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(int i10, int i11, int i12, int i13) {
        this.f15449b.set(i10, i11, i12, i13);
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
            f11 = 1.0f - this.f15471x;
        } else {
            f11 = this.f15471x;
        }
        ValueAnimator valueAnimator = this.f15467t;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            this.f15467t = null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f15471x, f10);
        this.f15467t = ofFloat;
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.card.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                b.a(b.this, valueAnimator2);
            }
        });
        this.f15467t.setInterpolator(this.f15468u);
        ValueAnimator valueAnimator2 = this.f15467t;
        if (z10) {
            i10 = this.f15469v;
        } else {
            i10 = this.f15470w;
        }
        valueAnimator2.setDuration(i10 * f11);
        this.f15467t.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0() {
        Drawable drawable;
        Drawable drawable2 = this.f15456i;
        if (c0()) {
            drawable = r();
        } else {
            drawable = this.f15451d;
        }
        this.f15456i = drawable;
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
        MaterialCardView materialCardView = this.f15448a;
        Rect rect = this.f15449b;
        materialCardView.e(rect.left + t10, rect.top + t10, rect.right + t10, rect.bottom + t10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0() {
        this.f15450c.e0(this.f15448a.getCardElevation());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0() {
        if (!C()) {
            this.f15448a.setBackgroundInternal(B(this.f15450c));
        }
        this.f15448a.setForeground(B(this.f15456i));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        Drawable drawable = this.f15462o;
        if (drawable != null) {
            Rect bounds = drawable.getBounds();
            int i10 = bounds.bottom;
            this.f15462o.setBounds(bounds.left, bounds.top, bounds.right, i10 - 1);
            this.f15462o.setBounds(bounds.left, bounds.top, bounds.right, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h j() {
        return this.f15450c;
    }

    void j0() {
        this.f15451d.o0(this.f15455h, this.f15461n);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList k() {
        return this.f15450c.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15451d.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable m() {
        return this.f15457j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15454g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f15452e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f15453f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList q() {
        return this.f15459l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f15450c.M();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float u() {
        return this.f15450c.E();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList v() {
        return this.f15458k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l w() {
        return this.f15460m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int x() {
        ColorStateList colorStateList = this.f15461n;
        if (colorStateList == null) {
            return -1;
        }
        return colorStateList.getDefaultColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList y() {
        return this.f15461n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int z() {
        return this.f15455h;
    }
}
