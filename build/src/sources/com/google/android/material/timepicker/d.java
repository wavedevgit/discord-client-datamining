package com.google.android.material.timepicker;

import ah.h;
import ah.k;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import androidx.core.view.h0;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import qh.g;
import qh.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends ConstraintLayout {

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f15606d;

    /* renamed from: e  reason: collision with root package name */
    private int f15607e;

    /* renamed from: i  reason: collision with root package name */
    private g f15608i;

    public d(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(h.f759i, this);
        h0.r0(this, i());
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f889g5, i10, 0);
        this.f15607e = obtainStyledAttributes.getDimensionPixelSize(k.f899h5, 0);
        this.f15606d = new Runnable() { // from class: com.google.android.material.timepicker.c
            @Override // java.lang.Runnable
            public final void run() {
                d.this.n();
            }
        };
        obtainStyledAttributes.recycle();
    }

    private void h(List list, ConstraintSet constraintSet, int i10) {
        Iterator it = list.iterator();
        float f10 = 0.0f;
        while (it.hasNext()) {
            constraintSet.i(((View) it.next()).getId(), ah.f.f722c, i10, f10);
            f10 += 360.0f / list.size();
        }
    }

    private Drawable i() {
        g gVar = new g();
        this.f15608i = gVar;
        gVar.V(new i(0.5f));
        this.f15608i.X(ColorStateList.valueOf(-1));
        return this.f15608i;
    }

    private static boolean m(View view) {
        return "skip".equals(view.getTag());
    }

    private void o() {
        Handler handler = getHandler();
        if (handler != null) {
            handler.removeCallbacks(this.f15606d);
            handler.post(this.f15606d);
        }
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        super.addView(view, i10, layoutParams);
        if (view.getId() == -1) {
            view.setId(h0.k());
        }
        o();
    }

    int j(int i10) {
        if (i10 == 2) {
            return Math.round(this.f15607e * 0.66f);
        }
        return this.f15607e;
    }

    public int k() {
        return this.f15607e;
    }

    public void l(int i10) {
        this.f15607e = i10;
        n();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n() {
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this);
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt.getId() != ah.f.f722c && !m(childAt)) {
                int i11 = (Integer) childAt.getTag(ah.f.f732m);
                if (i11 == null) {
                    i11 = 1;
                }
                if (!hashMap.containsKey(i11)) {
                    hashMap.put(i11, new ArrayList());
                }
                ((List) hashMap.get(i11)).add(childAt);
            }
        }
        for (Map.Entry entry : hashMap.entrySet()) {
            h((List) entry.getValue(), constraintSet, j(((Integer) entry.getKey()).intValue()));
        }
        constraintSet.c(this);
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        n();
    }

    @Override // androidx.constraintlayout.widget.ConstraintLayout, android.view.ViewGroup
    public void onViewRemoved(View view) {
        super.onViewRemoved(view);
        o();
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        this.f15608i.X(ColorStateList.valueOf(i10));
    }
}
