package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.util.Property;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends Drawable implements Animatable {

    /* renamed from: z  reason: collision with root package name */
    private static final Property f14878z = new c(Float.class, "growFraction");

    /* renamed from: d  reason: collision with root package name */
    final Context f14879d;

    /* renamed from: e  reason: collision with root package name */
    final com.google.android.material.progressindicator.b f14880e;

    /* renamed from: o  reason: collision with root package name */
    private ValueAnimator f14882o;

    /* renamed from: p  reason: collision with root package name */
    private ValueAnimator f14883p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14884q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14885r;

    /* renamed from: s  reason: collision with root package name */
    private float f14886s;

    /* renamed from: t  reason: collision with root package name */
    private List f14887t;

    /* renamed from: u  reason: collision with root package name */
    private androidx.vectordrawable.graphics.drawable.b f14888u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f14889v;

    /* renamed from: w  reason: collision with root package name */
    private float f14890w;

    /* renamed from: y  reason: collision with root package name */
    private int f14892y;

    /* renamed from: x  reason: collision with root package name */
    final Paint f14891x = new Paint();

    /* renamed from: i  reason: collision with root package name */
    kh.a f14881i = new kh.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            super.onAnimationStart(animator);
            g.this.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            super.onAnimationEnd(animator);
            g.super.setVisible(false, false);
            g.this.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(g gVar) {
            return Float.valueOf(gVar.h());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(g gVar, Float f10) {
            gVar.n(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context, com.google.android.material.progressindicator.b bVar) {
        this.f14879d = context;
        this.f14880e = bVar;
        setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    private void d(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f14889v;
        this.f14889v = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.cancel();
        }
        this.f14889v = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f14888u;
        if (bVar != null) {
            bVar.b(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f14887t;
        if (list != null && !this.f14889v) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.b(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f14888u;
        if (bVar != null) {
            bVar.c(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f14887t;
        if (list != null && !this.f14889v) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.c(this);
            }
        }
    }

    private void g(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f14889v;
        this.f14889v = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.end();
        }
        this.f14889v = z10;
    }

    private void l() {
        if (this.f14882o == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f14878z, 0.0f, 1.0f);
            this.f14882o = ofFloat;
            ofFloat.setDuration(500L);
            this.f14882o.setInterpolator(zg.a.f55942b);
            p(this.f14882o);
        }
        if (this.f14883p == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f14878z, 1.0f, 0.0f);
            this.f14883p = ofFloat2;
            ofFloat2.setDuration(500L);
            this.f14883p.setInterpolator(zg.a.f55942b);
            o(this.f14883p);
        }
    }

    private void o(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f14883p;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set hideAnimator while the current hideAnimator is running.");
        }
        this.f14883p = valueAnimator;
        valueAnimator.addListener(new b());
    }

    private void p(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f14882o;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set showAnimator while the current showAnimator is running.");
        }
        this.f14882o = valueAnimator;
        valueAnimator.addListener(new a());
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f14892y;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        if (!this.f14880e.b() && !this.f14880e.a()) {
            return 1.0f;
        }
        if (!this.f14885r && !this.f14884q) {
            return this.f14890w;
        }
        return this.f14886s;
    }

    public boolean i() {
        return q(false, false, false);
    }

    public boolean isRunning() {
        if (!k() && !j()) {
            return false;
        }
        return true;
    }

    public boolean j() {
        ValueAnimator valueAnimator = this.f14883p;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f14885r) {
            return true;
        }
        return false;
    }

    public boolean k() {
        ValueAnimator valueAnimator = this.f14882o;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f14884q) {
            return true;
        }
        return false;
    }

    public void m(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (this.f14887t == null) {
            this.f14887t = new ArrayList();
        }
        if (!this.f14887t.contains(bVar)) {
            this.f14887t.add(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(float f10) {
        if (this.f14890w != f10) {
            this.f14890w = f10;
            invalidateSelf();
        }
    }

    public boolean q(boolean z10, boolean z11, boolean z12) {
        boolean z13;
        float a10 = this.f14881i.a(this.f14879d.getContentResolver());
        if (z12 && a10 > 0.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        return r(z10, z11, z13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(boolean z10, boolean z11, boolean z12) {
        ValueAnimator valueAnimator;
        ValueAnimator valueAnimator2;
        boolean a10;
        l();
        boolean z13 = false;
        if (!isVisible() && !z10) {
            return false;
        }
        if (z10) {
            valueAnimator = this.f14882o;
        } else {
            valueAnimator = this.f14883p;
        }
        if (z10) {
            valueAnimator2 = this.f14883p;
        } else {
            valueAnimator2 = this.f14882o;
        }
        if (!z12) {
            if (valueAnimator2.isRunning()) {
                d(valueAnimator2);
            }
            if (valueAnimator.isRunning()) {
                valueAnimator.end();
            } else {
                g(valueAnimator);
            }
            return super.setVisible(z10, false);
        } else if (valueAnimator.isRunning()) {
            return false;
        } else {
            z13 = (!z10 || super.setVisible(z10, false)) ? true : true;
            if (z10) {
                a10 = this.f14880e.b();
            } else {
                a10 = this.f14880e.a();
            }
            if (!a10) {
                g(valueAnimator);
                return z13;
            } else if (!z11 && valueAnimator.isPaused()) {
                valueAnimator.resume();
                return z13;
            } else {
                valueAnimator.start();
                return z13;
            }
        }
    }

    public boolean s(androidx.vectordrawable.graphics.drawable.b bVar) {
        List list = this.f14887t;
        if (list != null && list.contains(bVar)) {
            this.f14887t.remove(bVar);
            if (this.f14887t.isEmpty()) {
                this.f14887t = null;
                return true;
            }
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f14892y = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f14891x.setColorFilter(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        return q(z10, z11, true);
    }

    public void start() {
        r(true, true, false);
    }

    public void stop() {
        r(false, true, false);
    }
}
