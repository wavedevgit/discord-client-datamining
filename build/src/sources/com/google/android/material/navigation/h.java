package com.google.android.material.navigation;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.SparseArray;
import android.util.TypedValue;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.core.util.Pools$SynchronizedPool;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.transition.a0;
import androidx.transition.x;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends ViewGroup implements androidx.appcompat.view.menu.k {

    /* renamed from: k0  reason: collision with root package name */
    private static final int[] f16006k0 = {16842912};

    /* renamed from: l0  reason: collision with root package name */
    private static final int[] f16007l0 = {-16842910};
    private int A;
    private int B;
    private boolean C;
    private Drawable D;
    private ColorStateList E;
    private int F;
    private final SparseArray G;
    private int H;
    private int I;
    private int J;
    private int K;
    private boolean L;
    private int M;
    private int N;
    private int O;
    private int P;
    private int Q;
    private int R;
    private int S;
    private th.l T;
    private boolean U;
    private ColorStateList V;
    private i W;

    /* renamed from: a0  reason: collision with root package name */
    private f f16008a0;

    /* renamed from: b0  reason: collision with root package name */
    private boolean f16009b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f16010c0;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f16011d;

    /* renamed from: d0  reason: collision with root package name */
    private int f16012d0;

    /* renamed from: e  reason: collision with root package name */
    private final View.OnClickListener f16013e;

    /* renamed from: e0  reason: collision with root package name */
    private int f16014e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f16015f0;

    /* renamed from: g0  reason: collision with root package name */
    private MenuItem f16016g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f16017h0;

    /* renamed from: i  reason: collision with root package name */
    private b2.d f16018i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f16019i0;

    /* renamed from: j0  reason: collision with root package name */
    private final Rect f16020j0;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f16021o;

    /* renamed from: p  reason: collision with root package name */
    private int f16022p;

    /* renamed from: q  reason: collision with root package name */
    private int f16023q;

    /* renamed from: r  reason: collision with root package name */
    private g[] f16024r;

    /* renamed from: s  reason: collision with root package name */
    private int f16025s;

    /* renamed from: t  reason: collision with root package name */
    private int f16026t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f16027u;

    /* renamed from: v  reason: collision with root package name */
    private int f16028v;

    /* renamed from: w  reason: collision with root package name */
    private ColorStateList f16029w;

    /* renamed from: x  reason: collision with root package name */
    private final ColorStateList f16030x;

    /* renamed from: y  reason: collision with root package name */
    private int f16031y;

    /* renamed from: z  reason: collision with root package name */
    private int f16032z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements View.OnClickListener {
        a() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            androidx.appcompat.view.menu.g itemData = ((d) view).getItemData();
            boolean e10 = h.this.f16008a0.e(itemData, h.this.W, 0);
            if (itemData != null && itemData.isCheckable()) {
                if (!e10 || itemData.isChecked()) {
                    h.this.setCheckedItem(itemData);
                }
            }
        }
    }

    public h(Context context) {
        super(context);
        this.f16021o = new SparseArray();
        this.f16025s = -1;
        this.f16026t = -1;
        this.G = new SparseArray();
        this.H = -1;
        this.I = -1;
        this.J = -1;
        this.K = -1;
        this.S = 49;
        this.U = false;
        this.f16012d0 = 1;
        this.f16014e0 = 0;
        this.f16016g0 = null;
        this.f16017h0 = 7;
        this.f16019i0 = false;
        this.f16020j0 = new Rect();
        this.f16030x = e(16842808);
        if (isInEditMode()) {
            this.f16011d = null;
        } else {
            androidx.transition.a aVar = new androidx.transition.a();
            this.f16011d = aVar;
            aVar.H0(0);
            aVar.v(TextView.class, true);
            aVar.o0(oh.g.f(getContext(), bh.b.M, getResources().getInteger(bh.g.f6869b)));
            aVar.q0(oh.g.g(getContext(), bh.b.V, ch.a.f8277b));
            aVar.y0(new com.google.android.material.internal.k());
        }
        this.f16013e = new a();
        setImportantForAccessibility(1);
    }

    private Drawable f() {
        if (this.T != null && this.V != null) {
            th.h hVar = new th.h(this.T);
            hVar.f0(this.V);
            return hVar;
        }
        return null;
    }

    private d g(int i10, androidx.appcompat.view.menu.g gVar, boolean z10, boolean z11) {
        this.W.m(true);
        gVar.setCheckable(true);
        this.W.m(false);
        d newItem = getNewItem();
        newItem.setShifting(z10);
        newItem.setLabelMaxLines(this.f16012d0);
        newItem.setIconTintList(this.f16027u);
        newItem.setIconSize(this.f16028v);
        newItem.setTextColor(this.f16030x);
        newItem.setTextAppearanceInactive(this.f16031y);
        newItem.setTextAppearanceActive(this.f16032z);
        newItem.setHorizontalTextAppearanceInactive(this.A);
        newItem.setHorizontalTextAppearanceActive(this.B);
        newItem.setTextAppearanceActiveBoldEnabled(this.C);
        newItem.setTextColor(this.f16029w);
        int i11 = this.H;
        if (i11 != -1) {
            newItem.setItemPaddingTop(i11);
        }
        int i12 = this.I;
        if (i12 != -1) {
            newItem.setItemPaddingBottom(i12);
        }
        newItem.setMeasureBottomPaddingFromLabelBaseline(this.f16009b0);
        newItem.setLabelFontScalingEnabled(this.f16010c0);
        int i13 = this.J;
        if (i13 != -1) {
            newItem.setActiveIndicatorLabelPadding(i13);
        }
        int i14 = this.K;
        if (i14 != -1) {
            newItem.setIconLabelHorizontalSpacing(i14);
        }
        newItem.setActiveIndicatorWidth(this.M);
        newItem.setActiveIndicatorHeight(this.N);
        newItem.setActiveIndicatorExpandedWidth(this.O);
        newItem.setActiveIndicatorExpandedHeight(this.P);
        newItem.setActiveIndicatorMarginHorizontal(this.Q);
        newItem.setItemGravity(this.S);
        newItem.setActiveIndicatorExpandedPadding(this.f16020j0);
        newItem.setActiveIndicatorExpandedMarginHorizontal(this.R);
        newItem.setActiveIndicatorDrawable(f());
        newItem.setActiveIndicatorResizeable(this.U);
        newItem.setActiveIndicatorEnabled(this.L);
        Drawable drawable = this.D;
        if (drawable != null) {
            newItem.setItemBackground(drawable);
        } else {
            newItem.setItemBackground(this.F);
        }
        newItem.setItemRippleColor(this.E);
        newItem.setLabelVisibilityMode(this.f16022p);
        newItem.setItemIconGravity(this.f16023q);
        newItem.setOnlyShowWhenExpanded(z11);
        newItem.setExpanded(this.f16015f0);
        newItem.c(gVar, 0);
        newItem.setItemPosition(i10);
        int itemId = gVar.getItemId();
        newItem.setOnTouchListener((View.OnTouchListener) this.f16021o.get(itemId));
        newItem.setOnClickListener(this.f16013e);
        int i15 = this.f16025s;
        if (i15 != 0 && itemId == i15) {
            this.f16026t = i10;
        }
        setBadgeIfNeeded(newItem);
        return newItem;
    }

    private int getCollapsedVisibleItemCount() {
        return Math.min(this.f16017h0, this.f16008a0.d());
    }

    private d getNewItem() {
        d dVar;
        b2.d dVar2 = this.f16018i;
        if (dVar2 != null) {
            dVar = (d) dVar2.acquire();
        } else {
            dVar = null;
        }
        if (dVar == null) {
            return h(getContext());
        }
        return dVar;
    }

    /* JADX WARN: Code restructure failed: missing block: B:33:0x0068, code lost:
        return false;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean l() {
        /*
            r5 = this;
            com.google.android.material.navigation.g[] r0 = r5.f16024r
            r1 = 0
            if (r0 == 0) goto L6d
            com.google.android.material.navigation.f r0 = r5.f16008a0
            if (r0 == 0) goto L6d
            int r0 = r0.g()
            com.google.android.material.navigation.g[] r2 = r5.f16024r
            int r2 = r2.length
            if (r0 == r2) goto L13
            goto L6d
        L13:
            r0 = r1
        L14:
            com.google.android.material.navigation.g[] r2 = r5.f16024r
            int r2 = r2.length
            r3 = 1
            if (r0 >= r2) goto L6c
            com.google.android.material.navigation.f r2 = r5.f16008a0
            android.view.MenuItem r2 = r2.b(r0)
            boolean r2 = r2 instanceof com.google.android.material.navigation.a
            if (r2 == 0) goto L2d
            com.google.android.material.navigation.g[] r2 = r5.f16024r
            r2 = r2[r0]
            boolean r2 = r2 instanceof com.google.android.material.navigation.b
            if (r2 != 0) goto L2d
            return r1
        L2d:
            com.google.android.material.navigation.f r2 = r5.f16008a0
            android.view.MenuItem r2 = r2.b(r0)
            boolean r2 = r2.hasSubMenu()
            if (r2 == 0) goto L43
            com.google.android.material.navigation.g[] r2 = r5.f16024r
            r2 = r2[r0]
            boolean r2 = r2 instanceof com.google.android.material.navigation.k
            if (r2 != 0) goto L43
            r2 = r3
            goto L44
        L43:
            r2 = r1
        L44:
            com.google.android.material.navigation.f r4 = r5.f16008a0
            android.view.MenuItem r4 = r4.b(r0)
            boolean r4 = r4.hasSubMenu()
            if (r4 != 0) goto L59
            com.google.android.material.navigation.g[] r4 = r5.f16024r
            r4 = r4[r0]
            boolean r4 = r4 instanceof com.google.android.material.navigation.d
            if (r4 != 0) goto L59
            goto L5a
        L59:
            r3 = r1
        L5a:
            com.google.android.material.navigation.f r4 = r5.f16008a0
            android.view.MenuItem r4 = r4.b(r0)
            boolean r4 = r4 instanceof com.google.android.material.navigation.a
            if (r4 != 0) goto L69
            if (r2 != 0) goto L68
            if (r3 == 0) goto L69
        L68:
            return r1
        L69:
            int r0 = r0 + 1
            goto L14
        L6c:
            return r3
        L6d:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.navigation.h.l():boolean");
    }

    private boolean n(int i10) {
        return i10 != -1;
    }

    private void o() {
        g[] gVarArr = this.f16024r;
        if (gVarArr != null && this.f16018i != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    d dVar = (d) gVar;
                    this.f16018i.release(dVar);
                    dVar.g();
                }
            }
        }
    }

    private void p() {
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < this.f16008a0.g(); i10++) {
            hashSet.add(Integer.valueOf(this.f16008a0.b(i10).getItemId()));
        }
        for (int i11 = 0; i11 < this.G.size(); i11++) {
            int keyAt = this.G.keyAt(i11);
            if (!hashSet.contains(Integer.valueOf(keyAt))) {
                this.G.delete(keyAt);
            }
        }
    }

    private void setBadgeIfNeeded(@NonNull d dVar) {
        dh.a aVar;
        int id2 = dVar.getId();
        if (n(id2) && (aVar = (dh.a) this.G.get(id2)) != null) {
            dVar.setBadge(aVar);
        }
    }

    private void u(int i10) {
        if (n(i10)) {
            return;
        }
        throw new IllegalArgumentException(i10 + " is not a valid view id");
    }

    @Override // androidx.appcompat.view.menu.k
    public void a(androidx.appcompat.view.menu.e eVar) {
        this.f16008a0 = new f(eVar);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public void d() {
        boolean z10;
        d dVar;
        removeAllViews();
        o();
        this.W.m(true);
        this.f16008a0.f();
        this.W.m(false);
        int a10 = this.f16008a0.a();
        if (a10 == 0) {
            this.f16025s = 0;
            this.f16026t = 0;
            this.f16024r = null;
            this.f16018i = null;
            return;
        }
        if (this.f16018i == null || this.f16014e0 != a10) {
            this.f16014e0 = a10;
            this.f16018i = new Pools$SynchronizedPool(a10);
        }
        p();
        int g10 = this.f16008a0.g();
        this.f16024r = new g[g10];
        boolean m10 = m(this.f16022p, getCurrentVisibleContentItemCount());
        int i10 = 0;
        int i11 = 0;
        for (int i12 = 0; i12 < g10; i12++) {
            MenuItem b10 = this.f16008a0.b(i12);
            boolean z11 = b10 instanceof com.google.android.material.navigation.a;
            if (z11) {
                b bVar = new b(getContext());
                bVar.setOnlyShowWhenExpanded(true);
                bVar.setDividersEnabled(this.f16019i0);
                dVar = bVar;
            } else if (b10.hasSubMenu()) {
                if (i10 <= 0) {
                    k kVar = new k(getContext());
                    int i13 = this.B;
                    if (i13 == 0) {
                        i13 = this.f16032z;
                    }
                    kVar.setTextAppearance(i13);
                    kVar.setTextColor(this.f16029w);
                    kVar.setOnlyShowWhenExpanded(true);
                    kVar.c((androidx.appcompat.view.menu.g) b10, 0);
                    i10 = b10.getSubMenu().size();
                    dVar = kVar;
                } else {
                    throw new IllegalArgumentException("Only one layer of submenu is supported; a submenu inside a submenu is not supported by the Navigation Bar.");
                }
            } else if (i10 > 0) {
                i10--;
                dVar = g(i12, (androidx.appcompat.view.menu.g) b10, m10, true);
            } else {
                androidx.appcompat.view.menu.g gVar = (androidx.appcompat.view.menu.g) b10;
                if (i11 >= this.f16017h0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i11++;
                dVar = g(i12, gVar, m10, z10);
            }
            if (!z11 && b10.isCheckable() && this.f16026t == -1) {
                this.f16026t = i12;
            }
            this.f16024r[i12] = dVar;
            addView(dVar);
        }
        int min = Math.min(g10 - 1, this.f16026t);
        this.f16026t = min;
        setCheckedItem(this.f16024r[min].getItemData());
    }

    public ColorStateList e(int i10) {
        TypedValue typedValue = new TypedValue();
        if (!getContext().getTheme().resolveAttribute(i10, typedValue, true)) {
            return null;
        }
        ColorStateList a10 = g.a.a(getContext(), typedValue.resourceId);
        if (!getContext().getTheme().resolveAttribute(f.a.f23298w, typedValue, true)) {
            return null;
        }
        int i11 = typedValue.data;
        int defaultColor = a10.getDefaultColor();
        int[] iArr = f16007l0;
        return new ColorStateList(new int[][]{iArr, f16006k0, ViewGroup.EMPTY_STATE_SET}, new int[]{a10.getColorForState(iArr, defaultColor), i11, defaultColor});
    }

    public int getActiveIndicatorLabelPadding() {
        return this.J;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SparseArray<dh.a> getBadgeDrawables() {
        return this.G;
    }

    public int getCurrentVisibleContentItemCount() {
        if (this.f16015f0) {
            return this.f16008a0.c();
        }
        return getCollapsedVisibleItemCount();
    }

    public int getHorizontalItemTextAppearanceActive() {
        return this.B;
    }

    public int getHorizontalItemTextAppearanceInactive() {
        return this.A;
    }

    public int getIconLabelHorizontalSpacing() {
        return this.K;
    }

    public ColorStateList getIconTintList() {
        return this.f16027u;
    }

    public ColorStateList getItemActiveIndicatorColor() {
        return this.V;
    }

    public boolean getItemActiveIndicatorEnabled() {
        return this.L;
    }

    public int getItemActiveIndicatorExpandedHeight() {
        return this.P;
    }

    public int getItemActiveIndicatorExpandedMarginHorizontal() {
        return this.R;
    }

    public int getItemActiveIndicatorExpandedWidth() {
        return this.O;
    }

    public int getItemActiveIndicatorHeight() {
        return this.N;
    }

    public int getItemActiveIndicatorMarginHorizontal() {
        return this.Q;
    }

    public th.l getItemActiveIndicatorShapeAppearance() {
        return this.T;
    }

    public int getItemActiveIndicatorWidth() {
        return this.M;
    }

    public Drawable getItemBackground() {
        g[] gVarArr = this.f16024r;
        if (gVarArr != null && gVarArr.length > 0) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    return ((d) gVar).getBackground();
                }
            }
        }
        return this.D;
    }

    @Deprecated
    public int getItemBackgroundRes() {
        return this.F;
    }

    public int getItemGravity() {
        return this.S;
    }

    public int getItemIconGravity() {
        return this.f16023q;
    }

    public int getItemIconSize() {
        return this.f16028v;
    }

    public int getItemPaddingBottom() {
        return this.I;
    }

    public int getItemPaddingTop() {
        return this.H;
    }

    public ColorStateList getItemRippleColor() {
        return this.E;
    }

    public int getItemTextAppearanceActive() {
        return this.f16032z;
    }

    public int getItemTextAppearanceInactive() {
        return this.f16031y;
    }

    public ColorStateList getItemTextColor() {
        return this.f16029w;
    }

    public int getLabelMaxLines() {
        return this.f16012d0;
    }

    public int getLabelVisibilityMode() {
        return this.f16022p;
    }

    protected f getMenu() {
        return this.f16008a0;
    }

    public boolean getScaleLabelTextWithFont() {
        return this.f16010c0;
    }

    public int getSelectedItemId() {
        return this.f16025s;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int getSelectedItemPosition() {
        return this.f16026t;
    }

    public int getWindowAnimations() {
        return 0;
    }

    protected abstract d h(Context context);

    public d i(int i10) {
        u(i10);
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    d dVar = (d) gVar;
                    if (dVar.getId() == i10) {
                        return dVar;
                    }
                }
            }
            return null;
        }
        return null;
    }

    public dh.a j(int i10) {
        return (dh.a) this.G.get(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public dh.a k(int i10) {
        u(i10);
        dh.a aVar = (dh.a) this.G.get(i10);
        if (aVar == null) {
            aVar = dh.a.g(getContext());
            this.G.put(i10, aVar);
        }
        d i11 = i(i10);
        if (i11 != null) {
            i11.setBadge(aVar);
        }
        return aVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean m(int i10, int i11) {
        return i10 == -1 ? i11 > 3 : i10 == 0;
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo).y0(AccessibilityNodeInfoCompat.f.b(1, getCurrentVisibleContentItemCount(), false, 1));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(SparseArray sparseArray) {
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            int keyAt = sparseArray.keyAt(i10);
            if (this.G.indexOfKey(keyAt) < 0) {
                this.G.append(keyAt, (dh.a) sparseArray.get(keyAt));
            }
        }
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    d dVar = (d) gVar;
                    dh.a aVar = (dh.a) this.G.get(dVar.getId());
                    if (aVar != null) {
                        dVar.setBadge(aVar);
                    }
                }
            }
        }
    }

    public void r(int i10, int i11, int i12, int i13) {
        Rect rect = this.f16020j0;
        rect.left = i10;
        rect.top = i11;
        rect.right = i12;
        rect.bottom = i13;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorExpandedPadding(this.f16020j0);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        int g10 = this.f16008a0.g();
        for (int i11 = 0; i11 < g10; i11++) {
            MenuItem b10 = this.f16008a0.b(i11);
            if (i10 == b10.getItemId()) {
                this.f16025s = i10;
                this.f16026t = i11;
                setCheckedItem(b10);
                return;
            }
        }
    }

    public void setActiveIndicatorLabelPadding(int i10) {
        this.J = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorLabelPadding(i10);
                }
            }
        }
    }

    public void setCheckedItem(@NonNull MenuItem menuItem) {
        if (this.f16016g0 != menuItem && menuItem.isCheckable()) {
            MenuItem menuItem2 = this.f16016g0;
            if (menuItem2 != null && menuItem2.isChecked()) {
                this.f16016g0.setChecked(false);
            }
            menuItem.setChecked(true);
            this.f16016g0 = menuItem;
        }
    }

    public void setCollapsedMaxItemCount(int i10) {
        this.f16017h0 = i10;
    }

    public void setExpanded(boolean z10) {
        this.f16015f0 = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                gVar.setExpanded(z10);
            }
        }
    }

    public void setHorizontalItemTextAppearanceActive(int i10) {
        this.B = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setHorizontalTextAppearanceActive(i10);
                }
            }
        }
    }

    public void setHorizontalItemTextAppearanceInactive(int i10) {
        this.A = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setHorizontalTextAppearanceInactive(i10);
                }
            }
        }
    }

    public void setIconLabelHorizontalSpacing(int i10) {
        this.K = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setIconLabelHorizontalSpacing(i10);
                }
            }
        }
    }

    public void setIconTintList(ColorStateList colorStateList) {
        this.f16027u = colorStateList;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setIconTintList(colorStateList);
                }
            }
        }
    }

    public void setItemActiveIndicatorColor(ColorStateList colorStateList) {
        this.V = colorStateList;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorDrawable(f());
                }
            }
        }
    }

    public void setItemActiveIndicatorEnabled(boolean z10) {
        this.L = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorEnabled(z10);
                }
            }
        }
    }

    public void setItemActiveIndicatorExpandedHeight(int i10) {
        this.P = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorExpandedHeight(i10);
                }
            }
        }
    }

    public void setItemActiveIndicatorExpandedMarginHorizontal(int i10) {
        this.R = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorExpandedMarginHorizontal(i10);
                }
            }
        }
    }

    public void setItemActiveIndicatorExpandedWidth(int i10) {
        this.O = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorExpandedWidth(i10);
                }
            }
        }
    }

    public void setItemActiveIndicatorHeight(int i10) {
        this.N = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorHeight(i10);
                }
            }
        }
    }

    public void setItemActiveIndicatorMarginHorizontal(int i10) {
        this.Q = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorMarginHorizontal(i10);
                }
            }
        }
    }

    protected void setItemActiveIndicatorResizeable(boolean z10) {
        this.U = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorResizeable(z10);
                }
            }
        }
    }

    public void setItemActiveIndicatorShapeAppearance(th.l lVar) {
        this.T = lVar;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorDrawable(f());
                }
            }
        }
    }

    public void setItemActiveIndicatorWidth(int i10) {
        this.M = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setActiveIndicatorWidth(i10);
                }
            }
        }
    }

    public void setItemBackground(Drawable drawable) {
        this.D = drawable;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemBackground(drawable);
                }
            }
        }
    }

    public void setItemBackgroundRes(int i10) {
        this.F = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemBackground(i10);
                }
            }
        }
    }

    public void setItemGravity(int i10) {
        this.S = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemGravity(i10);
                }
            }
        }
    }

    public void setItemIconGravity(int i10) {
        this.f16023q = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemIconGravity(i10);
                }
            }
        }
    }

    public void setItemIconSize(int i10) {
        this.f16028v = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setIconSize(i10);
                }
            }
        }
    }

    public void setItemPaddingBottom(int i10) {
        this.I = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemPaddingBottom(this.I);
                }
            }
        }
    }

    public void setItemPaddingTop(int i10) {
        this.H = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemPaddingTop(i10);
                }
            }
        }
    }

    public void setItemRippleColor(ColorStateList colorStateList) {
        this.E = colorStateList;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setItemRippleColor(colorStateList);
                }
            }
        }
    }

    public void setItemTextAppearanceActive(int i10) {
        this.f16032z = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setTextAppearanceActive(i10);
                }
            }
        }
    }

    public void setItemTextAppearanceActiveBoldEnabled(boolean z10) {
        this.C = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setTextAppearanceActiveBoldEnabled(z10);
                }
            }
        }
    }

    public void setItemTextAppearanceInactive(int i10) {
        this.f16031y = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setTextAppearanceInactive(i10);
                }
            }
        }
    }

    public void setItemTextColor(ColorStateList colorStateList) {
        this.f16029w = colorStateList;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setTextColor(colorStateList);
                }
            }
        }
    }

    public void setLabelFontScalingEnabled(boolean z10) {
        this.f16010c0 = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setLabelFontScalingEnabled(z10);
                }
            }
        }
    }

    public void setLabelMaxLines(int i10) {
        this.f16012d0 = i10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setLabelMaxLines(i10);
                }
            }
        }
    }

    public void setLabelVisibilityMode(int i10) {
        this.f16022p = i10;
    }

    public void setMeasurePaddingFromLabelBaseline(boolean z10) {
        this.f16009b0 = z10;
        g[] gVarArr = this.f16024r;
        if (gVarArr != null) {
            for (g gVar : gVarArr) {
                if (gVar instanceof d) {
                    ((d) gVar).setMeasureBottomPaddingFromLabelBaseline(z10);
                }
            }
        }
    }

    public void setPresenter(@NonNull i iVar) {
        this.W = iVar;
    }

    public void setSubmenuDividersEnabled(boolean z10) {
        if (this.f16019i0 != z10) {
            this.f16019i0 = z10;
            g[] gVarArr = this.f16024r;
            if (gVarArr != null) {
                for (g gVar : gVarArr) {
                    if (gVar instanceof b) {
                        ((b) gVar).setDividersEnabled(z10);
                    }
                }
            }
        }
    }

    public void t() {
        a0 a0Var;
        if (this.f16008a0 != null && this.f16024r != null) {
            this.W.m(true);
            this.f16008a0.f();
            this.W.m(false);
            if (!l()) {
                d();
                return;
            }
            int i10 = this.f16025s;
            int g10 = this.f16008a0.g();
            for (int i11 = 0; i11 < g10; i11++) {
                MenuItem b10 = this.f16008a0.b(i11);
                if (b10.isChecked()) {
                    setCheckedItem(b10);
                    this.f16025s = b10.getItemId();
                    this.f16026t = i11;
                }
            }
            if (i10 != this.f16025s && (a0Var = this.f16011d) != null) {
                x.a(this, a0Var);
            }
            boolean m10 = m(this.f16022p, getCurrentVisibleContentItemCount());
            for (int i12 = 0; i12 < g10; i12++) {
                this.W.m(true);
                this.f16024r[i12].setExpanded(this.f16015f0);
                g gVar = this.f16024r[i12];
                if (gVar instanceof d) {
                    d dVar = (d) gVar;
                    dVar.setLabelVisibilityMode(this.f16022p);
                    dVar.setItemIconGravity(this.f16023q);
                    dVar.setItemGravity(this.S);
                    dVar.setShifting(m10);
                }
                if (this.f16008a0.b(i12) instanceof androidx.appcompat.view.menu.g) {
                    this.f16024r[i12].c((androidx.appcompat.view.menu.g) this.f16008a0.b(i12), 0);
                }
                this.W.m(false);
            }
        }
    }
}
