package com.google.android.material.button;

import android.graphics.Canvas;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import bh.k;
import com.google.android.material.button.MaterialButton;
import java.util.Comparator;
import java.util.List;
import java.util.TreeMap;
import th.l;
import th.p;
import th.q;
import th.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends LinearLayout {

    /* renamed from: v  reason: collision with root package name */
    private static final int f15402v = k.f6941p;

    /* renamed from: d  reason: collision with root package name */
    private final List f15403d;

    /* renamed from: e  reason: collision with root package name */
    private final List f15404e;

    /* renamed from: i  reason: collision with root package name */
    private final b f15405i;

    /* renamed from: o  reason: collision with root package name */
    private final Comparator f15406o;

    /* renamed from: p  reason: collision with root package name */
    private Integer[] f15407p;

    /* renamed from: q  reason: collision with root package name */
    p f15408q;

    /* renamed from: r  reason: collision with root package name */
    private q f15409r;

    /* renamed from: s  reason: collision with root package name */
    private int f15410s;

    /* renamed from: t  reason: collision with root package name */
    private r f15411t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15412u;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements MaterialButton.b {
        private b() {
        }

        @Override // com.google.android.material.button.MaterialButton.b
        public void a(MaterialButton materialButton, boolean z10) {
            d.this.invalidate();
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(android.content.Context r8, android.util.AttributeSet r9, int r10) {
        /*
            r7 = this;
            int r4 = com.google.android.material.button.d.f15402v
            android.content.Context r8 = wh.a.d(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            java.util.ArrayList r8 = new java.util.ArrayList
            r8.<init>()
            r7.f15403d = r8
            java.util.ArrayList r8 = new java.util.ArrayList
            r8.<init>()
            r7.f15404e = r8
            com.google.android.material.button.d$b r8 = new com.google.android.material.button.d$b
            r0 = 0
            r8.<init>()
            r7.f15405i = r8
            com.google.android.material.button.c r8 = new com.google.android.material.button.c
            r8.<init>()
            r7.f15406o = r8
            r8 = 1
            r7.f15412u = r8
            android.content.Context r0 = r7.getContext()
            int[] r2 = bh.l.f7016g3
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            android.content.res.TypedArray r9 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            int r10 = bh.l.f7046j3
            boolean r10 = r9.hasValue(r10)
            if (r10 == 0) goto L48
            int r10 = bh.l.f7046j3
            th.r r10 = th.r.b(r0, r9, r10)
            r7.f15411t = r10
        L48:
            int r10 = bh.l.f7066l3
            boolean r10 = r9.hasValue(r10)
            if (r10 == 0) goto L79
            int r10 = bh.l.f7066l3
            th.q r10 = th.q.b(r0, r9, r10)
            r7.f15409r = r10
            if (r10 != 0) goto L79
            th.q$b r10 = new th.q$b
            int r1 = bh.l.f7066l3
            int r1 = r9.getResourceId(r1, r6)
            int r2 = bh.l.f7076m3
            int r2 = r9.getResourceId(r2, r6)
            th.l$b r1 = th.l.b(r0, r1, r2)
            th.l r1 = r1.m()
            r10.<init>(r1)
            th.q r10 = r10.j()
            r7.f15409r = r10
        L79:
            int r10 = bh.l.f7056k3
            boolean r10 = r9.hasValue(r10)
            if (r10 == 0) goto L8f
            int r10 = bh.l.f7056k3
            th.a r1 = new th.a
            r2 = 0
            r1.<init>(r2)
            th.p r10 = th.p.b(r0, r9, r10, r1)
            r7.f15408q = r10
        L8f:
            int r10 = bh.l.f7036i3
            int r10 = r9.getDimensionPixelSize(r10, r6)
            r7.f15410s = r10
            r7.setChildrenDrawingOrderEnabled(r8)
            int r10 = bh.l.f7026h3
            boolean r8 = r9.getBoolean(r10, r8)
            r7.setEnabled(r8)
            r9.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.d.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public static /* synthetic */ int a(d dVar, MaterialButton materialButton, MaterialButton materialButton2) {
        dVar.getClass();
        int compareTo = Boolean.valueOf(materialButton.isChecked()).compareTo(Boolean.valueOf(materialButton2.isChecked()));
        if (compareTo != 0) {
            return compareTo;
        }
        int compareTo2 = Boolean.valueOf(materialButton.isPressed()).compareTo(Boolean.valueOf(materialButton2.isPressed()));
        if (compareTo2 != 0) {
            return compareTo2;
        }
        return Integer.compare(dVar.indexOfChild(materialButton), dVar.indexOfChild(materialButton2));
    }

    private void b() {
        int i10;
        int firstVisibleChildIndex = getFirstVisibleChildIndex();
        if (firstVisibleChildIndex == -1) {
            return;
        }
        for (int i11 = firstVisibleChildIndex + 1; i11 < getChildCount(); i11++) {
            MaterialButton f10 = f(i11);
            MaterialButton f11 = f(i11 - 1);
            if (this.f15410s <= 0) {
                i10 = Math.min(f10.getStrokeWidth(), f11.getStrokeWidth());
                f10.setShouldDrawSurfaceColorStroke(true);
                f11.setShouldDrawSurfaceColorStroke(true);
            } else {
                f10.setShouldDrawSurfaceColorStroke(false);
                f11.setShouldDrawSurfaceColorStroke(false);
                i10 = 0;
            }
            LinearLayout.LayoutParams d10 = d(f10);
            if (getOrientation() == 0) {
                d10.setMarginEnd(0);
                d10.setMarginStart(this.f15410s - i10);
                d10.topMargin = 0;
            } else {
                d10.bottomMargin = 0;
                d10.topMargin = this.f15410s - i10;
                d10.setMarginStart(0);
            }
            f10.setLayoutParams(d10);
        }
        m(firstVisibleChildIndex);
    }

    private void c() {
        int i10;
        if (this.f15411t != null && getChildCount() != 0) {
            int firstVisibleChildIndex = getFirstVisibleChildIndex();
            int lastVisibleChildIndex = getLastVisibleChildIndex();
            int i11 = Integer.MAX_VALUE;
            for (int i12 = firstVisibleChildIndex; i12 <= lastVisibleChildIndex; i12++) {
                if (j(i12)) {
                    int e10 = e(i12);
                    if (i12 != firstVisibleChildIndex && i12 != lastVisibleChildIndex) {
                        e10 /= 2;
                    }
                    i11 = Math.min(i11, e10);
                }
            }
            for (int i13 = firstVisibleChildIndex; i13 <= lastVisibleChildIndex; i13++) {
                if (j(i13)) {
                    f(i13).setSizeChange(this.f15411t);
                    MaterialButton f10 = f(i13);
                    if (i13 != firstVisibleChildIndex && i13 != lastVisibleChildIndex) {
                        i10 = i11 * 2;
                    } else {
                        i10 = i11;
                    }
                    f10.setWidthChangeMax(i10);
                }
            }
        }
    }

    private int e(int i10) {
        int allowedWidthDecrease;
        int i11 = 0;
        if (!j(i10) || this.f15411t == null) {
            return 0;
        }
        int max = Math.max(0, this.f15411t.c(f(i10).getWidth()));
        MaterialButton i12 = i(i10);
        if (i12 == null) {
            allowedWidthDecrease = 0;
        } else {
            allowedWidthDecrease = i12.getAllowedWidthDecrease();
        }
        MaterialButton g10 = g(i10);
        if (g10 != null) {
            i11 = g10.getAllowedWidthDecrease();
        }
        return Math.min(max, allowedWidthDecrease + i11);
    }

    private MaterialButton g(int i10) {
        int childCount = getChildCount();
        do {
            i10++;
            if (i10 >= childCount) {
                return null;
            }
        } while (!j(i10));
        return f(i10);
    }

    private int getFirstVisibleChildIndex() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            if (j(i10)) {
                return i10;
            }
        }
        return -1;
    }

    private int getLastVisibleChildIndex() {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            if (j(childCount)) {
                return childCount;
            }
        }
        return -1;
    }

    private q.b h(boolean z10, boolean z11, int i10) {
        q qVar = this.f15409r;
        if (qVar == null || (!z10 && !z11)) {
            qVar = (q) this.f15404e.get(i10);
        }
        if (qVar == null) {
            return new q.b((l) this.f15403d.get(i10));
        }
        return qVar.i();
    }

    private MaterialButton i(int i10) {
        for (int i11 = i10 - 1; i11 >= 0; i11--) {
            if (j(i11)) {
                return f(i11);
            }
        }
        return null;
    }

    private boolean j(int i10) {
        if (getChildAt(i10).getVisibility() != 8) {
            return true;
        }
        return false;
    }

    private void l() {
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            f(i10).o();
        }
    }

    private void m(int i10) {
        if (getChildCount() != 0 && i10 != -1) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) f(i10).getLayoutParams();
            if (getOrientation() == 1) {
                layoutParams.topMargin = 0;
                layoutParams.bottomMargin = 0;
                return;
            }
            layoutParams.setMarginEnd(0);
            layoutParams.setMarginStart(0);
            layoutParams.leftMargin = 0;
            layoutParams.rightMargin = 0;
        }
    }

    private void n() {
        TreeMap treeMap = new TreeMap(this.f15406o);
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            treeMap.put(f(i10), Integer.valueOf(i10));
        }
        this.f15407p = (Integer[]) treeMap.values().toArray(new Integer[0]);
    }

    private void setGeneratedIdIfNeeded(@NonNull MaterialButton materialButton) {
        if (materialButton.getId() == -1) {
            materialButton.setId(View.generateViewId());
        }
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (!(view instanceof MaterialButton)) {
            Log.e("MButtonGroup", "Child views must be of type MaterialButton.");
            return;
        }
        l();
        this.f15412u = true;
        super.addView(view, i10, layoutParams);
        MaterialButton materialButton = (MaterialButton) view;
        setGeneratedIdIfNeeded(materialButton);
        materialButton.setOnPressedChangeListenerInternal(this.f15405i);
        this.f15403d.add(materialButton.getShapeAppearanceModel());
        this.f15404e.add(materialButton.getStateListShapeAppearanceModel());
        materialButton.setEnabled(isEnabled());
    }

    LinearLayout.LayoutParams d(View view) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams instanceof LinearLayout.LayoutParams) {
            return (LinearLayout.LayoutParams) layoutParams;
        }
        return new LinearLayout.LayoutParams(layoutParams.width, layoutParams.height);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchDraw(Canvas canvas) {
        n();
        super.dispatchDraw(canvas);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public MaterialButton f(int i10) {
        return (MaterialButton) getChildAt(i10);
    }

    public r getButtonSizeChange() {
        return this.f15411t;
    }

    @Override // android.view.ViewGroup
    protected int getChildDrawingOrder(int i10, int i11) {
        Integer[] numArr = this.f15407p;
        if (numArr != null && i11 < numArr.length) {
            return numArr[i11].intValue();
        }
        Log.w("MButtonGroup", "Child order wasn't updated");
        return i11;
    }

    @NonNull
    public th.d getInnerCornerSize() {
        return this.f15408q.e();
    }

    @NonNull
    public p getInnerCornerSizeStateList() {
        return this.f15408q;
    }

    public l getShapeAppearance() {
        q qVar = this.f15409r;
        if (qVar == null) {
            return null;
        }
        return qVar.c(true);
    }

    public int getSpacing() {
        return this.f15410s;
    }

    public q getStateListShapeAppearance() {
        return this.f15409r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(MaterialButton materialButton, int i10) {
        int indexOfChild = indexOfChild(materialButton);
        if (indexOfChild >= 0) {
            MaterialButton i11 = i(indexOfChild);
            MaterialButton g10 = g(indexOfChild);
            if (i11 != null || g10 != null) {
                if (i11 == null) {
                    g10.setDisplayedWidthDecrease(i10);
                }
                if (g10 == null) {
                    i11.setDisplayedWidthDecrease(i10);
                }
                if (i11 != null && g10 != null) {
                    i11.setDisplayedWidthDecrease(i10 / 2);
                    g10.setDisplayedWidthDecrease((i10 + 1) / 2);
                }
            }
        }
    }

    void o() {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        if ((this.f15408q != null || this.f15409r != null) && this.f15412u) {
            this.f15412u = false;
            int childCount = getChildCount();
            int firstVisibleChildIndex = getFirstVisibleChildIndex();
            int lastVisibleChildIndex = getLastVisibleChildIndex();
            for (int i11 = 0; i11 < childCount; i11++) {
                MaterialButton f10 = f(i11);
                if (f10.getVisibility() != 8) {
                    if (i11 == firstVisibleChildIndex) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (i11 == lastVisibleChildIndex) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    q.b h10 = h(z10, z11, i11);
                    if (getOrientation() == 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    boolean h11 = com.google.android.material.internal.p.h(this);
                    if (z12) {
                        if (z10) {
                            i10 = 5;
                        } else {
                            i10 = 0;
                        }
                        if (z11) {
                            i10 |= 10;
                        }
                        if (h11) {
                            i10 = q.h(i10);
                        }
                    } else {
                        if (z10) {
                            i10 = 3;
                        } else {
                            i10 = 0;
                        }
                        if (z11) {
                            i10 |= 12;
                        }
                    }
                    q j10 = h10.n(this.f15408q, ~i10).j();
                    if (j10.f()) {
                        f10.setStateListShapeAppearanceModel(j10);
                    } else {
                        f10.setShapeAppearanceModel(j10.c(true));
                    }
                }
            }
        }
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (z10) {
            l();
            c();
        }
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        o();
        b();
        super.onMeasure(i10, i11);
    }

    @Override // android.view.ViewGroup
    public void onViewRemoved(View view) {
        super.onViewRemoved(view);
        if (view instanceof MaterialButton) {
            ((MaterialButton) view).setOnPressedChangeListenerInternal(null);
        }
        int indexOfChild = indexOfChild(view);
        if (indexOfChild >= 0) {
            this.f15403d.remove(indexOfChild);
            this.f15404e.remove(indexOfChild);
        }
        this.f15412u = true;
        o();
        l();
        b();
    }

    public void setButtonSizeChange(@NonNull r rVar) {
        if (this.f15411t != rVar) {
            this.f15411t = rVar;
            c();
            requestLayout();
            invalidate();
        }
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            f(i10).setEnabled(z10);
        }
    }

    public void setInnerCornerSize(@NonNull th.d dVar) {
        this.f15408q = p.c(dVar);
        this.f15412u = true;
        o();
        invalidate();
    }

    public void setInnerCornerSizeStateList(@NonNull p pVar) {
        this.f15408q = pVar;
        this.f15412u = true;
        o();
        invalidate();
    }

    @Override // android.widget.LinearLayout
    public void setOrientation(int i10) {
        if (getOrientation() != i10) {
            this.f15412u = true;
        }
        super.setOrientation(i10);
    }

    public void setShapeAppearance(l lVar) {
        this.f15409r = new q.b(lVar).j();
        this.f15412u = true;
        o();
        invalidate();
    }

    public void setSpacing(int i10) {
        this.f15410s = i10;
        invalidate();
        requestLayout();
    }

    public void setStateListShapeAppearance(q qVar) {
        this.f15409r = qVar;
        this.f15412u = true;
        o();
        invalidate();
    }
}
