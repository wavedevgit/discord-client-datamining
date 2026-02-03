package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.Configuration;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.ContextThemeWrapper;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.ActionMenuItemView;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ActionMenuView extends i0 implements e.b, androidx.appcompat.view.menu.k {
    private androidx.appcompat.view.menu.e A;
    private Context B;
    private int C;
    private boolean D;
    private androidx.appcompat.widget.c E;
    private j.a F;
    e.a G;
    private boolean H;
    private int I;
    private int J;
    private int K;
    e L;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a();

        boolean b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements j.a {
        b() {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public boolean b(androidx.appcompat.view.menu.e eVar) {
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends i0.a {

        /* renamed from: a  reason: collision with root package name */
        public boolean f1457a;

        /* renamed from: b  reason: collision with root package name */
        public int f1458b;

        /* renamed from: c  reason: collision with root package name */
        public int f1459c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f1460d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f1461e;

        /* renamed from: f  reason: collision with root package name */
        boolean f1462f;

        public c(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        public c(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
        }

        public c(c cVar) {
            super((ViewGroup.LayoutParams) cVar);
            this.f1457a = cVar.f1457a;
        }

        public c(int i10, int i11) {
            super(i10, i11);
            this.f1457a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements e.a {
        d() {
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            e eVar2 = ActionMenuView.this.L;
            if (eVar2 != null && eVar2.onMenuItemClick(menuItem)) {
                return true;
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            e.a aVar = ActionMenuView.this.G;
            if (aVar != null) {
                aVar.b(eVar);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        boolean onMenuItemClick(MenuItem menuItem);
    }

    public ActionMenuView(Context context) {
        this(context, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int J(View view, int i10, int i11, int i12, int i13) {
        ActionMenuItemView actionMenuItemView;
        boolean z10;
        int i14;
        c cVar = (c) view.getLayoutParams();
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(View.MeasureSpec.getSize(i12) - i13, View.MeasureSpec.getMode(i12));
        if (view instanceof ActionMenuItemView) {
            actionMenuItemView = (ActionMenuItemView) view;
        } else {
            actionMenuItemView = null;
        }
        boolean z11 = false;
        if (actionMenuItemView != null && actionMenuItemView.f()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i11 > 0) {
            i14 = 2;
            if (!z10 || i11 >= 2) {
                view.measure(View.MeasureSpec.makeMeasureSpec(i11 * i10, Integer.MIN_VALUE), makeMeasureSpec);
                int measuredWidth = view.getMeasuredWidth();
                int i15 = measuredWidth / i10;
                if (measuredWidth % i10 != 0) {
                    i15++;
                }
                if (!z10 || i15 >= 2) {
                    i14 = i15;
                }
                if (!cVar.f1457a && z10) {
                    z11 = true;
                }
                cVar.f1460d = z11;
                cVar.f1458b = i14;
                view.measure(View.MeasureSpec.makeMeasureSpec(i10 * i14, 1073741824), makeMeasureSpec);
                return i14;
            }
        }
        i14 = 0;
        if (!cVar.f1457a) {
            z11 = true;
        }
        cVar.f1460d = z11;
        cVar.f1458b = i14;
        view.measure(View.MeasureSpec.makeMeasureSpec(i10 * i14, 1073741824), makeMeasureSpec);
        return i14;
    }

    /* JADX WARN: Type inference failed for: r3v33 */
    /* JADX WARN: Type inference failed for: r3v34, types: [boolean, int] */
    /* JADX WARN: Type inference failed for: r3v48 */
    private void K(int i10, int i11) {
        boolean z10;
        long j10;
        boolean z11;
        int i12;
        int i13;
        int i14;
        int i15;
        boolean z12;
        boolean z13;
        ?? r32;
        boolean z14;
        int i16;
        int i17;
        int mode = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i10);
        int size2 = View.MeasureSpec.getSize(i11);
        int paddingLeft = getPaddingLeft() + getPaddingRight();
        int paddingTop = getPaddingTop() + getPaddingBottom();
        int childMeasureSpec = ViewGroup.getChildMeasureSpec(i11, paddingTop, -2);
        int i18 = size - paddingLeft;
        int i19 = this.J;
        int i20 = i18 / i19;
        int i21 = i18 % i19;
        if (i20 == 0) {
            setMeasuredDimension(i18, 0);
            return;
        }
        int i22 = i19 + (i21 / i20);
        int childCount = getChildCount();
        int i23 = 0;
        int i24 = 0;
        boolean z15 = false;
        int i25 = 0;
        int i26 = 0;
        int i27 = 0;
        long j11 = 0;
        while (i24 < childCount) {
            View childAt = getChildAt(i24);
            int i28 = size2;
            if (childAt.getVisibility() == 8) {
                i17 = i22;
            } else {
                boolean z16 = childAt instanceof ActionMenuItemView;
                i25++;
                if (z16) {
                    int i29 = this.K;
                    z13 = z16;
                    r32 = 0;
                    childAt.setPadding(i29, 0, i29, 0);
                } else {
                    z13 = z16;
                    r32 = 0;
                }
                c cVar = (c) childAt.getLayoutParams();
                cVar.f1462f = r32;
                cVar.f1459c = r32;
                cVar.f1458b = r32;
                cVar.f1460d = r32;
                ((LinearLayout.LayoutParams) cVar).leftMargin = r32;
                ((LinearLayout.LayoutParams) cVar).rightMargin = r32;
                if (z13 && ((ActionMenuItemView) childAt).f()) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                cVar.f1461e = z14;
                if (cVar.f1457a) {
                    i16 = 1;
                } else {
                    i16 = i20;
                }
                int J = J(childAt, i22, i16, childMeasureSpec, paddingTop);
                i26 = Math.max(i26, J);
                i17 = i22;
                if (cVar.f1460d) {
                    i27++;
                }
                if (cVar.f1457a) {
                    z15 = true;
                }
                i20 -= J;
                i23 = Math.max(i23, childAt.getMeasuredHeight());
                if (J == 1) {
                    j11 |= 1 << i24;
                }
            }
            i24++;
            size2 = i28;
            i22 = i17;
        }
        int i30 = size2;
        int i31 = i22;
        char c10 = 2;
        if (z15 && i25 == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z17 = false;
        while (i27 > 0 && i20 > 0) {
            int i32 = Integer.MAX_VALUE;
            long j12 = 0;
            char c11 = c10;
            int i33 = 0;
            int i34 = 0;
            j10 = 1;
            while (i34 < childCount) {
                c cVar2 = (c) getChildAt(i34).getLayoutParams();
                boolean z18 = z10;
                if (cVar2.f1460d) {
                    int i35 = cVar2.f1458b;
                    if (i35 < i32) {
                        j12 = 1 << i34;
                        i32 = i35;
                        i33 = 1;
                    } else if (i35 == i32) {
                        j12 |= 1 << i34;
                        i33++;
                    }
                }
                i34++;
                z10 = z18;
            }
            boolean z19 = z10;
            j11 |= j12;
            if (i33 > i20) {
                break;
            }
            int i36 = i32 + 1;
            int i37 = 0;
            while (i37 < childCount) {
                View childAt2 = getChildAt(i37);
                c cVar3 = (c) childAt2.getLayoutParams();
                long j13 = 1 << i37;
                if ((j12 & j13) == 0) {
                    if (cVar3.f1458b == i36) {
                        j11 |= j13;
                    }
                    i15 = i37;
                } else {
                    if (z19 && cVar3.f1461e) {
                        if (i20 == 1) {
                            int i38 = this.K;
                            z12 = true;
                            i15 = i37;
                            childAt2.setPadding(i38 + i31, 0, i38, 0);
                        } else {
                            i15 = i37;
                            z12 = true;
                        }
                    } else {
                        i15 = i37;
                        z12 = true;
                    }
                    cVar3.f1458b++;
                    cVar3.f1462f = z12;
                    i20--;
                }
                i37 = i15 + 1;
            }
            c10 = c11;
            z10 = z19;
            z17 = true;
        }
        j10 = 1;
        if (!z15 && i25 == 1) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (i20 <= 0 || j11 == 0 || (i20 >= i25 - 1 && !z11 && i26 <= 1)) {
            i12 = 0;
        } else {
            float bitCount = Long.bitCount(j11);
            if (!z11) {
                if ((j11 & j10) != 0) {
                    i12 = 0;
                    if (!((c) getChildAt(0).getLayoutParams()).f1461e) {
                        bitCount -= 0.5f;
                    }
                } else {
                    i12 = 0;
                }
                int i39 = childCount - 1;
                if ((j11 & (1 << i39)) != 0 && !((c) getChildAt(i39).getLayoutParams()).f1461e) {
                    bitCount -= 0.5f;
                }
            } else {
                i12 = 0;
            }
            if (bitCount > 0.0f) {
                i14 = (int) ((i20 * i31) / bitCount);
            } else {
                i14 = i12;
            }
            boolean z20 = z17;
            for (int i40 = i12; i40 < childCount; i40++) {
                if ((j11 & (1 << i40)) != 0) {
                    View childAt3 = getChildAt(i40);
                    c cVar4 = (c) childAt3.getLayoutParams();
                    if (childAt3 instanceof ActionMenuItemView) {
                        cVar4.f1459c = i14;
                        cVar4.f1462f = true;
                        if (i40 == 0 && !cVar4.f1461e) {
                            ((LinearLayout.LayoutParams) cVar4).leftMargin = (-i14) / 2;
                        }
                        z20 = true;
                    } else {
                        if (cVar4.f1457a) {
                            cVar4.f1459c = i14;
                            cVar4.f1462f = true;
                            ((LinearLayout.LayoutParams) cVar4).rightMargin = (-i14) / 2;
                            z20 = true;
                        } else {
                            if (i40 != 0) {
                                ((LinearLayout.LayoutParams) cVar4).leftMargin = i14 / 2;
                            }
                            if (i40 != childCount - 1) {
                                ((LinearLayout.LayoutParams) cVar4).rightMargin = i14 / 2;
                            }
                        }
                    }
                }
            }
            z17 = z20;
        }
        if (z17) {
            for (int i41 = i12; i41 < childCount; i41++) {
                View childAt4 = getChildAt(i41);
                c cVar5 = (c) childAt4.getLayoutParams();
                if (cVar5.f1462f) {
                    childAt4.measure(View.MeasureSpec.makeMeasureSpec((cVar5.f1458b * i31) + cVar5.f1459c, 1073741824), childMeasureSpec);
                }
            }
        }
        if (mode != 1073741824) {
            i13 = i23;
        } else {
            i13 = i30;
        }
        setMeasuredDimension(i18, i13);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0
    /* renamed from: A */
    public c k() {
        c cVar = new c(-2, -2);
        ((LinearLayout.LayoutParams) cVar).gravity = 16;
        return cVar;
    }

    @Override // androidx.appcompat.widget.i0
    /* renamed from: B */
    public c l(AttributeSet attributeSet) {
        return new c(getContext(), attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0
    /* renamed from: C */
    public c m(ViewGroup.LayoutParams layoutParams) {
        c cVar;
        if (layoutParams != null) {
            if (layoutParams instanceof c) {
                cVar = new c((c) layoutParams);
            } else {
                cVar = new c(layoutParams);
            }
            if (((LinearLayout.LayoutParams) cVar).gravity <= 0) {
                ((LinearLayout.LayoutParams) cVar).gravity = 16;
            }
            return cVar;
        }
        return k();
    }

    public c D() {
        c k10 = k();
        k10.f1457a = true;
        return k10;
    }

    protected boolean E(int i10) {
        boolean z10 = false;
        if (i10 == 0) {
            return false;
        }
        View childAt = getChildAt(i10 - 1);
        View childAt2 = getChildAt(i10);
        if (i10 < getChildCount() && (childAt instanceof a)) {
            z10 = ((a) childAt).a();
        }
        if (i10 > 0 && (childAt2 instanceof a)) {
            return ((a) childAt2).b() | z10;
        }
        return z10;
    }

    public boolean F() {
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null && cVar.B()) {
            return true;
        }
        return false;
    }

    public boolean G() {
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null && cVar.D()) {
            return true;
        }
        return false;
    }

    public boolean H() {
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null && cVar.E()) {
            return true;
        }
        return false;
    }

    public boolean I() {
        return this.D;
    }

    public androidx.appcompat.view.menu.e L() {
        return this.A;
    }

    public void M(j.a aVar, e.a aVar2) {
        this.F = aVar;
        this.G = aVar2;
    }

    public boolean N() {
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null && cVar.K()) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.k
    public void a(androidx.appcompat.view.menu.e eVar) {
        this.A = eVar;
    }

    @Override // androidx.appcompat.view.menu.e.b
    public boolean b(androidx.appcompat.view.menu.g gVar) {
        return this.A.M(gVar, 0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0, android.view.ViewGroup
    public boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof c;
    }

    @Override // android.view.View
    public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        return false;
    }

    public Menu getMenu() {
        if (this.A == null) {
            Context context = getContext();
            androidx.appcompat.view.menu.e eVar = new androidx.appcompat.view.menu.e(context);
            this.A = eVar;
            eVar.S(new d());
            androidx.appcompat.widget.c cVar = new androidx.appcompat.widget.c(context);
            this.E = cVar;
            cVar.J(true);
            androidx.appcompat.widget.c cVar2 = this.E;
            j.a aVar = this.F;
            if (aVar == null) {
                aVar = new b();
            }
            cVar2.c(aVar);
            this.A.c(this.E, this.B);
            this.E.H(this);
        }
        return this.A;
    }

    public Drawable getOverflowIcon() {
        getMenu();
        return this.E.A();
    }

    public int getPopupTheme() {
        return this.C;
    }

    public int getWindowAnimations() {
        return 0;
    }

    @Override // android.view.View
    public void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null) {
            cVar.e(false);
            if (this.E.E()) {
                this.E.B();
                this.E.K();
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        z();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        int width;
        int i15;
        if (!this.H) {
            super.onLayout(z10, i10, i11, i12, i13);
            return;
        }
        int childCount = getChildCount();
        int i16 = (i13 - i11) / 2;
        int dividerWidth = getDividerWidth();
        int i17 = i12 - i10;
        int paddingRight = (i17 - getPaddingRight()) - getPaddingLeft();
        boolean b10 = g1.b(this);
        int i18 = 0;
        int i19 = 0;
        for (int i20 = 0; i20 < childCount; i20++) {
            View childAt = getChildAt(i20);
            if (childAt.getVisibility() != 8) {
                c cVar = (c) childAt.getLayoutParams();
                if (cVar.f1457a) {
                    int measuredWidth = childAt.getMeasuredWidth();
                    if (E(i20)) {
                        measuredWidth += dividerWidth;
                    }
                    int measuredHeight = childAt.getMeasuredHeight();
                    if (b10) {
                        i15 = getPaddingLeft() + ((LinearLayout.LayoutParams) cVar).leftMargin;
                        width = i15 + measuredWidth;
                    } else {
                        width = (getWidth() - getPaddingRight()) - ((LinearLayout.LayoutParams) cVar).rightMargin;
                        i15 = width - measuredWidth;
                    }
                    int i21 = i16 - (measuredHeight / 2);
                    childAt.layout(i15, i21, width, measuredHeight + i21);
                    paddingRight -= measuredWidth;
                    i18 = 1;
                } else {
                    paddingRight -= (childAt.getMeasuredWidth() + ((LinearLayout.LayoutParams) cVar).leftMargin) + ((LinearLayout.LayoutParams) cVar).rightMargin;
                    E(i20);
                    i19++;
                }
            }
        }
        if (childCount == 1 && i18 == 0) {
            View childAt2 = getChildAt(0);
            int measuredWidth2 = childAt2.getMeasuredWidth();
            int measuredHeight2 = childAt2.getMeasuredHeight();
            int i22 = (i17 / 2) - (measuredWidth2 / 2);
            int i23 = i16 - (measuredHeight2 / 2);
            childAt2.layout(i22, i23, measuredWidth2 + i22, measuredHeight2 + i23);
            return;
        }
        int i24 = i19 - (i18 ^ 1);
        if (i24 > 0) {
            i14 = paddingRight / i24;
        } else {
            i14 = 0;
        }
        int max = Math.max(0, i14);
        if (b10) {
            int width2 = getWidth() - getPaddingRight();
            for (int i25 = 0; i25 < childCount; i25++) {
                View childAt3 = getChildAt(i25);
                c cVar2 = (c) childAt3.getLayoutParams();
                if (childAt3.getVisibility() != 8 && !cVar2.f1457a) {
                    int i26 = width2 - ((LinearLayout.LayoutParams) cVar2).rightMargin;
                    int measuredWidth3 = childAt3.getMeasuredWidth();
                    int measuredHeight3 = childAt3.getMeasuredHeight();
                    int i27 = i16 - (measuredHeight3 / 2);
                    childAt3.layout(i26 - measuredWidth3, i27, i26, measuredHeight3 + i27);
                    width2 = i26 - ((measuredWidth3 + ((LinearLayout.LayoutParams) cVar2).leftMargin) + max);
                }
            }
            return;
        }
        int paddingLeft = getPaddingLeft();
        for (int i28 = 0; i28 < childCount; i28++) {
            View childAt4 = getChildAt(i28);
            c cVar3 = (c) childAt4.getLayoutParams();
            if (childAt4.getVisibility() != 8 && !cVar3.f1457a) {
                int i29 = paddingLeft + ((LinearLayout.LayoutParams) cVar3).leftMargin;
                int measuredWidth4 = childAt4.getMeasuredWidth();
                int measuredHeight4 = childAt4.getMeasuredHeight();
                int i30 = i16 - (measuredHeight4 / 2);
                childAt4.layout(i29, i30, i29 + measuredWidth4, measuredHeight4 + i30);
                paddingLeft = i29 + measuredWidth4 + ((LinearLayout.LayoutParams) cVar3).rightMargin + max;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0, android.view.View
    public void onMeasure(int i10, int i11) {
        boolean z10;
        androidx.appcompat.view.menu.e eVar;
        boolean z11 = this.H;
        if (View.MeasureSpec.getMode(i10) == 1073741824) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.H = z10;
        if (z11 != z10) {
            this.I = 0;
        }
        int size = View.MeasureSpec.getSize(i10);
        if (this.H && (eVar = this.A) != null && size != this.I) {
            this.I = size;
            eVar.L(true);
        }
        int childCount = getChildCount();
        if (this.H && childCount > 0) {
            K(i10, i11);
            return;
        }
        for (int i12 = 0; i12 < childCount; i12++) {
            c cVar = (c) getChildAt(i12).getLayoutParams();
            ((LinearLayout.LayoutParams) cVar).rightMargin = 0;
            ((LinearLayout.LayoutParams) cVar).leftMargin = 0;
        }
        super.onMeasure(i10, i11);
    }

    public void setExpandedActionViewsExclusive(boolean z10) {
        this.E.G(z10);
    }

    public void setOnMenuItemClickListener(e eVar) {
        this.L = eVar;
    }

    public void setOverflowIcon(Drawable drawable) {
        getMenu();
        this.E.I(drawable);
    }

    public void setOverflowReserved(boolean z10) {
        this.D = z10;
    }

    public void setPopupTheme(int i10) {
        if (this.C != i10) {
            this.C = i10;
            if (i10 == 0) {
                this.B = getContext();
            } else {
                this.B = new ContextThemeWrapper(getContext(), i10);
            }
        }
    }

    public void setPresenter(androidx.appcompat.widget.c cVar) {
        this.E = cVar;
        cVar.H(this);
    }

    public void z() {
        androidx.appcompat.widget.c cVar = this.E;
        if (cVar != null) {
            cVar.y();
        }
    }

    public ActionMenuView(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        setBaselineAligned(false);
        float f10 = context.getResources().getDisplayMetrics().density;
        this.J = (int) (56.0f * f10);
        this.K = (int) (f10 * 4.0f);
        this.B = context;
        this.C = 0;
    }
}
