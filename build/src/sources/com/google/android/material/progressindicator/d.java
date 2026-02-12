package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.util.Property;
import com.google.android.material.progressindicator.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends j {

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f16097k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f16098l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f16099m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f16100n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f16101o = new C0188d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f16102c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f16103d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f16104e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f16105f;

    /* renamed from: g  reason: collision with root package name */
    private int f16106g;

    /* renamed from: h  reason: collision with root package name */
    private float f16107h;

    /* renamed from: i  reason: collision with root package name */
    private float f16108i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f16109j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f16106g = (dVar.f16106g + 4) % d.this.f16105f.f16075e.length;
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
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f16109j;
            if (bVar != null) {
                bVar.b(dVar.f16166a);
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
    class C0188d extends Property {
        C0188d(Class cls, String str) {
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

    public d(f fVar) {
        super(1);
        this.f16106g = 0;
        this.f16109j = null;
        this.f16105f = fVar;
        this.f16104e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f16107h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f16108i;
    }

    private void q() {
        if (this.f16102c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f16100n, 0.0f, 1.0f);
            this.f16102c = ofFloat;
            ofFloat.setDuration(this.f16105f.f16084n * 5400.0f);
            this.f16102c.setInterpolator(null);
            this.f16102c.setRepeatCount(-1);
            this.f16102c.addListener(new a());
        }
        if (this.f16103d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f16101o, 0.0f, 1.0f);
            this.f16103d = ofFloat2;
            ofFloat2.setDuration(this.f16105f.f16084n * 333.0f);
            this.f16103d.setInterpolator(this.f16104e);
            this.f16103d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f16099m[i11], 333);
            if (b10 > 0.0f && b10 < 1.0f) {
                int i12 = i11 + this.f16106g;
                int[] iArr = this.f16105f.f16075e;
                int length = i12 % iArr.length;
                ((i.a) this.f16167b.get(0)).f16156c = ch.c.b().evaluate(this.f16104e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f16108i = f10;
    }

    private void v() {
        q();
        this.f16102c.setDuration(this.f16105f.f16084n * 5400.0f);
        this.f16103d.setDuration(this.f16105f.f16084n * 333.0f);
    }

    private void w(int i10) {
        i.a aVar = (i.a) this.f16167b.get(0);
        float f10 = this.f16107h;
        aVar.f16154a = (f10 * 1520.0f) - 20.0f;
        aVar.f16155b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f16155b += this.f16104e.getInterpolation(b(i10, f16097k[i11], 667)) * 250.0f;
            aVar.f16154a += this.f16104e.getInterpolation(b(i10, f16098l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f16154a;
        float f12 = aVar.f16155b;
        aVar.f16154a = (f11 + ((f12 - f11) * this.f16108i)) / 360.0f;
        aVar.f16155b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.j
    void a() {
        ObjectAnimator objectAnimator = this.f16102c;
        if (objectAnimator != null) {
            objectAnimator.cancel();
        }
    }

    @Override // com.google.android.material.progressindicator.j
    public void c() {
        v();
        s();
    }

    @Override // com.google.android.material.progressindicator.j
    public void d(androidx.vectordrawable.graphics.drawable.b bVar) {
        this.f16109j = bVar;
    }

    @Override // com.google.android.material.progressindicator.j
    void f() {
        ObjectAnimator objectAnimator = this.f16103d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f16166a.isVisible()) {
                this.f16103d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.j
    void g() {
        q();
        s();
        this.f16102c.start();
    }

    @Override // com.google.android.material.progressindicator.j
    public void h() {
        this.f16109j = null;
    }

    void s() {
        this.f16106g = 0;
        ((i.a) this.f16167b.get(0)).f16156c = this.f16105f.f16075e[0];
        this.f16108i = 0.0f;
    }

    void t(float f10) {
        this.f16107h = f10;
        int i10 = (int) (f10 * 5400.0f);
        w(i10);
        r(i10);
        this.f16166a.invalidateSelf();
    }
}
