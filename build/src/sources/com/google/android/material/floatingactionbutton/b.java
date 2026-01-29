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
import oh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = zg.a.f55660c;
    private static final int E = yg.b.F;
    private static final int F = yg.b.P;
    private static final int G = yg.b.G;
    private static final int H = yg.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    oh.k f16044a;

    /* renamed from: b  reason: collision with root package name */
    oh.g f16045b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f16046c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f16047d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f16048e;

    /* renamed from: f  reason: collision with root package name */
    boolean f16049f;

    /* renamed from: h  reason: collision with root package name */
    float f16051h;

    /* renamed from: i  reason: collision with root package name */
    float f16052i;

    /* renamed from: j  reason: collision with root package name */
    float f16053j;

    /* renamed from: k  reason: collision with root package name */
    int f16054k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f16055l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f16056m;

    /* renamed from: n  reason: collision with root package name */
    private zg.g f16057n;

    /* renamed from: o  reason: collision with root package name */
    private zg.g f16058o;

    /* renamed from: p  reason: collision with root package name */
    private float f16059p;

    /* renamed from: r  reason: collision with root package name */
    private int f16061r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f16063t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f16064u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f16065v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f16066w;

    /* renamed from: x  reason: collision with root package name */
    final nh.b f16067x;

    /* renamed from: g  reason: collision with root package name */
    boolean f16050g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f16060q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f16062s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f16068y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f16069z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f16070a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f16071b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f16072c;

        a(boolean z10, k kVar) {
            this.f16071b = z10;
            this.f16072c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f16070a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f16062s = 0;
            b.this.f16056m = null;
            if (!this.f16070a) {
                FloatingActionButton floatingActionButton = b.this.f16066w;
                boolean z10 = this.f16071b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f16072c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f16066w.b(0, this.f16071b);
            b.this.f16062s = 1;
            b.this.f16056m = animator;
            this.f16070a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0183b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f16074a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f16075b;

        C0183b(boolean z10, k kVar) {
            this.f16074a = z10;
            this.f16075b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f16062s = 0;
            b.this.f16056m = null;
            k kVar = this.f16075b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f16066w.b(0, this.f16074a);
            b.this.f16062s = 2;
            b.this.f16056m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends zg.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f16060q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f16078a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f16079b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f16080c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f16081d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f16082e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f16083f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f16084g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f16085h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f16078a = f10;
            this.f16079b = f11;
            this.f16080c = f12;
            this.f16081d = f13;
            this.f16082e = f14;
            this.f16083f = f15;
            this.f16084g = f16;
            this.f16085h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f16066w.setAlpha(zg.a.b(this.f16078a, this.f16079b, 0.0f, 0.2f, floatValue));
            b.this.f16066w.setScaleX(zg.a.a(this.f16080c, this.f16081d, floatValue));
            b.this.f16066w.setScaleY(zg.a.a(this.f16082e, this.f16081d, floatValue));
            b.this.f16060q = zg.a.a(this.f16083f, this.f16084g, floatValue);
            b.this.e(zg.a.a(this.f16083f, this.f16084g, floatValue), this.f16085h);
            b.this.f16066w.setImageMatrix(this.f16085h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f16087a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f16087a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
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
            return bVar.f16051h + bVar.f16052i;
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
            return bVar.f16051h + bVar.f16053j;
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
            return b.this.f16051h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f16094a;

        /* renamed from: b  reason: collision with root package name */
        private float f16095b;

        /* renamed from: c  reason: collision with root package name */
        private float f16096c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f16096c);
            this.f16094a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f16094a) {
                oh.g gVar = b.this.f16045b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f16095b = w10;
                this.f16096c = a();
                this.f16094a = true;
            }
            b bVar = b.this;
            float f10 = this.f16095b;
            bVar.d0((int) (f10 + ((this.f16096c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, nh.b bVar) {
        this.f16066w = floatingActionButton;
        this.f16067x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f16055l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f16059p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f16066w) && !this.f16066w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f16066w.getDrawable();
        if (drawable != null && this.f16061r != 0) {
            RectF rectF = this.f16069z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f16061r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f16061r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(zg.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f16066w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f16066w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f16066w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f16066w, new zg.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        zg.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f16066w.getAlpha(), f10, this.f16066w.getScaleX(), f11, this.f16066w.getScaleY(), this.f16060q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        zg.b.a(animatorSet, arrayList);
        animatorSet.setDuration(jh.g.f(this.f16066w.getContext(), i10, this.f16066w.getContext().getResources().getInteger(yg.g.f54448b)));
        animatorSet.setInterpolator(jh.g.g(this.f16066w.getContext(), i11, zg.a.f55659b));
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
        ViewTreeObserver viewTreeObserver = this.f16066w.getViewTreeObserver();
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
        b2.e.h(this.f16048e, "Didn't initialize content background");
        if (W()) {
            this.f16067x.b(new InsetDrawable(this.f16048e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f16067x.b(this.f16048e);
    }

    void E() {
        float rotation = this.f16066w.getRotation();
        if (this.f16059p != rotation) {
            this.f16059p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f16065v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f16065v;
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
        oh.g gVar = this.f16045b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f16047d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        oh.g gVar = this.f16045b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f16051h != f10) {
            this.f16051h = f10;
            C(f10, this.f16052i, this.f16053j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f16049f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(zg.g gVar) {
        this.f16058o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f16052i != f10) {
            this.f16052i = f10;
            C(this.f16051h, f10, this.f16053j);
        }
    }

    final void O(float f10) {
        this.f16060q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f16066w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f16061r != i10) {
            this.f16061r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f16054k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f16053j != f10) {
            this.f16053j = f10;
            C(this.f16051h, this.f16052i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f16046c;
        if (drawable != null) {
            s1.a.o(drawable, mh.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f16050g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(oh.k kVar) {
        this.f16044a = kVar;
        oh.g gVar = this.f16045b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f16046c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f16047d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(zg.g gVar) {
        this.f16057n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f16049f && this.f16066w.getSizeDimension() < this.f16054k) {
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
            Animator animator = this.f16056m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f16057n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f16066w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f16066w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f16066w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f16066w;
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
                zg.g gVar = this.f16057n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0183b(z10, kVar));
                ArrayList arrayList = bVar.f16063t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f16066w.b(0, z10);
            this.f16066w.setAlpha(1.0f);
            this.f16066w.setScaleY(1.0f);
            this.f16066w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f16060q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f16068y;
        o(rect);
        D(rect);
        this.f16067x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        oh.g gVar = this.f16045b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f16048e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f16049f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g l() {
        return this.f16058o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f16052i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f16050g) {
            f10 = j() + this.f16053j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f16053j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final oh.k q() {
        return this.f16044a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g r() {
        return this.f16057n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f16049f) {
            return 0;
        }
        return Math.max((this.f16054k - this.f16066w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f16056m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                zg.g gVar = this.f16058o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f16064u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f16066w;
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
        if (this.f16066w.getVisibility() == 0) {
            if (this.f16062s != 1) {
                return false;
            }
            return true;
        } else if (this.f16062s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f16066w.getVisibility() != 0) {
            if (this.f16062s != 2) {
                return false;
            }
            return true;
        } else if (this.f16062s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        oh.g gVar = this.f16045b;
        if (gVar != null) {
            oh.h.f(this.f16066w, gVar);
        }
        if (H()) {
            this.f16066w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
