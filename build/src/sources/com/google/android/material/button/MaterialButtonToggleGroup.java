package com.google.android.material.button;

import android.content.Context;
import android.graphics.Canvas;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.LinearLayout;
import android.widget.RadioButton;
import android.widget.ToggleButton;
import androidx.annotation.NonNull;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.core.view.m;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.internal.o;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeMap;
import oh.k;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialButtonToggleGroup extends LinearLayout {

    /* renamed from: v  reason: collision with root package name */
    private static final int f14276v = j.f54267u;

    /* renamed from: d  reason: collision with root package name */
    private final List f14277d;

    /* renamed from: e  reason: collision with root package name */
    private final e f14278e;

    /* renamed from: i  reason: collision with root package name */
    private final LinkedHashSet f14279i;

    /* renamed from: o  reason: collision with root package name */
    private final Comparator f14280o;

    /* renamed from: p  reason: collision with root package name */
    private Integer[] f14281p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14282q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14283r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14284s;

    /* renamed from: t  reason: collision with root package name */
    private final int f14285t;

    /* renamed from: u  reason: collision with root package name */
    private Set f14286u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(MaterialButton materialButton, MaterialButton materialButton2) {
            int compareTo = Boolean.valueOf(materialButton.isChecked()).compareTo(Boolean.valueOf(materialButton2.isChecked()));
            if (compareTo != 0) {
                return compareTo;
            }
            int compareTo2 = Boolean.valueOf(materialButton.isPressed()).compareTo(Boolean.valueOf(materialButton2.isPressed()));
            if (compareTo2 != 0) {
                return compareTo2;
            }
            return Integer.valueOf(MaterialButtonToggleGroup.this.indexOfChild(materialButton)).compareTo(Integer.valueOf(MaterialButtonToggleGroup.this.indexOfChild(materialButton2)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends androidx.core.view.a {
        b() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(0, 1, MaterialButtonToggleGroup.this.i(view), 1, false, ((MaterialButton) view).isChecked()));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: e  reason: collision with root package name */
        private static final oh.c f14289e = new oh.a(0.0f);

        /* renamed from: a  reason: collision with root package name */
        oh.c f14290a;

        /* renamed from: b  reason: collision with root package name */
        oh.c f14291b;

        /* renamed from: c  reason: collision with root package name */
        oh.c f14292c;

        /* renamed from: d  reason: collision with root package name */
        oh.c f14293d;

        c(oh.c cVar, oh.c cVar2, oh.c cVar3, oh.c cVar4) {
            this.f14290a = cVar;
            this.f14291b = cVar3;
            this.f14292c = cVar4;
            this.f14293d = cVar2;
        }

        public static c a(c cVar) {
            oh.c cVar2 = f14289e;
            return new c(cVar2, cVar.f14293d, cVar2, cVar.f14292c);
        }

        public static c b(c cVar, View view) {
            if (o.h(view)) {
                return c(cVar);
            }
            return d(cVar);
        }

        public static c c(c cVar) {
            oh.c cVar2 = cVar.f14290a;
            oh.c cVar3 = cVar.f14293d;
            oh.c cVar4 = f14289e;
            return new c(cVar2, cVar3, cVar4, cVar4);
        }

        public static c d(c cVar) {
            oh.c cVar2 = f14289e;
            return new c(cVar2, cVar2, cVar.f14291b, cVar.f14292c);
        }

        public static c e(c cVar, View view) {
            if (o.h(view)) {
                return d(cVar);
            }
            return c(cVar);
        }

        public static c f(c cVar) {
            oh.c cVar2 = cVar.f14290a;
            oh.c cVar3 = f14289e;
            return new c(cVar2, cVar3, cVar.f14291b, cVar3);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(MaterialButtonToggleGroup materialButtonToggleGroup, int i10, boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements MaterialButton.a {
        private e() {
        }

        @Override // com.google.android.material.button.MaterialButton.a
        public void a(MaterialButton materialButton, boolean z10) {
            MaterialButtonToggleGroup.this.invalidate();
        }

        /* synthetic */ e(MaterialButtonToggleGroup materialButtonToggleGroup, a aVar) {
            this();
        }
    }

    public MaterialButtonToggleGroup(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54113y);
    }

    private void c() {
        int firstVisibleChildIndex = getFirstVisibleChildIndex();
        if (firstVisibleChildIndex == -1) {
            return;
        }
        for (int i10 = firstVisibleChildIndex + 1; i10 < getChildCount(); i10++) {
            MaterialButton h10 = h(i10);
            int min = Math.min(h10.getStrokeWidth(), h(i10 - 1).getStrokeWidth());
            LinearLayout.LayoutParams d10 = d(h10);
            if (getOrientation() == 0) {
                m.c(d10, 0);
                m.d(d10, -min);
                d10.topMargin = 0;
            } else {
                d10.bottomMargin = 0;
                d10.topMargin = -min;
                m.d(d10, 0);
            }
            h10.setLayoutParams(d10);
        }
        n(firstVisibleChildIndex);
    }

    private LinearLayout.LayoutParams d(View view) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams instanceof LinearLayout.LayoutParams) {
            return (LinearLayout.LayoutParams) layoutParams;
        }
        return new LinearLayout.LayoutParams(layoutParams.width, layoutParams.height);
    }

    private void e(int i10, boolean z10) {
        if (i10 == -1) {
            Log.e("MButtonToggleGroup", "Button ID is not valid: " + i10);
            return;
        }
        HashSet hashSet = new HashSet(this.f14286u);
        if (z10 && !hashSet.contains(Integer.valueOf(i10))) {
            if (this.f14283r && !hashSet.isEmpty()) {
                hashSet.clear();
            }
            hashSet.add(Integer.valueOf(i10));
        } else if (!z10 && hashSet.contains(Integer.valueOf(i10))) {
            if (!this.f14284s || hashSet.size() > 1) {
                hashSet.remove(Integer.valueOf(i10));
            }
        } else {
            return;
        }
        q(hashSet);
    }

    private void g(int i10, boolean z10) {
        Iterator it = this.f14279i.iterator();
        while (it.hasNext()) {
            ((d) it.next()).a(this, i10, z10);
        }
    }

    private int getFirstVisibleChildIndex() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            if (k(i10)) {
                return i10;
            }
        }
        return -1;
    }

    private int getLastVisibleChildIndex() {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            if (k(childCount)) {
                return childCount;
            }
        }
        return -1;
    }

    private int getVisibleButtonCount() {
        int i10 = 0;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            if ((getChildAt(i11) instanceof MaterialButton) && k(i11)) {
                i10++;
            }
        }
        return i10;
    }

    private MaterialButton h(int i10) {
        return (MaterialButton) getChildAt(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int i(View view) {
        if (!(view instanceof MaterialButton)) {
            return -1;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            if (getChildAt(i11) == view) {
                return i10;
            }
            if ((getChildAt(i11) instanceof MaterialButton) && k(i11)) {
                i10++;
            }
        }
        return -1;
    }

    private c j(int i10, int i11, int i12) {
        boolean z10;
        c cVar = (c) this.f14277d.get(i10);
        if (i11 == i12) {
            return cVar;
        }
        if (getOrientation() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 == i11) {
            if (z10) {
                return c.e(cVar, this);
            }
            return c.f(cVar);
        } else if (i10 == i12) {
            if (z10) {
                return c.b(cVar, this);
            }
            return c.a(cVar);
        } else {
            return null;
        }
    }

    private boolean k(int i10) {
        if (getChildAt(i10).getVisibility() != 8) {
            return true;
        }
        return false;
    }

    private void n(int i10) {
        if (getChildCount() != 0 && i10 != -1) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) h(i10).getLayoutParams();
            if (getOrientation() == 1) {
                layoutParams.topMargin = 0;
                layoutParams.bottomMargin = 0;
                return;
            }
            m.c(layoutParams, 0);
            m.d(layoutParams, 0);
            layoutParams.leftMargin = 0;
            layoutParams.rightMargin = 0;
        }
    }

    private void o(int i10, boolean z10) {
        View findViewById = findViewById(i10);
        if (findViewById instanceof MaterialButton) {
            this.f14282q = true;
            ((MaterialButton) findViewById).setChecked(z10);
            this.f14282q = false;
        }
    }

    private static void p(k.b bVar, c cVar) {
        if (cVar == null) {
            bVar.o(0.0f);
        } else {
            bVar.C(cVar.f14290a).t(cVar.f14293d).H(cVar.f14291b).x(cVar.f14292c);
        }
    }

    private void q(Set set) {
        Set set2 = this.f14286u;
        this.f14286u = new HashSet(set);
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            int id2 = h(i10).getId();
            o(id2, set.contains(Integer.valueOf(id2)));
            if (set2.contains(Integer.valueOf(id2)) != set.contains(Integer.valueOf(id2))) {
                g(id2, set.contains(Integer.valueOf(id2)));
            }
        }
        invalidate();
    }

    private void r() {
        TreeMap treeMap = new TreeMap(this.f14280o);
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            treeMap.put(h(i10), Integer.valueOf(i10));
        }
        this.f14281p = (Integer[]) treeMap.values().toArray(new Integer[0]);
    }

    private void setGeneratedIdIfNeeded(@NonNull MaterialButton materialButton) {
        if (materialButton.getId() == -1) {
            materialButton.setId(h0.k());
        }
    }

    private void setupButtonChild(@NonNull MaterialButton materialButton) {
        materialButton.setMaxLines(1);
        materialButton.setEllipsize(TextUtils.TruncateAt.END);
        materialButton.setCheckable(true);
        materialButton.setOnPressedChangeListenerInternal(this.f14278e);
        materialButton.setShouldDrawSurfaceColorStroke(true);
    }

    private void t() {
        Class cls;
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            if (this.f14283r) {
                cls = RadioButton.class;
            } else {
                cls = ToggleButton.class;
            }
            h(i10).setA11yClassName(cls.getName());
        }
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (!(view instanceof MaterialButton)) {
            Log.e("MButtonToggleGroup", "Child views must be of type MaterialButton.");
            return;
        }
        super.addView(view, i10, layoutParams);
        MaterialButton materialButton = (MaterialButton) view;
        setGeneratedIdIfNeeded(materialButton);
        setupButtonChild(materialButton);
        e(materialButton.getId(), materialButton.isChecked());
        k shapeAppearanceModel = materialButton.getShapeAppearanceModel();
        this.f14277d.add(new c(shapeAppearanceModel.r(), shapeAppearanceModel.j(), shapeAppearanceModel.t(), shapeAppearanceModel.l()));
        materialButton.setEnabled(isEnabled());
        h0.n0(materialButton, new b());
    }

    public void b(d dVar) {
        this.f14279i.add(dVar);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchDraw(Canvas canvas) {
        r();
        super.dispatchDraw(canvas);
    }

    public void f() {
        q(new HashSet());
    }

    public int getCheckedButtonId() {
        if (this.f14283r && !this.f14286u.isEmpty()) {
            return ((Integer) this.f14286u.iterator().next()).intValue();
        }
        return -1;
    }

    @NonNull
    public List<Integer> getCheckedButtonIds() {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            int id2 = h(i10).getId();
            if (this.f14286u.contains(Integer.valueOf(id2))) {
                arrayList.add(Integer.valueOf(id2));
            }
        }
        return arrayList;
    }

    @Override // android.view.ViewGroup
    protected int getChildDrawingOrder(int i10, int i11) {
        Integer[] numArr = this.f14281p;
        if (numArr != null && i11 < numArr.length) {
            return numArr[i11].intValue();
        }
        Log.w("MButtonToggleGroup", "Child order wasn't updated");
        return i11;
    }

    public boolean l() {
        return this.f14283r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(MaterialButton materialButton, boolean z10) {
        if (this.f14282q) {
            return;
        }
        e(materialButton.getId(), z10);
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        int i10 = this.f14285t;
        if (i10 != -1) {
            q(Collections.singleton(Integer.valueOf(i10)));
        }
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        int i10;
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        AccessibilityNodeInfoCompat h12 = AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo);
        int visibleButtonCount = getVisibleButtonCount();
        if (l()) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        h12.y0(AccessibilityNodeInfoCompat.f.b(1, visibleButtonCount, false, i10));
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        s();
        c();
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
            this.f14277d.remove(indexOfChild);
        }
        s();
        c();
    }

    void s() {
        int childCount = getChildCount();
        int firstVisibleChildIndex = getFirstVisibleChildIndex();
        int lastVisibleChildIndex = getLastVisibleChildIndex();
        for (int i10 = 0; i10 < childCount; i10++) {
            MaterialButton h10 = h(i10);
            if (h10.getVisibility() != 8) {
                k.b v10 = h10.getShapeAppearanceModel().v();
                p(v10, j(i10, firstVisibleChildIndex, lastVisibleChildIndex));
                h10.setShapeAppearanceModel(v10.m());
            }
        }
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            h(i10).setEnabled(z10);
        }
    }

    public void setSelectionRequired(boolean z10) {
        this.f14284s = z10;
    }

    public void setSingleSelection(boolean z10) {
        if (this.f14283r != z10) {
            this.f14283r = z10;
            f();
        }
        t();
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialButtonToggleGroup(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.button.MaterialButtonToggleGroup.f14276v
            android.content.Context r7 = rh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            java.util.ArrayList r7 = new java.util.ArrayList
            r7.<init>()
            r6.f14277d = r7
            com.google.android.material.button.MaterialButtonToggleGroup$e r7 = new com.google.android.material.button.MaterialButtonToggleGroup$e
            r0 = 0
            r7.<init>(r6, r0)
            r6.f14278e = r7
            java.util.LinkedHashSet r7 = new java.util.LinkedHashSet
            r7.<init>()
            r6.f14279i = r7
            com.google.android.material.button.MaterialButtonToggleGroup$a r7 = new com.google.android.material.button.MaterialButtonToggleGroup$a
            r7.<init>()
            r6.f14280o = r7
            r7 = 0
            r6.f14282q = r7
            java.util.HashSet r0 = new java.util.HashSet
            r0.<init>()
            r6.f14286u = r0
            android.content.Context r0 = r6.getContext()
            int[] r2 = yg.k.f54367j3
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = yg.k.f54406n3
            boolean r9 = r8.getBoolean(r9, r7)
            r6.setSingleSelection(r9)
            int r9 = yg.k.f54387l3
            r0 = -1
            int r9 = r8.getResourceId(r9, r0)
            r6.f14285t = r9
            int r9 = yg.k.f54397m3
            boolean r7 = r8.getBoolean(r9, r7)
            r6.f14284s = r7
            r7 = 1
            r6.setChildrenDrawingOrderEnabled(r7)
            int r9 = yg.k.f54377k3
            boolean r9 = r8.getBoolean(r9, r7)
            r6.setEnabled(r9)
            r8.recycle()
            androidx.core.view.h0.x0(r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.MaterialButtonToggleGroup.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setSingleSelection(int i10) {
        setSingleSelection(getResources().getBoolean(i10));
    }
}
