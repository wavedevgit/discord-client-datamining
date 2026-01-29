package com.google.android.material.textfield;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.text.Editable;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.SparseArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityManager;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.appcompat.widget.v0;
import androidx.core.view.h0;
import c2.c;
import com.google.android.material.internal.CheckableImageButton;
import com.google.android.material.textfield.TextInputLayout;
import java.util.Iterator;
import java.util.LinkedHashSet;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r extends LinearLayout {
    private CharSequence A;
    private final TextView B;
    private boolean C;
    private EditText D;
    private final AccessibilityManager E;
    private c.a F;
    private final TextWatcher G;
    private final TextInputLayout.f H;

    /* renamed from: d  reason: collision with root package name */
    final TextInputLayout f16513d;

    /* renamed from: e  reason: collision with root package name */
    private final FrameLayout f16514e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckableImageButton f16515i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f16516o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f16517p;

    /* renamed from: q  reason: collision with root package name */
    private View.OnLongClickListener f16518q;

    /* renamed from: r  reason: collision with root package name */
    private final CheckableImageButton f16519r;

    /* renamed from: s  reason: collision with root package name */
    private final d f16520s;

    /* renamed from: t  reason: collision with root package name */
    private int f16521t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashSet f16522u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16523v;

    /* renamed from: w  reason: collision with root package name */
    private PorterDuff.Mode f16524w;

    /* renamed from: x  reason: collision with root package name */
    private int f16525x;

    /* renamed from: y  reason: collision with root package name */
    private ImageView.ScaleType f16526y;

    /* renamed from: z  reason: collision with root package name */
    private View.OnLongClickListener f16527z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends com.google.android.material.internal.k {
        a() {
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            r.this.m().a(editable);
        }

        @Override // com.google.android.material.internal.k, android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            r.this.m().b(charSequence, i10, i11, i12);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements TextInputLayout.f {
        b() {
        }

        @Override // com.google.android.material.textfield.TextInputLayout.f
        public void a(TextInputLayout textInputLayout) {
            if (r.this.D == textInputLayout.getEditText()) {
                return;
            }
            if (r.this.D != null) {
                r.this.D.removeTextChangedListener(r.this.G);
                if (r.this.D.getOnFocusChangeListener() == r.this.m().e()) {
                    r.this.D.setOnFocusChangeListener(null);
                }
            }
            r.this.D = textInputLayout.getEditText();
            if (r.this.D != null) {
                r.this.D.addTextChangedListener(r.this.G);
            }
            r.this.m().n(r.this.D);
            r rVar = r.this;
            rVar.h0(rVar.m());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements View.OnAttachStateChangeListener {
        c() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            r.this.g();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            r.this.M();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final SparseArray f16531a = new SparseArray();

        /* renamed from: b  reason: collision with root package name */
        private final r f16532b;

        /* renamed from: c  reason: collision with root package name */
        private final int f16533c;

        /* renamed from: d  reason: collision with root package name */
        private final int f16534d;

        d(r rVar, v0 v0Var) {
            this.f16532b = rVar;
            this.f16533c = v0Var.n(yg.k.f54602h7, 0);
            this.f16534d = v0Var.n(yg.k.F7, 0);
        }

        private s b(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                return new p(this.f16532b);
                            }
                            throw new IllegalArgumentException("Invalid end icon mode: " + i10);
                        }
                        return new f(this.f16532b);
                    }
                    return new x(this.f16532b, this.f16534d);
                }
                return new v(this.f16532b);
            }
            return new g(this.f16532b);
        }

        s c(int i10) {
            s sVar = (s) this.f16531a.get(i10);
            if (sVar == null) {
                s b10 = b(i10);
                this.f16531a.append(i10, b10);
                return b10;
            }
            return sVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f16521t = 0;
        this.f16522u = new LinkedHashSet();
        this.G = new a();
        b bVar = new b();
        this.H = bVar;
        this.E = (AccessibilityManager) getContext().getSystemService("accessibility");
        this.f16513d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388613));
        FrameLayout frameLayout = new FrameLayout(getContext());
        this.f16514e = frameLayout;
        frameLayout.setVisibility(8);
        frameLayout.setLayoutParams(new LinearLayout.LayoutParams(-2, -1));
        LayoutInflater from = LayoutInflater.from(getContext());
        CheckableImageButton i10 = i(this, from, yg.f.N);
        this.f16515i = i10;
        CheckableImageButton i11 = i(frameLayout, from, yg.f.M);
        this.f16519r = i11;
        this.f16520s = new d(this, v0Var);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.B = appCompatTextView;
        C(v0Var);
        B(v0Var);
        D(v0Var);
        frameLayout.addView(i11);
        addView(appCompatTextView);
        addView(frameLayout);
        addView(i10);
        textInputLayout.i(bVar);
        addOnAttachStateChangeListener(new c());
    }

    private void B(v0 v0Var) {
        if (!v0Var.s(yg.k.G7)) {
            if (v0Var.s(yg.k.f54642l7)) {
                this.f16523v = lh.c.b(getContext(), v0Var, yg.k.f54642l7);
            }
            if (v0Var.s(yg.k.f54652m7)) {
                this.f16524w = com.google.android.material.internal.o.i(v0Var.k(yg.k.f54652m7, -1), null);
            }
        }
        if (v0Var.s(yg.k.f54622j7)) {
            U(v0Var.k(yg.k.f54622j7, 0));
            if (v0Var.s(yg.k.f54592g7)) {
                Q(v0Var.p(yg.k.f54592g7));
            }
            O(v0Var.a(yg.k.f54582f7, true));
        } else if (v0Var.s(yg.k.G7)) {
            if (v0Var.s(yg.k.H7)) {
                this.f16523v = lh.c.b(getContext(), v0Var, yg.k.H7);
            }
            if (v0Var.s(yg.k.I7)) {
                this.f16524w = com.google.android.material.internal.o.i(v0Var.k(yg.k.I7, -1), null);
            }
            U(v0Var.a(yg.k.G7, false) ? 1 : 0);
            Q(v0Var.p(yg.k.E7));
        }
        T(v0Var.f(yg.k.f54612i7, getResources().getDimensionPixelSize(yg.d.Y)));
        if (v0Var.s(yg.k.f54632k7)) {
            X(t.b(v0Var.k(yg.k.f54632k7, -1)));
        }
    }

    private void C(v0 v0Var) {
        if (v0Var.s(yg.k.f54697r7)) {
            this.f16516o = lh.c.b(getContext(), v0Var, yg.k.f54697r7);
        }
        if (v0Var.s(yg.k.f54706s7)) {
            this.f16517p = com.google.android.material.internal.o.i(v0Var.k(yg.k.f54706s7, -1), null);
        }
        if (v0Var.s(yg.k.f54688q7)) {
            c0(v0Var.g(yg.k.f54688q7));
        }
        this.f16515i.setContentDescription(getResources().getText(yg.i.f54480f));
        h0.x0(this.f16515i, 2);
        this.f16515i.setClickable(false);
        this.f16515i.setPressable(false);
        this.f16515i.setFocusable(false);
    }

    private void D(v0 v0Var) {
        this.B.setVisibility(8);
        this.B.setId(yg.f.T);
        this.B.setLayoutParams(new LinearLayout.LayoutParams(-2, -2, 80.0f));
        h0.p0(this.B, 1);
        q0(v0Var.n(yg.k.X7, 0));
        if (v0Var.s(yg.k.Y7)) {
            r0(v0Var.c(yg.k.Y7));
        }
        p0(v0Var.p(yg.k.W7));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void M() {
        AccessibilityManager accessibilityManager;
        c.a aVar = this.F;
        if (aVar != null && (accessibilityManager = this.E) != null) {
            c2.c.b(accessibilityManager, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g() {
        if (this.F != null && this.E != null && h0.R(this)) {
            c2.c.a(this.E, this.F);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h0(s sVar) {
        if (this.D != null) {
            if (sVar.e() != null) {
                this.D.setOnFocusChangeListener(sVar.e());
            }
            if (sVar.g() != null) {
                this.f16519r.setOnFocusChangeListener(sVar.g());
            }
        }
    }

    private CheckableImageButton i(ViewGroup viewGroup, LayoutInflater layoutInflater, int i10) {
        CheckableImageButton checkableImageButton = (CheckableImageButton) layoutInflater.inflate(yg.h.f54456e, viewGroup, false);
        checkableImageButton.setId(i10);
        t.e(checkableImageButton);
        if (lh.c.g(getContext())) {
            androidx.core.view.m.d((ViewGroup.MarginLayoutParams) checkableImageButton.getLayoutParams(), 0);
        }
        return checkableImageButton;
    }

    private void j(int i10) {
        Iterator it = this.f16522u.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    private void s0(s sVar) {
        sVar.s();
        this.F = sVar.h();
        g();
    }

    private int t(s sVar) {
        int i10 = this.f16520s.f16533c;
        if (i10 == 0) {
            return sVar.d();
        }
        return i10;
    }

    private void t0(s sVar) {
        M();
        this.F = null;
        sVar.u();
    }

    private void u0(boolean z10) {
        if (z10 && n() != null) {
            Drawable mutate = s1.a.r(n()).mutate();
            s1.a.n(mutate, this.f16513d.getErrorCurrentTextColors());
            this.f16519r.setImageDrawable(mutate);
            return;
        }
        t.a(this.f16513d, this.f16519r, this.f16523v, this.f16524w);
    }

    private void v0() {
        int i10;
        boolean z10;
        FrameLayout frameLayout = this.f16514e;
        int i11 = 8;
        if (this.f16519r.getVisibility() == 0 && !G()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        frameLayout.setVisibility(i10);
        if (this.A != null && !this.C) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (F() || G() || !z10) {
            i11 = 0;
        }
        setVisibility(i11);
    }

    private void w0() {
        boolean z10;
        int i10 = 0;
        if (s() != null && this.f16513d.N() && this.f16513d.c0()) {
            z10 = true;
        } else {
            z10 = false;
        }
        CheckableImageButton checkableImageButton = this.f16515i;
        if (!z10) {
            i10 = 8;
        }
        checkableImageButton.setVisibility(i10);
        v0();
        x0();
        if (!A()) {
            this.f16513d.n0();
        }
    }

    private void y0() {
        int i10;
        int visibility = this.B.getVisibility();
        boolean z10 = false;
        if (this.A != null && !this.C) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (visibility != i10) {
            s m10 = m();
            if (i10 == 0) {
                z10 = true;
            }
            m10.q(z10);
        }
        v0();
        this.B.setVisibility(i10);
        this.f16513d.n0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f16521t != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        if (A() && this.f16519r.isChecked()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        if (this.f16514e.getVisibility() == 0 && this.f16519r.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        if (this.f16515i.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(boolean z10) {
        this.C = z10;
        y0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I() {
        w0();
        K();
        J();
        if (m().t()) {
            u0(this.f16513d.c0());
        }
    }

    void J() {
        t.d(this.f16513d, this.f16519r, this.f16523v);
    }

    void K() {
        t.d(this.f16513d, this.f16515i, this.f16516o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        boolean z11;
        boolean isActivated;
        boolean isChecked;
        s m10 = m();
        boolean z12 = true;
        if (m10.l() && (isChecked = this.f16519r.isChecked()) != m10.m()) {
            this.f16519r.setChecked(!isChecked);
            z11 = true;
        } else {
            z11 = false;
        }
        if (m10.j() && (isActivated = this.f16519r.isActivated()) != m10.k()) {
            N(!isActivated);
        } else {
            z12 = z11;
        }
        if (!z10 && !z12) {
            return;
        }
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(boolean z10) {
        this.f16519r.setActivated(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(boolean z10) {
        this.f16519r.setCheckable(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(int i10) {
        CharSequence charSequence;
        if (i10 != 0) {
            charSequence = getResources().getText(i10);
        } else {
            charSequence = null;
        }
        Q(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(CharSequence charSequence) {
        if (l() != charSequence) {
            this.f16519r.setContentDescription(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        S(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(Drawable drawable) {
        this.f16519r.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f16513d, this.f16519r, this.f16523v, this.f16524w);
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f16525x) {
                this.f16525x = i10;
                t.g(this.f16519r, i10);
                t.g(this.f16515i, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("endIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(int i10) {
        boolean z10;
        if (this.f16521t == i10) {
            return;
        }
        t0(m());
        int i11 = this.f16521t;
        this.f16521t = i10;
        j(i11);
        if (i10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        a0(z10);
        s m10 = m();
        R(t(m10));
        P(m10.c());
        O(m10.l());
        if (m10.i(this.f16513d.getBoxBackgroundMode())) {
            s0(m10);
            V(m10.f());
            EditText editText = this.D;
            if (editText != null) {
                m10.n(editText);
                h0(m10);
            }
            t.a(this.f16513d, this.f16519r, this.f16523v, this.f16524w);
            L(true);
            return;
        }
        throw new IllegalStateException("The current box background mode " + this.f16513d.getBoxBackgroundMode() + " is not supported by the end icon mode " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(View.OnClickListener onClickListener) {
        t.h(this.f16519r, onClickListener, this.f16527z);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(View.OnLongClickListener onLongClickListener) {
        this.f16527z = onLongClickListener;
        t.i(this.f16519r, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ImageView.ScaleType scaleType) {
        this.f16526y = scaleType;
        t.j(this.f16519r, scaleType);
        t.j(this.f16515i, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(ColorStateList colorStateList) {
        if (this.f16523v != colorStateList) {
            this.f16523v = colorStateList;
            t.a(this.f16513d, this.f16519r, colorStateList, this.f16524w);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(PorterDuff.Mode mode) {
        if (this.f16524w != mode) {
            this.f16524w = mode;
            t.a(this.f16513d, this.f16519r, this.f16523v, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(boolean z10) {
        int i10;
        if (F() != z10) {
            CheckableImageButton checkableImageButton = this.f16519r;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            checkableImageButton.setVisibility(i10);
            v0();
            x0();
            this.f16513d.n0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        c0(drawable);
        K();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c0(Drawable drawable) {
        this.f16515i.setImageDrawable(drawable);
        w0();
        t.a(this.f16513d, this.f16515i, this.f16516o, this.f16517p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(View.OnClickListener onClickListener) {
        t.h(this.f16515i, onClickListener, this.f16518q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0(View.OnLongClickListener onLongClickListener) {
        this.f16518q = onLongClickListener;
        t.i(this.f16515i, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0(ColorStateList colorStateList) {
        if (this.f16516o != colorStateList) {
            this.f16516o = colorStateList;
            t.a(this.f16513d, this.f16515i, colorStateList, this.f16517p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0(PorterDuff.Mode mode) {
        if (this.f16517p != mode) {
            this.f16517p = mode;
            t.a(this.f16513d, this.f16515i, this.f16516o, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        this.f16519r.performClick();
        this.f16519r.jumpDrawablesToCurrentState();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i0(int i10) {
        CharSequence charSequence;
        if (i10 != 0) {
            charSequence = getResources().getText(i10);
        } else {
            charSequence = null;
        }
        j0(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j0(CharSequence charSequence) {
        this.f16519r.setContentDescription(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton k() {
        if (G()) {
            return this.f16515i;
        }
        if (A() && F()) {
            return this.f16519r;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k0(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        l0(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence l() {
        return this.f16519r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l0(Drawable drawable) {
        this.f16519r.setImageDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s m() {
        return this.f16520s.c(this.f16521t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m0(boolean z10) {
        if (z10 && this.f16521t != 1) {
            U(1);
        } else if (!z10) {
            U(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable n() {
        return this.f16519r.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n0(ColorStateList colorStateList) {
        this.f16523v = colorStateList;
        t.a(this.f16513d, this.f16519r, colorStateList, this.f16524w);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f16525x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0(PorterDuff.Mode mode) {
        this.f16524w = mode;
        t.a(this.f16513d, this.f16519r, this.f16523v, mode);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f16521t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p0(CharSequence charSequence) {
        CharSequence charSequence2;
        if (TextUtils.isEmpty(charSequence)) {
            charSequence2 = null;
        } else {
            charSequence2 = charSequence;
        }
        this.A = charSequence2;
        this.B.setText(charSequence);
        y0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageView.ScaleType q() {
        return this.f16526y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0(int i10) {
        androidx.core.widget.j.s(this.B, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton r() {
        return this.f16519r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r0(ColorStateList colorStateList) {
        this.B.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable s() {
        return this.f16515i.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence u() {
        return this.f16519r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable v() {
        return this.f16519r.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence w() {
        return this.A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList x() {
        return this.B.getTextColors();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x0() {
        int i10;
        if (this.f16513d.f16441o == null) {
            return;
        }
        if (!F() && !G()) {
            i10 = h0.D(this.f16513d.f16441o);
        } else {
            i10 = 0;
        }
        h0.F0(this.B, getContext().getResources().getDimensionPixelSize(yg.d.H), this.f16513d.f16441o.getPaddingTop(), i10, this.f16513d.f16441o.getPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y() {
        int measuredWidth;
        if (!F() && !G()) {
            measuredWidth = 0;
        } else {
            measuredWidth = this.f16519r.getMeasuredWidth() + androidx.core.view.m.b((ViewGroup.MarginLayoutParams) this.f16519r.getLayoutParams());
        }
        return h0.D(this) + h0.D(this.B) + measuredWidth;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView z() {
        return this.B;
    }
}
