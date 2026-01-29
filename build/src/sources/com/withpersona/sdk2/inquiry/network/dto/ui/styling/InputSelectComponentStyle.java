package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.i;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u008c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0006\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b$\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002B\u0089\u0001\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u001a\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u001c¢\u0006\u0004\b\u001d\u0010\u001eJ\u0007\u0010\u0083\u0001\u001a\u00020JJ\u001b\u0010\u0084\u0001\u001a\u00030\u0085\u00012\b\u0010\u0086\u0001\u001a\u00030\u0087\u00012\u0007\u0010\u0088\u0001\u001a\u00020JR\u0013\u0010\u0003\u001a\u0004\u0018\u00010\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b+\u0010,R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\b\n\u0000\u001a\u0004\b-\u0010.R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\b\n\u0000\u001a\u0004\b/\u00100R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0016¢\u0006\b\n\u0000\u001a\u0004\b1\u00102R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b3\u00104R\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u001a¢\u0006\b\n\u0000\u001a\u0004\b5\u00106R\u0013\u0010\u001b\u001a\u0004\u0018\u00010\u001c¢\u0006\b\n\u0000\u001a\u0004\b7\u00108R\u0014\u00109\u001a\u00020:8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b;\u0010<R\u0011\u0010=\u001a\u00020:8F¢\u0006\u0006\u001a\u0004\b>\u0010<R\u0014\u0010?\u001a\u00020:8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b@\u0010<R\u0013\u0010A\u001a\u0004\u0018\u00010B8F¢\u0006\u0006\u001a\u0004\bC\u0010DR\u0013\u0010E\u001a\u0004\u0018\u00010B8F¢\u0006\u0006\u001a\u0004\bF\u0010DR\u0013\u0010G\u001a\u0004\u0018\u00010B8F¢\u0006\u0006\u001a\u0004\bH\u0010DR\u0013\u0010I\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bK\u0010LR\u0016\u0010M\u001a\u0004\u0018\u00010J8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bN\u0010LR\u0016\u0010O\u001a\u0004\u0018\u00010J8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bP\u0010LR\u0013\u0010Q\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bR\u0010LR\u0013\u0010S\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bT\u0010LR\u0013\u0010U\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bV\u0010LR\u0016\u0010W\u001a\u0004\u0018\u00010J8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bX\u0010LR\u0016\u0010Y\u001a\u0004\u0018\u00010J8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bZ\u0010LR\u0013\u0010[\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\b\\\u0010LR\u0013\u0010]\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\b^\u0010LR\u0013\u0010_\u001a\u0004\u0018\u00010`8F¢\u0006\u0006\u001a\u0004\ba\u0010bR\u0016\u0010c\u001a\u0004\u0018\u00010J8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bd\u0010LR\u0013\u0010e\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bf\u0010LR\u0013\u0010g\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bh\u0010LR\u0013\u0010i\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bj\u0010LR\u0013\u0010k\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bl\u0010LR\u0013\u0010m\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bn\u0010LR\u0013\u0010o\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bp\u0010LR\u0013\u0010q\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\br\u0010LR\u0013\u0010s\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bt\u0010LR\u0013\u0010u\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bv\u0010LR\u0013\u0010w\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bx\u0010LR\u0013\u0010y\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\bz\u0010LR\u0013\u0010{\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\b|\u0010LR\u0013\u0010}\u001a\u0004\u0018\u00010J8F¢\u0006\u0006\u001a\u0004\b~\u0010LR\u0014\u0010\u007f\u001a\u0004\u0018\u00010J8F¢\u0006\u0007\u001a\u0005\b\u0080\u0001\u0010LR\u0015\u0010\u0081\u0001\u001a\u0004\u0018\u00010J8F¢\u0006\u0007\u001a\u0005\b\u0082\u0001\u0010L¨\u0006\u0089\u0001"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyle;", "Landroid/os/Parcelable;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/InputSelectBoxComponentStyle;", ViewProps.MARGIN, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "justify", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedJustifyStyle;", ViewProps.FONT_FAMILY, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontFamilyStyle;", ViewProps.FONT_SIZE, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontSizeStyle;", ViewProps.FONT_WEIGHT, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontWeightStyle;", ViewProps.LETTER_SPACING, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLetterSpacingStyle;", ViewProps.LINE_HEIGHT, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLineHeightStyle;", "textColor", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextColorStyle;", "borderRadius", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderRadiusStyle;", ViewProps.BORDER_WIDTH, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderWidthStyle;", ViewProps.BACKGROUND_COLOR, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBackgroundColorStyle;", ViewProps.BORDER_COLOR, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderColorStyle;", "strokeColor", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectStrokeColorStyle;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedJustifyStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontFamilyStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontSizeStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontWeightStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLetterSpacingStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLineHeightStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextColorStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderRadiusStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderWidthStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBackgroundColorStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderColorStyle;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectStrokeColorStyle;)V", "getMargin", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "getJustify", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedJustifyStyle;", "getFontFamily", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontFamilyStyle;", "getFontSize", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontSizeStyle;", "getFontWeight", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontWeightStyle;", "getLetterSpacing", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLetterSpacingStyle;", "getLineHeight", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLineHeightStyle;", "getTextColor", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextColorStyle;", "getBorderRadius", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderRadiusStyle;", "getBorderWidth", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderWidthStyle;", "getBackgroundColor", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBackgroundColorStyle;", "getBorderColor", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderColorStyle;", "getStrokeColor", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectStrokeColorStyle;", "textBasedStyle", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "getTextBasedStyle", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "labelStyle", "getLabelStyle", "errorTextStyle", "getErrorTextStyle", "topBorderWidthValue", "", "getTopBorderWidthValue", "()Ljava/lang/Double;", "bottomBorderWidthValue", "getBottomBorderWidthValue", "borderRadiusValue", "getBorderRadiusValue", "chevronColor", "", "getChevronColor", "()Ljava/lang/Integer;", "headerCancelButtonColor", "getHeaderCancelButtonColor", "baseBorderColorValue", "getBaseBorderColorValue", "focusedBorderColorValue", "getFocusedBorderColorValue", "disabledBorderColorValue", "getDisabledBorderColorValue", "errorBorderColorValue", "getErrorBorderColorValue", "baseBackgroundColorValue", "getBaseBackgroundColorValue", "focusedBackgroundColorValue", "getFocusedBackgroundColorValue", "disabledBackgroundColorValue", "getDisabledBackgroundColorValue", "errorBackgroundColorValue", "getErrorBackgroundColorValue", "inputSelectBoxMargins", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "getInputSelectBoxMargins", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "baseTextColor", "getBaseTextColor", "valueFocusedTextColor", "getValueFocusedTextColor", "valueDisabledTextColor", "getValueDisabledTextColor", "valueErrorTextColor", "getValueErrorTextColor", "labelBaseTextColor", "getLabelBaseTextColor", "labelFocusedTextColor", "getLabelFocusedTextColor", "labelDisabledTextColor", "getLabelDisabledTextColor", "labelErrorTextColor", "getLabelErrorTextColor", "placeholderBaseTextColor", "getPlaceholderBaseTextColor", "placeholderFocusedTextColor", "getPlaceholderFocusedTextColor", "placeholderDisabledTextColor", "getPlaceholderDisabledTextColor", "placeholderErrorTextColor", "getPlaceholderErrorTextColor", "errorBaseTextColor", "getErrorBaseTextColor", "errorFocusedTextColor", "getErrorFocusedTextColor", "errorDisabledTextColor", "getErrorDisabledTextColor", "errorErrorTextColor", "getErrorErrorTextColor", "describeContents", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputSelectComponentStyle implements Parcelable, InputSelectBoxComponentStyle {
    @NotNull
    public static final Parcelable.Creator<InputSelectComponentStyle> CREATOR = new Creator();
    private final AttributeStyles.InputSelectBackgroundColorStyle backgroundColor;
    private final AttributeStyles.InputSelectBorderColorStyle borderColor;
    private final AttributeStyles.InputSelectBorderRadiusStyle borderRadius;
    private final AttributeStyles.InputSelectBorderWidthStyle borderWidth;
    private final AttributeStyles.InputSelectTextFontFamilyStyle fontFamily;
    private final AttributeStyles.InputSelectTextFontSizeStyle fontSize;
    private final AttributeStyles.InputSelectTextFontWeightStyle fontWeight;
    private final AttributeStyles.TextBasedJustifyStyle justify;
    private final AttributeStyles.InputSelectTextLetterSpacingStyle letterSpacing;
    private final AttributeStyles.InputSelectTextLineHeightStyle lineHeight;
    private final AttributeStyles.InputMarginStyle margin;
    private final AttributeStyles.InputSelectStrokeColorStyle strokeColor;
    private final AttributeStyles.InputSelectTextColorStyle textColor;

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Creator implements Parcelable.Creator<InputSelectComponentStyle> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final InputSelectComponentStyle createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputSelectComponentStyle(parcel.readInt() == 0 ? null : AttributeStyles.InputMarginStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.TextBasedJustifyStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextFontFamilyStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextFontSizeStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextFontWeightStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextLetterSpacingStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextLineHeightStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectTextColorStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectBorderRadiusStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectBorderWidthStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectBackgroundColorStyle.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : AttributeStyles.InputSelectBorderColorStyle.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? AttributeStyles.InputSelectStrokeColorStyle.CREATOR.createFromParcel(parcel) : null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final InputSelectComponentStyle[] newArray(int i10) {
            return new InputSelectComponentStyle[i10];
        }
    }

    public InputSelectComponentStyle(AttributeStyles.InputMarginStyle inputMarginStyle, AttributeStyles.TextBasedJustifyStyle textBasedJustifyStyle, AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle, AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle, AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle, AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle, AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle, AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle, AttributeStyles.InputSelectBorderRadiusStyle inputSelectBorderRadiusStyle, AttributeStyles.InputSelectBorderWidthStyle inputSelectBorderWidthStyle, AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle, AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle, AttributeStyles.InputSelectStrokeColorStyle inputSelectStrokeColorStyle) {
        this.margin = inputMarginStyle;
        this.justify = textBasedJustifyStyle;
        this.fontFamily = inputSelectTextFontFamilyStyle;
        this.fontSize = inputSelectTextFontSizeStyle;
        this.fontWeight = inputSelectTextFontWeightStyle;
        this.letterSpacing = inputSelectTextLetterSpacingStyle;
        this.lineHeight = inputSelectTextLineHeightStyle;
        this.textColor = inputSelectTextColorStyle;
        this.borderRadius = inputSelectBorderRadiusStyle;
        this.borderWidth = inputSelectBorderWidthStyle;
        this.backgroundColor = inputSelectBackgroundColorStyle;
        this.borderColor = inputSelectBorderColorStyle;
        this.strokeColor = inputSelectStrokeColorStyle;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final AttributeStyles.InputSelectBackgroundColorStyle getBackgroundColor() {
        return this.backgroundColor;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    public Integer getBaseBackgroundColorValue() {
        StyleElements.ComplexElementColor base;
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = this.backgroundColor;
        if (inputSelectBackgroundColorStyle != null && (base = inputSelectBackgroundColorStyle.getBase()) != null) {
            return base.getBase();
        }
        return null;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    public Integer getBaseBorderColorValue() {
        StyleElements.ComplexElementColor base;
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = this.borderColor;
        if (inputSelectBorderColorStyle != null && (base = inputSelectBorderColorStyle.getBase()) != null) {
            return base.getBase();
        }
        return null;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    public Integer getBaseTextColor() {
        StyleElements.ComplexElementColor value;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (value = inputSelectTextColorStyle.getValue()) != null) {
            return value.getBase();
        }
        return null;
    }

    public final AttributeStyles.InputSelectBorderColorStyle getBorderColor() {
        return this.borderColor;
    }

    public final AttributeStyles.InputSelectBorderRadiusStyle getBorderRadius() {
        return this.borderRadius;
    }

    public final Double getBorderRadiusValue() {
        StyleElements.Measurement base;
        StyleElements.Size base2;
        AttributeStyles.InputSelectBorderRadiusStyle inputSelectBorderRadiusStyle = this.borderRadius;
        if (inputSelectBorderRadiusStyle != null && (base = inputSelectBorderRadiusStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            return base2.getDp();
        }
        return null;
    }

    public final AttributeStyles.InputSelectBorderWidthStyle getBorderWidth() {
        return this.borderWidth;
    }

    public final Double getBottomBorderWidthValue() {
        StyleElements.MeasurementSet base;
        StyleElements.SizeSet base2;
        StyleElements.Size bottom;
        AttributeStyles.InputSelectBorderWidthStyle inputSelectBorderWidthStyle = this.borderWidth;
        if (inputSelectBorderWidthStyle != null && (base = inputSelectBorderWidthStyle.getBase()) != null && (base2 = base.getBase()) != null && (bottom = base2.getBottom()) != null) {
            return bottom.getDp();
        }
        return null;
    }

    public final Integer getChevronColor() {
        StyleElements.SimpleElementColor chevron;
        StyleElements.SimpleElementColorValue base;
        AttributeStyles.InputSelectStrokeColorStyle inputSelectStrokeColorStyle = this.strokeColor;
        if (inputSelectStrokeColorStyle != null && (chevron = inputSelectStrokeColorStyle.getChevron()) != null && (base = chevron.getBase()) != null) {
            return base.getValue();
        }
        return null;
    }

    public final Integer getDisabledBackgroundColorValue() {
        StyleElements.ComplexElementColor base;
        Integer disabled;
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = this.backgroundColor;
        if (inputSelectBackgroundColorStyle != null && (base = inputSelectBackgroundColorStyle.getBase()) != null && (disabled = base.getDisabled()) != null) {
            return disabled;
        }
        return getBaseBackgroundColorValue();
    }

    public final Integer getDisabledBorderColorValue() {
        StyleElements.ComplexElementColor base;
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = this.borderColor;
        if (inputSelectBorderColorStyle != null && (base = inputSelectBorderColorStyle.getBase()) != null) {
            return base.getDisabled();
        }
        return null;
    }

    public final Integer getErrorBackgroundColorValue() {
        StyleElements.ComplexElementColor base;
        Integer errored;
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = this.backgroundColor;
        if (inputSelectBackgroundColorStyle != null && (base = inputSelectBackgroundColorStyle.getBase()) != null && (errored = base.getErrored()) != null) {
            return errored;
        }
        return getBaseBackgroundColorValue();
    }

    public final Integer getErrorBaseTextColor() {
        StyleElements.ComplexElementColor error;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (error = inputSelectTextColorStyle.getError()) != null) {
            return error.getBase();
        }
        return null;
    }

    public final Integer getErrorBorderColorValue() {
        StyleElements.ComplexElementColor base;
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = this.borderColor;
        if (inputSelectBorderColorStyle != null && (base = inputSelectBorderColorStyle.getBase()) != null) {
            return base.getErrored();
        }
        return null;
    }

    public final Integer getErrorDisabledTextColor() {
        StyleElements.ComplexElementColor error;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (error = inputSelectTextColorStyle.getError()) != null) {
            return error.getDisabled();
        }
        return null;
    }

    public final Integer getErrorErrorTextColor() {
        StyleElements.ComplexElementColor error;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (error = inputSelectTextColorStyle.getError()) != null) {
            return error.getErrored();
        }
        return null;
    }

    public final Integer getErrorFocusedTextColor() {
        StyleElements.ComplexElementColor error;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (error = inputSelectTextColorStyle.getError()) != null) {
            return error.getFocused();
        }
        return null;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    @NotNull
    public TextBasedComponentStyle getErrorTextStyle() {
        StyleElements.FontName fontName;
        StyleElements.Measurement measurement;
        StyleElements.FontWeightContainer fontWeightContainer;
        StyleElements.Measurement measurement2;
        StyleElements.Measurement measurement3;
        StyleElements.ComplexElementColor error;
        AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle = this.fontFamily;
        Integer num = null;
        if (inputSelectTextFontFamilyStyle != null) {
            fontName = inputSelectTextFontFamilyStyle.getError();
        } else {
            fontName = null;
        }
        AttributeStyles.TextBasedFontFamilyStyle textBasedFontFamilyStyle = new AttributeStyles.TextBasedFontFamilyStyle(fontName);
        AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle = this.fontSize;
        if (inputSelectTextFontSizeStyle != null) {
            measurement = inputSelectTextFontSizeStyle.getError();
        } else {
            measurement = null;
        }
        AttributeStyles.TextBasedFontSizeStyle textBasedFontSizeStyle = new AttributeStyles.TextBasedFontSizeStyle(measurement);
        AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle = this.fontWeight;
        if (inputSelectTextFontWeightStyle != null) {
            fontWeightContainer = inputSelectTextFontWeightStyle.getError();
        } else {
            fontWeightContainer = null;
        }
        AttributeStyles.TextBasedFontWeightStyle textBasedFontWeightStyle = new AttributeStyles.TextBasedFontWeightStyle(fontWeightContainer);
        AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle = this.letterSpacing;
        if (inputSelectTextLetterSpacingStyle != null) {
            measurement2 = inputSelectTextLetterSpacingStyle.getError();
        } else {
            measurement2 = null;
        }
        AttributeStyles.TextBasedLetterSpacingStyle textBasedLetterSpacingStyle = new AttributeStyles.TextBasedLetterSpacingStyle(measurement2);
        AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle = this.lineHeight;
        if (inputSelectTextLineHeightStyle != null) {
            measurement3 = inputSelectTextLineHeightStyle.getError();
        } else {
            measurement3 = null;
        }
        AttributeStyles.TextBasedLineHeightStyle textBasedLineHeightStyle = new AttributeStyles.TextBasedLineHeightStyle(measurement3);
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (error = inputSelectTextColorStyle.getError()) != null) {
            num = error.getBase();
        }
        return new TextBasedComponentStyle(null, null, textBasedFontFamilyStyle, textBasedFontSizeStyle, textBasedFontWeightStyle, textBasedLetterSpacingStyle, textBasedLineHeightStyle, new AttributeStyles.TextBasedTextColorStyle(new StyleElements.SimpleElementColor(new StyleElements.SimpleElementColorValue(num))), null);
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    public Integer getFocusedBackgroundColorValue() {
        StyleElements.ComplexElementColor base;
        Integer focused;
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = this.backgroundColor;
        if (inputSelectBackgroundColorStyle != null && (base = inputSelectBackgroundColorStyle.getBase()) != null && (focused = base.getFocused()) != null) {
            return focused;
        }
        return getBaseBackgroundColorValue();
    }

    public final Integer getFocusedBorderColorValue() {
        StyleElements.ComplexElementColor base;
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = this.borderColor;
        if (inputSelectBorderColorStyle != null && (base = inputSelectBorderColorStyle.getBase()) != null) {
            return base.getFocused();
        }
        return null;
    }

    public final AttributeStyles.InputSelectTextFontFamilyStyle getFontFamily() {
        return this.fontFamily;
    }

    public final AttributeStyles.InputSelectTextFontSizeStyle getFontSize() {
        return this.fontSize;
    }

    public final AttributeStyles.InputSelectTextFontWeightStyle getFontWeight() {
        return this.fontWeight;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    public Integer getHeaderCancelButtonColor() {
        StyleElements.SimpleElementColor headerCancelButton;
        StyleElements.SimpleElementColorValue base;
        AttributeStyles.InputSelectStrokeColorStyle inputSelectStrokeColorStyle = this.strokeColor;
        if (inputSelectStrokeColorStyle != null && (headerCancelButton = inputSelectStrokeColorStyle.getHeaderCancelButton()) != null && (base = headerCancelButton.getBase()) != null) {
            return base.getValue();
        }
        return null;
    }

    public final StyleElements.SizeSet getInputSelectBoxMargins() {
        StyleElements.MeasurementSet base;
        AttributeStyles.InputMarginStyle inputMarginStyle = this.margin;
        if (inputMarginStyle != null && (base = inputMarginStyle.getBase()) != null) {
            return base.getBase();
        }
        return null;
    }

    public final AttributeStyles.TextBasedJustifyStyle getJustify() {
        return this.justify;
    }

    public final Integer getLabelBaseTextColor() {
        StyleElements.ComplexElementColor label;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (label = inputSelectTextColorStyle.getLabel()) != null) {
            return label.getBase();
        }
        return null;
    }

    public final Integer getLabelDisabledTextColor() {
        StyleElements.ComplexElementColor label;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (label = inputSelectTextColorStyle.getLabel()) != null) {
            return label.getDisabled();
        }
        return null;
    }

    public final Integer getLabelErrorTextColor() {
        StyleElements.ComplexElementColor label;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (label = inputSelectTextColorStyle.getLabel()) != null) {
            return label.getErrored();
        }
        return null;
    }

    public final Integer getLabelFocusedTextColor() {
        StyleElements.ComplexElementColor label;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (label = inputSelectTextColorStyle.getLabel()) != null) {
            return label.getFocused();
        }
        return null;
    }

    @NotNull
    public final TextBasedComponentStyle getLabelStyle() {
        StyleElements.FontName fontName;
        StyleElements.Measurement measurement;
        StyleElements.FontWeightContainer fontWeightContainer;
        StyleElements.Measurement measurement2;
        StyleElements.Measurement measurement3;
        StyleElements.ComplexElementColor label;
        AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle = this.fontFamily;
        Integer num = null;
        if (inputSelectTextFontFamilyStyle == null || (fontName = inputSelectTextFontFamilyStyle.getLabel()) == null) {
            AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle2 = this.fontFamily;
            if (inputSelectTextFontFamilyStyle2 != null) {
                fontName = inputSelectTextFontFamilyStyle2.getBase();
            } else {
                fontName = null;
            }
        }
        AttributeStyles.TextBasedFontFamilyStyle textBasedFontFamilyStyle = new AttributeStyles.TextBasedFontFamilyStyle(fontName);
        AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle = this.fontSize;
        if (inputSelectTextFontSizeStyle != null) {
            measurement = inputSelectTextFontSizeStyle.getLabel();
        } else {
            measurement = null;
        }
        AttributeStyles.TextBasedFontSizeStyle textBasedFontSizeStyle = new AttributeStyles.TextBasedFontSizeStyle(measurement);
        AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle = this.fontWeight;
        if (inputSelectTextFontWeightStyle != null) {
            fontWeightContainer = inputSelectTextFontWeightStyle.getLabel();
        } else {
            fontWeightContainer = null;
        }
        AttributeStyles.TextBasedFontWeightStyle textBasedFontWeightStyle = new AttributeStyles.TextBasedFontWeightStyle(fontWeightContainer);
        AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle = this.letterSpacing;
        if (inputSelectTextLetterSpacingStyle == null || (measurement2 = inputSelectTextLetterSpacingStyle.getLabel()) == null) {
            AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle2 = this.letterSpacing;
            if (inputSelectTextLetterSpacingStyle2 != null) {
                measurement2 = inputSelectTextLetterSpacingStyle2.getBase();
            } else {
                measurement2 = null;
            }
        }
        AttributeStyles.TextBasedLetterSpacingStyle textBasedLetterSpacingStyle = new AttributeStyles.TextBasedLetterSpacingStyle(measurement2);
        AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle = this.lineHeight;
        if (inputSelectTextLineHeightStyle != null) {
            measurement3 = inputSelectTextLineHeightStyle.getLabel();
        } else {
            measurement3 = null;
        }
        AttributeStyles.TextBasedLineHeightStyle textBasedLineHeightStyle = new AttributeStyles.TextBasedLineHeightStyle(measurement3);
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (label = inputSelectTextColorStyle.getLabel()) != null) {
            num = label.getBase();
        }
        return new TextBasedComponentStyle(null, null, textBasedFontFamilyStyle, textBasedFontSizeStyle, textBasedFontWeightStyle, textBasedLetterSpacingStyle, textBasedLineHeightStyle, new AttributeStyles.TextBasedTextColorStyle(new StyleElements.SimpleElementColor(new StyleElements.SimpleElementColorValue(num))), null);
    }

    public final AttributeStyles.InputSelectTextLetterSpacingStyle getLetterSpacing() {
        return this.letterSpacing;
    }

    public final AttributeStyles.InputSelectTextLineHeightStyle getLineHeight() {
        return this.lineHeight;
    }

    public final AttributeStyles.InputMarginStyle getMargin() {
        return this.margin;
    }

    public final Integer getPlaceholderBaseTextColor() {
        StyleElements.ComplexElementColor placeholder;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (placeholder = inputSelectTextColorStyle.getPlaceholder()) != null) {
            return placeholder.getBase();
        }
        return null;
    }

    public final Integer getPlaceholderDisabledTextColor() {
        StyleElements.ComplexElementColor placeholder;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (placeholder = inputSelectTextColorStyle.getPlaceholder()) != null) {
            return placeholder.getDisabled();
        }
        return null;
    }

    public final Integer getPlaceholderErrorTextColor() {
        StyleElements.ComplexElementColor placeholder;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (placeholder = inputSelectTextColorStyle.getPlaceholder()) != null) {
            return placeholder.getErrored();
        }
        return null;
    }

    public final Integer getPlaceholderFocusedTextColor() {
        StyleElements.ComplexElementColor placeholder;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (placeholder = inputSelectTextColorStyle.getPlaceholder()) != null) {
            return placeholder.getFocused();
        }
        return null;
    }

    public final AttributeStyles.InputSelectStrokeColorStyle getStrokeColor() {
        return this.strokeColor;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle
    @NotNull
    public TextBasedComponentStyle getTextBasedStyle() {
        StyleElements.MeasurementSet measurementSet;
        StyleElements.FontName fontName;
        StyleElements.Measurement measurement;
        StyleElements.FontWeightContainer fontWeightContainer;
        StyleElements.Measurement measurement2;
        StyleElements.Measurement measurement3;
        StyleElements.ComplexElementColor value;
        AttributeStyles.InputMarginStyle inputMarginStyle = this.margin;
        if (inputMarginStyle != null) {
            measurementSet = inputMarginStyle.getOption();
        } else {
            measurementSet = null;
        }
        AttributeStyles.TextBasedMarginStyle textBasedMarginStyle = new AttributeStyles.TextBasedMarginStyle(measurementSet);
        AttributeStyles.TextBasedJustifyStyle textBasedJustifyStyle = this.justify;
        AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle = this.fontFamily;
        if (inputSelectTextFontFamilyStyle != null) {
            fontName = inputSelectTextFontFamilyStyle.getBase();
        } else {
            fontName = null;
        }
        AttributeStyles.TextBasedFontFamilyStyle textBasedFontFamilyStyle = new AttributeStyles.TextBasedFontFamilyStyle(fontName);
        AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle = this.fontSize;
        if (inputSelectTextFontSizeStyle != null) {
            measurement = inputSelectTextFontSizeStyle.getBase();
        } else {
            measurement = null;
        }
        AttributeStyles.TextBasedFontSizeStyle textBasedFontSizeStyle = new AttributeStyles.TextBasedFontSizeStyle(measurement);
        AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle = this.fontWeight;
        if (inputSelectTextFontWeightStyle != null) {
            fontWeightContainer = inputSelectTextFontWeightStyle.getBase();
        } else {
            fontWeightContainer = null;
        }
        AttributeStyles.TextBasedFontWeightStyle textBasedFontWeightStyle = new AttributeStyles.TextBasedFontWeightStyle(fontWeightContainer);
        AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle = this.letterSpacing;
        if (inputSelectTextLetterSpacingStyle != null) {
            measurement2 = inputSelectTextLetterSpacingStyle.getBase();
        } else {
            measurement2 = null;
        }
        AttributeStyles.TextBasedLetterSpacingStyle textBasedLetterSpacingStyle = new AttributeStyles.TextBasedLetterSpacingStyle(measurement2);
        AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle = this.lineHeight;
        if (inputSelectTextLineHeightStyle != null) {
            measurement3 = inputSelectTextLineHeightStyle.getBase();
        } else {
            measurement3 = null;
        }
        AttributeStyles.TextBasedLineHeightStyle textBasedLineHeightStyle = new AttributeStyles.TextBasedLineHeightStyle(measurement3);
        Integer num = null;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (value = inputSelectTextColorStyle.getValue()) != null) {
            num = value.getBase();
        }
        return new TextBasedComponentStyle(textBasedMarginStyle, textBasedJustifyStyle, textBasedFontFamilyStyle, textBasedFontSizeStyle, textBasedFontWeightStyle, textBasedLetterSpacingStyle, textBasedLineHeightStyle, new AttributeStyles.TextBasedTextColorStyle(new StyleElements.SimpleElementColor(new StyleElements.SimpleElementColorValue(num))), null);
    }

    public final AttributeStyles.InputSelectTextColorStyle getTextColor() {
        return this.textColor;
    }

    public final Double getTopBorderWidthValue() {
        StyleElements.MeasurementSet base;
        StyleElements.SizeSet base2;
        StyleElements.Size top;
        AttributeStyles.InputSelectBorderWidthStyle inputSelectBorderWidthStyle = this.borderWidth;
        if (inputSelectBorderWidthStyle != null && (base = inputSelectBorderWidthStyle.getBase()) != null && (base2 = base.getBase()) != null && (top = base2.getTop()) != null) {
            return top.getDp();
        }
        return null;
    }

    public final Integer getValueDisabledTextColor() {
        StyleElements.ComplexElementColor value;
        Integer disabled;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (value = inputSelectTextColorStyle.getValue()) != null && (disabled = value.getDisabled()) != null) {
            return disabled;
        }
        return getBaseTextColor();
    }

    public final Integer getValueErrorTextColor() {
        StyleElements.ComplexElementColor value;
        Integer errored;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (value = inputSelectTextColorStyle.getValue()) != null && (errored = value.getErrored()) != null) {
            return errored;
        }
        return getBaseTextColor();
    }

    public final Integer getValueFocusedTextColor() {
        StyleElements.ComplexElementColor value;
        Integer focused;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle != null && (value = inputSelectTextColorStyle.getValue()) != null && (focused = value.getFocused()) != null) {
            return focused;
        }
        return getBaseTextColor();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        AttributeStyles.InputMarginStyle inputMarginStyle = this.margin;
        if (inputMarginStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputMarginStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.TextBasedJustifyStyle textBasedJustifyStyle = this.justify;
        if (textBasedJustifyStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            textBasedJustifyStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle = this.fontFamily;
        if (inputSelectTextFontFamilyStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextFontFamilyStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle = this.fontSize;
        if (inputSelectTextFontSizeStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextFontSizeStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle = this.fontWeight;
        if (inputSelectTextFontWeightStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextFontWeightStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle = this.letterSpacing;
        if (inputSelectTextLetterSpacingStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextLetterSpacingStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle = this.lineHeight;
        if (inputSelectTextLineHeightStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextLineHeightStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = this.textColor;
        if (inputSelectTextColorStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectTextColorStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectBorderRadiusStyle inputSelectBorderRadiusStyle = this.borderRadius;
        if (inputSelectBorderRadiusStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectBorderRadiusStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectBorderWidthStyle inputSelectBorderWidthStyle = this.borderWidth;
        if (inputSelectBorderWidthStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectBorderWidthStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = this.backgroundColor;
        if (inputSelectBackgroundColorStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectBackgroundColorStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = this.borderColor;
        if (inputSelectBorderColorStyle == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            inputSelectBorderColorStyle.writeToParcel(dest, i10);
        }
        AttributeStyles.InputSelectStrokeColorStyle inputSelectStrokeColorStyle = this.strokeColor;
        if (inputSelectStrokeColorStyle == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        inputSelectStrokeColorStyle.writeToParcel(dest, i10);
    }
}
