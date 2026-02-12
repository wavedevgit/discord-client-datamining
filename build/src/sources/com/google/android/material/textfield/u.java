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
    private final int f16400a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16401b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16402c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f16403d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16404e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f16405f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f16406g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f16407h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f16408i;

    /* renamed from: j  reason: collision with root package name */
    private int f16409j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f16410k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f16411l;

    /* renamed from: m  reason: collision with root package name */
    private final float f16412m;

    /* renamed from: n  reason: collision with root package name */
    private int f16413n;

    /* renamed from: o  reason: collision with root package name */
    private int f16414o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f16415p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16416q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f16417r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f16418s;

    /* renamed from: t  reason: collision with root package name */
    private int f16419t;

    /* renamed from: u  reason: collision with root package name */
    private int f16420u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16421v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f16422w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f16423x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f16424y;

    /* renamed from: z  reason: collision with root package name */
    private int f16425z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16426a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f16427b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f16428c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f16429d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f16426a = i10;
            this.f16427b = textView;
            this.f16428c = i11;
            this.f16429d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f16413n = this.f16426a;
            u.this.f16411l = null;
            TextView textView = this.f16427b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f16428c == 1 && u.this.f16417r != null) {
                    u.this.f16417r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f16429d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f16429d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f16429d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f16429d.setAlpha(0.0f);
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
            EditText editText = u.this.f16407h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f16406g = context;
        this.f16407h = textInputLayout;
        this.f16412m = context.getResources().getDimensionPixelSize(bh.d.f6804p);
        this.f16400a = oh.g.f(context, bh.b.Q, 217);
        this.f16401b = oh.g.f(context, bh.b.M, 167);
        this.f16402c = oh.g.f(context, bh.b.Q, 167);
        this.f16403d = oh.g.g(context, bh.b.S, ch.a.f8279d);
        int i10 = bh.b.S;
        TimeInterpolator timeInterpolator = ch.a.f8276a;
        this.f16404e = oh.g.g(context, i10, timeInterpolator);
        this.f16405f = oh.g.g(context, bh.b.U, timeInterpolator);
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
        this.f16413n = i11;
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
        if (this.f16407h.isLaidOut() && this.f16407h.isEnabled()) {
            if (this.f16414o != this.f16413n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f16411l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f16423x, this.f16424y, 2, i10, i11);
            uVar.i(arrayList, uVar.f16416q, uVar.f16417r, 1, i10, i11);
            ch.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f16407h.r0();
        uVar.f16407h.x0(z10);
        uVar.f16407h.D0();
    }

    private boolean g() {
        if (this.f16408i != null && this.f16407h.getEditText() != null) {
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
                j10.setStartDelay(this.f16402c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f16402c);
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
            i10 = this.f16401b;
        } else {
            i10 = this.f16402c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f16404e;
        } else {
            timeInterpolator = this.f16405f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f16412m, 0.0f);
        ofFloat.setDuration(this.f16400a);
        ofFloat.setInterpolator(this.f16403d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f16424y;
        }
        return this.f16417r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f16406g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f16417r != null && !TextUtils.isEmpty(this.f16415p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f16416q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f16423x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f16408i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f16410k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f16408i.removeView(textView);
        }
        int i11 = this.f16409j - 1;
        this.f16409j = i11;
        O(this.f16408i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f16419t = i10;
        TextView textView = this.f16417r;
        if (textView != null) {
            textView.setAccessibilityLiveRegion(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f16418s = charSequence;
        TextView textView = this.f16417r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f16416q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16406g);
            this.f16417r = appCompatTextView;
            appCompatTextView.setId(bh.f.Y);
            this.f16417r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16417r.setTypeface(typeface);
            }
            H(this.f16420u);
            I(this.f16421v);
            F(this.f16418s);
            E(this.f16419t);
            this.f16417r.setVisibility(4);
            e(this.f16417r, 0);
        } else {
            w();
            C(this.f16417r, 0);
            this.f16417r = null;
            this.f16407h.r0();
            this.f16407h.D0();
        }
        this.f16416q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f16420u = i10;
        TextView textView = this.f16417r;
        if (textView != null) {
            this.f16407h.d0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f16421v = colorStateList;
        TextView textView = this.f16417r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f16425z = i10;
        TextView textView = this.f16424y;
        if (textView != null) {
            androidx.core.widget.j.q(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f16423x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f16406g);
            this.f16424y = appCompatTextView;
            appCompatTextView.setId(bh.f.Z);
            this.f16424y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f16424y.setTypeface(typeface);
            }
            this.f16424y.setVisibility(4);
            this.f16424y.setAccessibilityLiveRegion(1);
            J(this.f16425z);
            L(this.A);
            e(this.f16424y, 1);
            this.f16424y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f16424y, 1);
            this.f16424y = null;
            this.f16407h.r0();
            this.f16407h.D0();
        }
        this.f16423x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f16424y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f16417r, typeface);
            M(this.f16424y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f16415p = charSequence;
        this.f16417r.setText(charSequence);
        int i10 = this.f16413n;
        if (i10 != 1) {
            this.f16414o = 1;
        }
        S(i10, this.f16414o, P(this.f16417r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f16422w = charSequence;
        this.f16424y.setText(charSequence);
        int i10 = this.f16413n;
        if (i10 != 2) {
            this.f16414o = 2;
        }
        S(i10, this.f16414o, P(this.f16424y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f16408i == null && this.f16410k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f16406g);
            this.f16408i = linearLayout;
            linearLayout.setOrientation(0);
            this.f16407h.addView(this.f16408i, -1, -2);
            this.f16410k = new FrameLayout(this.f16406g);
            this.f16408i.addView(this.f16410k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f16407h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f16410k.setVisibility(0);
            this.f16410k.addView(textView);
        } else {
            this.f16408i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f16408i.setVisibility(0);
        this.f16409j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f16407h.getEditText();
            boolean k10 = qh.c.k(this.f16406g);
            this.f16408i.setPaddingRelative(v(k10, bh.d.T, editText.getPaddingStart()), v(k10, bh.d.U, this.f16406g.getResources().getDimensionPixelSize(bh.d.S)), v(k10, bh.d.T, editText.getPaddingEnd()), 0);
        }
    }

    void h() {
        Animator animator = this.f16411l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f16414o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f16419t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f16418s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f16415p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f16417r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f16417r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f16422w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f16424y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f16424y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f16415p = null;
        h();
        if (this.f16413n == 1) {
            if (this.f16423x && !TextUtils.isEmpty(this.f16422w)) {
                this.f16414o = 2;
            } else {
                this.f16414o = 0;
            }
        }
        S(this.f16413n, this.f16414o, P(this.f16417r, ""));
    }

    void x() {
        h();
        int i10 = this.f16413n;
        if (i10 == 2) {
            this.f16414o = 0;
        }
        S(i10, this.f16414o, P(this.f16424y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
