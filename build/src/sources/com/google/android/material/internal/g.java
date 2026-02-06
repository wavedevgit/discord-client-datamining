package com.google.android.material.internal;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f15147a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private b f15148b = null;

    /* renamed from: c  reason: collision with root package name */
    ValueAnimator f15149c = null;

    /* renamed from: d  reason: collision with root package name */
    private final Animator.AnimatorListener f15150d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            g gVar = g.this;
            if (gVar.f15149c == animator) {
                gVar.f15149c = null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        final int[] f15152a;

        /* renamed from: b  reason: collision with root package name */
        final ValueAnimator f15153b;

        b(int[] iArr, ValueAnimator valueAnimator) {
            this.f15152a = iArr;
            this.f15153b = valueAnimator;
        }
    }

    public void a(int[] iArr, ValueAnimator valueAnimator) {
        b bVar = new b(iArr, valueAnimator);
        valueAnimator.addListener(this.f15150d);
        this.f15147a.add(bVar);
    }
}
