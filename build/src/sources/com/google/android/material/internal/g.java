package com.google.android.material.internal;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f16176a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private b f16177b = null;

    /* renamed from: c  reason: collision with root package name */
    ValueAnimator f16178c = null;

    /* renamed from: d  reason: collision with root package name */
    private final Animator.AnimatorListener f16179d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            g gVar = g.this;
            if (gVar.f16178c == animator) {
                gVar.f16178c = null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        final int[] f16181a;

        /* renamed from: b  reason: collision with root package name */
        final ValueAnimator f16182b;

        b(int[] iArr, ValueAnimator valueAnimator) {
            this.f16181a = iArr;
            this.f16182b = valueAnimator;
        }
    }

    public void a(int[] iArr, ValueAnimator valueAnimator) {
        b bVar = new b(iArr, valueAnimator);
        valueAnimator.addListener(this.f16179d);
        this.f16176a.add(bVar);
    }
}
