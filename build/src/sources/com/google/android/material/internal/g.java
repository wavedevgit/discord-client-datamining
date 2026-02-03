package com.google.android.material.internal;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f14773a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private b f14774b = null;

    /* renamed from: c  reason: collision with root package name */
    ValueAnimator f14775c = null;

    /* renamed from: d  reason: collision with root package name */
    private final Animator.AnimatorListener f14776d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            g gVar = g.this;
            if (gVar.f14775c == animator) {
                gVar.f14775c = null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        final int[] f14778a;

        /* renamed from: b  reason: collision with root package name */
        final ValueAnimator f14779b;

        b(int[] iArr, ValueAnimator valueAnimator) {
            this.f14778a = iArr;
            this.f14779b = valueAnimator;
        }
    }

    public void a(int[] iArr, ValueAnimator valueAnimator) {
        b bVar = new b(iArr, valueAnimator);
        valueAnimator.addListener(this.f14776d);
        this.f14773a.add(bVar);
    }
}
