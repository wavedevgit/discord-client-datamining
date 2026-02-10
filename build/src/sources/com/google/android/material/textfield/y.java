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
import com.google.android.material.internal.CheckableImageButton;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final TextInputLayout f16435d;

    /* renamed from: e  reason: collision with root package name */
    private final TextView f16436e;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f16437i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckableImageButton f16438o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16439p;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f16440q;

    /* renamed from: r  reason: collision with root package name */
    private int f16441r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView.ScaleType f16442s;

    /* renamed from: t  reason: collision with root package name */
    private View.OnLongClickListener f16443t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f16444u;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f16435d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388611));
        CheckableImageButton checkableImageButton = (CheckableImageButton) LayoutInflater.from(getContext()).inflate(bh.h.f6879g, (ViewGroup) this, false);
        this.f16438o = checkableImageButton;
        t.e(checkableImageButton);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.f16436e = appCompatTextView;
        j(v0Var);
        i(v0Var);
        addView(checkableImageButton);
        addView(appCompatTextView);
    }

    private void C() {
        int i10;
        int i11 = 8;
        if (this.f16437i != null && !this.f16444u) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (this.f16438o.getVisibility() == 0 || i10 == 0) {
            i11 = 0;
        }
        setVisibility(i11);
        this.f16436e.setVisibility(i10);
        this.f16435d.q0();
    }

    private void i(v0 v0Var) {
        this.f16436e.setVisibility(8);
        this.f16436e.setId(bh.f.f6840b0);
        this.f16436e.setLayoutParams(new LinearLayout.LayoutParams(-2, -2));
        this.f16436e.setAccessibilityLiveRegion(1);
        o(v0Var.n(bh.l.Y7, 0));
        if (v0Var.s(bh.l.Z7)) {
            p(v0Var.c(bh.l.Z7));
        }
        n(v0Var.p(bh.l.X7));
    }

    private void j(v0 v0Var) {
        if (qh.c.k(getContext())) {
            ((ViewGroup.MarginLayoutParams) this.f16438o.getLayoutParams()).setMarginEnd(0);
        }
        u(null);
        v(null);
        if (v0Var.s(bh.l.f7011f8)) {
            this.f16439p = qh.c.b(getContext(), v0Var, bh.l.f7011f8);
        }
        if (v0Var.s(bh.l.f7021g8)) {
            this.f16440q = com.google.android.material.internal.p.i(v0Var.k(bh.l.f7021g8, -1), null);
        }
        if (v0Var.s(bh.l.f6981c8)) {
            s(v0Var.g(bh.l.f6981c8));
            if (v0Var.s(bh.l.f6971b8)) {
                r(v0Var.p(bh.l.f6971b8));
            }
            q(v0Var.a(bh.l.f6961a8, true));
        }
        t(v0Var.f(bh.l.f6991d8, getResources().getDimensionPixelSize(bh.d.f6805p0)));
        if (v0Var.s(bh.l.f7001e8)) {
            w(t.b(v0Var.k(bh.l.f7001e8, -1)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        if (this.f16436e.getVisibility() == 0) {
            accessibilityNodeInfoCompat.K0(this.f16436e);
            accessibilityNodeInfoCompat.d1(this.f16436e);
            return;
        }
        accessibilityNodeInfoCompat.d1(this.f16438o);
    }

    void B() {
        int paddingStart;
        EditText editText = this.f16435d.f16302p;
        if (editText == null) {
            return;
        }
        if (k()) {
            paddingStart = 0;
        } else {
            paddingStart = editText.getPaddingStart();
        }
        this.f16436e.setPaddingRelative(paddingStart, editText.getCompoundPaddingTop(), getContext().getResources().getDimensionPixelSize(bh.d.V), editText.getCompoundPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence a() {
        return this.f16437i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList b() {
        return this.f16436e.getTextColors();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        int i10;
        if (k()) {
            i10 = this.f16438o.getMeasuredWidth() + ((ViewGroup.MarginLayoutParams) this.f16438o.getLayoutParams()).getMarginEnd();
        } else {
            i10 = 0;
        }
        return getPaddingStart() + this.f16436e.getPaddingStart() + i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView d() {
        return this.f16436e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence e() {
        return this.f16438o.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable f() {
        return this.f16438o.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f16441r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageView.ScaleType h() {
        return this.f16442s;
    }

    boolean k() {
        if (this.f16438o.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(boolean z10) {
        this.f16444u = z10;
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        t.d(this.f16435d, this.f16438o, this.f16439p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(CharSequence charSequence) {
        CharSequence charSequence2;
        if (TextUtils.isEmpty(charSequence)) {
            charSequence2 = null;
        } else {
            charSequence2 = charSequence;
        }
        this.f16437i = charSequence2;
        this.f16436e.setText(charSequence);
        C();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10) {
        androidx.core.widget.j.q(this.f16436e, i10);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        B();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(ColorStateList colorStateList) {
        this.f16436e.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        this.f16438o.setCheckable(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(CharSequence charSequence) {
        if (e() != charSequence) {
            this.f16438o.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(Drawable drawable) {
        this.f16438o.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f16435d, this.f16438o, this.f16439p, this.f16440q);
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
            if (i10 != this.f16441r) {
                this.f16441r = i10;
                t.g(this.f16438o, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("startIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(View.OnClickListener onClickListener) {
        t.h(this.f16438o, onClickListener, this.f16443t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(View.OnLongClickListener onLongClickListener) {
        this.f16443t = onLongClickListener;
        t.i(this.f16438o, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ImageView.ScaleType scaleType) {
        this.f16442s = scaleType;
        t.j(this.f16438o, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ColorStateList colorStateList) {
        if (this.f16439p != colorStateList) {
            this.f16439p = colorStateList;
            t.a(this.f16435d, this.f16438o, colorStateList, this.f16440q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(PorterDuff.Mode mode) {
        if (this.f16440q != mode) {
            this.f16440q = mode;
            t.a(this.f16435d, this.f16438o, this.f16439p, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(boolean z10) {
        int i10;
        if (k() != z10) {
            CheckableImageButton checkableImageButton = this.f16438o;
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
