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
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {
    private ColorStateList A;
    private Typeface B;

    /* renamed from: a  reason: collision with root package name */
    private final int f16399a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16400b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16401c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f16402d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16403e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f16404f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f16405g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f16406h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f16407i;

    /* renamed from: j  reason: collision with root package name */
    private int f16408j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f16409k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f16410l;

    /* renamed from: m  reason: collision with root package name */
    private final float f16411m;

    /* renamed from: n  reason: collision with root package name */
    private int f16412n;

    /* renamed from: o  reason: collision with root package name */
    private int f16413o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f16414p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16415q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f16416r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f16417s;

    /* renamed from: t  reason: collision with root package name */
    private int f16418t;

    /* renamed from: u  reason: collision with root package name */
    private int f16419u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16420v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f16421w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f16422x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f16423y;

    /* renamed from: z  reason: collision with root package name */
    private int f16424z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16425a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f16426b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f16427c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f16428d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f16425a = i10;
            this.f16426b = textView;
            this.f16427c = i11;
            this.f16428d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f16412n = this.f16425a;
            u.this.f16410l = null;
            TextView textView = this.f16426b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f16427c == 1 && u.this.f16416r != null) {
                    u.this.f16416r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f16428d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f16428d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f16428d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f16428d.setAlpha(0.0f);
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
            EditText editText = u.this.f16406h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f16405g = context;
        this.f16406h = textInputLayout;
        this.f16411m = context.getResources().getDimensionPixelSize(bh.d.f6804p);
        this.f16399a = oh.g.f(context, bh.b.Q, 217);
        this.f16400b = oh.g.f(context, bh.b.M, 167);
        this.f16401c = oh.g.f(context, bh.b.Q, 167);
        this.f16402d = oh.g.g(context, bh.b.S, ch.a.f8279d);
        int i10 = bh.b.S;
        TimeInterpolator timeInterpolator = ch.a.f8276a;
        this.f16403e = oh.g.g(context, i10, timeInterpolator);
        this.f16404f = oh.g.g(context, bh.b.U, timeInterpolator);
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
        this.f16412n = i11;
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
        if (this.f16406h.isLaidOut() && this.f16406h.isEnabled()) {
            if (this.f16413o != this.f16412n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f16410l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f16422x, this.f16423y, 2, i10, i11);
            uVar.i(arrayList, uVar.f16415q, uVar.f16416r, 1, i10, i11);
            ch.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f16406h.r0();
        uVar.f16406h.x0(z10);
        uVar.f16406h.D0();
    }

    private boolean g() {
        if (this.f16407i != null && this.f16406h.getEditText() != null) {
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
                j10.setStartDelay(this.f16401c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f16401c);
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
            i10 = this.f16400b;
        } else {
            i10 = this.f16401c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f16403e;
        } else {
            timeInterpolator = this.f16404f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f16411m, 0.0f);
        ofFloat.setDuration(this.f16399a);
        ofFloat.setInterpolator(this.f16402d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f16423y;
        }
        return this.f16416r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f16405g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f16416r != null && !TextUtils.isEmpty(this.f16414p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f16415q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f16422x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f16407i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f16409k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f16407i.removeView(textView);
        }
        int i11 = this.f16408j - 1;
        this.f16408j = i11;
        O(this.f16407i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f16418t = i10;
        TextView textView = this.f16416r;
        if (textView != null) {
            textView.setAccessibilityLiveRegion(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f16417s = charSequence;
        TextView textView = this.f16416r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f16415q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16405g);
            this.f16416r = appCompatTextView;
            appCompatTextView.setId(bh.f.Y);
            this.f16416r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16416r.setTypeface(typeface);
            }
            H(this.f16419u);
            I(this.f16420v);
            F(this.f16417s);
            E(this.f16418t);
            this.f16416r.setVisibility(4);
            e(this.f16416r, 0);
        } else {
            w();
            C(this.f16416r, 0);
            this.f16416r = null;
            this.f16406h.r0();
            this.f16406h.D0();
        }
        this.f16415q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f16419u = i10;
        TextView textView = this.f16416r;
        if (textView != null) {
            this.f16406h.d0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f16420v = colorStateList;
        TextView textView = this.f16416r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f16424z = i10;
        TextView textView = this.f16423y;
        if (textView != null) {
            androidx.core.widget.j.q(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f16422x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16405g);
            this.f16423y = appCompatTextView;
            appCompatTextView.setId(bh.f.Z);
            this.f16423y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16423y.setTypeface(typeface);
            }
            this.f16423y.setVisibility(4);
            this.f16423y.setAccessibilityLiveRegion(1);
            J(this.f16424z);
            L(this.A);
            e(this.f16423y, 1);
            this.f16423y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f16423y, 1);
            this.f16423y = null;
            this.f16406h.r0();
            this.f16406h.D0();
        }
        this.f16422x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f16423y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f16416r, typeface);
            M(this.f16423y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f16414p = charSequence;
        this.f16416r.setText(charSequence);
        int i10 = this.f16412n;
        if (i10 != 1) {
            this.f16413o = 1;
        }
        S(i10, this.f16413o, P(this.f16416r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f16421w = charSequence;
        this.f16423y.setText(charSequence);
        int i10 = this.f16412n;
        if (i10 != 2) {
            this.f16413o = 2;
        }
        S(i10, this.f16413o, P(this.f16423y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f16407i == null && this.f16409k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f16405g);
            this.f16407i = linearLayout;
            linearLayout.setOrientation(0);
            this.f16406h.addView(this.f16407i, -1, -2);
            this.f16409k = new FrameLayout(this.f16405g);
            this.f16407i.addView(this.f16409k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f16406h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f16409k.setVisibility(0);
            this.f16409k.addView(textView);
        } else {
            this.f16407i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f16407i.setVisibility(0);
        this.f16408j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f16406h.getEditText();
            boolean k10 = qh.c.k(this.f16405g);
            this.f16407i.setPaddingRelative(v(k10, bh.d.T, editText.getPaddingStart()), v(k10, bh.d.U, this.f16405g.getResources().getDimensionPixelSize(bh.d.S)), v(k10, bh.d.T, editText.getPaddingEnd()), 0);
        }
    }

    void h() {
        Animator animator = this.f16410l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f16413o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f16418t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f16417s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f16414p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f16416r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f16416r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f16421w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f16423y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f16423y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f16414p = null;
        h();
        if (this.f16412n == 1) {
            if (this.f16422x && !TextUtils.isEmpty(this.f16421w)) {
                this.f16413o = 2;
            } else {
                this.f16413o = 0;
            }
        }
        S(this.f16412n, this.f16413o, P(this.f16416r, ""));
    }

    void x() {
        h();
        int i10 = this.f16412n;
        if (i10 == 2) {
            this.f16413o = 0;
        }
        S(i10, this.f16413o, P(this.f16423y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
