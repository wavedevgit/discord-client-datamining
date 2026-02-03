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
    private static final int[] f15892k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f15893l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f15894m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f15895n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f15896o = new C0191d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f15897c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f15898d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f15899e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f15900f;

    /* renamed from: g  reason: collision with root package name */
    private int f15901g;

    /* renamed from: h  reason: collision with root package name */
    private float f15902h;

    /* renamed from: i  reason: collision with root package name */
    private float f15903i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f15904j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f15901g = (dVar.f15901g + 4) % d.this.f15900f.f15882c.length;
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
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f15904j;
            if (bVar != null) {
                bVar.b(dVar.f15932a);
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
    class C0191d extends Property {
        C0191d(Class cls, String str) {
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
        this.f15901g = 0;
        this.f15904j = null;
        this.f15900f = eVar;
        this.f15899e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f15902h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f15903i;
    }

    private void q() {
        if (this.f15897c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f15895n, 0.0f, 1.0f);
            this.f15897c = ofFloat;
            ofFloat.setDuration(5400L);
            this.f15897c.setInterpolator(null);
            this.f15897c.setRepeatCount(-1);
            this.f15897c.addListener(new a());
        }
        if (this.f15898d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f15896o, 0.0f, 1.0f);
            this.f15898d = ofFloat2;
            ofFloat2.setDuration(333L);
            this.f15898d.setInterpolator(this.f15899e);
            this.f15898d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f15894m[i11], 333);
            if (b10 >= 0.0f && b10 <= 1.0f) {
                int i12 = i11 + this.f15901g;
                int[] iArr = this.f15900f.f15882c;
                int length = i12 % iArr.length;
                ((h.a) this.f15933b.get(0)).f15930c = zg.c.b().evaluate(this.f15899e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f15903i = f10;
    }

    private void v(int i10) {
        h.a aVar = (h.a) this.f15933b.get(0);
        float f10 = this.f15902h;
        aVar.f15928a = (f10 * 1520.0f) - 20.0f;
        aVar.f15929b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f15929b += this.f15899e.getInterpolation(b(i10, f15892k[i11], 667)) * 250.0f;
            aVar.f15928a += this.f15899e.getInterpolation(b(i10, f15893l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f15928a;
        float f12 = aVar.f15929b;
        aVar.f15928a = (f11 + ((f12 - f11) * this.f15903i)) / 360.0f;
        aVar.f15929b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.i
    void a() {
        ObjectAnimator objectAnimator = this.f15897c;
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
        this.f15904j = bVar;
    }

    @Override // com.google.android.material.progressindicator.i
    void f() {
        ObjectAnimator objectAnimator = this.f15898d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f15932a.isVisible()) {
                this.f15898d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.i
    void g() {
        q();
        s();
        this.f15897c.start();
    }

    @Override // com.google.android.material.progressindicator.i
    public void h() {
        this.f15904j = null;
    }

    void s() {
        this.f15901g = 0;
        ((h.a) this.f15933b.get(0)).f15930c = this.f15900f.f15882c[0];
        this.f15903i = 0.0f;
    }

    void t(float f10) {
        this.f15902h = f10;
        int i10 = (int) (f10 * 5400.0f);
        v(i10);
        r(i10);
        this.f15932a.invalidateSelf();
    }
}
