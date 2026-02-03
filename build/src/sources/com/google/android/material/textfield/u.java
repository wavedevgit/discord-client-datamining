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
    private final int f15136a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15137b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15138c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f15139d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f15140e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f15141f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f15142g;

    /* renamed from: h  reason: collision with root package name */
    private final TextInputLayout f15143h;

    /* renamed from: i  reason: collision with root package name */
    private LinearLayout f15144i;

    /* renamed from: j  reason: collision with root package name */
    private int f15145j;

    /* renamed from: k  reason: collision with root package name */
    private FrameLayout f15146k;

    /* renamed from: l  reason: collision with root package name */
    private Animator f15147l;

    /* renamed from: m  reason: collision with root package name */
    private final float f15148m;

    /* renamed from: n  reason: collision with root package name */
    private int f15149n;

    /* renamed from: o  reason: collision with root package name */
    private int f15150o;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f15151p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15152q;

    /* renamed from: r  reason: collision with root package name */
    private TextView f15153r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f15154s;

    /* renamed from: t  reason: collision with root package name */
    private int f15155t;

    /* renamed from: u  reason: collision with root package name */
    private int f15156u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f15157v;

    /* renamed from: w  reason: collision with root package name */
    private CharSequence f15158w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15159x;

    /* renamed from: y  reason: collision with root package name */
    private TextView f15160y;

    /* renamed from: z  reason: collision with root package name */
    private int f15161z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15162a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextView f15163b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f15164c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f15165d;

        a(int i10, TextView textView, int i11, TextView textView2) {
            this.f15162a = i10;
            this.f15163b = textView;
            this.f15164c = i11;
            this.f15165d = textView2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            u.this.f15149n = this.f15162a;
            u.this.f15147l = null;
            TextView textView = this.f15163b;
            if (textView != null) {
                textView.setVisibility(4);
                if (this.f15164c == 1 && u.this.f15153r != null) {
                    u.this.f15153r.setText((CharSequence) null);
                }
            }
            TextView textView2 = this.f15165d;
            if (textView2 != null) {
                textView2.setTranslationY(0.0f);
                this.f15165d.setAlpha(1.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            TextView textView = this.f15165d;
            if (textView != null) {
                textView.setVisibility(0);
                this.f15165d.setAlpha(0.0f);
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
            EditText editText = u.this.f15143h.getEditText();
            if (editText != null) {
                accessibilityNodeInfo.setLabeledBy(editText);
            }
        }
    }

    public u(TextInputLayout textInputLayout) {
        Context context = textInputLayout.getContext();
        this.f15142g = context;
        this.f15143h = textInputLayout;
        this.f15148m = context.getResources().getDimensionPixelSize(yg.d.f54139h);
        this.f15136a = jh.g.f(context, yg.b.M, 217);
        this.f15137b = jh.g.f(context, yg.b.I, 167);
        this.f15138c = jh.g.f(context, yg.b.M, 167);
        this.f15139d = jh.g.g(context, yg.b.O, zg.a.f55947d);
        int i10 = yg.b.O;
        TimeInterpolator timeInterpolator = zg.a.f55944a;
        this.f15140e = jh.g.g(context, i10, timeInterpolator);
        this.f15141f = jh.g.g(context, yg.b.Q, timeInterpolator);
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
        this.f15149n = i11;
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
        if (h0.S(this.f15143h) && this.f15143h.isEnabled()) {
            if (this.f15150o != this.f15149n || textView == null || !TextUtils.equals(textView.getText(), charSequence)) {
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
            this.f15147l = animatorSet;
            ArrayList arrayList = new ArrayList();
            uVar = this;
            uVar.i(arrayList, this.f15159x, this.f15160y, 2, i10, i11);
            uVar.i(arrayList, uVar.f15152q, uVar.f15153r, 1, i10, i11);
            zg.b.a(animatorSet, arrayList);
            animatorSet.addListener(new a(i11, m(i10), i10, m(i11)));
            animatorSet.start();
        } else {
            uVar = this;
            D(i10, i11);
        }
        uVar.f15143h.o0();
        uVar.f15143h.t0(z10);
        uVar.f15143h.z0();
    }

    private boolean g() {
        if (this.f15144i != null && this.f15143h.getEditText() != null) {
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
                j10.setStartDelay(this.f15138c);
            }
            list.add(j10);
            if (i12 == i10 && i11 != 0) {
                ObjectAnimator k10 = k(textView);
                k10.setStartDelay(this.f15138c);
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
            i10 = this.f15137b;
        } else {
            i10 = this.f15138c;
        }
        ofFloat.setDuration(i10);
        if (z10) {
            timeInterpolator = this.f15140e;
        } else {
            timeInterpolator = this.f15141f;
        }
        ofFloat.setInterpolator(timeInterpolator);
        return ofFloat;
    }

    private ObjectAnimator k(TextView textView) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(textView, View.TRANSLATION_Y, -this.f15148m, 0.0f);
        ofFloat.setDuration(this.f15136a);
        ofFloat.setInterpolator(this.f15139d);
        return ofFloat;
    }

    private TextView m(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return this.f15160y;
        }
        return this.f15153r;
    }

    private int v(boolean z10, int i10, int i11) {
        if (z10) {
            return this.f15142g.getResources().getDimensionPixelSize(i10);
        }
        return i11;
    }

    private boolean y(int i10) {
        if (i10 == 1 && this.f15153r != null && !TextUtils.isEmpty(this.f15151p)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f15152q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean B() {
        return this.f15159x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(TextView textView, int i10) {
        FrameLayout frameLayout;
        if (this.f15144i == null) {
            return;
        }
        if (z(i10) && (frameLayout = this.f15146k) != null) {
            frameLayout.removeView(textView);
        } else {
            this.f15144i.removeView(textView);
        }
        int i11 = this.f15145j - 1;
        this.f15145j = i11;
        O(this.f15144i, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(int i10) {
        this.f15155t = i10;
        TextView textView = this.f15153r;
        if (textView != null) {
            h0.p0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(CharSequence charSequence) {
        this.f15154s = charSequence;
        TextView textView = this.f15153r;
        if (textView != null) {
            textView.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(boolean z10) {
        if (this.f15152q == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15142g);
            this.f15153r = appCompatTextView;
            appCompatTextView.setId(yg.f.P);
            this.f15153r.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15153r.setTypeface(typeface);
            }
            H(this.f15156u);
            I(this.f15157v);
            F(this.f15154s);
            E(this.f15155t);
            this.f15153r.setVisibility(4);
            e(this.f15153r, 0);
        } else {
            w();
            C(this.f15153r, 0);
            this.f15153r = null;
            this.f15143h.o0();
            this.f15143h.z0();
        }
        this.f15152q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        this.f15156u = i10;
        TextView textView = this.f15153r;
        if (textView != null) {
            this.f15143h.b0(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        this.f15157v = colorStateList;
        TextView textView = this.f15153r;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10) {
        this.f15161z = i10;
        TextView textView = this.f15160y;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (this.f15159x == z10) {
            return;
        }
        h();
        if (z10) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(this.f15142g);
            this.f15160y = appCompatTextView;
            appCompatTextView.setId(yg.f.Q);
            this.f15160y.setTextAlignment(5);
            Typeface typeface = this.B;
            if (typeface != null) {
                this.f15160y.setTypeface(typeface);
            }
            this.f15160y.setVisibility(4);
            h0.p0(this.f15160y, 1);
            J(this.f15161z);
            L(this.A);
            e(this.f15160y, 1);
            this.f15160y.setAccessibilityDelegate(new b());
        } else {
            x();
            C(this.f15160y, 1);
            this.f15160y = null;
            this.f15143h.o0();
            this.f15143h.z0();
        }
        this.f15159x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.A = colorStateList;
        TextView textView = this.f15160y;
        if (textView != null && colorStateList != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Typeface typeface) {
        if (typeface != this.B) {
            this.B = typeface;
            M(this.f15153r, typeface);
            M(this.f15160y, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        h();
        this.f15151p = charSequence;
        this.f15153r.setText(charSequence);
        int i10 = this.f15149n;
        if (i10 != 1) {
            this.f15150o = 1;
        }
        S(i10, this.f15150o, P(this.f15153r, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(CharSequence charSequence) {
        h();
        this.f15158w = charSequence;
        this.f15160y.setText(charSequence);
        int i10 = this.f15149n;
        if (i10 != 2) {
            this.f15150o = 2;
        }
        S(i10, this.f15150o, P(this.f15160y, charSequence));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(TextView textView, int i10) {
        if (this.f15144i == null && this.f15146k == null) {
            LinearLayout linearLayout = new LinearLayout(this.f15142g);
            this.f15144i = linearLayout;
            linearLayout.setOrientation(0);
            this.f15143h.addView(this.f15144i, -1, -2);
            this.f15146k = new FrameLayout(this.f15142g);
            this.f15144i.addView(this.f15146k, new LinearLayout.LayoutParams(0, -2, 1.0f));
            if (this.f15143h.getEditText() != null) {
                f();
            }
        }
        if (z(i10)) {
            this.f15146k.setVisibility(0);
            this.f15146k.addView(textView);
        } else {
            this.f15144i.addView(textView, new LinearLayout.LayoutParams(-2, -2));
        }
        this.f15144i.setVisibility(0);
        this.f15145j++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        if (g()) {
            EditText editText = this.f15143h.getEditText();
            boolean g10 = lh.c.g(this.f15142g);
            h0.F0(this.f15144i, v(g10, yg.d.F, h0.E(editText)), v(g10, yg.d.G, this.f15142g.getResources().getDimensionPixelSize(yg.d.E)), v(g10, yg.d.F, h0.D(editText)), 0);
        }
    }

    void h() {
        Animator animator = this.f15147l;
        if (animator != null) {
            animator.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return y(this.f15150o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15155t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence o() {
        return this.f15154s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence p() {
        return this.f15151p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        TextView textView = this.f15153r;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList r() {
        TextView textView = this.f15153r;
        if (textView != null) {
            return textView.getTextColors();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence s() {
        return this.f15158w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View t() {
        return this.f15160y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        TextView textView = this.f15160y;
        if (textView != null) {
            return textView.getCurrentTextColor();
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f15151p = null;
        h();
        if (this.f15149n == 1) {
            if (this.f15159x && !TextUtils.isEmpty(this.f15158w)) {
                this.f15150o = 2;
            } else {
                this.f15150o = 0;
            }
        }
        S(this.f15149n, this.f15150o, P(this.f15153r, ""));
    }

    void x() {
        h();
        int i10 = this.f15149n;
        if (i10 == 2) {
            this.f15150o = 0;
        }
        S(i10, this.f15150o, P(this.f15160y, ""));
    }

    boolean z(int i10) {
        return i10 == 0 || i10 == 1;
    }
}
