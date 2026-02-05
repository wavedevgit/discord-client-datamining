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
import ph.h;
import ph.k;
import ph.n;
import zg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialButton extends e implements Checkable, n {
    private static final int[] C = {16842911};
    private static final int[] D = {16842912};
    private static final int E = j.f55715n;
    private boolean A;
    private int B;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.material.button.a f14657o;

    /* renamed from: p  reason: collision with root package name */
    private final LinkedHashSet f14658p;

    /* renamed from: q  reason: collision with root package name */
    private a f14659q;

    /* renamed from: r  reason: collision with root package name */
    private PorterDuff.Mode f14660r;

    /* renamed from: s  reason: collision with root package name */
    private ColorStateList f14661s;

    /* renamed from: t  reason: collision with root package name */
    private Drawable f14662t;

    /* renamed from: u  reason: collision with root package name */
    private String f14663u;

    /* renamed from: v  reason: collision with root package name */
    private int f14664v;

    /* renamed from: w  reason: collision with root package name */
    private int f14665w;

    /* renamed from: x  reason: collision with root package name */
    private int f14666x;

    /* renamed from: y  reason: collision with root package name */
    private int f14667y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f14668z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface a {
        void a(MaterialButton materialButton, boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends u2.a {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        boolean f14669i;

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
            this.f14669i = z10;
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f14669i ? 1 : 0);
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
        com.google.android.material.button.a aVar = this.f14657o;
        if (aVar != null && !aVar.o()) {
            return true;
        }
        return false;
    }

    private void g() {
        if (c()) {
            androidx.core.widget.j.m(this, this.f14662t, null, null, null);
        } else if (b()) {
            androidx.core.widget.j.m(this, null, null, this.f14662t, null);
        } else if (d()) {
            androidx.core.widget.j.m(this, null, this.f14662t, null, null);
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
        Drawable drawable = this.f14662t;
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f14662t = mutate;
            s1.a.o(mutate, this.f14661s);
            PorterDuff.Mode mode = this.f14660r;
            if (mode != null) {
                s1.a.p(this.f14662t, mode);
            }
            int i10 = this.f14664v;
            if (i10 == 0) {
                i10 = this.f14662t.getIntrinsicWidth();
            }
            int i11 = this.f14664v;
            if (i11 == 0) {
                i11 = this.f14662t.getIntrinsicHeight();
            }
            Drawable drawable2 = this.f14662t;
            int i12 = this.f14665w;
            int i13 = this.f14666x;
            drawable2.setBounds(i12, i13, i10 + i12, i11 + i13);
            this.f14662t.setVisible(true, z10);
        }
        if (z10) {
            g();
            return;
        }
        Drawable[] d10 = androidx.core.widget.j.d(this);
        Drawable drawable3 = d10[0];
        Drawable drawable4 = d10[1];
        Drawable drawable5 = d10[2];
        if ((c() && drawable3 != this.f14662t) || ((b() && drawable5 != this.f14662t) || (d() && drawable4 != this.f14662t))) {
            g();
        }
    }

    private void i(int i10, int i11) {
        if (this.f14662t != null && getLayout() != null) {
            if (!c() && !b()) {
                if (d()) {
                    this.f14665w = 0;
                    if (this.B == 16) {
                        this.f14666x = 0;
                        h(false);
                        return;
                    }
                    int i12 = this.f14664v;
                    if (i12 == 0) {
                        i12 = this.f14662t.getIntrinsicHeight();
                    }
                    int max = Math.max(0, (((((i11 - getTextHeight()) - getPaddingTop()) - i12) - this.f14667y) - getPaddingBottom()) / 2);
                    if (this.f14666x != max) {
                        this.f14666x = max;
                        h(false);
                        return;
                    }
                    return;
                }
                return;
            }
            this.f14666x = 0;
            Layout.Alignment actualTextAlignment = getActualTextAlignment();
            int i13 = this.B;
            boolean z10 = true;
            if (i13 != 1 && i13 != 3 && ((i13 != 2 || actualTextAlignment != Layout.Alignment.ALIGN_NORMAL) && (i13 != 4 || actualTextAlignment != Layout.Alignment.ALIGN_OPPOSITE))) {
                int i14 = this.f14664v;
                if (i14 == 0) {
                    i14 = this.f14662t.getIntrinsicWidth();
                }
                int textLayoutWidth = ((((i10 - getTextLayoutWidth()) - h0.D(this)) - i14) - this.f14667y) - h0.E(this);
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
                if (this.f14665w != textLayoutWidth) {
                    this.f14665w = textLayoutWidth;
                    h(false);
                    return;
                }
                return;
            }
            this.f14665w = 0;
            h(false);
        }
    }

    public boolean a() {
        com.google.android.material.button.a aVar = this.f14657o;
        if (aVar != null && aVar.p()) {
            return true;
        }
        return false;
    }

    @NonNull
    String getA11yClassName() {
        Class cls;
        if (!TextUtils.isEmpty(this.f14663u)) {
            return this.f14663u;
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
            return this.f14657o.b();
        }
        return 0;
    }

    public Drawable getIcon() {
        return this.f14662t;
    }

    public int getIconGravity() {
        return this.B;
    }

    public int getIconPadding() {
        return this.f14667y;
    }

    public int getIconSize() {
        return this.f14664v;
    }

    public ColorStateList getIconTint() {
        return this.f14661s;
    }

    public PorterDuff.Mode getIconTintMode() {
        return this.f14660r;
    }

    public int getInsetBottom() {
        return this.f14657o.c();
    }

    public int getInsetTop() {
        return this.f14657o.d();
    }

    public ColorStateList getRippleColor() {
        if (f()) {
            return this.f14657o.h();
        }
        return null;
    }

    @NonNull
    public k getShapeAppearanceModel() {
        if (f()) {
            return this.f14657o.i();
        }
        throw new IllegalStateException("Attempted to get ShapeAppearanceModel from a MaterialButton which has an overwritten background.");
    }

    public ColorStateList getStrokeColor() {
        if (f()) {
            return this.f14657o.j();
        }
        return null;
    }

    public int getStrokeWidth() {
        if (f()) {
            return this.f14657o.k();
        }
        return 0;
    }

    @Override // androidx.appcompat.widget.e
    public ColorStateList getSupportBackgroundTintList() {
        if (f()) {
            return this.f14657o.l();
        }
        return super.getSupportBackgroundTintList();
    }

    @Override // androidx.appcompat.widget.e
    public PorterDuff.Mode getSupportBackgroundTintMode() {
        if (f()) {
            return this.f14657o.m();
        }
        return super.getSupportBackgroundTintMode();
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f14668z;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (f()) {
            h.f(this, this.f14657o.f());
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
        setChecked(bVar.f14669i);
    }

    @Override // android.widget.TextView, android.view.View
    public Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f14669i = this.f14668z;
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
        if (this.f14657o.q()) {
            toggle();
        }
        return super.performClick();
    }

    @Override // android.view.View
    public void refreshDrawableState() {
        super.refreshDrawableState();
        if (this.f14662t != null) {
            if (this.f14662t.setState(getDrawableState())) {
                invalidate();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setA11yClassName(String str) {
        this.f14663u = str;
    }

    @Override // android.view.View
    public void setBackground(@NonNull Drawable drawable) {
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        if (f()) {
            this.f14657o.s(i10);
        } else {
            super.setBackgroundColor(i10);
        }
    }

    @Override // androidx.appcompat.widget.e, android.view.View
    public void setBackgroundDrawable(@NonNull Drawable drawable) {
        if (f()) {
            if (drawable != getBackground()) {
                Log.w("MaterialButton", "MaterialButton manages its own background to control elevation, shape, color and states. Consider using backgroundTint, shapeAppearance and other attributes where available. A custom background will ignore these attributes and you should consider handling interaction states such as pressed, focused and disabled");
                this.f14657o.t();
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
            this.f14657o.u(z10);
        }
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        if (a() && isEnabled() && this.f14668z != z10) {
            this.f14668z = z10;
            refreshDrawableState();
            if (getParent() instanceof MaterialButtonToggleGroup) {
                ((MaterialButtonToggleGroup) getParent()).m(this, this.f14668z);
            }
            if (!this.A) {
                this.A = true;
                Iterator it = this.f14658p.iterator();
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
            this.f14657o.v(i10);
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
            this.f14657o.f().W(f10);
        }
    }

    public void setIcon(Drawable drawable) {
        if (this.f14662t != drawable) {
            this.f14662t = drawable;
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
        if (this.f14667y != i10) {
            this.f14667y = i10;
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
            if (this.f14664v != i10) {
                this.f14664v = i10;
                h(true);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("iconSize cannot be less than 0");
    }

    public void setIconTint(ColorStateList colorStateList) {
        if (this.f14661s != colorStateList) {
            this.f14661s = colorStateList;
            h(false);
        }
    }

    public void setIconTintMode(PorterDuff.Mode mode) {
        if (this.f14660r != mode) {
            this.f14660r = mode;
            h(false);
        }
    }

    public void setIconTintResource(int i10) {
        setIconTint(g.a.a(getContext(), i10));
    }

    public void setInsetBottom(int i10) {
        this.f14657o.w(i10);
    }

    public void setInsetTop(int i10) {
        this.f14657o.x(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setInternalBackground(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setOnPressedChangeListenerInternal(a aVar) {
        this.f14659q = aVar;
    }

    @Override // android.view.View
    public void setPressed(boolean z10) {
        a aVar = this.f14659q;
        if (aVar != null) {
            aVar.a(this, z10);
        }
        super.setPressed(z10);
    }

    public void setRippleColor(ColorStateList colorStateList) {
        if (f()) {
            this.f14657o.y(colorStateList);
        }
    }

    public void setRippleColorResource(int i10) {
        if (f()) {
            setRippleColor(g.a.a(getContext(), i10));
        }
    }

    @Override // ph.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        if (f()) {
            this.f14657o.z(kVar);
            return;
        }
        throw new IllegalStateException("Attempted to set ShapeAppearanceModel on a MaterialButton which has an overwritten background.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setShouldDrawSurfaceColorStroke(boolean z10) {
        if (f()) {
            this.f14657o.A(z10);
        }
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        if (f()) {
            this.f14657o.B(colorStateList);
        }
    }

    public void setStrokeColorResource(int i10) {
        if (f()) {
            setStrokeColor(g.a.a(getContext(), i10));
        }
    }

    public void setStrokeWidth(int i10) {
        if (f()) {
            this.f14657o.C(i10);
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
            this.f14657o.D(colorStateList);
        } else {
            super.setSupportBackgroundTintList(colorStateList);
        }
    }

    @Override // androidx.appcompat.widget.e
    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        if (f()) {
            this.f14657o.E(mode);
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
        this.f14657o.F(z10);
    }

    @Override // android.widget.Checkable
    public void toggle() {
        setChecked(!this.f14668z);
    }

    public MaterialButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, zg.b.f55567x);
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
            android.content.Context r7 = sh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            java.util.LinkedHashSet r7 = new java.util.LinkedHashSet
            r7.<init>()
            r6.f14658p = r7
            r7 = 0
            r6.f14668z = r7
            r6.A = r7
            android.content.Context r0 = r6.getContext()
            int[] r2 = zg.k.O2
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = zg.k.f55742b3
            int r9 = r8.getDimensionPixelSize(r9, r7)
            r6.f14667y = r9
            int r9 = zg.k.f55772e3
            r2 = -1
            int r9 = r8.getInt(r9, r2)
            android.graphics.PorterDuff$Mode r2 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r9 = com.google.android.material.internal.o.i(r9, r2)
            r6.f14660r = r9
            android.content.Context r9 = r6.getContext()
            int r2 = zg.k.f55762d3
            android.content.res.ColorStateList r9 = mh.c.a(r9, r8, r2)
            r6.f14661s = r9
            android.content.Context r9 = r6.getContext()
            int r2 = zg.k.Z2
            android.graphics.drawable.Drawable r9 = mh.c.d(r9, r8, r2)
            r6.f14662t = r9
            int r9 = zg.k.f55732a3
            r2 = 1
            int r9 = r8.getInteger(r9, r2)
            r6.B = r9
            int r9 = zg.k.f55752c3
            int r9 = r8.getDimensionPixelSize(r9, r7)
            r6.f14664v = r9
            ph.k$b r9 = ph.k.e(r0, r1, r3, r4)
            ph.k r9 = r9.m()
            com.google.android.material.button.a r0 = new com.google.android.material.button.a
            r0.<init>(r6, r9)
            r6.f14657o = r0
            r0.r(r8)
            r8.recycle()
            int r8 = r6.f14667y
            r6.setCompoundDrawablePadding(r8)
            android.graphics.drawable.Drawable r8 = r6.f14662t
            if (r8 == 0) goto L82
            r7 = r2
        L82:
            r6.h(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.MaterialButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
