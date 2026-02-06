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
    private final int f15510a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15511b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15512c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f15513d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f15514e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f15515f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f15516g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f15517h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f15518i;

    /* renamed from: j  reason: collision with root package name */
    private int f15519j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f15520k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f15521l;

    /* renamed from: m  reason: collision with root package name */
    private final float f15522m;

    /* renamed from: n  reason: collision with root package name */
    private int f15523n;

    /* renamed from: o  reason: collision with root package name */
    private int f15524o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f15525p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15526q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f15527r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f15528s;

    /* renamed from: t  reason: collision with root package name */
    private int f15529t;

    /* renamed from: u  reason: collision with root package name */
    private int f15530u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f15531v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f15532w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15533x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f15534y;

    /* renamed from: z  reason: collision with root package name */
    private int f15535z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15536a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f15537b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f15538c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f15539d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f15536a = i10;
            this.f15537b = textView;
            this.f15538c = i11;
            this.f15539d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f15523n = this.f15536a;
            u.this.f15521l = null;
            TextView textView = this.f15537b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f15538c == 1 && u.this.f15527r != null) {
                    u.this.f15527r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f15539d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f15539d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f15539d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f15539d.setAlpha(0.0f);
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
            EditText editText = u.this.f15517h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f15516g = context;
        this.f15517h = textInputLayout;
        this.f15522m = context.getResources().getDimensionPixelSize(ah.d.f689h);
        this.f15510a = lh.g.f(context, ah.b.M, 217);
        this.f15511b = lh.g.f(context, ah.b.I, 167);
        this.f15512c = lh.g.f(context, ah.b.M, 167);
        this.f15513d = lh.g.g(context, ah.b.O, bh.a.f6757d);
        int i10 = ah.b.O;
        TimeInterpolator timeInterpolator = bh.a.f6754a;
        this.f15514e = lh.g.g(context, i10, timeInterpolator);
        this.f15515f = lh.g.g(context, ah.b.Q, timeInterpolator);
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
        this.f15523n = i11;
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
        if (h0.S(this.f15517h) && this.f15517h.isEnabled()) {
            if (this.f15524o != this.f15523n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f15521l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f15533x, this.f15534y, 2, i10, i11);
            uVar.i(arrayList, uVar.f15526q, uVar.f15527r, 1, i10, i11);
            bh.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f15517h.o0();
        uVar.f15517h.t0(z10);
        uVar.f15517h.z0();
    }

    private boolean g() {
        if (this.f15518i != null && this.f15517h.getEditText() != null) {
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
                j10.setStartDelay(this.f15512c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f15512c);
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
            i10 = this.f15511b;
        } else {
            i10 = this.f15512c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f15514e;
        } else {
            timeInterpolator = this.f15515f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f15522m, 0.0f);
        ofFloat.setDuration(this.f15510a);
        ofFloat.setInterpolator(this.f15513d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f15534y;
        }
        return this.f15527r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f15516g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f15527r != null && !TextUtils.isEmpty(this.f15525p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f15526q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f15533x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f15518i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f15520k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f15518i.removeView(textView);
        }
        int i11 = this.f15519j - 1;
        this.f15519j = i11;
        O(this.f15518i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f15529t = i10;
        TextView textView = this.f15527r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f15528s = charSequence;
        TextView textView = this.f15527r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f15526q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15516g);
            this.f15527r = appCompatTextView;
            appCompatTextView.setId(ah.f.P);
            this.f15527r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15527r.setTypeface(typeface);
            }
            H(this.f15530u);
            I(this.f15531v);
            F(this.f15528s);
            E(this.f15529t);
            this.f15527r.setVisibility(4);
            e(this.f15527r, 0);
        } else {
            w();
            C(this.f15527r, 0);
            this.f15527r = null;
            this.f15517h.o0();
            this.f15517h.z0();
        }
        this.f15526q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f15530u = i10;
        TextView textView = this.f15527r;
        if (textView != null) {
            this.f15517h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f15531v = colorStateList;
        TextView textView = this.f15527r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f15535z = i10;
        TextView textView = this.f15534y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f15533x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15516g);
            this.f15534y = appCompatTextView;
            appCompatTextView.setId(ah.f.Q);
            this.f15534y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15534y.setTypeface(typeface);
            }
            this.f15534y.setVisibility(4);
            h0.p0(this.f15534y, 1);
            J(this.f15535z);
            L(this.A);
            e(this.f15534y, 1);
            this.f15534y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f15534y, 1);
            this.f15534y = null;
            this.f15517h.o0();
            this.f15517h.z0();
        }
        this.f15533x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f15534y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f15527r, typeface);
            M(this.f15534y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f15525p = charSequence;
        this.f15527r.setText(charSequence);
        int i10 = this.f15523n;
        if (i10 != 1) {
            this.f15524o = 1;
        }
        S(i10, this.f15524o, P(this.f15527r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f15532w = charSequence;
        this.f15534y.setText(charSequence);
        int i10 = this.f15523n;
        if (i10 != 2) {
            this.f15524o = 2;
        }
        S(i10, this.f15524o, P(this.f15534y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f15518i == null && this.f15520k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f15516g);
            this.f15518i = linearLayout;
            linearLayout.setOrientation(0);
            this.f15517h.addView(this.f15518i, -1, -2);
            this.f15520k = new FrameLayout(this.f15516g);
            this.f15518i.addView(this.f15520k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f15517h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f15520k.setVisibility(0);
            this.f15520k.addView(textView);
        } else {
            this.f15518i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f15518i.setVisibility(0);
        this.f15519j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f15517h.getEditText();
            boolean g10 = nh.c.g(this.f15516g);
            h0.F0(this.f15518i, v(g10, ah.d.F, h0.E(editText)), v(g10, ah.d.G, this.f15516g.getResources().getDimensionPixelSize(ah.d.E)), v(g10, ah.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f15521l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f15524o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15529t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f15528s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f15525p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f15527r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f15527r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f15532w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f15534y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f15534y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f15525p = null;
        h();
        if (this.f15523n == 1) {
            if (this.f15533x && !TextUtils.isEmpty(this.f15532w)) {
                this.f15524o = 2;
            } else {
                this.f15524o = 0;
            }
        }
        S(this.f15523n, this.f15524o, P(this.f15527r, ""));
    }

    void x() {
        h();
        int i10 = this.f15523n;
        if (i10 == 2) {
            this.f15524o = 0;
        }
        S(i10, this.f15524o, P(this.f15534y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
