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
    private final int f16539a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16540b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16541c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f16542d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16543e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f16544f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f16545g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f16546h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f16547i;

    /* renamed from: j  reason: collision with root package name */
    private int f16548j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f16549k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f16550l;

    /* renamed from: m  reason: collision with root package name */
    private final float f16551m;

    /* renamed from: n  reason: collision with root package name */
    private int f16552n;

    /* renamed from: o  reason: collision with root package name */
    private int f16553o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f16554p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16555q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f16556r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f16557s;

    /* renamed from: t  reason: collision with root package name */
    private int f16558t;

    /* renamed from: u  reason: collision with root package name */
    private int f16559u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16560v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f16561w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f16562x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f16563y;

    /* renamed from: z  reason: collision with root package name */
    private int f16564z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16565a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f16566b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f16567c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f16568d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f16565a = i10;
            this.f16566b = textView;
            this.f16567c = i11;
            this.f16568d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f16552n = this.f16565a;
            u.this.f16550l = null;
            TextView textView = this.f16566b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f16567c == 1 && u.this.f16556r != null) {
                    u.this.f16556r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f16568d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f16568d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f16568d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f16568d.setAlpha(0.0f);
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
            EditText editText = u.this.f16546h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f16545g = context;
        this.f16546h = textInputLayout;
        this.f16551m = context.getResources().getDimensionPixelSize(yg.d.f54390h);
        this.f16539a = jh.g.f(context, yg.b.M, 217);
        this.f16540b = jh.g.f(context, yg.b.I, 167);
        this.f16541c = jh.g.f(context, yg.b.M, 167);
        this.f16542d = jh.g.g(context, yg.b.O, zg.a.f55661d);
        int i10 = yg.b.O;
        TimeInterpolator timeInterpolator = zg.a.f55658a;
        this.f16543e = jh.g.g(context, i10, timeInterpolator);
        this.f16544f = jh.g.g(context, yg.b.Q, timeInterpolator);
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
        this.f16552n = i11;
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
        if (h0.S(this.f16546h) && this.f16546h.isEnabled()) {
            if (this.f16553o != this.f16552n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f16550l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f16562x, this.f16563y, 2, i10, i11);
            uVar.i(arrayList, uVar.f16555q, uVar.f16556r, 1, i10, i11);
            zg.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f16546h.o0();
        uVar.f16546h.t0(z10);
        uVar.f16546h.z0();
    }

    private boolean g() {
        if (this.f16547i != null && this.f16546h.getEditText() != null) {
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
                j10.setStartDelay(this.f16541c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f16541c);
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
            i10 = this.f16540b;
        } else {
            i10 = this.f16541c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f16543e;
        } else {
            timeInterpolator = this.f16544f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f16551m, 0.0f);
        ofFloat.setDuration(this.f16539a);
        ofFloat.setInterpolator(this.f16542d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f16563y;
        }
        return this.f16556r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f16545g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f16556r != null && !TextUtils.isEmpty(this.f16554p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f16555q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f16562x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f16547i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f16549k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f16547i.removeView(textView);
        }
        int i11 = this.f16548j - 1;
        this.f16548j = i11;
        O(this.f16547i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f16558t = i10;
        TextView textView = this.f16556r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f16557s = charSequence;
        TextView textView = this.f16556r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f16555q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16545g);
            this.f16556r = appCompatTextView;
            appCompatTextView.setId(yg.f.P);
            this.f16556r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16556r.setTypeface(typeface);
            }
            H(this.f16559u);
            I(this.f16560v);
            F(this.f16557s);
            E(this.f16558t);
            this.f16556r.setVisibility(4);
            e(this.f16556r, 0);
        } else {
            w();
            C(this.f16556r, 0);
            this.f16556r = null;
            this.f16546h.o0();
            this.f16546h.z0();
        }
        this.f16555q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f16559u = i10;
        TextView textView = this.f16556r;
        if (textView != null) {
            this.f16546h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f16560v = colorStateList;
        TextView textView = this.f16556r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f16564z = i10;
        TextView textView = this.f16563y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f16562x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16545g);
            this.f16563y = appCompatTextView;
            appCompatTextView.setId(yg.f.Q);
            this.f16563y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16563y.setTypeface(typeface);
            }
            this.f16563y.setVisibility(4);
            h0.p0(this.f16563y, 1);
            J(this.f16564z);
            L(this.A);
            e(this.f16563y, 1);
            this.f16563y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f16563y, 1);
            this.f16563y = null;
            this.f16546h.o0();
            this.f16546h.z0();
        }
        this.f16562x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f16563y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f16556r, typeface);
            M(this.f16563y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f16554p = charSequence;
        this.f16556r.setText(charSequence);
        int i10 = this.f16552n;
        if (i10 != 1) {
            this.f16553o = 1;
        }
        S(i10, this.f16553o, P(this.f16556r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f16561w = charSequence;
        this.f16563y.setText(charSequence);
        int i10 = this.f16552n;
        if (i10 != 2) {
            this.f16553o = 2;
        }
        S(i10, this.f16553o, P(this.f16563y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f16547i == null && this.f16549k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f16545g);
            this.f16547i = linearLayout;
            linearLayout.setOrientation(0);
            this.f16546h.addView(this.f16547i, -1, -2);
            this.f16549k = new FrameLayout(this.f16545g);
            this.f16547i.addView(this.f16549k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f16546h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f16549k.setVisibility(0);
            this.f16549k.addView(textView);
        } else {
            this.f16547i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f16547i.setVisibility(0);
        this.f16548j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f16546h.getEditText();
            boolean g10 = lh.c.g(this.f16545g);
            h0.F0(this.f16547i, v(g10, yg.d.F, h0.E(editText)), v(g10, yg.d.G, this.f16545g.getResources().getDimensionPixelSize(yg.d.E)), v(g10, yg.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f16550l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f16553o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f16558t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f16557s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f16554p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f16556r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f16556r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f16561w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f16563y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f16563y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f16554p = null;
        h();
        if (this.f16552n == 1) {
            if (this.f16562x && !TextUtils.isEmpty(this.f16561w)) {
                this.f16553o = 2;
            } else {
                this.f16553o = 0;
            }
        }
        S(this.f16552n, this.f16553o, P(this.f16556r, ""));
    }

    void x() {
        h();
        int i10 = this.f16552n;
        if (i10 == 2) {
            this.f16553o = 0;
        }
        S(i10, this.f16553o, P(this.f16563y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
