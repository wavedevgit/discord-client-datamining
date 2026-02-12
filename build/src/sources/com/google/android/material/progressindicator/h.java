package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.util.Property;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends Drawable implements Animatable {
    private static final Property B = new c(Float.class, "growFraction");

    /* renamed from: d  reason: collision with root package name */
    final Context f16132d;

    /* renamed from: e  reason: collision with root package name */
    final com.google.android.material.progressindicator.b f16133e;

    /* renamed from: o  reason: collision with root package name */
    private ValueAnimator f16135o;

    /* renamed from: p  reason: collision with root package name */
    private ValueAnimator f16136p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16137q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f16138r;

    /* renamed from: s  reason: collision with root package name */
    private float f16139s;

    /* renamed from: u  reason: collision with root package name */
    private List f16141u;

    /* renamed from: v  reason: collision with root package name */
    private androidx.vectordrawable.graphics.drawable.b f16142v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f16143w;

    /* renamed from: x  reason: collision with root package name */
    private float f16144x;

    /* renamed from: z  reason: collision with root package name */
    private int f16146z;

    /* renamed from: t  reason: collision with root package name */
    private float f16140t = -1.0f;

    /* renamed from: y  reason: collision with root package name */
    final Paint f16145y = new Paint();
    Rect A = new Rect();

    /* renamed from: i  reason: collision with root package name */
    ph.a f16134i = new ph.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            super.onAnimationStart(animator);
            h.this.f();
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
            h.super.setVisible(false, false);
            h.this.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(h hVar) {
            return Float.valueOf(hVar.h());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(h hVar, Float f10) {
            hVar.p(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Context context, com.google.android.material.progressindicator.b bVar) {
        this.f16132d = context;
        this.f16133e = bVar;
        setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    private void d(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f16143w;
        this.f16143w = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.cancel();
        }
        this.f16143w = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f16142v;
        if (bVar != null) {
            bVar.b(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f16141u;
        if (list != null && !this.f16143w) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.b(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f() {
        androidx.vectordrawable.graphics.drawable.b bVar = this.f16142v;
        if (bVar != null) {
            bVar.c(this);
        }
        List<androidx.vectordrawable.graphics.drawable.b> list = this.f16141u;
        if (list != null && !this.f16143w) {
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : list) {
                bVar2.c(this);
            }
        }
    }

    private void g(ValueAnimator... valueAnimatorArr) {
        boolean z10 = this.f16143w;
        this.f16143w = true;
        for (ValueAnimator valueAnimator : valueAnimatorArr) {
            valueAnimator.end();
        }
        this.f16143w = z10;
    }

    private boolean k() {
        return this instanceof g;
    }

    private void n() {
        if (this.f16135o == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, B, 0.0f, 1.0f);
            this.f16135o = ofFloat;
            ofFloat.setDuration(500L);
            this.f16135o.setInterpolator(ch.a.f8277b);
            r(this.f16135o);
        }
        if (this.f16136p == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, B, 1.0f, 0.0f);
            this.f16136p = ofFloat2;
            ofFloat2.setDuration(500L);
            this.f16136p.setInterpolator(ch.a.f8277b);
            q(this.f16136p);
        }
    }

    private void q(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f16136p;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set hideAnimator while the current hideAnimator is running.");
        }
        this.f16136p = valueAnimator;
        valueAnimator.addListener(new b());
    }

    private void r(ValueAnimator valueAnimator) {
        ValueAnimator valueAnimator2 = this.f16135o;
        if (valueAnimator2 != null && valueAnimator2.isRunning()) {
            throw new IllegalArgumentException("Cannot set showAnimator while the current showAnimator is running.");
        }
        this.f16135o = valueAnimator;
        valueAnimator.addListener(new a());
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f16146z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        if (!this.f16133e.d() && !this.f16133e.c()) {
            return 1.0f;
        }
        if (!this.f16138r && !this.f16137q) {
            return this.f16144x;
        }
        return this.f16139s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        int i10;
        float f10 = this.f16140t;
        if (f10 > 0.0f) {
            return f10;
        }
        if (this.f16133e.b(k()) && this.f16133e.f16083m != 0) {
            float a10 = this.f16134i.a(this.f16132d.getContentResolver());
            if (a10 > 0.0f) {
                if (k()) {
                    i10 = this.f16133e.f16080j;
                } else {
                    i10 = this.f16133e.f16081k;
                }
                int i11 = (int) (((i10 * 1000.0f) / this.f16133e.f16083m) * a10);
                float uptimeMillis = ((float) (SystemClock.uptimeMillis() % i11)) / i11;
                if (uptimeMillis < 0.0f) {
                    return (uptimeMillis % 1.0f) + 1.0f;
                }
                return uptimeMillis;
            }
        }
        return 0.0f;
    }

    public boolean isRunning() {
        if (!m() && !l()) {
            return false;
        }
        return true;
    }

    public boolean j() {
        return s(false, false, false);
    }

    public boolean l() {
        ValueAnimator valueAnimator = this.f16136p;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f16138r) {
            return true;
        }
        return false;
    }

    public boolean m() {
        ValueAnimator valueAnimator = this.f16135o;
        if ((valueAnimator != null && valueAnimator.isRunning()) || this.f16137q) {
            return true;
        }
        return false;
    }

    public void o(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (this.f16141u == null) {
            this.f16141u = new ArrayList();
        }
        if (!this.f16141u.contains(bVar)) {
            this.f16141u.add(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(float f10) {
        if (this.f16144x != f10) {
            this.f16144x = f10;
            invalidateSelf();
        }
    }

    public boolean s(boolean z10, boolean z11, boolean z12) {
        boolean z13;
        float a10 = this.f16134i.a(this.f16132d.getContentResolver());
        if (z12 && a10 > 0.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        return t(z10, z11, z13);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f16146z = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f16145y.setColorFilter(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        return s(z10, z11, true);
    }

    public void start() {
        t(true, true, false);
    }

    public void stop() {
        t(false, true, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t(boolean z10, boolean z11, boolean z12) {
        ValueAnimator valueAnimator;
        ValueAnimator valueAnimator2;
        boolean c10;
        n();
        boolean z13 = false;
        if (!isVisible() && !z10) {
            return false;
        }
        if (z10) {
            valueAnimator = this.f16135o;
        } else {
            valueAnimator = this.f16136p;
        }
        if (z10) {
            valueAnimator2 = this.f16136p;
        } else {
            valueAnimator2 = this.f16135o;
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
                c10 = this.f16133e.d();
            } else {
                c10 = this.f16133e.c();
            }
            if (!c10) {
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

    public boolean u(androidx.vectordrawable.graphics.drawable.b bVar) {
        List list = this.f16141u;
        if (list != null && list.contains(bVar)) {
            this.f16141u.remove(bVar);
            if (this.f16141u.isEmpty()) {
                this.f16141u = null;
                return true;
            }
            return true;
        }
        return false;
    }
}
