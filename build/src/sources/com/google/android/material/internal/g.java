package com.google.android.material.internal;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f15167a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private b f15168b = null;

    /* renamed from: c  reason: collision with root package name */
    ValueAnimator f15169c = null;

    /* renamed from: d  reason: collision with root package name */
    private final Animator.AnimatorListener f15170d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            g gVar = g.this;
            if (gVar.f15169c == animator) {
                gVar.f15169c = null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        final int[] f15172a;

        /* renamed from: b  reason: collision with root package name */
        final ValueAnimator f15173b;

        b(int[] iArr, ValueAnimator valueAnimator) {
            this.f15172a = iArr;
            this.f15173b = valueAnimator;
        }
    }

    public void a(int[] iArr, ValueAnimator valueAnimator) {
        b bVar = new b(iArr, valueAnimator);
        valueAnimator.addListener(this.f15170d);
        this.f15167a.add(bVar);
    }
}
