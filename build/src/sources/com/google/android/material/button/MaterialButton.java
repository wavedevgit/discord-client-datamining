package com.google.android.material.button;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.Layout;
import android.text.TextPaint;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Button;
import android.widget.Checkable;
import android.widget.CompoundButton;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.dynamicanimation.animation.SpringAnimation;
import bh.k;
import java.util.Iterator;
import java.util.LinkedHashSet;
import oh.g;
import th.h;
import th.i;
import th.l;
import th.o;
import th.q;
import th.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialButton extends androidx.appcompat.widget.e implements Checkable, o {
    private static final int[] Q = {16842911};
    private static final int[] R = {16842912};
    private static final int S = k.f6945t;
    private static final int T = bh.b.F;
    private static final b3.d U = new a("widthIncrease");
    private boolean A;
    private int B;
    private int C;
    private float D;
    private int E;
    private int F;
    private LinearLayout.LayoutParams G;
    private boolean H;
    private int I;
    private boolean J;
    int K;
    r L;
    int M;
    private float N;
    private float O;
    private SpringAnimation P;

    /* renamed from: o  reason: collision with root package name */
    private final e f15381o;

    /* renamed from: p  reason: collision with root package name */
    private final LinkedHashSet f15382p;

    /* renamed from: q  reason: collision with root package name */
    private b f15383q;

    /* renamed from: r  reason: collision with root package name */
    private PorterDuff.Mode f15384r;

    /* renamed from: s  reason: collision with root package name */
    private ColorStateList f15385s;

    /* renamed from: t  reason: collision with root package name */
    private Drawable f15386t;

    /* renamed from: u  reason: collision with root package name */
    private String f15387u;

    /* renamed from: v  reason: collision with root package name */
    private int f15388v;

    /* renamed from: w  reason: collision with root package name */
    private int f15389w;

    /* renamed from: x  reason: collision with root package name */
    private int f15390x;

    /* renamed from: y  reason: collision with root package name */
    private int f15391y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15392z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends b3.d {
        a(String str) {
            super(str);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(MaterialButton materialButton) {
            return materialButton.getDisplayedWidthIncrease();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(MaterialButton materialButton, float f10) {
            materialButton.setDisplayedWidthIncrease(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface b {
        void a(MaterialButton materialButton, boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends u2.a {
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        boolean f15393i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public c createFromParcel(Parcel parcel) {
                return new c(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public c createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new c(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(Parcelable parcelable) {
            super(parcelable);
        }

        private void b(Parcel parcel) {
            boolean z10 = true;
            if (parcel.readInt() != 1) {
                z10 = false;
            }
            this.f15393i = z10;
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f15393i ? 1 : 0);
        }

        public c(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            if (classLoader == null) {
                getClass().getClassLoader();
            }
            b(parcel);
        }
    }

    public MaterialButton(Context context) {
        this(context, null);
    }

    public static /* synthetic */ void a(MaterialButton materialButton) {
        materialButton.I = materialButton.getOpticalCenterShift();
        materialButton.s();
        materialButton.invalidate();
    }

    public static /* synthetic */ void b(MaterialButton materialButton, float f10) {
        int i10 = (int) (f10 * 0.11f);
        if (materialButton.I != i10) {
            materialButton.I = i10;
            materialButton.s();
            materialButton.invalidate();
        }
    }

    private androidx.dynamicanimation.animation.d e() {
        return g.h(getContext(), bh.b.X, k.f6926a);
    }

    private void f() {
        SpringAnimation springAnimation = new SpringAnimation(this, U);
        this.P = springAnimation;
        springAnimation.z(e());
    }

    private Layout.Alignment getActualTextAlignment() {
        int textAlignment = getTextAlignment();
        if (textAlignment != 1) {
            if (textAlignment != 6 && textAlignment != 3) {
                if (textAlignment != 4) {
                    return Layout.Alignment.ALIGN_NORMAL;
                }
                return Layout.Alignment.ALIGN_CENTER;
            }
            return Layout.Alignment.ALIGN_OPPOSITE;
        }
        return getGravityTextAlignment();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float getDisplayedWidthIncrease() {
        return this.N;
    }

    private Layout.Alignment getGravityTextAlignment() {
        int gravity = getGravity() & 8388615;
        if (gravity != 1) {
            if (gravity != 5 && gravity != 8388613) {
                return Layout.Alignment.ALIGN_NORMAL;
            }
            return Layout.Alignment.ALIGN_OPPOSITE;
        }
        return Layout.Alignment.ALIGN_CENTER;
    }

    private int getOpticalCenterShift() {
        h g10;
        if (this.H && this.J && (g10 = this.f15381o.g()) != null) {
            return (int) (g10.B() * 0.11f);
        }
        return 0;
    }

    private int getTextHeight() {
        if (getLineCount() > 1) {
            return getLayout().getHeight();
        }
        TextPaint paint = getPaint();
        String charSequence = getText().toString();
        if (getTransformationMethod() != null) {
            charSequence = getTransformationMethod().getTransformation(charSequence, this).toString();
        }
        Rect rect = new Rect();
        paint.getTextBounds(charSequence, 0, charSequence.length(), rect);
        return Math.min(rect.height(), getLayout().getHeight());
    }

    private int getTextLayoutWidth() {
        int lineCount = getLineCount();
        float f10 = 0.0f;
        for (int i10 = 0; i10 < lineCount; i10++) {
            f10 = Math.max(f10, getLayout().getLineWidth(i10));
        }
        return (int) Math.ceil(f10);
    }

    private boolean h() {
        int i10 = this.B;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private boolean i() {
        int i10 = this.B;
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    private boolean j() {
        int i10 = this.B;
        if (i10 != 16 && i10 != 32) {
            return false;
        }
        return true;
    }

    private boolean k() {
        if ((getParent() instanceof d) && ((d) getParent()).getOrientation() == 0) {
            return true;
        }
        return false;
    }

    private boolean l() {
        if (getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    private boolean m() {
        e eVar = this.f15381o;
        if (eVar != null && !eVar.q()) {
            return true;
        }
        return false;
    }

    private void n(boolean z10) {
        if (this.L != null) {
            if (this.P == null) {
                f();
            }
            if (this.J) {
                this.P.u(Math.min(this.M, this.L.e(getDrawableState()).f48929a.a(getWidth())));
                if (z10) {
                    this.P.A();
                }
            }
        }
    }

    private void p() {
        if (i()) {
            setCompoundDrawablesRelative(this.f15386t, null, null, null);
        } else if (h()) {
            setCompoundDrawablesRelative(null, null, this.f15386t, null);
        } else if (j()) {
            setCompoundDrawablesRelative(null, this.f15386t, null, null);
        }
    }

    private void q(boolean z10) {
        Drawable drawable = this.f15386t;
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f15386t = mutate;
            mutate.setTintList(this.f15385s);
            PorterDuff.Mode mode = this.f15384r;
            if (mode != null) {
                this.f15386t.setTintMode(mode);
            }
            int i10 = this.f15388v;
            if (i10 == 0) {
                i10 = this.f15386t.getIntrinsicWidth();
            }
            int i11 = this.f15388v;
            if (i11 == 0) {
                i11 = this.f15386t.getIntrinsicHeight();
            }
            Drawable drawable2 = this.f15386t;
            int i12 = this.f15389w;
            int i13 = this.f15390x;
            drawable2.setBounds(i12, i13, i10 + i12, i11 + i13);
            this.f15386t.setVisible(true, z10);
        }
        if (z10) {
            p();
            return;
        }
        Drawable[] compoundDrawablesRelative = getCompoundDrawablesRelative();
        Drawable drawable3 = compoundDrawablesRelative[0];
        Drawable drawable4 = compoundDrawablesRelative[1];
        Drawable drawable5 = compoundDrawablesRelative[2];
        if ((i() && drawable3 != this.f15386t) || ((h() && drawable5 != this.f15386t) || (j() && drawable4 != this.f15386t))) {
            p();
        }
    }

    private void r(int i10, int i11) {
        if (this.f15386t != null && getLayout() != null) {
            if (!i() && !h()) {
                if (j()) {
                    this.f15389w = 0;
                    if (this.B == 16) {
                        this.f15390x = 0;
                        q(false);
                        return;
                    }
                    int i12 = this.f15388v;
                    if (i12 == 0) {
                        i12 = this.f15386t.getIntrinsicHeight();
                    }
                    int max = Math.max(0, (((((i11 - getTextHeight()) - getPaddingTop()) - i12) - this.f15391y) - getPaddingBottom()) / 2);
                    if (this.f15390x != max) {
                        this.f15390x = max;
                        q(false);
                        return;
                    }
                    return;
                }
                return;
            }
            this.f15390x = 0;
            Layout.Alignment actualTextAlignment = getActualTextAlignment();
            int i13 = this.B;
            boolean z10 = true;
            if (i13 != 1 && i13 != 3 && ((i13 != 2 || actualTextAlignment != Layout.Alignment.ALIGN_NORMAL) && (i13 != 4 || actualTextAlignment != Layout.Alignment.ALIGN_OPPOSITE))) {
                int i14 = this.f15388v;
                if (i14 == 0) {
                    i14 = this.f15386t.getIntrinsicWidth();
                }
                int textLayoutWidth = ((((i10 - getTextLayoutWidth()) - getPaddingEnd()) - i14) - this.f15391y) - getPaddingStart();
                if (actualTextAlignment == Layout.Alignment.ALIGN_CENTER) {
                    textLayoutWidth /= 2;
                }
                boolean l10 = l();
                if (this.B != 4) {
                    z10 = false;
                }
                if (l10 != z10) {
                    textLayoutWidth = -textLayoutWidth;
                }
                if (this.f15389w != textLayoutWidth) {
                    this.f15389w = textLayoutWidth;
                    q(false);
                    return;
                }
                return;
            }
            this.f15389w = 0;
            q(false);
        }
    }

    private void s() {
        int i10 = (int) (this.N - this.O);
        int i11 = (i10 / 2) + this.I;
        getLayoutParams().width = (int) (this.D + i10);
        setPaddingRelative(this.E + i11, getPaddingTop(), (this.F + i10) - i11, getPaddingBottom());
    }

    private void setCheckedInternal(boolean z10) {
        if (g() && this.f15392z != z10) {
            this.f15392z = z10;
            refreshDrawableState();
            if (getParent() instanceof MaterialButtonToggleGroup) {
                ((MaterialButtonToggleGroup) getParent()).w(this, this.f15392z);
            }
            if (!this.A) {
                this.A = true;
                Iterator it = this.f15382p.iterator();
                if (!it.hasNext()) {
                    this.A = false;
                } else {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void setDisplayedWidthIncrease(float f10) {
        if (this.N != f10) {
            this.N = f10;
            s();
            invalidate();
            if (getParent() instanceof d) {
                ((d) getParent()).k(this, (int) this.N);
            }
        }
    }

    public boolean g() {
        e eVar = this.f15381o;
        if (eVar != null && eVar.r()) {
            return true;
        }
        return false;
    }

    @NonNull
    @SuppressLint({"KotlinPropertyAccess"})
    String getA11yClassName() {
        Class cls;
        if (!TextUtils.isEmpty(this.f15387u)) {
            return this.f15387u;
        }
        if (g()) {
            cls = CompoundButton.class;
        } else {
            cls = Button.class;
        }
        return cls.getName();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int getAllowedWidthDecrease() {
        return this.K;
    }

    @Override // android.view.View
    public ColorStateList getBackgroundTintList() {
        return getSupportBackgroundTintList();
    }

    @Override // android.view.View
    public PorterDuff.Mode getBackgroundTintMode() {
        return getSupportBackgroundTintMode();
    }

    public int getCornerRadius() {
        if (m()) {
            return this.f15381o.b();
        }
        return 0;
    }

    public androidx.dynamicanimation.animation.d getCornerSpringForce() {
        return this.f15381o.c();
    }

    public Drawable getIcon() {
        return this.f15386t;
    }

    public int getIconGravity() {
        return this.B;
    }

    public int getIconPadding() {
        return this.f15391y;
    }

    public int getIconSize() {
        return this.f15388v;
    }

    public ColorStateList getIconTint() {
        return this.f15385s;
    }

    public PorterDuff.Mode getIconTintMode() {
        return this.f15384r;
    }

    public int getInsetBottom() {
        return this.f15381o.d();
    }

    public int getInsetTop() {
        return this.f15381o.e();
    }

    public ColorStateList getRippleColor() {
        if (m()) {
            return this.f15381o.i();
        }
        return null;
    }

    @NonNull
    public l getShapeAppearanceModel() {
        if (m()) {
            return this.f15381o.j();
        }
        throw new IllegalStateException("Attempted to get ShapeAppearanceModel from a MaterialButton which has an overwritten background.");
    }

    public q getStateListShapeAppearanceModel() {
        if (m()) {
            return this.f15381o.k();
        }
        throw new IllegalStateException("Attempted to get StateListShapeAppearanceModel from a MaterialButton which has an overwritten background.");
    }

    public ColorStateList getStrokeColor() {
        if (m()) {
            return this.f15381o.l();
        }
        return null;
    }

    public int getStrokeWidth() {
        if (m()) {
            return this.f15381o.m();
        }
        return 0;
    }

    @Override // androidx.appcompat.widget.e
    public ColorStateList getSupportBackgroundTintList() {
        if (m()) {
            return this.f15381o.n();
        }
        return super.getSupportBackgroundTintList();
    }

    @Override // androidx.appcompat.widget.e
    public PorterDuff.Mode getSupportBackgroundTintMode() {
        if (m()) {
            return this.f15381o.o();
        }
        return super.getSupportBackgroundTintMode();
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f15392z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o() {
        LinearLayout.LayoutParams layoutParams = this.G;
        if (layoutParams != null) {
            setLayoutParams(layoutParams);
            this.G = null;
            this.D = -1.0f;
        }
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (m()) {
            i.f(this, this.f15381o.g());
        }
    }

    @Override // android.widget.TextView, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 2);
        if (g()) {
            View.mergeDrawableStates(onCreateDrawableState, Q);
        }
        if (isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, R);
        }
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        accessibilityEvent.setClassName(getA11yClassName());
        accessibilityEvent.setChecked(isChecked());
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        accessibilityNodeInfo.setClassName(getA11yClassName());
        accessibilityNodeInfo.setCheckable(g());
        accessibilityNodeInfo.setChecked(isChecked());
        accessibilityNodeInfo.setClickable(isClickable());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.e, android.widget.TextView, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        super.onLayout(z10, i10, i11, i12, i13);
        r(getMeasuredWidth(), getMeasuredHeight());
        int i15 = getResources().getConfiguration().orientation;
        if (this.C != i15) {
            this.C = i15;
            this.D = -1.0f;
        }
        if (this.D == -1.0f) {
            this.D = getMeasuredWidth();
            if (this.G == null && (getParent() instanceof d) && ((d) getParent()).getButtonSizeChange() != null) {
                this.G = (LinearLayout.LayoutParams) getLayoutParams();
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(this.G);
                layoutParams.width = (int) this.D;
                setLayoutParams(layoutParams);
            }
        }
        if (this.K == -1) {
            if (this.f15386t == null) {
                i14 = 0;
            } else {
                int iconPadding = getIconPadding();
                int i16 = this.f15388v;
                if (i16 == 0) {
                    i16 = this.f15386t.getIntrinsicWidth();
                }
                i14 = iconPadding + i16;
            }
            this.K = (getMeasuredWidth() - getTextLayoutWidth()) - i14;
        }
        if (this.E == -1) {
            this.E = getPaddingStart();
        }
        if (this.F == -1) {
            this.F = getPaddingEnd();
        }
        this.J = k();
    }

    @Override // android.widget.TextView, android.view.View
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof c)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        c cVar = (c) parcelable;
        super.onRestoreInstanceState(cVar.a());
        setChecked(cVar.f15393i);
    }

    @Override // android.widget.TextView, android.view.View
    public Parcelable onSaveInstanceState() {
        c cVar = new c(super.onSaveInstanceState());
        cVar.f15393i = this.f15392z;
        return cVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.e, android.widget.TextView
    public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        super.onTextChanged(charSequence, i10, i11, i12);
        r(getMeasuredWidth(), getMeasuredHeight());
    }

    @Override // android.view.View
    public boolean performClick() {
        if (isEnabled() && this.f15381o.s()) {
            toggle();
        }
        return super.performClick();
    }

    @Override // android.view.View
    public void refreshDrawableState() {
        super.refreshDrawableState();
        if (this.f15386t != null) {
            if (this.f15386t.setState(getDrawableState())) {
                invalidate();
            }
        }
    }

    public void setA11yClassName(String str) {
        this.f15387u = str;
    }

    @Override // android.view.View
    public void setBackground(@NonNull Drawable drawable) {
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        if (m()) {
            this.f15381o.u(i10);
        } else {
            super.setBackgroundColor(i10);
        }
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void setBackgroundDrawable(@NonNull Drawable drawable) {
        if (m()) {
            if (drawable != getBackground()) {
                Log.w("MaterialButton", "MaterialButton manages its own background to control elevation, shape, color and states. Consider using backgroundTint, shapeAppearance and other attributes where available. A custom background will ignore these attributes and you should consider handling interaction states such as pressed, focused and disabled");
                this.f15381o.v();
                super.setBackgroundDrawable(drawable);
                return;
            }
            getBackground().setState(drawable.getState());
            return;
        }
        super.setBackgroundDrawable(drawable);
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void setBackgroundResource(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundTintList(ColorStateList colorStateList) {
        setSupportBackgroundTintList(colorStateList);
    }

    @Override // android.view.View
    public void setBackgroundTintMode(PorterDuff.Mode mode) {
        setSupportBackgroundTintMode(mode);
    }

    public void setCheckable(boolean z10) {
        if (m()) {
            this.f15381o.w(z10);
        }
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        setCheckedInternal(z10);
    }

    public void setCornerRadius(int i10) {
        if (m()) {
            this.f15381o.x(i10);
        }
    }

    public void setCornerRadiusResource(int i10) {
        if (m()) {
            setCornerRadius(getResources().getDimensionPixelSize(i10));
        }
    }

    public void setCornerSpringForce(@NonNull androidx.dynamicanimation.animation.d dVar) {
        this.f15381o.z(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setDisplayedWidthDecrease(int i10) {
        this.O = Math.min(i10, this.K);
        s();
        invalidate();
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        if (m()) {
            this.f15381o.g().e0(f10);
        }
    }

    public void setIcon(Drawable drawable) {
        if (this.f15386t != drawable) {
            this.f15386t = drawable;
            q(true);
            r(getMeasuredWidth(), getMeasuredHeight());
        }
    }

    public void setIconGravity(int i10) {
        if (this.B != i10) {
            this.B = i10;
            r(getMeasuredWidth(), getMeasuredHeight());
        }
    }

    public void setIconPadding(int i10) {
        if (this.f15391y != i10) {
            this.f15391y = i10;
            setCompoundDrawablePadding(i10);
        }
    }

    public void setIconResource(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = g.a.b(getContext(), i10);
        } else {
            drawable = null;
        }
        setIcon(drawable);
    }

    public void setIconSize(int i10) {
        if (i10 >= 0) {
            if (this.f15388v != i10) {
                this.f15388v = i10;
                q(true);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("iconSize cannot be less than 0");
    }

    public void setIconTint(ColorStateList colorStateList) {
        if (this.f15385s != colorStateList) {
            this.f15385s = colorStateList;
            q(false);
        }
    }

    public void setIconTintMode(PorterDuff.Mode mode) {
        if (this.f15384r != mode) {
            this.f15384r = mode;
            q(false);
        }
    }

    public void setIconTintResource(int i10) {
        setIconTint(g.a.a(getContext(), i10));
    }

    public void setInsetBottom(int i10) {
        this.f15381o.A(i10);
    }

    public void setInsetTop(int i10) {
        this.f15381o.B(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setInternalBackground(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setOnPressedChangeListenerInternal(b bVar) {
        this.f15383q = bVar;
    }

    public void setOpticalCenterEnabled(boolean z10) {
        if (this.H != z10) {
            this.H = z10;
            if (z10) {
                this.f15381o.y(new h.d() { // from class: com.google.android.material.button.a
                    @Override // th.h.d
                    public final void a(float f10) {
                        MaterialButton.b(MaterialButton.this, f10);
                    }
                });
            } else {
                this.f15381o.y(null);
            }
            post(new Runnable() { // from class: com.google.android.material.button.b
                @Override // java.lang.Runnable
                public final void run() {
                    MaterialButton.a(MaterialButton.this);
                }
            });
        }
    }

    @Override // android.view.View
    public void setPressed(boolean z10) {
        b bVar = this.f15383q;
        if (bVar != null) {
            bVar.a(this, z10);
        }
        super.setPressed(z10);
        n(false);
    }

    public void setRippleColor(ColorStateList colorStateList) {
        if (m()) {
            this.f15381o.C(colorStateList);
        }
    }

    public void setRippleColorResource(int i10) {
        if (m()) {
            setRippleColor(g.a.a(getContext(), i10));
        }
    }

    @Override // th.o
    public void setShapeAppearanceModel(@NonNull l lVar) {
        if (m()) {
            this.f15381o.D(lVar);
            return;
        }
        throw new IllegalStateException("Attempted to set ShapeAppearanceModel on a MaterialButton which has an overwritten background.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setShouldDrawSurfaceColorStroke(boolean z10) {
        if (m()) {
            this.f15381o.E(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setSizeChange(@NonNull r rVar) {
        if (this.L != rVar) {
            this.L = rVar;
            n(true);
        }
    }

    public void setStateListShapeAppearanceModel(@NonNull q qVar) {
        if (m()) {
            if (this.f15381o.c() == null && qVar.f()) {
                this.f15381o.z(e());
            }
            this.f15381o.F(qVar);
            return;
        }
        throw new IllegalStateException("Attempted to set StateListShapeAppearanceModel on a MaterialButton which has an overwritten background.");
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        if (m()) {
            this.f15381o.G(colorStateList);
        }
    }

    public void setStrokeColorResource(int i10) {
        if (m()) {
            setStrokeColor(g.a.a(getContext(), i10));
        }
    }

    public void setStrokeWidth(int i10) {
        if (m()) {
            this.f15381o.H(i10);
        }
    }

    public void setStrokeWidthResource(int i10) {
        if (m()) {
            setStrokeWidth(getResources().getDimensionPixelSize(i10));
        }
    }

    @Override // androidx.appcompat.widget.e
    public void setSupportBackgroundTintList(ColorStateList colorStateList) {
        if (m()) {
            this.f15381o.I(colorStateList);
        } else {
            super.setSupportBackgroundTintList(colorStateList);
        }
    }

    @Override // androidx.appcompat.widget.e
    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        if (m()) {
            this.f15381o.J(mode);
        } else {
            super.setSupportBackgroundTintMode(mode);
        }
    }

    @Override // android.view.View
    public void setTextAlignment(int i10) {
        super.setTextAlignment(i10);
        r(getMeasuredWidth(), getMeasuredHeight());
    }

    public void setToggleCheckedStateOnClick(boolean z10) {
        this.f15381o.K(z10);
    }

    @Override // android.widget.TextView
    public void setWidth(int i10) {
        this.D = -1.0f;
        super.setWidth(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setWidthChangeMax(int i10) {
        if (this.M != i10) {
            this.M = i10;
            n(true);
        }
    }

    @Override // android.widget.Checkable
    public void toggle() {
        setChecked(!this.f15392z);
    }

    public MaterialButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6763z);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialButton(android.content.Context r8, android.util.AttributeSet r9, int r10) {
        /*
            r7 = this;
            int r4 = com.google.android.material.button.MaterialButton.S
            int r0 = com.google.android.material.button.MaterialButton.T
            int[] r0 = new int[]{r0}
            android.content.Context r8 = wh.a.e(r8, r9, r10, r4, r0)
            r7.<init>(r8, r9, r10)
            java.util.LinkedHashSet r8 = new java.util.LinkedHashSet
            r8.<init>()
            r7.f15382p = r8
            r8 = 0
            r7.f15392z = r8
            r7.A = r8
            r6 = -1
            r7.C = r6
            r0 = -1082130432(0xffffffffbf800000, float:-1.0)
            r7.D = r0
            r7.E = r6
            r7.F = r6
            r7.K = r6
            android.content.Context r0 = r7.getContext()
            int[] r2 = bh.l.I2
            int[] r5 = new int[r8]
            r1 = r9
            r3 = r10
            android.content.res.TypedArray r9 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            int r10 = bh.l.W2
            int r10 = r9.getDimensionPixelSize(r10, r8)
            r7.f15391y = r10
            int r10 = bh.l.Z2
            int r10 = r9.getInt(r10, r6)
            android.graphics.PorterDuff$Mode r2 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.p.i(r10, r2)
            r7.f15384r = r10
            android.content.Context r10 = r7.getContext()
            int r2 = bh.l.Y2
            android.content.res.ColorStateList r10 = qh.c.a(r10, r9, r2)
            r7.f15385s = r10
            android.content.Context r10 = r7.getContext()
            int r2 = bh.l.U2
            android.graphics.drawable.Drawable r10 = qh.c.e(r10, r9, r2)
            r7.f15386t = r10
            int r10 = bh.l.V2
            r2 = 1
            int r10 = r9.getInteger(r10, r2)
            r7.B = r10
            int r10 = bh.l.X2
            int r10 = r9.getDimensionPixelSize(r10, r8)
            r7.f15388v = r10
            int r10 = bh.l.f6976c3
            th.q r10 = th.q.b(r0, r9, r10)
            if (r10 == 0) goto L82
            th.l r0 = r10.c(r2)
            goto L8a
        L82:
            th.l$b r0 = th.l.e(r0, r1, r3, r4)
            th.l r0 = r0.m()
        L8a:
            int r1 = bh.l.f6956a3
            boolean r1 = r9.getBoolean(r1, r8)
            com.google.android.material.button.e r3 = new com.google.android.material.button.e
            r3.<init>(r7, r0)
            r7.f15381o = r3
            r3.t(r9)
            int r0 = bh.l.K2
            boolean r0 = r9.getBoolean(r0, r8)
            r7.setCheckedInternal(r0)
            if (r10 == 0) goto Laf
            androidx.dynamicanimation.animation.d r0 = r7.e()
            r3.z(r0)
            r3.F(r10)
        Laf:
            r7.setOpticalCenterEnabled(r1)
            r9.recycle()
            int r9 = r7.f15391y
            r7.setCompoundDrawablePadding(r9)
            android.graphics.drawable.Drawable r9 = r7.f15386t
            if (r9 == 0) goto Lbf
            r8 = r2
        Lbf:
            r7.q(r8)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.MaterialButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
