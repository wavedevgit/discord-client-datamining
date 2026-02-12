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
import android.text.StaticLayout;
import android.text.TextPaint;
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
import androidx.core.view.i0;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.internal.CheckableImageButton;
import java.util.Iterator;
import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextInputLayout extends LinearLayout implements ViewTreeObserver.OnGlobalLayoutListener {
    private static final int O0 = bh.k.f6939n;
    private static final int[][] P0 = {new int[]{16842919}, new int[0]};
    private TextView A;
    private int A0;
    private int B;
    private int B0;
    private int C;
    private int C0;
    private CharSequence D;
    private int D0;
    private boolean E;
    private int E0;
    private TextView F;
    int F0;
    private ColorStateList G;
    private boolean G0;
    private int H;
    final com.google.android.material.internal.a H0;
    private androidx.transition.e I;
    private boolean I0;
    private androidx.transition.e J;
    private boolean J0;
    private ColorStateList K;
    private ValueAnimator K0;
    private ColorStateList L;
    private boolean L0;
    private ColorStateList M;
    private boolean M0;
    private ColorStateList N;
    private boolean N0;
    private boolean O;
    private CharSequence P;
    private boolean Q;
    private th.h R;
    private th.h S;
    private StateListDrawable T;
    private boolean U;
    private th.h V;
    private th.h W;

    /* renamed from: a0  reason: collision with root package name */
    private th.l f16284a0;

    /* renamed from: b0  reason: collision with root package name */
    private boolean f16285b0;

    /* renamed from: c0  reason: collision with root package name */
    private final int f16286c0;

    /* renamed from: d  reason: collision with root package name */
    private final FrameLayout f16287d;

    /* renamed from: d0  reason: collision with root package name */
    private int f16288d0;

    /* renamed from: e  reason: collision with root package name */
    private final y f16289e;

    /* renamed from: e0  reason: collision with root package name */
    private int f16290e0;

    /* renamed from: f0  reason: collision with root package name */
    private int f16291f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f16292g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f16293h0;

    /* renamed from: i  reason: collision with root package name */
    private final r f16294i;

    /* renamed from: i0  reason: collision with root package name */
    private int f16295i0;

    /* renamed from: j0  reason: collision with root package name */
    private int f16296j0;

    /* renamed from: k0  reason: collision with root package name */
    private final Rect f16297k0;

    /* renamed from: l0  reason: collision with root package name */
    private final Rect f16298l0;

    /* renamed from: m0  reason: collision with root package name */
    private final RectF f16299m0;

    /* renamed from: n0  reason: collision with root package name */
    private Typeface f16300n0;

    /* renamed from: o  reason: collision with root package name */
    private final int f16301o;

    /* renamed from: o0  reason: collision with root package name */
    private Drawable f16302o0;

    /* renamed from: p  reason: collision with root package name */
    EditText f16303p;

    /* renamed from: p0  reason: collision with root package name */
    private int f16304p0;

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f16305q;

    /* renamed from: q0  reason: collision with root package name */
    private final LinkedHashSet f16306q0;

    /* renamed from: r  reason: collision with root package name */
    private int f16307r;

    /* renamed from: r0  reason: collision with root package name */
    private Drawable f16308r0;

    /* renamed from: s  reason: collision with root package name */
    private int f16309s;

    /* renamed from: s0  reason: collision with root package name */
    private int f16310s0;

    /* renamed from: t  reason: collision with root package name */
    private int f16311t;

    /* renamed from: t0  reason: collision with root package name */
    private Drawable f16312t0;

    /* renamed from: u  reason: collision with root package name */
    private int f16313u;

    /* renamed from: u0  reason: collision with root package name */
    private ColorStateList f16314u0;

    /* renamed from: v  reason: collision with root package name */
    private final u f16315v;

    /* renamed from: v0  reason: collision with root package name */
    private ColorStateList f16316v0;

    /* renamed from: w  reason: collision with root package name */
    boolean f16317w;

    /* renamed from: w0  reason: collision with root package name */
    private int f16318w0;

    /* renamed from: x  reason: collision with root package name */
    private int f16319x;

    /* renamed from: x0  reason: collision with root package name */
    private int f16320x0;

    /* renamed from: y  reason: collision with root package name */
    private boolean f16321y;

    /* renamed from: y0  reason: collision with root package name */
    private int f16322y0;

    /* renamed from: z  reason: collision with root package name */
    private f f16323z;

    /* renamed from: z0  reason: collision with root package name */
    private ColorStateList f16324z0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        int f16325d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ EditText f16326e;

        a(EditText editText) {
            this.f16326e = editText;
            this.f16325d = editText.getLineCount();
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            TextInputLayout textInputLayout = TextInputLayout.this;
            textInputLayout.x0(!textInputLayout.M0);
            TextInputLayout textInputLayout2 = TextInputLayout.this;
            if (textInputLayout2.f16317w) {
                textInputLayout2.m0(editable);
            }
            if (TextInputLayout.this.E) {
                TextInputLayout.this.B0(editable);
            }
            int lineCount = this.f16326e.getLineCount();
            int i10 = this.f16325d;
            if (lineCount != i10) {
                if (lineCount < i10) {
                    int minimumHeight = this.f16326e.getMinimumHeight();
                    int i11 = TextInputLayout.this.F0;
                    if (minimumHeight != i11) {
                        this.f16326e.setMinimumHeight(i11);
                    }
                }
                this.f16325d = lineCount;
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends androidx.core.view.a {
        b() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.f1(false);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements Runnable {
        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            TextInputLayout.this.f16294i.h();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {
        d() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            TextInputLayout.this.H0.j0(((Float) valueAnimator.getAnimatedValue()).floatValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends androidx.core.view.a {

        /* renamed from: a  reason: collision with root package name */
        private final TextInputLayout f16331a;

        public e(TextInputLayout textInputLayout) {
            this.f16331a = textInputLayout;
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            CharSequence charSequence;
            boolean z10;
            String str;
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            EditText editText = this.f16331a.getEditText();
            if (editText != null) {
                charSequence = editText.getText();
            } else {
                charSequence = null;
            }
            CharSequence hint = this.f16331a.getHint();
            CharSequence error = this.f16331a.getError();
            CharSequence placeholderText = this.f16331a.getPlaceholderText();
            int counterMaxLength = this.f16331a.getCounterMaxLength();
            CharSequence counterOverflowDescription = this.f16331a.getCounterOverflowDescription();
            boolean isEmpty = TextUtils.isEmpty(charSequence);
            boolean isEmpty2 = TextUtils.isEmpty(hint);
            boolean Q = this.f16331a.Q();
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
            this.f16331a.f16289e.A(accessibilityNodeInfoCompat);
            if (!isEmpty) {
                accessibilityNodeInfoCompat.b1(charSequence);
            } else if (!TextUtils.isEmpty(str)) {
                accessibilityNodeInfoCompat.b1(str);
                if (!Q && placeholderText != null) {
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
            View t10 = this.f16331a.f16315v.t();
            if (t10 != null) {
                accessibilityNodeInfoCompat.K0(t10);
            }
            this.f16331a.f16294i.m().o(view, accessibilityNodeInfoCompat);
        }

        @Override // androidx.core.view.a
        public void onPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            super.onPopulateAccessibilityEvent(view, accessibilityEvent);
            this.f16331a.f16294i.m().p(view, accessibilityEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface f {
        int a(Editable editable);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface g {
        void a(TextInputLayout textInputLayout);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class h extends u2.a {
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        CharSequence f16332i;

        /* renamed from: o  reason: collision with root package name */
        boolean f16333o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public h createFromParcel(Parcel parcel) {
                return new h(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public h createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new h(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public h[] newArray(int i10) {
                return new h[i10];
            }
        }

        h(Parcelable parcelable) {
            super(parcelable);
        }

        public String toString() {
            return "TextInputLayout.SavedState{" + Integer.toHexString(System.identityHashCode(this)) + " error=" + ((Object) this.f16332i) + "}";
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            TextUtils.writeToParcel(this.f16332i, parcel, i10);
            parcel.writeInt(this.f16333o ? 1 : 0);
        }

        h(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f16332i = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f16333o = parcel.readInt() == 1;
        }
    }

    public TextInputLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6750n0);
    }

    private void A(boolean z10) {
        ValueAnimator valueAnimator = this.K0;
        if (valueAnimator != null && valueAnimator.isRunning()) {
            this.K0.cancel();
        }
        if (z10 && this.J0) {
            m(1.0f);
        } else {
            this.H0.j0(1.0f);
        }
        this.G0 = false;
        if (C()) {
            W();
        }
        A0();
        this.f16289e.l(false);
        this.f16294i.H(false);
    }

    private void A0() {
        Editable text;
        EditText editText = this.f16303p;
        if (editText == null) {
            text = null;
        } else {
            text = editText.getText();
        }
        B0(text);
    }

    private androidx.transition.e B() {
        androidx.transition.e eVar = new androidx.transition.e();
        eVar.o0(oh.g.f(getContext(), bh.b.O, 87));
        eVar.q0(oh.g.g(getContext(), bh.b.U, ch.a.f8276a));
        return eVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void B0(Editable editable) {
        if (this.f16323z.a(editable) == 0 && !this.G0) {
            h0();
        } else {
            M();
        }
    }

    private boolean C() {
        if (this.O && !TextUtils.isEmpty(this.P) && (this.R instanceof com.google.android.material.textfield.h)) {
            return true;
        }
        return false;
    }

    private void C0(boolean z10, boolean z11) {
        int defaultColor = this.f16324z0.getDefaultColor();
        int colorForState = this.f16324z0.getColorForState(new int[]{16843623, 16842910}, defaultColor);
        int colorForState2 = this.f16324z0.getColorForState(new int[]{16843518, 16842910}, defaultColor);
        if (z10) {
            this.f16295i0 = colorForState2;
        } else if (z11) {
            this.f16295i0 = colorForState;
        } else {
            this.f16295i0 = defaultColor;
        }
    }

    private void D() {
        Iterator it = this.f16306q0.iterator();
        while (it.hasNext()) {
            ((g) it.next()).a(this);
        }
    }

    private void E(Canvas canvas) {
        th.h hVar;
        if (this.W != null && (hVar = this.V) != null) {
            hVar.draw(canvas);
            if (this.f16303p.isFocused()) {
                Rect bounds = this.W.getBounds();
                Rect bounds2 = this.V.getBounds();
                float B = this.H0.B();
                int centerX = bounds2.centerX();
                bounds.left = ch.a.c(centerX, bounds2.left, B);
                bounds.right = ch.a.c(centerX, bounds2.right, B);
                this.W.draw(canvas);
            }
        }
    }

    private void F(Canvas canvas) {
        if (this.O) {
            this.H0.k(canvas);
        }
    }

    private void G(boolean z10) {
        ValueAnimator valueAnimator = this.K0;
        if (valueAnimator != null && valueAnimator.isRunning()) {
            this.K0.cancel();
        }
        if (z10 && this.J0) {
            m(0.0f);
        } else {
            this.H0.j0(0.0f);
        }
        if (C() && ((com.google.android.material.textfield.h) this.R).A0()) {
            z();
        }
        this.G0 = true;
        M();
        this.f16289e.l(true);
        this.f16294i.H(true);
    }

    private th.h H(boolean z10) {
        float f10;
        float dimensionPixelOffset;
        ColorStateList colorStateList;
        float dimensionPixelOffset2 = getResources().getDimensionPixelOffset(bh.d.f6817v0);
        if (z10) {
            f10 = dimensionPixelOffset2;
        } else {
            f10 = 0.0f;
        }
        EditText editText = this.f16303p;
        if (editText instanceof MaterialAutoCompleteTextView) {
            dimensionPixelOffset = ((MaterialAutoCompleteTextView) editText).getPopupElevation();
        } else {
            dimensionPixelOffset = getResources().getDimensionPixelOffset(bh.d.C);
        }
        int dimensionPixelOffset3 = getResources().getDimensionPixelOffset(bh.d.f6801n0);
        th.l m10 = th.l.a().D(f10).I(f10).u(dimensionPixelOffset2).y(dimensionPixelOffset2).m();
        EditText editText2 = this.f16303p;
        if (editText2 instanceof MaterialAutoCompleteTextView) {
            colorStateList = ((MaterialAutoCompleteTextView) editText2).getDropDownBackgroundTintList();
        } else {
            colorStateList = null;
        }
        th.h r10 = th.h.r(getContext(), dimensionPixelOffset, colorStateList);
        r10.setShapeAppearanceModel(m10);
        r10.i0(0, dimensionPixelOffset3, 0, dimensionPixelOffset3);
        return r10;
    }

    private static Drawable I(th.h hVar, int i10, int i11, int[][] iArr) {
        return new RippleDrawable(new ColorStateList(iArr, new int[]{jh.a.j(i11, i10, 0.1f), i10}), hVar, hVar);
    }

    private int J(int i10, boolean z10) {
        int compoundPaddingLeft;
        if (!z10 && getPrefixText() != null) {
            compoundPaddingLeft = this.f16289e.c();
        } else if (z10 && getSuffixText() != null) {
            compoundPaddingLeft = this.f16294i.y();
        } else {
            compoundPaddingLeft = this.f16303p.getCompoundPaddingLeft();
        }
        return i10 + compoundPaddingLeft;
    }

    private int K(int i10, boolean z10) {
        int compoundPaddingRight;
        if (!z10 && getSuffixText() != null) {
            compoundPaddingRight = this.f16294i.y();
        } else if (z10 && getPrefixText() != null) {
            compoundPaddingRight = this.f16289e.c();
        } else {
            compoundPaddingRight = this.f16303p.getCompoundPaddingRight();
        }
        return i10 - compoundPaddingRight;
    }

    private static Drawable L(Context context, th.h hVar, int i10, int[][] iArr) {
        int c10 = jh.a.c(context, bh.b.f6751o, "TextInputLayout");
        th.h hVar2 = new th.h(hVar.J());
        int j10 = jh.a.j(i10, c10, 0.1f);
        hVar2.f0(new ColorStateList(iArr, new int[]{j10, 0}));
        hVar2.setTint(c10);
        ColorStateList colorStateList = new ColorStateList(iArr, new int[]{j10, c10});
        th.h hVar3 = new th.h(hVar.J());
        hVar3.setTint(-1);
        return new LayerDrawable(new Drawable[]{new RippleDrawable(colorStateList, hVar2, hVar3), hVar});
    }

    private void M() {
        TextView textView = this.F;
        if (textView != null && this.E) {
            textView.setText((CharSequence) null);
            androidx.transition.x.a(this.f16287d, this.J);
            this.F.setVisibility(4);
        }
    }

    private boolean R() {
        if (getHintMaxLines() == 1) {
            return true;
        }
        return false;
    }

    private boolean S() {
        if (!e0()) {
            if (this.A == null || !this.f16321y) {
                return false;
            }
            return true;
        }
        return true;
    }

    private boolean U() {
        if (this.f16288d0 == 1 && this.f16303p.getMinLines() <= 1) {
            return true;
        }
        return false;
    }

    private void V() {
        q();
        t0();
        D0();
        i0();
        l();
        if (this.f16288d0 != 0) {
            w0();
        }
        c0();
    }

    private void W() {
        if (C()) {
            RectF rectF = this.f16299m0;
            this.H0.o(rectF, this.f16303p.getWidth(), this.f16303p.getGravity());
            if (rectF.width() > 0.0f && rectF.height() > 0.0f) {
                p(rectF);
                rectF.offset(-getPaddingLeft(), ((-getPaddingTop()) - (rectF.height() / 2.0f)) + this.f16291f0);
                rectF.top = 0.0f;
                ((com.google.android.material.textfield.h) this.R).D0(rectF);
            }
        }
    }

    private void X() {
        if (C() && !this.G0) {
            z();
            W();
        }
    }

    private static void Y(ViewGroup viewGroup, boolean z10) {
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = viewGroup.getChildAt(i10);
            childAt.setEnabled(z10);
            if (childAt instanceof ViewGroup) {
                Y((ViewGroup) childAt, z10);
            }
        }
    }

    private void a0() {
        TextView textView = this.F;
        if (textView != null) {
            textView.setVisibility(8);
        }
    }

    public static /* synthetic */ int c(Editable editable) {
        if (editable != null) {
            return editable.length();
        }
        return 0;
    }

    private void c0() {
        EditText editText = this.f16303p;
        if (editText instanceof AutoCompleteTextView) {
            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) editText;
            if (autoCompleteTextView.getDropDownBackground() == null) {
                int i10 = this.f16288d0;
                if (i10 == 2) {
                    autoCompleteTextView.setDropDownBackgroundDrawable(getOrCreateOutlinedDropDownMenuBackground());
                } else if (i10 == 1) {
                    autoCompleteTextView.setDropDownBackgroundDrawable(getOrCreateFilledDropDownMenuBackground());
                }
            }
        }
    }

    private boolean f0() {
        if ((this.f16294i.G() || ((this.f16294i.A() && N()) || this.f16294i.w() != null)) && this.f16294i.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private boolean g0() {
        if ((getStartIconDrawable() != null || (getPrefixText() != null && getPrefixTextView().getVisibility() == 0)) && this.f16289e.getMeasuredWidth() > 0) {
            return true;
        }
        return false;
    }

    private Drawable getEditTextBoxBackground() {
        EditText editText = this.f16303p;
        if ((editText instanceof AutoCompleteTextView) && !q.a(editText)) {
            int d10 = jh.a.d(this.f16303p, f.a.f23296t);
            int i10 = this.f16288d0;
            if (i10 == 2) {
                return L(getContext(), this.R, d10, P0);
            }
            if (i10 == 1) {
                return I(this.R, this.f16296j0, d10, P0);
            }
            return null;
        }
        return this.R;
    }

    private Drawable getOrCreateFilledDropDownMenuBackground() {
        if (this.T == null) {
            StateListDrawable stateListDrawable = new StateListDrawable();
            this.T = stateListDrawable;
            stateListDrawable.addState(new int[]{16842922}, getOrCreateOutlinedDropDownMenuBackground());
            this.T.addState(new int[0], H(false));
        }
        return this.T;
    }

    private Drawable getOrCreateOutlinedDropDownMenuBackground() {
        if (this.S == null) {
            this.S = H(true);
        }
        return this.S;
    }

    private void h0() {
        if (this.F != null && this.E && !TextUtils.isEmpty(this.D)) {
            this.F.setText(this.D);
            androidx.transition.x.a(this.f16287d, this.I);
            this.F.setVisibility(0);
            this.F.bringToFront();
        }
    }

    private void i0() {
        if (this.f16288d0 == 1) {
            if (qh.c.l(getContext())) {
                this.f16290e0 = getResources().getDimensionPixelSize(bh.d.R);
            } else if (qh.c.k(getContext())) {
                this.f16290e0 = getResources().getDimensionPixelSize(bh.d.Q);
            }
        }
    }

    private void j0(Rect rect) {
        th.h hVar = this.V;
        if (hVar != null) {
            int i10 = rect.bottom;
            hVar.setBounds(rect.left, i10 - this.f16292g0, rect.right, i10);
        }
        th.h hVar2 = this.W;
        if (hVar2 != null) {
            int i11 = rect.bottom;
            hVar2.setBounds(rect.left, i11 - this.f16293h0, rect.right, i11);
        }
    }

    private void k() {
        TextView textView = this.F;
        if (textView != null) {
            this.f16287d.addView(textView);
            this.F.setVisibility(0);
        }
    }

    private void k0(int i10) {
        this.H0.s0(i10);
        Rect rect = this.f16297k0;
        com.google.android.material.internal.b.a(this, this.f16303p, rect);
        this.H0.S(s(rect));
        w0();
        l();
        u0(i10);
    }

    private void l() {
        if (this.f16303p != null && this.f16288d0 == 1) {
            if (!R()) {
                EditText editText = this.f16303p;
                editText.setPaddingRelative(editText.getPaddingStart(), (int) (this.H0.q() + this.f16301o), this.f16303p.getPaddingEnd(), getResources().getDimensionPixelSize(bh.d.M));
            } else if (qh.c.l(getContext())) {
                EditText editText2 = this.f16303p;
                editText2.setPaddingRelative(editText2.getPaddingStart(), getResources().getDimensionPixelSize(bh.d.P), this.f16303p.getPaddingEnd(), getResources().getDimensionPixelSize(bh.d.O));
            } else if (qh.c.k(getContext())) {
                EditText editText3 = this.f16303p;
                editText3.setPaddingRelative(editText3.getPaddingStart(), getResources().getDimensionPixelSize(bh.d.N), this.f16303p.getPaddingEnd(), getResources().getDimensionPixelSize(bh.d.M));
            }
        }
    }

    private void l0() {
        Editable text;
        if (this.A != null) {
            EditText editText = this.f16303p;
            if (editText == null) {
                text = null;
            } else {
                text = editText.getText();
            }
            m0(text);
        }
    }

    private void n() {
        th.h hVar = this.R;
        if (hVar == null) {
            return;
        }
        th.l J = hVar.J();
        th.l lVar = this.f16284a0;
        if (J != lVar) {
            this.R.setShapeAppearanceModel(lVar);
        }
        if (x()) {
            this.R.n0(this.f16291f0, this.f16295i0);
        }
        int r10 = r();
        this.f16296j0 = r10;
        this.R.f0(ColorStateList.valueOf(r10));
        o();
        t0();
    }

    private static void n0(Context context, TextView textView, int i10, int i11, boolean z10) {
        int i12;
        if (z10) {
            i12 = bh.j.f6902c;
        } else {
            i12 = bh.j.f6901b;
        }
        textView.setContentDescription(context.getString(i12, Integer.valueOf(i10), Integer.valueOf(i11)));
    }

    private void o() {
        ColorStateList valueOf;
        if (this.V != null && this.W != null) {
            if (y()) {
                th.h hVar = this.V;
                if (this.f16303p.isFocused()) {
                    valueOf = ColorStateList.valueOf(this.f16318w0);
                } else {
                    valueOf = ColorStateList.valueOf(this.f16295i0);
                }
                hVar.f0(valueOf);
                this.W.f0(ColorStateList.valueOf(this.f16295i0));
            }
            invalidate();
        }
    }

    private void o0() {
        int i10;
        ColorStateList colorStateList;
        ColorStateList colorStateList2;
        TextView textView = this.A;
        if (textView != null) {
            if (this.f16321y) {
                i10 = this.B;
            } else {
                i10 = this.C;
            }
            d0(textView, i10);
            if (!this.f16321y && (colorStateList2 = this.K) != null) {
                this.A.setTextColor(colorStateList2);
            }
            if (this.f16321y && (colorStateList = this.L) != null) {
                this.A.setTextColor(colorStateList);
            }
        }
    }

    private void p(RectF rectF) {
        float f10 = rectF.left;
        int i10 = this.f16286c0;
        rectF.left = f10 - i10;
        rectF.right += i10;
    }

    private void p0() {
        ColorStateList colorStateList;
        ColorStateList colorStateList2 = this.M;
        if (colorStateList2 == null) {
            colorStateList2 = jh.a.g(getContext(), f.a.f23295s);
        }
        EditText editText = this.f16303p;
        if (editText != null && editText.getTextCursorDrawable() != null) {
            Drawable mutate = s1.a.r(this.f16303p.getTextCursorDrawable()).mutate();
            if (S() && (colorStateList = this.N) != null) {
                colorStateList2 = colorStateList;
            }
            mutate.setTintList(colorStateList2);
        }
    }

    private void q() {
        int i10 = this.f16288d0;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    if (this.O && !(this.R instanceof com.google.android.material.textfield.h)) {
                        this.R = com.google.android.material.textfield.h.z0(this.f16284a0);
                    } else {
                        this.R = new th.h(this.f16284a0);
                    }
                    this.V = null;
                    this.W = null;
                    return;
                }
                throw new IllegalArgumentException(this.f16288d0 + " is illegal; only @BoxBackgroundMode constants are supported.");
            }
            this.R = new th.h(this.f16284a0);
            this.V = new th.h();
            this.W = new th.h();
            return;
        }
        this.R = null;
        this.V = null;
        this.W = null;
    }

    private int r() {
        int i10 = this.f16296j0;
        if (this.f16288d0 == 1) {
            return jh.a.i(jh.a.e(this, bh.b.f6751o, 0), this.f16296j0);
        }
        return i10;
    }

    private Rect s(Rect rect) {
        if (this.f16303p != null) {
            Rect rect2 = this.f16298l0;
            boolean h10 = com.google.android.material.internal.p.h(this);
            rect2.bottom = rect.bottom;
            int i10 = this.f16288d0;
            if (i10 != 1) {
                if (i10 != 2) {
                    rect2.left = J(rect.left, h10);
                    rect2.top = getPaddingTop();
                    rect2.right = K(rect.right, h10);
                    return rect2;
                }
                rect2.left = rect.left + this.f16303p.getPaddingLeft();
                rect2.top = rect.top - w();
                rect2.right = rect.right - this.f16303p.getPaddingRight();
                return rect2;
            }
            rect2.left = J(rect.left, h10);
            rect2.top = rect.top + this.f16290e0;
            rect2.right = K(rect.right, h10);
            return rect2;
        }
        throw new IllegalStateException();
    }

    private void s0() {
        this.f16303p.setBackground(getEditTextBoxBackground());
    }

    private void setEditText(EditText editText) {
        if (this.f16303p == null) {
            if (getEndIconMode() != 3 && !(editText instanceof TextInputEditText)) {
                Log.i("TextInputLayout", "EditText added is not a TextInputEditText. Please switch to using that class instead.");
            }
            this.f16303p = editText;
            int i10 = this.f16307r;
            if (i10 != -1) {
                setMinEms(i10);
            } else {
                setMinWidth(this.f16311t);
            }
            int i11 = this.f16309s;
            if (i11 != -1) {
                setMaxEms(i11);
            } else {
                setMaxWidth(this.f16313u);
            }
            this.U = false;
            V();
            setTextInputAccessibilityDelegate(new e(this));
            this.H0.p0(this.f16303p.getTypeface());
            this.H0.h0(this.f16303p.getTextSize());
            this.H0.d0(this.f16303p.getLetterSpacing());
            int gravity = this.f16303p.getGravity();
            this.H0.X((gravity & (-113)) | 48);
            this.H0.g0(gravity);
            this.F0 = editText.getMinimumHeight();
            this.f16303p.addTextChangedListener(new a(editText));
            if (this.f16314u0 == null) {
                this.f16314u0 = this.f16303p.getHintTextColors();
            }
            if (this.O) {
                if (TextUtils.isEmpty(this.P)) {
                    CharSequence hint = this.f16303p.getHint();
                    this.f16305q = hint;
                    setHint(hint);
                    this.f16303p.setHint((CharSequence) null);
                }
                this.Q = true;
            }
            if (Build.VERSION.SDK_INT >= 29) {
                p0();
            }
            if (this.A != null) {
                m0(this.f16303p.getText());
            }
            r0();
            this.f16315v.f();
            this.f16289e.bringToFront();
            this.f16294i.bringToFront();
            D();
            this.f16294i.x0();
            if (!isEnabled()) {
                editText.setEnabled(false);
            }
            y0(false, true);
            return;
        }
        throw new IllegalArgumentException("We already have an EditText, can only have one");
    }

    private void setHintInternal(CharSequence charSequence) {
        if (!TextUtils.equals(charSequence, this.P)) {
            this.P = charSequence;
            this.H0.n0(charSequence);
            if (!this.G0) {
                W();
            }
        }
    }

    private void setPlaceholderTextEnabled(boolean z10) {
        if (this.E == z10) {
            return;
        }
        if (z10) {
            k();
        } else {
            a0();
            this.F = null;
        }
        this.E = z10;
    }

    private int t(Rect rect, Rect rect2, float f10) {
        if (U()) {
            return (int) (rect2.top + f10);
        }
        return rect.bottom - this.f16303p.getCompoundPaddingBottom();
    }

    private int u(Rect rect, float f10) {
        int i10;
        if (U()) {
            return (int) (rect.centerY() - (f10 / 2.0f));
        }
        if (this.f16288d0 == 0 && !R()) {
            i10 = (int) (this.H0.A() / 2.0f);
        } else {
            i10 = 0;
        }
        return (rect.top + this.f16303p.getCompoundPaddingTop()) - i10;
    }

    private void u0(int i10) {
        boolean z10;
        if (this.f16303p != null) {
            float z11 = this.H0.z();
            float f10 = 0.0f;
            if (this.D != null) {
                TextPaint textPaint = new TextPaint(129);
                textPaint.set(this.F.getPaint());
                textPaint.setTextSize(this.F.getTextSize());
                textPaint.setTypeface(this.F.getTypeface());
                textPaint.setLetterSpacing(this.F.getLetterSpacing());
                com.google.android.material.internal.h b10 = com.google.android.material.internal.h.b(this.D, textPaint, i10);
                if (getLayoutDirection() == 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                StaticLayout a10 = b10.g(z10).f(true).h(this.F.getLineSpacingExtra(), this.F.getLineSpacingMultiplier()).j(new com.google.android.material.internal.i() { // from class: com.google.android.material.textfield.b0
                    @Override // com.google.android.material.internal.i
                    public final void a(StaticLayout.Builder builder) {
                        builder.setBreakStrategy(TextInputLayout.this.F.getBreakStrategy());
                    }
                }).a();
                if (this.f16288d0 == 1) {
                    f10 = this.f16301o + this.H0.q() + this.f16290e0;
                }
                f10 += a10.getHeight();
            }
            float max = Math.max(z11, f10);
            if (this.f16303p.getMeasuredHeight() < max) {
                this.f16303p.setMinimumHeight(Math.round(max));
            }
        }
    }

    private Rect v(Rect rect) {
        float y10;
        if (this.f16303p != null) {
            Rect rect2 = this.f16298l0;
            if (R()) {
                y10 = this.H0.A();
            } else {
                y10 = this.H0.y() * this.H0.w();
            }
            rect2.left = rect.left + this.f16303p.getCompoundPaddingLeft();
            rect2.top = u(rect, y10);
            rect2.right = rect.right - this.f16303p.getCompoundPaddingRight();
            rect2.bottom = t(rect, rect2, y10);
            return rect2;
        }
        throw new IllegalStateException();
    }

    private boolean v0() {
        int max;
        if (this.f16303p == null || this.f16303p.getMeasuredHeight() >= (max = Math.max(this.f16294i.getMeasuredHeight(), this.f16289e.getMeasuredHeight()))) {
            return false;
        }
        this.f16303p.setMinimumHeight(max);
        return true;
    }

    private int w() {
        if (!this.O) {
            return 0;
        }
        int i10 = this.f16288d0;
        if (i10 != 0) {
            if (i10 != 2) {
                return 0;
            }
            if (R()) {
                return (int) (this.H0.q() / 2.0f);
            }
            return Math.max(0, (int) (this.H0.q() - (this.H0.n() / 2.0f)));
        }
        return (int) this.H0.q();
    }

    private void w0() {
        if (this.f16288d0 != 1) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f16287d.getLayoutParams();
            int w10 = w();
            if (w10 != layoutParams.topMargin) {
                layoutParams.topMargin = w10;
                this.f16287d.requestLayout();
            }
        }
    }

    private boolean x() {
        if (this.f16288d0 == 2 && y()) {
            return true;
        }
        return false;
    }

    private boolean y() {
        if (this.f16291f0 > -1 && this.f16295i0 != 0) {
            return true;
        }
        return false;
    }

    private void y0(boolean z10, boolean z11) {
        boolean z12;
        ColorStateList colorStateList;
        TextView textView;
        int i10;
        boolean isEnabled = isEnabled();
        EditText editText = this.f16303p;
        boolean z13 = false;
        if (editText != null && !TextUtils.isEmpty(editText.getText())) {
            z12 = true;
        } else {
            z12 = false;
        }
        EditText editText2 = this.f16303p;
        if (editText2 != null && editText2.hasFocus()) {
            z13 = true;
        }
        ColorStateList colorStateList2 = this.f16314u0;
        if (colorStateList2 != null) {
            this.H0.Q(colorStateList2);
        }
        if (!isEnabled) {
            ColorStateList colorStateList3 = this.f16314u0;
            if (colorStateList3 != null) {
                i10 = colorStateList3.getColorForState(new int[]{-16842910}, this.E0);
            } else {
                i10 = this.E0;
            }
            this.H0.Q(ColorStateList.valueOf(i10));
        } else if (e0()) {
            this.H0.Q(this.f16315v.r());
        } else if (this.f16321y && (textView = this.A) != null) {
            this.H0.Q(textView.getTextColors());
        } else if (z13 && (colorStateList = this.f16316v0) != null) {
            this.H0.W(colorStateList);
        }
        if (!z12 && this.I0 && (!isEnabled() || !z13)) {
            if (z11 || !this.G0) {
                G(z10);
            }
        } else if (!z11 && !this.G0) {
        } else {
            A(z10);
        }
    }

    private void z() {
        if (C()) {
            ((com.google.android.material.textfield.h) this.R).B0();
        }
    }

    private void z0() {
        EditText editText;
        if (this.F != null && (editText = this.f16303p) != null) {
            this.F.setGravity(editText.getGravity());
            this.F.setPadding(this.f16303p.getCompoundPaddingLeft(), this.f16303p.getCompoundPaddingTop(), this.f16303p.getCompoundPaddingRight(), this.f16303p.getCompoundPaddingBottom());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D0() {
        boolean z10;
        TextView textView;
        EditText editText;
        EditText editText2;
        if (this.R != null && this.f16288d0 != 0) {
            boolean z11 = false;
            if (!isFocused() && ((editText2 = this.f16303p) == null || !editText2.hasFocus())) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (isHovered() || ((editText = this.f16303p) != null && editText.isHovered())) {
                z11 = true;
            }
            if (!isEnabled()) {
                this.f16295i0 = this.E0;
            } else if (e0()) {
                if (this.f16324z0 != null) {
                    C0(z10, z11);
                } else {
                    this.f16295i0 = getErrorCurrentTextColors();
                }
            } else if (this.f16321y && (textView = this.A) != null) {
                if (this.f16324z0 != null) {
                    C0(z10, z11);
                } else {
                    this.f16295i0 = textView.getCurrentTextColor();
                }
            } else if (z10) {
                this.f16295i0 = this.f16322y0;
            } else if (z11) {
                this.f16295i0 = this.f16320x0;
            } else {
                this.f16295i0 = this.f16318w0;
            }
            if (Build.VERSION.SDK_INT >= 29) {
                p0();
            }
            this.f16294i.I();
            Z();
            if (this.f16288d0 == 2) {
                int i10 = this.f16291f0;
                if (z10 && isEnabled()) {
                    this.f16291f0 = this.f16293h0;
                } else {
                    this.f16291f0 = this.f16292g0;
                }
                if (this.f16291f0 != i10) {
                    X();
                }
            }
            if (this.f16288d0 == 1) {
                if (!isEnabled()) {
                    this.f16296j0 = this.B0;
                } else if (z11 && !z10) {
                    this.f16296j0 = this.D0;
                } else if (z10) {
                    this.f16296j0 = this.C0;
                } else {
                    this.f16296j0 = this.A0;
                }
            }
            n();
        }
    }

    public boolean N() {
        return this.f16294i.F();
    }

    public boolean O() {
        return this.f16315v.A();
    }

    public boolean P() {
        return this.f16315v.B();
    }

    final boolean Q() {
        return this.G0;
    }

    public boolean T() {
        return this.Q;
    }

    public void Z() {
        this.f16289e.m();
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (view instanceof EditText) {
            FrameLayout.LayoutParams layoutParams2 = new FrameLayout.LayoutParams(layoutParams);
            layoutParams2.gravity = (layoutParams2.gravity & (-113)) | 16;
            this.f16287d.addView(view, layoutParams2);
            this.f16287d.setLayoutParams(layoutParams);
            w0();
            setEditText((EditText) view);
            return;
        }
        super.addView(view, i10, layoutParams);
    }

    public void b0(float f10, float f11, float f12, float f13) {
        float f14;
        float f15;
        boolean h10 = com.google.android.material.internal.p.h(this);
        this.f16285b0 = h10;
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
        th.h hVar = this.R;
        if (hVar != null && hVar.M() == f14 && this.R.N() == f10 && this.R.x() == f15 && this.R.y() == f12) {
            return;
        }
        this.f16284a0 = this.f16284a0.w().D(f14).I(f10).u(f15).y(f12).m();
        n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(TextView textView, int i10) {
        try {
            androidx.core.widget.j.q(textView, i10);
            if (textView.getTextColors().getDefaultColor() != -65281) {
                return;
            }
        } catch (Exception unused) {
        }
        androidx.core.widget.j.q(textView, f.i.f23412b);
        textView.setTextColor(androidx.core.content.a.c(getContext(), bh.c.f6764a));
    }

    @Override // android.view.ViewGroup, android.view.View
    public void dispatchProvideAutofillStructure(ViewStructure viewStructure, int i10) {
        EditText editText = this.f16303p;
        if (editText == null) {
            super.dispatchProvideAutofillStructure(viewStructure, i10);
            return;
        }
        if (this.f16305q != null) {
            boolean z10 = this.Q;
            this.Q = false;
            CharSequence hint = editText.getHint();
            this.f16303p.setHint(this.f16305q);
            try {
                super.dispatchProvideAutofillStructure(viewStructure, i10);
                return;
            } finally {
                this.f16303p.setHint(hint);
                this.Q = z10;
            }
        }
        viewStructure.setAutofillId(getAutofillId());
        onProvideAutofillStructure(viewStructure, i10);
        onProvideAutofillVirtualStructure(viewStructure, i10);
        viewStructure.setChildCount(this.f16287d.getChildCount());
        for (int i11 = 0; i11 < this.f16287d.getChildCount(); i11++) {
            View childAt = this.f16287d.getChildAt(i11);
            ViewStructure newChild = viewStructure.newChild(i11);
            childAt.dispatchProvideAutofillStructure(newChild, i10);
            if (childAt == this.f16303p) {
                newChild.setHint(getHint());
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchRestoreInstanceState(SparseArray sparseArray) {
        this.M0 = true;
        super.dispatchRestoreInstanceState(sparseArray);
        this.M0 = false;
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        super.draw(canvas);
        F(canvas);
        E(canvas);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        boolean z10;
        if (this.L0) {
            return;
        }
        boolean z11 = true;
        this.L0 = true;
        super.drawableStateChanged();
        int[] drawableState = getDrawableState();
        com.google.android.material.internal.a aVar = this.H0;
        if (aVar != null) {
            z10 = aVar.m0(drawableState);
        } else {
            z10 = false;
        }
        if (this.f16303p != null) {
            if (!isLaidOut() || !isEnabled()) {
                z11 = false;
            }
            x0(z11);
        }
        r0();
        D0();
        if (z10) {
            invalidate();
        }
        this.L0 = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e0() {
        return this.f16315v.l();
    }

    @Override // android.widget.LinearLayout, android.view.View
    public int getBaseline() {
        EditText editText = this.f16303p;
        if (editText != null) {
            return editText.getBaseline() + getPaddingTop() + w();
        }
        return super.getBaseline();
    }

    @NonNull
    th.h getBoxBackground() {
        int i10 = this.f16288d0;
        if (i10 != 1 && i10 != 2) {
            throw new IllegalStateException();
        }
        return this.R;
    }

    public int getBoxBackgroundColor() {
        return this.f16296j0;
    }

    public int getBoxBackgroundMode() {
        return this.f16288d0;
    }

    public int getBoxCollapsedPaddingTop() {
        return this.f16290e0;
    }

    public float getBoxCornerRadiusBottomEnd() {
        if (com.google.android.material.internal.p.h(this)) {
            return this.f16284a0.j().a(this.f16299m0);
        }
        return this.f16284a0.l().a(this.f16299m0);
    }

    public float getBoxCornerRadiusBottomStart() {
        if (com.google.android.material.internal.p.h(this)) {
            return this.f16284a0.l().a(this.f16299m0);
        }
        return this.f16284a0.j().a(this.f16299m0);
    }

    public float getBoxCornerRadiusTopEnd() {
        if (com.google.android.material.internal.p.h(this)) {
            return this.f16284a0.r().a(this.f16299m0);
        }
        return this.f16284a0.t().a(this.f16299m0);
    }

    public float getBoxCornerRadiusTopStart() {
        if (com.google.android.material.internal.p.h(this)) {
            return this.f16284a0.t().a(this.f16299m0);
        }
        return this.f16284a0.r().a(this.f16299m0);
    }

    public int getBoxStrokeColor() {
        return this.f16322y0;
    }

    public ColorStateList getBoxStrokeErrorColor() {
        return this.f16324z0;
    }

    public int getBoxStrokeWidth() {
        return this.f16292g0;
    }

    public int getBoxStrokeWidthFocused() {
        return this.f16293h0;
    }

    public int getCounterMaxLength() {
        return this.f16319x;
    }

    CharSequence getCounterOverflowDescription() {
        TextView textView;
        if (this.f16317w && this.f16321y && (textView = this.A) != null) {
            return textView.getContentDescription();
        }
        return null;
    }

    public ColorStateList getCounterOverflowTextColor() {
        return this.L;
    }

    public ColorStateList getCounterTextColor() {
        return this.K;
    }

    public ColorStateList getCursorColor() {
        return this.M;
    }

    public ColorStateList getCursorErrorColor() {
        return this.N;
    }

    public ColorStateList getDefaultHintTextColor() {
        return this.f16314u0;
    }

    public EditText getEditText() {
        return this.f16303p;
    }

    public CharSequence getEndIconContentDescription() {
        return this.f16294i.l();
    }

    public Drawable getEndIconDrawable() {
        return this.f16294i.n();
    }

    public int getEndIconMinSize() {
        return this.f16294i.o();
    }

    public int getEndIconMode() {
        return this.f16294i.p();
    }

    @NonNull
    public ImageView.ScaleType getEndIconScaleType() {
        return this.f16294i.q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NonNull
    public CheckableImageButton getEndIconView() {
        return this.f16294i.r();
    }

    public CharSequence getError() {
        if (this.f16315v.A()) {
            return this.f16315v.p();
        }
        return null;
    }

    public int getErrorAccessibilityLiveRegion() {
        return this.f16315v.n();
    }

    public CharSequence getErrorContentDescription() {
        return this.f16315v.o();
    }

    public int getErrorCurrentTextColors() {
        return this.f16315v.q();
    }

    public Drawable getErrorIconDrawable() {
        return this.f16294i.s();
    }

    public CharSequence getHelperText() {
        if (this.f16315v.B()) {
            return this.f16315v.s();
        }
        return null;
    }

    public int getHelperTextCurrentTextColor() {
        return this.f16315v.u();
    }

    public CharSequence getHint() {
        if (this.O) {
            return this.P;
        }
        return null;
    }

    final float getHintCollapsedTextHeight() {
        return this.H0.q();
    }

    final int getHintCurrentCollapsedTextColor() {
        return this.H0.t();
    }

    public int getHintMaxLines() {
        return this.H0.x();
    }

    public ColorStateList getHintTextColor() {
        return this.f16316v0;
    }

    @NonNull
    public f getLengthCounter() {
        return this.f16323z;
    }

    public int getMaxEms() {
        return this.f16309s;
    }

    public int getMaxWidth() {
        return this.f16313u;
    }

    public int getMinEms() {
        return this.f16307r;
    }

    public int getMinWidth() {
        return this.f16311t;
    }

    @Deprecated
    public CharSequence getPasswordVisibilityToggleContentDescription() {
        return this.f16294i.u();
    }

    @Deprecated
    public Drawable getPasswordVisibilityToggleDrawable() {
        return this.f16294i.v();
    }

    public CharSequence getPlaceholderText() {
        if (this.E) {
            return this.D;
        }
        return null;
    }

    public int getPlaceholderTextAppearance() {
        return this.H;
    }

    public ColorStateList getPlaceholderTextColor() {
        return this.G;
    }

    public CharSequence getPrefixText() {
        return this.f16289e.a();
    }

    public ColorStateList getPrefixTextColor() {
        return this.f16289e.b();
    }

    @NonNull
    public TextView getPrefixTextView() {
        return this.f16289e.d();
    }

    @NonNull
    public th.l getShapeAppearanceModel() {
        return this.f16284a0;
    }

    public CharSequence getStartIconContentDescription() {
        return this.f16289e.e();
    }

    public Drawable getStartIconDrawable() {
        return this.f16289e.f();
    }

    public int getStartIconMinSize() {
        return this.f16289e.g();
    }

    @NonNull
    public ImageView.ScaleType getStartIconScaleType() {
        return this.f16289e.h();
    }

    public CharSequence getSuffixText() {
        return this.f16294i.w();
    }

    public ColorStateList getSuffixTextColor() {
        return this.f16294i.x();
    }

    @NonNull
    public TextView getSuffixTextView() {
        return this.f16294i.z();
    }

    public Typeface getTypeface() {
        return this.f16300n0;
    }

    public void j(g gVar) {
        this.f16306q0.add(gVar);
        if (this.f16303p != null) {
            gVar.a(this);
        }
    }

    void m(float f10) {
        if (this.H0.B() == f10) {
            return;
        }
        if (this.K0 == null) {
            ValueAnimator valueAnimator = new ValueAnimator();
            this.K0 = valueAnimator;
            valueAnimator.setInterpolator(oh.g.g(getContext(), bh.b.T, ch.a.f8277b));
            this.K0.setDuration(oh.g.f(getContext(), bh.b.M, 167));
            this.K0.addUpdateListener(new d());
        }
        this.K0.setFloatValues(this.H0.B(), f10);
        this.K0.start();
    }

    void m0(Editable editable) {
        boolean z10;
        int a10 = this.f16323z.a(editable);
        boolean z11 = this.f16321y;
        int i10 = this.f16319x;
        if (i10 == -1) {
            this.A.setText(String.valueOf(a10));
            this.A.setContentDescription(null);
            this.f16321y = false;
        } else {
            if (a10 > i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f16321y = z10;
            n0(getContext(), this.A, a10, this.f16319x, this.f16321y);
            if (z11 != this.f16321y) {
                o0();
            }
            this.A.setText(a2.a.c().j(getContext().getString(bh.j.f6903d, Integer.valueOf(a10), Integer.valueOf(this.f16319x))));
        }
        if (this.f16303p != null && z11 != this.f16321y) {
            x0(false);
            D0();
            r0();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        this.H0.L(configuration);
    }

    @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
    public void onGlobalLayout() {
        this.f16294i.getViewTreeObserver().removeOnGlobalLayoutListener(this);
        this.N0 = false;
        boolean v02 = v0();
        boolean q02 = q0();
        if (!v02 && !q02) {
            return;
        }
        this.f16303p.post(new Runnable() { // from class: com.google.android.material.textfield.z
            @Override // java.lang.Runnable
            public final void run() {
                TextInputLayout.this.f16303p.requestLayout();
            }
        });
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        EditText editText = this.f16303p;
        if (editText != null) {
            Rect rect = this.f16297k0;
            com.google.android.material.internal.b.a(this, editText, rect);
            j0(rect);
            if (this.O) {
                this.H0.h0(this.f16303p.getTextSize());
                int gravity = this.f16303p.getGravity();
                this.H0.X((gravity & (-113)) | 48);
                this.H0.g0(gravity);
                this.H0.S(s(rect));
                this.H0.c0(v(rect));
                this.H0.N();
                if (C() && !this.G0) {
                    W();
                }
            }
        }
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (!this.N0) {
            this.f16294i.getViewTreeObserver().addOnGlobalLayoutListener(this);
            this.N0 = true;
        }
        z0();
        this.f16294i.x0();
        if (!R()) {
            k0((this.f16303p.getMeasuredWidth() - this.f16303p.getCompoundPaddingLeft()) - this.f16303p.getCompoundPaddingRight());
        }
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof h)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        h hVar = (h) parcelable;
        super.onRestoreInstanceState(hVar.a());
        setError(hVar.f16332i);
        if (hVar.f16333o) {
            post(new c());
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
        if (z10 != this.f16285b0) {
            float a10 = this.f16284a0.r().a(this.f16299m0);
            float a11 = this.f16284a0.t().a(this.f16299m0);
            float a12 = this.f16284a0.j().a(this.f16299m0);
            float a13 = this.f16284a0.l().a(this.f16299m0);
            th.e q10 = this.f16284a0.q();
            th.e s10 = this.f16284a0.s();
            th.l m10 = th.l.a().C(s10).H(q10).t(this.f16284a0.k()).x(this.f16284a0.i()).D(a11).I(a10).u(a13).y(a12).m();
            this.f16285b0 = z10;
            setShapeAppearanceModel(m10);
        }
    }

    @Override // android.view.View
    public Parcelable onSaveInstanceState() {
        h hVar = new h(super.onSaveInstanceState());
        if (e0()) {
            hVar.f16332i = getError();
        }
        hVar.f16333o = this.f16294i.E();
        return hVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q0() {
        boolean z10;
        if (this.f16303p == null) {
            return false;
        }
        boolean z11 = true;
        if (g0()) {
            int measuredWidth = this.f16289e.getMeasuredWidth() - this.f16303p.getPaddingLeft();
            if (this.f16302o0 == null || this.f16304p0 != measuredWidth) {
                ColorDrawable colorDrawable = new ColorDrawable();
                this.f16302o0 = colorDrawable;
                this.f16304p0 = measuredWidth;
                colorDrawable.setBounds(0, 0, measuredWidth, 1);
            }
            Drawable[] compoundDrawablesRelative = this.f16303p.getCompoundDrawablesRelative();
            Drawable drawable = compoundDrawablesRelative[0];
            Drawable drawable2 = this.f16302o0;
            if (drawable != drawable2) {
                this.f16303p.setCompoundDrawablesRelative(drawable2, compoundDrawablesRelative[1], compoundDrawablesRelative[2], compoundDrawablesRelative[3]);
                z10 = true;
            }
            z10 = false;
        } else {
            if (this.f16302o0 != null) {
                Drawable[] compoundDrawablesRelative2 = this.f16303p.getCompoundDrawablesRelative();
                this.f16303p.setCompoundDrawablesRelative(null, compoundDrawablesRelative2[1], compoundDrawablesRelative2[2], compoundDrawablesRelative2[3]);
                this.f16302o0 = null;
                z10 = true;
            }
            z10 = false;
        }
        if (f0()) {
            int measuredWidth2 = this.f16294i.z().getMeasuredWidth() - this.f16303p.getPaddingRight();
            CheckableImageButton k10 = this.f16294i.k();
            if (k10 != null) {
                measuredWidth2 = measuredWidth2 + k10.getMeasuredWidth() + ((ViewGroup.MarginLayoutParams) k10.getLayoutParams()).getMarginStart();
            }
            Drawable[] compoundDrawablesRelative3 = this.f16303p.getCompoundDrawablesRelative();
            Drawable drawable3 = this.f16308r0;
            if (drawable3 != null && this.f16310s0 != measuredWidth2) {
                this.f16310s0 = measuredWidth2;
                drawable3.setBounds(0, 0, measuredWidth2, 1);
                this.f16303p.setCompoundDrawablesRelative(compoundDrawablesRelative3[0], compoundDrawablesRelative3[1], this.f16308r0, compoundDrawablesRelative3[3]);
                return true;
            }
            if (drawable3 == null) {
                ColorDrawable colorDrawable2 = new ColorDrawable();
                this.f16308r0 = colorDrawable2;
                this.f16310s0 = measuredWidth2;
                colorDrawable2.setBounds(0, 0, measuredWidth2, 1);
            }
            Drawable drawable4 = compoundDrawablesRelative3[2];
            Drawable drawable5 = this.f16308r0;
            if (drawable4 != drawable5) {
                this.f16312t0 = drawable4;
                this.f16303p.setCompoundDrawablesRelative(compoundDrawablesRelative3[0], compoundDrawablesRelative3[1], drawable5, compoundDrawablesRelative3[3]);
                return true;
            }
        } else if (this.f16308r0 != null) {
            Drawable[] compoundDrawablesRelative4 = this.f16303p.getCompoundDrawablesRelative();
            if (compoundDrawablesRelative4[2] == this.f16308r0) {
                this.f16303p.setCompoundDrawablesRelative(compoundDrawablesRelative4[0], compoundDrawablesRelative4[1], this.f16312t0, compoundDrawablesRelative4[3]);
            } else {
                z11 = z10;
            }
            this.f16308r0 = null;
            return z11;
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r0() {
        Drawable background;
        TextView textView;
        EditText editText = this.f16303p;
        if (editText != null && this.f16288d0 == 0 && (background = editText.getBackground()) != null) {
            if (e0.a(background)) {
                background = background.mutate();
            }
            if (e0()) {
                background.setColorFilter(androidx.appcompat.widget.j.e(getErrorCurrentTextColors(), PorterDuff.Mode.SRC_IN));
            } else if (this.f16321y && (textView = this.A) != null) {
                background.setColorFilter(androidx.appcompat.widget.j.e(textView.getCurrentTextColor(), PorterDuff.Mode.SRC_IN));
            } else {
                s1.a.c(background);
                this.f16303p.refreshDrawableState();
            }
        }
    }

    public void setBoxBackgroundColor(int i10) {
        if (this.f16296j0 != i10) {
            this.f16296j0 = i10;
            this.A0 = i10;
            this.C0 = i10;
            this.D0 = i10;
            n();
        }
    }

    public void setBoxBackgroundColorResource(int i10) {
        setBoxBackgroundColor(androidx.core.content.a.c(getContext(), i10));
    }

    public void setBoxBackgroundColorStateList(@NonNull ColorStateList colorStateList) {
        int defaultColor = colorStateList.getDefaultColor();
        this.A0 = defaultColor;
        this.f16296j0 = defaultColor;
        this.B0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
        this.C0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        this.D0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
        n();
    }

    public void setBoxBackgroundMode(int i10) {
        if (i10 != this.f16288d0) {
            this.f16288d0 = i10;
            if (this.f16303p != null) {
                V();
            }
        }
    }

    public void setBoxCollapsedPaddingTop(int i10) {
        this.f16290e0 = i10;
    }

    public void setBoxCornerFamily(int i10) {
        this.f16284a0 = this.f16284a0.w().B(i10, this.f16284a0.r()).G(i10, this.f16284a0.t()).s(i10, this.f16284a0.j()).w(i10, this.f16284a0.l()).m();
        n();
    }

    public void setBoxStrokeColor(int i10) {
        if (this.f16322y0 != i10) {
            this.f16322y0 = i10;
            D0();
        }
    }

    public void setBoxStrokeColorStateList(@NonNull ColorStateList colorStateList) {
        if (colorStateList.isStateful()) {
            this.f16318w0 = colorStateList.getDefaultColor();
            this.E0 = colorStateList.getColorForState(new int[]{-16842910}, -1);
            this.f16320x0 = colorStateList.getColorForState(new int[]{16843623, 16842910}, -1);
            this.f16322y0 = colorStateList.getColorForState(new int[]{16842908, 16842910}, -1);
        } else if (this.f16322y0 != colorStateList.getDefaultColor()) {
            this.f16322y0 = colorStateList.getDefaultColor();
        }
        D0();
    }

    public void setBoxStrokeErrorColor(ColorStateList colorStateList) {
        if (this.f16324z0 != colorStateList) {
            this.f16324z0 = colorStateList;
            D0();
        }
    }

    public void setBoxStrokeWidth(int i10) {
        this.f16292g0 = i10;
        D0();
    }

    public void setBoxStrokeWidthFocused(int i10) {
        this.f16293h0 = i10;
        D0();
    }

    public void setBoxStrokeWidthFocusedResource(int i10) {
        setBoxStrokeWidthFocused(getResources().getDimensionPixelSize(i10));
    }

    public void setBoxStrokeWidthResource(int i10) {
        setBoxStrokeWidth(getResources().getDimensionPixelSize(i10));
    }

    public void setCounterEnabled(boolean z10) {
        if (this.f16317w != z10) {
            if (z10) {
                AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
                this.A = appCompatTextView;
                appCompatTextView.setId(bh.f.X);
                Typeface typeface = this.f16300n0;
                if (typeface != null) {
                    this.A.setTypeface(typeface);
                }
                this.A.setMaxLines(1);
                this.f16315v.e(this.A, 2);
                ((ViewGroup.MarginLayoutParams) this.A.getLayoutParams()).setMarginStart(getResources().getDimensionPixelOffset(bh.d.A0));
                o0();
                l0();
            } else {
                this.f16315v.C(this.A, 2);
                this.A = null;
            }
            this.f16317w = z10;
        }
    }

    public void setCounterMaxLength(int i10) {
        if (this.f16319x != i10) {
            if (i10 > 0) {
                this.f16319x = i10;
            } else {
                this.f16319x = -1;
            }
            if (this.f16317w) {
                l0();
            }
        }
    }

    public void setCounterOverflowTextAppearance(int i10) {
        if (this.B != i10) {
            this.B = i10;
            o0();
        }
    }

    public void setCounterOverflowTextColor(ColorStateList colorStateList) {
        if (this.L != colorStateList) {
            this.L = colorStateList;
            o0();
        }
    }

    public void setCounterTextAppearance(int i10) {
        if (this.C != i10) {
            this.C = i10;
            o0();
        }
    }

    public void setCounterTextColor(ColorStateList colorStateList) {
        if (this.K != colorStateList) {
            this.K = colorStateList;
            o0();
        }
    }

    public void setCursorColor(ColorStateList colorStateList) {
        if (this.M != colorStateList) {
            this.M = colorStateList;
            p0();
        }
    }

    public void setCursorErrorColor(ColorStateList colorStateList) {
        if (this.N != colorStateList) {
            this.N = colorStateList;
            if (S()) {
                p0();
            }
        }
    }

    public void setDefaultHintTextColor(ColorStateList colorStateList) {
        this.f16314u0 = colorStateList;
        this.f16316v0 = colorStateList;
        if (this.f16303p != null) {
            x0(false);
        }
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        Y(this, z10);
        super.setEnabled(z10);
    }

    public void setEndIconActivated(boolean z10) {
        this.f16294i.N(z10);
    }

    public void setEndIconCheckable(boolean z10) {
        this.f16294i.O(z10);
    }

    public void setEndIconContentDescription(int i10) {
        this.f16294i.P(i10);
    }

    public void setEndIconDrawable(int i10) {
        this.f16294i.R(i10);
    }

    public void setEndIconMinSize(int i10) {
        this.f16294i.T(i10);
    }

    public void setEndIconMode(int i10) {
        this.f16294i.U(i10);
    }

    public void setEndIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16294i.V(onClickListener);
    }

    public void setEndIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16294i.W(onLongClickListener);
    }

    public void setEndIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f16294i.X(scaleType);
    }

    public void setEndIconTintList(ColorStateList colorStateList) {
        this.f16294i.Y(colorStateList);
    }

    public void setEndIconTintMode(PorterDuff.Mode mode) {
        this.f16294i.Z(mode);
    }

    public void setEndIconVisible(boolean z10) {
        this.f16294i.a0(z10);
    }

    public void setError(CharSequence charSequence) {
        if (!this.f16315v.A()) {
            if (TextUtils.isEmpty(charSequence)) {
                return;
            }
            setErrorEnabled(true);
        }
        if (!TextUtils.isEmpty(charSequence)) {
            this.f16315v.Q(charSequence);
        } else {
            this.f16315v.w();
        }
    }

    public void setErrorAccessibilityLiveRegion(int i10) {
        this.f16315v.E(i10);
    }

    public void setErrorContentDescription(CharSequence charSequence) {
        this.f16315v.F(charSequence);
    }

    public void setErrorEnabled(boolean z10) {
        this.f16315v.G(z10);
    }

    public void setErrorIconDrawable(int i10) {
        this.f16294i.b0(i10);
    }

    public void setErrorIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16294i.d0(onClickListener);
    }

    public void setErrorIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16294i.e0(onLongClickListener);
    }

    public void setErrorIconTintList(ColorStateList colorStateList) {
        this.f16294i.f0(colorStateList);
    }

    public void setErrorIconTintMode(PorterDuff.Mode mode) {
        this.f16294i.g0(mode);
    }

    public void setErrorTextAppearance(int i10) {
        this.f16315v.H(i10);
    }

    public void setErrorTextColor(ColorStateList colorStateList) {
        this.f16315v.I(colorStateList);
    }

    public void setExpandedHintEnabled(boolean z10) {
        if (this.I0 != z10) {
            this.I0 = z10;
            x0(false);
        }
    }

    public void setHelperText(CharSequence charSequence) {
        if (TextUtils.isEmpty(charSequence)) {
            if (P()) {
                setHelperTextEnabled(false);
                return;
            }
            return;
        }
        if (!P()) {
            setHelperTextEnabled(true);
        }
        this.f16315v.R(charSequence);
    }

    public void setHelperTextColor(ColorStateList colorStateList) {
        this.f16315v.L(colorStateList);
    }

    public void setHelperTextEnabled(boolean z10) {
        this.f16315v.K(z10);
    }

    public void setHelperTextTextAppearance(int i10) {
        this.f16315v.J(i10);
    }

    public void setHint(CharSequence charSequence) {
        if (this.O) {
            setHintInternal(charSequence);
            sendAccessibilityEvent(RecyclerView.ItemAnimator.FLAG_MOVED);
        }
    }

    public void setHintAnimationEnabled(boolean z10) {
        this.J0 = z10;
    }

    public void setHintEnabled(boolean z10) {
        if (z10 != this.O) {
            this.O = z10;
            if (!z10) {
                this.Q = false;
                if (!TextUtils.isEmpty(this.P) && TextUtils.isEmpty(this.f16303p.getHint())) {
                    this.f16303p.setHint(this.P);
                }
                setHintInternal(null);
            } else {
                CharSequence hint = this.f16303p.getHint();
                if (!TextUtils.isEmpty(hint)) {
                    if (TextUtils.isEmpty(this.P)) {
                        setHint(hint);
                    }
                    this.f16303p.setHint((CharSequence) null);
                }
                this.Q = true;
            }
            if (this.f16303p != null) {
                w0();
            }
        }
    }

    public void setHintMaxLines(int i10) {
        this.H0.T(i10);
        this.H0.e0(i10);
        requestLayout();
    }

    public void setHintTextAppearance(int i10) {
        this.H0.U(i10);
        this.f16316v0 = this.H0.p();
        if (this.f16303p != null) {
            x0(false);
            w0();
        }
    }

    public void setHintTextColor(ColorStateList colorStateList) {
        if (this.f16316v0 != colorStateList) {
            if (this.f16314u0 == null) {
                this.H0.W(colorStateList);
            }
            this.f16316v0 = colorStateList;
            if (this.f16303p != null) {
                x0(false);
            }
        }
    }

    public void setLengthCounter(@NonNull f fVar) {
        this.f16323z = fVar;
    }

    public void setMaxEms(int i10) {
        this.f16309s = i10;
        EditText editText = this.f16303p;
        if (editText != null && i10 != -1) {
            editText.setMaxEms(i10);
        }
    }

    public void setMaxWidth(int i10) {
        this.f16313u = i10;
        EditText editText = this.f16303p;
        if (editText != null && i10 != -1) {
            editText.setMaxWidth(i10);
        }
    }

    public void setMaxWidthResource(int i10) {
        setMaxWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    public void setMinEms(int i10) {
        this.f16307r = i10;
        EditText editText = this.f16303p;
        if (editText != null && i10 != -1) {
            editText.setMinEms(i10);
        }
    }

    public void setMinWidth(int i10) {
        this.f16311t = i10;
        EditText editText = this.f16303p;
        if (editText != null && i10 != -1) {
            editText.setMinWidth(i10);
        }
    }

    public void setMinWidthResource(int i10) {
        setMinWidth(getContext().getResources().getDimensionPixelSize(i10));
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(int i10) {
        this.f16294i.i0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(int i10) {
        this.f16294i.k0(i10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleEnabled(boolean z10) {
        this.f16294i.m0(z10);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintList(ColorStateList colorStateList) {
        this.f16294i.n0(colorStateList);
    }

    @Deprecated
    public void setPasswordVisibilityToggleTintMode(PorterDuff.Mode mode) {
        this.f16294i.o0(mode);
    }

    public void setPlaceholderText(CharSequence charSequence) {
        if (this.F == null) {
            AppCompatTextView appCompatTextView = new AppCompatTextView(getContext());
            this.F = appCompatTextView;
            appCompatTextView.setId(bh.f.f6838a0);
            this.F.setImportantForAccessibility(1);
            this.F.setAccessibilityLiveRegion(1);
            androidx.transition.e B = B();
            this.I = B;
            B.t0(67L);
            this.J = B();
            setPlaceholderTextAppearance(this.H);
            setPlaceholderTextColor(this.G);
            i0.k0(this.F, new b());
        }
        if (TextUtils.isEmpty(charSequence)) {
            setPlaceholderTextEnabled(false);
        } else {
            if (!this.E) {
                setPlaceholderTextEnabled(true);
            }
            this.D = charSequence;
        }
        A0();
    }

    public void setPlaceholderTextAppearance(int i10) {
        this.H = i10;
        TextView textView = this.F;
        if (textView != null) {
            androidx.core.widget.j.q(textView, i10);
        }
    }

    public void setPlaceholderTextColor(ColorStateList colorStateList) {
        if (this.G != colorStateList) {
            this.G = colorStateList;
            TextView textView = this.F;
            if (textView != null && colorStateList != null) {
                textView.setTextColor(colorStateList);
            }
        }
    }

    public void setPrefixText(CharSequence charSequence) {
        this.f16289e.n(charSequence);
    }

    public void setPrefixTextAppearance(int i10) {
        this.f16289e.o(i10);
    }

    public void setPrefixTextColor(@NonNull ColorStateList colorStateList) {
        this.f16289e.p(colorStateList);
    }

    public void setShapeAppearanceModel(@NonNull th.l lVar) {
        th.h hVar = this.R;
        if (hVar != null && hVar.J() != lVar) {
            this.f16284a0 = lVar;
            n();
        }
    }

    public void setStartIconCheckable(boolean z10) {
        this.f16289e.q(z10);
    }

    public void setStartIconContentDescription(int i10) {
        setStartIconContentDescription(i10 != 0 ? getResources().getText(i10) : null);
    }

    public void setStartIconDrawable(int i10) {
        setStartIconDrawable(i10 != 0 ? g.a.b(getContext(), i10) : null);
    }

    public void setStartIconMinSize(int i10) {
        this.f16289e.t(i10);
    }

    public void setStartIconOnClickListener(View.OnClickListener onClickListener) {
        this.f16289e.u(onClickListener);
    }

    public void setStartIconOnLongClickListener(View.OnLongClickListener onLongClickListener) {
        this.f16289e.v(onLongClickListener);
    }

    public void setStartIconScaleType(@NonNull ImageView.ScaleType scaleType) {
        this.f16289e.w(scaleType);
    }

    public void setStartIconTintList(ColorStateList colorStateList) {
        this.f16289e.x(colorStateList);
    }

    public void setStartIconTintMode(PorterDuff.Mode mode) {
        this.f16289e.y(mode);
    }

    public void setStartIconVisible(boolean z10) {
        this.f16289e.z(z10);
    }

    public void setSuffixText(CharSequence charSequence) {
        this.f16294i.p0(charSequence);
    }

    public void setSuffixTextAppearance(int i10) {
        this.f16294i.q0(i10);
    }

    public void setSuffixTextColor(@NonNull ColorStateList colorStateList) {
        this.f16294i.r0(colorStateList);
    }

    public void setTextInputAccessibilityDelegate(e eVar) {
        EditText editText = this.f16303p;
        if (editText != null) {
            i0.k0(editText, eVar);
        }
    }

    public void setTypeface(Typeface typeface) {
        if (typeface != this.f16300n0) {
            this.f16300n0 = typeface;
            this.H0.p0(typeface);
            this.f16315v.N(typeface);
            TextView textView = this.A;
            if (textView != null) {
                textView.setTypeface(typeface);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t0() {
        EditText editText = this.f16303p;
        if (editText != null && this.R != null) {
            if ((this.U || editText.getBackground() == null) && this.f16288d0 != 0) {
                s0();
                this.U = true;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x0(boolean z10) {
        y0(z10, false);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public TextInputLayout(android.content.Context r17, android.util.AttributeSet r18, int r19) {
        /*
            Method dump skipped, instructions count: 902
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.textfield.TextInputLayout.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setEndIconContentDescription(CharSequence charSequence) {
        this.f16294i.Q(charSequence);
    }

    public void setEndIconDrawable(Drawable drawable) {
        this.f16294i.S(drawable);
    }

    public void setErrorIconDrawable(Drawable drawable) {
        this.f16294i.c0(drawable);
    }

    @Deprecated
    public void setPasswordVisibilityToggleContentDescription(CharSequence charSequence) {
        this.f16294i.j0(charSequence);
    }

    @Deprecated
    public void setPasswordVisibilityToggleDrawable(Drawable drawable) {
        this.f16294i.l0(drawable);
    }

    public void setStartIconContentDescription(CharSequence charSequence) {
        this.f16289e.r(charSequence);
    }

    public void setStartIconDrawable(Drawable drawable) {
        this.f16289e.s(drawable);
    }

    public void setHint(int i10) {
        setHint(i10 != 0 ? getResources().getText(i10) : null);
    }
}
