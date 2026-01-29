package com.facebook.react.views.text;

import android.os.Build;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactAccessibilityDelegate;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.function.ToIntFunction;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TextAttributeProps {
    private static final int DEFAULT_BREAK_STRATEGY = 1;
    private static final int DEFAULT_HYPHENATION_FREQUENCY = 0;
    private static final int DEFAULT_JUSTIFICATION_MODE = 0;
    private static final int DEFAULT_TEXT_SHADOW_COLOR = 1426063360;
    private static final String PROP_SHADOW_COLOR = "textShadowColor";
    private static final String PROP_SHADOW_OFFSET = "textShadowOffset";
    private static final String PROP_SHADOW_OFFSET_HEIGHT = "height";
    private static final String PROP_SHADOW_OFFSET_WIDTH = "width";
    private static final String PROP_SHADOW_RADIUS = "textShadowRadius";
    private static final String PROP_TEXT_TRANSFORM = "textTransform";
    public static final short TA_KEY_ACCESSIBILITY_ROLE = 24;
    public static final short TA_KEY_ALIGNMENT = 12;
    public static final short TA_KEY_ALLOW_FONT_SCALING = 9;
    public static final short TA_KEY_BACKGROUND_COLOR = 1;
    public static final short TA_KEY_BEST_WRITING_DIRECTION = 13;
    public static final short TA_KEY_FONT_FAMILY = 3;
    public static final short TA_KEY_FONT_SIZE = 4;
    public static final short TA_KEY_FONT_SIZE_MULTIPLIER = 5;
    public static final short TA_KEY_FONT_STYLE = 7;
    public static final short TA_KEY_FONT_VARIANT = 8;
    public static final short TA_KEY_FONT_WEIGHT = 6;
    public static final short TA_KEY_FOREGROUND_COLOR = 0;
    public static final short TA_KEY_GRADIENT_ANGLE = 33;
    public static final short TA_KEY_GRADIENT_COLORS = 30;
    public static final short TA_KEY_GRADIENT_MODE = 35;
    public static final short TA_KEY_GRADIENT_WIDTH = 34;
    public static final short TA_KEY_IS_HIGHLIGHTED = 22;
    public static final short TA_KEY_LAYOUT_DIRECTION = 23;
    public static final short TA_KEY_LETTER_SPACING = 10;
    public static final short TA_KEY_LINE_BREAK_STRATEGY = 25;
    public static final short TA_KEY_LINE_HEIGHT = 11;
    public static final short TA_KEY_MAX_FONT_SIZE_MULTIPLIER = 29;
    public static final short TA_KEY_OPACITY = 2;
    public static final short TA_KEY_ROLE = 26;
    public static final short TA_KEY_TEXT_DECORATION_COLOR = 14;
    public static final short TA_KEY_TEXT_DECORATION_LINE = 15;
    public static final short TA_KEY_TEXT_DECORATION_STYLE = 16;
    public static final short TA_KEY_TEXT_SHADOW_COLOR = 19;
    public static final short TA_KEY_TEXT_SHADOW_OFFSET_DX = 20;
    public static final short TA_KEY_TEXT_SHADOW_OFFSET_DY = 21;
    public static final short TA_KEY_TEXT_SHADOW_RADIUS = 18;
    public static final short TA_KEY_TEXT_STROKE_COLOR = 32;
    public static final short TA_KEY_TEXT_STROKE_WIDTH = 31;
    public static final short TA_KEY_TEXT_TRANSFORM = 27;
    public static final int UNSET = -1;
    protected int mBackgroundColor;
    protected int mColor;
    protected int mTextStrokeColor;
    protected float mLineHeight = Float.NaN;
    protected boolean mIsColorSet = false;
    protected boolean mAllowFontScaling = true;
    protected float mMaxFontSizeMultiplier = Float.NaN;
    protected boolean mIsBackgroundColorSet = false;
    protected float mOpacity = Float.NaN;
    protected int mNumberOfLines = -1;
    protected int mFontSize = -1;
    protected float mFontSizeInput = -1.0f;
    protected float mLineHeightInput = -1.0f;
    protected float mLetterSpacingInput = Float.NaN;
    protected int mTextAlign = 0;
    protected int mLayoutDirection = -1;
    @NonNull
    protected TextTransform mTextTransform = TextTransform.NONE;
    protected float mTextShadowOffsetDx = 0.0f;
    protected float mTextShadowOffsetDy = 0.0f;
    protected float mTextShadowRadius = 0.0f;
    protected int mTextShadowColor = 1426063360;
    protected float mTextStrokeWidth = Float.NaN;
    protected boolean mIsTextStrokeColorSet = false;
    protected boolean mIsUnderlineTextDecorationSet = false;
    protected boolean mIsLineThroughTextDecorationSet = false;
    protected boolean mIncludeFontPadding = true;
    protected ReactAccessibilityDelegate.AccessibilityRole mAccessibilityRole = null;
    protected ReactAccessibilityDelegate.Role mRole = null;
    protected int mFontStyle = -1;
    protected int mFontWeight = -1;
    protected String mFontFamily = null;
    protected String mFontFeatureSettings = null;
    protected boolean mContainsImages = false;
    protected float mHeightOfTallestInlineImage = Float.NaN;
    protected int[] mGradientColors = null;
    protected float mGradientAngle = Float.NaN;
    protected float mGradientWidth = Float.NaN;
    protected String mGradientMode = null;

    private TextAttributeProps() {
    }

    public static TextAttributeProps fromMapBuffer(MapBuffer mapBuffer) {
        TextAttributeProps textAttributeProps = new TextAttributeProps();
        for (MapBuffer.Entry entry : mapBuffer) {
            switch (entry.getKey()) {
                case 0:
                    textAttributeProps.setColor(Integer.valueOf(entry.getIntValue()));
                    break;
                case 1:
                    textAttributeProps.setBackgroundColor(Integer.valueOf(entry.getIntValue()));
                    break;
                case 2:
                    textAttributeProps.setOpacity((float) entry.getDoubleValue());
                    break;
                case 3:
                    textAttributeProps.setFontFamily(entry.getStringValue());
                    break;
                case 4:
                    textAttributeProps.setFontSize((float) entry.getDoubleValue());
                    break;
                case 6:
                    textAttributeProps.setFontWeight(entry.getStringValue());
                    break;
                case 7:
                    textAttributeProps.setFontStyle(entry.getStringValue());
                    break;
                case 8:
                    textAttributeProps.setFontVariant(entry.getMapBufferValue());
                    break;
                case 9:
                    textAttributeProps.setAllowFontScaling(entry.getBooleanValue());
                    break;
                case 10:
                    textAttributeProps.setLetterSpacing((float) entry.getDoubleValue());
                    break;
                case 11:
                    textAttributeProps.setLineHeight((float) entry.getDoubleValue());
                    break;
                case 15:
                    textAttributeProps.setTextDecorationLine(entry.getStringValue());
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    textAttributeProps.setTextShadowRadius((float) entry.getDoubleValue());
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    textAttributeProps.setTextShadowColor(entry.getIntValue());
                    break;
                case 20:
                    textAttributeProps.setTextShadowOffsetDx((float) entry.getDoubleValue());
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    textAttributeProps.setTextShadowOffsetDy((float) entry.getDoubleValue());
                    break;
                case 23:
                    textAttributeProps.setLayoutDirection(entry.getStringValue());
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    textAttributeProps.setAccessibilityRole(entry.getStringValue());
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    textAttributeProps.setRole(ReactAccessibilityDelegate.Role.values()[entry.getIntValue()]);
                    break;
                case 27:
                    textAttributeProps.setTextTransform(entry.getStringValue());
                    break;
                case 29:
                    textAttributeProps.setMaxFontSizeMultiplier((float) entry.getDoubleValue());
                    break;
                case 30:
                    textAttributeProps.setGradientColors(entry.getMapBufferValue());
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    textAttributeProps.setTextStrokeWidth((float) entry.getDoubleValue());
                    break;
                case 32:
                    textAttributeProps.setTextStrokeColor(entry.getIntValue());
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    textAttributeProps.setGradientAngle((float) entry.getDoubleValue());
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    textAttributeProps.setGradientWidth((float) entry.getDoubleValue());
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    textAttributeProps.setGradientMode(entry.getStringValue());
                    break;
            }
        }
        return textAttributeProps;
    }

    public static TextAttributeProps fromReadableMap(ReactStylesDiffMap reactStylesDiffMap) {
        Integer num;
        Integer num2;
        Integer num3;
        TextAttributeProps textAttributeProps = new TextAttributeProps();
        textAttributeProps.setNumberOfLines(getIntProp(reactStylesDiffMap, ViewProps.NUMBER_OF_LINES, -1));
        textAttributeProps.setLineHeight(getFloatProp(reactStylesDiffMap, ViewProps.LINE_HEIGHT, -1.0f));
        textAttributeProps.setLetterSpacing(getFloatProp(reactStylesDiffMap, ViewProps.LETTER_SPACING, Float.NaN));
        textAttributeProps.setAllowFontScaling(getBooleanProp(reactStylesDiffMap, ViewProps.ALLOW_FONT_SCALING, true));
        textAttributeProps.setMaxFontSizeMultiplier(getFloatProp(reactStylesDiffMap, ViewProps.MAX_FONT_SIZE_MULTIPLIER, Float.NaN));
        textAttributeProps.setFontSize(getFloatProp(reactStylesDiffMap, ViewProps.FONT_SIZE, -1.0f));
        ReadableMap readableMap = null;
        if (reactStylesDiffMap.hasKey(ViewProps.COLOR)) {
            num = Integer.valueOf(reactStylesDiffMap.getInt(ViewProps.COLOR, 0));
        } else {
            num = null;
        }
        textAttributeProps.setColor(num);
        if (reactStylesDiffMap.hasKey(ViewProps.FOREGROUND_COLOR)) {
            num2 = Integer.valueOf(reactStylesDiffMap.getInt(ViewProps.FOREGROUND_COLOR, 0));
        } else {
            num2 = null;
        }
        textAttributeProps.setColor(num2);
        if (reactStylesDiffMap.hasKey(ViewProps.BACKGROUND_COLOR)) {
            num3 = Integer.valueOf(reactStylesDiffMap.getInt(ViewProps.BACKGROUND_COLOR, 0));
        } else {
            num3 = null;
        }
        textAttributeProps.setBackgroundColor(num3);
        textAttributeProps.setOpacity(getFloatProp(reactStylesDiffMap, ViewProps.OPACITY, Float.NaN));
        textAttributeProps.setFontFamily(getStringProp(reactStylesDiffMap, ViewProps.FONT_FAMILY));
        textAttributeProps.setFontWeight(getStringProp(reactStylesDiffMap, ViewProps.FONT_WEIGHT));
        textAttributeProps.setFontStyle(getStringProp(reactStylesDiffMap, ViewProps.FONT_STYLE));
        textAttributeProps.setFontVariant(getArrayProp(reactStylesDiffMap, ViewProps.FONT_VARIANT));
        textAttributeProps.setIncludeFontPadding(getBooleanProp(reactStylesDiffMap, ViewProps.INCLUDE_FONT_PADDING, true));
        textAttributeProps.setTextDecorationLine(getStringProp(reactStylesDiffMap, ViewProps.TEXT_DECORATION_LINE));
        if (reactStylesDiffMap.hasKey("textShadowOffset")) {
            readableMap = reactStylesDiffMap.getMap("textShadowOffset");
        }
        textAttributeProps.setTextShadowOffset(readableMap);
        textAttributeProps.setTextShadowRadius(getFloatProp(reactStylesDiffMap, "textShadowRadius", 1.0f));
        textAttributeProps.setTextShadowColor(getIntProp(reactStylesDiffMap, "textShadowColor", 1426063360));
        textAttributeProps.setTextTransform(getStringProp(reactStylesDiffMap, "textTransform"));
        textAttributeProps.setLayoutDirection(getStringProp(reactStylesDiffMap, ViewProps.LAYOUT_DIRECTION));
        textAttributeProps.setAccessibilityRole(getStringProp(reactStylesDiffMap, ViewProps.ACCESSIBILITY_ROLE));
        textAttributeProps.setRole(getStringProp(reactStylesDiffMap, ViewProps.ROLE));
        textAttributeProps.setGradientColors(getArrayProp(reactStylesDiffMap, "gradientColors"));
        textAttributeProps.setGradientAngle(getFloatProp(reactStylesDiffMap, "gradientAngle", Float.NaN));
        textAttributeProps.setGradientWidth(getFloatProp(reactStylesDiffMap, "gradientWidth", Float.NaN));
        textAttributeProps.setGradientMode(getStringProp(reactStylesDiffMap, "gradientMode"));
        textAttributeProps.setTextStrokeWidth(getFloatProp(reactStylesDiffMap, "textStrokeWidth", Float.NaN));
        if (reactStylesDiffMap.hasKey("textStrokeColor")) {
            textAttributeProps.setTextStrokeColor(reactStylesDiffMap.getInt("textStrokeColor", 0));
        }
        return textAttributeProps;
    }

    private static ReadableArray getArrayProp(ReactStylesDiffMap reactStylesDiffMap, String str) {
        if (reactStylesDiffMap.hasKey(str)) {
            return reactStylesDiffMap.getArray(str);
        }
        return null;
    }

    private static boolean getBooleanProp(ReactStylesDiffMap reactStylesDiffMap, String str, boolean z10) {
        if (reactStylesDiffMap.hasKey(str)) {
            return reactStylesDiffMap.getBoolean(str, z10);
        }
        return z10;
    }

    public static TextUtils.TruncateAt getEllipsizeMode(String str) {
        if (str != null) {
            char c10 = 65535;
            switch (str.hashCode()) {
                case -1074341483:
                    if (str.equals("middle")) {
                        c10 = 0;
                        break;
                    }
                    break;
                case 3056464:
                    if (str.equals("clip")) {
                        c10 = 1;
                        break;
                    }
                    break;
                case 3198432:
                    if (str.equals("head")) {
                        c10 = 2;
                        break;
                    }
                    break;
                case 3552336:
                    if (str.equals("tail")) {
                        c10 = 3;
                        break;
                    }
                    break;
            }
            switch (c10) {
                case 0:
                    return TextUtils.TruncateAt.MIDDLE;
                case 1:
                    return null;
                case 2:
                    return TextUtils.TruncateAt.START;
                case 3:
                    return TextUtils.TruncateAt.END;
            }
        }
        return null;
    }

    private static float getFloatProp(ReactStylesDiffMap reactStylesDiffMap, String str, float f10) {
        if (reactStylesDiffMap.hasKey(str)) {
            return reactStylesDiffMap.getFloat(str, f10);
        }
        return f10;
    }

    public static int getHyphenationFrequency(String str) {
        if (str == null) {
            return 0;
        }
        if (!str.equals("normal")) {
            if (str.equals(ViewProps.NONE)) {
                return 0;
            }
            return 2;
        }
        return 1;
    }

    private static int getIntProp(ReactStylesDiffMap reactStylesDiffMap, String str, int i10) {
        if (reactStylesDiffMap.hasKey(str)) {
            return reactStylesDiffMap.getInt(str, i10);
        }
        return i10;
    }

    public static int getJustificationMode(ReactStylesDiffMap reactStylesDiffMap, int i10) {
        if (!reactStylesDiffMap.hasKey(ViewProps.TEXT_ALIGN)) {
            return i10;
        }
        if ("justify".equals(reactStylesDiffMap.getString(ViewProps.TEXT_ALIGN)) && Build.VERSION.SDK_INT >= 26) {
            return 1;
        }
        return DEFAULT_JUSTIFICATION_MODE;
    }

    public static int getLayoutDirection(String str) {
        if (str != null && !"undefined".equals(str)) {
            if ("rtl".equals(str)) {
                return 1;
            }
            if ("ltr".equals(str)) {
                return 0;
            }
            p8.a.J(ReactConstants.TAG, "Invalid layoutDirection: " + str);
        }
        return -1;
    }

    private static String getStringProp(ReactStylesDiffMap reactStylesDiffMap, String str) {
        if (reactStylesDiffMap.hasKey(str)) {
            return reactStylesDiffMap.getString(str);
        }
        return null;
    }

    public static int getTextAlignment(ReactStylesDiffMap reactStylesDiffMap, boolean z10, int i10) {
        if (!reactStylesDiffMap.hasKey(ViewProps.TEXT_ALIGN)) {
            return i10;
        }
        String string = reactStylesDiffMap.getString(ViewProps.TEXT_ALIGN);
        if ("justify".equals(string)) {
            return 3;
        }
        if (string != null && !"auto".equals(string)) {
            if (ViewProps.LEFT.equals(string)) {
                if (!z10) {
                    return 3;
                }
                return 5;
            } else if (ViewProps.RIGHT.equals(string)) {
                if (z10) {
                    return 3;
                }
                return 5;
            } else if ("center".equals(string)) {
                return 1;
            } else {
                p8.a.J(ReactConstants.TAG, "Invalid textAlign: " + string);
            }
        }
        return 0;
    }

    public static int getTextBreakStrategy(String str) {
        if (str == null) {
            return 1;
        }
        if (!str.equals("balanced")) {
            if (!str.equals("simple")) {
                return 1;
            }
            return 0;
        }
        return 2;
    }

    private void setAccessibilityRole(String str) {
        if (str == null) {
            this.mAccessibilityRole = null;
        } else {
            this.mAccessibilityRole = ReactAccessibilityDelegate.AccessibilityRole.fromValue(str);
        }
    }

    private void setAllowFontScaling(boolean z10) {
        if (z10 != this.mAllowFontScaling) {
            this.mAllowFontScaling = z10;
            setFontSize(this.mFontSizeInput);
            setLineHeight(this.mLineHeightInput);
        }
    }

    private void setBackgroundColor(Integer num) {
        boolean z10;
        if (num != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.mIsBackgroundColorSet = z10;
        if (num != null) {
            this.mBackgroundColor = num.intValue();
        }
    }

    private void setColor(Integer num) {
        boolean z10;
        if (num != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.mIsColorSet = z10;
        if (num != null) {
            this.mColor = num.intValue();
        }
    }

    private void setFontFamily(String str) {
        this.mFontFamily = str;
    }

    private void setFontSize(float f10) {
        double ceil;
        this.mFontSizeInput = f10;
        if (f10 != -1.0f) {
            if (this.mAllowFontScaling) {
                ceil = Math.ceil(PixelUtil.toPixelFromSP(f10, this.mMaxFontSizeMultiplier));
            } else {
                ceil = Math.ceil(PixelUtil.toPixelFromDIP(f10));
            }
            f10 = (float) ceil;
        }
        this.mFontSize = (int) f10;
    }

    private void setFontStyle(String str) {
        this.mFontStyle = ReactTypefaceUtils.parseFontStyle(str);
    }

    private void setFontVariant(ReadableArray readableArray) {
        this.mFontFeatureSettings = ReactTypefaceUtils.parseFontVariant(readableArray);
    }

    private void setFontWeight(String str) {
        this.mFontWeight = ReactTypefaceUtils.parseFontWeight(str);
    }

    private void setGradientAngle(float f10) {
        this.mGradientAngle = f10;
    }

    private void setGradientColors(ReadableArray readableArray) {
        if (readableArray == null) {
            return;
        }
        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int i10 = 0; i10 < readableArray.size(); i10++) {
            if (!readableArray.isNull(i10) && readableArray.getType(i10) == ReadableType.Number) {
                arrayList.add(Integer.valueOf(readableArray.getInt(i10)));
            }
        }
        setGradientColorsFromList(arrayList);
    }

    private void setGradientColorsFromList(ArrayList<Integer> arrayList) {
        if (arrayList.size() >= 2) {
            this.mGradientColors = arrayList.stream().mapToInt(new ToIntFunction() { // from class: com.facebook.react.views.text.e
                @Override // java.util.function.ToIntFunction
                public final int applyAsInt(Object obj) {
                    return ((Integer) obj).intValue();
                }
            }).toArray();
        }
    }

    private void setGradientMode(String str) {
        this.mGradientMode = str;
    }

    private void setGradientWidth(float f10) {
        this.mGradientWidth = f10;
    }

    private void setIncludeFontPadding(boolean z10) {
        this.mIncludeFontPadding = z10;
    }

    private void setLayoutDirection(String str) {
        this.mLayoutDirection = getLayoutDirection(str);
    }

    private void setLetterSpacing(float f10) {
        this.mLetterSpacingInput = f10;
    }

    private void setLineHeight(float f10) {
        float pixelFromDIP;
        this.mLineHeightInput = f10;
        if (f10 == -1.0f) {
            this.mLineHeight = Float.NaN;
            return;
        }
        if (this.mAllowFontScaling) {
            pixelFromDIP = PixelUtil.toPixelFromSP(f10);
        } else {
            pixelFromDIP = PixelUtil.toPixelFromDIP(f10);
        }
        this.mLineHeight = pixelFromDIP;
    }

    private void setMaxFontSizeMultiplier(float f10) {
        if (f10 != this.mMaxFontSizeMultiplier) {
            this.mMaxFontSizeMultiplier = f10;
            setFontSize(this.mFontSizeInput);
            setLineHeight(this.mLineHeightInput);
        }
    }

    private void setNumberOfLines(int i10) {
        if (i10 == 0) {
            i10 = -1;
        }
        this.mNumberOfLines = i10;
    }

    private void setOpacity(float f10) {
        this.mOpacity = f10;
    }

    private void setRole(String str) {
        if (str == null) {
            this.mRole = null;
        } else {
            this.mRole = ReactAccessibilityDelegate.Role.fromValue(str);
        }
    }

    private void setTextDecorationLine(String str) {
        String[] split;
        this.mIsUnderlineTextDecorationSet = false;
        this.mIsLineThroughTextDecorationSet = false;
        if (str != null) {
            for (String str2 : str.split("-")) {
                if ("underline".equals(str2)) {
                    this.mIsUnderlineTextDecorationSet = true;
                } else if ("strikethrough".equals(str2)) {
                    this.mIsLineThroughTextDecorationSet = true;
                }
            }
        }
    }

    private void setTextShadowColor(int i10) {
        if (i10 != this.mTextShadowColor) {
            this.mTextShadowColor = i10;
        }
    }

    private void setTextShadowOffset(ReadableMap readableMap) {
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
    }

    private void setTextShadowOffsetDx(float f10) {
        this.mTextShadowOffsetDx = PixelUtil.toPixelFromDIP(f10);
    }

    private void setTextShadowOffsetDy(float f10) {
        this.mTextShadowOffsetDy = PixelUtil.toPixelFromDIP(f10);
    }

    private void setTextShadowRadius(float f10) {
        if (f10 != this.mTextShadowRadius) {
            this.mTextShadowRadius = f10;
        }
    }

    private void setTextStrokeColor(int i10) {
        if (i10 != this.mTextStrokeColor) {
            this.mTextStrokeColor = i10;
            this.mIsTextStrokeColorSet = true;
        }
    }

    private void setTextStrokeWidth(float f10) {
        this.mTextStrokeWidth = f10;
    }

    private void setTextTransform(String str) {
        if (str != null && !ViewProps.NONE.equals(str)) {
            if ("uppercase".equals(str)) {
                this.mTextTransform = TextTransform.UPPERCASE;
                return;
            } else if ("lowercase".equals(str)) {
                this.mTextTransform = TextTransform.LOWERCASE;
                return;
            } else if ("capitalize".equals(str)) {
                this.mTextTransform = TextTransform.CAPITALIZE;
                return;
            } else {
                p8.a.J(ReactConstants.TAG, "Invalid textTransform: " + str);
                this.mTextTransform = TextTransform.NONE;
                return;
            }
        }
        this.mTextTransform = TextTransform.NONE;
    }

    public ReactAccessibilityDelegate.AccessibilityRole getAccessibilityRole() {
        return this.mAccessibilityRole;
    }

    public int getBackgroundColor() {
        return this.mBackgroundColor;
    }

    public int getColor() {
        return this.mColor;
    }

    public int getEffectiveFontSize() {
        return this.mFontSize;
    }

    public float getEffectiveLetterSpacing() {
        return getLetterSpacing();
    }

    public float getEffectiveLineHeight() {
        if (!Float.isNaN(this.mLineHeight) && !Float.isNaN(this.mHeightOfTallestInlineImage)) {
            float f10 = this.mHeightOfTallestInlineImage;
            if (f10 > this.mLineHeight) {
                return f10;
            }
        }
        return this.mLineHeight;
    }

    public String getFontFamily() {
        return this.mFontFamily;
    }

    public String getFontFeatureSettings() {
        return this.mFontFeatureSettings;
    }

    public int getFontStyle() {
        return this.mFontStyle;
    }

    public int getFontWeight() {
        return this.mFontWeight;
    }

    public float getGradientAngle() {
        return this.mGradientAngle;
    }

    public int[] getGradientColors() {
        return this.mGradientColors;
    }

    public String getGradientMode() {
        return this.mGradientMode;
    }

    public float getGradientWidth() {
        return this.mGradientWidth;
    }

    public float getLetterSpacing() {
        float pixelFromDIP;
        if (this.mAllowFontScaling) {
            pixelFromDIP = PixelUtil.toPixelFromSP(this.mLetterSpacingInput);
        } else {
            pixelFromDIP = PixelUtil.toPixelFromDIP(this.mLetterSpacingInput);
        }
        int i10 = this.mFontSize;
        if (i10 > 0) {
            return pixelFromDIP / i10;
        }
        throw new IllegalArgumentException("FontSize should be a positive value. Current value: " + this.mFontSize);
    }

    public float getOpacity() {
        return this.mOpacity;
    }

    public ReactAccessibilityDelegate.Role getRole() {
        return this.mRole;
    }

    public int getTextShadowColor() {
        return this.mTextShadowColor;
    }

    public float getTextShadowOffsetDx() {
        return this.mTextShadowOffsetDx;
    }

    public float getTextShadowOffsetDy() {
        return this.mTextShadowOffsetDy;
    }

    public float getTextShadowRadius() {
        return this.mTextShadowRadius;
    }

    public int getTextStrokeColor() {
        return this.mTextStrokeColor;
    }

    public float getTextStrokeWidth() {
        return this.mTextStrokeWidth;
    }

    @NonNull
    public TextTransform getTextTransform() {
        return this.mTextTransform;
    }

    public boolean isBackgroundColorSet() {
        return this.mIsBackgroundColorSet;
    }

    public boolean isColorSet() {
        return this.mIsColorSet;
    }

    public boolean isLineThroughTextDecorationSet() {
        return this.mIsLineThroughTextDecorationSet;
    }

    public boolean isTextStrokeColorSet() {
        return this.mIsTextStrokeColorSet;
    }

    public boolean isUnderlineTextDecorationSet() {
        return this.mIsUnderlineTextDecorationSet;
    }

    private void setFontVariant(MapBuffer mapBuffer) {
        if (mapBuffer != null && mapBuffer.getCount() != 0) {
            ArrayList arrayList = new ArrayList();
            Iterator<MapBuffer.Entry> it = mapBuffer.iterator();
            while (it.hasNext()) {
                String stringValue = it.next().getStringValue();
                if (stringValue != null) {
                    char c10 = 65535;
                    switch (stringValue.hashCode()) {
                        case -1983120972:
                            if (stringValue.equals("stylistic-thirteen")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case -1933522176:
                            if (stringValue.equals("stylistic-fifteen")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case -1534462052:
                            if (stringValue.equals("stylistic-eighteen")) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case -1195362251:
                            if (stringValue.equals("proportional-nums")) {
                                c10 = 3;
                                break;
                            }
                            break;
                        case -1061392823:
                            if (stringValue.equals("lining-nums")) {
                                c10 = 4;
                                break;
                            }
                            break;
                        case -771984547:
                            if (stringValue.equals("tabular-nums")) {
                                c10 = 5;
                                break;
                            }
                            break;
                        case -659678800:
                            if (stringValue.equals("oldstyle-nums")) {
                                c10 = 6;
                                break;
                            }
                            break;
                        case 296506098:
                            if (stringValue.equals("stylistic-eight")) {
                                c10 = 7;
                                break;
                            }
                            break;
                        case 309330544:
                            if (stringValue.equals("stylistic-seven")) {
                                c10 = '\b';
                                break;
                            }
                            break;
                        case 310339585:
                            if (stringValue.equals("stylistic-three")) {
                                c10 = '\t';
                                break;
                            }
                            break;
                        case 604478526:
                            if (stringValue.equals("stylistic-eleven")) {
                                c10 = '\n';
                                break;
                            }
                            break;
                        case 979426287:
                            if (stringValue.equals("stylistic-five")) {
                                c10 = 11;
                                break;
                            }
                            break;
                        case 979432035:
                            if (stringValue.equals("stylistic-four")) {
                                c10 = '\f';
                                break;
                            }
                            break;
                        case 979664367:
                            if (stringValue.equals("stylistic-nine")) {
                                c10 = '\r';
                                break;
                            }
                            break;
                        case 1001434505:
                            if (stringValue.equals("stylistic-one")) {
                                c10 = 14;
                                break;
                            }
                            break;
                        case 1001438213:
                            if (stringValue.equals("stylistic-six")) {
                                c10 = 15;
                                break;
                            }
                            break;
                        case 1001439040:
                            if (stringValue.equals("stylistic-ten")) {
                                c10 = 16;
                                break;
                            }
                            break;
                        case 1001439599:
                            if (stringValue.equals("stylistic-two")) {
                                c10 = 17;
                                break;
                            }
                            break;
                        case 1030714463:
                            if (stringValue.equals("stylistic-sixteen")) {
                                c10 = 18;
                                break;
                            }
                            break;
                        case 1044065430:
                            if (stringValue.equals("stylistic-twelve")) {
                                c10 = 19;
                                break;
                            }
                            break;
                        case 1044067310:
                            if (stringValue.equals("stylistic-twenty")) {
                                c10 = 20;
                                break;
                            }
                            break;
                        case 1183323111:
                            if (stringValue.equals("small-caps")) {
                                c10 = 21;
                                break;
                            }
                            break;
                        case 1463562569:
                            if (stringValue.equals("stylistic-nineteen")) {
                                c10 = 22;
                                break;
                            }
                            break;
                        case 1648446397:
                            if (stringValue.equals("stylistic-fourteen")) {
                                c10 = 23;
                                break;
                            }
                            break;
                        case 2097122634:
                            if (stringValue.equals("stylistic-seventeen")) {
                                c10 = 24;
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            arrayList.add("'ss13'");
                            continue;
                        case 1:
                            arrayList.add("'ss15'");
                            continue;
                        case 2:
                            arrayList.add("'ss18'");
                            continue;
                        case 3:
                            arrayList.add("'pnum'");
                            continue;
                        case 4:
                            arrayList.add("'lnum'");
                            continue;
                        case 5:
                            arrayList.add("'tnum'");
                            continue;
                        case 6:
                            arrayList.add("'onum'");
                            continue;
                        case 7:
                            arrayList.add("'ss08'");
                            continue;
                        case '\b':
                            arrayList.add("'ss07'");
                            continue;
                        case '\t':
                            arrayList.add("'ss03'");
                            continue;
                        case '\n':
                            arrayList.add("'ss11'");
                            continue;
                        case 11:
                            arrayList.add("'ss05'");
                            continue;
                        case '\f':
                            arrayList.add("'ss04'");
                            continue;
                        case '\r':
                            arrayList.add("'ss09'");
                            continue;
                        case 14:
                            arrayList.add("'ss01'");
                            continue;
                        case 15:
                            arrayList.add("'ss06'");
                            continue;
                        case 16:
                            arrayList.add("'ss10'");
                            continue;
                        case 17:
                            arrayList.add("'ss02'");
                            continue;
                        case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                            arrayList.add("'ss16'");
                            continue;
                        case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                            arrayList.add("'ss12'");
                            continue;
                        case 20:
                            arrayList.add("'ss20'");
                            continue;
                        case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                            arrayList.add("'smcp'");
                            continue;
                        case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                            arrayList.add("'ss19'");
                            continue;
                        case 23:
                            arrayList.add("'ss14'");
                            continue;
                        case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                            arrayList.add("'ss17'");
                            continue;
                    }
                }
            }
            this.mFontFeatureSettings = TextUtils.join(", ", arrayList);
            return;
        }
        this.mFontFeatureSettings = null;
    }

    private void setRole(ReactAccessibilityDelegate.Role role) {
        this.mRole = role;
    }

    private void setGradientColors(MapBuffer mapBuffer) {
        if (mapBuffer == null) {
            return;
        }
        ArrayList<Integer> arrayList = new ArrayList<>();
        Iterator<MapBuffer.Entry> it = mapBuffer.iterator();
        while (it.hasNext()) {
            arrayList.add(Integer.valueOf(it.next().getIntValue()));
        }
        setGradientColorsFromList(arrayList);
    }
}
