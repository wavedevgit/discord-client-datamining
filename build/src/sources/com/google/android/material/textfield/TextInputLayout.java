package com.google.android.material.textfield;

import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Configuration;
import android.graphics.Canvas;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.StateListDrawable;
import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.Editable;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewStructure;
import android.view.ViewTreeObserver;
import android.view.accessibility.AccessibilityEvent;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.appcompat.widget.e0;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.internal.CheckableImageButton;
import java.util.Iterator;
import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextInputLayout extends LinearLayout implements ViewTreeObserver.OnGlobalLayoutListener {
    private static final int N0 = yg.j.f54523j;
    private static final int[][] O0 = {new int[]{16842919}, new int[0]};
    private int A;
    private int A0;
    private int B;
    private int B0;
    private CharSequence C;
    private int C0;
    private boolean D;
    private int D0;
    private TextView E;
    int E0;
    private ColorStateList F;
    private boolean F0;
    private int G;
    final com.google.android.material.internal.a G0;
    private androidx.transition.e H;
    private boolean H0;
    private androidx.transition.e I;
    private boolean I0;
    private ColorStateList J;
    private ValueAnimator J0;
    private ColorStateList K;
    private boolean K0;
    private ColorStateList L;
    private boolean L0;
    private ColorStateList M;
    private boolean M0;
    private boolean N;
    private CharSequence O;
    private boolean P;
    private oh.g Q;
    private oh.g R;
    private StateListDrawable S;
    private boolean T;
    private oh.g U;
    private oh.g V;
    private oh.k W;

    /* renamed from: a0  reason: collision with root package name */
    private boolean f16424a0;

    /* renamed from: b0  reason: collision with root package name */
    private final int f16425b0;

    /* renamed from: c0  reason: collision with root package name */
    private int f16426c0;

    /* renamed from: d  reason: collision with root package name */
    private final FrameLayout f16427d;

    /* renamed from: d0  reason: collision with root package name */
    private int f16428d0;

    /* renamed from: e  reason: collision with root package name */
    private final y f16429e;

    /* renamed from: e0  reason: collision with root package name */
    private int f16430e0;

    /* renamed from: f0  reason: collision with root package name */
    private int f16431f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f16432g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f16433h0;

    /* renamed from: i  reason: collision with root package name */
    private final r f16434i;

    /* renamed from: i0  reason: collision with root package name */
    private int f16435i0;

    /* renamed from: j0  reason: collision with root package name */
    private final Rect f16436j0;

    /* renamed from: k0  reason: collision with root package name */
    private final Rect f16437k0;

    /* renamed from: l0  reason: collision with root package name */
    private final RectF f16438l0;

    /* renamed from: m0  reason: collision with root package name */
    private Typeface f16439m0;

    /* renamed from: n0  reason: collision with root package name */
    private Drawable f16440n0;

    /* renamed from: o  reason: collision with root package name */
    EditText f16441o;

    /* renamed from: o0  reason: collision with root package name */
    private int f16442o0;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f16443p;

    /* renamed from: p0  reason: collision with root package name */
    private final LinkedHashSet f16444p0;

    /* renamed from: q  reason: collision with root package name */
    private int f16445q;

    /* renamed from: q0  reason: collision with root package name */
    private Drawable f16446q0;

    /* renamed from: r  reason: collision with root package name */
    private int f16447r;

    /* renamed from: r0  reason: collision with root package name */
    private int f16448r0;

    /* renamed from: s  reason: collision with root package name */
    private int f16449s;

    /* renamed from: s0  reason: collision with root package name */
    private Drawable f16450s0;

    /* renamed from: t  reason: collision with root package name */
    private int f16451t;

    /* renamed from: t0  reason: collision with root package name */
    private ColorStateList f16452t0;

    /* renamed from: u  reason: collision with root package name */
    private final u f16453u;

    /* renamed from: u0  reason: collision with root package name */
    private ColorStateList f16454u0;

    /* renamed from: v  reason: collision with root package name */
    boolean f16455v;

    /* renamed from: v0  reason: collision with root package name */
    private int f16456v0;

    /* renamed from: w  reason: collision with root package name */
    private int f16457w;

    /* renamed from: w0  reason: collision with root package name */
    private int f16458w0;

    /* renamed from: x  reason: collision with root package name */
    private boolean f16459x;

    /* renamed from: x0  reason: collision with root package name */
    private int f16460x0;

    /* renamed from: y  reason: collision with root package name */
    private e f16461y;

    /* renamed from: y0  reason: collision with root package name */
    private ColorStateList f16462y0;

    /* renamed from: z  reason: collision with root package name */
    private TextView f16463z;

    /* renamed from: z0  reason: collision with root package name */
    private int f16464z0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        int f16465d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ EditText f16466e;

        a(EditText editText) {
            this.f16466e = editText;
            this.f16465d = editText.getLineCount();
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            TextInputLayout textInputLayout = TextInputLayout.this;
            textInputLayout.t0(!textInputLayout.L0);
            TextInputLayout textInputLayout2 = TextInputLayout.this;
            if (textInputLayout2.f16455v) {
                textInputLayout2.j0(editable);
            }
            if (TextInputLayout.this.D) {
                TextInputLayout.this.x0(editable);
            }
            int lineCount = this.f16466e.getLineCount();
            int i10 = this.f16465d;
            if (lineCount != i10) {
                if (lineCount < i10) {
                    int A = h0.A(this.f16466e);
                    int i11 = TextInputLayout.this.E0;
                    if (A != i11) {
                        this.f16466e.setMinimumHeight(i11);
                    }
                }
                this.f16465d = lineCount;
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            TextInputLayout.this.f16434i.h();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements ValueAnimator.AnimatorUpdateListener {
        c() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            TextInputLayout.this.G0.c0(((Float) valueAnimator.getAnimatedValue()).floatValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends androidx.core.view.a {

        /* renamed from: a  reason: collision with root package name */
        private final TextInputLayout f16470a;

        public d(TextInputLayout textInputLayout) {
            this.f16470a = textInputLayout;
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            CharSequence charSequence;
            boolean z10;
            String str;
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            EditText editText = this.f16470a.getEditText();
            if (editText != null) {
                charSequence = editText.getText();
            } else {
                charSequence = null;
            }
            CharSequence hint = this.f16470a.getHint();
            CharSequence error = this.f16470a.getError();
            CharSequence placeholderText = this.f16470a.getPlaceholderText();
            int counterMaxLength = this.f16470a.getCounterMaxLength();
            CharSequence counterOverflowDescription = this.f16470a.getCounterOverflowDescription();
            boolean isEmpty = TextUtils.isEmpty(charSequence);
            boolean isEmpty2 = TextUtils.isEmpty(hint);
            boolean P = this.f16470a.P();
            boolean isEmpty3 = TextUtils.isEmpty(error);
            if (isEmpty3 && TextUtils.isEmpty(counterOverflowDescription)) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (!isEmpty2) {
                str = hint.toString();
            } else {
                str = "";
            }
            this.f16470a.f16429e.A(accessibilityNodeInfoCompat);
            if (!isEmpty) {
                accessibilityNodeInfoCompat.b1(charSequence);
            } else if (!TextUtils.isEmpty(str)) {
                accessibilityNodeInfoCompat.b1(str);
                if (!P && placeholderText != null) {
                    accessibilityNodeInfoCompat.b1(str + ", " + ((Object) placeholderText));
                }
            } else if (placeholderText != null) {
                accessibilityNodeInfoCompat.b1(placeholderText);
            }
            if (!TextUtils.isEmpty(str)) {
                if (Build.VERSION.SDK_INT >= 26) {
                    accessibilityNodeInfoCompat.I0(str);
                } else {
                    if (!isEmpty) {
                        str = ((Object) charSequence) + ", " + str;
                    }
                    accessibilityNodeInfoCompat.b1(str);
                }
                accessibilityNodeInfoCompat.X0(isEmpty);
            }
            accessibilityNodeInfoCompat.M0((charSequence == null || charSequence.length() != counterMaxLength) ? -1 : -1);
            if (z10) {
                if (isEmpty3) {
                    error = counterOverflowDescription;
                }
                accessibilityNodeInfoCompat.D0(error);
            }
            View t10 = this.f16470a.f16453u.t();
            if (t10 != null) {
                accessibilityNodeInfoCompat.K0(t10);
            }
            this.f16470a.f16434i.m().o(view, accessibilityNodeInfoCompat);
        }

        @Override // androidx.core.view.a
        public void onPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            super.onPopulateAccessibilityEvent(view, accessibilityEvent);
            this.f16470a.f16434i.m().p(view, accessibilityEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e {
        int a(Editable editable);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface f {
        void a(TextInputLayout textInputLayout);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class g extends u2.a {
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        CharSequence f16471i;

        /* renamed from: o  reason: collision with root package name */
        boolean f16472o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public g createFromParcel(Parcel parcel) {
                return new g(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public g createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new g(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public g[] newArray(int i10) {
                return new g[i10];
            }
        }

        g(Parcelable parcelable) {
            super(parcelable);
        }

        public String toString() {
            return "TextInputLayout.SavedState{" + Integer.toHexString(System.identityHashCode(this)) + " error=" + ((Object) this.f16471i) + "}";
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            TextUtils.writeToParcel(this.f16471i, parcel, i10);
            parcel.writeInt(this.f16472o ? 1 : 0);
        }

        g(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f16471i = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f16472o = parcel.readInt() == 1;
        }
    }

    public TextInputLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54361h0);
    }

    private androidx.transition.e A() {
        androidx.transition.e eVar = new androidx.transition.e();
        eVar.l0(jh.g.f(getContext(), yg.b.K, 87));
        eVar.n0(jh.g.g(getContext(), yg.b.Q, zg.a.f55674a));
        return eVar;
    }

    private boolean B() {
        if (this.N && !TextUtils.isEmpty(this.O) && (this.Q instanceof h)) {
            return true;
        }
        return false;
    }

    private void C() {
        Iterator it = this.f16444p0.iterator();
        while (it.hasNext()) {
            ((f) it.next()).a(this);
        }
    }

    private void D(Canvas canvas) {
        oh.g gVar;
        if (this.V != null && (gVar = this.U) != null) {
            gVar.draw(canvas);
            if (this.f16441o.isFocused()) {
                Rect bounds = this.V.getBounds();
                Rect bounds2 = this.U.getBounds();
                float x10 = this.G0.x();
                int centerX = bounds2.centerX();
                bounds.left = zg.a.c(centerX, bounds2.left, x10);
                bounds.right = zg.a.c(centerX, bounds2.right, x10);
                this.V.draw(canvas);
            }
        }
    }

    private void E(Canvas canvas) {
        if (this.N) {
            this.G0.l(canvas);
        }
    }

    private void F(boolean z10) {
        ValueAnimator valueAnimator = this.J0;
        if (valueAnimator != null && valueAnimator.isRunning()) {
            this.J0.cancel();
        }
        if (z10 && this.I0) {
            l(0.0f);
        } else {
            this.G0.c0(0.0f);
        }
        if (B() && ((h) this.Q).n0()) {
            y();
        }
        this.F0 = true;
        L();
        this.f16429e.l(true);
        this.f16434i.H(true);
    }

    private oh.g G(boolean z10) {
        float f10;
        float dimensionPixelOffset;
        ColorStateList colorStateList;
        float dimensionPixelOffset2 = getResources().getDimensionPixelOffset(yg.d.f54397c0);
        if (z10) {
            f10 = dimensionPixelOffset2;
        } else {
            f10 = 0.0f;
        }
        EditText editText = this.f16441o;
        if (editText instanceof MaterialAutoCompleteTextView) {
            dimensionPixelOffset = ((MaterialAutoCompleteTextView) editText).getPopupElevation();
        } else {
            dimensionPixelOffset = getResources().getDimensionPixelOffset(yg.d.f54417r);
        }
        int dimensionPixelOffset3 = getResources().getDimensionPixelOffset(yg.d.W);
        oh.k m10 = oh.k.a().B(f10).G(f10).s(dimensionPixelOffset2).w(dimensionPixelOffset2).m();
        EditText editText2 = this.f16441o;
        if (editText2 instanceof MaterialAutoCompleteTextView) {
            colorStateList = ((MaterialAutoCompleteTextView) editText2).getDropDownBackgroundTintList();
        } else {
            colorStateList = null;
        }
        oh.g m11 = oh.g.m(getContext(), dimensionPixelOffset, colorStateList);
        m11.setShapeAppearanceModel(m10);
        m11.Z(0, dimensionPixelOffset3, 0, dimensionPixelOffset3);
        return m11;
    }

    private static Drawable H(oh.g gVar, int i10, int i11, int[][] iArr) {
        return new RippleDrawable(new ColorStateList(iArr, new int[]{eh.a.j(i11, i10, 0.1f), i10}), gVar, gVar);
    }

    private int I(int i10, boolean z10) {
        int compoundPaddingLeft;
        if (!z10 && getPrefixText() != null) {
            compoundPaddingLeft = this.f16429e.c();
        } else if (z10 && getSuffixText() != null) {
            compoundPaddingLeft = this.f16434i.y();
        } else {
            compoundPaddingLeft = this.f16441o.getCompoundPaddingLeft();
        }
        return i10 + compoundPaddingLeft;
    }

    private int J(int i10, boolean z10) {
        int compoundPaddingRight;
        if (!z10 && getSuffixText() != null) {
            compoundPaddingRight = this.f16434i.y();
        } else if (z10 && getPrefixText() != null) {
            compoundPaddingRight = this.f16429e.c();
        } else {
            compoundPaddingRight = this.f16441o.getCompoundPaddingRight();
        }
        return i10 - compoundPaddingRight;
    }

    private static Drawable K(Context context, oh.g gVar, int i10, int[][] iArr) {
        int c10 = eh.a.c(context, yg.b.f54370o, "TextInputLayout");
        oh.g gVar2 = new oh.g(gVar.D());
        int j10 = eh.a.j(i10, c10, 0.1f);
        gVar2.X(new ColorStateList(iArr, new int[]{j10, 0}));
        gVar2.setTint(c10);
        ColorStateList colorStateList = new ColorStateList(iArr, new int[]{j10, c10});
        oh.g gVar3 = new oh.g(gVar.D());
        gVar3.setTint(-1);
        return new LayerDrawable(new Drawable[]{new RippleDrawable(colorStateList, gVar2, gVar3), gVar});
    }

    private void L() {
        TextView textView = this.E;
        if (textView != null && this.D) {
            textView.setText((CharSequence) null);
            androidx.transition.x.a(this.f16427d, this.I);
            this.E.setVisibility(4);
        }
    }

    private boolean Q() {
        if (!c0()) {
            if (this.f16463z == null || !this.f16459x) {
                return false;
            }
            return true;
        }
        return true;
    }

    private boolean S() {
        if (this.f16426c0 == 1 && this.f16441o.getMinLines() <= 1) {
            return true;
        }
        return false;
    }

    private void T() {
        p();
        q0();
        z0();
        g0();
        k();
        if (this.f16426c0 != 0) {
            s0();
        }
        a0();
    }

    private void U() {
        if (B()) {
            RectF rectF = this.f16438l0;
            this.G0.o(rectF, this.f16441o.getWidth(), this.f16441o.getGravity());
            if (rectF.width() > 0.0f && rectF.height() > 0.0f) {
                o(rectF);
                rectF.offset(-getPaddingLeft(), ((-getPaddingTop()) - (rectF.height() / 2.0f)) + this.f16430e0);
                ((h) this.Q).q0(rectF);
            }
        }
    }

    private void V() {
        if (B() && !this.F0) {
            y();
            U();
        }
    }

    private static void W(ViewGroup viewGroup, boolean z10) {
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = viewGroup.getChildAt(i10);
            childAt.setEnabled(z10);
            if (childAt instanceof ViewGroup) {
                W((ViewGroup) childAt, z10);
            }
        }
    }

    private void Y() {
        TextView textView = this.E;
        if (textView != null) {
            textView.setVisibility(8);
        }
    }

    private void a0() {
        EditText editText = this.f16441o;
        if (editText instanceof AutoCompleteTextView) {
            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) editText;
            if (autoCompleteTextView.getDropDownBackground() == null) {
                int i10 = this.f16426c0;
                if (i10 == 2) {
                    autoCompleteTextView.setDropDownBackgroundDrawable(getOrCreateOutlinedDropDownMenuBackground());
                } else if (i10 == 1) {
                    autoCompleteTextView.setDropDownBackgroundDrawable(getOrCreateFilledDropDownMenuBackground());
                }
            }
        }
    }

    public static /* synthetic */ int b(Editable editable) {
        if (editable != null) {
            return editable.length();
        }
        return 0;
    }

    private boolean d0() {
        if ((this.f16434i.G() || ((this.f16434i.A() && M()) || this.f16434i.w() != null)) && this.f16434i.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private boolean e0() {
        if ((getStartIconDrawable() != null || (getPrefixText() != null && getPrefixTextView().getVisibility() == 0)) && this.f16429e.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private void f0() {
        if (this.E != null && this.D && !TextUtils.isEmpty(this.C)) {
            this.E.setText(this.C);
            androidx.transition.x.a(this.f16427d, this.H);
            this.E.setVisibility(0);
            this.E.bringToFront();
            announceForAccessibility(this.C);
        }
    }

    private void g0() {
        if (this.f16426c0 == 1) {
            if (lh.c.h(getContext())) {
                this.f16428d0 = getResources().getDimensionPixelSize(yg.d.D);
            } else if (lh.c.g(getContext())) {
                this.f16428d0 = getResources().getDimensionPixelSize(yg.d.C);
            }
        }
    }

    private Drawable getEditTextBoxBackground() {
        EditText editText = this.f16441o;
        if ((editText instanceof AutoCompleteTextView) && !q.a(editText)) {
            int d10 = eh.a.d(this.f16441o, yg.b.f54362i);
            int i10 = this.f16426c0;
            if (i10 == 2) {
                return K(getContext(), this.Q, d10, O0);
            }
            if (i10 == 1) {
                return H(this.Q, this.f16435i0, d10, O0);
            }
            return null;
        }
        return this.Q;
    }

    private Drawable getOrCreateFilledDropDownMenuBackground() {
        if (this.S == null) {
            StateListDrawable stateListDrawable = new StateListDrawable();
            this.S = stateListDrawable;
            stateListDrawable.addState(new int[]{16842922}, getOrCreateOutlinedDropDownMenuBackground());
            this.S.addState(new int[0], G(false));
        }
        return this.S;
    }

    private Drawable getOrCreateOutlinedDropDownMenuBackground() {
        if (this.R == null) {
            this.R = G(true);
        }
        return this.R;
    }

    private void h0(Rect rect) {
        oh.g gVar = this.U;
        if (gVar != null) {
            int i10 = rect.bottom;
            gVar.setBounds(rect.left, i10 - this.f16431f0, rect.right, i10);
        }
        oh.g gVar2 = this.V;
        if (gVar2 != null) {
            int i11 = rect.bottom;
            gVar2.setBounds(rect.left, i11 - this.f16432g0, rect.right, i11);
        }
    }

    private void i0() {
        Editable text;
        if (this.f16463z != null) {
            EditText editText = this.f16441o;
            if (editText == null) {
                text = null;
            } else {
                text = editText.getText();
            }
            j0(text);
        }
    }

    private void j() {
        TextView textView = this.E;
        if (textView != null) {
            this.f16427d.addView(textView);
            this.E.setVisibility(0);
        }
    }

    private void k() {
        if (this.f16441o != null && this.f16426c0 == 1) {
            if (lh.c.h(getContext())) {
                EditText editText = this.f16441o;
                h0.F0(editText, h0.E(editText), getResources().getDimensionPixelSize(yg.d.B), h0.D(this.f16441o), getResources().getDimensionPixelSize(yg.d.A));
            } else if (lh.c.g(getContext())) {
                EditText editText2 = this.f16441o;
                h0.F0(editText2, h0.E(editText2), getResources().getDimensionPixelSize(yg.d.f54425z), h0.D(this.f16441o), getResources().getDimensionPixelSize(yg.d.f54424y));
            }
        }
    }

    private static void k0(Context context, TextView textView, int i10, int i11, boolean z10) {
        int i12;
        if (z10) {
            i12 = yg.i.f54493c;
        } else {
            i12 = yg.i.f54492b;
        }
        textView.setContentDescription(context.getString(i12, Integer.valueOf(i10), Integer.valueOf(i11)));
    }

    private void l0() {
        int i10;
        ColorStateList colorStateList;
        ColorStateList colorStateList2;
        TextView textView = this.f16463z;
        if (textView != null) {
            if (this.f16459x) {
                i10 = this.A;
            } else {
                i10 = this.B;
            }
            b0(textView, i10);
            if (!this.f16459x && (colorStateList2 = this.J) != null) {
                this.f16463z.setTextColor(colorStateList2);
            }
            if (this.f16459x && (colorStateList = this.K) != null) {
                this.f16463z.setTextColor(colorStateList);
            }
        }
    }

    private void m() {
        oh.g gVar = this.Q;
        if (gVar == null) {
            return;
        }
        oh.k D = gVar.D();
        oh.k kVar = this.W;
        if (D != kVar) {
            this.Q.setShapeAppearanceModel(kVar);
        }
        if (w()) {
            this.Q.d0(this.f16430e0, this.f16433h0);
        }
        int q10 = q();
        this.f16435i0 = q10;
        this.Q.X(ColorStateList.valueOf(q10));
        n();
        q0();
    }

    private void m0() {
        ColorStateList colorStateList;
        ColorStateList colorStateList2 = this.L;
        if (colorStateList2 == null) {
            colorStateList2 = eh.a.g(getContext(), yg.b.f54360h);
        }
        EditText editText = this.f16441o;
        if (editText != null && editText.getTextCursorDrawable() != null) {
            Drawable mutate = s1.a.r(this.f16441o.getTextCursorDrawable()).mutate();
            if (Q() && (colorStateList = this.M) != null) {
                colorStateList2 = colorStateList;
            }
            s1.a.o(mutate, colorStateList2);
        }
    }

    private void n() {
        ColorStateList valueOf;
        if (this.U != null && this.V != null) {
            if (x()) {
                oh.g gVar = this.U;
                if (this.f16441o.isFocused()) {
                    valueOf = ColorStateList.valueOf(this.f16456v0);
                } else {
                    valueOf = ColorStateList.valueOf(this.f16433h0);
                }
                gVar.X(valueOf);
                this.V.X(ColorStateList.valueOf(this.f16433h0));
            }
            invalidate();
        }
    }

    private void o(RectF rectF) {
        float f10 = rectF.left;
        int i10 = this.f16425b0;
        rectF.left = f10 - i10;
        rectF.right += i10;
    }

    private void p() {
        int i10 = this.f16426c0;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    if (this.N && !(this.Q instanceof h)) {
                        this.Q = h.m0(this.W);
                    } else {
                        this.Q = new oh.g(this.W);
                    }
                    this.U = null;
                    this.V = null;
                    return;
                }
                throw new IllegalArgumentException(this.f16426c0 + " is illegal; only @BoxBackgroundMode constants are supported.");
            }
            this.Q = new oh.g(this.W);
            this.U = new oh.g();
            this.V = new oh.g();
            return;
        }
        this.Q = null;
        this.U = null;
        this.V = null;
    }

    private void p0() {
        h0.r0(this.f16441o, getEditTextBoxBackground());
    }

    private int q() {
        int i10 = this.f16435i0;
        if (this.f16426c0 == 1) {
            return eh.a.i(eh.a.e(this, yg.b.f54370o, 0), this.f16435i0);
        }
        return i10;
    }

    private Rect r(Rect rect) {
        if (this.f16441o != null) {
            Rect rect2 = this.f16437k0;
            boolean h10 = com.google.android.material.internal.o.h(this);
            rect2.bottom = rect.bottom;
            int i10 = this.f16426c0;
            if (i10 != 1) {
                if (i10 != 2) {
                    rect2.left = I(rect.left, h10);
                    rect2.top = getPaddingTop();
                    rect2.right = J(rect.right, h10);
                    return rect2;
                }
                rect2.left = rect.left + this.f16441o.getPaddingLeft();
                rect2.top = rect.top - v();
                rect2.right = rect.right - this.f16441o.getPaddingRight();
                return rect2;
            }
            rect2.left = I(rect.left, h10);
            rect2.top = rect.top + this.f16428d0;
            rect2.right = J(rect.right, h10);
            return rect2;
        }
        throw new IllegalStateException();
    }

    private boolean r0() {
        int max;
        if (this.f16441o == null || this.f16441o.getMeasuredHeight() >= (max = Math.max(this.f16434i.getMeasuredHeight(), this.f16429e.getMeasuredHeight()))) {
            return false;
        }
        this.f16441o.setMinimumHeight(max);
        return true;
    }

    private int s(Rect rect, Rect rect2, float f10) {
        if (S()) {
            return (int) (rect2.top + f10);
        }
        return rect.bottom - this.f16441o.getCompoundPaddingBottom();
    }

    private void s0() {
        if (this.f16426c0 != 1) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f16427d.getLayoutParams();
            int v10 = v();
            if (v10 != layoutParams.topMargin) {
                layoutParams.topMargin = v10;
                this.f16427d.requestLayout();
            }
        }
    }

    private void setEditText(EditText editText) {
        if (this.f16441o == null) {
            if (getEndIconMode() != 3 && !(editText instanceof TextInputEditText)) {
                Log.i("TextInputLayout", "EditText added is not a TextInputEditText. Please switch to using that class instead.");
            }
            this.f16441o = editText;
            int i10 = this.f16445q;
            if (i10 != -1) {
                setMinEms(i10);
            } else {
                setMinWidth(this.f16449s);
            }
            int i11 = this.f16447r;
            if (i11 != -1) {
                setMaxEms(i11);
            } else {
                setMaxWidth(this.f16451t);
            }
            this.T = false;
            T();
            setTextInputAccessibilityDelegate(new d(this));
            this.G0.i0(this.f16441o.getTypeface());
            this.G0.a0(this.f16441o.getTextSize());
            int i12 = Build.VERSION.SDK_INT;
            this.G0.X(this.f16441o.getLetterSpacing());
            int gravity = this.f16441o.getGravity();
            this.G0.S((gravity & (-113)) | 48);
            this.G0.Z(gravity);
            this.E0 = h0.A(editText);
            this.f16441o.addTextChangedListener(new a(editText));
            if (this.f16452t0 == null) {
                this.f16452t0 = this.f16441o.getHintTextColors();
            }
            if (this.N) {
                if (TextUtils.isEmpty(this.O)) {
                    CharSequence hint = this.f16441o.getHint();
                    this.f16443p = hint;
                    setHint(hint);
                    this.f16441o.setHint((CharSequence) null);
                }
                this.P = true;
            }
            if (i12 >= 29) {
                m0();
            }
            if (this.f16463z != null) {
                j0(this.f16441o.getText());
            }
            o0();
            this.f16453u.f();
            this.f16429e.bringToFront();
            this.f16434i.bringToFront();
            C();
            this.f16434i.x0();
            if (!isEnabled()) {
                editText.setEnabled(false);
            }
            u0(false, true);
            return;
        }
        throw new IllegalArgumentException("We already have an EditText, can only have one");
    }

    private void setHintInternal(CharSequence charSequence) {
        if (!TextUtils.equals(charSequence, this.O)) {
            this.O = charSequence;
            this.G0.g0(charSequence);
            if (!this.F0) {
                U();
            }
        }
    }

    private void setPlaceholderTextEnabled(boolean z10) {
        if (this.D == z10) {
            return;
        }
        if (z10) {
            j();
        } else {
            Y();
            this.E = null;
        }
        this.D = z10;
    }

    private int t(Rect rect, float f10) {
        if (S()) {
            return (int) (rect.centerY() - (f10 / 2.0f));
        }
        return rect.top + this.f16441o.getCompoundPaddingTop();
    }

    private Rect u(Rect rect) {
        if (this.f16441o != null) {
            Rect rect2 = this.f16437k0;
            float w10 = this.G0.w();
            rect2.left = rect.left + this.f16441o.getCompoundPaddingLeft();
            rect2.top = t(rect, w10);
            rect2.right = rect.right - this.f16441o.getCompoundPaddingRight();
            rect2.bottom = s(rect, rect2, w10);
            return rect2;
        }
        throw new IllegalStateException();
    }

    private void u0(boolean z10, boolean z11) {
        boolean z12;
        ColorStateList colorStateList;
        TextView textView;
        int i10;
        boolean isEnabled = isEnabled();
        EditText editText = this.f16441o;
        boolean z13 = false;
        if (editText != null && !TextUtils.isEmpty(editText.getText())) {
            z12 = true;
        } else {
            z12 = false;
        }
        EditText editText2 = this.f16441o;
        if (editText2 != null && editText2.hasFocus()) {
            z13 = true;
        }
        ColorStateList colorStateList2 = this.f16452t0;
        if (colorStateList2 != null) {
            this.G0.M(colorStateList2);
        }
        if (!isEnabled) {
            ColorStateList colorStateList3 = this.f16452t0;
            if (colorStateList3 != null) {
                i10 = colorStateList3.getColorForState(new int[]{-16842910}, this.D0);
            } else {
                i10 = this.D0;
            }
            this.G0.M(ColorStateList.valueOf(i10));
        } else if (c0()) {
            this.G0.M(this.f16453u.r());
        } else if (this.f16459x && (textView = this.f16463z) != null) {
            this.G0.M(textView.getTextColors());
        } else if (z13 && (colorStateList = this.f16454u0) != null) {
            this.G0.R(colorStateList);
        }
        if (!z12 && this.H0 && (!isEnabled() || !z13)) {
            if (z11 || !this.F0) {
                F(z10);
            }
        } else if (!z11 && !this.F0) {
        } else {
            z(z10);
        }
    }

    private int v() {
        float q10;
        if (!this.N) {
            return 0;
        }
        int i10 = this.f16426c0;
        if (i10 != 0) {
            if (i10 != 2) {
                return 0;
            }
            q10 = this.G0.q() / 2.0f;
        } else {
            q10 = this.G0.q();
        }
        return (int) q10;
    }

    private void v0() {
        EditText editText;
        if (this.E != null && (editText = this.f16441o) != null) {
            this.E.setGravity(editText.getGravity());
            this.E.setPadding(this.f16441o.getCompoundPaddingLeft(), this.f16441o.getCompoundPaddingTop(), this.f16441o.getCompoundPaddingRight(), this.f16441o.getCompoundPaddingBottom());
        }
    }

    private boolean w() {
        if (this.f16426c0 == 2 && x()) {
            return true;
        }
        return false;
    }

    private void w0() {
        Editable text;
        EditText editText = this.f16441o;
        if (editText == null) {
            text = null;
        } else {
            text = editText.getText();
        }
        x0(text);
    }

    private boolean x() {
        if (this.f16430e0 > -1 && this.f16433h0 != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void x0(Editable editable) {
        if (this.f16461y.a(editable) == 0 && !this.F0) {
            f0();
        } else {
            L();
        }
    }

    private void y() {
        if (B()) {
            ((h) this.Q).o0();
        }
    }

    private void y0(boolean z10, boolean z11) {
        int defaultColor = this.f16462y0.getDefaultColor();
        int colorForState = this.f16462y0.getColorForState(new int[]{16843623, 16842910}, defaultColor);
        int colorForState2 = this.f16462y0.getColorForState(new int[]{16843518, 16842910}, defaultColor);
        if (z10) {
            this.f16433h0 = colorForState2;
        } else if (z11) {
            this.f16433h0 = colorForState;
        } else {
            this.f16433h0 = defaultColor;
        }
    }

    private void z(boolean z10) {
        ValueAnimator valueAnimator = this.J0;
        if (valueAnimator != null && valueAnimator.isRunning()) {
            this.J0.cancel();
        }
        if (z10 && this.I0) {
            l(1.0f);
        } else {
            this.G0.c0(1.0f);
        }
        this.F0 = false;
        if (B()) {
            U();
        }
        w0();
        this.f16429e.l(false);
        this.f16434i.H(false);
    }

    public boolean M() {
        return this.f16434i.F();
    }

    public boolean N() {
        return this.f16453u.A();
    }

    public boolean O() {
        return this.f16453u.B();
    }

    final boolean P() {
        return this.F0;
    }

    public boolean R() {
        return this.P;
    }

    public void X() {
        this.f16429e.m();
    }

    public void Z(float f10, float f11, float f12, float f13) {
        float f14;
        float f15;
        boolean h10 = com.google.android.material.internal.o.h(this);
        this.f16424a0 = h10;
        if (h10) {
            f14 = f11;
        } else {
            f14 = f10;
        }
        if (!h10) {
            f10 = f11;
        }
        if (h10) {
            f15 = f13;
        } else {
            f15 = f12;
        }
        if (!h10) {
            f12 = f13;
        }
        oh.g gVar = this.Q;
        if (gVar != null && gVar.G() == f14 && this.Q.H() == f10 && this.Q.s() == f15 && this.Q.t() == f12) {
            return;
        }
        this.W = this.W.v().B(f14).G(f10).s(f15).w(f12).m();
        m();
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (view instanceof EditText) {
            FrameLayout.LayoutParams layoutParams2 = new FrameLayout.LayoutParams(layoutParams);
            layoutParams2.gravity = (layoutParams2.gravity & (-113)) | 16;
            this.f16427d.addView(view, layoutParams2);
            this.f16427d.setLayoutParams(layoutParams);
            s0();
            setEditText((EditText) view);
            return;
        }
        super.addView(view, i10, layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(TextView textView, int i10) {
        try {
            androidx.core.widget.j.s(textView, i10);
            if (textView.getTextColors().getDefaultColor() != -65281) {
                return;
            }
        } catch (Exception unused) {
        }
        androidx.core.widget.j.s(textView, yg.j.f54515b);
        textView.setTextColor(androidx.core.content.a.c(getContext(), yg.c.f54382a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c0() {
        return this.f16453u.l();
    }

    @Override // android.view.ViewGroup, android.view.View
    public void dispatchProvideAutofillStructure(ViewStructure viewStructure, int i10) {
        EditText editText = this.f16441o;
        if (editText == null) {
            super.dispatchProvideAutofillStructure(viewStructure, i10);
            return;
        }
        if (this.f16443p != null) {
            boolean z10 = this.P;
            this.P = false;
            CharSequence hint = editText.getHint();
            this.f16441o.setHint(this.f16443p);
            try {
                super.dispatchProvideAutofillStructure(viewStructure, i10);
                return;
            } finally {
                this.f16441o.setHint(hint);
                this.P = z10;
            }
        }
        viewStructure.setAutofillId(getAutofillId());
        onProvideAutofillStructure(viewStructure, i10);
        onProvideAutofillVirtualStructure(viewStructure, i10);
        viewStructure.setChildCount(this.f16427d.getChildCount());
        for (int i11 = 0; i11 < this.f16427d.getChildCount(); i11++) {
            View childAt = this.f16427d.getChildAt(i11);
            ViewStructure newChild = viewStructure.newChild(i11);
            childAt.dispatchProvideAutofillStructure(newChild, i10);
            if (childAt == this.f16441o) {
                newChild.setHint(getHint());
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchRestoreInstanceState(SparseArray sparseArray) {
        this.L0 = true;
        super.dispatchRestoreInstanceState(sparseArray);
        this.L0 = false;
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        super.draw(canvas);
        E(canvas);
        D(canvas);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        boolean z10;
        if (this.K0) {
            return;
        }
        boolean z11 = true;
        this.K0 = true;
        super.drawableStateChanged();
        int[] drawableState = getDrawableState();
        com.google.android.material.internal.a aVar = this.G0;
        if (aVar != null) {
            z10 = aVar.f0(drawableState);
        } else {
            z10 = false;
        }
        if (this.f16441o != null) {
            if (!h0.S(this) || !isEnabled()) {
                z11 = false;
            }
            t0(z11);
        }
        o0();
        z0();
        if (z10) {
            invalidate();
        }
        this.K0 = false;
    }

    @Override // android.widget.LinearLayout, android.view.View
    public int getBaseline() {
        EditText editText = this.f16441o;
        if (editText != null) {
            return editText.getBaseline() + getPaddingTop() + v();
        }
        return super.getBaseline();
    }

    @NonNull
    oh.g getBoxBackground() {
        int i10 = this.f16426c0;
        if (i10 != 1 && i10 != 2) {
            throw new IllegalStateException();
        }
        return this.Q;
    }

    public int getBoxBackgroundColor() {
        return this.f16435i0;
    }

    public int getBoxBackgroundMode() {
        return this.f16426c0;
    }

    public int getBoxCollapsedPaddingTop() {
        return this.f16428d0;
    }

    public float getBoxCornerRadiusBottomEnd() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.j().a(this.f16438l0);
        }
        return this.W.l().a(this.f16438l0);
    }

    public float getBoxCornerRadiusBottomStart() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.l().a(this.f16438l0);
        }
        return this.W.j().a(this.f16438l0);
    }

    public float getBoxCornerRadiusTopEnd() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.r().a(this.f16438l0);
        }
        return this.W.t().a(this.f16438l0);
    }

    public float getBoxCornerRadiusTopStart() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.t().a(this.f16438l0);
        }
        return this.W.r().a(this.f16438l0);
    }

    public int getBoxStrokeColor() {
        return this.f16460x0;
    }

    public ColorStateList getBoxStrokeErrorColor() {
        return this.f16462y0;
    }

    public int getBoxStrokeWidth() {
        return this.f16431f0;
    }

    public int getBoxStrokeWidthFocused() {
        return this.f16432g0;
    }

    public int getCounterMaxLength() {
        return this.f16457w;
    }

    CharSequence getCounterOverflowDescription() {
        TextView textView;
        if (this.f16455v && this.f16459x && (textView = this.f16463z) != null) {
            return textView.getContentDescription();
        }
        return null;
    }

    public ColorStateList getCounterOverflowTextColor() {
        return this.K;
    }

    public ColorStateList getCounterTextColor() {
        return this.J;
    }

    public ColorStateList getCursorColor() {
        return this.L;
    }

    public ColorStateList getCursorErrorColor() {
        return this.M;
    }

    public ColorStateList getDefaultHintTextColor() {
        return this.f16452t0;
    }

    public EditText getEditText() {
        return this.f16441o;
    }

    public CharSequence getEndIconContentDescription() {
        return this.f16434i.l();
    }

    public Drawable getEndIconDrawable() {
        return this.f16434i.n();
    }

    public int getEndIconMinSize() {
        return this.f16434i.o();
    }

    public int getEndIconMode() {
        return this.f16434i.p();
    }

    @NonNull
    public ImageView.ScaleType getEndIconScaleType() {
        return this.f16434i.q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NonNull
    public CheckableImageButton getEndIconView() {
        return this.f16434i.r();
    }

    public CharSequence getError() {
        if (this.f16453u.A()) {
            return this.f16453u.p();
        }
        return null;
    }

    public int getErrorAccessibilityLiveRegion() {
        return this.f16453u.n();
    }

    public CharSequence getErrorContentDescription() {
        return this.f16453u.o();
    }

    public int getErrorCurrentTextColors() {
        return this.f16453u.q();
    }

    public Drawable getErrorIconDrawable() {
        return this.f16434i.s();
    }

    public CharSequence getHelperText() {
        if (this.f16453u.B()) {
            return this.f16453u.s();
        }
        return null;
    }

    public int getHelperTextCurrentTextColor() {
        return this.f16453u.u();
    }

    public CharSequence getHint() {
        if (this.N) {
            return this.O;
        }
        return null;
    }

    final float getHintCollapsedTextHeight() {
        return this.G0.q();
    }

    final int getHintCurrentCollapsedTextColor() {
        return this.G0.t();
    }

    public ColorStateList getHintTextColor() {
        return this.f16454u0;
    }

    @NonNull
    public e getLengthCounter() {
        return this.f16461y;
    }

    public int getMaxEms() {
        return this.f16447r;
    }

    public int getMaxWidth() {
        return this.f16451t;
    }

    public int getMinEms() {
        return this.f16445q;
    }

    public int getMinWidth() {
        return this.f16449s;
    }

    @Deprecated
    public CharSequence getPasswordVisibilityToggleContentDescription() {
        return this.f16434i.u();
    }

    @Deprecated
    public Drawable getPasswordVisibilityToggleDrawable() {
        return this.f16434i.v();
    }

    public CharSequence getPlaceholderText() {
        if (this.D) {
            return this.C;
        }
        return null;
    }

    public int getPlaceholderTextAppearance() {
        return this.G;
    }

    public ColorStateList getPlaceholderTextColor() {
        return this.F;
    }

    public CharSequence getPrefixText() {
        return this.f16429e.a();
    }

    public ColorStateList getPrefixTextColor() {
        return this.f16429e.b();
    }

    @NonNull
    public TextView getPrefixTextView() {
        return this.f16429e.d();
    }

    @NonNull
    public oh.k getShapeAppearanceModel() {
        return this.W;
    }

    public CharSequence getStartIconContentDescription() {
        return this.f16429e.e();
    }

    public Drawable getStartIconDrawable() {
        return this.f16429e.f();
    }

    public int getStartIconMinSize() {
        return this.f16429e.g();
    }

    @NonNull
    public ImageView.ScaleType getStartIconScaleType() {
        return this.f16429e.h();
    }

    public CharSequence getSuffixText() {
        return this.f16434i.w();
    }

    public ColorStateList getSuffixTextColor() {
        return this.f16434i.x();
    }

    @NonNull
    public TextView getSuffixTextView() {
        return this.f16434i.z();
    }

    public Typeface getTypeface() {
        return this.f16439m0;
    }

    public void i(f fVar) {
        this.f16444p0.add(fVar);
        if (this.f16441o != null) {
            fVar.a(this);
        }
    }

    void j0(Editable editable) {
        boolean z10;
        int a10 = this.f16461y.a(editable);
        boolean z11 = this.f16459x;
        int i10 = this.f16457w;
        if (i10 == -1) {
            this.f16463z.setText(String.valueOf(a10));
            this.f16463z.setContentDescription(null);
            this.f16459x = false;
        } else {
            if (a10 > i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f16459x = z10;
            k0(getContext(), this.f16463z, a10, this.f16457w, this.f16459x);
            if (z11 != this.f16459x) {
                l0();
            }
            this.f16463z.setText(a2.a.c().j(getContext().getString(yg.i.f54494d, Integer.valueOf(a10), Integer.valueOf(this.f16457w))));
        }
        if (this.f16441o != null && z11 != this.f16459x) {
            t0(false);
            z0();
            o0();
        }
    }

    void l(float f10) {
        if (this.G0.x() == f10) {
            return;
        }
        if (this.J0 == null) {
            ValueAnimator valueAnimator = new ValueAnimator();
            this.J0 = valueAnimator;
            valueAnimator.setInterpolator(jh.g.g(getContext(), yg.b.P, zg.a.f55675b));
            this.J0.setDuration(jh.g.f(getContext(), yg.b.I, 167));
            this.J0.addUpdateListener(new c());
        }
        this.J0.setFloatValues(this.G0.x(), f10);
        this.J0.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n0() {
        boolean z10;
        if (this.f16441o == null) {
            return false;
        }
        boolean z11 = true;
        if (e0()) {
            int measuredWidth = this.f16429e.getMeasuredWidth() - this.f16441o.getPaddingLeft();
            if (this.f16440n0 == null || this.f16442o0 != measuredWidth) {
                ColorDrawable colorDrawable = new ColorDrawable();
                this.f16440n0 = colorDrawable;
                this.f16442o0 = measuredWidth;
                colorDrawable.setBounds(0, 0, measuredWidth, 1);
            }
            Drawable[] d10 = androidx.core.widget.j.d(this.f16441o);
            Drawable drawable = d10[0];
            Drawable drawable2 = this.f16440n0;
            if (drawable != drawable2) {
                androidx.core.widget.j.m(this.f16441o, drawable2, d10[1], d10[2], d10[3]);
                z10 = true;
            }
            z10 = false;
        } else {
            if (this.f16440n0 != null) {
                Drawable[] d11 = androidx.core.widget.j.d(this.f16441o);
                androidx.core.widget.j.m(this.f16441o, null, d11[1], d11[2], d11[3]);
                this.f16440n0 = null;
                z10 = true;
            }
            z10 = false;
        }
        if (d0()) {
            int measuredWidth2 = this.f16434i.z().getMeasuredWidth() - this.f16441o.getPaddingRight();
            CheckableImageButton k10 = this.f16434i.k();
            if (k10 != null) {
                measuredWidth2 = measuredWidth2 + k10.getMeasuredWidth() + androidx.core.view.m.b((ViewGroup.MarginLayoutParams) k10.getLayoutParams());
            }
            Drawable[] d12 = androidx.core.widget.j.d(this.f16441o);
            Drawable drawable3 = this.f16446q0;
            if (drawable3 != null && this.f16448r0 != measuredWidth2) {
                this.f16448r0 = measuredWidth2;
                drawable3.setBounds(0, 0, measuredWidth2, 1);
                androidx.core.widget.j.m(this.f16441o, d12[0], d12[1], this.f16446q0, d12[3]);
                return true;
            }
            if (drawable3 == null) {
                ColorDrawable colorDrawable2 = new ColorDrawable();
                this.f16446q0 = colorDrawable2;
                this.f16448r0 = measuredWidth2;
                colorDrawable2.setBounds(0, 0, measuredWidth2, 1);
            }
            Drawable drawable4 = d12[2];
            Drawable drawable5 = this.f16446q0;
            if (drawable4 != drawable5) {
                this.f16450s0 = drawable4;
                androidx.core.widget.j.m(this.f16441o, d12[0], d12[1], drawable5, d12[3]);
                return true;
            }
        } else if (this.f16446q0 != null) {
            Drawable[] d13 = androidx.core.widget.j.d(this.f16441o);
            if (d13[2] == this.f16446q0) {
                androidx.core.widget.j.m(this.f16441o, d13[0], d13[1], this.f16450s0, d13[3]);
            } else {
                z11 = z10;
            }
            this.f16446q0 = null;
            return z11;
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0() {
        Drawable background;
        TextView textView;
        EditText editText = this.f16441o;
        if (editText != null && this.f16426c0 == 0 && (background = editText.getBackground()) != null) {
            if (e0.a(background)) {
                background = background.mutate();
            }
            if (c0()) {
                background.setColorFilter(androidx.appcompat.widget.j.e(getErrorCurrentTextColors(), PorterDuff.Mode.SRC_IN));
            } else if (this.f16459x && (textView = this.f16463z) != null) {
                background.setColorFilter(androidx.appcompat.widget.j.e(textView.getCurrentTextColor(), PorterDuff.Mode.SRC_IN));
            } else {
                s1.a.c(background);
                this.f16441o.refreshDrawableState();
            }
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        this.G0.H(configuration);
    }

    @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
    public void onGlobalLayout() {
        this.f16434i.getViewTreeObserver().removeOnGlobalLayoutListener(this);
        this.M0 = false;
        boolean r02 = r0();
        boolean n02 = n0();
        if (!r02 && !n02) {
            return;
        }
        this.f16441o.post(new Runnable() { // from class: com.google.android.material.textfield.z
            @Override // java.lang.Runnable
            public final void run() {
                TextInputLayout.this.f16441o.requestLayout();
            }
        });
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        EditText editText = this.f16441o;
        if (editText != null) {
            Rect rect = this.f16436j0;
            com.google.android.material.internal.b.a(this, editText, rect);
            h0(rect);
            if (this.N) {
                this.G0.a0(this.f16441o.getTextSize());
                int gravity = this.f16441o.getGravity();
                this.G0.S((gravity & (-113)) | 48);
                this.G0.Z(gravity);
                this.G0.O(r(rect));
                this.G0.W(u(rect));
                this.G0.J();
                if (B() && !this.F0) {
                    U();
                }
            }
        }
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (!this.M0) {
            this.f16434i.getViewTreeObserver().addOnGlobalLayoutListener(this);
            this.M0 = true;
        }
        v0();
        this.f16434i.x0();
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof g)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        g gVar = (g) parcelable;
        super.onRestoreInstanceState(gVar.a());
        setError(gVar.f16471i);
        if (gVar.f16472o) {
            post(new b());
        }
        requestLayout();
    }

    @Override // android.widget.LinearLayout, android.view.View
    public void onRtlPropertiesChanged(int i10) {
        super.onRtlPropertiesChanged(i10);
        boolean z10 = true;
        if (i10 != 1) {
            z10 = false;
        }
        if (z10 != this.f16424a0) {
            float a10 = this.W.r().a(this.f16438l0);
            float a11 = this.W.t().a(this.f16438l0);
            float a12 = this.W.j().a(this.f16438l0);
            float a13 = this.W.l().a(this.f16438l0);
            oh.d q10 = this.W.q();
            oh.d s10 = this.W.s();
            oh.k m10 = oh.k.a().A(s10).F(q10).r(this.W.k()).v(this.W.i()).B(a11).G(a10).s(a13).w(a12).m();
            this.f16424a0 = z10;
            setShapeAppearanceModel(m10);
        }
    }

    @Override // android.view.View
    public Parcelable onSaveInstanceState() {
        g gVar = new g(super.onSaveInstanceState());
        if (c0()) {
            gVar.f16471i = getError();
        }
        gVar.f16472o = this.f16434i.E();
        return gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0() {
        EditText editText = this.f16441o;
        if (editText != null && this.Q != null) {
            if ((this.T || editText.getBackground() == null) && this.f16426c0 != 0) {
                p0();
                this.T = true;
            }
        }
    }

    public void setBoxBackgroundColor(int i10) {
        if (this.f16435i0 != i10) {
            this.f16435i0 = i10;
            this.f16464z0 = i10;
            this.B0 = i10;
            this.C0 = i10;
            m();
        }
    }

    public void setBoxBackgroundColorResource(int i10) {
        setBoxBackgroundColor(androidx.core.content.a.c(getContext(), i10));
    }

    public void setBoxBackgroundColorStateList(@NonNull ColorStateList colorStateList) {
        int defaultColor = colorStateList.getDefaultColor();
        this.f16464z0 = defaultColor;
        this.f16435i0 = defaultColor;
        this.A0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
        this.B0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        this.C0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
        m();
    }

    public void setBoxBackgroundMode(int i10) {
        if (i10 != this.f16426c0) {
            this.f16426c0 = i10;
            if (this.f16441o != null) {
                T();
            }
        }
    }

    public void setBoxCollapsedPaddingTop(int i10) {
        this.f16428d0 = i10;
    }

    public void setBoxCornerFamily(int i10) {
        this.W = this.W.v().z(i10, this.W.r()).E(i10, this.W.t()).q(i10, this.W.j()).u(i10, this.W.l()).m();
        m();
    }

    public void setBoxStrokeColor(int i10) {
        if (this.f16460x0 != i10) {
            this.f16460x0 = i10;
            z0();
        }
    }

    public void setBoxStrokeColorStateList(@NonNull ColorStateList colorStateList) {
        if (colorStateList.isStateful()) {
            this.f16456v0 = colorStateList.getDefaultColor();
            this.D0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
            this.f16458w0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
            this.f16460x0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        } else if (this.f16460x0 != colorStateList.getDefaultColor()) {
            this.f16460x0 = colorStateList.getDefaultColor();
        }
        z0();
    }

    public void setBoxStrokeErrorColor(ColorStateList colorStateList) {
        if (this.f16462y0 != colorStateList) {
            this.f16462y0 = colorStateList;
            z0();
        }
    }

    public void setBoxStrokeWidth(int i10) {
        this.f16431f0 = i10;
        z0();
    }

    public void setBoxStrokeWidthFocused(int i10) {
        this.f16432g0 = i10;
        z0();
    }

    public void setBoxStrokeWidthFocusedResource(int i10) {
        setBoxStrokeWidthFocused(getResources().getDimensionPixelSize(i10));
    }

    public void setBoxStrokeWidthResource(int i10) {
        setBoxStrokeWidth(getResources().getDimensionPixelSize(i10));
    }

    public void setCounterEnabled(boolean z10) {
        if (this.f16455v != z10) {
            if (z10) {
                AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
                this.f16463z = appCompatTextView;
                appCompatTextView.setId(yg.f.O);
                Typeface typeface = this.f16439m0;
                if (typeface != null) {
                    this.f16463z.setTypeface(typeface);
                }
                this.f16463z.setMaxLines(1);
                this.f16453u.e(this.f16463z, 2);
                androidx.core.view.m.d((ViewGroup.MarginLayoutParams) this.f16463z.getLayoutParams(), getResources().getDimensionPixelOffset(yg.d.f54407h0));
                l0();
                i0();
            } else {
                this.f16453u.C(this.f16463z, 2);
                this.f16463z = null;
            }
            this.f16455v = z10;
        }
    }

    public void setCounterMaxLength(int i10) {
        if (this.f16457w != i10) {
            if (i10 > 0) {
                this.f16457w = i10;
            } else {
                this.f16457w = -1;
            }
            if (this.f16455v) {
                i0();
            }
        }
    }

    public void setCounterOverflowTextAppearance(int i10) {
        if (this.A != i10) {
            this.A = i10;
            l0();
        }
    }

    public void setCounterOverflowTextColor(ColorStateList colorStateList) {
        if (this.K != colorStateList) {
            this.K = colorStateList;
            l0();
        }
    }

    public void setCounterTextAppearance(int i10) {
        if (this.B != i10) {
            this.B = i10;
            l0();
        }
    }

    public void setCounterTextColor(ColorStateList colorStateList) {
        if (this.J != colorStateList) {
            this.J = colorStateList;
            l0();
        }
    }

    public void setCursorColor(ColorStateList colorStateList) {
        if (this.L != colorStateList) {
            this.L = colorStateList;
            m0();
        }
    }

    public void setCursorErrorColor(ColorStateList colorStateList) {
        if (this.M != colorStateList) {
            this.M = colorStateList;
            if (Q()) {
                m0();
            }
        }
    }

    public void setDefaultHintTextColor(ColorStateList colorStateList) {
        this.f16452t0 = colorStateList;
        this.f16454u0 = colorStateList;
        if (this.f16441o != null) {
            t0(false);
        }
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        W(this, z10);
        super.setEnabled(z10);
    }

    public void setEndIconActivated(boolean z10) {
        this.f16434i.N(z10);
    }

    public void setEndIconCheckable(boolean z10) {
        this.f16434i.O(z10);
    }

    public void setEndIconContentDescription(int i10) {
        this.f16434i.P(i10);
    }

    public void setEndIconDrawable(int i10) {
        this.f16434i.R(i10);
    }

    public void setEndIconMinSize(int i10) {
        this.f16434i.T(i10);
    }

    public void setEndIconMode(int i10) {
        this.f16434i.U(i10);
    }

    public void setEndIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16434i.V(onClickListener);
    }

    public void setEndIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16434i.W(onLongClickListener);
    }

    public void setEndIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f16434i.X(scaleType);
    }

    public void setEndIconTintList(ColorStateList colorStateList) {
        this.f16434i.Y(colorStateList);
    }

    public void setEndIconTintMode(PorterDuff.Mode mode) {
        this.f16434i.Z(mode);
    }

    public void setEndIconVisible(boolean z10) {
        this.f16434i.a0(z10);
    }

    public void setError(CharSequence charSequence) {
        if (!this.f16453u.A()) {
            if (TextUtils.isEmpty(charSequence)) {
                return;
            }
            setErrorEnabled(true);
        }
        if (!TextUtils.isEmpty(charSequence)) {
            this.f16453u.Q(charSequence);
        } else {
            this.f16453u.w();
        }
    }

    public void setErrorAccessibilityLiveRegion(int i10) {
        this.f16453u.E(i10);
    }

    public void setErrorContentDescription(CharSequence charSequence) {
        this.f16453u.F(charSequence);
    }

    public void setErrorEnabled(boolean z10) {
        this.f16453u.G(z10);
    }

    public void setErrorIconDrawable(int i10) {
        this.f16434i.b0(i10);
    }

    public void setErrorIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16434i.d0(onClickListener);
    }

    public void setErrorIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16434i.e0(onLongClickListener);
    }

    public void setErrorIconTintList(ColorStateList colorStateList) {
        this.f16434i.f0(colorStateList);
    }

    public void setErrorIconTintMode(PorterDuff.Mode mode) {
        this.f16434i.g0(mode);
    }

    public void setErrorTextAppearance(int i10) {
        this.f16453u.H(i10);
    }

    public void setErrorTextColor(ColorStateList colorStateList) {
        this.f16453u.I(colorStateList);
    }

    public void setExpandedHintEnabled(boolean z10) {
        if (this.H0 != z10) {
            this.H0 = z10;
            t0(false);
        }
    }

    public void setHelperText(CharSequence charSequence) {
        if (TextUtils.isEmpty(charSequence)) {
            if (O()) {
                setHelperTextEnabled(false);
                return;
            }
            return;
        }
        if (!O()) {
            setHelperTextEnabled(true);
        }
        this.f16453u.R(charSequence);
    }

    public void setHelperTextColor(ColorStateList colorStateList) {
        this.f16453u.L(colorStateList);
    }

    public void setHelperTextEnabled(boolean z10) {
        this.f16453u.K(z10);
    }

    public void setHelperTextTextAppearance(int i10) {
        this.f16453u.J(i10);
    }

    public void setHint(CharSequence charSequence) {
        if (this.N) {
            setHintInternal(charSequence);
            sendAccessibilityEvent(RecyclerView.ItemAnimator.FLAG_MOVED);
        }
    }

    public void setHintAnimationEnabled(boolean z10) {
        this.I0 = z10;
    }

    public void setHintEnabled(boolean z10) {
        if (z10 != this.N) {
            this.N = z10;
            if (!z10) {
                this.P = false;
                if (!TextUtils.isEmpty(this.O) && TextUtils.isEmpty(this.f16441o.getHint())) {
                    this.f16441o.setHint(this.O);
                }
                setHintInternal(null);
            } else {
                CharSequence hint = this.f16441o.getHint();
                if (!TextUtils.isEmpty(hint)) {
                    if (TextUtils.isEmpty(this.O)) {
                        setHint(hint);
                    }
                    this.f16441o.setHint((CharSequence) null);
                }
                this.P = true;
            }
            if (this.f16441o != null) {
                s0();
            }
        }
    }

    public void setHintTextAppearance(int i10) {
        this.G0.P(i10);
        this.f16454u0 = this.G0.p();
        if (this.f16441o != null) {
            t0(false);
            s0();
        }
    }

    public void setHintTextColor(ColorStateList colorStateList) {
        if (this.f16454u0 != colorStateList) {
            if (this.f16452t0 == null) {
                this.G0.R(colorStateList);
            }
            this.f16454u0 = colorStateList;
            if (this.f16441o != null) {
                t0(false);
            }
        }
    }

    public void setLengthCounter(@NonNull e eVar) {
        this.f16461y = eVar;
    }

    public void setMaxEms(int i10) {
        this.f16447r = i10;
        EditText editText = this.f16441o;
        if (editText != null && i10 != -1) {
            editText.setMaxEms(i10);
        }
    }

    public void setMaxWidth(int i10) {
        this.f16451t = i10;
        EditText editText = this.f16441o;
        if (editText != null && i10 != -1) {
            editText.setMaxWidth(i10);
        }
    }

    public void setMaxWidthResource(int i10) {
        setMaxWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    public void setMinEms(int i10) {
        this.f16445q = i10;
        EditText editText = this.f16441o;
        if (editText != null && i10 != -1) {
            editText.setMinEms(i10);
        }
    }

    public void setMinWidth(int i10) {
        this.f16449s = i10;
        EditText editText = this.f16441o;
        if (editText != null && i10 != -1) {
            editText.setMinWidth(i10);
        }
    }

    public void setMinWidthResource(int i10) {
        setMinWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(int i10) {
        this.f16434i.i0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(int i10) {
        this.f16434i.k0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleEnabled(boolean z10) {
        this.f16434i.m0(z10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintList(ColorStateList colorStateList) {
        this.f16434i.n0(colorStateList);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintMode(PorterDuff.Mode mode) {
        this.f16434i.o0(mode);
    }

    public void setPlaceholderText(CharSequence charSequence) {
        if (this.E == null) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
            this.E = appCompatTextView;
            appCompatTextView.setId(yg.f.R);
            h0.x0(this.E, 2);
            androidx.transition.e A = A();
            this.H = A;
            A.q0(67L);
            this.I = A();
            setPlaceholderTextAppearance(this.G);
            setPlaceholderTextColor(this.F);
        }
        if (TextUtils.isEmpty(charSequence)) {
            setPlaceholderTextEnabled(false);
        } else {
            if (!this.D) {
                setPlaceholderTextEnabled(true);
            }
            this.C = charSequence;
        }
        w0();
    }

    public void setPlaceholderTextAppearance(int i10) {
        this.G = i10;
        TextView textView = this.E;
        if (textView != null) {
            androidx.core.widget.j.s(textView, i10);
        }
    }

    public void setPlaceholderTextColor(ColorStateList colorStateList) {
        if (this.F != colorStateList) {
            this.F = colorStateList;
            TextView textView = this.E;
            if (textView != null && colorStateList != null) {
                textView.setTextColor(colorStateList);
            }
        }
    }

    public void setPrefixText(CharSequence charSequence) {
        this.f16429e.n(charSequence);
    }

    public void setPrefixTextAppearance(int i10) {
        this.f16429e.o(i10);
    }

    public void setPrefixTextColor(@NonNull ColorStateList colorStateList) {
        this.f16429e.p(colorStateList);
    }

    public void setShapeAppearanceModel(@NonNull oh.k kVar) {
        oh.g gVar = this.Q;
        if (gVar != null && gVar.D() != kVar) {
            this.W = kVar;
            m();
        }
    }

    public void setStartIconCheckable(boolean z10) {
        this.f16429e.q(z10);
    }

    public void setStartIconContentDescription(int i10) {
        setStartIconContentDescription(i10 != 0 ? getResources().getText(i10) : null);
    }

    public void setStartIconDrawable(int i10) {
        setStartIconDrawable(i10 != 0 ? g.a.b(getContext(), i10) : null);
    }

    public void setStartIconMinSize(int i10) {
        this.f16429e.t(i10);
    }

    public void setStartIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16429e.u(onClickListener);
    }

    public void setStartIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16429e.v(onLongClickListener);
    }

    public void setStartIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f16429e.w(scaleType);
    }

    public void setStartIconTintList(ColorStateList colorStateList) {
        this.f16429e.x(colorStateList);
    }

    public void setStartIconTintMode(PorterDuff.Mode mode) {
        this.f16429e.y(mode);
    }

    public void setStartIconVisible(boolean z10) {
        this.f16429e.z(z10);
    }

    public void setSuffixText(CharSequence charSequence) {
        this.f16434i.p0(charSequence);
    }

    public void setSuffixTextAppearance(int i10) {
        this.f16434i.q0(i10);
    }

    public void setSuffixTextColor(@NonNull ColorStateList colorStateList) {
        this.f16434i.r0(colorStateList);
    }

    public void setTextInputAccessibilityDelegate(d dVar) {
        EditText editText = this.f16441o;
        if (editText != null) {
            h0.n0(editText, dVar);
        }
    }

    public void setTypeface(Typeface typeface) {
        if (typeface != this.f16439m0) {
            this.f16439m0 = typeface;
            this.G0.i0(typeface);
            this.f16453u.N(typeface);
            TextView textView = this.f16463z;
            if (textView != null) {
                textView.setTypeface(typeface);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t0(boolean z10) {
        u0(z10, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z0() {
        boolean z10;
        TextView textView;
        EditText editText;
        EditText editText2;
        if (this.Q != null && this.f16426c0 != 0) {
            boolean z11 = false;
            if (!isFocused() && ((editText2 = this.f16441o) == null || !editText2.hasFocus())) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (isHovered() || ((editText = this.f16441o) != null && editText.isHovered())) {
                z11 = true;
            }
            if (!isEnabled()) {
                this.f16433h0 = this.D0;
            } else if (c0()) {
                if (this.f16462y0 != null) {
                    y0(z10, z11);
                } else {
                    this.f16433h0 = getErrorCurrentTextColors();
                }
            } else if (this.f16459x && (textView = this.f16463z) != null) {
                if (this.f16462y0 != null) {
                    y0(z10, z11);
                } else {
                    this.f16433h0 = textView.getCurrentTextColor();
                }
            } else if (z10) {
                this.f16433h0 = this.f16460x0;
            } else if (z11) {
                this.f16433h0 = this.f16458w0;
            } else {
                this.f16433h0 = this.f16456v0;
            }
            if (Build.VERSION.SDK_INT >= 29) {
                m0();
            }
            this.f16434i.I();
            X();
            if (this.f16426c0 == 2) {
                int i10 = this.f16430e0;
                if (z10 && isEnabled()) {
                    this.f16430e0 = this.f16432g0;
                } else {
                    this.f16430e0 = this.f16431f0;
                }
                if (this.f16430e0 != i10) {
                    V();
                }
            }
            if (this.f16426c0 == 1) {
                if (!isEnabled()) {
                    this.f16435i0 = this.A0;
                } else if (z11 && !z10) {
                    this.f16435i0 = this.C0;
                } else if (z10) {
                    this.f16435i0 = this.B0;
                } else {
                    this.f16435i0 = this.f16464z0;
                }
            }
            m();
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public TextInputLayout(android.content.Context r17, android.util.AttributeSet r18, int r19) {
        /*
            Method dump skipped, instructions count: 881
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.textfield.TextInputLayout.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setEndIconContentDescription(CharSequence charSequence) {
        this.f16434i.Q(charSequence);
    }

    public void setEndIconDrawable(Drawable drawable) {
        this.f16434i.S(drawable);
    }

    public void setErrorIconDrawable(Drawable drawable) {
        this.f16434i.c0(drawable);
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(CharSequence charSequence) {
        this.f16434i.j0(charSequence);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(Drawable drawable) {
        this.f16434i.l0(drawable);
    }

    public void setStartIconContentDescription(CharSequence charSequence) {
        this.f16429e.r(charSequence);
    }

    public void setStartIconDrawable(Drawable drawable) {
        this.f16429e.s(drawable);
    }

    public void setHint(int i10) {
        setHint(i10 != 0 ? getResources().getText(i10) : null);
    }
}
