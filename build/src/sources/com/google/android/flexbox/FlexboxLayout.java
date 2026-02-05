package com.google.android.flexbox;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.h0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.google.android.flexbox.FlexboxHelper;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexboxLayout extends ViewGroup implements a {
    public static final int SHOW_DIVIDER_BEGINNING = 1;
    public static final int SHOW_DIVIDER_END = 4;
    public static final int SHOW_DIVIDER_MIDDLE = 2;
    public static final int SHOW_DIVIDER_NONE = 0;
    private int mAlignContent;
    private int mAlignItems;
    private Drawable mDividerDrawableHorizontal;
    private Drawable mDividerDrawableVertical;
    private int mDividerHorizontalHeight;
    private int mDividerVerticalWidth;
    private int mFlexDirection;
    private List<FlexLine> mFlexLines;
    private FlexboxHelper.FlexLinesResult mFlexLinesResult;
    private int mFlexWrap;
    private FlexboxHelper mFlexboxHelper;
    private int mJustifyContent;
    private int mMaxLine;
    private SparseIntArray mOrderCache;
    private int[] mReorderedIndices;
    private int mShowDividerHorizontal;
    private int mShowDividerVertical;

    public FlexboxLayout(Context context) {
        this(context, null);
    }

    private boolean a(int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            if (this.mFlexLines.get(i11).c() > 0) {
                return false;
            }
        }
        return true;
    }

    private boolean b(int i10, int i11) {
        for (int i12 = 1; i12 <= i11; i12++) {
            View reorderedChildAt = getReorderedChildAt(i10 - i12);
            if (reorderedChildAt != null && reorderedChildAt.getVisibility() != 8) {
                return false;
            }
        }
        return true;
    }

    private void c(Canvas canvas, boolean z10, boolean z11) {
        int i10;
        int i11;
        int right;
        int left;
        int paddingLeft = getPaddingLeft();
        int max = Math.max(0, (getWidth() - getPaddingRight()) - paddingLeft);
        int size = this.mFlexLines.size();
        for (int i12 = 0; i12 < size; i12++) {
            FlexLine flexLine = this.mFlexLines.get(i12);
            for (int i13 = 0; i13 < flexLine.f13573h; i13++) {
                int i14 = flexLine.f13580o + i13;
                View reorderedChildAt = getReorderedChildAt(i14);
                if (reorderedChildAt != null && reorderedChildAt.getVisibility() != 8) {
                    LayoutParams layoutParams = (LayoutParams) reorderedChildAt.getLayoutParams();
                    if (g(i14, i13)) {
                        if (z10) {
                            left = reorderedChildAt.getRight() + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
                        } else {
                            left = (reorderedChildAt.getLeft() - ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin) - this.mDividerVerticalWidth;
                        }
                        f(canvas, left, flexLine.f13567b, flexLine.f13572g);
                    }
                    if (i13 == flexLine.f13573h - 1 && (this.mShowDividerVertical & 4) > 0) {
                        if (z10) {
                            right = (reorderedChildAt.getLeft() - ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin) - this.mDividerVerticalWidth;
                        } else {
                            right = reorderedChildAt.getRight() + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
                        }
                        f(canvas, right, flexLine.f13567b, flexLine.f13572g);
                    }
                }
            }
            if (h(i12)) {
                if (z11) {
                    i11 = flexLine.f13569d;
                } else {
                    i11 = flexLine.f13567b - this.mDividerHorizontalHeight;
                }
                e(canvas, paddingLeft, i11, max);
            }
            if (i(i12) && (this.mShowDividerHorizontal & 4) > 0) {
                if (z11) {
                    i10 = flexLine.f13567b - this.mDividerHorizontalHeight;
                } else {
                    i10 = flexLine.f13569d;
                }
                e(canvas, paddingLeft, i10, max);
            }
        }
    }

    private void d(Canvas canvas, boolean z10, boolean z11) {
        int i10;
        int i11;
        int bottom;
        int top;
        int paddingTop = getPaddingTop();
        int max = Math.max(0, (getHeight() - getPaddingBottom()) - paddingTop);
        int size = this.mFlexLines.size();
        for (int i12 = 0; i12 < size; i12++) {
            FlexLine flexLine = this.mFlexLines.get(i12);
            for (int i13 = 0; i13 < flexLine.f13573h; i13++) {
                int i14 = flexLine.f13580o + i13;
                View reorderedChildAt = getReorderedChildAt(i14);
                if (reorderedChildAt != null && reorderedChildAt.getVisibility() != 8) {
                    LayoutParams layoutParams = (LayoutParams) reorderedChildAt.getLayoutParams();
                    if (g(i14, i13)) {
                        if (z11) {
                            top = reorderedChildAt.getBottom() + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
                        } else {
                            top = (reorderedChildAt.getTop() - ((ViewGroup.MarginLayoutParams) layoutParams).topMargin) - this.mDividerHorizontalHeight;
                        }
                        e(canvas, flexLine.f13566a, top, flexLine.f13572g);
                    }
                    if (i13 == flexLine.f13573h - 1 && (this.mShowDividerHorizontal & 4) > 0) {
                        if (z11) {
                            bottom = (reorderedChildAt.getTop() - ((ViewGroup.MarginLayoutParams) layoutParams).topMargin) - this.mDividerHorizontalHeight;
                        } else {
                            bottom = reorderedChildAt.getBottom() + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
                        }
                        e(canvas, flexLine.f13566a, bottom, flexLine.f13572g);
                    }
                }
            }
            if (h(i12)) {
                if (z10) {
                    i11 = flexLine.f13568c;
                } else {
                    i11 = flexLine.f13566a - this.mDividerVerticalWidth;
                }
                f(canvas, i11, paddingTop, max);
            }
            if (i(i12) && (this.mShowDividerVertical & 4) > 0) {
                if (z10) {
                    i10 = flexLine.f13566a - this.mDividerVerticalWidth;
                } else {
                    i10 = flexLine.f13568c;
                }
                f(canvas, i10, paddingTop, max);
            }
        }
    }

    private void e(Canvas canvas, int i10, int i11, int i12) {
        Drawable drawable = this.mDividerDrawableHorizontal;
        if (drawable == null) {
            return;
        }
        drawable.setBounds(i10, i11, i12 + i10, this.mDividerHorizontalHeight + i11);
        this.mDividerDrawableHorizontal.draw(canvas);
    }

    private void f(Canvas canvas, int i10, int i11, int i12) {
        Drawable drawable = this.mDividerDrawableVertical;
        if (drawable == null) {
            return;
        }
        drawable.setBounds(i10, i11, this.mDividerVerticalWidth + i10, i12 + i11);
        this.mDividerDrawableVertical.draw(canvas);
    }

    private boolean g(int i10, int i11) {
        if (b(i10, i11)) {
            if (isMainAxisDirectionHorizontal()) {
                if ((this.mShowDividerVertical & 1) == 0) {
                    return false;
                }
                return true;
            } else if ((this.mShowDividerHorizontal & 1) == 0) {
                return false;
            } else {
                return true;
            }
        } else if (isMainAxisDirectionHorizontal()) {
            if ((this.mShowDividerVertical & 2) == 0) {
                return false;
            }
            return true;
        } else if ((this.mShowDividerHorizontal & 2) == 0) {
            return false;
        } else {
            return true;
        }
    }

    private boolean h(int i10) {
        if (i10 >= 0 && i10 < this.mFlexLines.size()) {
            if (a(i10)) {
                if (isMainAxisDirectionHorizontal()) {
                    if ((this.mShowDividerHorizontal & 1) == 0) {
                        return false;
                    }
                    return true;
                } else if ((this.mShowDividerVertical & 1) == 0) {
                    return false;
                } else {
                    return true;
                }
            } else if (isMainAxisDirectionHorizontal()) {
                if ((this.mShowDividerHorizontal & 2) == 0) {
                    return false;
                }
                return true;
            } else if ((this.mShowDividerVertical & 2) != 0) {
                return true;
            }
        }
        return false;
    }

    private boolean i(int i10) {
        if (i10 >= 0 && i10 < this.mFlexLines.size()) {
            for (int i11 = i10 + 1; i11 < this.mFlexLines.size(); i11++) {
                if (this.mFlexLines.get(i11).c() > 0) {
                    return false;
                }
            }
            if (isMainAxisDirectionHorizontal()) {
                if ((this.mShowDividerHorizontal & 4) == 0) {
                    return false;
                }
                return true;
            } else if ((this.mShowDividerVertical & 4) != 0) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00d8  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void j(boolean r25, int r26, int r27, int r28, int r29) {
        /*
            Method dump skipped, instructions count: 529
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.flexbox.FlexboxLayout.j(boolean, int, int, int, int):void");
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00d9  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void k(boolean r25, boolean r26, int r27, int r28, int r29, int r30) {
        /*
            Method dump skipped, instructions count: 505
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.flexbox.FlexboxLayout.k(boolean, boolean, int, int, int, int):void");
    }

    private void l(int i10, int i11) {
        this.mFlexLines.clear();
        this.mFlexLinesResult.a();
        this.mFlexboxHelper.c(this.mFlexLinesResult, i10, i11);
        this.mFlexLines = this.mFlexLinesResult.f13589a;
        this.mFlexboxHelper.p(i10, i11);
        if (this.mAlignItems == 3) {
            for (FlexLine flexLine : this.mFlexLines) {
                int i12 = Integer.MIN_VALUE;
                for (int i13 = 0; i13 < flexLine.f13573h; i13++) {
                    View reorderedChildAt = getReorderedChildAt(flexLine.f13580o + i13);
                    if (reorderedChildAt != null && reorderedChildAt.getVisibility() != 8) {
                        LayoutParams layoutParams = (LayoutParams) reorderedChildAt.getLayoutParams();
                        if (this.mFlexWrap != 2) {
                            i12 = Math.max(i12, reorderedChildAt.getMeasuredHeight() + Math.max(flexLine.f13577l - reorderedChildAt.getBaseline(), ((ViewGroup.MarginLayoutParams) layoutParams).topMargin) + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin);
                        } else {
                            i12 = Math.max(i12, reorderedChildAt.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + Math.max((flexLine.f13577l - reorderedChildAt.getMeasuredHeight()) + reorderedChildAt.getBaseline(), ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin));
                        }
                    }
                }
                flexLine.f13572g = i12;
            }
        }
        this.mFlexboxHelper.o(i10, i11, getPaddingTop() + getPaddingBottom());
        this.mFlexboxHelper.X();
        n(this.mFlexDirection, i10, i11, this.mFlexLinesResult.f13590b);
    }

    private void m(int i10, int i11) {
        this.mFlexLines.clear();
        this.mFlexLinesResult.a();
        this.mFlexboxHelper.f(this.mFlexLinesResult, i10, i11);
        this.mFlexLines = this.mFlexLinesResult.f13589a;
        this.mFlexboxHelper.p(i10, i11);
        this.mFlexboxHelper.o(i10, i11, getPaddingLeft() + getPaddingRight());
        this.mFlexboxHelper.X();
        n(this.mFlexDirection, i10, i11, this.mFlexLinesResult.f13590b);
    }

    private void n(int i10, int i11, int i12, int i13) {
        int sumOfCrossSize;
        int largestMainSize;
        int resolveSizeAndState;
        int resolveSizeAndState2;
        int mode = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i11);
        int mode2 = View.MeasureSpec.getMode(i12);
        int size2 = View.MeasureSpec.getSize(i12);
        if (i10 != 0 && i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new IllegalArgumentException("Invalid flex direction: " + i10);
            }
            sumOfCrossSize = getLargestMainSize();
            largestMainSize = getSumOfCrossSize() + getPaddingLeft() + getPaddingRight();
        } else {
            sumOfCrossSize = getSumOfCrossSize() + getPaddingTop() + getPaddingBottom();
            largestMainSize = getLargestMainSize();
        }
        if (mode != Integer.MIN_VALUE) {
            if (mode != 0) {
                if (mode == 1073741824) {
                    if (size < largestMainSize) {
                        i13 = View.combineMeasuredStates(i13, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
                    }
                    resolveSizeAndState = View.resolveSizeAndState(size, i11, i13);
                } else {
                    throw new IllegalStateException("Unknown width mode is set: " + mode);
                }
            } else {
                resolveSizeAndState = View.resolveSizeAndState(largestMainSize, i11, i13);
            }
        } else {
            if (size < largestMainSize) {
                i13 = View.combineMeasuredStates(i13, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
            } else {
                size = largestMainSize;
            }
            resolveSizeAndState = View.resolveSizeAndState(size, i11, i13);
        }
        if (mode2 != Integer.MIN_VALUE) {
            if (mode2 != 0) {
                if (mode2 == 1073741824) {
                    if (size2 < sumOfCrossSize) {
                        i13 = View.combineMeasuredStates(i13, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
                    }
                    resolveSizeAndState2 = View.resolveSizeAndState(size2, i12, i13);
                } else {
                    throw new IllegalStateException("Unknown height mode is set: " + mode2);
                }
            } else {
                resolveSizeAndState2 = View.resolveSizeAndState(sumOfCrossSize, i12, i13);
            }
        } else {
            if (size2 < sumOfCrossSize) {
                i13 = View.combineMeasuredStates(i13, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
            } else {
                size2 = sumOfCrossSize;
            }
            resolveSizeAndState2 = View.resolveSizeAndState(size2, i12, i13);
        }
        setMeasuredDimension(resolveSizeAndState, resolveSizeAndState2);
    }

    private void o() {
        if (this.mDividerDrawableHorizontal == null && this.mDividerDrawableVertical == null) {
            setWillNotDraw(true);
        } else {
            setWillNotDraw(false);
        }
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        if (this.mOrderCache == null) {
            this.mOrderCache = new SparseIntArray(getChildCount());
        }
        this.mReorderedIndices = this.mFlexboxHelper.n(view, i10, layoutParams, this.mOrderCache);
        super.addView(view, i10, layoutParams);
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof LayoutParams;
    }

    @Override // com.google.android.flexbox.a
    public int getAlignContent() {
        return this.mAlignContent;
    }

    @Override // com.google.android.flexbox.a
    public int getAlignItems() {
        return this.mAlignItems;
    }

    @Override // com.google.android.flexbox.a
    public int getChildHeightMeasureSpec(int i10, int i11, int i12) {
        return ViewGroup.getChildMeasureSpec(i10, i11, i12);
    }

    @Override // com.google.android.flexbox.a
    public int getChildWidthMeasureSpec(int i10, int i11, int i12) {
        return ViewGroup.getChildMeasureSpec(i10, i11, i12);
    }

    @Override // com.google.android.flexbox.a
    public int getDecorationLengthCrossAxis(View view) {
        return 0;
    }

    @Override // com.google.android.flexbox.a
    public int getDecorationLengthMainAxis(View view, int i10, int i11) {
        int i12;
        int i13 = 0;
        if (isMainAxisDirectionHorizontal()) {
            if (g(i10, i11)) {
                i13 = this.mDividerVerticalWidth;
            }
            if ((this.mShowDividerVertical & 4) > 0) {
                i12 = this.mDividerVerticalWidth;
            } else {
                return i13;
            }
        } else {
            if (g(i10, i11)) {
                i13 = this.mDividerHorizontalHeight;
            }
            if ((this.mShowDividerHorizontal & 4) > 0) {
                i12 = this.mDividerHorizontalHeight;
            } else {
                return i13;
            }
        }
        return i13 + i12;
    }

    public Drawable getDividerDrawableHorizontal() {
        return this.mDividerDrawableHorizontal;
    }

    public Drawable getDividerDrawableVertical() {
        return this.mDividerDrawableVertical;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexDirection() {
        return this.mFlexDirection;
    }

    @Override // com.google.android.flexbox.a
    public View getFlexItemAt(int i10) {
        return getChildAt(i10);
    }

    @Override // com.google.android.flexbox.a
    public int getFlexItemCount() {
        return getChildCount();
    }

    public List<FlexLine> getFlexLines() {
        ArrayList arrayList = new ArrayList(this.mFlexLines.size());
        for (FlexLine flexLine : this.mFlexLines) {
            if (flexLine.c() != 0) {
                arrayList.add(flexLine);
            }
        }
        return arrayList;
    }

    @Override // com.google.android.flexbox.a
    public List<FlexLine> getFlexLinesInternal() {
        return this.mFlexLines;
    }

    @Override // com.google.android.flexbox.a
    public int getFlexWrap() {
        return this.mFlexWrap;
    }

    public int getJustifyContent() {
        return this.mJustifyContent;
    }

    @Override // com.google.android.flexbox.a
    public int getLargestMainSize() {
        int i10 = Integer.MIN_VALUE;
        for (FlexLine flexLine : this.mFlexLines) {
            i10 = Math.max(i10, flexLine.f13570e);
        }
        return i10;
    }

    @Override // com.google.android.flexbox.a
    public int getMaxLine() {
        return this.mMaxLine;
    }

    public View getReorderedChildAt(int i10) {
        if (i10 >= 0) {
            int[] iArr = this.mReorderedIndices;
            if (i10 < iArr.length) {
                return getChildAt(iArr[i10]);
            }
            return null;
        }
        return null;
    }

    @Override // com.google.android.flexbox.a
    public View getReorderedFlexItemAt(int i10) {
        return getReorderedChildAt(i10);
    }

    public int getShowDividerHorizontal() {
        return this.mShowDividerHorizontal;
    }

    public int getShowDividerVertical() {
        return this.mShowDividerVertical;
    }

    @Override // com.google.android.flexbox.a
    public int getSumOfCrossSize() {
        int i10;
        int i11;
        int size = this.mFlexLines.size();
        int i12 = 0;
        for (int i13 = 0; i13 < size; i13++) {
            FlexLine flexLine = this.mFlexLines.get(i13);
            if (h(i13)) {
                if (isMainAxisDirectionHorizontal()) {
                    i11 = this.mDividerHorizontalHeight;
                } else {
                    i11 = this.mDividerVerticalWidth;
                }
                i12 += i11;
            }
            if (i(i13)) {
                if (isMainAxisDirectionHorizontal()) {
                    i10 = this.mDividerHorizontalHeight;
                } else {
                    i10 = this.mDividerVerticalWidth;
                }
                i12 += i10;
            }
            i12 += flexLine.f13572g;
        }
        return i12;
    }

    @Override // com.google.android.flexbox.a
    public boolean isMainAxisDirectionHorizontal() {
        int i10 = this.mFlexDirection;
        if (i10 == 0 || i10 == 1) {
            return true;
        }
        return false;
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        boolean z10;
        boolean z11;
        if (this.mDividerDrawableVertical != null || this.mDividerDrawableHorizontal != null) {
            if (this.mShowDividerHorizontal != 0 || this.mShowDividerVertical != 0) {
                int z12 = h0.z(this);
                int i10 = this.mFlexDirection;
                boolean z13 = false;
                boolean z14 = true;
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                return;
                            }
                            if (z12 == 1) {
                                z13 = true;
                            }
                            if (this.mFlexWrap == 2) {
                                z13 = !z13;
                            }
                            d(canvas, z13, true);
                            return;
                        }
                        if (z12 != 1) {
                            z14 = false;
                        }
                        if (this.mFlexWrap == 2) {
                            z14 = !z14;
                        }
                        d(canvas, z14, false);
                        return;
                    }
                    if (z12 != 1) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (this.mFlexWrap == 2) {
                        z13 = true;
                    }
                    c(canvas, z11, z13);
                    return;
                }
                if (z12 == 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (this.mFlexWrap == 2) {
                    z13 = true;
                }
                c(canvas, z10, z13);
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        boolean z11;
        FlexboxLayout flexboxLayout;
        int i14;
        int i15;
        int i16;
        int i17;
        boolean z12;
        FlexboxLayout flexboxLayout2;
        int i18;
        int i19;
        int i20;
        int i21;
        int z13 = h0.z(this);
        int i22 = this.mFlexDirection;
        boolean z14 = false;
        if (i22 != 0) {
            if (i22 != 1) {
                if (i22 != 2) {
                    if (i22 == 3) {
                        if (z13 == 1) {
                            z14 = true;
                        }
                        if (this.mFlexWrap == 2) {
                            z14 = !z14;
                        }
                        k(z14, true, i10, i11, i12, i13);
                        return;
                    }
                    throw new IllegalStateException("Invalid flex direction is set: " + this.mFlexDirection);
                }
                if (z13 == 1) {
                    z14 = true;
                }
                if (this.mFlexWrap == 2) {
                    z14 = !z14;
                }
                k(z14, false, i10, i11, i12, i13);
                return;
            }
            if (z13 != 1) {
                z12 = true;
                flexboxLayout2 = this;
                i18 = i10;
                i21 = i11;
                i20 = i13;
                i19 = i12;
            } else {
                z12 = false;
                flexboxLayout2 = this;
                i18 = i10;
                i19 = i12;
                i20 = i13;
                i21 = i11;
            }
            flexboxLayout2.j(z12, i18, i21, i19, i20);
            return;
        }
        if (z13 == 1) {
            z11 = true;
            flexboxLayout = this;
            i14 = i10;
            i17 = i11;
            i16 = i13;
            i15 = i12;
        } else {
            z11 = false;
            flexboxLayout = this;
            i14 = i10;
            i15 = i12;
            i16 = i13;
            i17 = i11;
        }
        flexboxLayout.j(z11, i14, i17, i15, i16);
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        if (this.mOrderCache == null) {
            this.mOrderCache = new SparseIntArray(getChildCount());
        }
        if (this.mFlexboxHelper.O(this.mOrderCache)) {
            this.mReorderedIndices = this.mFlexboxHelper.m(this.mOrderCache);
        }
        int i12 = this.mFlexDirection;
        if (i12 != 0 && i12 != 1) {
            if (i12 != 2 && i12 != 3) {
                throw new IllegalStateException("Invalid value for the flex direction is set: " + this.mFlexDirection);
            }
            m(i10, i11);
            return;
        }
        l(i10, i11);
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexItemAdded(View view, int i10, int i11, FlexLine flexLine) {
        if (g(i10, i11)) {
            if (isMainAxisDirectionHorizontal()) {
                int i12 = flexLine.f13570e;
                int i13 = this.mDividerVerticalWidth;
                flexLine.f13570e = i12 + i13;
                flexLine.f13571f += i13;
                return;
            }
            int i14 = flexLine.f13570e;
            int i15 = this.mDividerHorizontalHeight;
            flexLine.f13570e = i14 + i15;
            flexLine.f13571f += i15;
        }
    }

    @Override // com.google.android.flexbox.a
    public void onNewFlexLineAdded(FlexLine flexLine) {
        if (isMainAxisDirectionHorizontal()) {
            if ((this.mShowDividerVertical & 4) > 0) {
                int i10 = flexLine.f13570e;
                int i11 = this.mDividerVerticalWidth;
                flexLine.f13570e = i10 + i11;
                flexLine.f13571f += i11;
            }
        } else if ((this.mShowDividerHorizontal & 4) > 0) {
            int i12 = flexLine.f13570e;
            int i13 = this.mDividerHorizontalHeight;
            flexLine.f13570e = i12 + i13;
            flexLine.f13571f += i13;
        }
    }

    public void setAlignContent(int i10) {
        if (this.mAlignContent != i10) {
            this.mAlignContent = i10;
            requestLayout();
        }
    }

    public void setAlignItems(int i10) {
        if (this.mAlignItems != i10) {
            this.mAlignItems = i10;
            requestLayout();
        }
    }

    public void setDividerDrawable(Drawable drawable) {
        setDividerDrawableHorizontal(drawable);
        setDividerDrawableVertical(drawable);
    }

    public void setDividerDrawableHorizontal(Drawable drawable) {
        if (drawable == this.mDividerDrawableHorizontal) {
            return;
        }
        this.mDividerDrawableHorizontal = drawable;
        if (drawable != null) {
            this.mDividerHorizontalHeight = drawable.getIntrinsicHeight();
        } else {
            this.mDividerHorizontalHeight = 0;
        }
        o();
        requestLayout();
    }

    public void setDividerDrawableVertical(Drawable drawable) {
        if (drawable == this.mDividerDrawableVertical) {
            return;
        }
        this.mDividerDrawableVertical = drawable;
        if (drawable != null) {
            this.mDividerVerticalWidth = drawable.getIntrinsicWidth();
        } else {
            this.mDividerVerticalWidth = 0;
        }
        o();
        requestLayout();
    }

    public void setFlexDirection(int i10) {
        if (this.mFlexDirection != i10) {
            this.mFlexDirection = i10;
            requestLayout();
        }
    }

    @Override // com.google.android.flexbox.a
    public void setFlexLines(List<FlexLine> list) {
        this.mFlexLines = list;
    }

    public void setFlexWrap(int i10) {
        if (this.mFlexWrap != i10) {
            this.mFlexWrap = i10;
            requestLayout();
        }
    }

    public void setJustifyContent(int i10) {
        if (this.mJustifyContent != i10) {
            this.mJustifyContent = i10;
            requestLayout();
        }
    }

    public void setMaxLine(int i10) {
        if (this.mMaxLine != i10) {
            this.mMaxLine = i10;
            requestLayout();
        }
    }

    public void setShowDivider(int i10) {
        setShowDividerVertical(i10);
        setShowDividerHorizontal(i10);
    }

    public void setShowDividerHorizontal(int i10) {
        if (i10 != this.mShowDividerHorizontal) {
            this.mShowDividerHorizontal = i10;
            requestLayout();
        }
    }

    public void setShowDividerVertical(int i10) {
        if (i10 != this.mShowDividerVertical) {
            this.mShowDividerVertical = i10;
            requestLayout();
        }
    }

    @Override // com.google.android.flexbox.a
    public void updateViewCache(int i10, View view) {
    }

    public FlexboxLayout(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    @Override // android.view.ViewGroup
    public LayoutParams generateLayoutParams(AttributeSet attributeSet) {
        return new LayoutParams(getContext(), attributeSet);
    }

    public FlexboxLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.mMaxLine = -1;
        this.mFlexboxHelper = new FlexboxHelper(this);
        this.mFlexLines = new ArrayList();
        this.mFlexLinesResult = new FlexboxHelper.FlexLinesResult();
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, c.f13648b, i10, 0);
        this.mFlexDirection = obtainStyledAttributes.getInt(c.f13654h, 0);
        this.mFlexWrap = obtainStyledAttributes.getInt(c.f13655i, 0);
        this.mJustifyContent = obtainStyledAttributes.getInt(c.f13656j, 0);
        this.mAlignItems = obtainStyledAttributes.getInt(c.f13650d, 0);
        this.mAlignContent = obtainStyledAttributes.getInt(c.f13649c, 0);
        this.mMaxLine = obtainStyledAttributes.getInt(c.f13657k, -1);
        Drawable drawable = obtainStyledAttributes.getDrawable(c.f13651e);
        if (drawable != null) {
            setDividerDrawableHorizontal(drawable);
            setDividerDrawableVertical(drawable);
        }
        Drawable drawable2 = obtainStyledAttributes.getDrawable(c.f13652f);
        if (drawable2 != null) {
            setDividerDrawableHorizontal(drawable2);
        }
        Drawable drawable3 = obtainStyledAttributes.getDrawable(c.f13653g);
        if (drawable3 != null) {
            setDividerDrawableVertical(drawable3);
        }
        int i11 = obtainStyledAttributes.getInt(c.f13658l, 0);
        if (i11 != 0) {
            this.mShowDividerVertical = i11;
            this.mShowDividerHorizontal = i11;
        }
        int i12 = obtainStyledAttributes.getInt(c.f13660n, 0);
        if (i12 != 0) {
            this.mShowDividerVertical = i12;
        }
        int i13 = obtainStyledAttributes.getInt(c.f13659m, 0);
        if (i13 != 0) {
            this.mShowDividerHorizontal = i13;
        }
        obtainStyledAttributes.recycle();
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof LayoutParams) {
            return new LayoutParams((LayoutParams) layoutParams);
        }
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new LayoutParams((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new LayoutParams(layoutParams);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class LayoutParams extends ViewGroup.MarginLayoutParams implements b {
        public static final Parcelable.Creator<LayoutParams> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private int f13593d;

        /* renamed from: e  reason: collision with root package name */
        private float f13594e;

        /* renamed from: i  reason: collision with root package name */
        private float f13595i;

        /* renamed from: o  reason: collision with root package name */
        private int f13596o;

        /* renamed from: p  reason: collision with root package name */
        private float f13597p;

        /* renamed from: q  reason: collision with root package name */
        private int f13598q;

        /* renamed from: r  reason: collision with root package name */
        private int f13599r;

        /* renamed from: s  reason: collision with root package name */
        private int f13600s;

        /* renamed from: t  reason: collision with root package name */
        private int f13601t;

        /* renamed from: u  reason: collision with root package name */
        private boolean f13602u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public LayoutParams createFromParcel(Parcel parcel) {
                return new LayoutParams(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public LayoutParams[] newArray(int i10) {
                return new LayoutParams[i10];
            }
        }

        public LayoutParams(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, c.f13661o);
            this.f13593d = obtainStyledAttributes.getInt(c.f13670x, 1);
            this.f13594e = obtainStyledAttributes.getFloat(c.f13664r, 0.0f);
            this.f13595i = obtainStyledAttributes.getFloat(c.f13665s, 1.0f);
            this.f13596o = obtainStyledAttributes.getInt(c.f13662p, -1);
            this.f13597p = obtainStyledAttributes.getFraction(c.f13663q, 1, 1, -1.0f);
            this.f13598q = obtainStyledAttributes.getDimensionPixelSize(c.f13669w, -1);
            this.f13599r = obtainStyledAttributes.getDimensionPixelSize(c.f13668v, -1);
            this.f13600s = obtainStyledAttributes.getDimensionPixelSize(c.f13667u, 16777215);
            this.f13601t = obtainStyledAttributes.getDimensionPixelSize(c.f13666t, 16777215);
            this.f13602u = obtainStyledAttributes.getBoolean(c.f13671y, false);
            obtainStyledAttributes.recycle();
        }

        @Override // com.google.android.flexbox.b
        public void A1(int i10) {
            this.f13598q = i10;
        }

        @Override // com.google.android.flexbox.b
        public int B1() {
            return ((ViewGroup.MarginLayoutParams) this).bottomMargin;
        }

        @Override // com.google.android.flexbox.b
        public float E() {
            return this.f13595i;
        }

        @Override // com.google.android.flexbox.b
        public int E1() {
            return ((ViewGroup.MarginLayoutParams) this).leftMargin;
        }

        @Override // com.google.android.flexbox.b
        public float F0() {
            return this.f13597p;
        }

        @Override // com.google.android.flexbox.b
        public int L() {
            return this.f13598q;
        }

        @Override // com.google.android.flexbox.b
        public int N() {
            return ((ViewGroup.MarginLayoutParams) this).topMargin;
        }

        @Override // com.google.android.flexbox.b
        public boolean N0() {
            return this.f13602u;
        }

        @Override // com.google.android.flexbox.b
        public void V(int i10) {
            this.f13599r = i10;
        }

        @Override // com.google.android.flexbox.b
        public float W() {
            return this.f13594e;
        }

        @Override // com.google.android.flexbox.b
        public int Y0() {
            return this.f13600s;
        }

        @Override // com.google.android.flexbox.b
        public int Y1() {
            return ((ViewGroup.MarginLayoutParams) this).rightMargin;
        }

        public void a(float f10) {
            this.f13594e = f10;
        }

        public void b(float f10) {
            this.f13595i = f10;
        }

        @Override // com.google.android.flexbox.b
        public int b2() {
            return this.f13599r;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // com.google.android.flexbox.b
        public int getHeight() {
            return ((ViewGroup.MarginLayoutParams) this).height;
        }

        @Override // com.google.android.flexbox.b
        public int getOrder() {
            return this.f13593d;
        }

        @Override // com.google.android.flexbox.b
        public int getWidth() {
            return ((ViewGroup.MarginLayoutParams) this).width;
        }

        @Override // com.google.android.flexbox.b
        public int h2() {
            return this.f13601t;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f13593d);
            parcel.writeFloat(this.f13594e);
            parcel.writeFloat(this.f13595i);
            parcel.writeInt(this.f13596o);
            parcel.writeFloat(this.f13597p);
            parcel.writeInt(this.f13598q);
            parcel.writeInt(this.f13599r);
            parcel.writeInt(this.f13600s);
            parcel.writeInt(this.f13601t);
            parcel.writeByte(this.f13602u ? (byte) 1 : (byte) 0);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).bottomMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).leftMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).rightMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).topMargin);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).height);
            parcel.writeInt(((ViewGroup.MarginLayoutParams) this).width);
        }

        @Override // com.google.android.flexbox.b
        public int y() {
            return this.f13596o;
        }

        public LayoutParams(LayoutParams layoutParams) {
            super((ViewGroup.MarginLayoutParams) layoutParams);
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
            this.f13593d = layoutParams.f13593d;
            this.f13594e = layoutParams.f13594e;
            this.f13595i = layoutParams.f13595i;
            this.f13596o = layoutParams.f13596o;
            this.f13597p = layoutParams.f13597p;
            this.f13598q = layoutParams.f13598q;
            this.f13599r = layoutParams.f13599r;
            this.f13600s = layoutParams.f13600s;
            this.f13601t = layoutParams.f13601t;
            this.f13602u = layoutParams.f13602u;
        }

        public LayoutParams(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
        }

        public LayoutParams(int i10, int i11) {
            super(new ViewGroup.LayoutParams(i10, i11));
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
        }

        public LayoutParams(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
        }

        protected LayoutParams(Parcel parcel) {
            super(0, 0);
            this.f13593d = 1;
            this.f13594e = 0.0f;
            this.f13595i = 1.0f;
            this.f13596o = -1;
            this.f13597p = -1.0f;
            this.f13598q = -1;
            this.f13599r = -1;
            this.f13600s = 16777215;
            this.f13601t = 16777215;
            this.f13593d = parcel.readInt();
            this.f13594e = parcel.readFloat();
            this.f13595i = parcel.readFloat();
            this.f13596o = parcel.readInt();
            this.f13597p = parcel.readFloat();
            this.f13598q = parcel.readInt();
            this.f13599r = parcel.readInt();
            this.f13600s = parcel.readInt();
            this.f13601t = parcel.readInt();
            this.f13602u = parcel.readByte() != 0;
            ((ViewGroup.MarginLayoutParams) this).bottomMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).leftMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).rightMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).topMargin = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).height = parcel.readInt();
            ((ViewGroup.MarginLayoutParams) this).width = parcel.readInt();
        }
    }
}
