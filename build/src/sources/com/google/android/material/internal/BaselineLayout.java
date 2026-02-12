package com.google.android.material.internal;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BaselineLayout extends ViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private int f15840d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15841e;

    public BaselineLayout(Context context) {
        super(context, null, 0);
        this.f15840d = -1;
    }

    @Override // android.view.View
    public int getBaseline() {
        return this.f15840d;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        int childCount = getChildCount();
        int paddingLeft = getPaddingLeft();
        int paddingRight = ((i12 - i10) - getPaddingRight()) - paddingLeft;
        int paddingTop = getPaddingTop();
        for (int i15 = 0; i15 < childCount; i15++) {
            View childAt = getChildAt(i15);
            if (childAt.getVisibility() != 8) {
                int measuredWidth = childAt.getMeasuredWidth();
                int measuredHeight = childAt.getMeasuredHeight();
                int i16 = ((paddingRight - measuredWidth) / 2) + paddingLeft;
                if (this.f15840d != -1 && childAt.getBaseline() != -1) {
                    i14 = (this.f15840d + paddingTop) - childAt.getBaseline();
                } else {
                    i14 = paddingTop;
                }
                childAt.layout(i16, i14, measuredWidth + i16, measuredHeight + i14);
            }
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int childCount = getChildCount();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        int i15 = 0;
        int i16 = -1;
        int i17 = -1;
        for (int i18 = 0; i18 < childCount; i18++) {
            View childAt = getChildAt(i18);
            if (childAt.getVisibility() != 8) {
                measureChild(childAt, i10, i11);
                i12 = Math.max(i12, childAt.getMeasuredHeight());
                int baseline = childAt.getBaseline();
                if (baseline != -1) {
                    i16 = Math.max(i16, baseline);
                    i17 = Math.max(i17, childAt.getMeasuredHeight() - baseline);
                }
                i14 = Math.max(i14, childAt.getMeasuredWidth());
                i13 = Math.max(i13, childAt.getMeasuredHeight());
                i15 = View.combineMeasuredStates(i15, childAt.getMeasuredState());
            }
        }
        if (i16 != -1) {
            if (this.f15841e) {
                i13 = Math.max(i13, Math.max(i17, getPaddingBottom()) + i16);
            }
            this.f15840d = i16;
        }
        if (!this.f15841e) {
            i13 = i12 + getPaddingBottom();
        }
        setMeasuredDimension(View.resolveSizeAndState(Math.max(i14, getSuggestedMinimumWidth()), i10, i15), View.resolveSizeAndState(Math.max(i13, getSuggestedMinimumHeight()), i11, i15 << 16));
    }

    public void setMeasurePaddingFromBaseline(boolean z10) {
        this.f15841e = z10;
    }

    public BaselineLayout(Context context, AttributeSet attributeSet) {
        super(context, attributeSet, 0);
        this.f15840d = -1;
    }
}
