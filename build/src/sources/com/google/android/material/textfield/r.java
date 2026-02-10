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
    private AccessibilityManager.TouchExplorationStateChangeListener F;
    private final TextWatcher G;
    private final TextInputLayout.g H;

    /* renamed from: d  reason: collision with root package name */
    final TextInputLayout f16373d;

    /* renamed from: e  reason: collision with root package name */
    private final FrameLayout f16374e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckableImageButton f16375i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f16376o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f16377p;

    /* renamed from: q  reason: collision with root package name */
    private View.OnLongClickListener f16378q;

    /* renamed from: r  reason: collision with root package name */
    private final CheckableImageButton f16379r;

    /* renamed from: s  reason: collision with root package name */
    private final d f16380s;

    /* renamed from: t  reason: collision with root package name */
    private int f16381t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashSet f16382u;

    /* renamed from: v  reason: collision with root package name */
    private ColorStateList f16383v;

    /* renamed from: w  reason: collision with root package name */
    private PorterDuff.Mode f16384w;

    /* renamed from: x  reason: collision with root package name */
    private int f16385x;

    /* renamed from: y  reason: collision with root package name */
    private ImageView.ScaleType f16386y;

    /* renamed from: z  reason: collision with root package name */
    private View.OnLongClickListener f16387z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends com.google.android.material.internal.l {
        a() {
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            r.this.m().a(editable);
        }

        @Override // com.google.android.material.internal.l, android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            r.this.m().b(charSequence, i10, i11, i12);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements TextInputLayout.g {
        b() {
        }

        @Override // com.google.android.material.textfield.TextInputLayout.g
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
        private final SparseArray f16391a = new SparseArray();

        /* renamed from: b  reason: collision with root package name */
        private final r f16392b;

        /* renamed from: c  reason: collision with root package name */
        private final int f16393c;

        /* renamed from: d  reason: collision with root package name */
        private final int f16394d;

        d(r rVar, v0 v0Var) {
            this.f16392b = rVar;
            this.f16393c = v0Var.n(bh.l.f7128r7, 0);
            this.f16394d = v0Var.n(bh.l.Q7, 0);
        }

        private s b(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                return new p(this.f16392b);
                            }
                            throw new IllegalArgumentException("Invalid end icon mode: " + i10);
                        }
                        return new f(this.f16392b);
                    }
                    return new x(this.f16392b, this.f16394d);
                }
                return new v(this.f16392b);
            }
            return new g(this.f16392b);
        }

        s c(int i10) {
            s sVar = (s) this.f16391a.get(i10);
            if (sVar == null) {
                s b10 = b(i10);
                this.f16391a.append(i10, b10);
                return b10;
            }
            return sVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(TextInputLayout textInputLayout, v0 v0Var) {
        super(textInputLayout.getContext());
        this.f16381t = 0;
        this.f16382u = new LinkedHashSet();
        this.G = new a();
        b bVar = new b();
        this.H = bVar;
        this.E = (AccessibilityManager) getContext().getSystemService("accessibility");
        this.f16373d = textInputLayout;
        setVisibility(8);
        setOrientation(0);
        setLayoutParams(new FrameLayout.LayoutParams(-2, -1, 8388613));
        FrameLayout frameLayout = new FrameLayout(getContext());
        this.f16374e = frameLayout;
        frameLayout.setVisibility(8);
        frameLayout.setLayoutParams(new LinearLayout.LayoutParams(-2, -1));
        LayoutInflater from = LayoutInflater.from(getContext());
        CheckableImageButton i10 = i(this, from, bh.f.W);
        this.f16375i = i10;
        CheckableImageButton i11 = i(frameLayout, from, bh.f.V);
        this.f16379r = i11;
        this.f16380s = new d(this, v0Var);
        AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
        this.B = appCompatTextView;
        C(v0Var);
        B(v0Var);
        D(v0Var);
        frameLayout.addView(i11);
        addView(appCompatTextView);
        addView(frameLayout);
        addView(i10);
        textInputLayout.j(bVar);
        addOnAttachStateChangeListener(new c());
    }

    private void B(v0 v0Var) {
        if (!v0Var.s(bh.l.R7)) {
            if (v0Var.s(bh.l.f7164v7)) {
                this.f16383v = qh.c.b(getContext(), v0Var, bh.l.f7164v7);
            }
            if (v0Var.s(bh.l.f7173w7)) {
                this.f16384w = com.google.android.material.internal.p.i(v0Var.k(bh.l.f7173w7, -1), null);
            }
        }
        if (v0Var.s(bh.l.f7146t7)) {
            U(v0Var.k(bh.l.f7146t7, 0));
            if (v0Var.s(bh.l.f7119q7)) {
                Q(v0Var.p(bh.l.f7119q7));
            }
            O(v0Var.a(bh.l.f7110p7, true));
        } else if (v0Var.s(bh.l.R7)) {
            if (v0Var.s(bh.l.S7)) {
                this.f16383v = qh.c.b(getContext(), v0Var, bh.l.S7);
            }
            if (v0Var.s(bh.l.T7)) {
                this.f16384w = com.google.android.material.internal.p.i(v0Var.k(bh.l.T7, -1), null);
            }
            U(v0Var.a(bh.l.R7, false) ? 1 : 0);
            Q(v0Var.p(bh.l.P7));
        }
        T(v0Var.f(bh.l.f7137s7, getResources().getDimensionPixelSize(bh.d.f6805p0)));
        if (v0Var.s(bh.l.f7155u7)) {
            X(t.b(v0Var.k(bh.l.f7155u7, -1)));
        }
    }

    private void C(v0 v0Var) {
        if (v0Var.s(bh.l.B7)) {
            this.f16376o = qh.c.b(getContext(), v0Var, bh.l.B7);
        }
        if (v0Var.s(bh.l.C7)) {
            this.f16377p = com.google.android.material.internal.p.i(v0Var.k(bh.l.C7, -1), null);
        }
        if (v0Var.s(bh.l.A7)) {
            c0(v0Var.g(bh.l.A7));
        }
        this.f16375i.setContentDescription(getResources().getText(bh.j.f6905f));
        this.f16375i.setImportantForAccessibility(2);
        this.f16375i.setClickable(false);
        this.f16375i.setPressable(false);
        this.f16375i.setCheckable(false);
        this.f16375i.setFocusable(false);
    }

    private void D(v0 v0Var) {
        this.B.setVisibility(8);
        this.B.setId(bh.f.f6842c0);
        this.B.setLayoutParams(new LinearLayout.LayoutParams(-2, -2, 80.0f));
        this.B.setAccessibilityLiveRegion(1);
        q0(v0Var.n(bh.l.f7041i8, 0));
        if (v0Var.s(bh.l.f7051j8)) {
            r0(v0Var.c(bh.l.f7051j8));
        }
        p0(v0Var.p(bh.l.f7031h8));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void M() {
        AccessibilityManager accessibilityManager;
        AccessibilityManager.TouchExplorationStateChangeListener touchExplorationStateChangeListener = this.F;
        if (touchExplorationStateChangeListener != null && (accessibilityManager = this.E) != null) {
            accessibilityManager.removeTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g() {
        if (this.F != null && this.E != null && isAttachedToWindow()) {
            this.E.addTouchExplorationStateChangeListener(this.F);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h0(s sVar) {
        if (this.D != null) {
            if (sVar.e() != null) {
                this.D.setOnFocusChangeListener(sVar.e());
            }
            if (sVar.g() != null) {
                this.f16379r.setOnFocusChangeListener(sVar.g());
            }
        }
    }

    private CheckableImageButton i(ViewGroup viewGroup, LayoutInflater layoutInflater, int i10) {
        CheckableImageButton checkableImageButton = (CheckableImageButton) layoutInflater.inflate(bh.h.f6878f, viewGroup, false);
        checkableImageButton.setId(i10);
        t.e(checkableImageButton);
        if (qh.c.k(getContext())) {
            ((ViewGroup.MarginLayoutParams) checkableImageButton.getLayoutParams()).setMarginStart(0);
        }
        return checkableImageButton;
    }

    private void j(int i10) {
        Iterator it = this.f16382u.iterator();
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
        int i10 = this.f16380s.f16393c;
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
            mutate.setTint(this.f16373d.getErrorCurrentTextColors());
            this.f16379r.setImageDrawable(mutate);
            return;
        }
        t.a(this.f16373d, this.f16379r, this.f16383v, this.f16384w);
    }

    private void v0() {
        int i10;
        boolean z10;
        FrameLayout frameLayout = this.f16374e;
        int i11 = 8;
        if (this.f16379r.getVisibility() == 0 && !G()) {
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
        if (s() != null && this.f16373d.O() && this.f16373d.e0()) {
            z10 = true;
        } else {
            z10 = false;
        }
        CheckableImageButton checkableImageButton = this.f16375i;
        if (!z10) {
            i10 = 8;
        }
        checkableImageButton.setVisibility(i10);
        v0();
        x0();
        if (!A()) {
            this.f16373d.q0();
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
        this.f16373d.q0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f16381t != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        if (A() && this.f16379r.isChecked()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        if (this.f16374e.getVisibility() == 0 && this.f16379r.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        if (this.f16375i.getVisibility() == 0) {
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
            u0(this.f16373d.e0());
        }
    }

    void J() {
        t.d(this.f16373d, this.f16379r, this.f16383v);
    }

    void K() {
        t.d(this.f16373d, this.f16375i, this.f16376o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        boolean z11;
        boolean isActivated;
        boolean isChecked;
        s m10 = m();
        boolean z12 = true;
        if (m10.l() && (isChecked = this.f16379r.isChecked()) != m10.m()) {
            this.f16379r.setChecked(!isChecked);
            z11 = true;
        } else {
            z11 = false;
        }
        if (m10.j() && (isActivated = this.f16379r.isActivated()) != m10.k()) {
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
        this.f16379r.setActivated(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(boolean z10) {
        this.f16379r.setCheckable(z10);
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
            this.f16379r.setContentDescription(charSequence);
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
        this.f16379r.setImageDrawable(drawable);
        if (drawable != null) {
            t.a(this.f16373d, this.f16379r, this.f16383v, this.f16384w);
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f16385x) {
                this.f16385x = i10;
                t.g(this.f16379r, i10);
                t.g(this.f16375i, i10);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("endIconSize cannot be less than 0");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(int i10) {
        boolean z10;
        if (this.f16381t == i10) {
            return;
        }
        t0(m());
        int i11 = this.f16381t;
        this.f16381t = i10;
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
        if (m10.i(this.f16373d.getBoxBackgroundMode())) {
            s0(m10);
            V(m10.f());
            EditText editText = this.D;
            if (editText != null) {
                m10.n(editText);
                h0(m10);
            }
            t.a(this.f16373d, this.f16379r, this.f16383v, this.f16384w);
            L(true);
            return;
        }
        throw new IllegalStateException("The current box background mode " + this.f16373d.getBoxBackgroundMode() + " is not supported by the end icon mode " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(View.OnClickListener onClickListener) {
        t.h(this.f16379r, onClickListener, this.f16387z);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(View.OnLongClickListener onLongClickListener) {
        this.f16387z = onLongClickListener;
        t.i(this.f16379r, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ImageView.ScaleType scaleType) {
        this.f16386y = scaleType;
        t.j(this.f16379r, scaleType);
        t.j(this.f16375i, scaleType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(ColorStateList colorStateList) {
        if (this.f16383v != colorStateList) {
            this.f16383v = colorStateList;
            t.a(this.f16373d, this.f16379r, colorStateList, this.f16384w);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(PorterDuff.Mode mode) {
        if (this.f16384w != mode) {
            this.f16384w = mode;
            t.a(this.f16373d, this.f16379r, this.f16383v, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(boolean z10) {
        int i10;
        if (F() != z10) {
            CheckableImageButton checkableImageButton = this.f16379r;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            checkableImageButton.setVisibility(i10);
            v0();
            x0();
            this.f16373d.q0();
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
        this.f16375i.setImageDrawable(drawable);
        w0();
        t.a(this.f16373d, this.f16375i, this.f16376o, this.f16377p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(View.OnClickListener onClickListener) {
        t.h(this.f16375i, onClickListener, this.f16378q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0(View.OnLongClickListener onLongClickListener) {
        this.f16378q = onLongClickListener;
        t.i(this.f16375i, onLongClickListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0(ColorStateList colorStateList) {
        if (this.f16376o != colorStateList) {
            this.f16376o = colorStateList;
            t.a(this.f16373d, this.f16375i, colorStateList, this.f16377p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0(PorterDuff.Mode mode) {
        if (this.f16377p != mode) {
            this.f16377p = mode;
            t.a(this.f16373d, this.f16375i, this.f16376o, mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        this.f16379r.performClick();
        this.f16379r.jumpDrawablesToCurrentState();
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
        this.f16379r.setContentDescription(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton k() {
        if (G()) {
            return this.f16375i;
        }
        if (A() && F()) {
            return this.f16379r;
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
        return this.f16379r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l0(Drawable drawable) {
        this.f16379r.setImageDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s m() {
        return this.f16380s.c(this.f16381t);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m0(boolean z10) {
        if (z10 && this.f16381t != 1) {
            U(1);
        } else if (!z10) {
            U(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable n() {
        return this.f16379r.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n0(ColorStateList colorStateList) {
        this.f16383v = colorStateList;
        t.a(this.f16373d, this.f16379r, colorStateList, this.f16384w);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f16385x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0(PorterDuff.Mode mode) {
        this.f16384w = mode;
        t.a(this.f16373d, this.f16379r, this.f16383v, mode);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f16381t;
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
        return this.f16386y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0(int i10) {
        androidx.core.widget.j.q(this.B, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CheckableImageButton r() {
        return this.f16379r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r0(ColorStateList colorStateList) {
        this.B.setTextColor(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable s() {
        return this.f16375i.getDrawable();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence u() {
        return this.f16379r.getContentDescription();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable v() {
        return this.f16379r.getDrawable();
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
        if (this.f16373d.f16302p == null) {
            return;
        }
        if (!F() && !G()) {
            i10 = this.f16373d.f16302p.getPaddingEnd();
        } else {
            i10 = 0;
        }
        this.B.setPaddingRelative(getContext().getResources().getDimensionPixelSize(bh.d.V), this.f16373d.f16302p.getPaddingTop(), i10, this.f16373d.f16302p.getPaddingBottom());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y() {
        int measuredWidth;
        if (!F() && !G()) {
            measuredWidth = 0;
        } else {
            measuredWidth = this.f16379r.getMeasuredWidth() + ((ViewGroup.MarginLayoutParams) this.f16379r.getLayoutParams()).getMarginStart();
        }
        return getPaddingEnd() + this.B.getPaddingEnd() + measuredWidth;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public TextView z() {
        return this.B;
    }
}
