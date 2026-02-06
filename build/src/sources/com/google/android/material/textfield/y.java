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
    private final TextInputLayout f15546d;

    /* renamed from: e  reason: collision with root package name */
    private final TextView f15547e;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f15548i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckableImageButton f15549o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15550p;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f15551q;

    /* renamed from: r  reason: collision with root package name */
    private int f15552r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView.ScaleType f15553s;

    /* renamed from: t  reason: collision with root package name */
    private View.OnLongClickListener f15554t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15555u;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f15546d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388611));
        CheckableImageButton checkableImageButton = (CheckableImageButton) LayoutInflater.from(getContext()).inflate(ah.h.f756f, (ViewGroup) this, false);
        this.f15549o = checkableImageButton;
        t.e(checkableImageButton);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.f15547e = appCompatTextView;
        j(v0Var);
        i(v0Var);
        addView(checkableImageButton);
        addView(appCompatTextView);
    }

    private void C() {
        int i10;
        int i11 = 8;
        if (this.f15548i != null && !this.f15555u) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (this.f15549o.getVisibility() == 0 || i10 == 0) {
            i11 = 0;
        }
        setVisibility(i11);
        this.f15547e.setVisibility(i10);
        this.f15546d.n0();
    }

    private void i(v0 v0Var) {
        this.f15547e.setVisibility(8);
        this.f15547e.setId(ah.f.S);
        this.f15547e.setLayoutParams(new LinearLayout.LayoutParams(-2, -2));
        h0.p0(this.f15547e, 1);
        o(v0Var.n(ah.k.N7, 0));
        if (v0Var.s(ah.k.O7)) {
            p(v0Var.c(ah.k.O7));
        }
        n(v0Var.p(ah.k.M7));
    }

    private void j(v0 v0Var) {
        if (nh.c.g(getContext())) {
            androidx.core.view.m.c((ViewGroup.MarginLayoutParams) this.f15549o.getLayoutParams(), 0);
        }
        u(null);
        v(null);
        if (v0Var.s(ah.k.U7)) {
            this.f15550p = nh.c.b(getContext(), v0Var, ah.k.U7);
        }
        if (v0Var.s(ah.k.V7)) {
            this.f15551q = com.google.android.material.internal.o.i(v0Var.k(ah.k.V7, -1), null);
        }
        if (v0Var.s(ah.k.R7)) {
            s(v0Var.g(ah.k.R7));
            if (v0Var.s(ah.k.Q7)) {
                r(v0Var.p(ah.k.Q7));
            }
            q(v0Var.a(ah.k.P7, true));
        }
        t(v0Var.f(ah.k.S7, getResources().getDimensionPixelSize(ah.d.Y)));
        if (v0Var.s(ah.k.T7)) {
            w(t.b(v0Var.k(ah.k.T7, -1)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (this.f15547e.getVisibility() == 0) {
            accessibilityNodeInfoCompat.K0(this.f15547e);
            accessibilityNodeInfoCompat.d1(this.f15547e);
            return;
        }
        accessibilityNodeInfoCompat.d1(this.f15549o);
    }

    void B() {
        int E;
        EditText editText = this.f15546d.f15412o;
        if (editText == null) {
            return;
        }
        if (k()) {
            E = 0;
        } else {
            E = h0.E(editText);
        }
        h0.F0(this.f15547e, E, editText.getCompoundPaddingTop(), getContext().getResources().getDimensionPixelSize(ah.d.H), editText.getCompoundPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence a() {
        return this.f15548i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList b() {
        return this.f15547e.getTextColors();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        int i10;
        if (k()) {
            i10 = this.f15549o.getMeasuredWidth() + androidx.core.view.m.a((ViewGroup.MarginLayoutParams) this.f15549o.getLayoutParams());
        } else {
            i10 = 0;
        }
        return h0.E(this) + h0.E(this.f15547e) + i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView d() {
        return this.f15547e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence e() {
        return this.f15549o.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable f() {
        return this.f15549o.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f15552r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageView.ScaleType h() {
        return this.f15553s;
    }

    boolean k() {
        if (this.f15549o.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(boolean z10) {
        this.f15555u = z10;
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        t.d(this.f15546d, this.f15549o, this.f15550p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(CharSequence charSequence) {
        CharSequence charSequence2;
        if (TextUtils.isEmpty(charSequence)) {
            charSequence2 = null;
        } else {
            charSequence2 = charSequence;
        }
        this.f15548i = charSequence2;
        this.f15547e.setText(charSequence);
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10) {
        androidx.core.widget.j.s(this.f15547e, i10);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        B();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(ColorStateList colorStateList) {
        this.f15547e.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        this.f15549o.setCheckable(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(CharSequence charSequence) {
        if (e() != charSequence) {
            this.f15549o.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(Drawable drawable) {
        this.f15549o.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f15546d, this.f15549o, this.f15550p, this.f15551q);
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
            if (i10 != this.f15552r) {
                this.f15552r = i10;
                t.g(this.f15549o, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("startIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(View.OnClickListener onClickListener) {
        t.h(this.f15549o, onClickListener, this.f15554t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(View.OnLongClickListener onLongClickListener) {
        this.f15554t = onLongClickListener;
        t.i(this.f15549o, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ImageView.ScaleType scaleType) {
        this.f15553s = scaleType;
        t.j(this.f15549o, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList) {
        if (this.f15550p != colorStateList) {
            this.f15550p = colorStateList;
            t.a(this.f15546d, this.f15549o, colorStateList, this.f15551q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(PorterDuff.Mode mode) {
        if (this.f15551q != mode) {
            this.f15551q = mode;
            t.a(this.f15546d, this.f15549o, this.f15550p, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(boolean z10) {
        int i10;
        if (k() != z10) {
            CheckableImageButton checkableImageButton = this.f15549o;
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
