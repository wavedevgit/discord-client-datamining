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
    private final TextInputLayout f16575d;

    /* renamed from: e  reason: collision with root package name */
    private final TextView f16576e;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f16577i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckableImageButton f16578o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16579p;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f16580q;

    /* renamed from: r  reason: collision with root package name */
    private int f16581r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView.ScaleType f16582s;

    /* renamed from: t  reason: collision with root package name */
    private View.OnLongClickListener f16583t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f16584u;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f16575d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388611));
        CheckableImageButton checkableImageButton = (CheckableImageButton) LayoutInflater.from(getContext()).inflate(yg.h.f54457f, (ViewGroup) this, false);
        this.f16578o = checkableImageButton;
        t.e(checkableImageButton);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.f16576e = appCompatTextView;
        j(v0Var);
        i(v0Var);
        addView(checkableImageButton);
        addView(appCompatTextView);
    }

    private void C() {
        int i10;
        int i11 = 8;
        if (this.f16577i != null && !this.f16584u) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (this.f16578o.getVisibility() == 0 || i10 == 0) {
            i11 = 0;
        }
        setVisibility(i11);
        this.f16576e.setVisibility(i10);
        this.f16575d.n0();
    }

    private void i(v0 v0Var) {
        this.f16576e.setVisibility(8);
        this.f16576e.setId(yg.f.S);
        this.f16576e.setLayoutParams(new LinearLayout.LayoutParams(-2, -2));
        h0.p0(this.f16576e, 1);
        o(v0Var.n(yg.k.N7, 0));
        if (v0Var.s(yg.k.O7)) {
            p(v0Var.c(yg.k.O7));
        }
        n(v0Var.p(yg.k.M7));
    }

    private void j(v0 v0Var) {
        if (lh.c.g(getContext())) {
            androidx.core.view.m.c((ViewGroup.MarginLayoutParams) this.f16578o.getLayoutParams(), 0);
        }
        u(null);
        v(null);
        if (v0Var.s(yg.k.U7)) {
            this.f16579p = lh.c.b(getContext(), v0Var, yg.k.U7);
        }
        if (v0Var.s(yg.k.V7)) {
            this.f16580q = com.google.android.material.internal.o.i(v0Var.k(yg.k.V7, -1), null);
        }
        if (v0Var.s(yg.k.R7)) {
            s(v0Var.g(yg.k.R7));
            if (v0Var.s(yg.k.Q7)) {
                r(v0Var.p(yg.k.Q7));
            }
            q(v0Var.a(yg.k.P7, true));
        }
        t(v0Var.f(yg.k.S7, getResources().getDimensionPixelSize(yg.d.Y)));
        if (v0Var.s(yg.k.T7)) {
            w(t.b(v0Var.k(yg.k.T7, -1)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (this.f16576e.getVisibility() == 0) {
            accessibilityNodeInfoCompat.K0(this.f16576e);
            accessibilityNodeInfoCompat.d1(this.f16576e);
            return;
        }
        accessibilityNodeInfoCompat.d1(this.f16578o);
    }

    void B() {
        int E;
        EditText editText = this.f16575d.f16441o;
        if (editText == null) {
            return;
        }
        if (k()) {
            E = 0;
        } else {
            E = h0.E(editText);
        }
        h0.F0(this.f16576e, E, editText.getCompoundPaddingTop(), getContext().getResources().getDimensionPixelSize(yg.d.H), editText.getCompoundPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence a() {
        return this.f16577i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList b() {
        return this.f16576e.getTextColors();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        int i10;
        if (k()) {
            i10 = this.f16578o.getMeasuredWidth() + androidx.core.view.m.a((ViewGroup.MarginLayoutParams) this.f16578o.getLayoutParams());
        } else {
            i10 = 0;
        }
        return h0.E(this) + h0.E(this.f16576e) + i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView d() {
        return this.f16576e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence e() {
        return this.f16578o.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable f() {
        return this.f16578o.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f16581r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageView.ScaleType h() {
        return this.f16582s;
    }

    boolean k() {
        if (this.f16578o.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(boolean z10) {
        this.f16584u = z10;
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        t.d(this.f16575d, this.f16578o, this.f16579p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(CharSequence charSequence) {
        CharSequence charSequence2;
        if (TextUtils.isEmpty(charSequence)) {
            charSequence2 = null;
        } else {
            charSequence2 = charSequence;
        }
        this.f16577i = charSequence2;
        this.f16576e.setText(charSequence);
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10) {
        androidx.core.widget.j.s(this.f16576e, i10);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        B();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(ColorStateList colorStateList) {
        this.f16576e.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        this.f16578o.setCheckable(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(CharSequence charSequence) {
        if (e() != charSequence) {
            this.f16578o.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(Drawable drawable) {
        this.f16578o.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f16575d, this.f16578o, this.f16579p, this.f16580q);
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
            if (i10 != this.f16581r) {
                this.f16581r = i10;
                t.g(this.f16578o, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("startIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(View.OnClickListener onClickListener) {
        t.h(this.f16578o, onClickListener, this.f16583t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(View.OnLongClickListener onLongClickListener) {
        this.f16583t = onLongClickListener;
        t.i(this.f16578o, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ImageView.ScaleType scaleType) {
        this.f16582s = scaleType;
        t.j(this.f16578o, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList) {
        if (this.f16579p != colorStateList) {
            this.f16579p = colorStateList;
            t.a(this.f16575d, this.f16578o, colorStateList, this.f16580q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(PorterDuff.Mode mode) {
        if (this.f16580q != mode) {
            this.f16580q = mode;
            t.a(this.f16575d, this.f16578o, this.f16579p, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(boolean z10) {
        int i10;
        if (k() != z10) {
            CheckableImageButton checkableImageButton = this.f16578o;
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
