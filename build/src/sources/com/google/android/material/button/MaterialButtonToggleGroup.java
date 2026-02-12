package com.google.android.material.button;

import android.content.Context;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.RadioButton;
import android.widget.ToggleButton;
import androidx.annotation.NonNull;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.i0;
import bh.k;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialButtonToggleGroup extends d {
    private static final int C = k.A;
    private final int A;
    private Set B;

    /* renamed from: w  reason: collision with root package name */
    private final LinkedHashSet f15395w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15396x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f15397y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15398z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends androidx.core.view.a {
        a() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(0, 1, MaterialButtonToggleGroup.this.u(view), 1, false, ((MaterialButton) view).isChecked()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(MaterialButtonToggleGroup materialButtonToggleGroup, int i10, boolean z10);
    }

    public MaterialButtonToggleGroup(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.A);
    }

    @NonNull
    private String getChildrenA11yClassName() {
        Class cls;
        if (this.f15397y) {
            cls = RadioButton.class;
        } else {
            cls = ToggleButton.class;
        }
        return cls.getName();
    }

    private int getVisibleButtonCount() {
        int i10 = 0;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            if ((getChildAt(i11) instanceof MaterialButton) && j(i11)) {
                i10++;
            }
        }
        return i10;
    }

    private boolean j(int i10) {
        if (getChildAt(i10).getVisibility() != 8) {
            return true;
        }
        return false;
    }

    private void r(int i10, boolean z10) {
        if (i10 == -1) {
            Log.e("MButtonToggleGroup", "Button ID is not valid: " + i10);
            return;
        }
        HashSet hashSet = new HashSet(this.B);
        if (z10 && !hashSet.contains(Integer.valueOf(i10))) {
            if (this.f15397y && !hashSet.isEmpty()) {
                hashSet.clear();
            }
            hashSet.add(Integer.valueOf(i10));
        } else if (!z10 && hashSet.contains(Integer.valueOf(i10))) {
            if (!this.f15398z || hashSet.size() > 1) {
                hashSet.remove(Integer.valueOf(i10));
            }
        } else {
            return;
        }
        y(hashSet);
    }

    private void setupButtonChild(@NonNull MaterialButton materialButton) {
        materialButton.setMaxLines(1);
        materialButton.setEllipsize(TextUtils.TruncateAt.END);
        materialButton.setCheckable(true);
        materialButton.setA11yClassName(getChildrenA11yClassName());
    }

    private void t(int i10, boolean z10) {
        Iterator it = this.f15395w.iterator();
        while (it.hasNext()) {
            ((b) it.next()).a(this, i10, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int u(View view) {
        if (!(view instanceof MaterialButton)) {
            return -1;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            if (getChildAt(i11) == view) {
                return i10;
            }
            if ((getChildAt(i11) instanceof MaterialButton) && j(i11)) {
                i10++;
            }
        }
        return -1;
    }

    private void x(int i10, boolean z10) {
        View findViewById = findViewById(i10);
        if (findViewById instanceof MaterialButton) {
            this.f15396x = true;
            ((MaterialButton) findViewById).setChecked(z10);
            this.f15396x = false;
        }
    }

    private void y(Set set) {
        Set set2 = this.B;
        this.B = new HashSet(set);
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            int id2 = f(i10).getId();
            x(id2, set.contains(Integer.valueOf(id2)));
            if (set2.contains(Integer.valueOf(id2)) != set.contains(Integer.valueOf(id2))) {
                t(id2, set.contains(Integer.valueOf(id2)));
            }
        }
        invalidate();
    }

    private void z() {
        String childrenA11yClassName = getChildrenA11yClassName();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            f(i10).setA11yClassName(childrenA11yClassName);
        }
    }

    @Override // com.google.android.material.button.d, android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (!(view instanceof MaterialButton)) {
            Log.e("MButtonToggleGroup", "Child views must be of type MaterialButton.");
            return;
        }
        super.addView(view, i10, layoutParams);
        MaterialButton materialButton = (MaterialButton) view;
        setupButtonChild(materialButton);
        r(materialButton.getId(), materialButton.isChecked());
        i0.k0(materialButton, new a());
    }

    public int getCheckedButtonId() {
        if (this.f15397y && !this.B.isEmpty()) {
            return ((Integer) this.B.iterator().next()).intValue();
        }
        return -1;
    }

    @NonNull
    public List<Integer> getCheckedButtonIds() {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            int id2 = f(i10).getId();
            if (this.B.contains(Integer.valueOf(id2))) {
                arrayList.add(Integer.valueOf(id2));
            }
        }
        return arrayList;
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        int i10 = this.A;
        if (i10 != -1) {
            y(Collections.singleton(Integer.valueOf(i10)));
        }
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        int i10;
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        AccessibilityNodeInfoCompat h12 = AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo);
        int visibleButtonCount = getVisibleButtonCount();
        if (v()) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        h12.y0(AccessibilityNodeInfoCompat.f.b(1, visibleButtonCount, false, i10));
    }

    public void q(b bVar) {
        this.f15395w.add(bVar);
    }

    public void s() {
        y(new HashSet());
    }

    public void setSelectionRequired(boolean z10) {
        this.f15398z = z10;
    }

    public void setSingleSelection(boolean z10) {
        if (this.f15397y != z10) {
            this.f15397y = z10;
            s();
        }
        z();
    }

    public boolean v() {
        return this.f15397y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(MaterialButton materialButton, boolean z10) {
        if (this.f15396x) {
            return;
        }
        r(materialButton.getId(), z10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialButtonToggleGroup(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.button.MaterialButtonToggleGroup.C
            android.content.Context r7 = wh.a.d(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            java.util.LinkedHashSet r7 = new java.util.LinkedHashSet
            r7.<init>()
            r6.f15395w = r7
            r7 = 0
            r6.f15396x = r7
            java.util.HashSet r0 = new java.util.HashSet
            r0.<init>()
            r6.B = r0
            android.content.Context r0 = r6.getContext()
            int[] r2 = bh.l.f7086n3
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            int r9 = bh.l.f7124r3
            boolean r9 = r8.getBoolean(r9, r7)
            r6.setSingleSelection(r9)
            int r9 = bh.l.f7106p3
            r0 = -1
            int r9 = r8.getResourceId(r9, r0)
            r6.A = r9
            int r9 = bh.l.f7115q3
            boolean r7 = r8.getBoolean(r9, r7)
            r6.f15398z = r7
            th.p r7 = r6.f15409q
            if (r7 != 0) goto L52
            th.a r7 = new th.a
            r9 = 0
            r7.<init>(r9)
            th.p r7 = th.p.c(r7)
            r6.f15409q = r7
        L52:
            int r7 = bh.l.f7096o3
            r9 = 1
            boolean r7 = r8.getBoolean(r7, r9)
            r6.setEnabled(r7)
            r8.recycle()
            r6.setImportantForAccessibility(r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.button.MaterialButtonToggleGroup.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setSingleSelection(int i10) {
        setSingleSelection(getResources().getBoolean(i10));
    }
}
