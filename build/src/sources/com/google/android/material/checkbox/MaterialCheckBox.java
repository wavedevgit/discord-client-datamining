package com.google.android.material.checkbox;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.AnimatedStateListDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.autofill.AutofillManager;
import android.widget.CompoundButton;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.f;
import androidx.appcompat.widget.v0;
import androidx.core.widget.d;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.google.android.material.internal.o;
import java.util.Iterator;
import java.util.LinkedHashSet;
import yg.i;
import yg.j;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialCheckBox extends f {
    private static final int J = j.f54264r;
    private static final int[] K = {yg.b.f54084c0};
    private static final int[] L;
    private static final int[][] M;
    private static final int N;
    ColorStateList A;
    private PorterDuff.Mode B;
    private int C;
    private int[] D;
    private boolean E;
    private CharSequence F;
    private CompoundButton.OnCheckedChangeListener G;
    private final androidx.vectordrawable.graphics.drawable.c H;
    private final androidx.vectordrawable.graphics.drawable.b I;

    /* renamed from: p  reason: collision with root package name */
    private final LinkedHashSet f14421p;

    /* renamed from: q  reason: collision with root package name */
    private final LinkedHashSet f14422q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f14423r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14424s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f14425t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f14426u;

    /* renamed from: v  reason: collision with root package name */
    private CharSequence f14427v;

    /* renamed from: w  reason: collision with root package name */
    private Drawable f14428w;

    /* renamed from: x  reason: collision with root package name */
    private Drawable f14429x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f14430y;

    /* renamed from: z  reason: collision with root package name */
    ColorStateList f14431z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends androidx.vectordrawable.graphics.drawable.b {
        a() {
        }

        @Override // androidx.vectordrawable.graphics.drawable.b
        public void b(Drawable drawable) {
            super.b(drawable);
            ColorStateList colorStateList = MaterialCheckBox.this.f14431z;
            if (colorStateList != null) {
                s1.a.o(drawable, colorStateList);
            }
        }

        @Override // androidx.vectordrawable.graphics.drawable.b
        public void c(Drawable drawable) {
            super.c(drawable);
            MaterialCheckBox materialCheckBox = MaterialCheckBox.this;
            ColorStateList colorStateList = materialCheckBox.f14431z;
            if (colorStateList != null) {
                s1.a.n(drawable, colorStateList.getColorForState(materialCheckBox.D, MaterialCheckBox.this.f14431z.getDefaultColor()));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(MaterialCheckBox materialCheckBox, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends View.BaseSavedState {
        @NonNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        int f14433d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public c createFromParcel(Parcel parcel) {
                return new c(parcel, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public c[] newArray(int i10) {
                return new c[i10];
            }
        }

        /* synthetic */ c(Parcel parcel, a aVar) {
            this(parcel);
        }

        private String a() {
            int i10 = this.f14433d;
            if (i10 != 1) {
                if (i10 != 2) {
                    return "unchecked";
                }
                return ReactProgressBarViewManager.PROP_INDETERMINATE;
            }
            return "checked";
        }

        public String toString() {
            return "MaterialCheckBox.SavedState{" + Integer.toHexString(System.identityHashCode(this)) + " CheckedState=" + a() + "}";
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeValue(Integer.valueOf(this.f14433d));
        }

        c(Parcelable parcelable) {
            super(parcelable);
        }

        private c(Parcel parcel) {
            super(parcel);
            this.f14433d = ((Integer) parcel.readValue(getClass().getClassLoader())).intValue();
        }
    }

    static {
        int i10 = yg.b.f54082b0;
        L = new int[]{i10};
        M = new int[][]{new int[]{16842910, i10}, new int[]{16842910, 16842912}, new int[]{16842910, -16842912}, new int[]{-16842910, 16842912}, new int[]{-16842910, -16842912}};
        N = Resources.getSystem().getIdentifier("btn_check_material_anim", "drawable", "android");
    }

    public MaterialCheckBox(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54087e);
    }

    private boolean d(v0 v0Var) {
        int n10 = v0Var.n(k.V3, 0);
        int n11 = v0Var.n(k.W3, 0);
        if (n10 != N || n11 != 0) {
            return false;
        }
        return true;
    }

    private void f() {
        this.f14428w = com.google.android.material.drawable.c.d(this.f14428w, this.f14431z, d.c(this));
        this.f14429x = com.google.android.material.drawable.c.d(this.f14429x, this.A, this.B);
        h();
        i();
        super.setButtonDrawable(com.google.android.material.drawable.c.a(this.f14428w, this.f14429x));
        refreshDrawableState();
    }

    private void g() {
        if (Build.VERSION.SDK_INT >= 30 && this.F == null) {
            super.setStateDescription(getButtonStateDescription());
        }
    }

    @NonNull
    private String getButtonStateDescription() {
        int i10 = this.C;
        if (i10 == 1) {
            return getResources().getString(i.f54231h);
        }
        if (i10 == 0) {
            return getResources().getString(i.f54233j);
        }
        return getResources().getString(i.f54232i);
    }

    private ColorStateList getMaterialThemeColorsTintList() {
        if (this.f14423r == null) {
            int[][] iArr = M;
            int[] iArr2 = new int[iArr.length];
            int d10 = eh.a.d(this, yg.b.f54093h);
            int d11 = eh.a.d(this, yg.b.f54097j);
            int d12 = eh.a.d(this, yg.b.f54103o);
            int d13 = eh.a.d(this, yg.b.f54099k);
            iArr2[0] = eh.a.j(d12, d11, 1.0f);
            iArr2[1] = eh.a.j(d12, d10, 1.0f);
            iArr2[2] = eh.a.j(d12, d13, 0.54f);
            iArr2[3] = eh.a.j(d12, d13, 0.38f);
            iArr2[4] = eh.a.j(d12, d13, 0.38f);
            this.f14423r = new ColorStateList(iArr, iArr2);
        }
        return this.f14423r;
    }

    private ColorStateList getSuperButtonTintList() {
        ColorStateList colorStateList = this.f14431z;
        if (colorStateList != null) {
            return colorStateList;
        }
        if (super.getButtonTintList() != null) {
            return super.getButtonTintList();
        }
        return getSupportButtonTintList();
    }

    private void h() {
        androidx.vectordrawable.graphics.drawable.c cVar;
        if (this.f14430y) {
            androidx.vectordrawable.graphics.drawable.c cVar2 = this.H;
            if (cVar2 != null) {
                cVar2.f(this.I);
                this.H.b(this.I);
            }
            Drawable drawable = this.f14428w;
            if ((drawable instanceof AnimatedStateListDrawable) && (cVar = this.H) != null) {
                ((AnimatedStateListDrawable) drawable).addTransition(yg.f.f54171b, yg.f.V, cVar, false);
                ((AnimatedStateListDrawable) this.f14428w).addTransition(yg.f.f54179j, yg.f.V, this.H, false);
            }
        }
    }

    private void i() {
        ColorStateList colorStateList;
        ColorStateList colorStateList2;
        Drawable drawable = this.f14428w;
        if (drawable != null && (colorStateList2 = this.f14431z) != null) {
            s1.a.o(drawable, colorStateList2);
        }
        Drawable drawable2 = this.f14429x;
        if (drawable2 != null && (colorStateList = this.A) != null) {
            s1.a.o(drawable2, colorStateList);
        }
    }

    private void j() {
    }

    public void c(b bVar) {
        this.f14422q.add(bVar);
    }

    public boolean e() {
        return this.f14426u;
    }

    @Override // android.widget.CompoundButton
    public Drawable getButtonDrawable() {
        return this.f14428w;
    }

    public Drawable getButtonIconDrawable() {
        return this.f14429x;
    }

    public ColorStateList getButtonIconTintList() {
        return this.A;
    }

    @NonNull
    public PorterDuff.Mode getButtonIconTintMode() {
        return this.B;
    }

    @Override // android.widget.CompoundButton
    public ColorStateList getButtonTintList() {
        return this.f14431z;
    }

    public int getCheckedState() {
        return this.C;
    }

    public CharSequence getErrorAccessibilityLabel() {
        return this.f14427v;
    }

    @Override // android.widget.CompoundButton, android.widget.Checkable
    public boolean isChecked() {
        if (this.C == 1) {
            return true;
        }
        return false;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.f14424s && this.f14431z == null && this.A == null) {
            setUseMaterialThemeColors(true);
        }
    }

    @Override // android.widget.CompoundButton, android.widget.TextView, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 2);
        if (getCheckedState() == 2) {
            View.mergeDrawableStates(onCreateDrawableState, K);
        }
        if (e()) {
            View.mergeDrawableStates(onCreateDrawableState, L);
        }
        this.D = com.google.android.material.drawable.c.f(onCreateDrawableState);
        j();
        return onCreateDrawableState;
    }

    @Override // android.widget.CompoundButton, android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        Drawable a10;
        int i10;
        if (this.f14425t && TextUtils.isEmpty(getText()) && (a10 = d.a(this)) != null) {
            if (o.h(this)) {
                i10 = -1;
            } else {
                i10 = 1;
            }
            int width = ((getWidth() - a10.getIntrinsicWidth()) / 2) * i10;
            int save = canvas.save();
            canvas.translate(width, 0.0f);
            super.onDraw(canvas);
            canvas.restoreToCount(save);
            if (getBackground() != null) {
                Rect bounds = a10.getBounds();
                s1.a.l(getBackground(), bounds.left + width, bounds.top, bounds.right + width, bounds.bottom);
                return;
            }
            return;
        }
        super.onDraw(canvas);
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        if (accessibilityNodeInfo != null && e()) {
            accessibilityNodeInfo.setText(((Object) accessibilityNodeInfo.getText()) + ", " + ((Object) this.f14427v));
        }
    }

    @Override // android.widget.CompoundButton, android.widget.TextView, android.view.View
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof c)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        c cVar = (c) parcelable;
        super.onRestoreInstanceState(cVar.getSuperState());
        setCheckedState(cVar.f14433d);
    }

    @Override // android.widget.CompoundButton, android.widget.TextView, android.view.View
    public Parcelable onSaveInstanceState() {
        c cVar = new c(super.onSaveInstanceState());
        cVar.f14433d = getCheckedState();
        return cVar;
    }

    @Override // androidx.appcompat.widget.f, android.widget.CompoundButton
    public void setButtonDrawable(int i10) {
        setButtonDrawable(g.a.b(getContext(), i10));
    }

    public void setButtonIconDrawable(Drawable drawable) {
        this.f14429x = drawable;
        f();
    }

    public void setButtonIconDrawableResource(int i10) {
        setButtonIconDrawable(g.a.b(getContext(), i10));
    }

    public void setButtonIconTintList(ColorStateList colorStateList) {
        if (this.A == colorStateList) {
            return;
        }
        this.A = colorStateList;
        f();
    }

    public void setButtonIconTintMode(@NonNull PorterDuff.Mode mode) {
        if (this.B == mode) {
            return;
        }
        this.B = mode;
        f();
    }

    @Override // android.widget.CompoundButton
    public void setButtonTintList(ColorStateList colorStateList) {
        if (this.f14431z == colorStateList) {
            return;
        }
        this.f14431z = colorStateList;
        f();
    }

    @Override // android.widget.CompoundButton
    public void setButtonTintMode(PorterDuff.Mode mode) {
        setSupportButtonTintMode(mode);
        f();
    }

    public void setCenterIfNoTextEnabled(boolean z10) {
        this.f14425t = z10;
    }

    @Override // android.widget.CompoundButton, android.widget.Checkable
    public void setChecked(boolean z10) {
        setCheckedState(z10 ? 1 : 0);
    }

    public void setCheckedState(int i10) {
        boolean z10;
        AutofillManager a10;
        CompoundButton.OnCheckedChangeListener onCheckedChangeListener;
        if (this.C != i10) {
            this.C = i10;
            if (i10 == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            super.setChecked(z10);
            refreshDrawableState();
            g();
            if (!this.E) {
                this.E = true;
                LinkedHashSet linkedHashSet = this.f14422q;
                if (linkedHashSet != null) {
                    Iterator it = linkedHashSet.iterator();
                    while (it.hasNext()) {
                        ((b) it.next()).a(this, this.C);
                    }
                }
                if (this.C != 2 && (onCheckedChangeListener = this.G) != null) {
                    onCheckedChangeListener.onCheckedChanged(this, isChecked());
                }
                if (Build.VERSION.SDK_INT >= 26 && (a10 = ch.b.a(getContext().getSystemService(ch.a.a()))) != null) {
                    a10.notifyValueChanged(this);
                }
                this.E = false;
            }
        }
    }

    @Override // android.widget.TextView, android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        j();
    }

    public void setErrorAccessibilityLabel(CharSequence charSequence) {
        this.f14427v = charSequence;
    }

    public void setErrorAccessibilityLabelResource(int i10) {
        CharSequence charSequence;
        if (i10 != 0) {
            charSequence = getResources().getText(i10);
        } else {
            charSequence = null;
        }
        setErrorAccessibilityLabel(charSequence);
    }

    public void setErrorShown(boolean z10) {
        if (this.f14426u != z10) {
            this.f14426u = z10;
            refreshDrawableState();
            Iterator it = this.f14421p.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    @Override // android.widget.CompoundButton
    public void setOnCheckedChangeListener(CompoundButton.OnCheckedChangeListener onCheckedChangeListener) {
        this.G = onCheckedChangeListener;
    }

    @Override // android.widget.CompoundButton, android.view.View
    public void setStateDescription(CharSequence charSequence) {
        this.F = charSequence;
        if (charSequence == null) {
            g();
        } else {
            super.setStateDescription(charSequence);
        }
    }

    public void setUseMaterialThemeColors(boolean z10) {
        this.f14424s = z10;
        if (z10) {
            d.d(this, getMaterialThemeColorsTintList());
        } else {
            d.d(this, null);
        }
    }

    @Override // android.widget.CompoundButton, android.widget.Checkable
    public void toggle() {
        setChecked(!isChecked());
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialCheckBox(android.content.Context r8, android.util.AttributeSet r9, int r10) {
        /*
            r7 = this;
            int r4 = com.google.android.material.checkbox.MaterialCheckBox.J
            android.content.Context r8 = rh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            java.util.LinkedHashSet r8 = new java.util.LinkedHashSet
            r8.<init>()
            r7.f14421p = r8
            java.util.LinkedHashSet r8 = new java.util.LinkedHashSet
            r8.<init>()
            r7.f14422q = r8
            android.content.Context r8 = r7.getContext()
            int r0 = yg.e.f54164f
            androidx.vectordrawable.graphics.drawable.c r8 = androidx.vectordrawable.graphics.drawable.c.a(r8, r0)
            r7.H = r8
            com.google.android.material.checkbox.MaterialCheckBox$a r8 = new com.google.android.material.checkbox.MaterialCheckBox$a
            r8.<init>()
            r7.I = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r8 = androidx.core.widget.d.a(r7)
            r7.f14428w = r8
            android.content.res.ColorStateList r8 = r7.getSuperButtonTintList()
            r7.f14431z = r8
            r8 = 0
            r7.setSupportButtonTintList(r8)
            int[] r2 = yg.k.U3
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = yg.k.X3
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f14429x = r10
            android.graphics.drawable.Drawable r10 = r7.f14428w
            r1 = 1
            if (r10 == 0) goto L7b
            boolean r10 = com.google.android.material.internal.l.g(r0)
            if (r10 == 0) goto L7b
            boolean r10 = r7.d(r9)
            if (r10 == 0) goto L7b
            super.setButtonDrawable(r8)
            int r8 = yg.e.f54163e
            android.graphics.drawable.Drawable r8 = g.a.b(r0, r8)
            r7.f14428w = r8
            r7.f14430y = r1
            android.graphics.drawable.Drawable r8 = r7.f14429x
            if (r8 != 0) goto L7b
            int r8 = yg.e.f54165g
            android.graphics.drawable.Drawable r8 = g.a.b(r0, r8)
            r7.f14429x = r8
        L7b:
            int r8 = yg.k.Y3
            android.content.res.ColorStateList r8 = lh.c.b(r0, r9, r8)
            r7.A = r8
            int r8 = yg.k.Z3
            r10 = -1
            int r8 = r9.k(r8, r10)
            android.graphics.PorterDuff$Mode r10 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r10)
            r7.B = r8
            int r8 = yg.k.f54318e4
            boolean r8 = r9.a(r8, r6)
            r7.f14424s = r8
            int r8 = yg.k.f54278a4
            boolean r8 = r9.a(r8, r1)
            r7.f14425t = r8
            int r8 = yg.k.f54308d4
            boolean r8 = r9.a(r8, r6)
            r7.f14426u = r8
            int r8 = yg.k.f54298c4
            java.lang.CharSequence r8 = r9.p(r8)
            r7.f14427v = r8
            int r8 = yg.k.f54288b4
            boolean r8 = r9.s(r8)
            if (r8 == 0) goto Lc3
            int r8 = yg.k.f54288b4
            int r8 = r9.k(r8, r6)
            r7.setCheckedState(r8)
        Lc3:
            r9.x()
            r7.f()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.checkbox.MaterialCheckBox.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    @Override // androidx.appcompat.widget.f, android.widget.CompoundButton
    public void setButtonDrawable(Drawable drawable) {
        this.f14428w = drawable;
        this.f14430y = false;
        f();
    }
}
