package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.util.Property;
import com.google.android.material.progressindicator.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends i {

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f16263k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f16264l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f16265m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f16266n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f16267o = new C0186d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f16268c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f16269d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f16270e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f16271f;

    /* renamed from: g  reason: collision with root package name */
    private int f16272g;

    /* renamed from: h  reason: collision with root package name */
    private float f16273h;

    /* renamed from: i  reason: collision with root package name */
    private float f16274i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f16275j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f16272g = (dVar.f16272g + 4) % d.this.f16271f.f16253c.length;
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
            d.this.a();
            d dVar = d.this;
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f16275j;
            if (bVar != null) {
                bVar.b(dVar.f16303a);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(d dVar) {
            return Float.valueOf(dVar.o());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.t(f10.floatValue());
        }
    }

    /* renamed from: com.google.android.material.progressindicator.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0186d extends Property {
        C0186d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(d dVar) {
            return Float.valueOf(dVar.p());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.u(f10.floatValue());
        }
    }

    public d(e eVar) {
        super(1);
        this.f16272g = 0;
        this.f16275j = null;
        this.f16271f = eVar;
        this.f16270e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f16273h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f16274i;
    }

    private void q() {
        if (this.f16268c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f16266n, 0.0f, 1.0f);
            this.f16268c = ofFloat;
            ofFloat.setDuration(5400L);
            this.f16268c.setInterpolator(null);
            this.f16268c.setRepeatCount(-1);
            this.f16268c.addListener(new a());
        }
        if (this.f16269d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f16267o, 0.0f, 1.0f);
            this.f16269d = ofFloat2;
            ofFloat2.setDuration(333L);
            this.f16269d.setInterpolator(this.f16270e);
            this.f16269d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f16265m[i11], 333);
            if (b10 >= 0.0f && b10 <= 1.0f) {
                int i12 = i11 + this.f16272g;
                int[] iArr = this.f16271f.f16253c;
                int length = i12 % iArr.length;
                ((h.a) this.f16304b.get(0)).f16301c = zg.c.b().evaluate(this.f16270e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f16274i = f10;
    }

    private void v(int i10) {
        h.a aVar = (h.a) this.f16304b.get(0);
        float f10 = this.f16273h;
        aVar.f16299a = (f10 * 1520.0f) - 20.0f;
        aVar.f16300b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f16300b += this.f16270e.getInterpolation(b(i10, f16263k[i11], 667)) * 250.0f;
            aVar.f16299a += this.f16270e.getInterpolation(b(i10, f16264l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f16299a;
        float f12 = aVar.f16300b;
        aVar.f16299a = (f11 + ((f12 - f11) * this.f16274i)) / 360.0f;
        aVar.f16300b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.i
    void a() {
        ObjectAnimator objectAnimator = this.f16268c;
        if (objectAnimator != null) {
            objectAnimator.cancel();
        }
    }

    @Override // com.google.android.material.progressindicator.i
    public void c() {
        s();
    }

    @Override // com.google.android.material.progressindicator.i
    public void d(androidx.vectordrawable.graphics.drawable.b bVar) {
        this.f16275j = bVar;
    }

    @Override // com.google.android.material.progressindicator.i
    void f() {
        ObjectAnimator objectAnimator = this.f16269d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f16303a.isVisible()) {
                this.f16269d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.i
    void g() {
        q();
        s();
        this.f16268c.start();
    }

    @Override // com.google.android.material.progressindicator.i
    public void h() {
        this.f16275j = null;
    }

    void s() {
        this.f16272g = 0;
        ((h.a) this.f16304b.get(0)).f16301c = this.f16271f.f16253c[0];
        this.f16274i = 0.0f;
    }

    void t(float f10) {
        this.f16273h = f10;
        int i10 = (int) (f10 * 5400.0f);
        v(i10);
        r(i10);
        this.f16303a.invalidateSelf();
    }
}
