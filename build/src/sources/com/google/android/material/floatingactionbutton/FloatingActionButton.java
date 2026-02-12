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
import androidx.appcompat.widget.j;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.i0;
import b2.e;
import bh.d;
import bh.k;
import ch.g;
import com.google.android.material.appbar.AppBarLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.floatingactionbutton.c;
import com.google.android.material.internal.q;
import java.util.List;
import th.l;
import th.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FloatingActionButton extends q implements mh.a, o, CoordinatorLayout.b {
    private static final int C = k.f6937l;
    private final mh.b A;
    private c B;

    /* renamed from: e  reason: collision with root package name */
    private ColorStateList f15744e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f15745i;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15746o;

    /* renamed from: p  reason: collision with root package name */
    private PorterDuff.Mode f15747p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15748q;

    /* renamed from: r  reason: collision with root package name */
    private int f15749r;

    /* renamed from: s  reason: collision with root package name */
    private int f15750s;

    /* renamed from: t  reason: collision with root package name */
    private int f15751t;

    /* renamed from: u  reason: collision with root package name */
    private int f15752u;

    /* renamed from: v  reason: collision with root package name */
    private int f15753v;

    /* renamed from: w  reason: collision with root package name */
    boolean f15754w;

    /* renamed from: x  reason: collision with root package name */
    final Rect f15755x;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15756y;

    /* renamed from: z  reason: collision with root package name */
    private final AppCompatImageHelper f15757z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends BaseBehavior<FloatingActionButton> {
        public Behavior() {
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean I(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, Rect rect) {
            return super.f(coordinatorLayout, floatingActionButton, rect);
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean M(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, View view) {
            return super.l(coordinatorLayout, floatingActionButton, view);
        }

        @Override // com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior
        public /* bridge */ /* synthetic */ boolean N(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, int i10) {
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
    public class b implements sh.b {
        b() {
        }

        @Override // sh.b
        public void a(int i10, int i11, int i12, int i13) {
            FloatingActionButton.this.f15755x.set(i10, i11, i12, i13);
            FloatingActionButton floatingActionButton = FloatingActionButton.this;
            floatingActionButton.setPadding(i10 + floatingActionButton.f15752u, i11 + FloatingActionButton.this.f15752u, i12 + FloatingActionButton.this.f15752u, i13 + FloatingActionButton.this.f15752u);
        }

        @Override // sh.b
        public void b(Drawable drawable) {
            if (drawable != null) {
                FloatingActionButton.super.setBackgroundDrawable(drawable);
            }
        }

        @Override // sh.b
        public boolean c() {
            return FloatingActionButton.this.f15754w;
        }
    }

    public FloatingActionButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6759v);
    }

    private int f(int i10) {
        int i11 = this.f15751t;
        if (i11 != 0) {
            return i11;
        }
        Resources resources = getResources();
        if (i10 != -1) {
            if (i10 != 1) {
                return resources.getDimensionPixelSize(d.f6796l);
            }
            return resources.getDimensionPixelSize(d.f6794k);
        } else if (Math.max(resources.getConfiguration().screenWidthDp, resources.getConfiguration().screenHeightDp) < 470) {
            return f(1);
        } else {
            return f(0);
        }
    }

    private void g(Rect rect) {
        e(rect);
        int i10 = -this.B.u();
        rect.inset(i10, i10);
    }

    private c getImpl() {
        if (this.B == null) {
            this.B = new c(this, new b());
        }
        return this.B;
    }

    private void i(Rect rect) {
        int i10 = rect.left;
        Rect rect2 = this.f15755x;
        rect.left = i10 + rect2.left;
        rect.top += rect2.top;
        rect.right -= rect2.right;
        rect.bottom -= rect2.bottom;
    }

    private void j() {
        Drawable drawable = getDrawable();
        if (drawable == null) {
            return;
        }
        ColorStateList colorStateList = this.f15746o;
        if (colorStateList == null) {
            s1.a.c(drawable);
            return;
        }
        int colorForState = colorStateList.getColorForState(getDrawableState(), 0);
        PorterDuff.Mode mode = this.f15747p;
        if (mode == null) {
            mode = PorterDuff.Mode.SRC_IN;
        }
        drawable.mutate().setColorFilter(j.e(colorForState, mode));
    }

    private c.g l(a aVar) {
        return null;
    }

    @Override // mh.a
    public boolean a() {
        return this.A.c();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
    }

    public void e(Rect rect) {
        rect.set(0, 0, getMeasuredWidth(), getMeasuredHeight());
        i(rect);
    }

    @Override // android.widget.ImageButton, android.widget.ImageView, android.view.View
    public CharSequence getAccessibilityClassName() {
        return "com.google.android.material.floatingactionbutton.FloatingActionButton";
    }

    @Override // android.view.View
    public ColorStateList getBackgroundTintList() {
        return this.f15744e;
    }

    @Override // android.view.View
    public PorterDuff.Mode getBackgroundTintMode() {
        return this.f15745i;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.b
    @NonNull
    public CoordinatorLayout.c getBehavior() {
        return new Behavior();
    }

    public float getCompatElevation() {
        return getImpl().m();
    }

    public float getCompatHoveredFocusedTranslationZ() {
        return getImpl().p();
    }

    public float getCompatPressedTranslationZ() {
        return getImpl().r();
    }

    public Drawable getContentBackground() {
        return getImpl().l();
    }

    public int getCustomSize() {
        return this.f15751t;
    }

    public int getExpandedComponentIdHint() {
        return this.A.b();
    }

    public g getHideMotionSpec() {
        return getImpl().o();
    }

    @Deprecated
    public int getRippleColor() {
        ColorStateList colorStateList = this.f15748q;
        if (colorStateList != null) {
            return colorStateList.getDefaultColor();
        }
        return 0;
    }

    public ColorStateList getRippleColorStateList() {
        return this.f15748q;
    }

    @NonNull
    public l getShapeAppearanceModel() {
        return (l) e.g(getImpl().s());
    }

    public g getShowMotionSpec() {
        return getImpl().t();
    }

    public int getSize() {
        return this.f15750s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int getSizeDimension() {
        return f(this.f15750s);
    }

    public ColorStateList getSupportBackgroundTintList() {
        return getBackgroundTintList();
    }

    public PorterDuff.Mode getSupportBackgroundTintMode() {
        return getBackgroundTintMode();
    }

    public ColorStateList getSupportImageTintList() {
        return this.f15746o;
    }

    public PorterDuff.Mode getSupportImageTintMode() {
        return this.f15747p;
    }

    public boolean getUseCompatPadding() {
        return this.f15754w;
    }

    void h(a aVar, boolean z10) {
        getImpl().v(l(aVar), z10);
    }

    @Override // android.widget.ImageView, android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
    }

    void k(a aVar, boolean z10) {
        getImpl().X(l(aVar), z10);
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        getImpl().A();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        getImpl().C();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int i10, int i11) {
        int sizeDimension = getSizeDimension();
        this.f15752u = (sizeDimension - this.f15753v) / 2;
        getImpl().Z();
        int min = Math.min(View.resolveSize(sizeDimension, i10), View.resolveSize(sizeDimension, i11));
        Rect rect = this.f15755x;
        setMeasuredDimension(rect.left + min + rect.right, min + rect.top + rect.bottom);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof vh.a)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        vh.a aVar = (vh.a) parcelable;
        super.onRestoreInstanceState(aVar.a());
        this.A.d((Bundle) e.g((Bundle) aVar.f51619i.get("expandableWidgetHelper")));
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        if (onSaveInstanceState == null) {
            onSaveInstanceState = new Bundle();
        }
        vh.a aVar = new vh.a(onSaveInstanceState);
        aVar.f51619i.put("expandableWidgetHelper", this.A.e());
        return aVar;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (motionEvent.getAction() == 0) {
            g(this.f15756y);
            if (!this.f15756y.contains((int) motionEvent.getX(), (int) motionEvent.getY())) {
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
        if (this.f15744e != colorStateList) {
            this.f15744e = colorStateList;
            getImpl().H(colorStateList);
        }
    }

    @Override // android.view.View
    public void setBackgroundTintMode(PorterDuff.Mode mode) {
        if (this.f15745i != mode) {
            this.f15745i = mode;
            getImpl().I(mode);
        }
    }

    public void setCompatElevation(float f10) {
        getImpl().J(f10);
    }

    public void setCompatElevationResource(int i10) {
        setCompatElevation(getResources().getDimension(i10));
    }

    public void setCompatHoveredFocusedTranslationZ(float f10) {
        getImpl().M(f10);
    }

    public void setCompatHoveredFocusedTranslationZResource(int i10) {
        setCompatHoveredFocusedTranslationZ(getResources().getDimension(i10));
    }

    public void setCompatPressedTranslationZ(float f10) {
        getImpl().Q(f10);
    }

    public void setCompatPressedTranslationZResource(int i10) {
        setCompatPressedTranslationZ(getResources().getDimension(i10));
    }

    public void setCustomSize(int i10) {
        if (i10 >= 0) {
            if (i10 != this.f15751t) {
                this.f15751t = i10;
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
        getImpl().a0(f10);
    }

    public void setEnsureMinTouchTargetSize(boolean z10) {
        if (z10 != getImpl().n()) {
            getImpl().K(z10);
            requestLayout();
        }
    }

    public void setExpandedComponentIdHint(int i10) {
        this.A.f(i10);
    }

    public void setHideMotionSpec(g gVar) {
        getImpl().L(gVar);
    }

    public void setHideMotionSpecResource(int i10) {
        setHideMotionSpec(g.c(getContext(), i10));
    }

    @Override // android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        if (getDrawable() != drawable) {
            super.setImageDrawable(drawable);
            getImpl().Y();
            if (this.f15746o != null) {
                j();
            }
        }
    }

    @Override // android.widget.ImageView
    public void setImageResource(int i10) {
        this.f15757z.i(i10);
        j();
    }

    public void setMaxImageSize(int i10) {
        this.f15753v = i10;
        getImpl().O(i10);
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
        getImpl().S(z10);
    }

    @Override // th.o
    public void setShapeAppearanceModel(@NonNull l lVar) {
        getImpl().T(lVar);
    }

    public void setShowMotionSpec(g gVar) {
        getImpl().U(gVar);
    }

    public void setShowMotionSpecResource(int i10) {
        setShowMotionSpec(g.c(getContext(), i10));
    }

    public void setSize(int i10) {
        this.f15751t = 0;
        if (i10 != this.f15750s) {
            this.f15750s = i10;
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
        if (this.f15746o != colorStateList) {
            this.f15746o = colorStateList;
            j();
        }
    }

    public void setSupportImageTintMode(PorterDuff.Mode mode) {
        if (this.f15747p != mode) {
            this.f15747p = mode;
            j();
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
        if (this.f15754w != z10) {
            this.f15754w = z10;
            getImpl().B();
        }
    }

    @Override // com.google.android.material.internal.q, android.widget.ImageView, android.view.View
    public void setVisibility(int i10) {
        super.setVisibility(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class BaseBehavior<T extends FloatingActionButton> extends CoordinatorLayout.c {

        /* renamed from: d  reason: collision with root package name */
        private Rect f15758d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f15759e;

        public BaseBehavior() {
            this.f15759e = true;
        }

        private boolean J(View view, FloatingActionButton floatingActionButton) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) floatingActionButton.getLayoutParams();
            if (!this.f15759e || fVar.e() != view.getId() || floatingActionButton.getUserSetVisibility() != 0) {
                return true;
            }
            return false;
        }

        private static boolean K(View view) {
            ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                return ((CoordinatorLayout.f) layoutParams).f() instanceof BottomSheetBehavior;
            }
            return false;
        }

        private void L(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton) {
            int i10;
            Rect rect = floatingActionButton.f15755x;
            if (rect.centerX() > 0 && rect.centerY() > 0) {
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
                    i0.V(floatingActionButton, i11);
                }
                if (i10 != 0) {
                    i0.U(floatingActionButton, i10);
                }
            }
        }

        private boolean O(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, FloatingActionButton floatingActionButton) {
            if (J(appBarLayout, floatingActionButton)) {
                return false;
            }
            if (this.f15758d == null) {
                this.f15758d = new Rect();
            }
            Rect rect = this.f15758d;
            com.google.android.material.internal.b.a(coordinatorLayout, appBarLayout, rect);
            if (rect.bottom <= appBarLayout.getMinimumHeightForVisibleOverlappingContent()) {
                floatingActionButton.h(null, false);
                return true;
            }
            floatingActionButton.k(null, false);
            return true;
        }

        private boolean P(View view, FloatingActionButton floatingActionButton) {
            if (J(view, floatingActionButton)) {
                return false;
            }
            if (view.getTop() < (floatingActionButton.getHeight() / 2) + ((ViewGroup.MarginLayoutParams) ((CoordinatorLayout.f) floatingActionButton.getLayoutParams())).topMargin) {
                floatingActionButton.h(null, false);
                return true;
            }
            floatingActionButton.k(null, false);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: I */
        public boolean f(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, Rect rect) {
            Rect rect2 = floatingActionButton.f15755x;
            rect.set(floatingActionButton.getLeft() + rect2.left, floatingActionButton.getTop() + rect2.top, floatingActionButton.getRight() - rect2.right, floatingActionButton.getBottom() - rect2.bottom);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: M */
        public boolean l(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, View view) {
            if (view instanceof AppBarLayout) {
                O(coordinatorLayout, (AppBarLayout) view, floatingActionButton);
                return false;
            } else if (K(view)) {
                P(view, floatingActionButton);
                return false;
            } else {
                return false;
            }
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        /* renamed from: N */
        public boolean p(CoordinatorLayout coordinatorLayout, FloatingActionButton floatingActionButton, int i10) {
            List q10 = coordinatorLayout.q(floatingActionButton);
            int size = q10.size();
            for (int i11 = 0; i11 < size; i11++) {
                View view = (View) q10.get(i11);
                if (view instanceof AppBarLayout) {
                    if (O(coordinatorLayout, (AppBarLayout) view, floatingActionButton)) {
                        break;
                    }
                } else {
                    if (K(view) && P(view, floatingActionButton)) {
                        break;
                    }
                }
            }
            coordinatorLayout.I(floatingActionButton, i10);
            L(coordinatorLayout, floatingActionButton);
            return true;
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public void k(CoordinatorLayout.f fVar) {
            if (fVar.f3009h == 0) {
                fVar.f3009h = 80;
            }
        }

        public BaseBehavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, bh.l.f7085n2);
            this.f15759e = obtainStyledAttributes.getBoolean(bh.l.f7095o2, true);
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
            android.content.Context r11 = wh.a.d(r11, r12, r13, r4)
            r10.<init>(r11, r12, r13)
            android.graphics.Rect r11 = new android.graphics.Rect
            r11.<init>()
            r10.f15755x = r11
            android.graphics.Rect r11 = new android.graphics.Rect
            r11.<init>()
            r10.f15756y = r11
            android.content.Context r0 = r10.getContext()
            int[] r2 = bh.l.X1
            r11 = 0
            int[] r5 = new int[r11]
            r1 = r12
            r3 = r13
            android.content.res.TypedArray r12 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            int r13 = bh.l.Z1
            android.content.res.ColorStateList r13 = qh.c.a(r0, r12, r13)
            r10.f15744e = r13
            int r13 = bh.l.f6955a2
            r2 = -1
            int r13 = r12.getInt(r13, r2)
            r5 = 0
            android.graphics.PorterDuff$Mode r13 = com.google.android.material.internal.p.i(r13, r5)
            r10.f15745i = r13
            int r13 = bh.l.f7055k2
            android.content.res.ColorStateList r13 = qh.c.a(r0, r12, r13)
            r10.f15748q = r13
            int r13 = bh.l.f7005f2
            int r13 = r12.getInt(r13, r2)
            r10.f15750s = r13
            int r13 = bh.l.f6995e2
            int r13 = r12.getDimensionPixelSize(r13, r11)
            r10.f15751t = r13
            int r13 = bh.l.f6965b2
            int r13 = r12.getDimensionPixelSize(r13, r11)
            r10.f15749r = r13
            int r13 = bh.l.f6975c2
            r2 = 0
            float r13 = r12.getDimension(r13, r2)
            int r5 = bh.l.f7025h2
            float r5 = r12.getDimension(r5, r2)
            int r6 = bh.l.f7045j2
            float r2 = r12.getDimension(r6, r2)
            int r6 = bh.l.f7075m2
            boolean r6 = r12.getBoolean(r6, r11)
            r10.f15754w = r6
            android.content.res.Resources r6 = r10.getResources()
            int r7 = bh.d.f6803o0
            int r6 = r6.getDimensionPixelSize(r7)
            int r7 = bh.l.f7035i2
            int r7 = r12.getDimensionPixelSize(r7, r11)
            r10.setMaxImageSize(r7)
            int r7 = bh.l.f7065l2
            ch.g r7 = ch.g.b(r0, r12, r7)
            int r8 = bh.l.f7015g2
            ch.g r8 = ch.g.b(r0, r12, r8)
            th.d r9 = th.l.f48835m
            th.l$b r0 = th.l.g(r0, r1, r3, r4, r9)
            th.l r0 = r0.m()
            int r4 = bh.l.f6985d2
            boolean r11 = r12.getBoolean(r4, r11)
            int r4 = bh.l.Y1
            r9 = 1
            boolean r4 = r12.getBoolean(r4, r9)
            r10.setEnabled(r4)
            r12.recycle()
            androidx.appcompat.widget.AppCompatImageHelper r12 = new androidx.appcompat.widget.AppCompatImageHelper
            r12.<init>(r10)
            r10.f15757z = r12
            r12.g(r1, r3)
            mh.b r12 = new mh.b
            r12.<init>(r10)
            r10.A = r12
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.T(r0)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            android.content.res.ColorStateList r0 = r10.f15744e
            android.graphics.PorterDuff$Mode r1 = r10.f15745i
            android.content.res.ColorStateList r3 = r10.f15748q
            int r4 = r10.f15749r
            r12.x(r0, r1, r3, r4)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.P(r6)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.J(r13)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.M(r5)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.Q(r2)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.U(r7)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.L(r8)
            com.google.android.material.floatingactionbutton.c r12 = r10.getImpl()
            r12.K(r11)
            android.widget.ImageView$ScaleType r11 = android.widget.ImageView.ScaleType.MATRIX
            r10.setScaleType(r11)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.floatingactionbutton.FloatingActionButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setRippleColor(ColorStateList colorStateList) {
        if (this.f15748q != colorStateList) {
            this.f15748q = colorStateList;
            getImpl().R(this.f15748q);
        }
    }
}
