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
    private final int f15650a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15651b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15652c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f15653d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f15654e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f15655f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f15656g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f15657h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f15658i;

    /* renamed from: j  reason: collision with root package name */
    private int f15659j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f15660k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f15661l;

    /* renamed from: m  reason: collision with root package name */
    private final float f15662m;

    /* renamed from: n  reason: collision with root package name */
    private int f15663n;

    /* renamed from: o  reason: collision with root package name */
    private int f15664o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f15665p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15666q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f15667r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f15668s;

    /* renamed from: t  reason: collision with root package name */
    private int f15669t;

    /* renamed from: u  reason: collision with root package name */
    private int f15670u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f15671v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f15672w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15673x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f15674y;

    /* renamed from: z  reason: collision with root package name */
    private int f15675z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15676a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f15677b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f15678c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f15679d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f15676a = i10;
            this.f15677b = textView;
            this.f15678c = i11;
            this.f15679d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f15663n = this.f15676a;
            u.this.f15661l = null;
            TextView textView = this.f15677b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f15678c == 1 && u.this.f15667r != null) {
                    u.this.f15667r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f15679d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f15679d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f15679d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f15679d.setAlpha(0.0f);
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
            EditText editText = u.this.f15657h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f15656g = context;
        this.f15657h = textInputLayout;
        this.f15662m = context.getResources().getDimensionPixelSize(bh.d.f6677h);
        this.f15650a = mh.g.f(context, bh.b.M, 217);
        this.f15651b = mh.g.f(context, bh.b.I, 167);
        this.f15652c = mh.g.f(context, bh.b.M, 167);
        this.f15653d = mh.g.g(context, bh.b.O, ch.a.f7598d);
        int i10 = bh.b.O;
        TimeInterpolator timeInterpolator = ch.a.f7595a;
        this.f15654e = mh.g.g(context, i10, timeInterpolator);
        this.f15655f = mh.g.g(context, bh.b.Q, timeInterpolator);
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
        this.f15663n = i11;
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
        if (h0.S(this.f15657h) && this.f15657h.isEnabled()) {
            if (this.f15664o != this.f15663n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f15661l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f15673x, this.f15674y, 2, i10, i11);
            uVar.i(arrayList, uVar.f15666q, uVar.f15667r, 1, i10, i11);
            ch.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f15657h.o0();
        uVar.f15657h.t0(z10);
        uVar.f15657h.z0();
    }

    private boolean g() {
        if (this.f15658i != null && this.f15657h.getEditText() != null) {
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
                j10.setStartDelay(this.f15652c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f15652c);
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
            i10 = this.f15651b;
        } else {
            i10 = this.f15652c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f15654e;
        } else {
            timeInterpolator = this.f15655f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f15662m, 0.0f);
        ofFloat.setDuration(this.f15650a);
        ofFloat.setInterpolator(this.f15653d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f15674y;
        }
        return this.f15667r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f15656g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f15667r != null && !TextUtils.isEmpty(this.f15665p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f15666q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f15673x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f15658i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f15660k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f15658i.removeView(textView);
        }
        int i11 = this.f15659j - 1;
        this.f15659j = i11;
        O(this.f15658i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f15669t = i10;
        TextView textView = this.f15667r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f15668s = charSequence;
        TextView textView = this.f15667r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f15666q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15656g);
            this.f15667r = appCompatTextView;
            appCompatTextView.setId(bh.f.P);
            this.f15667r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15667r.setTypeface(typeface);
            }
            H(this.f15670u);
            I(this.f15671v);
            F(this.f15668s);
            E(this.f15669t);
            this.f15667r.setVisibility(4);
            e(this.f15667r, 0);
        } else {
            w();
            C(this.f15667r, 0);
            this.f15667r = null;
            this.f15657h.o0();
            this.f15657h.z0();
        }
        this.f15666q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f15670u = i10;
        TextView textView = this.f15667r;
        if (textView != null) {
            this.f15657h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f15671v = colorStateList;
        TextView textView = this.f15667r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f15675z = i10;
        TextView textView = this.f15674y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f15673x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15656g);
            this.f15674y = appCompatTextView;
            appCompatTextView.setId(bh.f.Q);
            this.f15674y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15674y.setTypeface(typeface);
            }
            this.f15674y.setVisibility(4);
            h0.p0(this.f15674y, 1);
            J(this.f15675z);
            L(this.A);
            e(this.f15674y, 1);
            this.f15674y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f15674y, 1);
            this.f15674y = null;
            this.f15657h.o0();
            this.f15657h.z0();
        }
        this.f15673x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f15674y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f15667r, typeface);
            M(this.f15674y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f15665p = charSequence;
        this.f15667r.setText(charSequence);
        int i10 = this.f15663n;
        if (i10 != 1) {
            this.f15664o = 1;
        }
        S(i10, this.f15664o, P(this.f15667r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f15672w = charSequence;
        this.f15674y.setText(charSequence);
        int i10 = this.f15663n;
        if (i10 != 2) {
            this.f15664o = 2;
        }
        S(i10, this.f15664o, P(this.f15674y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f15658i == null && this.f15660k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f15656g);
            this.f15658i = linearLayout;
            linearLayout.setOrientation(0);
            this.f15657h.addView(this.f15658i, -1, -2);
            this.f15660k = new FrameLayout(this.f15656g);
            this.f15658i.addView(this.f15660k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f15657h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f15660k.setVisibility(0);
            this.f15660k.addView(textView);
        } else {
            this.f15658i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f15658i.setVisibility(0);
        this.f15659j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f15657h.getEditText();
            boolean g10 = oh.c.g(this.f15656g);
            h0.F0(this.f15658i, v(g10, bh.d.F, h0.E(editText)), v(g10, bh.d.G, this.f15656g.getResources().getDimensionPixelSize(bh.d.E)), v(g10, bh.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f15661l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f15664o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15669t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f15668s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f15665p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f15667r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f15667r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f15672w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f15674y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f15674y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f15665p = null;
        h();
        if (this.f15663n == 1) {
            if (this.f15673x && !TextUtils.isEmpty(this.f15672w)) {
                this.f15664o = 2;
            } else {
                this.f15664o = 0;
            }
        }
        S(this.f15663n, this.f15664o, P(this.f15667r, ""));
    }

    void x() {
        h();
        int i10 = this.f15663n;
        if (i10 == 2) {
            this.f15664o = 0;
        }
        S(i10, this.f15664o, P(this.f15674y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
