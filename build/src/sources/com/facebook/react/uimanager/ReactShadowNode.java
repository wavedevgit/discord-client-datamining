package com.facebook.react.uimanager;

import com.facebook.react.uimanager.ReactShadowNode;
import com.facebook.yoga.YogaAlign;
import com.facebook.yoga.YogaBaselineFunction;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaDisplay;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaOverflow;
import com.facebook.yoga.YogaPositionType;
import com.facebook.yoga.YogaValue;
import com.facebook.yoga.YogaWrap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ReactShadowNode<T extends ReactShadowNode> {
    void addChildAt(T t10, int i10);

    void addNativeChildAt(T t10, int i10);

    void calculateLayout();

    void calculateLayout(float f10, float f11);

    Iterable<? extends ReactShadowNode> calculateLayoutOnChildren();

    void dirty();

    void dispatchUpdates(float f10, float f11, UIViewOperationQueue uIViewOperationQueue, NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer);

    boolean dispatchUpdatesWillChangeLayout(float f10, float f11);

    void dispose();

    T getChildAt(int i10);

    int getChildCount();

    float getFlex();

    Integer getHeightMeasureSpec();

    String getHierarchyInfo();

    YogaDirection getLayoutDirection();

    float getLayoutHeight();

    T getLayoutParent();

    float getLayoutWidth();

    float getLayoutX();

    float getLayoutY();

    int getNativeChildCount();

    NativeKind getNativeKind();

    int getNativeOffsetForChild(T t10);

    T getNativeParent();

    float getPadding(int i10);

    T getParent();

    int getReactTag();

    int getRootTag();

    int getScreenHeight();

    int getScreenWidth();

    int getScreenX();

    int getScreenY();

    YogaValue getStyleHeight();

    YogaValue getStylePadding(int i10);

    YogaValue getStyleWidth();

    ThemedReactContext getThemedContext();

    int getTotalNativeChildren();

    String getViewClass();

    Integer getWidthMeasureSpec();

    boolean hasNewLayout();

    boolean hasUnseenUpdates();

    boolean hasUpdates();

    boolean hoistNativeChildren();

    int indexOf(T t10);

    int indexOfNativeChild(T t10);

    boolean isDescendantOf(T t10);

    boolean isDirty();

    boolean isLayoutOnly();

    boolean isMeasureDefined();

    boolean isVirtual();

    boolean isVirtualAnchor();

    boolean isYogaLeafNode();

    void markLayoutSeen();

    void markUpdateSeen();

    void markUpdated();

    void onAfterUpdateTransaction();

    void onBeforeLayout(NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer);

    void onCollectExtraUpdates(UIViewOperationQueue uIViewOperationQueue);

    void removeAllNativeChildren();

    void removeAndDisposeAllChildren();

    T removeChildAt(int i10);

    T removeNativeChildAt(int i10);

    void setAlignContent(YogaAlign yogaAlign);

    void setAlignItems(YogaAlign yogaAlign);

    void setAlignSelf(YogaAlign yogaAlign);

    void setBaselineFunction(YogaBaselineFunction yogaBaselineFunction);

    void setBorder(int i10, float f10);

    void setColumnGap(float f10);

    void setColumnGapPercent(float f10);

    void setDefaultPadding(int i10, float f10);

    void setDisplay(YogaDisplay yogaDisplay);

    void setFlex(float f10);

    void setFlexBasis(float f10);

    void setFlexBasisAuto();

    void setFlexBasisPercent(float f10);

    void setFlexDirection(YogaFlexDirection yogaFlexDirection);

    void setFlexGrow(float f10);

    void setFlexShrink(float f10);

    void setFlexWrap(YogaWrap yogaWrap);

    void setGap(float f10);

    void setGapPercent(float f10);

    void setIsLayoutOnly(boolean z10);

    void setJustifyContent(YogaJustify yogaJustify);

    void setLayoutDirection(YogaDirection yogaDirection);

    void setLayoutParent(T t10);

    void setLocalData(Object obj);

    void setMargin(int i10, float f10);

    void setMarginAuto(int i10);

    void setMarginPercent(int i10, float f10);

    void setMeasureFunction(YogaMeasureFunction yogaMeasureFunction);

    void setMeasureSpecs(int i10, int i11);

    void setOverflow(YogaOverflow yogaOverflow);

    void setPadding(int i10, float f10);

    /* renamed from: setPaddingPercent */
    void mo912setPaddingPercent(int i10, float f10);

    void setPosition(int i10, float f10);

    void setPositionPercent(int i10, float f10);

    void setPositionType(YogaPositionType yogaPositionType);

    void setReactTag(int i10);

    void setRootTag(int i10);

    void setRowGap(float f10);

    void setRowGapPercent(float f10);

    void setShouldNotifyOnLayout(boolean z10);

    void setStyleAspectRatio(float f10);

    void setStyleHeight(float f10);

    void setStyleHeightAuto();

    void setStyleHeightPercent(float f10);

    void setStyleMaxHeight(float f10);

    void setStyleMaxHeightPercent(float f10);

    void setStyleMaxWidth(float f10);

    void setStyleMaxWidthPercent(float f10);

    void setStyleMinHeight(float f10);

    void setStyleMinHeightPercent(float f10);

    void setStyleMinWidth(float f10);

    void setStyleMinWidthPercent(float f10);

    void setStyleWidth(float f10);

    void setStyleWidthAuto();

    void setStyleWidthPercent(float f10);

    void setThemedContext(ThemedReactContext themedReactContext);

    void setViewClassName(String str);

    boolean shouldNotifyOnLayout();

    void updateProperties(ReactStylesDiffMap reactStylesDiffMap);
}
