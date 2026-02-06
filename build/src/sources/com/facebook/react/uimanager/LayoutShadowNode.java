package com.facebook.react.uimanager;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.yoga.YogaAlign;
import com.facebook.yoga.YogaDisplay;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaOverflow;
import com.facebook.yoga.YogaPositionType;
import com.facebook.yoga.YogaUnit;
import com.facebook.yoga.YogaWrap;
import kotlin.jvm.internal.FloatCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class LayoutShadowNode extends ReactShadowNodeImpl {
    boolean mCollapsable;
    private final MutableYogaValue mTempYogaValue = new MutableYogaValue();

    /* renamed from: com.facebook.react.uimanager.LayoutShadowNode$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$com$facebook$yoga$YogaUnit;

        static {
            int[] iArr = new int[YogaUnit.values().length];
            $SwitchMap$com$facebook$yoga$YogaUnit = iArr;
            try {
                iArr[YogaUnit.POINT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$facebook$yoga$YogaUnit[YogaUnit.UNDEFINED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$facebook$yoga$YogaUnit[YogaUnit.AUTO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$facebook$yoga$YogaUnit[YogaUnit.PERCENT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class MutableYogaValue {
        YogaUnit unit;
        float value;

        void setFromDynamic(Dynamic dynamic) {
            if (dynamic.isNull()) {
                this.unit = YogaUnit.UNDEFINED;
                this.value = Float.NaN;
            } else if (dynamic.getType() == ReadableType.String) {
                String asString = dynamic.asString();
                if (asString.equals("auto")) {
                    this.unit = YogaUnit.AUTO;
                    this.value = Float.NaN;
                } else if (asString.endsWith("%")) {
                    this.unit = YogaUnit.PERCENT;
                    this.value = Float.parseFloat(asString.substring(0, asString.length() - 1));
                } else {
                    p8.a.J(ReactConstants.TAG, "Unknown value: " + asString);
                    this.unit = YogaUnit.UNDEFINED;
                    this.value = Float.NaN;
                }
            } else if (dynamic.getType() == ReadableType.Number) {
                this.unit = YogaUnit.POINT;
                this.value = PixelUtil.toPixelFromDIP(dynamic.asDouble());
            } else {
                this.unit = YogaUnit.UNDEFINED;
                this.value = Float.NaN;
            }
        }

        private MutableYogaValue() {
        }

        private MutableYogaValue(MutableYogaValue mutableYogaValue) {
            this.value = mutableYogaValue.value;
            this.unit = mutableYogaValue.unit;
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("LayoutShadowNode", LegacyArchitectureLogLevel.ERROR);
    }

    private int maybeTransformLeftRightToStartEnd(int i10) {
        if (I18nUtil.getInstance().doLeftAndRightSwapInRTL(getThemedContext())) {
            if (i10 != 0) {
                if (i10 == 2) {
                    return 5;
                }
            } else {
                return 4;
            }
        }
        return i10;
    }

    @ReactProp(name = ViewProps.ALIGN_CONTENT)
    public void setAlignContent(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setAlignContent(YogaAlign.FLEX_START);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1881872635:
                if (str.equals("stretch")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1720785339:
                if (str.equals("baseline")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 2;
                    break;
                }
                break;
            case -46581362:
                if (str.equals("flex-start")) {
                    c10 = 3;
                    break;
                }
                break;
            case 3005871:
                if (str.equals("auto")) {
                    c10 = 4;
                    break;
                }
                break;
            case 441309761:
                if (str.equals("space-between")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1742952711:
                if (str.equals("flex-end")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1937124468:
                if (str.equals("space-around")) {
                    c10 = 7;
                    break;
                }
                break;
            case 2055030478:
                if (str.equals("space-evenly")) {
                    c10 = '\b';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setAlignContent(YogaAlign.STRETCH);
                return;
            case 1:
                setAlignContent(YogaAlign.BASELINE);
                return;
            case 2:
                setAlignContent(YogaAlign.CENTER);
                return;
            case 3:
                setAlignContent(YogaAlign.FLEX_START);
                return;
            case 4:
                setAlignContent(YogaAlign.AUTO);
                return;
            case 5:
                setAlignContent(YogaAlign.SPACE_BETWEEN);
                return;
            case 6:
                setAlignContent(YogaAlign.FLEX_END);
                return;
            case 7:
                setAlignContent(YogaAlign.SPACE_AROUND);
                return;
            case '\b':
                setAlignContent(YogaAlign.SPACE_EVENLY);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for alignContent: " + str);
                setAlignContent(YogaAlign.FLEX_START);
                return;
        }
    }

    @ReactProp(name = ViewProps.ALIGN_ITEMS)
    public void setAlignItems(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setAlignItems(YogaAlign.STRETCH);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1881872635:
                if (str.equals("stretch")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1720785339:
                if (str.equals("baseline")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 2;
                    break;
                }
                break;
            case -46581362:
                if (str.equals("flex-start")) {
                    c10 = 3;
                    break;
                }
                break;
            case 3005871:
                if (str.equals("auto")) {
                    c10 = 4;
                    break;
                }
                break;
            case 441309761:
                if (str.equals("space-between")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1742952711:
                if (str.equals("flex-end")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1937124468:
                if (str.equals("space-around")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setAlignItems(YogaAlign.STRETCH);
                return;
            case 1:
                setAlignItems(YogaAlign.BASELINE);
                return;
            case 2:
                setAlignItems(YogaAlign.CENTER);
                return;
            case 3:
                setAlignItems(YogaAlign.FLEX_START);
                return;
            case 4:
                setAlignItems(YogaAlign.AUTO);
                return;
            case 5:
                setAlignItems(YogaAlign.SPACE_BETWEEN);
                return;
            case 6:
                setAlignItems(YogaAlign.FLEX_END);
                return;
            case 7:
                setAlignItems(YogaAlign.SPACE_AROUND);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for alignItems: " + str);
                setAlignItems(YogaAlign.STRETCH);
                return;
        }
    }

    @ReactProp(name = ViewProps.ALIGN_SELF)
    public void setAlignSelf(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setAlignSelf(YogaAlign.AUTO);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1881872635:
                if (str.equals("stretch")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1720785339:
                if (str.equals("baseline")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 2;
                    break;
                }
                break;
            case -46581362:
                if (str.equals("flex-start")) {
                    c10 = 3;
                    break;
                }
                break;
            case 3005871:
                if (str.equals("auto")) {
                    c10 = 4;
                    break;
                }
                break;
            case 441309761:
                if (str.equals("space-between")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1742952711:
                if (str.equals("flex-end")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1937124468:
                if (str.equals("space-around")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setAlignSelf(YogaAlign.STRETCH);
                return;
            case 1:
                setAlignSelf(YogaAlign.BASELINE);
                return;
            case 2:
                setAlignSelf(YogaAlign.CENTER);
                return;
            case 3:
                setAlignSelf(YogaAlign.FLEX_START);
                return;
            case 4:
                setAlignSelf(YogaAlign.AUTO);
                return;
            case 5:
                setAlignSelf(YogaAlign.SPACE_BETWEEN);
                return;
            case 6:
                setAlignSelf(YogaAlign.FLEX_END);
                return;
            case 7:
                setAlignSelf(YogaAlign.SPACE_AROUND);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for alignSelf: " + str);
                setAlignSelf(YogaAlign.AUTO);
                return;
        }
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = ViewProps.ASPECT_RATIO)
    public void setAspectRatio(float f10) {
        setStyleAspectRatio(f10);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {ViewProps.BORDER_WIDTH, ViewProps.BORDER_START_WIDTH, ViewProps.BORDER_END_WIDTH, ViewProps.BORDER_TOP_WIDTH, ViewProps.BORDER_BOTTOM_WIDTH, ViewProps.BORDER_LEFT_WIDTH, ViewProps.BORDER_RIGHT_WIDTH})
    public void setBorderWidths(int i10, float f10) {
        if (isVirtual()) {
            return;
        }
        setBorder(maybeTransformLeftRightToStartEnd(ViewProps.BORDER_SPACING_TYPES[i10]), PixelUtil.toPixelFromDIP(f10));
    }

    @ReactProp(name = ViewProps.COLLAPSABLE)
    public void setCollapsable(boolean z10) {
        this.mCollapsable = z10;
    }

    @ReactProp(name = ViewProps.COLLAPSABLE_CHILDREN)
    public void setCollapsableChildren(boolean z10) {
    }

    @ReactProp(name = ViewProps.COLUMN_GAP)
    public void setColumnGap(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 4) {
                setColumnGapPercent(this.mTempYogaValue.value);
            }
        } else {
            setColumnGap(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.DISPLAY)
    public void setDisplay(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setDisplay(YogaDisplay.FLEX);
        } else if (!str.equals(ViewProps.FLEX)) {
            if (!str.equals(ViewProps.NONE)) {
                p8.a.J(ReactConstants.TAG, "invalid value for display: " + str);
                setDisplay(YogaDisplay.FLEX);
                return;
            }
            setDisplay(YogaDisplay.NONE);
        } else {
            setDisplay(YogaDisplay.FLEX);
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    @ReactProp(defaultFloat = 0.0f, name = ViewProps.FLEX)
    public void setFlex(float f10) {
        if (isVirtual()) {
            return;
        }
        super.setFlex(f10);
    }

    @ReactProp(name = ViewProps.FLEX_BASIS)
    public void setFlexBasis(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 == 4) {
                    setFlexBasisPercent(this.mTempYogaValue.value);
                }
            } else {
                setFlexBasisAuto();
            }
        } else {
            setFlexBasis(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.FLEX_DIRECTION)
    public void setFlexDirection(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setFlexDirection(YogaFlexDirection.COLUMN);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1448970769:
                if (str.equals("row-reverse")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1354837162:
                if (str.equals("column")) {
                    c10 = 1;
                    break;
                }
                break;
            case 113114:
                if (str.equals("row")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1272730475:
                if (str.equals("column-reverse")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setFlexDirection(YogaFlexDirection.ROW_REVERSE);
                return;
            case 1:
                setFlexDirection(YogaFlexDirection.COLUMN);
                return;
            case 2:
                setFlexDirection(YogaFlexDirection.ROW);
                return;
            case 3:
                setFlexDirection(YogaFlexDirection.COLUMN_REVERSE);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for flexDirection: " + str);
                setFlexDirection(YogaFlexDirection.COLUMN);
                return;
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    @ReactProp(defaultFloat = 0.0f, name = ViewProps.FLEX_GROW)
    public void setFlexGrow(float f10) {
        if (isVirtual()) {
            return;
        }
        super.setFlexGrow(f10);
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    @ReactProp(defaultFloat = 0.0f, name = ViewProps.FLEX_SHRINK)
    public void setFlexShrink(float f10) {
        if (isVirtual()) {
            return;
        }
        super.setFlexShrink(f10);
    }

    @ReactProp(name = ViewProps.FLEX_WRAP)
    public void setFlexWrap(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setFlexWrap(YogaWrap.NO_WRAP);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1039592053:
                if (str.equals("nowrap")) {
                    c10 = 0;
                    break;
                }
                break;
            case -749527969:
                if (str.equals("wrap-reverse")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3657802:
                if (str.equals("wrap")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setFlexWrap(YogaWrap.NO_WRAP);
                return;
            case 1:
                setFlexWrap(YogaWrap.WRAP_REVERSE);
                return;
            case 2:
                setFlexWrap(YogaWrap.WRAP);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for flexWrap: " + str);
                setFlexWrap(YogaWrap.NO_WRAP);
                return;
        }
    }

    @ReactProp(name = ViewProps.GAP)
    public void setGap(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 4) {
                setGapPercent(this.mTempYogaValue.value);
            }
        } else {
            setGap(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = "height")
    public void setHeight(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 == 4) {
                    setStyleHeightPercent(this.mTempYogaValue.value);
                }
            } else {
                setStyleHeightAuto();
            }
        } else {
            setStyleHeight(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = "inset")
    public void setInset(Dynamic dynamic) {
    }

    @ReactPropGroup(names = {"insetBlock", "insetBlockEnd", "insetBlockStart"})
    public void setInsetBlock(int i10, Dynamic dynamic) {
    }

    @ReactPropGroup(names = {"insetInline", "insetInlineEnd", "insetInlineStart"})
    public void setInsetInline(int i10, Dynamic dynamic) {
    }

    @ReactProp(name = ViewProps.JUSTIFY_CONTENT)
    public void setJustifyContent(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setJustifyContent(YogaJustify.FLEX_START);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 0;
                    break;
                }
                break;
            case -46581362:
                if (str.equals("flex-start")) {
                    c10 = 1;
                    break;
                }
                break;
            case 441309761:
                if (str.equals("space-between")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1742952711:
                if (str.equals("flex-end")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1937124468:
                if (str.equals("space-around")) {
                    c10 = 4;
                    break;
                }
                break;
            case 2055030478:
                if (str.equals("space-evenly")) {
                    c10 = 5;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setJustifyContent(YogaJustify.CENTER);
                return;
            case 1:
                setJustifyContent(YogaJustify.FLEX_START);
                return;
            case 2:
                setJustifyContent(YogaJustify.SPACE_BETWEEN);
                return;
            case 3:
                setJustifyContent(YogaJustify.FLEX_END);
                return;
            case 4:
                setJustifyContent(YogaJustify.SPACE_AROUND);
                return;
            case 5:
                setJustifyContent(YogaJustify.SPACE_EVENLY);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for justifyContent: " + str);
                setJustifyContent(YogaJustify.FLEX_START);
                return;
        }
    }

    @ReactPropGroup(names = {"marginBlock", "marginBlockEnd", "marginBlockStart"})
    public void setMarginBlock(int i10, Dynamic dynamic) {
    }

    @ReactPropGroup(names = {"marginInline", "marginInlineEnd", "marginInlineStart"})
    public void setMarginInline(int i10, Dynamic dynamic) {
    }

    @ReactPropGroup(names = {ViewProps.MARGIN, ViewProps.MARGIN_VERTICAL, ViewProps.MARGIN_HORIZONTAL, ViewProps.MARGIN_START, ViewProps.MARGIN_END, ViewProps.MARGIN_TOP, ViewProps.MARGIN_BOTTOM, ViewProps.MARGIN_LEFT, ViewProps.MARGIN_RIGHT})
    public void setMargins(int i10, Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        int maybeTransformLeftRightToStartEnd = maybeTransformLeftRightToStartEnd(ViewProps.PADDING_MARGIN_SPACING_TYPES[i10]);
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i11 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i11 != 1 && i11 != 2) {
            if (i11 != 3) {
                if (i11 == 4) {
                    setMarginPercent(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
                }
            } else {
                setMarginAuto(maybeTransformLeftRightToStartEnd);
            }
        } else {
            setMargin(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.MAX_HEIGHT)
    public void setMaxHeight(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 4) {
                setStyleMaxHeightPercent(this.mTempYogaValue.value);
            }
        } else {
            setStyleMaxHeight(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.MAX_WIDTH)
    public void setMaxWidth(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 4) {
                setStyleMaxWidthPercent(this.mTempYogaValue.value);
            }
        } else {
            setStyleMaxWidth(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.MIN_HEIGHT)
    public void setMinHeight(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 4) {
                setStyleMinHeightPercent(this.mTempYogaValue.value);
            }
        } else {
            setStyleMinHeight(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.MIN_WIDTH)
    public void setMinWidth(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 4) {
                setStyleMinWidthPercent(this.mTempYogaValue.value);
            }
        } else {
            setStyleMinWidth(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.OVERFLOW)
    public void setOverflow(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setOverflow(YogaOverflow.VISIBLE);
            return;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1217487446:
                if (str.equals(ViewProps.HIDDEN)) {
                    c10 = 0;
                    break;
                }
                break;
            case -907680051:
                if (str.equals(ViewProps.SCROLL)) {
                    c10 = 1;
                    break;
                }
                break;
            case 466743410:
                if (str.equals(ViewProps.VISIBLE)) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                setOverflow(YogaOverflow.HIDDEN);
                return;
            case 1:
                setOverflow(YogaOverflow.SCROLL);
                return;
            case 2:
                setOverflow(YogaOverflow.VISIBLE);
                return;
            default:
                p8.a.J(ReactConstants.TAG, "invalid value for overflow: " + str);
                setOverflow(YogaOverflow.VISIBLE);
                return;
        }
    }

    @ReactPropGroup(names = {"paddingBlock", "paddingBlockEnd", "paddingBlockStart"})
    public void setPaddingBlock(int i10, Dynamic dynamic) {
    }

    @ReactPropGroup(names = {"paddingInline", "paddingInlineEnd", "paddingInlineStart"})
    public void setPaddingInline(int i10, Dynamic dynamic) {
    }

    @ReactPropGroup(names = {ViewProps.PADDING, ViewProps.PADDING_VERTICAL, ViewProps.PADDING_HORIZONTAL, ViewProps.PADDING_START, ViewProps.PADDING_END, ViewProps.PADDING_TOP, ViewProps.PADDING_BOTTOM, ViewProps.PADDING_LEFT, ViewProps.PADDING_RIGHT})
    public void setPaddings(int i10, Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        int maybeTransformLeftRightToStartEnd = maybeTransformLeftRightToStartEnd(ViewProps.PADDING_MARGIN_SPACING_TYPES[i10]);
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i11 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i11 != 1 && i11 != 2) {
            if (i11 == 4) {
                mo910setPaddingPercent(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
            }
        } else {
            setPadding(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.POSITION)
    public void setPosition(String str) {
        if (isVirtual()) {
            return;
        }
        if (str == null) {
            setPositionType(YogaPositionType.RELATIVE);
        } else if (!str.equals("relative")) {
            if (!str.equals("absolute")) {
                p8.a.J(ReactConstants.TAG, "invalid value for position: " + str);
                setPositionType(YogaPositionType.RELATIVE);
                return;
            }
            setPositionType(YogaPositionType.ABSOLUTE);
        } else {
            setPositionType(YogaPositionType.RELATIVE);
        }
    }

    @ReactPropGroup(names = {ViewProps.START, ViewProps.END, ViewProps.LEFT, ViewProps.RIGHT, ViewProps.TOP, ViewProps.BOTTOM})
    public void setPositionValues(int i10, Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        int maybeTransformLeftRightToStartEnd = maybeTransformLeftRightToStartEnd(new int[]{4, 5, 0, 2, 1, 3}[i10]);
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i11 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i11 != 1 && i11 != 2) {
            if (i11 == 4) {
                setPositionPercent(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
            }
        } else {
            setPosition(maybeTransformLeftRightToStartEnd, this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @ReactProp(name = ViewProps.ROW_GAP)
    public void setRowGap(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 4) {
                setRowGapPercent(this.mTempYogaValue.value);
            }
        } else {
            setRowGap(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    @ReactProp(name = "onLayout")
    public void setShouldNotifyOnLayout(boolean z10) {
        super.setShouldNotifyOnLayout(z10);
    }

    @ReactProp(name = ViewProps.ON_POINTER_ENTER)
    public void setShouldNotifyPointerEnter(boolean z10) {
    }

    @ReactProp(name = ViewProps.ON_POINTER_LEAVE)
    public void setShouldNotifyPointerLeave(boolean z10) {
    }

    @ReactProp(name = ViewProps.ON_POINTER_MOVE)
    public void setShouldNotifyPointerMove(boolean z10) {
    }

    @ReactProp(name = "width")
    public void setWidth(Dynamic dynamic) {
        if (isVirtual()) {
            return;
        }
        this.mTempYogaValue.setFromDynamic(dynamic);
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$yoga$YogaUnit[this.mTempYogaValue.unit.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 == 4) {
                    setStyleWidthPercent(this.mTempYogaValue.value);
                }
            } else {
                setStyleWidthAuto();
            }
        } else {
            setStyleWidth(this.mTempYogaValue.value);
        }
        dynamic.recycle();
    }
}
