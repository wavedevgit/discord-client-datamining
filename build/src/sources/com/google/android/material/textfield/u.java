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
    private final int f15530a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15531b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15532c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f15533d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f15534e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f15535f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f15536g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f15537h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f15538i;

    /* renamed from: j  reason: collision with root package name */
    private int f15539j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f15540k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f15541l;

    /* renamed from: m  reason: collision with root package name */
    private final float f15542m;

    /* renamed from: n  reason: collision with root package name */
    private int f15543n;

    /* renamed from: o  reason: collision with root package name */
    private int f15544o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f15545p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15546q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f15547r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f15548s;

    /* renamed from: t  reason: collision with root package name */
    private int f15549t;

    /* renamed from: u  reason: collision with root package name */
    private int f15550u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f15551v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f15552w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15553x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f15554y;

    /* renamed from: z  reason: collision with root package name */
    private int f15555z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15556a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f15557b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f15558c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f15559d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f15556a = i10;
            this.f15557b = textView;
            this.f15558c = i11;
            this.f15559d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f15543n = this.f15556a;
            u.this.f15541l = null;
            TextView textView = this.f15557b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f15558c == 1 && u.this.f15547r != null) {
                    u.this.f15547r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f15559d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f15559d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f15559d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f15559d.setAlpha(0.0f);
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
            EditText editText = u.this.f15537h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f15536g = context;
        this.f15537h = textInputLayout;
        this.f15542m = context.getResources().getDimensionPixelSize(zg.d.f55594h);
        this.f15530a = kh.g.f(context, zg.b.M, 217);
        this.f15531b = kh.g.f(context, zg.b.I, 167);
        this.f15532c = kh.g.f(context, zg.b.M, 167);
        this.f15533d = kh.g.g(context, zg.b.O, ah.a.f628d);
        int i10 = zg.b.O;
        TimeInterpolator timeInterpolator = ah.a.f625a;
        this.f15534e = kh.g.g(context, i10, timeInterpolator);
        this.f15535f = kh.g.g(context, zg.b.Q, timeInterpolator);
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
        this.f15543n = i11;
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
        if (h0.S(this.f15537h) && this.f15537h.isEnabled()) {
            if (this.f15544o != this.f15543n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f15541l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f15553x, this.f15554y, 2, i10, i11);
            uVar.i(arrayList, uVar.f15546q, uVar.f15547r, 1, i10, i11);
            ah.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f15537h.o0();
        uVar.f15537h.t0(z10);
        uVar.f15537h.z0();
    }

    private boolean g() {
        if (this.f15538i != null && this.f15537h.getEditText() != null) {
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
                j10.setStartDelay(this.f15532c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f15532c);
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
            i10 = this.f15531b;
        } else {
            i10 = this.f15532c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f15534e;
        } else {
            timeInterpolator = this.f15535f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f15542m, 0.0f);
        ofFloat.setDuration(this.f15530a);
        ofFloat.setInterpolator(this.f15533d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f15554y;
        }
        return this.f15547r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f15536g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f15547r != null && !TextUtils.isEmpty(this.f15545p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f15546q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f15553x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f15538i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f15540k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f15538i.removeView(textView);
        }
        int i11 = this.f15539j - 1;
        this.f15539j = i11;
        O(this.f15538i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f15549t = i10;
        TextView textView = this.f15547r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f15548s = charSequence;
        TextView textView = this.f15547r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f15546q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15536g);
            this.f15547r = appCompatTextView;
            appCompatTextView.setId(zg.f.P);
            this.f15547r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15547r.setTypeface(typeface);
            }
            H(this.f15550u);
            I(this.f15551v);
            F(this.f15548s);
            E(this.f15549t);
            this.f15547r.setVisibility(4);
            e(this.f15547r, 0);
        } else {
            w();
            C(this.f15547r, 0);
            this.f15547r = null;
            this.f15537h.o0();
            this.f15537h.z0();
        }
        this.f15546q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f15550u = i10;
        TextView textView = this.f15547r;
        if (textView != null) {
            this.f15537h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f15551v = colorStateList;
        TextView textView = this.f15547r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f15555z = i10;
        TextView textView = this.f15554y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f15553x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15536g);
            this.f15554y = appCompatTextView;
            appCompatTextView.setId(zg.f.Q);
            this.f15554y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15554y.setTypeface(typeface);
            }
            this.f15554y.setVisibility(4);
            h0.p0(this.f15554y, 1);
            J(this.f15555z);
            L(this.A);
            e(this.f15554y, 1);
            this.f15554y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f15554y, 1);
            this.f15554y = null;
            this.f15537h.o0();
            this.f15537h.z0();
        }
        this.f15553x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f15554y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f15547r, typeface);
            M(this.f15554y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f15545p = charSequence;
        this.f15547r.setText(charSequence);
        int i10 = this.f15543n;
        if (i10 != 1) {
            this.f15544o = 1;
        }
        S(i10, this.f15544o, P(this.f15547r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f15552w = charSequence;
        this.f15554y.setText(charSequence);
        int i10 = this.f15543n;
        if (i10 != 2) {
            this.f15544o = 2;
        }
        S(i10, this.f15544o, P(this.f15554y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f15538i == null && this.f15540k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f15536g);
            this.f15538i = linearLayout;
            linearLayout.setOrientation(0);
            this.f15537h.addView(this.f15538i, -1, -2);
            this.f15540k = new FrameLayout(this.f15536g);
            this.f15538i.addView(this.f15540k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f15537h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f15540k.setVisibility(0);
            this.f15540k.addView(textView);
        } else {
            this.f15538i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f15538i.setVisibility(0);
        this.f15539j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f15537h.getEditText();
            boolean g10 = mh.c.g(this.f15536g);
            h0.F0(this.f15538i, v(g10, zg.d.F, h0.E(editText)), v(g10, zg.d.G, this.f15536g.getResources().getDimensionPixelSize(zg.d.E)), v(g10, zg.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f15541l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f15544o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15549t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f15548s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f15545p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f15547r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f15547r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f15552w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f15554y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f15554y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f15545p = null;
        h();
        if (this.f15543n == 1) {
            if (this.f15553x && !TextUtils.isEmpty(this.f15552w)) {
                this.f15544o = 2;
            } else {
                this.f15544o = 0;
            }
        }
        S(this.f15543n, this.f15544o, P(this.f15547r, ""));
    }

    void x() {
        h();
        int i10 = this.f15543n;
        if (i10 == 2) {
            this.f15544o = 0;
        }
        S(i10, this.f15544o, P(this.f15554y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
