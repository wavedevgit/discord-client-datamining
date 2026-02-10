package com.google.android.material.floatingactionbutton;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.FloatEvaluator;
import android.animation.ObjectAnimator;
import android.animation.TimeInterpolator;
import android.animation.TypeEvaluator;
import android.animation.ValueAnimator;
import android.content.res.ColorStateList;
import android.graphics.Matrix;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Iterator;
import rh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = ch.a.f7597c;
    private static final int E = bh.b.F;
    private static final int F = bh.b.P;
    private static final int G = bh.b.G;
    private static final int H = bh.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    rh.k f15155a;

    /* renamed from: b  reason: collision with root package name */
    rh.g f15156b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15157c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15158d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15159e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15160f;

    /* renamed from: h  reason: collision with root package name */
    float f15162h;

    /* renamed from: i  reason: collision with root package name */
    float f15163i;

    /* renamed from: j  reason: collision with root package name */
    float f15164j;

    /* renamed from: k  reason: collision with root package name */
    int f15165k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f15166l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15167m;

    /* renamed from: n  reason: collision with root package name */
    private ch.g f15168n;

    /* renamed from: o  reason: collision with root package name */
    private ch.g f15169o;

    /* renamed from: p  reason: collision with root package name */
    private float f15170p;

    /* renamed from: r  reason: collision with root package name */
    private int f15172r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15174t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15175u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f15176v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f15177w;

    /* renamed from: x  reason: collision with root package name */
    final qh.b f15178x;

    /* renamed from: g  reason: collision with root package name */
    boolean f15161g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f15171q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f15173s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15179y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15180z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15181a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15182b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f15183c;

        a(boolean z10, k kVar) {
            this.f15182b = z10;
            this.f15183c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15181a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f15173s = 0;
            b.this.f15167m = null;
            if (!this.f15181a) {
                FloatingActionButton floatingActionButton = b.this.f15177w;
                boolean z10 = this.f15182b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f15183c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15177w.b(0, this.f15182b);
            b.this.f15173s = 1;
            b.this.f15167m = animator;
            this.f15181a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0204b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15185a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f15186b;

        C0204b(boolean z10, k kVar) {
            this.f15185a = z10;
            this.f15186b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f15173s = 0;
            b.this.f15167m = null;
            k kVar = this.f15186b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15177w.b(0, this.f15185a);
            b.this.f15173s = 2;
            b.this.f15167m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends ch.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f15171q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f15189a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f15190b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f15191c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f15192d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f15193e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f15194f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f15195g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f15196h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f15189a = f10;
            this.f15190b = f11;
            this.f15191c = f12;
            this.f15192d = f13;
            this.f15193e = f14;
            this.f15194f = f15;
            this.f15195g = f16;
            this.f15196h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f15177w.setAlpha(ch.a.b(this.f15189a, this.f15190b, 0.0f, 0.2f, floatValue));
            b.this.f15177w.setScaleX(ch.a.a(this.f15191c, this.f15192d, floatValue));
            b.this.f15177w.setScaleY(ch.a.a(this.f15193e, this.f15192d, floatValue));
            b.this.f15171q = ch.a.a(this.f15194f, this.f15195g, floatValue);
            b.this.e(ch.a.a(this.f15194f, this.f15195g, floatValue), this.f15196h);
            b.this.f15177w.setImageMatrix(this.f15196h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f15198a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15198a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
            if (floatValue < 0.1f) {
                floatValue = 0.0f;
            }
            return Float.valueOf(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements ViewTreeObserver.OnPreDrawListener {
        f() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            b.this.E();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class g extends m {
        g() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return 0.0f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class h extends m {
        h() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f15162h + bVar.f15163i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class i extends m {
        i() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f15162h + bVar.f15164j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface j {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface k {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class l extends m {
        l() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return b.this.f15162h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15205a;

        /* renamed from: b  reason: collision with root package name */
        private float f15206b;

        /* renamed from: c  reason: collision with root package name */
        private float f15207c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f15207c);
            this.f15205a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f15205a) {
                rh.g gVar = b.this.f15156b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f15206b = w10;
                this.f15207c = a();
                this.f15205a = true;
            }
            b bVar = b.this;
            float f10 = this.f15206b;
            bVar.d0((int) (f10 + ((this.f15207c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, qh.b bVar) {
        this.f15177w = floatingActionButton;
        this.f15178x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f15166l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f15170p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f15177w) && !this.f15177w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15177w.getDrawable();
        if (drawable != null && this.f15172r != 0) {
            RectF rectF = this.f15180z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15172r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15172r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(ch.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15177w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15177w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15177w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15177w, new ch.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        ch.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f15177w.getAlpha(), f10, this.f15177w.getScaleX(), f11, this.f15177w.getScaleY(), this.f15171q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        ch.b.a(animatorSet, arrayList);
        animatorSet.setDuration(mh.g.f(this.f15177w.getContext(), i10, this.f15177w.getContext().getResources().getInteger(bh.g.f6735b)));
        animatorSet.setInterpolator(mh.g.g(this.f15177w.getContext(), i11, ch.a.f7596b));
        return animatorSet;
    }

    private ValueAnimator h(m mVar) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setInterpolator(D);
        valueAnimator.setDuration(100L);
        valueAnimator.addListener(mVar);
        valueAnimator.addUpdateListener(mVar);
        valueAnimator.setFloatValues(0.0f, 1.0f);
        return valueAnimator;
    }

    private ViewTreeObserver.OnPreDrawListener n() {
        if (this.C == null) {
            this.C = new f();
        }
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        ViewTreeObserver viewTreeObserver = this.f15177w.getViewTreeObserver();
        ViewTreeObserver.OnPreDrawListener onPreDrawListener = this.C;
        if (onPreDrawListener != null) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
            this.C = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void B(int[] iArr);

    abstract void C(float f10, float f11, float f12);

    void D(Rect rect) {
        b2.e.h(this.f15159e, "Didn't initialize content background");
        if (W()) {
            this.f15178x.b(new InsetDrawable(this.f15159e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15178x.b(this.f15159e);
    }

    void E() {
        float rotation = this.f15177w.getRotation();
        if (this.f15170p != rotation) {
            this.f15170p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15176v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15176v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).a();
            }
        }
    }

    abstract boolean H();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        rh.g gVar = this.f15156b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15158d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        rh.g gVar = this.f15156b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f15162h != f10) {
            this.f15162h = f10;
            C(f10, this.f15163i, this.f15164j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15160f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(ch.g gVar) {
        this.f15169o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f15163i != f10) {
            this.f15163i = f10;
            C(this.f15162h, f10, this.f15164j);
        }
    }

    final void O(float f10) {
        this.f15171q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f15177w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f15172r != i10) {
            this.f15172r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15165k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f15164j != f10) {
            this.f15164j = f10;
            C(this.f15162h, this.f15163i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f15157c;
        if (drawable != null) {
            s1.a.o(drawable, ph.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f15161g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(rh.k kVar) {
        this.f15155a = kVar;
        rh.g gVar = this.f15156b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f15157c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15158d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(ch.g gVar) {
        this.f15168n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f15160f && this.f15177w.getSizeDimension() < this.f15165k) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(k kVar, boolean z10) {
        boolean z11;
        AnimatorSet g10;
        b bVar;
        float f10;
        float f11;
        if (!w()) {
            Animator animator = this.f15167m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15168n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f15177w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15177w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15177w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15177w;
                    if (z11) {
                        f11 = 0.4f;
                    } else {
                        f11 = 0.0f;
                    }
                    floatingActionButton2.setScaleX(f11);
                    if (z11) {
                        f12 = 0.4f;
                    }
                    O(f12);
                }
                ch.g gVar = this.f15168n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0204b(z10, kVar));
                ArrayList arrayList = bVar.f15174t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f15177w.b(0, z10);
            this.f15177w.setAlpha(1.0f);
            this.f15177w.setScaleY(1.0f);
            this.f15177w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f15171q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f15179y;
        o(rect);
        D(rect);
        this.f15178x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        rh.g gVar = this.f15156b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f15159e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f15160f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g l() {
        return this.f15169o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15163i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f15161g) {
            f10 = j() + this.f15164j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15164j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final rh.k q() {
        return this.f15155a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ch.g r() {
        return this.f15168n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f15160f) {
            return 0;
        }
        return Math.max((this.f15165k - this.f15177w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f15167m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                ch.g gVar = this.f15169o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f15175u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15177w;
            if (z10) {
                i10 = 8;
            } else {
                i10 = 4;
            }
            floatingActionButton.b(i10, z10);
            if (kVar != null) {
                kVar.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void u(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10);

    boolean v() {
        if (this.f15177w.getVisibility() == 0) {
            if (this.f15173s != 1) {
                return false;
            }
            return true;
        } else if (this.f15173s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f15177w.getVisibility() != 0) {
            if (this.f15173s != 2) {
                return false;
            }
            return true;
        } else if (this.f15173s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        rh.g gVar = this.f15156b;
        if (gVar != null) {
            rh.h.f(this.f15177w, gVar);
        }
        if (H()) {
            this.f15177w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
