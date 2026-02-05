package com.google.android.material.floatingactionbutton;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.animation.StateListAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.os.Build;
import android.view.View;
import b2.e;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import ph.g;
import ph.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c extends b {
    private StateListAnimator O;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends g {
        a(k kVar) {
            super(kVar);
        }

        @Override // ph.g, android.graphics.drawable.Drawable
        public boolean isStateful() {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(FloatingActionButton floatingActionButton, oh.b bVar) {
        super(floatingActionButton, bVar);
    }

    private StateListAnimator g0(float f10, float f11, float f12) {
        StateListAnimator stateListAnimator = new StateListAnimator();
        stateListAnimator.addState(b.I, h0(f10, f12));
        stateListAnimator.addState(b.J, h0(f10, f11));
        stateListAnimator.addState(b.K, h0(f10, f11));
        stateListAnimator.addState(b.L, h0(f10, f11));
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        arrayList.add(ObjectAnimator.ofFloat(this.f15057w, ViewProps.ELEVATION, f10).setDuration(0L));
        if (Build.VERSION.SDK_INT <= 24) {
            FloatingActionButton floatingActionButton = this.f15057w;
            arrayList.add(ObjectAnimator.ofFloat(floatingActionButton, View.TRANSLATION_Z, floatingActionButton.getTranslationZ()).setDuration(100L));
        }
        arrayList.add(ObjectAnimator.ofFloat(this.f15057w, View.TRANSLATION_Z, 0.0f).setDuration(100L));
        animatorSet.playSequentially((Animator[]) arrayList.toArray(new Animator[0]));
        animatorSet.setInterpolator(b.D);
        stateListAnimator.addState(b.M, animatorSet);
        stateListAnimator.addState(b.N, h0(0.0f, 0.0f));
        return stateListAnimator;
    }

    private Animator h0(float f10, float f11) {
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.play(ObjectAnimator.ofFloat(this.f15057w, ViewProps.ELEVATION, f10).setDuration(0L)).with(ObjectAnimator.ofFloat(this.f15057w, View.TRANSLATION_Z, f11).setDuration(100L));
        animatorSet.setInterpolator(b.D);
        return animatorSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void B(int[] iArr) {
    }

    @Override // com.google.android.material.floatingactionbutton.b
    void C(float f10, float f11, float f12) {
        if (this.f15057w.getStateListAnimator() == this.O) {
            StateListAnimator g02 = g0(f10, f11, f12);
            this.O = g02;
            this.f15057w.setStateListAnimator(g02);
        }
        if (W()) {
            c0();
        }
    }

    @Override // com.google.android.material.floatingactionbutton.b
    boolean H() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f15037c;
        if (drawable instanceof RippleDrawable) {
            ((RippleDrawable) drawable).setColor(nh.b.a(colorStateList));
        } else {
            super.S(colorStateList);
        }
    }

    @Override // com.google.android.material.floatingactionbutton.b
    boolean W() {
        if (!this.f15058x.c() && Y()) {
            return false;
        }
        return true;
    }

    @Override // com.google.android.material.floatingactionbutton.b
    void a0() {
    }

    com.google.android.material.floatingactionbutton.a f0(int i10, ColorStateList colorStateList) {
        Context context = this.f15057w.getContext();
        com.google.android.material.floatingactionbutton.a aVar = new com.google.android.material.floatingactionbutton.a((k) e.g(this.f15035a));
        aVar.e(androidx.core.content.a.c(context, zg.c.f55574e), androidx.core.content.a.c(context, zg.c.f55573d), androidx.core.content.a.c(context, zg.c.f55571b), androidx.core.content.a.c(context, zg.c.f55572c));
        aVar.d(i10);
        aVar.c(colorStateList);
        return aVar;
    }

    g i0() {
        return new a((k) e.g(this.f15035a));
    }

    @Override // com.google.android.material.floatingactionbutton.b
    public float j() {
        return this.f15057w.getElevation();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void o(Rect rect) {
        if (this.f15058x.c()) {
            super.o(rect);
        } else if (!Y()) {
            int sizeDimension = (this.f15045k - this.f15057w.getSizeDimension()) / 2;
            rect.set(sizeDimension, sizeDimension, sizeDimension, sizeDimension);
        } else {
            rect.set(0, 0, 0, 0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void u(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10) {
        Drawable drawable;
        g i02 = i0();
        this.f15036b = i02;
        i02.setTintList(colorStateList);
        if (mode != null) {
            this.f15036b.setTintMode(mode);
        }
        this.f15036b.N(this.f15057w.getContext());
        if (i10 > 0) {
            this.f15038d = f0(i10, colorStateList);
            drawable = new LayerDrawable(new Drawable[]{(Drawable) e.g(this.f15038d), (Drawable) e.g(this.f15036b)});
        } else {
            this.f15038d = null;
            drawable = this.f15036b;
        }
        RippleDrawable rippleDrawable = new RippleDrawable(nh.b.a(colorStateList2), drawable, null);
        this.f15037c = rippleDrawable;
        this.f15039e = rippleDrawable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void x() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.floatingactionbutton.b
    public void z() {
        c0();
    }
}
