package com.facebook.react.views.text;

import android.graphics.Color;
import android.os.Build;
import android.text.Spannable;
import android.text.SpannableStringBuilder;
import android.text.TextUtils;
import android.text.style.LeadingMarginSpan;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactAccessibilityDelegate;
import com.facebook.react.uimanager.ReactShadowNode;
import com.facebook.react.uimanager.ReactShadowNodeImpl;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.internal.ReactTextInlineImageShadowNode;
import com.facebook.react.views.text.internal.span.CustomLetterSpacingSpan;
import com.facebook.react.views.text.internal.span.CustomLineHeightSpan;
import com.facebook.react.views.text.internal.span.CustomStyleSpan;
import com.facebook.react.views.text.internal.span.LinearGradientSpan;
import com.facebook.react.views.text.internal.span.ReactAbsoluteSizeSpan;
import com.facebook.react.views.text.internal.span.ReactBackgroundColorSpan;
import com.facebook.react.views.text.internal.span.ReactClickableSpan;
import com.facebook.react.views.text.internal.span.ReactForegroundColorSpan;
import com.facebook.react.views.text.internal.span.ReactSpan;
import com.facebook.react.views.text.internal.span.ReactStrikethroughSpan;
import com.facebook.react.views.text.internal.span.ReactTagSpan;
import com.facebook.react.views.text.internal.span.ReactUnderlineSpan;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.facebook.react.views.text.internal.span.ShadowStyleSpan;
import com.facebook.react.views.text.internal.span.StrokeStyleSpan;
import com.facebook.react.views.text.internal.span.TextInlineImageSpan;
import com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaUnit;
import com.facebook.yoga.YogaValue;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.FloatCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ReactBaseTextShadowNode extends LayoutShadowNode {
    public static final int DEFAULT_TEXT_SHADOW_COLOR = 1426063360;
    private static final String INLINE_VIEW_PLACEHOLDER = "0";
    public static final String PROP_SHADOW_COLOR = "textShadowColor";
    public static final String PROP_SHADOW_OFFSET = "textShadowOffset";
    public static final String PROP_SHADOW_OFFSET_HEIGHT = "height";
    public static final String PROP_SHADOW_OFFSET_WIDTH = "width";
    public static final String PROP_SHADOW_RADIUS = "textShadowRadius";
    public static final String PROP_TEXT_TRANSFORM = "textTransform";
    protected ReactAccessibilityDelegate.AccessibilityRole mAccessibilityRole;
    protected boolean mAdjustsFontSizeToFit;
    protected int mBackgroundColor;
    protected int mColor;
    protected boolean mContainsImages;
    protected String mFontFamily;
    protected String mFontFeatureSettings;
    protected int mFontStyle;
    protected int mFontWeight;
    protected float mGradientAngle;
    protected int[] mGradientColors;
    protected String mGradientMode;
    protected float mGradientWidth;
    protected int mHyphenationFrequency;
    protected boolean mIncludeFontPadding;
    protected Map<Integer, ReactShadowNode> mInlineViews;
    protected boolean mIsBackgroundColorSet;
    protected boolean mIsColorSet;
    protected boolean mIsLineThroughTextDecorationSet;
    protected boolean mIsTextStrokeColorSet;
    protected boolean mIsUnderlineTextDecorationSet;
    protected int mJustificationMode;
    protected float mMinimumFontScale;
    protected int mNumberOfLines;
    protected ReactTextViewManagerCallback mReactTextViewManagerCallback;
    protected ReactAccessibilityDelegate.Role mRole;
    protected int mTextAlign;
    protected TextAttributes mTextAttributes;
    protected int mTextBreakStrategy;
    protected int mTextShadowColor;
    protected float mTextShadowOffsetDx;
    protected float mTextShadowOffsetDy;
    protected float mTextShadowRadius;
    protected int mTextStrokeColor;
    protected float mTextStrokeWidth;

    public ReactBaseTextShadowNode() {
        this(null);
    }

    private static void buildSpannedFromShadowNode(ReactBaseTextShadowNode reactBaseTextShadowNode, SpannableStringBuilder spannableStringBuilder, List<SetSpanOperation> list, TextAttributes textAttributes, boolean z10, Map<Integer, ReactShadowNode> map, int i10) {
        TextAttributes textAttributes2;
        float f10;
        float layoutWidth;
        float layoutHeight;
        if (textAttributes != null) {
            textAttributes2 = textAttributes.applyChild(reactBaseTextShadowNode.mTextAttributes);
        } else {
            textAttributes2 = reactBaseTextShadowNode.mTextAttributes;
        }
        TextAttributes textAttributes3 = textAttributes2;
        int childCount = reactBaseTextShadowNode.getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            ReactShadowNodeImpl childAt = reactBaseTextShadowNode.getChildAt(i11);
            if (childAt instanceof ReactRawTextShadowNode) {
                String text = ((ReactRawTextShadowNode) childAt).getText();
                if (text != null) {
                    spannableStringBuilder.append((CharSequence) TextTransform.apply(text, textAttributes3.textTransform));
                }
            } else if (childAt instanceof ReactBaseTextShadowNode) {
                buildSpannedFromShadowNode((ReactBaseTextShadowNode) childAt, spannableStringBuilder, list, textAttributes3, z10, map, spannableStringBuilder.length());
            } else if (childAt instanceof ReactTextInlineImageShadowNode) {
                spannableStringBuilder.append(INLINE_VIEW_PLACEHOLDER);
                list.add(new SetSpanOperation(spannableStringBuilder.length() - 1, spannableStringBuilder.length(), ((ReactTextInlineImageShadowNode) childAt).buildInlineImageSpan()));
            } else if (z10) {
                int reactTag = childAt.getReactTag();
                YogaValue styleWidth = childAt.getStyleWidth();
                YogaValue styleHeight = childAt.getStyleHeight();
                YogaUnit yogaUnit = styleWidth.f12578b;
                YogaUnit yogaUnit2 = YogaUnit.POINT;
                if (yogaUnit == yogaUnit2 && styleHeight.f12578b == yogaUnit2) {
                    layoutWidth = styleWidth.f12577a;
                    layoutHeight = styleHeight.f12577a;
                } else {
                    childAt.calculateLayout();
                    layoutWidth = childAt.getLayoutWidth();
                    layoutHeight = childAt.getLayoutHeight();
                }
                spannableStringBuilder.append(INLINE_VIEW_PLACEHOLDER);
                list.add(new SetSpanOperation(spannableStringBuilder.length() - 1, spannableStringBuilder.length(), new TextInlineViewPlaceholderSpan(reactTag, (int) layoutWidth, (int) layoutHeight)));
                ((Map) db.a.c(map)).put(Integer.valueOf(reactTag), childAt);
            } else {
                throw new IllegalViewOperationException("Unexpected view type nested under a <Text> or <TextInput> node: " + childAt.getClass());
            }
            childAt.markUpdateSeen();
        }
        int length = spannableStringBuilder.length();
        if (length >= i10) {
            if (reactBaseTextShadowNode.mIsColorSet) {
                list.add(new SetSpanOperation(i10, length, new ReactForegroundColorSpan(reactBaseTextShadowNode.mColor)));
            }
            int[] iArr = reactBaseTextShadowNode.mGradientColors;
            if (iArr != null && iArr.length >= 2) {
                int effectiveFontSize = textAttributes3.getEffectiveFontSize();
                if (Float.isNaN(reactBaseTextShadowNode.mGradientAngle)) {
                    f10 = 0.0f;
                } else {
                    f10 = reactBaseTextShadowNode.mGradientAngle;
                }
                list.add(new SetSpanOperation(i10, length, new LinearGradientSpan(effectiveFontSize * i10, reactBaseTextShadowNode.mGradientColors, f10, reactBaseTextShadowNode.mGradientWidth, reactBaseTextShadowNode.mGradientMode)));
            }
            if (reactBaseTextShadowNode.mIsBackgroundColorSet) {
                list.add(new SetSpanOperation(i10, length, new ReactBackgroundColorSpan(reactBaseTextShadowNode.mBackgroundColor)));
            }
            ReactAccessibilityDelegate.Role role = reactBaseTextShadowNode.mRole;
            if (role == null ? reactBaseTextShadowNode.mAccessibilityRole == ReactAccessibilityDelegate.AccessibilityRole.LINK : role == ReactAccessibilityDelegate.Role.LINK) {
                list.add(new SetSpanOperation(i10, length, new ReactClickableSpan(reactBaseTextShadowNode.getReactTag())));
            }
            float effectiveLetterSpacing = textAttributes3.getEffectiveLetterSpacing();
            if (!Float.isNaN(effectiveLetterSpacing) && (textAttributes == null || textAttributes.getEffectiveLetterSpacing() != effectiveLetterSpacing)) {
                list.add(new SetSpanOperation(i10, length, new CustomLetterSpacingSpan(effectiveLetterSpacing)));
            }
            int effectiveFontSize2 = textAttributes3.getEffectiveFontSize();
            if (textAttributes == null || textAttributes.getEffectiveFontSize() != effectiveFontSize2) {
                list.add(new SetSpanOperation(i10, length, new ReactAbsoluteSizeSpan(effectiveFontSize2)));
            }
            if (reactBaseTextShadowNode.mFontStyle != -1 || reactBaseTextShadowNode.mFontWeight != -1 || reactBaseTextShadowNode.mFontFamily != null) {
                list.add(new SetSpanOperation(i10, length, new CustomStyleSpan(reactBaseTextShadowNode.mFontStyle, reactBaseTextShadowNode.mFontWeight, reactBaseTextShadowNode.mFontFeatureSettings, reactBaseTextShadowNode.mFontFamily, reactBaseTextShadowNode.getThemedContext().getAssets())));
            }
            if (reactBaseTextShadowNode.mIsUnderlineTextDecorationSet) {
                list.add(new SetSpanOperation(i10, length, new ReactUnderlineSpan()));
            }
            if (reactBaseTextShadowNode.mIsLineThroughTextDecorationSet) {
                list.add(new SetSpanOperation(i10, length, new ReactStrikethroughSpan()));
            }
            if ((reactBaseTextShadowNode.mTextShadowOffsetDx != 0.0f || reactBaseTextShadowNode.mTextShadowOffsetDy != 0.0f || reactBaseTextShadowNode.mTextShadowRadius != 0.0f) && Color.alpha(reactBaseTextShadowNode.mTextShadowColor) != 0) {
                list.add(new SetSpanOperation(i10, length, new ShadowStyleSpan(reactBaseTextShadowNode.mTextShadowOffsetDx, reactBaseTextShadowNode.mTextShadowOffsetDy, reactBaseTextShadowNode.mTextShadowRadius, reactBaseTextShadowNode.mTextShadowColor)));
            }
            if (!Float.isNaN(reactBaseTextShadowNode.mTextStrokeWidth) && reactBaseTextShadowNode.mTextStrokeWidth > 0.0f && reactBaseTextShadowNode.mIsTextStrokeColorSet) {
                list.add(new SetSpanOperation(i10, length, new StrokeStyleSpan(reactBaseTextShadowNode.mTextStrokeWidth, reactBaseTextShadowNode.mTextStrokeColor)));
            }
            float effectiveLineHeight = textAttributes3.getEffectiveLineHeight();
            if (!Float.isNaN(effectiveLineHeight) && (textAttributes == null || textAttributes.getEffectiveLineHeight() != effectiveLineHeight)) {
                list.add(new SetSpanOperation(i10, length, new CustomLineHeightSpan(effectiveLineHeight)));
            }
            list.add(new SetSpanOperation(i10, length, new ReactTagSpan(reactBaseTextShadowNode.getReactTag())));
        }
    }

    private int getTextAlign() {
        int i10 = this.mTextAlign;
        if (getLayoutDirection() == YogaDirection.RTL) {
            if (i10 == 5) {
                return 3;
            }
            if (i10 == 3) {
                return 5;
            }
        }
        return i10;
    }

    @ReactProp(name = ViewProps.ACCESSIBILITY_ROLE)
    public void setAccessibilityRole(String str) {
        if (isVirtual()) {
            this.mAccessibilityRole = ReactAccessibilityDelegate.AccessibilityRole.fromValue(str);
            markUpdated();
        }
    }

    @ReactProp(name = ViewProps.ADJUSTS_FONT_SIZE_TO_FIT)
    public void setAdjustFontSizeToFit(boolean z10) {
        if (z10 != this.mAdjustsFontSizeToFit) {
            this.mAdjustsFontSizeToFit = z10;
            markUpdated();
        }
    }

    @ReactProp(defaultBoolean = true, name = ViewProps.ALLOW_FONT_SCALING)
    public void setAllowFontScaling(boolean z10) {
        if (z10 != this.mTextAttributes.getAllowFontScaling()) {
            this.mTextAttributes.setAllowFontScaling(z10);
            markUpdated();
        }
    }

    @ReactProp(customType = "Color", name = ViewProps.BACKGROUND_COLOR)
    public void setBackgroundColor(Integer num) {
        if (isVirtual()) {
            if (num != null) {
                this.mIsBackgroundColorSet = true;
                this.mBackgroundColor = num.intValue();
            }
            markUpdated();
        }
    }

    @ReactProp(customType = "Color", name = ViewProps.COLOR)
    public void setColor(Integer num) {
        if (num != null) {
            this.mIsColorSet = true;
            this.mColor = num.intValue();
        }
        markUpdated();
    }

    @ReactProp(name = ViewProps.FONT_FAMILY)
    public void setFontFamily(String str) {
        this.mFontFamily = str;
        markUpdated();
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = ViewProps.FONT_SIZE)
    public void setFontSize(float f10) {
        this.mTextAttributes.setFontSize(f10);
        markUpdated();
    }

    @ReactProp(name = ViewProps.FONT_STYLE)
    public void setFontStyle(String str) {
        int parseFontStyle = ReactTypefaceUtils.parseFontStyle(str);
        if (parseFontStyle != this.mFontStyle) {
            this.mFontStyle = parseFontStyle;
            markUpdated();
        }
    }

    @ReactProp(name = ViewProps.FONT_VARIANT)
    public void setFontVariant(ReadableArray readableArray) {
        String parseFontVariant = ReactTypefaceUtils.parseFontVariant(readableArray);
        if (!TextUtils.equals(parseFontVariant, this.mFontFeatureSettings)) {
            this.mFontFeatureSettings = parseFontVariant;
            markUpdated();
        }
    }

    @ReactProp(name = ViewProps.FONT_WEIGHT)
    public void setFontWeight(String str) {
        int parseFontWeight = ReactTypefaceUtils.parseFontWeight(str);
        if (parseFontWeight != this.mFontWeight) {
            this.mFontWeight = parseFontWeight;
            markUpdated();
        }
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = "gradientAngle")
    public void setGradientAngle(float f10) {
        this.mGradientAngle = f10;
        markUpdated();
    }

    @ReactProp(name = "gradientColors")
    public void setGradientColors(ReadableArray readableArray) {
        if (readableArray != null) {
            ArrayList arrayList = new ArrayList();
            for (int i10 = 0; i10 < readableArray.size(); i10++) {
                if (!readableArray.isNull(i10) && readableArray.getType(i10) == ReadableType.Number) {
                    arrayList.add(Integer.valueOf(readableArray.getInt(i10)));
                }
            }
            int size = arrayList.size();
            if (size >= 2) {
                int[] iArr = new int[size];
                for (int i11 = 0; i11 < size; i11++) {
                    iArr[i11] = ((Integer) arrayList.get(i11)).intValue();
                }
                this.mGradientColors = iArr;
            }
        }
    }

    @ReactProp(name = "gradientMode")
    public void setGradientMode(String str) {
        this.mGradientMode = str;
        markUpdated();
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = "gradientWidth")
    public void setGradientWidth(float f10) {
        this.mGradientWidth = f10;
        markUpdated();
    }

    @ReactProp(defaultBoolean = true, name = ViewProps.INCLUDE_FONT_PADDING)
    public void setIncludeFontPadding(boolean z10) {
        this.mIncludeFontPadding = z10;
    }

    @ReactProp(defaultFloat = 0.0f, name = ViewProps.LETTER_SPACING)
    public void setLetterSpacing(float f10) {
        this.mTextAttributes.setLetterSpacing(f10);
        markUpdated();
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = ViewProps.LINE_HEIGHT)
    public void setLineHeight(float f10) {
        this.mTextAttributes.setLineHeight(f10);
        markUpdated();
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = ViewProps.MAX_FONT_SIZE_MULTIPLIER)
    public void setMaxFontSizeMultiplier(float f10) {
        if (f10 != this.mTextAttributes.getMaxFontSizeMultiplier()) {
            this.mTextAttributes.setMaxFontSizeMultiplier(f10);
            markUpdated();
        }
    }

    @ReactProp(name = ViewProps.MINIMUM_FONT_SCALE)
    public void setMinimumFontScale(float f10) {
        if (f10 != this.mMinimumFontScale) {
            this.mMinimumFontScale = f10;
            markUpdated();
        }
    }

    @ReactProp(defaultInt = -1, name = ViewProps.NUMBER_OF_LINES)
    public void setNumberOfLines(int i10) {
        if (i10 == 0) {
            i10 = -1;
        }
        this.mNumberOfLines = i10;
        markUpdated();
    }

    @ReactProp(name = ViewProps.ROLE)
    public void setRole(String str) {
        if (isVirtual()) {
            this.mRole = ReactAccessibilityDelegate.Role.fromValue(str);
            markUpdated();
        }
    }

    @ReactProp(name = ViewProps.TEXT_ALIGN)
    public void setTextAlign(String str) {
        if ("justify".equals(str)) {
            if (Build.VERSION.SDK_INT >= 26) {
                this.mJustificationMode = 1;
            }
            this.mTextAlign = 3;
        } else {
            if (Build.VERSION.SDK_INT >= 26) {
                this.mJustificationMode = 0;
            }
            if (str != null && !"auto".equals(str)) {
                if (ViewProps.LEFT.equals(str)) {
                    this.mTextAlign = 3;
                } else if (ViewProps.RIGHT.equals(str)) {
                    this.mTextAlign = 5;
                } else if ("center".equals(str)) {
                    this.mTextAlign = 1;
                } else {
                    p8.a.J(ReactConstants.TAG, "Invalid textAlign: " + str);
                    this.mTextAlign = 0;
                }
            } else {
                this.mTextAlign = 0;
            }
        }
        markUpdated();
    }

    @ReactProp(name = ViewProps.TEXT_BREAK_STRATEGY)
    public void setTextBreakStrategy(String str) {
        if (str != null && !"highQuality".equals(str)) {
            if ("simple".equals(str)) {
                this.mTextBreakStrategy = 0;
            } else if ("balanced".equals(str)) {
                this.mTextBreakStrategy = 2;
            } else {
                p8.a.J(ReactConstants.TAG, "Invalid textBreakStrategy: " + str);
                this.mTextBreakStrategy = 1;
            }
        } else {
            this.mTextBreakStrategy = 1;
        }
        markUpdated();
    }

    @ReactProp(name = ViewProps.TEXT_DECORATION_LINE)
    public void setTextDecorationLine(String str) {
        String[] split;
        this.mIsUnderlineTextDecorationSet = false;
        this.mIsLineThroughTextDecorationSet = false;
        if (str != null) {
            for (String str2 : str.split(" ")) {
                if ("underline".equals(str2)) {
                    this.mIsUnderlineTextDecorationSet = true;
                } else if ("line-through".equals(str2)) {
                    this.mIsLineThroughTextDecorationSet = true;
                }
            }
        }
        markUpdated();
    }

    @ReactProp(customType = "Color", defaultInt = DEFAULT_TEXT_SHADOW_COLOR, name = PROP_SHADOW_COLOR)
    public void setTextShadowColor(int i10) {
        if (i10 != this.mTextShadowColor) {
            this.mTextShadowColor = i10;
            markUpdated();
        }
    }

    @ReactProp(name = PROP_SHADOW_OFFSET)
    public void setTextShadowOffset(ReadableMap readableMap) {
        this.mTextShadowOffsetDx = 0.0f;
        this.mTextShadowOffsetDy = 0.0f;
        if (readableMap != null) {
            if (readableMap.hasKey("width") && !readableMap.isNull("width")) {
                this.mTextShadowOffsetDx = PixelUtil.toPixelFromDIP(readableMap.getDouble("width"));
            }
            if (readableMap.hasKey("height") && !readableMap.isNull("height")) {
                this.mTextShadowOffsetDy = PixelUtil.toPixelFromDIP(readableMap.getDouble("height"));
            }
        }
        markUpdated();
    }

    @ReactProp(defaultInt = 1, name = PROP_SHADOW_RADIUS)
    public void setTextShadowRadius(float f10) {
        if (f10 != this.mTextShadowRadius) {
            this.mTextShadowRadius = f10;
            markUpdated();
        }
    }

    @ReactProp(customType = "Color", name = "textStrokeColor")
    public void setTextStrokeColor(int i10) {
        if (i10 != this.mTextStrokeColor) {
            this.mTextStrokeColor = i10;
            this.mIsTextStrokeColorSet = true;
            markUpdated();
        }
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = "textStrokeWidth")
    public void setTextStrokeWidth(float f10) {
        if (f10 != this.mTextStrokeWidth) {
            this.mTextStrokeWidth = f10;
            markUpdated();
        }
    }

    @ReactProp(name = PROP_TEXT_TRANSFORM)
    public void setTextTransform(String str) {
        TextTransform textTransform = TextTransform.UNSET;
        if (str != null) {
            if (ViewProps.NONE.equals(str)) {
                textTransform = TextTransform.NONE;
            } else if ("uppercase".equals(str)) {
                textTransform = TextTransform.UPPERCASE;
            } else if ("lowercase".equals(str)) {
                textTransform = TextTransform.LOWERCASE;
            } else if ("capitalize".equals(str)) {
                textTransform = TextTransform.CAPITALIZE;
            } else {
                p8.a.J(ReactConstants.TAG, "Invalid textTransform: " + str);
            }
        }
        this.mTextAttributes.textTransform = textTransform;
        markUpdated();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Spannable spannedFromShadowNode(ReactBaseTextShadowNode reactBaseTextShadowNode, String str, boolean z10, NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        boolean z11;
        HashMap hashMap;
        float f10;
        int i10;
        if (z10 && nativeViewHierarchyOptimizer == null) {
            z11 = false;
        } else {
            z11 = true;
        }
        db.a.b(z11, "nativeViewHierarchyOptimizer is required when inline views are supported");
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
        ArrayList arrayList = new ArrayList();
        if (z10) {
            hashMap = new HashMap();
        } else {
            hashMap = null;
        }
        HashMap hashMap2 = hashMap;
        if (str != null) {
            spannableStringBuilder.append((CharSequence) TextTransform.apply(str, reactBaseTextShadowNode.mTextAttributes.textTransform));
        }
        buildSpannedFromShadowNode(reactBaseTextShadowNode, spannableStringBuilder, arrayList, null, z10, hashMap2, 0);
        reactBaseTextShadowNode.mContainsImages = false;
        reactBaseTextShadowNode.mInlineViews = hashMap2;
        float f11 = Float.NaN;
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            SetSpanOperation setSpanOperation = (SetSpanOperation) arrayList.get((arrayList.size() - i11) - 1);
            ReactSpan reactSpan = setSpanOperation.what;
            boolean z12 = reactSpan instanceof TextInlineImageSpan;
            if (z12 || (reactSpan instanceof TextInlineViewPlaceholderSpan)) {
                if (z12) {
                    i10 = ((TextInlineImageSpan) reactSpan).getHeight();
                    reactBaseTextShadowNode.mContainsImages = true;
                } else {
                    TextInlineViewPlaceholderSpan textInlineViewPlaceholderSpan = (TextInlineViewPlaceholderSpan) reactSpan;
                    int height = textInlineViewPlaceholderSpan.getHeight();
                    ReactShadowNode reactShadowNode = (ReactShadowNode) ((Map) db.a.c(hashMap2)).get(Integer.valueOf(textInlineViewPlaceholderSpan.getReactTag()));
                    db.a.c(reactShadowNode);
                    db.a.c(nativeViewHierarchyOptimizer);
                    nativeViewHierarchyOptimizer.handleForceViewToBeNonLayoutOnly(reactShadowNode);
                    reactShadowNode.setLayoutParent(reactBaseTextShadowNode);
                    i10 = height;
                }
                if (Float.isNaN(f11) || i10 > f11) {
                    f11 = i10;
                }
            }
            setSpanOperation.execute(spannableStringBuilder, i11);
        }
        reactBaseTextShadowNode.mTextAttributes.setHeightOfTallestInlineViewOrImage(f11);
        StrokeStyleSpan strokeSpan = StrokeStyleSpan.getStrokeSpan(spannableStringBuilder);
        ShadowStyleSpan shadowSpan = ShadowStyleSpan.getShadowSpan(spannableStringBuilder);
        float f12 = 0.0f;
        if (strokeSpan != null) {
            f10 = strokeSpan.getLeftOffset();
        } else {
            f10 = 0.0f;
        }
        if (shadowSpan != null) {
            f12 = shadowSpan.getLeftOffset();
        }
        int max = (int) Math.max(f10, f12);
        if (max > 0) {
            spannableStringBuilder.setSpan(new LeadingMarginSpan.Standard(max), 0, spannableStringBuilder.length(), 18);
        }
        ReactTextViewManagerCallback reactTextViewManagerCallback = this.mReactTextViewManagerCallback;
        if (reactTextViewManagerCallback != null) {
            reactTextViewManagerCallback.onPostProcessSpannable(spannableStringBuilder);
        }
        return spannableStringBuilder;
    }

    public ReactBaseTextShadowNode(ReactTextViewManagerCallback reactTextViewManagerCallback) {
        this.mIsColorSet = false;
        this.mIsBackgroundColorSet = false;
        this.mGradientColors = null;
        this.mGradientAngle = Float.NaN;
        this.mGradientWidth = Float.NaN;
        this.mGradientMode = null;
        this.mAccessibilityRole = null;
        this.mRole = null;
        this.mNumberOfLines = -1;
        this.mTextAlign = 0;
        this.mTextBreakStrategy = 1;
        this.mHyphenationFrequency = 0;
        this.mJustificationMode = 0;
        this.mTextShadowOffsetDx = 0.0f;
        this.mTextShadowOffsetDy = 0.0f;
        this.mTextShadowRadius = 0.0f;
        this.mTextShadowColor = DEFAULT_TEXT_SHADOW_COLOR;
        this.mTextStrokeWidth = Float.NaN;
        this.mIsTextStrokeColorSet = false;
        this.mIsUnderlineTextDecorationSet = false;
        this.mIsLineThroughTextDecorationSet = false;
        this.mIncludeFontPadding = true;
        this.mAdjustsFontSizeToFit = false;
        this.mMinimumFontScale = 0.0f;
        this.mFontStyle = -1;
        this.mFontWeight = -1;
        this.mFontFamily = null;
        this.mFontFeatureSettings = null;
        this.mContainsImages = false;
        this.mTextAttributes = new TextAttributes();
        this.mReactTextViewManagerCallback = reactTextViewManagerCallback;
    }
}
