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
    private static final int N0 = ah.j.f806j;
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
    private qh.g Q;
    private qh.g R;
    private StateListDrawable S;
    private boolean T;
    private qh.g U;
    private qh.g V;
    private qh.k W;

    /* renamed from: a0  reason: collision with root package name */
    private boolean f15395a0;

    /* renamed from: b0  reason: collision with root package name */
    private final int f15396b0;

    /* renamed from: c0  reason: collision with root package name */
    private int f15397c0;

    /* renamed from: d  reason: collision with root package name */
    private final FrameLayout f15398d;

    /* renamed from: d0  reason: collision with root package name */
    private int f15399d0;

    /* renamed from: e  reason: collision with root package name */
    private final y f15400e;

    /* renamed from: e0  reason: collision with root package name */
    private int f15401e0;

    /* renamed from: f0  reason: collision with root package name */
    private int f15402f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f15403g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f15404h0;

    /* renamed from: i  reason: collision with root package name */
    private final r f15405i;

    /* renamed from: i0  reason: collision with root package name */
    private int f15406i0;

    /* renamed from: j0  reason: collision with root package name */
    private final Rect f15407j0;

    /* renamed from: k0  reason: collision with root package name */
    private final Rect f15408k0;

    /* renamed from: l0  reason: collision with root package name */
    private final RectF f15409l0;

    /* renamed from: m0  reason: collision with root package name */
    private Typeface f15410m0;

    /* renamed from: n0  reason: collision with root package name */
    private Drawable f15411n0;

    /* renamed from: o  reason: collision with root package name */
    EditText f15412o;

    /* renamed from: o0  reason: collision with root package name */
    private int f15413o0;

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f15414p;

    /* renamed from: p0  reason: collision with root package name */
    private final LinkedHashSet f15415p0;

    /* renamed from: q  reason: collision with root package name */
    private int f15416q;

    /* renamed from: q0  reason: collision with root package name */
    private Drawable f15417q0;

    /* renamed from: r  reason: collision with root package name */
    private int f15418r;

    /* renamed from: r0  reason: collision with root package name */
    private int f15419r0;

    /* renamed from: s  reason: collision with root package name */
    private int f15420s;

    /* renamed from: s0  reason: collision with root package name */
    private Drawable f15421s0;

    /* renamed from: t  reason: collision with root package name */
    private int f15422t;

    /* renamed from: t0  reason: collision with root package name */
    private ColorStateList f15423t0;

    /* renamed from: u  reason: collision with root package name */
    private final u f15424u;

    /* renamed from: u0  reason: collision with root package name */
    private ColorStateList f15425u0;

    /* renamed from: v  reason: collision with root package name */
    boolean f15426v;

    /* renamed from: v0  reason: collision with root package name */
    private int f15427v0;

    /* renamed from: w  reason: collision with root package name */
    private int f15428w;

    /* renamed from: w0  reason: collision with root package name */
    private int f15429w0;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15430x;

    /* renamed from: x0  reason: collision with root package name */
    private int f15431x0;

    /* renamed from: y  reason: collision with root package name */
    private e f15432y;

    /* renamed from: y0  reason: collision with root package name */
    private ColorStateList f15433y0;

    /* renamed from: z  reason: collision with root package name */
    private TextView f15434z;

    /* renamed from: z0  reason: collision with root package name */
    private int f15435z0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        int f15436d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ EditText f15437e;

        a(EditText editText) {
            this.f15437e = editText;
            this.f15436d = editText.getLineCount();
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            TextInputLayout textInputLayout = TextInputLayout.this;
            textInputLayout.t0(!textInputLayout.L0);
            TextInputLayout textInputLayout2 = TextInputLayout.this;
            if (textInputLayout2.f15426v) {
                textInputLayout2.j0(editable);
            }
            if (TextInputLayout.this.D) {
                TextInputLayout.this.x0(editable);
            }
            int lineCount = this.f15437e.getLineCount();
            int i10 = this.f15436d;
            if (lineCount != i10) {
                if (lineCount < i10) {
                    int A = h0.A(this.f15437e);
                    int i11 = TextInputLayout.this.E0;
                    if (A != i11) {
                        this.f15437e.setMinimumHeight(i11);
                    }
                }
                this.f15436d = lineCount;
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
            TextInputLayout.this.f15405i.h();
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
        private final TextInputLayout f15441a;

        public d(TextInputLayout textInputLayout) {
            this.f15441a = textInputLayout;
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            CharSequence charSequence;
            boolean z10;
            String str;
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            EditText editText = this.f15441a.getEditText();
            if (editText != null) {
                charSequence = editText.getText();
            } else {
                charSequence = null;
            }
            CharSequence hint = this.f15441a.getHint();
            CharSequence error = this.f15441a.getError();
            CharSequence placeholderText = this.f15441a.getPlaceholderText();
            int counterMaxLength = this.f15441a.getCounterMaxLength();
            CharSequence counterOverflowDescription = this.f15441a.getCounterOverflowDescription();
            boolean isEmpty = TextUtils.isEmpty(charSequence);
            boolean isEmpty2 = TextUtils.isEmpty(hint);
            boolean P = this.f15441a.P();
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
            this.f15441a.f15400e.A(accessibilityNodeInfoCompat);
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
            View t10 = this.f15441a.f15424u.t();
            if (t10 != null) {
                accessibilityNodeInfoCompat.K0(t10);
            }
            this.f15441a.f15405i.m().o(view, accessibilityNodeInfoCompat);
        }

        @Override // androidx.core.view.a
        public void onPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            super.onPopulateAccessibilityEvent(view, accessibilityEvent);
            this.f15441a.f15405i.m().p(view, accessibilityEvent);
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
        CharSequence f15442i;

        /* renamed from: o  reason: collision with root package name */
        boolean f15443o;

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
            return "TextInputLayout.SavedState{" + Integer.toHexString(System.identityHashCode(this)) + " error=" + ((Object) this.f15442i) + "}";
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            TextUtils.writeToParcel(this.f15442i, parcel, i10);
            parcel.writeInt(this.f15443o ? 1 : 0);
        }

        g(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f15442i = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f15443o = parcel.readInt() == 1;
        }
    }

    public TextInputLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, ah.b.f644h0);
    }

    private androidx.transition.e A() {
        androidx.transition.e eVar = new androidx.transition.e();
        eVar.m0(lh.g.f(getContext(), ah.b.K, 87));
        eVar.o0(lh.g.g(getContext(), ah.b.Q, bh.a.f6754a));
        return eVar;
    }

    private boolean B() {
        if (this.N && !TextUtils.isEmpty(this.O) && (this.Q instanceof h)) {
            return true;
        }
        return false;
    }

    private void C() {
        Iterator it = this.f15415p0.iterator();
        while (it.hasNext()) {
            ((f) it.next()).a(this);
        }
    }

    private void D(Canvas canvas) {
        qh.g gVar;
        if (this.V != null && (gVar = this.U) != null) {
            gVar.draw(canvas);
            if (this.f15412o.isFocused()) {
                Rect bounds = this.V.getBounds();
                Rect bounds2 = this.U.getBounds();
                float x10 = this.G0.x();
                int centerX = bounds2.centerX();
                bounds.left = bh.a.c(centerX, bounds2.left, x10);
                bounds.right = bh.a.c(centerX, bounds2.right, x10);
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
        this.f15400e.l(true);
        this.f15405i.H(true);
    }

    private qh.g G(boolean z10) {
        float f10;
        float dimensionPixelOffset;
        ColorStateList colorStateList;
        float dimensionPixelOffset2 = getResources().getDimensionPixelOffset(ah.d.f680c0);
        if (z10) {
            f10 = dimensionPixelOffset2;
        } else {
            f10 = 0.0f;
        }
        EditText editText = this.f15412o;
        if (editText instanceof MaterialAutoCompleteTextView) {
            dimensionPixelOffset = ((MaterialAutoCompleteTextView) editText).getPopupElevation();
        } else {
            dimensionPixelOffset = getResources().getDimensionPixelOffset(ah.d.f700r);
        }
        int dimensionPixelOffset3 = getResources().getDimensionPixelOffset(ah.d.W);
        qh.k m10 = qh.k.a().B(f10).G(f10).s(dimensionPixelOffset2).w(dimensionPixelOffset2).m();
        EditText editText2 = this.f15412o;
        if (editText2 instanceof MaterialAutoCompleteTextView) {
            colorStateList = ((MaterialAutoCompleteTextView) editText2).getDropDownBackgroundTintList();
        } else {
            colorStateList = null;
        }
        qh.g m11 = qh.g.m(getContext(), dimensionPixelOffset, colorStateList);
        m11.setShapeAppearanceModel(m10);
        m11.Z(0, dimensionPixelOffset3, 0, dimensionPixelOffset3);
        return m11;
    }

    private static Drawable H(qh.g gVar, int i10, int i11, int[][] iArr) {
        return new RippleDrawable(new ColorStateList(iArr, new int[]{gh.a.j(i11, i10, 0.1f), i10}), gVar, gVar);
    }

    private int I(int i10, boolean z10) {
        int compoundPaddingLeft;
        if (!z10 && getPrefixText() != null) {
            compoundPaddingLeft = this.f15400e.c();
        } else if (z10 && getSuffixText() != null) {
            compoundPaddingLeft = this.f15405i.y();
        } else {
            compoundPaddingLeft = this.f15412o.getCompoundPaddingLeft();
        }
        return i10 + compoundPaddingLeft;
    }

    private int J(int i10, boolean z10) {
        int compoundPaddingRight;
        if (!z10 && getSuffixText() != null) {
            compoundPaddingRight = this.f15405i.y();
        } else if (z10 && getPrefixText() != null) {
            compoundPaddingRight = this.f15400e.c();
        } else {
            compoundPaddingRight = this.f15412o.getCompoundPaddingRight();
        }
        return i10 - compoundPaddingRight;
    }

    private static Drawable K(Context context, qh.g gVar, int i10, int[][] iArr) {
        int c10 = gh.a.c(context, ah.b.f653o, "TextInputLayout");
        qh.g gVar2 = new qh.g(gVar.D());
        int j10 = gh.a.j(i10, c10, 0.1f);
        gVar2.X(new ColorStateList(iArr, new int[]{j10, 0}));
        gVar2.setTint(c10);
        ColorStateList colorStateList = new ColorStateList(iArr, new int[]{j10, c10});
        qh.g gVar3 = new qh.g(gVar.D());
        gVar3.setTint(-1);
        return new LayerDrawable(new Drawable[]{new RippleDrawable(colorStateList, gVar2, gVar3), gVar});
    }

    private void L() {
        TextView textView = this.E;
        if (textView != null && this.D) {
            textView.setText((CharSequence) null);
            androidx.transition.x.a(this.f15398d, this.I);
            this.E.setVisibility(4);
        }
    }

    private boolean Q() {
        if (!c0()) {
            if (this.f15434z == null || !this.f15430x) {
                return false;
            }
            return true;
        }
        return true;
    }

    private boolean S() {
        if (this.f15397c0 == 1 && this.f15412o.getMinLines() <= 1) {
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
        if (this.f15397c0 != 0) {
            s0();
        }
        a0();
    }

    private void U() {
        if (B()) {
            RectF rectF = this.f15409l0;
            this.G0.o(rectF, this.f15412o.getWidth(), this.f15412o.getGravity());
            if (rectF.width() > 0.0f && rectF.height() > 0.0f) {
                o(rectF);
                rectF.offset(-getPaddingLeft(), ((-getPaddingTop()) - (rectF.height() / 2.0f)) + this.f15401e0);
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
        EditText editText = this.f15412o;
        if (editText instanceof AutoCompleteTextView) {
            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) editText;
            if (autoCompleteTextView.getDropDownBackground() == null) {
                int i10 = this.f15397c0;
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
        if ((this.f15405i.G() || ((this.f15405i.A() && M()) || this.f15405i.w() != null)) && this.f15405i.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private boolean e0() {
        if ((getStartIconDrawable() != null || (getPrefixText() != null && getPrefixTextView().getVisibility() == 0)) && this.f15400e.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private void f0() {
        if (this.E != null && this.D && !TextUtils.isEmpty(this.C)) {
            this.E.setText(this.C);
            androidx.transition.x.a(this.f15398d, this.H);
            this.E.setVisibility(0);
            this.E.bringToFront();
            announceForAccessibility(this.C);
        }
    }

    private void g0() {
        if (this.f15397c0 == 1) {
            if (nh.c.h(getContext())) {
                this.f15399d0 = getResources().getDimensionPixelSize(ah.d.D);
            } else if (nh.c.g(getContext())) {
                this.f15399d0 = getResources().getDimensionPixelSize(ah.d.C);
            }
        }
    }

    private Drawable getEditTextBoxBackground() {
        EditText editText = this.f15412o;
        if ((editText instanceof AutoCompleteTextView) && !q.a(editText)) {
            int d10 = gh.a.d(this.f15412o, ah.b.f645i);
            int i10 = this.f15397c0;
            if (i10 == 2) {
                return K(getContext(), this.Q, d10, O0);
            }
            if (i10 == 1) {
                return H(this.Q, this.f15406i0, d10, O0);
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
        qh.g gVar = this.U;
        if (gVar != null) {
            int i10 = rect.bottom;
            gVar.setBounds(rect.left, i10 - this.f15402f0, rect.right, i10);
        }
        qh.g gVar2 = this.V;
        if (gVar2 != null) {
            int i11 = rect.bottom;
            gVar2.setBounds(rect.left, i11 - this.f15403g0, rect.right, i11);
        }
    }

    private void i0() {
        Editable text;
        if (this.f15434z != null) {
            EditText editText = this.f15412o;
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
            this.f15398d.addView(textView);
            this.E.setVisibility(0);
        }
    }

    private void k() {
        if (this.f15412o != null && this.f15397c0 == 1) {
            if (nh.c.h(getContext())) {
                EditText editText = this.f15412o;
                h0.F0(editText, h0.E(editText), getResources().getDimensionPixelSize(ah.d.B), h0.D(this.f15412o), getResources().getDimensionPixelSize(ah.d.A));
            } else if (nh.c.g(getContext())) {
                EditText editText2 = this.f15412o;
                h0.F0(editText2, h0.E(editText2), getResources().getDimensionPixelSize(ah.d.f708z), h0.D(this.f15412o), getResources().getDimensionPixelSize(ah.d.f707y));
            }
        }
    }

    private static void k0(Context context, TextView textView, int i10, int i11, boolean z10) {
        int i12;
        if (z10) {
            i12 = ah.i.f776c;
        } else {
            i12 = ah.i.f775b;
        }
        textView.setContentDescription(context.getString(i12, Integer.valueOf(i10), Integer.valueOf(i11)));
    }

    private void l0() {
        int i10;
        ColorStateList colorStateList;
        ColorStateList colorStateList2;
        TextView textView = this.f15434z;
        if (textView != null) {
            if (this.f15430x) {
                i10 = this.A;
            } else {
                i10 = this.B;
            }
            b0(textView, i10);
            if (!this.f15430x && (colorStateList2 = this.J) != null) {
                this.f15434z.setTextColor(colorStateList2);
            }
            if (this.f15430x && (colorStateList = this.K) != null) {
                this.f15434z.setTextColor(colorStateList);
            }
        }
    }

    private void m() {
        qh.g gVar = this.Q;
        if (gVar == null) {
            return;
        }
        qh.k D = gVar.D();
        qh.k kVar = this.W;
        if (D != kVar) {
            this.Q.setShapeAppearanceModel(kVar);
        }
        if (w()) {
            this.Q.d0(this.f15401e0, this.f15404h0);
        }
        int q10 = q();
        this.f15406i0 = q10;
        this.Q.X(ColorStateList.valueOf(q10));
        n();
        q0();
    }

    private void m0() {
        ColorStateList colorStateList;
        ColorStateList colorStateList2 = this.L;
        if (colorStateList2 == null) {
            colorStateList2 = gh.a.g(getContext(), ah.b.f643h);
        }
        EditText editText = this.f15412o;
        if (editText != null && editText.getTextCursorDrawable() != null) {
            Drawable mutate = s1.a.r(this.f15412o.getTextCursorDrawable()).mutate();
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
                qh.g gVar = this.U;
                if (this.f15412o.isFocused()) {
                    valueOf = ColorStateList.valueOf(this.f15427v0);
                } else {
                    valueOf = ColorStateList.valueOf(this.f15404h0);
                }
                gVar.X(valueOf);
                this.V.X(ColorStateList.valueOf(this.f15404h0));
            }
            invalidate();
        }
    }

    private void o(RectF rectF) {
        float f10 = rectF.left;
        int i10 = this.f15396b0;
        rectF.left = f10 - i10;
        rectF.right += i10;
    }

    private void p() {
        int i10 = this.f15397c0;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    if (this.N && !(this.Q instanceof h)) {
                        this.Q = h.m0(this.W);
                    } else {
                        this.Q = new qh.g(this.W);
                    }
                    this.U = null;
                    this.V = null;
                    return;
                }
                throw new IllegalArgumentException(this.f15397c0 + " is illegal; only @BoxBackgroundMode constants are supported.");
            }
            this.Q = new qh.g(this.W);
            this.U = new qh.g();
            this.V = new qh.g();
            return;
        }
        this.Q = null;
        this.U = null;
        this.V = null;
    }

    private void p0() {
        h0.r0(this.f15412o, getEditTextBoxBackground());
    }

    private int q() {
        int i10 = this.f15406i0;
        if (this.f15397c0 == 1) {
            return gh.a.i(gh.a.e(this, ah.b.f653o, 0), this.f15406i0);
        }
        return i10;
    }

    private Rect r(Rect rect) {
        if (this.f15412o != null) {
            Rect rect2 = this.f15408k0;
            boolean h10 = com.google.android.material.internal.o.h(this);
            rect2.bottom = rect.bottom;
            int i10 = this.f15397c0;
            if (i10 != 1) {
                if (i10 != 2) {
                    rect2.left = I(rect.left, h10);
                    rect2.top = getPaddingTop();
                    rect2.right = J(rect.right, h10);
                    return rect2;
                }
                rect2.left = rect.left + this.f15412o.getPaddingLeft();
                rect2.top = rect.top - v();
                rect2.right = rect.right - this.f15412o.getPaddingRight();
                return rect2;
            }
            rect2.left = I(rect.left, h10);
            rect2.top = rect.top + this.f15399d0;
            rect2.right = J(rect.right, h10);
            return rect2;
        }
        throw new IllegalStateException();
    }

    private boolean r0() {
        int max;
        if (this.f15412o == null || this.f15412o.getMeasuredHeight() >= (max = Math.max(this.f15405i.getMeasuredHeight(), this.f15400e.getMeasuredHeight()))) {
            return false;
        }
        this.f15412o.setMinimumHeight(max);
        return true;
    }

    private int s(Rect rect, Rect rect2, float f10) {
        if (S()) {
            return (int) (rect2.top + f10);
        }
        return rect.bottom - this.f15412o.getCompoundPaddingBottom();
    }

    private void s0() {
        if (this.f15397c0 != 1) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f15398d.getLayoutParams();
            int v10 = v();
            if (v10 != layoutParams.topMargin) {
                layoutParams.topMargin = v10;
                this.f15398d.requestLayout();
            }
        }
    }

    private void setEditText(EditText editText) {
        if (this.f15412o == null) {
            if (getEndIconMode() != 3 && !(editText instanceof TextInputEditText)) {
                Log.i("TextInputLayout", "EditText added is not a TextInputEditText. Please switch to using that class instead.");
            }
            this.f15412o = editText;
            int i10 = this.f15416q;
            if (i10 != -1) {
                setMinEms(i10);
            } else {
                setMinWidth(this.f15420s);
            }
            int i11 = this.f15418r;
            if (i11 != -1) {
                setMaxEms(i11);
            } else {
                setMaxWidth(this.f15422t);
            }
            this.T = false;
            T();
            setTextInputAccessibilityDelegate(new d(this));
            this.G0.i0(this.f15412o.getTypeface());
            this.G0.a0(this.f15412o.getTextSize());
            int i12 = Build.VERSION.SDK_INT;
            this.G0.X(this.f15412o.getLetterSpacing());
            int gravity = this.f15412o.getGravity();
            this.G0.S((gravity & (-113)) | 48);
            this.G0.Z(gravity);
            this.E0 = h0.A(editText);
            this.f15412o.addTextChangedListener(new a(editText));
            if (this.f15423t0 == null) {
                this.f15423t0 = this.f15412o.getHintTextColors();
            }
            if (this.N) {
                if (TextUtils.isEmpty(this.O)) {
                    CharSequence hint = this.f15412o.getHint();
                    this.f15414p = hint;
                    setHint(hint);
                    this.f15412o.setHint((CharSequence) null);
                }
                this.P = true;
            }
            if (i12 >= 29) {
                m0();
            }
            if (this.f15434z != null) {
                j0(this.f15412o.getText());
            }
            o0();
            this.f15424u.f();
            this.f15400e.bringToFront();
            this.f15405i.bringToFront();
            C();
            this.f15405i.x0();
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
        return rect.top + this.f15412o.getCompoundPaddingTop();
    }

    private Rect u(Rect rect) {
        if (this.f15412o != null) {
            Rect rect2 = this.f15408k0;
            float w10 = this.G0.w();
            rect2.left = rect.left + this.f15412o.getCompoundPaddingLeft();
            rect2.top = t(rect, w10);
            rect2.right = rect.right - this.f15412o.getCompoundPaddingRight();
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
        EditText editText = this.f15412o;
        boolean z13 = false;
        if (editText != null && !TextUtils.isEmpty(editText.getText())) {
            z12 = true;
        } else {
            z12 = false;
        }
        EditText editText2 = this.f15412o;
        if (editText2 != null && editText2.hasFocus()) {
            z13 = true;
        }
        ColorStateList colorStateList2 = this.f15423t0;
        if (colorStateList2 != null) {
            this.G0.M(colorStateList2);
        }
        if (!isEnabled) {
            ColorStateList colorStateList3 = this.f15423t0;
            if (colorStateList3 != null) {
                i10 = colorStateList3.getColorForState(new int[]{-16842910}, this.D0);
            } else {
                i10 = this.D0;
            }
            this.G0.M(ColorStateList.valueOf(i10));
        } else if (c0()) {
            this.G0.M(this.f15424u.r());
        } else if (this.f15430x && (textView = this.f15434z) != null) {
            this.G0.M(textView.getTextColors());
        } else if (z13 && (colorStateList = this.f15425u0) != null) {
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
        int i10 = this.f15397c0;
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
        if (this.E != null && (editText = this.f15412o) != null) {
            this.E.setGravity(editText.getGravity());
            this.E.setPadding(this.f15412o.getCompoundPaddingLeft(), this.f15412o.getCompoundPaddingTop(), this.f15412o.getCompoundPaddingRight(), this.f15412o.getCompoundPaddingBottom());
        }
    }

    private boolean w() {
        if (this.f15397c0 == 2 && x()) {
            return true;
        }
        return false;
    }

    private void w0() {
        Editable text;
        EditText editText = this.f15412o;
        if (editText == null) {
            text = null;
        } else {
            text = editText.getText();
        }
        x0(text);
    }

    private boolean x() {
        if (this.f15401e0 > -1 && this.f15404h0 != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void x0(Editable editable) {
        if (this.f15432y.a(editable) == 0 && !this.F0) {
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
        int defaultColor = this.f15433y0.getDefaultColor();
        int colorForState = this.f15433y0.getColorForState(new int[]{16843623, 16842910}, defaultColor);
        int colorForState2 = this.f15433y0.getColorForState(new int[]{16843518, 16842910}, defaultColor);
        if (z10) {
            this.f15404h0 = colorForState2;
        } else if (z11) {
            this.f15404h0 = colorForState;
        } else {
            this.f15404h0 = defaultColor;
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
        this.f15400e.l(false);
        this.f15405i.H(false);
    }

    public boolean M() {
        return this.f15405i.F();
    }

    public boolean N() {
        return this.f15424u.A();
    }

    public boolean O() {
        return this.f15424u.B();
    }

    final boolean P() {
        return this.F0;
    }

    public boolean R() {
        return this.P;
    }

    public void X() {
        this.f15400e.m();
    }

    public void Z(float f10, float f11, float f12, float f13) {
        float f14;
        float f15;
        boolean h10 = com.google.android.material.internal.o.h(this);
        this.f15395a0 = h10;
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
        qh.g gVar = this.Q;
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
            this.f15398d.addView(view, layoutParams2);
            this.f15398d.setLayoutParams(layoutParams);
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
        androidx.core.widget.j.s(textView, ah.j.f798b);
        textView.setTextColor(androidx.core.content.a.c(getContext(), ah.c.f665a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c0() {
        return this.f15424u.l();
    }

    @Override // android.view.ViewGroup, android.view.View
    public void dispatchProvideAutofillStructure(ViewStructure viewStructure, int i10) {
        EditText editText = this.f15412o;
        if (editText == null) {
            super.dispatchProvideAutofillStructure(viewStructure, i10);
            return;
        }
        if (this.f15414p != null) {
            boolean z10 = this.P;
            this.P = false;
            CharSequence hint = editText.getHint();
            this.f15412o.setHint(this.f15414p);
            try {
                super.dispatchProvideAutofillStructure(viewStructure, i10);
                return;
            } finally {
                this.f15412o.setHint(hint);
                this.P = z10;
            }
        }
        viewStructure.setAutofillId(getAutofillId());
        onProvideAutofillStructure(viewStructure, i10);
        onProvideAutofillVirtualStructure(viewStructure, i10);
        viewStructure.setChildCount(this.f15398d.getChildCount());
        for (int i11 = 0; i11 < this.f15398d.getChildCount(); i11++) {
            View childAt = this.f15398d.getChildAt(i11);
            ViewStructure newChild = viewStructure.newChild(i11);
            childAt.dispatchProvideAutofillStructure(newChild, i10);
            if (childAt == this.f15412o) {
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
        if (this.f15412o != null) {
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
        EditText editText = this.f15412o;
        if (editText != null) {
            return editText.getBaseline() + getPaddingTop() + v();
        }
        return super.getBaseline();
    }

    @NonNull
    qh.g getBoxBackground() {
        int i10 = this.f15397c0;
        if (i10 != 1 && i10 != 2) {
            throw new IllegalStateException();
        }
        return this.Q;
    }

    public int getBoxBackgroundColor() {
        return this.f15406i0;
    }

    public int getBoxBackgroundMode() {
        return this.f15397c0;
    }

    public int getBoxCollapsedPaddingTop() {
        return this.f15399d0;
    }

    public float getBoxCornerRadiusBottomEnd() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.j().a(this.f15409l0);
        }
        return this.W.l().a(this.f15409l0);
    }

    public float getBoxCornerRadiusBottomStart() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.l().a(this.f15409l0);
        }
        return this.W.j().a(this.f15409l0);
    }

    public float getBoxCornerRadiusTopEnd() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.r().a(this.f15409l0);
        }
        return this.W.t().a(this.f15409l0);
    }

    public float getBoxCornerRadiusTopStart() {
        if (com.google.android.material.internal.o.h(this)) {
            return this.W.t().a(this.f15409l0);
        }
        return this.W.r().a(this.f15409l0);
    }

    public int getBoxStrokeColor() {
        return this.f15431x0;
    }

    public ColorStateList getBoxStrokeErrorColor() {
        return this.f15433y0;
    }

    public int getBoxStrokeWidth() {
        return this.f15402f0;
    }

    public int getBoxStrokeWidthFocused() {
        return this.f15403g0;
    }

    public int getCounterMaxLength() {
        return this.f15428w;
    }

    CharSequence getCounterOverflowDescription() {
        TextView textView;
        if (this.f15426v && this.f15430x && (textView = this.f15434z) != null) {
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
        return this.f15423t0;
    }

    public EditText getEditText() {
        return this.f15412o;
    }

    public CharSequence getEndIconContentDescription() {
        return this.f15405i.l();
    }

    public Drawable getEndIconDrawable() {
        return this.f15405i.n();
    }

    public int getEndIconMinSize() {
        return this.f15405i.o();
    }

    public int getEndIconMode() {
        return this.f15405i.p();
    }

    @NonNull
    public ImageView.ScaleType getEndIconScaleType() {
        return this.f15405i.q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NonNull
    public CheckableImageButton getEndIconView() {
        return this.f15405i.r();
    }

    public CharSequence getError() {
        if (this.f15424u.A()) {
            return this.f15424u.p();
        }
        return null;
    }

    public int getErrorAccessibilityLiveRegion() {
        return this.f15424u.n();
    }

    public CharSequence getErrorContentDescription() {
        return this.f15424u.o();
    }

    public int getErrorCurrentTextColors() {
        return this.f15424u.q();
    }

    public Drawable getErrorIconDrawable() {
        return this.f15405i.s();
    }

    public CharSequence getHelperText() {
        if (this.f15424u.B()) {
            return this.f15424u.s();
        }
        return null;
    }

    public int getHelperTextCurrentTextColor() {
        return this.f15424u.u();
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
        return this.f15425u0;
    }

    @NonNull
    public e getLengthCounter() {
        return this.f15432y;
    }

    public int getMaxEms() {
        return this.f15418r;
    }

    public int getMaxWidth() {
        return this.f15422t;
    }

    public int getMinEms() {
        return this.f15416q;
    }

    public int getMinWidth() {
        return this.f15420s;
    }

    @Deprecated
    public CharSequence getPasswordVisibilityToggleContentDescription() {
        return this.f15405i.u();
    }

    @Deprecated
    public Drawable getPasswordVisibilityToggleDrawable() {
        return this.f15405i.v();
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
        return this.f15400e.a();
    }

    public ColorStateList getPrefixTextColor() {
        return this.f15400e.b();
    }

    @NonNull
    public TextView getPrefixTextView() {
        return this.f15400e.d();
    }

    @NonNull
    public qh.k getShapeAppearanceModel() {
        return this.W;
    }

    public CharSequence getStartIconContentDescription() {
        return this.f15400e.e();
    }

    public Drawable getStartIconDrawable() {
        return this.f15400e.f();
    }

    public int getStartIconMinSize() {
        return this.f15400e.g();
    }

    @NonNull
    public ImageView.ScaleType getStartIconScaleType() {
        return this.f15400e.h();
    }

    public CharSequence getSuffixText() {
        return this.f15405i.w();
    }

    public ColorStateList getSuffixTextColor() {
        return this.f15405i.x();
    }

    @NonNull
    public TextView getSuffixTextView() {
        return this.f15405i.z();
    }

    public Typeface getTypeface() {
        return this.f15410m0;
    }

    public void i(f fVar) {
        this.f15415p0.add(fVar);
        if (this.f15412o != null) {
            fVar.a(this);
        }
    }

    void j0(Editable editable) {
        boolean z10;
        int a10 = this.f15432y.a(editable);
        boolean z11 = this.f15430x;
        int i10 = this.f15428w;
        if (i10 == -1) {
            this.f15434z.setText(String.valueOf(a10));
            this.f15434z.setContentDescription(null);
            this.f15430x = false;
        } else {
            if (a10 > i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f15430x = z10;
            k0(getContext(), this.f15434z, a10, this.f15428w, this.f15430x);
            if (z11 != this.f15430x) {
                l0();
            }
            this.f15434z.setText(a2.a.c().j(getContext().getString(ah.i.f777d, Integer.valueOf(a10), Integer.valueOf(this.f15428w))));
        }
        if (this.f15412o != null && z11 != this.f15430x) {
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
            valueAnimator.setInterpolator(lh.g.g(getContext(), ah.b.P, bh.a.f6755b));
            this.J0.setDuration(lh.g.f(getContext(), ah.b.I, 167));
            this.J0.addUpdateListener(new c());
        }
        this.J0.setFloatValues(this.G0.x(), f10);
        this.J0.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n0() {
        boolean z10;
        if (this.f15412o == null) {
            return false;
        }
        boolean z11 = true;
        if (e0()) {
            int measuredWidth = this.f15400e.getMeasuredWidth() - this.f15412o.getPaddingLeft();
            if (this.f15411n0 == null || this.f15413o0 != measuredWidth) {
                ColorDrawable colorDrawable = new ColorDrawable();
                this.f15411n0 = colorDrawable;
                this.f15413o0 = measuredWidth;
                colorDrawable.setBounds(0, 0, measuredWidth, 1);
            }
            Drawable[] d10 = androidx.core.widget.j.d(this.f15412o);
            Drawable drawable = d10[0];
            Drawable drawable2 = this.f15411n0;
            if (drawable != drawable2) {
                androidx.core.widget.j.m(this.f15412o, drawable2, d10[1], d10[2], d10[3]);
                z10 = true;
            }
            z10 = false;
        } else {
            if (this.f15411n0 != null) {
                Drawable[] d11 = androidx.core.widget.j.d(this.f15412o);
                androidx.core.widget.j.m(this.f15412o, null, d11[1], d11[2], d11[3]);
                this.f15411n0 = null;
                z10 = true;
            }
            z10 = false;
        }
        if (d0()) {
            int measuredWidth2 = this.f15405i.z().getMeasuredWidth() - this.f15412o.getPaddingRight();
            CheckableImageButton k10 = this.f15405i.k();
            if (k10 != null) {
                measuredWidth2 = measuredWidth2 + k10.getMeasuredWidth() + androidx.core.view.m.b((ViewGroup.MarginLayoutParams) k10.getLayoutParams());
            }
            Drawable[] d12 = androidx.core.widget.j.d(this.f15412o);
            Drawable drawable3 = this.f15417q0;
            if (drawable3 != null && this.f15419r0 != measuredWidth2) {
                this.f15419r0 = measuredWidth2;
                drawable3.setBounds(0, 0, measuredWidth2, 1);
                androidx.core.widget.j.m(this.f15412o, d12[0], d12[1], this.f15417q0, d12[3]);
                return true;
            }
            if (drawable3 == null) {
                ColorDrawable colorDrawable2 = new ColorDrawable();
                this.f15417q0 = colorDrawable2;
                this.f15419r0 = measuredWidth2;
                colorDrawable2.setBounds(0, 0, measuredWidth2, 1);
            }
            Drawable drawable4 = d12[2];
            Drawable drawable5 = this.f15417q0;
            if (drawable4 != drawable5) {
                this.f15421s0 = drawable4;
                androidx.core.widget.j.m(this.f15412o, d12[0], d12[1], drawable5, d12[3]);
                return true;
            }
        } else if (this.f15417q0 != null) {
            Drawable[] d13 = androidx.core.widget.j.d(this.f15412o);
            if (d13[2] == this.f15417q0) {
                androidx.core.widget.j.m(this.f15412o, d13[0], d13[1], this.f15421s0, d13[3]);
            } else {
                z11 = z10;
            }
            this.f15417q0 = null;
            return z11;
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0() {
        Drawable background;
        TextView textView;
        EditText editText = this.f15412o;
        if (editText != null && this.f15397c0 == 0 && (background = editText.getBackground()) != null) {
            if (e0.a(background)) {
                background = background.mutate();
            }
            if (c0()) {
                background.setColorFilter(androidx.appcompat.widget.j.e(getErrorCurrentTextColors(), PorterDuff.Mode.SRC_IN));
            } else if (this.f15430x && (textView = this.f15434z) != null) {
                background.setColorFilter(androidx.appcompat.widget.j.e(textView.getCurrentTextColor(), PorterDuff.Mode.SRC_IN));
            } else {
                s1.a.c(background);
                this.f15412o.refreshDrawableState();
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
        this.f15405i.getViewTreeObserver().removeOnGlobalLayoutListener(this);
        this.M0 = false;
        boolean r02 = r0();
        boolean n02 = n0();
        if (!r02 && !n02) {
            return;
        }
        this.f15412o.post(new Runnable() { // from class: com.google.android.material.textfield.z
            @Override // java.lang.Runnable
            public final void run() {
                TextInputLayout.this.f15412o.requestLayout();
            }
        });
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        EditText editText = this.f15412o;
        if (editText != null) {
            Rect rect = this.f15407j0;
            com.google.android.material.internal.b.a(this, editText, rect);
            h0(rect);
            if (this.N) {
                this.G0.a0(this.f15412o.getTextSize());
                int gravity = this.f15412o.getGravity();
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
            this.f15405i.getViewTreeObserver().addOnGlobalLayoutListener(this);
            this.M0 = true;
        }
        v0();
        this.f15405i.x0();
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof g)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        g gVar = (g) parcelable;
        super.onRestoreInstanceState(gVar.a());
        setError(gVar.f15442i);
        if (gVar.f15443o) {
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
        if (z10 != this.f15395a0) {
            float a10 = this.W.r().a(this.f15409l0);
            float a11 = this.W.t().a(this.f15409l0);
            float a12 = this.W.j().a(this.f15409l0);
            float a13 = this.W.l().a(this.f15409l0);
            qh.d q10 = this.W.q();
            qh.d s10 = this.W.s();
            qh.k m10 = qh.k.a().A(s10).F(q10).r(this.W.k()).v(this.W.i()).B(a11).G(a10).s(a13).w(a12).m();
            this.f15395a0 = z10;
            setShapeAppearanceModel(m10);
        }
    }

    @Override // android.view.View
    public Parcelable onSaveInstanceState() {
        g gVar = new g(super.onSaveInstanceState());
        if (c0()) {
            gVar.f15442i = getError();
        }
        gVar.f15443o = this.f15405i.E();
        return gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0() {
        EditText editText = this.f15412o;
        if (editText != null && this.Q != null) {
            if ((this.T || editText.getBackground() == null) && this.f15397c0 != 0) {
                p0();
                this.T = true;
            }
        }
    }

    public void setBoxBackgroundColor(int i10) {
        if (this.f15406i0 != i10) {
            this.f15406i0 = i10;
            this.f15435z0 = i10;
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
        this.f15435z0 = defaultColor;
        this.f15406i0 = defaultColor;
        this.A0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
        this.B0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        this.C0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
        m();
    }

    public void setBoxBackgroundMode(int i10) {
        if (i10 != this.f15397c0) {
            this.f15397c0 = i10;
            if (this.f15412o != null) {
                T();
            }
        }
    }

    public void setBoxCollapsedPaddingTop(int i10) {
        this.f15399d0 = i10;
    }

    public void setBoxCornerFamily(int i10) {
        this.W = this.W.v().z(i10, this.W.r()).E(i10, this.W.t()).q(i10, this.W.j()).u(i10, this.W.l()).m();
        m();
    }

    public void setBoxStrokeColor(int i10) {
        if (this.f15431x0 != i10) {
            this.f15431x0 = i10;
            z0();
        }
    }

    public void setBoxStrokeColorStateList(@NonNull ColorStateList colorStateList) {
        if (colorStateList.isStateful()) {
            this.f15427v0 = colorStateList.getDefaultColor();
            this.D0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
            this.f15429w0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
            this.f15431x0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        } else if (this.f15431x0 != colorStateList.getDefaultColor()) {
            this.f15431x0 = colorStateList.getDefaultColor();
        }
        z0();
    }

    public void setBoxStrokeErrorColor(ColorStateList colorStateList) {
        if (this.f15433y0 != colorStateList) {
            this.f15433y0 = colorStateList;
            z0();
        }
    }

    public void setBoxStrokeWidth(int i10) {
        this.f15402f0 = i10;
        z0();
    }

    public void setBoxStrokeWidthFocused(int i10) {
        this.f15403g0 = i10;
        z0();
    }

    public void setBoxStrokeWidthFocusedResource(int i10) {
        setBoxStrokeWidthFocused(getResources().getDimensionPixelSize(i10));
    }

    public void setBoxStrokeWidthResource(int i10) {
        setBoxStrokeWidth(getResources().getDimensionPixelSize(i10));
    }

    public void setCounterEnabled(boolean z10) {
        if (this.f15426v != z10) {
            if (z10) {
                AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
                this.f15434z = appCompatTextView;
                appCompatTextView.setId(ah.f.O);
                Typeface typeface = this.f15410m0;
                if (typeface != null) {
                    this.f15434z.setTypeface(typeface);
                }
                this.f15434z.setMaxLines(1);
                this.f15424u.e(this.f15434z, 2);
                androidx.core.view.m.d((ViewGroup.MarginLayoutParams) this.f15434z.getLayoutParams(), getResources().getDimensionPixelOffset(ah.d.f690h0));
                l0();
                i0();
            } else {
                this.f15424u.C(this.f15434z, 2);
                this.f15434z = null;
            }
            this.f15426v = z10;
        }
    }

    public void setCounterMaxLength(int i10) {
        if (this.f15428w != i10) {
            if (i10 > 0) {
                this.f15428w = i10;
            } else {
                this.f15428w = -1;
            }
            if (this.f15426v) {
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
        this.f15423t0 = colorStateList;
        this.f15425u0 = colorStateList;
        if (this.f15412o != null) {
            t0(false);
        }
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        W(this, z10);
        super.setEnabled(z10);
    }

    public void setEndIconActivated(boolean z10) {
        this.f15405i.N(z10);
    }

    public void setEndIconCheckable(boolean z10) {
        this.f15405i.O(z10);
    }

    public void setEndIconContentDescription(int i10) {
        this.f15405i.P(i10);
    }

    public void setEndIconDrawable(int i10) {
        this.f15405i.R(i10);
    }

    public void setEndIconMinSize(int i10) {
        this.f15405i.T(i10);
    }

    public void setEndIconMode(int i10) {
        this.f15405i.U(i10);
    }

    public void setEndIconOnClickListener(View.OnClickListener onClickListener) {
        this.f15405i.V(onClickListener);
    }

    public void setEndIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f15405i.W(onLongClickListener);
    }

    public void setEndIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f15405i.X(scaleType);
    }

    public void setEndIconTintList(ColorStateList colorStateList) {
        this.f15405i.Y(colorStateList);
    }

    public void setEndIconTintMode(PorterDuff.Mode mode) {
        this.f15405i.Z(mode);
    }

    public void setEndIconVisible(boolean z10) {
        this.f15405i.a0(z10);
    }

    public void setError(CharSequence charSequence) {
        if (!this.f15424u.A()) {
            if (TextUtils.isEmpty(charSequence)) {
                return;
            }
            setErrorEnabled(true);
        }
        if (!TextUtils.isEmpty(charSequence)) {
            this.f15424u.Q(charSequence);
        } else {
            this.f15424u.w();
        }
    }

    public void setErrorAccessibilityLiveRegion(int i10) {
        this.f15424u.E(i10);
    }

    public void setErrorContentDescription(CharSequence charSequence) {
        this.f15424u.F(charSequence);
    }

    public void setErrorEnabled(boolean z10) {
        this.f15424u.G(z10);
    }

    public void setErrorIconDrawable(int i10) {
        this.f15405i.b0(i10);
    }

    public void setErrorIconOnClickListener(View.OnClickListener onClickListener) {
        this.f15405i.d0(onClickListener);
    }

    public void setErrorIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f15405i.e0(onLongClickListener);
    }

    public void setErrorIconTintList(ColorStateList colorStateList) {
        this.f15405i.f0(colorStateList);
    }

    public void setErrorIconTintMode(PorterDuff.Mode mode) {
        this.f15405i.g0(mode);
    }

    public void setErrorTextAppearance(int i10) {
        this.f15424u.H(i10);
    }

    public void setErrorTextColor(ColorStateList colorStateList) {
        this.f15424u.I(colorStateList);
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
        this.f15424u.R(charSequence);
    }

    public void setHelperTextColor(ColorStateList colorStateList) {
        this.f15424u.L(colorStateList);
    }

    public void setHelperTextEnabled(boolean z10) {
        this.f15424u.K(z10);
    }

    public void setHelperTextTextAppearance(int i10) {
        this.f15424u.J(i10);
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
                if (!TextUtils.isEmpty(this.O) && TextUtils.isEmpty(this.f15412o.getHint())) {
                    this.f15412o.setHint(this.O);
                }
                setHintInternal(null);
            } else {
                CharSequence hint = this.f15412o.getHint();
                if (!TextUtils.isEmpty(hint)) {
                    if (TextUtils.isEmpty(this.O)) {
                        setHint(hint);
                    }
                    this.f15412o.setHint((CharSequence) null);
                }
                this.P = true;
            }
            if (this.f15412o != null) {
                s0();
            }
        }
    }

    public void setHintTextAppearance(int i10) {
        this.G0.P(i10);
        this.f15425u0 = this.G0.p();
        if (this.f15412o != null) {
            t0(false);
            s0();
        }
    }

    public void setHintTextColor(ColorStateList colorStateList) {
        if (this.f15425u0 != colorStateList) {
            if (this.f15423t0 == null) {
                this.G0.R(colorStateList);
            }
            this.f15425u0 = colorStateList;
            if (this.f15412o != null) {
                t0(false);
            }
        }
    }

    public void setLengthCounter(@NonNull e eVar) {
        this.f15432y = eVar;
    }

    public void setMaxEms(int i10) {
        this.f15418r = i10;
        EditText editText = this.f15412o;
        if (editText != null && i10 != -1) {
            editText.setMaxEms(i10);
        }
    }

    public void setMaxWidth(int i10) {
        this.f15422t = i10;
        EditText editText = this.f15412o;
        if (editText != null && i10 != -1) {
            editText.setMaxWidth(i10);
        }
    }

    public void setMaxWidthResource(int i10) {
        setMaxWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    public void setMinEms(int i10) {
        this.f15416q = i10;
        EditText editText = this.f15412o;
        if (editText != null && i10 != -1) {
            editText.setMinEms(i10);
        }
    }

    public void setMinWidth(int i10) {
        this.f15420s = i10;
        EditText editText = this.f15412o;
        if (editText != null && i10 != -1) {
            editText.setMinWidth(i10);
        }
    }

    public void setMinWidthResource(int i10) {
        setMinWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(int i10) {
        this.f15405i.i0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(int i10) {
        this.f15405i.k0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleEnabled(boolean z10) {
        this.f15405i.m0(z10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintList(ColorStateList colorStateList) {
        this.f15405i.n0(colorStateList);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintMode(PorterDuff.Mode mode) {
        this.f15405i.o0(mode);
    }

    public void setPlaceholderText(CharSequence charSequence) {
        if (this.E == null) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
            this.E = appCompatTextView;
            appCompatTextView.setId(ah.f.R);
            h0.x0(this.E, 2);
            androidx.transition.e A = A();
            this.H = A;
            A.r0(67L);
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
        this.f15400e.n(charSequence);
    }

    public void setPrefixTextAppearance(int i10) {
        this.f15400e.o(i10);
    }

    public void setPrefixTextColor(@NonNull ColorStateList colorStateList) {
        this.f15400e.p(colorStateList);
    }

    public void setShapeAppearanceModel(@NonNull qh.k kVar) {
        qh.g gVar = this.Q;
        if (gVar != null && gVar.D() != kVar) {
            this.W = kVar;
            m();
        }
    }

    public void setStartIconCheckable(boolean z10) {
        this.f15400e.q(z10);
    }

    public void setStartIconContentDescription(int i10) {
        setStartIconContentDescription(i10 != 0 ? getResources().getText(i10) : null);
    }

    public void setStartIconDrawable(int i10) {
        setStartIconDrawable(i10 != 0 ? g.a.b(getContext(), i10) : null);
    }

    public void setStartIconMinSize(int i10) {
        this.f15400e.t(i10);
    }

    public void setStartIconOnClickListener(View.OnClickListener onClickListener) {
        this.f15400e.u(onClickListener);
    }

    public void setStartIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f15400e.v(onLongClickListener);
    }

    public void setStartIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f15400e.w(scaleType);
    }

    public void setStartIconTintList(ColorStateList colorStateList) {
        this.f15400e.x(colorStateList);
    }

    public void setStartIconTintMode(PorterDuff.Mode mode) {
        this.f15400e.y(mode);
    }

    public void setStartIconVisible(boolean z10) {
        this.f15400e.z(z10);
    }

    public void setSuffixText(CharSequence charSequence) {
        this.f15405i.p0(charSequence);
    }

    public void setSuffixTextAppearance(int i10) {
        this.f15405i.q0(i10);
    }

    public void setSuffixTextColor(@NonNull ColorStateList colorStateList) {
        this.f15405i.r0(colorStateList);
    }

    public void setTextInputAccessibilityDelegate(d dVar) {
        EditText editText = this.f15412o;
        if (editText != null) {
            h0.n0(editText, dVar);
        }
    }

    public void setTypeface(Typeface typeface) {
        if (typeface != this.f15410m0) {
            this.f15410m0 = typeface;
            this.G0.i0(typeface);
            this.f15424u.N(typeface);
            TextView textView = this.f15434z;
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
        if (this.Q != null && this.f15397c0 != 0) {
            boolean z11 = false;
            if (!isFocused() && ((editText2 = this.f15412o) == null || !editText2.hasFocus())) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (isHovered() || ((editText = this.f15412o) != null && editText.isHovered())) {
                z11 = true;
            }
            if (!isEnabled()) {
                this.f15404h0 = this.D0;
            } else if (c0()) {
                if (this.f15433y0 != null) {
                    y0(z10, z11);
                } else {
                    this.f15404h0 = getErrorCurrentTextColors();
                }
            } else if (this.f15430x && (textView = this.f15434z) != null) {
                if (this.f15433y0 != null) {
                    y0(z10, z11);
                } else {
                    this.f15404h0 = textView.getCurrentTextColor();
                }
            } else if (z10) {
                this.f15404h0 = this.f15431x0;
            } else if (z11) {
                this.f15404h0 = this.f15429w0;
            } else {
                this.f15404h0 = this.f15427v0;
            }
            if (Build.VERSION.SDK_INT >= 29) {
                m0();
            }
            this.f15405i.I();
            X();
            if (this.f15397c0 == 2) {
                int i10 = this.f15401e0;
                if (z10 && isEnabled()) {
                    this.f15401e0 = this.f15403g0;
                } else {
                    this.f15401e0 = this.f15402f0;
                }
                if (this.f15401e0 != i10) {
                    V();
                }
            }
            if (this.f15397c0 == 1) {
                if (!isEnabled()) {
                    this.f15406i0 = this.A0;
                } else if (z11 && !z10) {
                    this.f15406i0 = this.C0;
                } else if (z10) {
                    this.f15406i0 = this.B0;
                } else {
                    this.f15406i0 = this.f15435z0;
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
        this.f15405i.Q(charSequence);
    }

    public void setEndIconDrawable(Drawable drawable) {
        this.f15405i.S(drawable);
    }

    public void setErrorIconDrawable(Drawable drawable) {
        this.f15405i.c0(drawable);
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(CharSequence charSequence) {
        this.f15405i.j0(charSequence);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(Drawable drawable) {
        this.f15405i.l0(drawable);
    }

    public void setStartIconContentDescription(CharSequence charSequence) {
        this.f15400e.r(charSequence);
    }

    public void setStartIconDrawable(Drawable drawable) {
        this.f15400e.s(drawable);
    }

    public void setHint(int i10) {
        setHint(i10 != 0 ? getResources().getText(i10) : null);
    }
}
