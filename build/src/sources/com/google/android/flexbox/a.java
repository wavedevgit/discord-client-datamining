package com.google.android.flexbox;

import android.view.View;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
interface a {
    int getAlignContent();

    int getAlignItems();

    int getChildHeightMeasureSpec(int i10, int i11, int i12);

    int getChildWidthMeasureSpec(int i10, int i11, int i12);

    int getDecorationLengthCrossAxis(View view);

    int getDecorationLengthMainAxis(View view, int i10, int i11);

    int getFlexDirection();

    View getFlexItemAt(int i10);

    int getFlexItemCount();

    List getFlexLinesInternal();

    int getFlexWrap();

    int getLargestMainSize();

    int getMaxLine();

    int getPaddingBottom();

    int getPaddingEnd();

    int getPaddingLeft();

    int getPaddingRight();

    int getPaddingStart();

    int getPaddingTop();

    View getReorderedFlexItemAt(int i10);

    int getSumOfCrossSize();

    boolean isMainAxisDirectionHorizontal();

    void onNewFlexItemAdded(View view, int i10, int i11, FlexLine flexLine);

    void onNewFlexLineAdded(FlexLine flexLine);

    void setFlexLines(List list);

    void updateViewCache(int i10, View view);
}
