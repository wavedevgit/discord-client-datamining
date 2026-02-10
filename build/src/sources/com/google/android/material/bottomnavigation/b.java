package com.google.android.material.bottomnavigation;

import android.content.Context;
import android.content.res.Resources;
import android.view.View;
import android.widget.FrameLayout;
import bh.d;
import com.google.android.material.navigation.h;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends h {

    /* renamed from: m0  reason: collision with root package name */
    private final int f15290m0;

    /* renamed from: n0  reason: collision with root package name */
    private final int f15291n0;

    /* renamed from: o0  reason: collision with root package name */
    private final int f15292o0;

    /* renamed from: p0  reason: collision with root package name */
    private final int f15293p0;

    /* renamed from: q0  reason: collision with root package name */
    private boolean f15294q0;

    /* renamed from: r0  reason: collision with root package name */
    private final List f15295r0;

    public b(Context context) {
        super(context);
        this.f15295r0 = new ArrayList();
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-2, -2);
        layoutParams.gravity = 17;
        setLayoutParams(layoutParams);
        Resources resources = getResources();
        this.f15290m0 = resources.getDimensionPixelSize(d.f6784f);
        this.f15291n0 = resources.getDimensionPixelSize(d.f6786g);
        this.f15292o0 = resources.getDimensionPixelSize(d.f6780d);
        this.f15293p0 = resources.getDimensionPixelSize(d.f6782e);
    }

    @Override // com.google.android.material.navigation.h
    protected com.google.android.material.navigation.d h(Context context) {
        return new a(context);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int childCount = getChildCount();
        int i14 = i12 - i10;
        int i15 = i13 - i11;
        int i16 = 0;
        for (int i17 = 0; i17 < childCount; i17++) {
            View childAt = getChildAt(i17);
            if (childAt.getVisibility() != 8) {
                if (getLayoutDirection() == 1) {
                    int i18 = i14 - i16;
                    childAt.layout(i18 - childAt.getMeasuredWidth(), 0, i18, i15);
                } else {
                    childAt.layout(i16, 0, childAt.getMeasuredWidth() + i16, i15);
                }
                i16 += childAt.getMeasuredWidth();
            }
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int size = View.MeasureSpec.getSize(i10);
        int currentVisibleContentItemCount = getCurrentVisibleContentItemCount();
        int childCount = getChildCount();
        this.f15295r0.clear();
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(View.MeasureSpec.getSize(i11), Integer.MIN_VALUE);
        int i17 = 1;
        int i18 = 0;
        if (getItemIconGravity() == 0) {
            if (m(getLabelVisibilityMode(), currentVisibleContentItemCount) && v()) {
                View childAt = getChildAt(getSelectedItemPosition());
                int i19 = this.f15293p0;
                if (childAt.getVisibility() != 8) {
                    childAt.measure(View.MeasureSpec.makeMeasureSpec(this.f15292o0, Integer.MIN_VALUE), makeMeasureSpec);
                    i19 = Math.max(i19, childAt.getMeasuredWidth());
                }
                if (childAt.getVisibility() != 8) {
                    i15 = 1;
                } else {
                    i15 = 0;
                }
                int i20 = currentVisibleContentItemCount - i15;
                int min = Math.min(size - (this.f15291n0 * i20), Math.min(i19, this.f15292o0));
                int i21 = size - min;
                if (i20 != 0) {
                    i17 = i20;
                }
                int min2 = Math.min(i21 / i17, this.f15290m0);
                int i22 = i21 - (i20 * min2);
                for (int i23 = 0; i23 < childCount; i23++) {
                    if (getChildAt(i23).getVisibility() != 8) {
                        if (i23 == getSelectedItemPosition()) {
                            i16 = min;
                        } else {
                            i16 = min2;
                        }
                        if (i22 > 0) {
                            i16++;
                            i22--;
                        }
                    } else {
                        i16 = 0;
                    }
                    this.f15295r0.add(Integer.valueOf(i16));
                }
            } else {
                if (currentVisibleContentItemCount != 0) {
                    i17 = currentVisibleContentItemCount;
                }
                int min3 = Math.min(size / i17, this.f15292o0);
                int i24 = size - (currentVisibleContentItemCount * min3);
                for (int i25 = 0; i25 < childCount; i25++) {
                    if (getChildAt(i25).getVisibility() != 8) {
                        if (i24 > 0) {
                            i14 = min3 + 1;
                            i24--;
                        } else {
                            i14 = min3;
                        }
                    } else {
                        i14 = 0;
                    }
                    this.f15295r0.add(Integer.valueOf(i14));
                }
            }
            i12 = 0;
            i13 = 0;
            while (i18 < childCount) {
                View childAt2 = getChildAt(i18);
                if (childAt2.getVisibility() != 8) {
                    childAt2.measure(View.MeasureSpec.makeMeasureSpec(((Integer) this.f15295r0.get(i18)).intValue(), 1073741824), makeMeasureSpec);
                    childAt2.getLayoutParams().width = childAt2.getMeasuredWidth();
                    i12 += childAt2.getMeasuredWidth();
                    i13 = Math.max(i13, childAt2.getMeasuredHeight());
                }
                i18++;
            }
        } else {
            if (currentVisibleContentItemCount == 0) {
                currentVisibleContentItemCount = 1;
            }
            float f10 = size;
            float f11 = currentVisibleContentItemCount;
            int round = Math.round((Math.min((currentVisibleContentItemCount + 3) / 10.0f, 0.9f) * f10) / f11);
            int round2 = Math.round(f10 / f11);
            int i26 = 0;
            int i27 = 0;
            while (i18 < childCount) {
                View childAt3 = getChildAt(i18);
                if (childAt3.getVisibility() != 8) {
                    childAt3.measure(View.MeasureSpec.makeMeasureSpec(round2, Integer.MIN_VALUE), makeMeasureSpec);
                    if (childAt3.getMeasuredWidth() < round) {
                        childAt3.measure(View.MeasureSpec.makeMeasureSpec(round, 1073741824), makeMeasureSpec);
                    }
                    i26 += childAt3.getMeasuredWidth();
                    i27 = Math.max(i27, childAt3.getMeasuredHeight());
                }
                i18++;
            }
            i12 = i26;
            i13 = i27;
        }
        setMeasuredDimension(i12, Math.max(i13, getSuggestedMinimumHeight()));
    }

    public void setItemHorizontalTranslationEnabled(boolean z10) {
        this.f15294q0 = z10;
    }

    public boolean v() {
        return this.f15294q0;
    }
}
