package com.google.android.material.internal;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.transition.Transition;
import androidx.transition.c0;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k extends Transition {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ TextView f15927a;

        a(TextView textView) {
            this.f15927a = textView;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            this.f15927a.setScaleX(floatValue);
            this.f15927a.setScaleY(floatValue);
        }
    }

    private void w0(c0 c0Var) {
        View view = c0Var.f5376b;
        if (view instanceof TextView) {
            c0Var.f5375a.put("android:textscale:scale", Float.valueOf(((TextView) view).getScaleX()));
        }
    }

    @Override // androidx.transition.Transition
    public void h(c0 c0Var) {
        w0(c0Var);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        w0(c0Var);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        float f10;
        if (c0Var == null || c0Var2 == null || !(c0Var.f5376b instanceof TextView)) {
            return null;
        }
        View view = c0Var2.f5376b;
        if (!(view instanceof TextView)) {
            return null;
        }
        TextView textView = (TextView) view;
        Map map = c0Var.f5375a;
        Map map2 = c0Var2.f5375a;
        float f11 = 1.0f;
        if (map.get("android:textscale:scale") != null) {
            f10 = ((Float) map.get("android:textscale:scale")).floatValue();
        } else {
            f10 = 1.0f;
        }
        if (map2.get("android:textscale:scale") != null) {
            f11 = ((Float) map2.get("android:textscale:scale")).floatValue();
        }
        if (f10 == f11) {
            return null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(f10, f11);
        ofFloat.addUpdateListener(new a(textView));
        return ofFloat;
    }
}
