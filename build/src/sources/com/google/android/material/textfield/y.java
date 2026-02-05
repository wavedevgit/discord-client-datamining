package com.google.android.material.textfield;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.appcompat.widget.v0;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import com.google.android.material.internal.CheckableImageButton;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final TextInputLayout f15566d;

    /* renamed from: e  reason: collision with root package name */
    private final TextView f15567e;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f15568i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckableImageButton f15569o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15570p;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f15571q;

    /* renamed from: r  reason: collision with root package name */
    private int f15572r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView.ScaleType f15573s;

    /* renamed from: t  reason: collision with root package name */
    private View.OnLongClickListener f15574t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15575u;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f15566d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388611));
        CheckableImageButton checkableImageButton = (CheckableImageButton) LayoutInflater.from(getContext()).inflate(zg.h.f55661f, (ViewGroup) this, false);
        this.f15569o = checkableImageButton;
        t.e(checkableImageButton);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.f15567e = appCompatTextView;
        j(v0Var);
        i(v0Var);
        addView(checkableImageButton);
        addView(appCompatTextView);
    }

    private void C() {
        int i10;
        int i11 = 8;
        if (this.f15568i != null && !this.f15575u) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (this.f15569o.getVisibility() == 0 || i10 == 0) {
            i11 = 0;
        }
        setVisibility(i11);
        this.f15567e.setVisibility(i10);
        this.f15566d.n0();
    }

    private void i(v0 v0Var) {
        this.f15567e.setVisibility(8);
        this.f15567e.setId(zg.f.S);
        this.f15567e.setLayoutParams(new LinearLayout.LayoutParams(-2, -2));
        h0.p0(this.f15567e, 1);
        o(v0Var.n(zg.k.N7, 0));
        if (v0Var.s(zg.k.O7)) {
            p(v0Var.c(zg.k.O7));
        }
        n(v0Var.p(zg.k.M7));
    }

    private void j(v0 v0Var) {
        if (mh.c.g(getContext())) {
            androidx.core.view.m.c((ViewGroup.MarginLayoutParams) this.f15569o.getLayoutParams(), 0);
        }
        u(null);
        v(null);
        if (v0Var.s(zg.k.U7)) {
            this.f15570p = mh.c.b(getContext(), v0Var, zg.k.U7);
        }
        if (v0Var.s(zg.k.V7)) {
            this.f15571q = com.google.android.material.internal.o.i(v0Var.k(zg.k.V7, -1), null);
        }
        if (v0Var.s(zg.k.R7)) {
            s(v0Var.g(zg.k.R7));
            if (v0Var.s(zg.k.Q7)) {
                r(v0Var.p(zg.k.Q7));
            }
            q(v0Var.a(zg.k.P7, true));
        }
        t(v0Var.f(zg.k.S7, getResources().getDimensionPixelSize(zg.d.Y)));
        if (v0Var.s(zg.k.T7)) {
            w(t.b(v0Var.k(zg.k.T7, -1)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (this.f15567e.getVisibility() == 0) {
            accessibilityNodeInfoCompat.K0(this.f15567e);
            accessibilityNodeInfoCompat.d1(this.f15567e);
            return;
        }
        accessibilityNodeInfoCompat.d1(this.f15569o);
    }

    void B() {
        int E;
        EditText editText = this.f15566d.f15432o;
        if (editText == null) {
            return;
        }
        if (k()) {
            E = 0;
        } else {
            E = h0.E(editText);
        }
        h0.F0(this.f15567e, E, editText.getCompoundPaddingTop(), getContext().getResources().getDimensionPixelSize(zg.d.H), editText.getCompoundPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence a() {
        return this.f15568i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList b() {
        return this.f15567e.getTextColors();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        int i10;
        if (k()) {
            i10 = this.f15569o.getMeasuredWidth() + androidx.core.view.m.a((ViewGroup.MarginLayoutParams) this.f15569o.getLayoutParams());
        } else {
            i10 = 0;
        }
        return h0.E(this) + h0.E(this.f15567e) + i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView d() {
        return this.f15567e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence e() {
        return this.f15569o.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable f() {
        return this.f15569o.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f15572r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageView.ScaleType h() {
        return this.f15573s;
    }

    boolean k() {
        if (this.f15569o.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(boolean z10) {
        this.f15575u = z10;
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        t.d(this.f15566d, this.f15569o, this.f15570p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(CharSequence charSequence) {
        CharSequence charSequence2;
        if (TextUtils.isEmpty(charSequence)) {
            charSequence2 = null;
        } else {
            charSequence2 = charSequence;
        }
        this.f15568i = charSequence2;
        this.f15567e.setText(charSequence);
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10) {
        androidx.core.widget.j.s(this.f15567e, i10);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        B();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(ColorStateList colorStateList) {
        this.f15567e.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        this.f15569o.setCheckable(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(CharSequence charSequence) {
        if (e() != charSequence) {
            this.f15569o.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(Drawable drawable) {
        this.f15569o.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f15566d, this.f15569o, this.f15570p, this.f15571q);
            z(true);
            m();
            return;
        }
        z(false);
        u(null);
        v(null);
        r(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f15572r) {
                this.f15572r = i10;
                t.g(this.f15569o, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("startIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(View.OnClickListener onClickListener) {
        t.h(this.f15569o, onClickListener, this.f15574t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(View.OnLongClickListener onLongClickListener) {
        this.f15574t = onLongClickListener;
        t.i(this.f15569o, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ImageView.ScaleType scaleType) {
        this.f15573s = scaleType;
        t.j(this.f15569o, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList) {
        if (this.f15570p != colorStateList) {
            this.f15570p = colorStateList;
            t.a(this.f15566d, this.f15569o, colorStateList, this.f15571q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(PorterDuff.Mode mode) {
        if (this.f15571q != mode) {
            this.f15571q = mode;
            t.a(this.f15566d, this.f15569o, this.f15570p, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(boolean z10) {
        int i10;
        if (k() != z10) {
            CheckableImageButton checkableImageButton = this.f15569o;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            checkableImageButton.setVisibility(i10);
            B();
            C();
        }
    }
}
