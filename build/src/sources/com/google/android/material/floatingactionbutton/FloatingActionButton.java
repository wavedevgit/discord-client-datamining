package com.google.android.material.floatingactionbutton;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatImageHelper;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import b2.e;
import com.google.android.material.appbar.AppBarLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.floatingactionbutton.b;
import com.google.android.material.internal.p;
import java.util.List;
import oh.k;
import oh.n;
import yg.d;
import yg.j;
import zg.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FloatingActionButton extends p implements hh.a, n, CoordinatorLayout.b {
    private static final int C = j.f54496h;
    private final hh.b A;
    private com.google.android.material.floatingactionbutton.b B;

    /* renamed from: e  reason: collision with root package name */
    private ColorStateList f15639e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f15640i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15641o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f15642p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15643q;

    /* renamed from: r  reason: collision with root package name */
    private int f15644r;

    /* renamed from: s  reason: collision with root package name */
    private int f15645s;

    /* renamed from: t  reason: collision with root package name */
    private int f15646t;

    /* renamed from: u  reason: collision with root package name */
    private int f15647u;

    /* renamed from: v  reason: collision with root package name */
    private int f15648v;

    /* renamed from: w  reason: collision with root package name */
    boolean f15649w;

    /* renamed from: x  reason: collision with root package name */
    final Rect f15650x;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15651y;

    /* renamed from: z  reason: collision with root package name */
    private final AppCompatImageHelper f15652z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends BaseBehavior<FloatingActionButton> {
        public Behavior() {
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean I(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, Rect rect) {
            return super.f(coordinatorLayout, floatingActionButton, rect);
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean L(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, View view) {
            return super.l(coordinatorLayout, floatingActionButton, view);
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean M(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, int i10) {
            return super.p(coordinatorLayout, floatingActionButton, i10);
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ void k(CoordinatorLayout.f fVar) {
            super.k(fVar);
        }

        public Behavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements nh.b {
        b() {
        }

        @Override // nh.b
        public void a(int i10, int i11, int i12, int i13) {
            FloatingActionButton.this.f15650x.set(i10, i11, i12, i13);
            FloatingActionButton floatingActionButton = FloatingActionButton.this;
            floatingActionButton.setPadding(i10 + floatingActionButton.f15647u, i11 + FloatingActionButton.this.f15647u, i12 + FloatingActionButton.this.f15647u, i13 + FloatingActionButton.this.f15647u);
        }

        @Override // nh.b
        public void b(Drawable drawable) {
            if (drawable != null) {
                FloatingActionButton.super.setBackgroundDrawable(drawable);
            }
        }

        @Override // nh.b
        public boolean c() {
            return FloatingActionButton.this.f15649w;
        }
    }

    public FloatingActionButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54351u);
    }

    private com.google.android.material.floatingactionbutton.b e() {
        return new c(this, new b());
    }

    private int g(int i10) {
        int i11 = this.f15646t;
        if (i11 != 0) {
            return i11;
        }
        Resources resources = getResources();
        if (i10 != -1) {
            if (i10 != 1) {
                return resources.getDimensionPixelSize(d.f54373d);
            }
            return resources.getDimensionPixelSize(d.f54371c);
        } else if (Math.max(resources.getConfiguration().screenWidthDp, resources.getConfiguration().screenHeightDp) < 470) {
            return g(1);
        } else {
            return g(0);
        }
    }

    private com.google.android.material.floatingactionbutton.b getImpl() {
        if (this.B == null) {
            this.B = e();
        }
        return this.B;
    }

    private void h(Rect rect) {
        f(rect);
        int i10 = -this.B.s();
        rect.inset(i10, i10);
    }

    private void j(Rect rect) {
        int i10 = rect.left;
        Rect rect2 = this.f15650x;
        rect.left = i10 + rect2.left;
        rect.top += rect2.top;
        rect.right -= rect2.right;
        rect.bottom -= rect2.bottom;
    }

    private void k() {
        Drawable drawable = getDrawable();
        if (drawable == null) {
            return;
        }
        ColorStateList colorStateList = this.f15641o;
        if (colorStateList == null) {
            s1.a.c(drawable);
            return;
        }
        int colorForState = colorStateList.getColorForState(getDrawableState(), 0);
        PorterDuff.Mode mode = this.f15642p;
        if (mode == null) {
            mode = PorterDuff.Mode.SRC_IN;
        }
        drawable.mutate().setColorFilter(androidx.appcompat.widget.j.e(colorForState, mode));
    }

    private b.k m(a aVar) {
        return null;
    }

    @Override // hh.a
    public boolean a() {
        return this.A.c();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        getImpl().B(getDrawableState());
    }

    public void f(Rect rect) {
        rect.set(0, 0, getMeasuredWidth(), getMeasuredHeight());
        j(rect);
    }

    @Override // android.view.View
    public ColorStateList getBackgroundTintList() {
        return this.f15639e;
    }

    @Override // android.view.View
    public PorterDuff.Mode getBackgroundTintMode() {
        return this.f15640i;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.b
    @NonNull
    public CoordinatorLayout.c getBehavior() {
        return new Behavior();
    }

    public float getCompatElevation() {
        return getImpl().j();
    }

    public float getCompatHoveredFocusedTranslationZ() {
        return getImpl().m();
    }

    public float getCompatPressedTranslationZ() {
        return getImpl().p();
    }

    public Drawable getContentBackground() {
        return getImpl().i();
    }

    public int getCustomSize() {
        return this.f15646t;
    }

    public int getExpandedComponentIdHint() {
        return this.A.b();
    }

    public g getHideMotionSpec() {
        return getImpl().l();
    }

    @Deprecated
    public int getRippleColor() {
        ColorStateList colorStateList = this.f15643q;
        if (colorStateList != null) {
            return colorStateList.getDefaultColor();
        }
        return 0;
    }

    public ColorStateList getRippleColorStateList() {
        return this.f15643q;
    }

    @NonNull
    public k getShapeAppearanceModel() {
        return (k) e.g(getImpl().q());
    }

    public g getShowMotionSpec() {
        return getImpl().r();
    }

    public int getSize() {
        return this.f15645s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int getSizeDimension() {
        return g(this.f15645s);
    }

    public ColorStateList getSupportBackgroundTintList() {
        return getBackgroundTintList();
    }

    public PorterDuff.Mode getSupportBackgroundTintMode() {
        return getBackgroundTintMode();
    }

    public ColorStateList getSupportImageTintList() {
        return this.f15641o;
    }

    public PorterDuff.Mode getSupportImageTintMode() {
        return this.f15642p;
    }

    public boolean getUseCompatPadding() {
        return this.f15649w;
    }

    void i(a aVar, boolean z10) {
        getImpl().t(m(aVar), z10);
    }

    @Override // android.widget.ImageView, android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
        getImpl().x();
    }

    void l(a aVar, boolean z10) {
        getImpl().Z(m(aVar), z10);
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        getImpl().y();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        getImpl().A();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int i10, int i11) {
        int sizeDimension = getSizeDimension();
        this.f15647u = (sizeDimension - this.f15648v) / 2;
        getImpl().c0();
        int min = Math.min(View.resolveSize(sizeDimension, i10), View.resolveSize(sizeDimension, i11));
        Rect rect = this.f15650x;
        setMeasuredDimension(rect.left + min + rect.right, min + rect.top + rect.bottom);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof qh.a)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        qh.a aVar = (qh.a) parcelable;
        super.onRestoreInstanceState(aVar.a());
        this.A.d((Bundle) e.g((Bundle) aVar.f47666i.get("expandableWidgetHelper")));
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        if (onSaveInstanceState == null) {
            onSaveInstanceState = new Bundle();
        }
        qh.a aVar = new qh.a(onSaveInstanceState);
        aVar.f47666i.put("expandableWidgetHelper", this.A.e());
        return aVar;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (motionEvent.getAction() == 0) {
            h(this.f15651y);
            if (!this.f15651y.contains((int) motionEvent.getX(), (int) motionEvent.getY())) {
                return false;
            }
        }
        return super.onTouchEvent(motionEvent);
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        Log.i("FloatingActionButton", "Setting a custom background is not supported.");
    }

    @Override // android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        Log.i("FloatingActionButton", "Setting a custom background is not supported.");
    }

    @Override // android.view.View
    public void setBackgroundResource(int i10) {
        Log.i("FloatingActionButton", "Setting a custom background is not supported.");
    }

    @Override // android.view.View
    public void setBackgroundTintList(ColorStateList colorStateList) {
        if (this.f15639e != colorStateList) {
            this.f15639e = colorStateList;
            getImpl().I(colorStateList);
        }
    }

    @Override // android.view.View
    public void setBackgroundTintMode(PorterDuff.Mode mode) {
        if (this.f15640i != mode) {
            this.f15640i = mode;
            getImpl().J(mode);
        }
    }

    public void setCompatElevation(float f10) {
        getImpl().K(f10);
    }

    public void setCompatElevationResource(int i10) {
        setCompatElevation(getResources().getDimension(i10));
    }

    public void setCompatHoveredFocusedTranslationZ(float f10) {
        getImpl().N(f10);
    }

    public void setCompatHoveredFocusedTranslationZResource(int i10) {
        setCompatHoveredFocusedTranslationZ(getResources().getDimension(i10));
    }

    public void setCompatPressedTranslationZ(float f10) {
        getImpl().R(f10);
    }

    public void setCompatPressedTranslationZResource(int i10) {
        setCompatPressedTranslationZ(getResources().getDimension(i10));
    }

    public void setCustomSize(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f15646t) {
                this.f15646t = i10;
                requestLayout();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Custom size must be non-negative");
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        getImpl().d0(f10);
    }

    public void setEnsureMinTouchTargetSize(boolean z10) {
        if (z10 != getImpl().k()) {
            getImpl().L(z10);
            requestLayout();
        }
    }

    public void setExpandedComponentIdHint(int i10) {
        this.A.f(i10);
    }

    public void setHideMotionSpec(g gVar) {
        getImpl().M(gVar);
    }

    public void setHideMotionSpecResource(int i10) {
        setHideMotionSpec(g.c(getContext(), i10));
    }

    @Override // android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        if (getDrawable() != drawable) {
            super.setImageDrawable(drawable);
            getImpl().b0();
            if (this.f15641o != null) {
                k();
            }
        }
    }

    @Override // android.widget.ImageView
    public void setImageResource(int i10) {
        this.f15652z.i(i10);
        k();
    }

    public void setMaxImageSize(int i10) {
        this.f15648v = i10;
        getImpl().P(i10);
    }

    public void setRippleColor(int i10) {
        setRippleColor(ColorStateList.valueOf(i10));
    }

    @Override // android.view.View
    public void setScaleX(float f10) {
        super.setScaleX(f10);
        getImpl().F();
    }

    @Override // android.view.View
    public void setScaleY(float f10) {
        super.setScaleY(f10);
        getImpl().F();
    }

    public void setShadowPaddingEnabled(boolean z10) {
        getImpl().T(z10);
    }

    @Override // oh.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        getImpl().U(kVar);
    }

    public void setShowMotionSpec(g gVar) {
        getImpl().V(gVar);
    }

    public void setShowMotionSpecResource(int i10) {
        setShowMotionSpec(g.c(getContext(), i10));
    }

    public void setSize(int i10) {
        this.f15646t = 0;
        if (i10 != this.f15645s) {
            this.f15645s = i10;
            requestLayout();
        }
    }

    public void setSupportBackgroundTintList(ColorStateList colorStateList) {
        setBackgroundTintList(colorStateList);
    }

    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        setBackgroundTintMode(mode);
    }

    public void setSupportImageTintList(ColorStateList colorStateList) {
        if (this.f15641o != colorStateList) {
            this.f15641o = colorStateList;
            k();
        }
    }

    public void setSupportImageTintMode(PorterDuff.Mode mode) {
        if (this.f15642p != mode) {
            this.f15642p = mode;
            k();
        }
    }

    @Override // android.view.View
    public void setTranslationX(float f10) {
        super.setTranslationX(f10);
        getImpl().G();
    }

    @Override // android.view.View
    public void setTranslationY(float f10) {
        super.setTranslationY(f10);
        getImpl().G();
    }

    @Override // android.view.View
    public void setTranslationZ(float f10) {
        super.setTranslationZ(f10);
        getImpl().G();
    }

    public void setUseCompatPadding(boolean z10) {
        if (this.f15649w != z10) {
            this.f15649w = z10;
            getImpl().z();
        }
    }

    @Override // com.google.android.material.internal.p, android.widget.ImageView, android.view.View
    public void setVisibility(int i10) {
        super.setVisibility(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class BaseBehavior<T extends FloatingActionButton> extends CoordinatorLayout.c {

        /* renamed from: d  reason: collision with root package name */
        private Rect f15653d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f15654e;

        public BaseBehavior() {
            this.f15654e = true;
        }

        private static boolean J(View view) {
            ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                return ((CoordinatorLayout.f) layoutParams).f() instanceof BottomSheetBehavior;
            }
            return false;
        }

        private void K(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton) {
            int i10;
            Rect rect = floatingActionButton.f15650x;
            if (rect != null && rect.centerX() > 0 && rect.centerY() > 0) {
                CoordinatorLayout.f fVar = (CoordinatorLayout.f) floatingActionButton.getLayoutParams();
                int i11 = 0;
                if (floatingActionButton.getRight() >= coordinatorLayout.getWidth() - ((ViewGroup.MarginLayoutParams) fVar).rightMargin) {
                    i10 = rect.right;
                } else if (floatingActionButton.getLeft() <= ((ViewGroup.MarginLayoutParams) fVar).leftMargin) {
                    i10 = -rect.left;
                } else {
                    i10 = 0;
                }
                if (floatingActionButton.getBottom() >= coordinatorLayout.getHeight() - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin) {
                    i11 = rect.bottom;
                } else if (floatingActionButton.getTop() <= ((ViewGroup.MarginLayoutParams) fVar).topMargin) {
                    i11 = -rect.top;
                }
                if (i11 != 0) {
                    h0.Y(floatingActionButton, i11);
                }
                if (i10 != 0) {
                    h0.X(floatingActionButton, i10);
                }
            }
        }

        private boolean N(View view, FloatingActionButton floatingActionButton) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) floatingActionButton.getLayoutParams();
            if (!this.f15654e || fVar.e() != view.getId() || floatingActionButton.getUserSetVisibility() != 0) {
                return false;
            }
            return true;
        }

        private boolean O(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, FloatingActionButton floatingActionButton) {
            if (!N(appBarLayout, floatingActionButton)) {
                return false;
            }
            if (this.f15653d == null) {
                this.f15653d = new Rect();
            }
            Rect rect = this.f15653d;
            com.google.android.material.internal.b.a(coordinatorLayout, appBarLayout, rect);
            if (rect.bottom <= appBarLayout.getMinimumHeightForVisibleOverlappingContent()) {
                floatingActionButton.i(null, false);
                return true;
            }
            floatingActionButton.l(null, false);
            return true;
        }

        private boolean P(View view, FloatingActionButton floatingActionButton) {
            if (!N(view, floatingActionButton)) {
                return false;
            }
            if (view.getTop() < (floatingActionButton.getHeight() / 2) + ((ViewGroup.MarginLayoutParams) ((CoordinatorLayout.f) floatingActionButton.getLayoutParams())).topMargin) {
                floatingActionButton.i(null, false);
                return true;
            }
            floatingActionButton.l(null, false);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: I */
        public boolean f(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, Rect rect) {
            Rect rect2 = floatingActionButton.f15650x;
            rect.set(floatingActionButton.getLeft() + rect2.left, floatingActionButton.getTop() + rect2.top, floatingActionButton.getRight() - rect2.right, floatingActionButton.getBottom() - rect2.bottom);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: L */
        public boolean l(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, View view) {
            if (view instanceof AppBarLayout) {
                O(coordinatorLayout, (AppBarLayout) view, floatingActionButton);
                return false;
            } else if (J(view)) {
                P(view, floatingActionButton);
                return false;
            } else {
                return false;
            }
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: M */
        public boolean p(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, int i10) {
            List m10 = coordinatorLayout.m(floatingActionButton);
            int size = m10.size();
            for (int i11 = 0; i11 < size; i11++) {
                View view = (View) m10.get(i11);
                if (view instanceof AppBarLayout) {
                    if (O(coordinatorLayout, (AppBarLayout) view, floatingActionButton)) {
                        break;
                    }
                } else {
                    if (J(view) && P(view, floatingActionButton)) {
                        break;
                    }
                }
            }
            coordinatorLayout.E(floatingActionButton, i10);
            K(coordinatorLayout, floatingActionButton);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public void k(CoordinatorLayout.f fVar) {
            if (fVar.f2899h == 0) {
                fVar.f2899h = 80;
            }
        }

        public BaseBehavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.f54568f2);
            this.f15654e = obtainStyledAttributes.getBoolean(yg.k.f54578g2, true);
            obtainStyledAttributes.recycle();
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public FloatingActionButton(android.content.Context r11, android.util.AttributeSet r12, int r13) {
        /*
            r10 = this;
            int r4 = com.google.android.material.floatingactionbutton.FloatingActionButton.C
            android.content.Context r11 = rh.a.c(r11, r12, r13, r4)
            r10.<init>(r11, r12, r13)
            android.graphics.Rect r11 = new android.graphics.Rect
            r11.<init>()
            r10.f15650x = r11
            android.graphics.Rect r11 = new android.graphics.Rect
            r11.<init>()
            r10.f15651y = r11
            android.content.Context r0 = r10.getContext()
            int[] r2 = yg.k.P1
            r11 = 0
            int[] r5 = new int[r11]
            r1 = r12
            r3 = r13
            android.content.res.TypedArray r12 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r13 = yg.k.R1
            android.content.res.ColorStateList r13 = lh.c.a(r0, r12, r13)
            r10.f15639e = r13
            int r13 = yg.k.S1
            r2 = -1
            int r13 = r12.getInt(r13, r2)
            r5 = 0
            android.graphics.PorterDuff$Mode r13 = com.google.android.material.internal.o.i(r13, r5)
            r10.f15640i = r13
            int r13 = yg.k.f54538c2
            android.content.res.ColorStateList r13 = lh.c.a(r0, r12, r13)
            r10.f15643q = r13
            int r13 = yg.k.X1
            int r13 = r12.getInt(r13, r2)
            r10.f15645s = r13
            int r13 = yg.k.W1
            int r13 = r12.getDimensionPixelSize(r13, r11)
            r10.f15646t = r13
            int r13 = yg.k.T1
            int r13 = r12.getDimensionPixelSize(r13, r11)
            r10.f15644r = r13
            int r13 = yg.k.U1
            r2 = 0
            float r13 = r12.getDimension(r13, r2)
            int r5 = yg.k.Z1
            float r5 = r12.getDimension(r5, r2)
            int r6 = yg.k.f54528b2
            float r2 = r12.getDimension(r6, r2)
            int r6 = yg.k.f54558e2
            boolean r6 = r12.getBoolean(r6, r11)
            r10.f15649w = r6
            android.content.res.Resources r6 = r10.getResources()
            int r7 = yg.d.X
            int r6 = r6.getDimensionPixelSize(r7)
            int r7 = yg.k.f54518a2
            int r7 = r12.getDimensionPixelSize(r7, r11)
            r10.setMaxImageSize(r7)
            int r7 = yg.k.f54548d2
            zg.g r7 = zg.g.b(r0, r12, r7)
            int r8 = yg.k.Y1
            zg.g r8 = zg.g.b(r0, r12, r8)
            oh.c r9 = oh.k.f44007m
            oh.k$b r0 = oh.k.g(r0, r1, r3, r4, r9)
            oh.k r0 = r0.m()
            int r4 = yg.k.V1
            boolean r11 = r12.getBoolean(r4, r11)
            int r4 = yg.k.Q1
            r9 = 1
            boolean r4 = r12.getBoolean(r4, r9)
            r10.setEnabled(r4)
            r12.recycle()
            androidx.appcompat.widget.AppCompatImageHelper r12 = new androidx.appcompat.widget.AppCompatImageHelper
            r12.<init>(r10)
            r10.f15652z = r12
            r12.g(r1, r3)
            hh.b r12 = new hh.b
            r12.<init>(r10)
            r10.A = r12
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.U(r0)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            android.content.res.ColorStateList r0 = r10.f15639e
            android.graphics.PorterDuff$Mode r1 = r10.f15640i
            android.content.res.ColorStateList r3 = r10.f15643q
            int r4 = r10.f15644r
            r12.u(r0, r1, r3, r4)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.Q(r6)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.K(r13)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.N(r5)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.R(r2)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.V(r7)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.M(r8)
            com.google.android.material.floatingactionbutton.b r12 = r10.getImpl()
            r12.L(r11)
            android.widget.ImageView$ScaleType r11 = android.widget.ImageView.ScaleType.MATRIX
            r10.setScaleType(r11)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.floatingactionbutton.FloatingActionButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setRippleColor(ColorStateList colorStateList) {
        if (this.f15643q != colorStateList) {
            this.f15643q = colorStateList;
            getImpl().S(this.f15643q);
        }
    }
}
