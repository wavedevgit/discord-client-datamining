package com.google.android.material.transformation;

import ah.b;
import ah.h;
import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.util.ArrayList;
import java.util.List;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FabTransformationScrimBehavior extends ExpandableTransformationBehavior {

    /* renamed from: i  reason: collision with root package name */
    private final h f15656i;

    /* renamed from: o  reason: collision with root package name */
    private final h f15657o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15658a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f15659b;

        a(boolean z10, View view) {
            this.f15658a = z10;
            this.f15659b = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            if (!this.f15658a) {
                this.f15659b.setVisibility(4);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            if (this.f15658a) {
                this.f15659b.setVisibility(0);
            }
        }
    }

    public FabTransformationScrimBehavior() {
        this.f15656i = new h(75L, 150L);
        this.f15657o = new h(0L, 150L);
    }

    private void O(View view, boolean z10, boolean z11, List list, List list2) {
        h hVar;
        ObjectAnimator ofFloat;
        if (z10) {
            hVar = this.f15656i;
        } else {
            hVar = this.f15657o;
        }
        if (z10) {
            if (!z11) {
                view.setAlpha(0.0f);
            }
            ofFloat = ObjectAnimator.ofFloat(view, View.ALPHA, 1.0f);
        } else {
            ofFloat = ObjectAnimator.ofFloat(view, View.ALPHA, 0.0f);
        }
        hVar.a(ofFloat);
        list.add(ofFloat);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        return super.H(coordinatorLayout, view, motionEvent);
    }

    @Override // com.google.android.material.transformation.ExpandableTransformationBehavior
    protected AnimatorSet N(View view, View view2, boolean z10, boolean z11) {
        ArrayList arrayList = new ArrayList();
        O(view2, z10, z11, arrayList, new ArrayList());
        AnimatorSet animatorSet = new AnimatorSet();
        b.a(animatorSet, arrayList);
        animatorSet.addListener(new a(z10, view2));
        return animatorSet;
    }

    @Override // com.google.android.material.transformation.ExpandableBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean i(CoordinatorLayout coordinatorLayout, View view, View view2) {
        return view2 instanceof FloatingActionButton;
    }

    public FabTransformationScrimBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15656i = new h(75L, 150L);
        this.f15657o = new h(0L, 150L);
    }
}
