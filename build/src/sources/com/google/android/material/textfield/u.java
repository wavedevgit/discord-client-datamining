package com.google.android.material.textfield;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Typeface;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.core.view.h0;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {
    private ColorStateList A;
    private Typeface B;

    /* renamed from: a  reason: collision with root package name */
    private final int f16168a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16169b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16170c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f16171d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16172e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f16173f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f16174g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f16175h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f16176i;

    /* renamed from: j  reason: collision with root package name */
    private int f16177j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f16178k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f16179l;

    /* renamed from: m  reason: collision with root package name */
    private final float f16180m;

    /* renamed from: n  reason: collision with root package name */
    private int f16181n;

    /* renamed from: o  reason: collision with root package name */
    private int f16182o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f16183p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16184q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f16185r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f16186s;

    /* renamed from: t  reason: collision with root package name */
    private int f16187t;

    /* renamed from: u  reason: collision with root package name */
    private int f16188u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16189v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f16190w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f16191x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f16192y;

    /* renamed from: z  reason: collision with root package name */
    private int f16193z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16194a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f16195b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f16196c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f16197d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f16194a = i10;
            this.f16195b = textView;
            this.f16196c = i11;
            this.f16197d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f16181n = this.f16194a;
            u.this.f16179l = null;
            TextView textView = this.f16195b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f16196c == 1 && u.this.f16185r != null) {
                    u.this.f16185r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f16197d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f16197d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f16197d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f16197d.setAlpha(0.0f);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends View.AccessibilityDelegate {
        b() {
        }

        @Override // android.view.View.AccessibilityDelegate
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfo accessibilityNodeInfo) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfo);
            EditText editText = u.this.f16175h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f16174g = context;
        this.f16175h = textInputLayout;
        this.f16180m = context.getResources().getDimensionPixelSize(yg.d.f54381h);
        this.f16168a = jh.g.f(context, yg.b.M, 217);
        this.f16169b = jh.g.f(context, yg.b.I, 167);
        this.f16170c = jh.g.f(context, yg.b.M, 167);
        this.f16171d = jh.g.g(context, yg.b.O, zg.a.f55809d);
        int i10 = yg.b.O;
        TimeInterpolator timeInterpolator = zg.a.f55806a;
        this.f16172e = jh.g.g(context, i10, timeInterpolator);
        this.f16173f = jh.g.g(context, yg.b.Q, timeInterpolator);
    }

    private void D(int i10, int i11) {
        TextView m10;
        TextView m11;
        if (i10 == i11) {
            return;
        }
        if (i11 != 0 && (m11 = m(i11)) != null) {
            m11.setVisibility(0);
            m11.setAlpha(1.0f);
        }
        if (i10 != 0 && (m10 = m(i10)) != null) {
            m10.setVisibility(4);
            if (i10 == 1) {
                m10.setText((CharSequence) null);
            }
        }
        this.f16181n = i11;
    }

    private void M(TextView textView, Typeface typeface) {
        if (textView != null) {
            textView.setTypeface(typeface);
        }
    }

    private void O(ViewGroup viewGroup, int i10) {
        if (i10 == 0) {
            viewGroup.setVisibility(8);
        }
    }

    private boolean P(TextView textView, CharSequence charSequence) {
        if (h0.S(this.f16175h) && this.f16175h.isEnabled()) {
            if (this.f16182o != this.f16181n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void S(int i10, int i11, boolean z10) {
        u uVar;
        if (i10 == i11) {
            return;
        }
        if (z10) {
            AnimatorSet animatorSet = new AnimatorSet();
            this.f16179l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f16191x, this.f16192y, 2, i10, i11);
            uVar.i(arrayList, uVar.f16184q, uVar.f16185r, 1, i10, i11);
            zg.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f16175h.o0();
        uVar.f16175h.t0(z10);
        uVar.f16175h.z0();
    }

    private boolean g() {
        if (this.f16176i != null && this.f16175h.getEditText() != null) {
            return true;
        }
        return false;
    }

    private void i(List list, boolean z10, TextView textView, int i10, int i11, int i12) {
        boolean z11;
        if (textView != null && z10) {
            if (i10 != i12 && i10 != i11) {
                return;
            }
            if (i12 == i10) {
                z11 = true;
            } else {
                z11 = false;
            }
            ObjectAnimator j10 = j(textView, z11);
            if (i10 == i12 && i11 != 0) {
                j10.setStartDelay(this.f16170c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f16170c);
                list.add(k10);
            }
        }
    }

    private ObjectAnimator j(TextView textView, boolean z10) {
        float f10;
        int i10;
        TimeInterpolator timeInterpolator;
        if (z10) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.ALPHA, f10);
        if (z10) {
            i10 = this.f16169b;
        } else {
            i10 = this.f16170c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f16172e;
        } else {
            timeInterpolator = this.f16173f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f16180m, 0.0f);
        ofFloat.setDuration(this.f16168a);
        ofFloat.setInterpolator(this.f16171d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f16192y;
        }
        return this.f16185r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f16174g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f16185r != null && !TextUtils.isEmpty(this.f16183p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f16184q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f16191x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f16176i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f16178k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f16176i.removeView(textView);
        }
        int i11 = this.f16177j - 1;
        this.f16177j = i11;
        O(this.f16176i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f16187t = i10;
        TextView textView = this.f16185r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f16186s = charSequence;
        TextView textView = this.f16185r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f16184q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16174g);
            this.f16185r = appCompatTextView;
            appCompatTextView.setId(yg.f.P);
            this.f16185r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16185r.setTypeface(typeface);
            }
            H(this.f16188u);
            I(this.f16189v);
            F(this.f16186s);
            E(this.f16187t);
            this.f16185r.setVisibility(4);
            e(this.f16185r, 0);
        } else {
            w();
            C(this.f16185r, 0);
            this.f16185r = null;
            this.f16175h.o0();
            this.f16175h.z0();
        }
        this.f16184q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f16188u = i10;
        TextView textView = this.f16185r;
        if (textView != null) {
            this.f16175h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f16189v = colorStateList;
        TextView textView = this.f16185r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f16193z = i10;
        TextView textView = this.f16192y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f16191x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16174g);
            this.f16192y = appCompatTextView;
            appCompatTextView.setId(yg.f.Q);
            this.f16192y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16192y.setTypeface(typeface);
            }
            this.f16192y.setVisibility(4);
            h0.p0(this.f16192y, 1);
            J(this.f16193z);
            L(this.A);
            e(this.f16192y, 1);
            this.f16192y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f16192y, 1);
            this.f16192y = null;
            this.f16175h.o0();
            this.f16175h.z0();
        }
        this.f16191x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f16192y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f16185r, typeface);
            M(this.f16192y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f16183p = charSequence;
        this.f16185r.setText(charSequence);
        int i10 = this.f16181n;
        if (i10 != 1) {
            this.f16182o = 1;
        }
        S(i10, this.f16182o, P(this.f16185r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f16190w = charSequence;
        this.f16192y.setText(charSequence);
        int i10 = this.f16181n;
        if (i10 != 2) {
            this.f16182o = 2;
        }
        S(i10, this.f16182o, P(this.f16192y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f16176i == null && this.f16178k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f16174g);
            this.f16176i = linearLayout;
            linearLayout.setOrientation(0);
            this.f16175h.addView(this.f16176i, -1, -2);
            this.f16178k = new FrameLayout(this.f16174g);
            this.f16176i.addView(this.f16178k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f16175h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f16178k.setVisibility(0);
            this.f16178k.addView(textView);
        } else {
            this.f16176i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f16176i.setVisibility(0);
        this.f16177j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f16175h.getEditText();
            boolean g10 = lh.c.g(this.f16174g);
            h0.F0(this.f16176i, v(g10, yg.d.F, h0.E(editText)), v(g10, yg.d.G, this.f16174g.getResources().getDimensionPixelSize(yg.d.E)), v(g10, yg.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f16179l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f16182o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f16187t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f16186s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f16183p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f16185r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f16185r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f16190w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f16192y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f16192y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f16183p = null;
        h();
        if (this.f16181n == 1) {
            if (this.f16191x && !TextUtils.isEmpty(this.f16190w)) {
                this.f16182o = 2;
            } else {
                this.f16182o = 0;
            }
        }
        S(this.f16181n, this.f16182o, P(this.f16185r, ""));
    }

    void x() {
        h();
        int i10 = this.f16181n;
        if (i10 == 2) {
            this.f16182o = 0;
        }
        S(i10, this.f16182o, P(this.f16192y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
