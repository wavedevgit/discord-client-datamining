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
    final TextInputLayout f15624d;

    /* renamed from: e  reason: collision with root package name */
    private final FrameLayout f15625e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckableImageButton f15626i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15627o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f15628p;

    /* renamed from: q  reason: collision with root package name */
    private View.OnLongClickListener f15629q;

    /* renamed from: r  reason: collision with root package name */
    private final CheckableImageButton f15630r;

    /* renamed from: s  reason: collision with root package name */
    private final d f15631s;

    /* renamed from: t  reason: collision with root package name */
    private int f15632t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashSet f15633u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f15634v;

    /* renamed from: w  reason: collision with root package name */
    private PorterDuff.Mode f15635w;

    /* renamed from: x  reason: collision with root package name */
    private int f15636x;

    /* renamed from: y  reason: collision with root package name */
    private ImageView.ScaleType f15637y;

    /* renamed from: z  reason: collision with root package name */
    private View.OnLongClickListener f15638z;

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
        private final SparseArray f15642a = new SparseArray();

        /* renamed from: b  reason: collision with root package name */
        private final r f15643b;

        /* renamed from: c  reason: collision with root package name */
        private final int f15644c;

        /* renamed from: d  reason: collision with root package name */
        private final int f15645d;

        d(r rVar, v0 v0Var) {
            this.f15643b = rVar;
            this.f15644c = v0Var.n(bh.k.f6889h7, 0);
            this.f15645d = v0Var.n(bh.k.F7, 0);
        }

        private s b(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                return new p(this.f15643b);
                            }
                            throw new IllegalArgumentException("Invalid end icon mode: " + i10);
                        }
                        return new f(this.f15643b);
                    }
                    return new x(this.f15643b, this.f15645d);
                }
                return new v(this.f15643b);
            }
            return new g(this.f15643b);
        }

        s c(int i10) {
            s sVar = (s) this.f15642a.get(i10);
            if (sVar == null) {
                s b10 = b(i10);
                this.f15642a.append(i10, b10);
                return b10;
            }
            return sVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f15632t = 0;
        this.f15633u = new LinkedHashSet();
        this.G = new a();
        b bVar = new b();
        this.H = bVar;
        this.E = (AccessibilityManager) getContext().getSystemService("accessibility");
        this.f15624d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388613));
        FrameLayout frameLayout = new FrameLayout(getContext());
        this.f15625e = frameLayout;
        frameLayout.setVisibility(8);
        frameLayout.setLayoutParams(new LinearLayout.LayoutParams(-2, -1));
        LayoutInflater from = LayoutInflater.from(getContext());
        CheckableImageButton i10 = i(this, from, bh.f.N);
        this.f15626i = i10;
        CheckableImageButton i11 = i(frameLayout, from, bh.f.M);
        this.f15630r = i11;
        this.f15631s = new d(this, v0Var);
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
        if (!v0Var.s(bh.k.G7)) {
            if (v0Var.s(bh.k.f6929l7)) {
                this.f15634v = oh.c.b(getContext(), v0Var, bh.k.f6929l7);
            }
            if (v0Var.s(bh.k.f6939m7)) {
                this.f15635w = com.google.android.material.internal.o.i(v0Var.k(bh.k.f6939m7, -1), null);
            }
        }
        if (v0Var.s(bh.k.f6909j7)) {
            U(v0Var.k(bh.k.f6909j7, 0));
            if (v0Var.s(bh.k.f6879g7)) {
                Q(v0Var.p(bh.k.f6879g7));
            }
            O(v0Var.a(bh.k.f6869f7, true));
        } else if (v0Var.s(bh.k.G7)) {
            if (v0Var.s(bh.k.H7)) {
                this.f15634v = oh.c.b(getContext(), v0Var, bh.k.H7);
            }
            if (v0Var.s(bh.k.I7)) {
                this.f15635w = com.google.android.material.internal.o.i(v0Var.k(bh.k.I7, -1), null);
            }
            U(v0Var.a(bh.k.G7, false) ? 1 : 0);
            Q(v0Var.p(bh.k.E7));
        }
        T(v0Var.f(bh.k.f6899i7, getResources().getDimensionPixelSize(bh.d.Y)));
        if (v0Var.s(bh.k.f6919k7)) {
            X(t.b(v0Var.k(bh.k.f6919k7, -1)));
        }
    }

    private void C(v0 v0Var) {
        if (v0Var.s(bh.k.f6984r7)) {
            this.f15627o = oh.c.b(getContext(), v0Var, bh.k.f6984r7);
        }
        if (v0Var.s(bh.k.f6993s7)) {
            this.f15628p = com.google.android.material.internal.o.i(v0Var.k(bh.k.f6993s7, -1), null);
        }
        if (v0Var.s(bh.k.f6975q7)) {
            c0(v0Var.g(bh.k.f6975q7));
        }
        this.f15626i.setContentDescription(getResources().getText(bh.i.f6767f));
        h0.x0(this.f15626i, 2);
        this.f15626i.setClickable(false);
        this.f15626i.setPressable(false);
        this.f15626i.setFocusable(false);
    }

    private void D(v0 v0Var) {
        this.B.setVisibility(8);
        this.B.setId(bh.f.T);
        this.B.setLayoutParams(new LinearLayout.LayoutParams(-2, -2, 80.0f));
        h0.p0(this.B, 1);
        q0(v0Var.n(bh.k.X7, 0));
        if (v0Var.s(bh.k.Y7)) {
            r0(v0Var.c(bh.k.Y7));
        }
        p0(v0Var.p(bh.k.W7));
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
                this.f15630r.setOnFocusChangeListener(sVar.g());
            }
        }
    }

    private CheckableImageButton i(ViewGroup viewGroup, LayoutInflater layoutInflater, int i10) {
        CheckableImageButton checkableImageButton = (CheckableImageButton) layoutInflater.inflate(bh.h.f6743e, viewGroup, false);
        checkableImageButton.setId(i10);
        t.e(checkableImageButton);
        if (oh.c.g(getContext())) {
            androidx.core.view.m.d((ViewGroup.MarginLayoutParams) checkableImageButton.getLayoutParams(), 0);
        }
        return checkableImageButton;
    }

    private void j(int i10) {
        Iterator it = this.f15633u.iterator();
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
        int i10 = this.f15631s.f15644c;
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
            s1.a.n(mutate, this.f15624d.getErrorCurrentTextColors());
            this.f15630r.setImageDrawable(mutate);
            return;
        }
        t.a(this.f15624d, this.f15630r, this.f15634v, this.f15635w);
    }

    private void v0() {
        int i10;
        boolean z10;
        FrameLayout frameLayout = this.f15625e;
        int i11 = 8;
        if (this.f15630r.getVisibility() == 0 && !G()) {
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
        if (s() != null && this.f15624d.N() && this.f15624d.c0()) {
            z10 = true;
        } else {
            z10 = false;
        }
        CheckableImageButton checkableImageButton = this.f15626i;
        if (!z10) {
            i10 = 8;
        }
        checkableImageButton.setVisibility(i10);
        v0();
        x0();
        if (!A()) {
            this.f15624d.n0();
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
        this.f15624d.n0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f15632t != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        if (A() && this.f15630r.isChecked()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        if (this.f15625e.getVisibility() == 0 && this.f15630r.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        if (this.f15626i.getVisibility() == 0) {
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
            u0(this.f15624d.c0());
        }
    }

    void J() {
        t.d(this.f15624d, this.f15630r, this.f15634v);
    }

    void K() {
        t.d(this.f15624d, this.f15626i, this.f15627o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        boolean z11;
        boolean isActivated;
        boolean isChecked;
        s m10 = m();
        boolean z12 = true;
        if (m10.l() && (isChecked = this.f15630r.isChecked()) != m10.m()) {
            this.f15630r.setChecked(!isChecked);
            z11 = true;
        } else {
            z11 = false;
        }
        if (m10.j() && (isActivated = this.f15630r.isActivated()) != m10.k()) {
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
        this.f15630r.setActivated(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(boolean z10) {
        this.f15630r.setCheckable(z10);
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
            this.f15630r.setContentDescription(charSequence);
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
        this.f15630r.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f15624d, this.f15630r, this.f15634v, this.f15635w);
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f15636x) {
                this.f15636x = i10;
                t.g(this.f15630r, i10);
                t.g(this.f15626i, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("endIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(int i10) {
        boolean z10;
        if (this.f15632t == i10) {
            return;
        }
        t0(m());
        int i11 = this.f15632t;
        this.f15632t = i10;
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
        if (m10.i(this.f15624d.getBoxBackgroundMode())) {
            s0(m10);
            V(m10.f());
            EditText editText = this.D;
            if (editText != null) {
                m10.n(editText);
                h0(m10);
            }
            t.a(this.f15624d, this.f15630r, this.f15634v, this.f15635w);
            L(true);
            return;
        }
        throw new IllegalStateException("The current box background mode " + this.f15624d.getBoxBackgroundMode() + " is not supported by the end icon mode " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(View.OnClickListener onClickListener) {
        t.h(this.f15630r, onClickListener, this.f15638z);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(View.OnLongClickListener onLongClickListener) {
        this.f15638z = onLongClickListener;
        t.i(this.f15630r, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ImageView.ScaleType scaleType) {
        this.f15637y = scaleType;
        t.j(this.f15630r, scaleType);
        t.j(this.f15626i, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(ColorStateList colorStateList) {
        if (this.f15634v != colorStateList) {
            this.f15634v = colorStateList;
            t.a(this.f15624d, this.f15630r, colorStateList, this.f15635w);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(PorterDuff.Mode mode) {
        if (this.f15635w != mode) {
            this.f15635w = mode;
            t.a(this.f15624d, this.f15630r, this.f15634v, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(boolean z10) {
        int i10;
        if (F() != z10) {
            CheckableImageButton checkableImageButton = this.f15630r;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            checkableImageButton.setVisibility(i10);
            v0();
            x0();
            this.f15624d.n0();
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
        this.f15626i.setImageDrawable(drawable);
        w0();
        t.a(this.f15624d, this.f15626i, this.f15627o, this.f15628p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(View.OnClickListener onClickListener) {
        t.h(this.f15626i, onClickListener, this.f15629q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0(View.OnLongClickListener onLongClickListener) {
        this.f15629q = onLongClickListener;
        t.i(this.f15626i, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0(ColorStateList colorStateList) {
        if (this.f15627o != colorStateList) {
            this.f15627o = colorStateList;
            t.a(this.f15624d, this.f15626i, colorStateList, this.f15628p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0(PorterDuff.Mode mode) {
        if (this.f15628p != mode) {
            this.f15628p = mode;
            t.a(this.f15624d, this.f15626i, this.f15627o, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        this.f15630r.performClick();
        this.f15630r.jumpDrawablesToCurrentState();
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
        this.f15630r.setContentDescription(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton k() {
        if (G()) {
            return this.f15626i;
        }
        if (A() && F()) {
            return this.f15630r;
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
        return this.f15630r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l0(Drawable drawable) {
        this.f15630r.setImageDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s m() {
        return this.f15631s.c(this.f15632t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m0(boolean z10) {
        if (z10 && this.f15632t != 1) {
            U(1);
        } else if (!z10) {
            U(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable n() {
        return this.f15630r.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n0(ColorStateList colorStateList) {
        this.f15634v = colorStateList;
        t.a(this.f15624d, this.f15630r, colorStateList, this.f15635w);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f15636x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0(PorterDuff.Mode mode) {
        this.f15635w = mode;
        t.a(this.f15624d, this.f15630r, this.f15634v, mode);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f15632t;
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
        return this.f15637y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0(int i10) {
        androidx.core.widget.j.s(this.B, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton r() {
        return this.f15630r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r0(ColorStateList colorStateList) {
        this.B.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable s() {
        return this.f15626i.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence u() {
        return this.f15630r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable v() {
        return this.f15630r.getDrawable();
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
        if (this.f15624d.f15552o == null) {
            return;
        }
        if (!F() && !G()) {
            i10 = h0.D(this.f15624d.f15552o);
        } else {
            i10 = 0;
        }
        h0.F0(this.B, getContext().getResources().getDimensionPixelSize(bh.d.H), this.f15624d.f15552o.getPaddingTop(), i10, this.f15624d.f15552o.getPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y() {
        int measuredWidth;
        if (!F() && !G()) {
            measuredWidth = 0;
        } else {
            measuredWidth = this.f15630r.getMeasuredWidth() + androidx.core.view.m.b((ViewGroup.MarginLayoutParams) this.f15630r.getLayoutParams());
        }
        return h0.D(this) + h0.D(this.B) + measuredWidth;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView z() {
        return this.B;
    }
}
