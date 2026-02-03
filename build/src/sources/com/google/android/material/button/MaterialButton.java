package com.google.android.material.button;

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
import androidx.annotation.NonNull;
import androidx.appcompat.widget.e;
import androidx.core.view.h0;
import java.util.Iterator;
import java.util.LinkedHashSet;
import oh.h;
import oh.k;
import oh.n;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialButton extends e implements Checkable, n {
    private static final int[] C = {16842911};
    private static final int[] D = {16842912};
    private static final int E = j.f54502n;
    private boolean A;
    private int B;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.material.button.a f15295o;

    /* renamed from: p  reason: collision with root package name */
    private final LinkedHashSet f15296p;

    /* renamed from: q  reason: collision with root package name */
    private a f15297q;

    /* renamed from: r  reason: collision with root package name */
    private PorterDuff.Mode f15298r;

    /* renamed from: s  reason: collision with root package name */
    private ColorStateList f15299s;

    /* renamed from: t  reason: collision with root package name */
    private Drawable f15300t;

    /* renamed from: u  reason: collision with root package name */
    private String f15301u;

    /* renamed from: v  reason: collision with root package name */
    private int f15302v;

    /* renamed from: w  reason: collision with root package name */
    private int f15303w;

    /* renamed from: x  reason: collision with root package name */
    private int f15304x;

    /* renamed from: y  reason: collision with root package name */
    private int f15305y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15306z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface a {
        void a(MaterialButton materialButton, boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends u2.a {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        boolean f15307i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                return new b(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public b createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new b(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(Parcelable parcelable) {
            super(parcelable);
        }

        private void b(Parcel parcel) {
            boolean z10 = true;
            if (parcel.readInt() != 1) {
                z10 = false;
            }
            this.f15307i = z10;
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f15307i ? 1 : 0);
        }

        public b(Parcel parcel, ClassLoader classLoader) {
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

    private boolean b() {
        int i10 = this.B;
        if (i10 != 3 && i10 != 4) {
            return false;
        }
        return true;
    }

    private boolean c() {
        int i10 = this.B;
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    private boolean d() {
        int i10 = this.B;
        if (i10 != 16 && i10 != 32) {
            return false;
        }
        return true;
    }

    private boolean e() {
        if (h0.z(this) == 1) {
            return true;
        }
        return false;
    }

    private boolean f() {
        com.google.android.material.button.a aVar = this.f15295o;
        if (aVar != null && !aVar.o()) {
            return true;
        }
        return false;
    }

    private void g() {
        if (c()) {
            androidx.core.widget.j.m(this, this.f15300t, null, null, null);
        } else if (b()) {
            androidx.core.widget.j.m(this, null, null, this.f15300t, null);
        } else if (d()) {
            androidx.core.widget.j.m(this, null, this.f15300t, null, null);
        }
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

    private void h(boolean z10) {
        Drawable drawable = this.f15300t;
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f15300t = mutate;
            s1.a.o(mutate, this.f15299s);
            PorterDuff.Mode mode = this.f15298r;
            if (mode != null) {
                s1.a.p(this.f15300t, mode);
            }
            int i10 = this.f15302v;
            if (i10 == 0) {
                i10 = this.f15300t.getIntrinsicWidth();
            }
            int i11 = this.f15302v;
            if (i11 == 0) {
                i11 = this.f15300t.getIntrinsicHeight();
            }
            Drawable drawable2 = this.f15300t;
            int i12 = this.f15303w;
            int i13 = this.f15304x;
            drawable2.setBounds(i12, i13, i10 + i12, i11 + i13);
            this.f15300t.setVisible(true, z10);
        }
        if (z10) {
            g();
            return;
        }
        Drawable[] d10 = androidx.core.widget.j.d(this);
        Drawable drawable3 = d10[0];
        Drawable drawable4 = d10[1];
        Drawable drawable5 = d10[2];
        if ((c() && drawable3 != this.f15300t) || ((b() && drawable5 != this.f15300t) || (d() && drawable4 != this.f15300t))) {
            g();
        }
    }

    private void i(int i10, int i11) {
        if (this.f15300t != null && getLayout() != null) {
            if (!c() && !b()) {
                if (d()) {
                    this.f15303w = 0;
                    if (this.B == 16) {
                        this.f15304x = 0;
                        h(false);
                        return;
                    }
                    int i12 = this.f15302v;
                    if (i12 == 0) {
                        i12 = this.f15300t.getIntrinsicHeight();
                    }
                    int max = Math.max(0, (((((i11 - getTextHeight()) - getPaddingTop()) - i12) - this.f15305y) - getPaddingBottom()) / 2);
                    if (this.f15304x != max) {
                        this.f15304x = max;
                        h(false);
                        return;
                    }
                    return;
                }
                return;
            }
            this.f15304x = 0;
            Layout.Alignment actualTextAlignment = getActualTextAlignment();
            int i13 = this.B;
            boolean z10 = true;
            if (i13 != 1 && i13 != 3 && ((i13 != 2 || actualTextAlignment != Layout.Alignment.ALIGN_NORMAL) && (i13 != 4 || actualTextAlignment != Layout.Alignment.ALIGN_OPPOSITE))) {
                int i14 = this.f15302v;
                if (i14 == 0) {
                    i14 = this.f15300t.getIntrinsicWidth();
                }
                int textLayoutWidth = ((((i10 - getTextLayoutWidth()) - h0.D(this)) - i14) - this.f15305y) - h0.E(this);
                if (actualTextAlignment == Layout.Alignment.ALIGN_CENTER) {
                    textLayoutWidth /= 2;
                }
                boolean e10 = e();
                if (this.B != 4) {
                    z10 = false;
                }
                if (e10 != z10) {
                    textLayoutWidth = -textLayoutWidth;
                }
                if (this.f15303w != textLayoutWidth) {
                    this.f15303w = textLayoutWidth;
                    h(false);
                    return;
                }
                return;
            }
            this.f15303w = 0;
            h(false);
        }
    }

    public boolean a() {
        com.google.android.material.button.a aVar = this.f15295o;
        if (aVar != null && aVar.p()) {
            return true;
        }
        return false;
    }

    @NonNull
    String getA11yClassName() {
        Class cls;
        if (!TextUtils.isEmpty(this.f15301u)) {
            return this.f15301u;
        }
        if (a()) {
            cls = CompoundButton.class;
        } else {
            cls = Button.class;
        }
        return cls.getName();
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
        if (f()) {
            return this.f15295o.b();
        }
        return 0;
    }

    public Drawable getIcon() {
        return this.f15300t;
    }

    public int getIconGravity() {
        return this.B;
    }

    public int getIconPadding() {
        return this.f15305y;
    }

    public int getIconSize() {
        return this.f15302v;
    }

    public ColorStateList getIconTint() {
        return this.f15299s;
    }

    public PorterDuff.Mode getIconTintMode() {
        return this.f15298r;
    }

    public int getInsetBottom() {
        return this.f15295o.c();
    }

    public int getInsetTop() {
        return this.f15295o.d();
    }

    public ColorStateList getRippleColor() {
        if (f()) {
            return this.f15295o.h();
        }
        return null;
    }

    @NonNull
    public k getShapeAppearanceModel() {
        if (f()) {
            return this.f15295o.i();
        }
        throw new IllegalStateException("Attempted to get ShapeAppearanceModel from a MaterialButton which has an overwritten background.");
    }

    public ColorStateList getStrokeColor() {
        if (f()) {
            return this.f15295o.j();
        }
        return null;
    }

    public int getStrokeWidth() {
        if (f()) {
            return this.f15295o.k();
        }
        return 0;
    }

    @Override // androidx.appcompat.widget.e
    public ColorStateList getSupportBackgroundTintList() {
        if (f()) {
            return this.f15295o.l();
        }
        return super.getSupportBackgroundTintList();
    }

    @Override // androidx.appcompat.widget.e
    public PorterDuff.Mode getSupportBackgroundTintMode() {
        if (f()) {
            return this.f15295o.m();
        }
        return super.getSupportBackgroundTintMode();
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f15306z;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (f()) {
            h.f(this, this.f15295o.f());
        }
    }

    @Override // android.widget.TextView, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 2);
        if (a()) {
            View.mergeDrawableStates(onCreateDrawableState, C);
        }
        if (isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, D);
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
        accessibilityNodeInfo.setCheckable(a());
        accessibilityNodeInfo.setChecked(isChecked());
        accessibilityNodeInfo.setClickable(isClickable());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.e, android.widget.TextView, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        i(getMeasuredWidth(), getMeasuredHeight());
    }

    @Override // android.widget.TextView, android.view.View
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof b)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        b bVar = (b) parcelable;
        super.onRestoreInstanceState(bVar.a());
        setChecked(bVar.f15307i);
    }

    @Override // android.widget.TextView, android.view.View
    public Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f15307i = this.f15306z;
        return bVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.e, android.widget.TextView
    public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        super.onTextChanged(charSequence, i10, i11, i12);
        i(getMeasuredWidth(), getMeasuredHeight());
    }

    @Override // android.view.View
    public boolean performClick() {
        if (this.f15295o.q()) {
            toggle();
        }
        return super.performClick();
    }

    @Override // android.view.View
    public void refreshDrawableState() {
        super.refreshDrawableState();
        if (this.f15300t != null) {
            if (this.f15300t.setState(getDrawableState())) {
                invalidate();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setA11yClassName(String str) {
        this.f15301u = str;
    }

    @Override // android.view.View
    public void setBackground(@NonNull Drawable drawable) {
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        if (f()) {
            this.f15295o.s(i10);
        } else {
            super.setBackgroundColor(i10);
        }
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void setBackgroundDrawable(@NonNull Drawable drawable) {
        if (f()) {
            if (drawable != getBackground()) {
                Log.w("MaterialButton", "MaterialButton manages its own background to control elevation, shape, color and states. Consider using backgroundTint, shapeAppearance and other attributes where available. A custom background will ignore these attributes and you should consider handling interaction states such as pressed, focused and disabled");
                this.f15295o.t();
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
        if (f()) {
            this.f15295o.u(z10);
        }
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        if (a() && isEnabled() && this.f15306z != z10) {
            this.f15306z = z10;
            refreshDrawableState();
            if (getParent() instanceof MaterialButtonToggleGroup) {
                ((MaterialButtonToggleGroup) getParent()).m(this, this.f15306z);
            }
            if (!this.A) {
                this.A = true;
                Iterator it = this.f15296p.iterator();
                if (!it.hasNext()) {
                    this.A = false;
                } else {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }
    }

    public void setCornerRadius(int i10) {
        if (f()) {
            this.f15295o.v(i10);
        }
    }

    public void setCornerRadiusResource(int i10) {
        if (f()) {
            setCornerRadius(getResources().getDimensionPixelSize(i10));
        }
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        if (f()) {
            this.f15295o.f().W(f10);
        }
    }

    public void setIcon(Drawable drawable) {
        if (this.f15300t != drawable) {
            this.f15300t = drawable;
            h(true);
            i(getMeasuredWidth(), getMeasuredHeight());
        }
    }

    public void setIconGravity(int i10) {
        if (this.B != i10) {
            this.B = i10;
            i(getMeasuredWidth(), getMeasuredHeight());
        }
    }

    public void setIconPadding(int i10) {
        if (this.f15305y != i10) {
            this.f15305y = i10;
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
            if (this.f15302v != i10) {
                this.f15302v = i10;
                h(true);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("iconSize cannot be less than 0");
    }

    public void setIconTint(ColorStateList colorStateList) {
        if (this.f15299s != colorStateList) {
            this.f15299s = colorStateList;
            h(false);
        }
    }

    public void setIconTintMode(PorterDuff.Mode mode) {
        if (this.f15298r != mode) {
            this.f15298r = mode;
            h(false);
        }
    }

    public void setIconTintResource(int i10) {
        setIconTint(g.a.a(getContext(), i10));
    }

    public void setInsetBottom(int i10) {
        this.f15295o.w(i10);
    }

    public void setInsetTop(int i10) {
        this.f15295o.x(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setInternalBackground(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setOnPressedChangeListenerInternal(a aVar) {
        this.f15297q = aVar;
    }

    @Override // android.view.View
    public void setPressed(boolean z10) {
        a aVar = this.f15297q;
        if (aVar != null) {
            aVar.a(this, z10);
        }
        super.setPressed(z10);
    }

    public void setRippleColor(ColorStateList colorStateList) {
        if (f()) {
            this.f15295o.y(colorStateList);
        }
    }

    public void setRippleColorResource(int i10) {
        if (f()) {
            setRippleColor(g.a.a(getContext(), i10));
        }
    }

    @Override // oh.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        if (f()) {
            this.f15295o.z(kVar);
            return;
        }
        throw new IllegalStateException("Attempted to set ShapeAppearanceModel on a MaterialButton which has an overwritten background.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setShouldDrawSurfaceColorStroke(boolean z10) {
        if (f()) {
            this.f15295o.A(z10);
        }
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        if (f()) {
            this.f15295o.B(colorStateList);
        }
    }

    public void setStrokeColorResource(int i10) {
        if (f()) {
            setStrokeColor(g.a.a(getContext(), i10));
        }
    }

    public void setStrokeWidth(int i10) {
        if (f()) {
            this.f15295o.C(i10);
        }
    }

    public void setStrokeWidthResource(int i10) {
        if (f()) {
            setStrokeWidth(getResources().getDimensionPixelSize(i10));
        }
    }

    @Override // androidx.appcompat.widget.e
    public void setSupportBackgroundTintList(ColorStateList colorStateList) {
        if (f()) {
            this.f15295o.D(colorStateList);
        } else {
            super.setSupportBackgroundTintList(colorStateList);
        }
    }

    @Override // androidx.appcompat.widget.e
    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        if (f()) {
            this.f15295o.E(mode);
        } else {
            super.setSupportBackgroundTintMode(mode);
        }
    }

    @Override // android.view.View
    public void setTextAlignment(int i10) {
        super.setTextAlignment(i10);
        i(getMeasuredWidth(), getMeasuredHeight());
    }

    public void setToggleCheckedStateOnClick(boolean z10) {
        this.f15295o.F(z10);
    }

    @Override // android.widget.Checkable
    public void toggle() {
        setChecked(!this.f15306z);
    }

    public MaterialButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54354x);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialButton(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.button.MaterialButton.E
            android.content.Context r7 = rh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            java.util.LinkedHashSet r7 = new java.util.LinkedHashSet
            r7.<init>()
            r6.f15296p = r7
            r7 = 0
            r6.f15306z = r7
            r6.A = r7
            android.content.Context r0 = r6.getContext()
            int[] r2 = yg.k.O2
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = yg.k.f54529b3
            int r9 = r8.getDimensionPixelSize(r9, r7)
            r6.f15305y = r9
            int r9 = yg.k.f54559e3
            r2 = -1
            int r9 = r8.getInt(r9, r2)
            android.graphics.PorterDuff$Mode r2 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r9 = com.google.android.material.internal.o.i(r9, r2)
            r6.f15298r = r9
            android.content.Context r9 = r6.getContext()
            int r2 = yg.k.f54549d3
            android.content.res.ColorStateList r9 = lh.c.a(r9, r8, r2)
            r6.f15299s = r9
            android.content.Context r9 = r6.getContext()
            int r2 = yg.k.Z2
            android.graphics.drawable.Drawable r9 = lh.c.d(r9, r8, r2)
            r6.f15300t = r9
            int r9 = yg.k.f54519a3
            r2 = 1
            int r9 = r8.getInteger(r9, r2)
            r6.B = r9
            int r9 = yg.k.f54539c3
            int r9 = r8.getDimensionPixelSize(r9, r7)
            r6.f15302v = r9
            oh.k$b r9 = oh.k.e(r0, r1, r3, r4)
            oh.k r9 = r9.m()
            com.google.android.material.button.a r0 = new com.google.android.material.button.a
            r0.<init>(r6, r9)
            r6.f15295o = r0
            r0.r(r8)
            r8.recycle()
            int r8 = r6.f15305y
            r6.setCompoundDrawablePadding(r8)
            android.graphics.drawable.Drawable r8 = r6.f15300t
            if (r8 == 0) goto L82
            r7 = r2
        L82:
            r6.h(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.MaterialButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
