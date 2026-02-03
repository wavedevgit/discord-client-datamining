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
    final TextInputLayout f16142d;

    /* renamed from: e  reason: collision with root package name */
    private final FrameLayout f16143e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckableImageButton f16144i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f16145o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f16146p;

    /* renamed from: q  reason: collision with root package name */
    private View.OnLongClickListener f16147q;

    /* renamed from: r  reason: collision with root package name */
    private final CheckableImageButton f16148r;

    /* renamed from: s  reason: collision with root package name */
    private final d f16149s;

    /* renamed from: t  reason: collision with root package name */
    private int f16150t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashSet f16151u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16152v;

    /* renamed from: w  reason: collision with root package name */
    private PorterDuff.Mode f16153w;

    /* renamed from: x  reason: collision with root package name */
    private int f16154x;

    /* renamed from: y  reason: collision with root package name */
    private ImageView.ScaleType f16155y;

    /* renamed from: z  reason: collision with root package name */
    private View.OnLongClickListener f16156z;

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
        private final SparseArray f16160a = new SparseArray();

        /* renamed from: b  reason: collision with root package name */
        private final r f16161b;

        /* renamed from: c  reason: collision with root package name */
        private final int f16162c;

        /* renamed from: d  reason: collision with root package name */
        private final int f16163d;

        d(r rVar, v0 v0Var) {
            this.f16161b = rVar;
            this.f16162c = v0Var.n(yg.k.f54593h7, 0);
            this.f16163d = v0Var.n(yg.k.F7, 0);
        }

        private s b(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                return new p(this.f16161b);
                            }
                            throw new IllegalArgumentException("Invalid end icon mode: " + i10);
                        }
                        return new f(this.f16161b);
                    }
                    return new x(this.f16161b, this.f16163d);
                }
                return new v(this.f16161b);
            }
            return new g(this.f16161b);
        }

        s c(int i10) {
            s sVar = (s) this.f16160a.get(i10);
            if (sVar == null) {
                s b10 = b(i10);
                this.f16160a.append(i10, b10);
                return b10;
            }
            return sVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f16150t = 0;
        this.f16151u = new LinkedHashSet();
        this.G = new a();
        b bVar = new b();
        this.H = bVar;
        this.E = (AccessibilityManager) getContext().getSystemService("accessibility");
        this.f16142d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388613));
        FrameLayout frameLayout = new FrameLayout(getContext());
        this.f16143e = frameLayout;
        frameLayout.setVisibility(8);
        frameLayout.setLayoutParams(new LinearLayout.LayoutParams(-2, -1));
        LayoutInflater from = LayoutInflater.from(getContext());
        CheckableImageButton i10 = i(this, from, yg.f.N);
        this.f16144i = i10;
        CheckableImageButton i11 = i(frameLayout, from, yg.f.M);
        this.f16148r = i11;
        this.f16149s = new d(this, v0Var);
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
            if (v0Var.s(yg.k.f54633l7)) {
                this.f16152v = lh.c.b(getContext(), v0Var, yg.k.f54633l7);
            }
            if (v0Var.s(yg.k.f54643m7)) {
                this.f16153w = com.google.android.material.internal.o.i(v0Var.k(yg.k.f54643m7, -1), null);
            }
        }
        if (v0Var.s(yg.k.f54613j7)) {
            U(v0Var.k(yg.k.f54613j7, 0));
            if (v0Var.s(yg.k.f54583g7)) {
                Q(v0Var.p(yg.k.f54583g7));
            }
            O(v0Var.a(yg.k.f54573f7, true));
        } else if (v0Var.s(yg.k.G7)) {
            if (v0Var.s(yg.k.H7)) {
                this.f16152v = lh.c.b(getContext(), v0Var, yg.k.H7);
            }
            if (v0Var.s(yg.k.I7)) {
                this.f16153w = com.google.android.material.internal.o.i(v0Var.k(yg.k.I7, -1), null);
            }
            U(v0Var.a(yg.k.G7, false) ? 1 : 0);
            Q(v0Var.p(yg.k.E7));
        }
        T(v0Var.f(yg.k.f54603i7, getResources().getDimensionPixelSize(yg.d.Y)));
        if (v0Var.s(yg.k.f54623k7)) {
            X(t.b(v0Var.k(yg.k.f54623k7, -1)));
        }
    }

    private void C(v0 v0Var) {
        if (v0Var.s(yg.k.f54688r7)) {
            this.f16145o = lh.c.b(getContext(), v0Var, yg.k.f54688r7);
        }
        if (v0Var.s(yg.k.f54697s7)) {
            this.f16146p = com.google.android.material.internal.o.i(v0Var.k(yg.k.f54697s7, -1), null);
        }
        if (v0Var.s(yg.k.f54679q7)) {
            c0(v0Var.g(yg.k.f54679q7));
        }
        this.f16144i.setContentDescription(getResources().getText(yg.i.f54471f));
        h0.x0(this.f16144i, 2);
        this.f16144i.setClickable(false);
        this.f16144i.setPressable(false);
        this.f16144i.setFocusable(false);
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
                this.f16148r.setOnFocusChangeListener(sVar.g());
            }
        }
    }

    private CheckableImageButton i(ViewGroup viewGroup, LayoutInflater layoutInflater, int i10) {
        CheckableImageButton checkableImageButton = (CheckableImageButton) layoutInflater.inflate(yg.h.f54447e, viewGroup, false);
        checkableImageButton.setId(i10);
        t.e(checkableImageButton);
        if (lh.c.g(getContext())) {
            androidx.core.view.m.d((ViewGroup.MarginLayoutParams) checkableImageButton.getLayoutParams(), 0);
        }
        return checkableImageButton;
    }

    private void j(int i10) {
        Iterator it = this.f16151u.iterator();
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
        int i10 = this.f16149s.f16162c;
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
            s1.a.n(mutate, this.f16142d.getErrorCurrentTextColors());
            this.f16148r.setImageDrawable(mutate);
            return;
        }
        t.a(this.f16142d, this.f16148r, this.f16152v, this.f16153w);
    }

    private void v0() {
        int i10;
        boolean z10;
        FrameLayout frameLayout = this.f16143e;
        int i11 = 8;
        if (this.f16148r.getVisibility() == 0 && !G()) {
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
        if (s() != null && this.f16142d.N() && this.f16142d.c0()) {
            z10 = true;
        } else {
            z10 = false;
        }
        CheckableImageButton checkableImageButton = this.f16144i;
        if (!z10) {
            i10 = 8;
        }
        checkableImageButton.setVisibility(i10);
        v0();
        x0();
        if (!A()) {
            this.f16142d.n0();
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
        this.f16142d.n0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f16150t != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        if (A() && this.f16148r.isChecked()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        if (this.f16143e.getVisibility() == 0 && this.f16148r.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        if (this.f16144i.getVisibility() == 0) {
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
            u0(this.f16142d.c0());
        }
    }

    void J() {
        t.d(this.f16142d, this.f16148r, this.f16152v);
    }

    void K() {
        t.d(this.f16142d, this.f16144i, this.f16145o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        boolean z11;
        boolean isActivated;
        boolean isChecked;
        s m10 = m();
        boolean z12 = true;
        if (m10.l() && (isChecked = this.f16148r.isChecked()) != m10.m()) {
            this.f16148r.setChecked(!isChecked);
            z11 = true;
        } else {
            z11 = false;
        }
        if (m10.j() && (isActivated = this.f16148r.isActivated()) != m10.k()) {
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
        this.f16148r.setActivated(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(boolean z10) {
        this.f16148r.setCheckable(z10);
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
            this.f16148r.setContentDescription(charSequence);
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
        this.f16148r.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f16142d, this.f16148r, this.f16152v, this.f16153w);
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f16154x) {
                this.f16154x = i10;
                t.g(this.f16148r, i10);
                t.g(this.f16144i, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("endIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(int i10) {
        boolean z10;
        if (this.f16150t == i10) {
            return;
        }
        t0(m());
        int i11 = this.f16150t;
        this.f16150t = i10;
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
        if (m10.i(this.f16142d.getBoxBackgroundMode())) {
            s0(m10);
            V(m10.f());
            EditText editText = this.D;
            if (editText != null) {
                m10.n(editText);
                h0(m10);
            }
            t.a(this.f16142d, this.f16148r, this.f16152v, this.f16153w);
            L(true);
            return;
        }
        throw new IllegalStateException("The current box background mode " + this.f16142d.getBoxBackgroundMode() + " is not supported by the end icon mode " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(View.OnClickListener onClickListener) {
        t.h(this.f16148r, onClickListener, this.f16156z);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(View.OnLongClickListener onLongClickListener) {
        this.f16156z = onLongClickListener;
        t.i(this.f16148r, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ImageView.ScaleType scaleType) {
        this.f16155y = scaleType;
        t.j(this.f16148r, scaleType);
        t.j(this.f16144i, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(ColorStateList colorStateList) {
        if (this.f16152v != colorStateList) {
            this.f16152v = colorStateList;
            t.a(this.f16142d, this.f16148r, colorStateList, this.f16153w);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(PorterDuff.Mode mode) {
        if (this.f16153w != mode) {
            this.f16153w = mode;
            t.a(this.f16142d, this.f16148r, this.f16152v, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(boolean z10) {
        int i10;
        if (F() != z10) {
            CheckableImageButton checkableImageButton = this.f16148r;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            checkableImageButton.setVisibility(i10);
            v0();
            x0();
            this.f16142d.n0();
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
        this.f16144i.setImageDrawable(drawable);
        w0();
        t.a(this.f16142d, this.f16144i, this.f16145o, this.f16146p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(View.OnClickListener onClickListener) {
        t.h(this.f16144i, onClickListener, this.f16147q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0(View.OnLongClickListener onLongClickListener) {
        this.f16147q = onLongClickListener;
        t.i(this.f16144i, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0(ColorStateList colorStateList) {
        if (this.f16145o != colorStateList) {
            this.f16145o = colorStateList;
            t.a(this.f16142d, this.f16144i, colorStateList, this.f16146p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0(PorterDuff.Mode mode) {
        if (this.f16146p != mode) {
            this.f16146p = mode;
            t.a(this.f16142d, this.f16144i, this.f16145o, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        this.f16148r.performClick();
        this.f16148r.jumpDrawablesToCurrentState();
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
        this.f16148r.setContentDescription(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton k() {
        if (G()) {
            return this.f16144i;
        }
        if (A() && F()) {
            return this.f16148r;
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
        return this.f16148r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l0(Drawable drawable) {
        this.f16148r.setImageDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s m() {
        return this.f16149s.c(this.f16150t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m0(boolean z10) {
        if (z10 && this.f16150t != 1) {
            U(1);
        } else if (!z10) {
            U(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable n() {
        return this.f16148r.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n0(ColorStateList colorStateList) {
        this.f16152v = colorStateList;
        t.a(this.f16142d, this.f16148r, colorStateList, this.f16153w);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f16154x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0(PorterDuff.Mode mode) {
        this.f16153w = mode;
        t.a(this.f16142d, this.f16148r, this.f16152v, mode);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f16150t;
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
        return this.f16155y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0(int i10) {
        androidx.core.widget.j.s(this.B, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton r() {
        return this.f16148r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r0(ColorStateList colorStateList) {
        this.B.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable s() {
        return this.f16144i.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence u() {
        return this.f16148r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable v() {
        return this.f16148r.getDrawable();
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
        if (this.f16142d.f16070o == null) {
            return;
        }
        if (!F() && !G()) {
            i10 = h0.D(this.f16142d.f16070o);
        } else {
            i10 = 0;
        }
        h0.F0(this.B, getContext().getResources().getDimensionPixelSize(yg.d.H), this.f16142d.f16070o.getPaddingTop(), i10, this.f16142d.f16070o.getPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y() {
        int measuredWidth;
        if (!F() && !G()) {
            measuredWidth = 0;
        } else {
            measuredWidth = this.f16148r.getMeasuredWidth() + androidx.core.view.m.b((ViewGroup.MarginLayoutParams) this.f16148r.getLayoutParams());
        }
        return h0.D(this) + h0.D(this.B) + measuredWidth;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView z() {
        return this.B;
    }
}
