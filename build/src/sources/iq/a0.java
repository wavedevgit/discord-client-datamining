package iq;

import android.content.res.ColorStateList;
import android.graphics.BlendMode;
import android.graphics.Typeface;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.view.View;
import android.widget.EditText;
import com.google.android.material.textfield.MaterialAutoCompleteTextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {
    public static final void i(TextInputLayout textInputLayout, boolean z10, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(textInputLayout, "<this>");
        if (z10) {
            textInputLayout.setBoxBackgroundColor(i11);
        } else if (textInputLayout.isEnabled()) {
            textInputLayout.setBoxBackgroundColor(i10);
        } else {
            textInputLayout.setBoxBackgroundColor(i12);
        }
    }

    private static final void j(TextInputLayout textInputLayout, int i10) {
        EditText editText;
        Drawable textCursorDrawable;
        BlendMode blendMode;
        if (Build.VERSION.SDK_INT >= 29 && (editText = textInputLayout.getEditText()) != null && (textCursorDrawable = editText.getTextCursorDrawable()) != null) {
            com.facebook.react.uimanager.q.a();
            blendMode = BlendMode.SRC_ATOP;
            textCursorDrawable.setColorFilter(com.facebook.react.uimanager.p.a(i10, blendMode));
        }
    }

    /* JADX WARN: Type inference failed for: r0v59, types: [T, iq.s] */
    public static final void k(final TextInputLayout textInputLayout, InputTextBasedComponentStyle styles) {
        Typeface typeface;
        MaterialAutoCompleteTextView materialAutoCompleteTextView;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        Integer focusedBackgroundColorValue;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        final int i20;
        int i21;
        final int i22;
        Double valueLineHeightValue;
        float f10;
        final int i23;
        final int i24;
        final int i25;
        int i26;
        int i27;
        Intrinsics.checkNotNullParameter(textInputLayout, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        Integer baseBorderColorValue = styles.getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            int intValue = baseBorderColorValue.intValue();
            Integer focusedBorderColorValue = styles.getFocusedBorderColorValue();
            if (focusedBorderColorValue != null) {
                i26 = focusedBorderColorValue.intValue();
            } else {
                i26 = intValue;
            }
            Integer disabledBorderColorValue = styles.getDisabledBorderColorValue();
            if (disabledBorderColorValue != null) {
                i27 = disabledBorderColorValue.intValue();
            } else {
                i27 = intValue;
            }
            textInputLayout.setBoxStrokeColorStateList(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}}, new int[]{intValue, i26, i27}));
            Integer errorBorderColorValue = styles.getErrorBorderColorValue();
            if (errorBorderColorValue != null) {
                intValue = errorBorderColorValue.intValue();
            }
            textInputLayout.setBoxStrokeErrorColor(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}}, new int[]{intValue, intValue, intValue}));
        }
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            final int intValue2 = baseBackgroundColorValue.intValue();
            Integer focusedBackgroundColorValue2 = styles.getFocusedBackgroundColorValue();
            if (focusedBackgroundColorValue2 != null) {
                i23 = focusedBackgroundColorValue2.intValue();
            } else {
                i23 = intValue2;
            }
            Integer disabledBackgroundColorValue = styles.getDisabledBackgroundColorValue();
            if (disabledBackgroundColorValue != null) {
                i24 = disabledBackgroundColorValue.intValue();
            } else {
                i24 = intValue2;
            }
            Integer errorBackgroundColorValue = styles.getErrorBackgroundColorValue();
            if (errorBackgroundColorValue != null) {
                i25 = errorBackgroundColorValue.intValue();
            } else {
                i25 = intValue2;
            }
            textInputLayout.setBoxBackgroundMode(2);
            i(textInputLayout, textInputLayout.hasFocus(), intValue2, i23, i24);
            objectRef.element = new Function1() { // from class: iq.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit q10;
                    q10 = a0.q(TextInputLayout.this, intValue2, i23, i24, ((Boolean) obj).booleanValue());
                    return q10;
                }
            };
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: iq.t
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i28, int i29, int i30, int i31, int i32, int i33, int i34, int i35) {
                    a0.r(TextInputLayout.this, i25, intValue2, i23, i24, view, i28, i29, i30, i31, i32, i33, i34, i35);
                }
            });
        }
        Double borderWidthValue = styles.getBorderWidthValue();
        if (borderWidthValue != null) {
            double doubleValue = borderWidthValue.doubleValue();
            textInputLayout.setBoxStrokeWidth((int) Math.ceil(pp.h.a(doubleValue)));
            textInputLayout.setBoxStrokeWidthFocused((int) Math.ceil(pp.h.a(doubleValue)));
        }
        Double borderRadiusValue = styles.getBorderRadiusValue();
        if (borderRadiusValue != null) {
            double doubleValue2 = borderRadiusValue.doubleValue();
            textInputLayout.Z((float) pp.h.a(doubleValue2), (float) pp.h.a(doubleValue2), (float) pp.h.a(doubleValue2), (float) pp.h.a(doubleValue2));
        }
        Double valueFontSizeValue = styles.getValueFontSizeValue();
        if (valueFontSizeValue != null) {
            double doubleValue3 = valueFontSizeValue.doubleValue();
            EditText editText = textInputLayout.getEditText();
            if (editText != null) {
                editText.setTextSize((float) doubleValue3);
            }
        }
        Double valueLetterSpacingValue = styles.getValueLetterSpacingValue();
        if (valueLetterSpacingValue != null) {
            double doubleValue4 = valueLetterSpacingValue.doubleValue();
            EditText editText2 = textInputLayout.getEditText();
            if (editText2 != null) {
                f10 = editText2.getTextSize();
            } else {
                f10 = 12.0f;
            }
            double d10 = doubleValue4 / f10;
            EditText editText3 = textInputLayout.getEditText();
            if (editText3 != null) {
                editText3.setLetterSpacing((float) d10);
            }
        }
        EditText editText4 = textInputLayout.getEditText();
        if (editText4 != null) {
            String baseFontFamilyValue = styles.getBaseFontFamilyValue();
            StyleElements.FontWeight valueFontWeightValue = styles.getValueFontWeightValue();
            if (valueFontWeightValue == null) {
                valueFontWeightValue = StyleElements.FontWeight.NORMAL;
            }
            f0.i(editText4, baseFontFamilyValue, valueFontWeightValue, new Function1() { // from class: iq.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s10;
                    s10 = a0.s(TextInputLayout.this, (Typeface) obj);
                    return s10;
                }
            });
        }
        EditText editText5 = textInputLayout.getEditText();
        if (editText5 != null) {
            typeface = editText5.getTypeface();
        } else {
            typeface = null;
        }
        textInputLayout.setTypeface(typeface);
        EditText editText6 = textInputLayout.getEditText();
        if (editText6 != null) {
            String valueFontFamilyValue = styles.getValueFontFamilyValue();
            StyleElements.FontWeight valueFontWeightValue2 = styles.getValueFontWeightValue();
            if (valueFontWeightValue2 == null) {
                valueFontWeightValue2 = StyleElements.FontWeight.NORMAL;
            }
            f0.j(editText6, valueFontFamilyValue, valueFontWeightValue2, null, 4, null);
        }
        if (Build.VERSION.SDK_INT >= 28 && (valueLineHeightValue = styles.getValueLineHeightValue()) != null) {
            double doubleValue5 = valueLineHeightValue.doubleValue();
            EditText editText7 = textInputLayout.getEditText();
            if (editText7 != null) {
                editText7.setLineHeight((int) pp.h.a(doubleValue5));
            }
        }
        Integer baseTextColor = styles.getBaseTextColor();
        if (baseTextColor != null) {
            int intValue3 = baseTextColor.intValue();
            Integer valueFocusedTextColor = styles.getValueFocusedTextColor();
            if (valueFocusedTextColor != null) {
                i20 = valueFocusedTextColor.intValue();
            } else {
                i20 = intValue3;
            }
            Integer valueDisabledTextColor = styles.getValueDisabledTextColor();
            if (valueDisabledTextColor != null) {
                i21 = valueDisabledTextColor.intValue();
            } else {
                i21 = intValue3;
            }
            Integer valueErrorTextColor = styles.getValueErrorTextColor();
            if (valueErrorTextColor != null) {
                i22 = valueErrorTextColor.intValue();
            } else {
                i22 = intValue3;
            }
            final ColorStateList colorStateList = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{intValue3, i20, i21, intValue3});
            EditText editText8 = textInputLayout.getEditText();
            if (editText8 != null) {
                editText8.setTextColor(colorStateList);
            }
            j(textInputLayout, i20);
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: iq.v
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i28, int i29, int i30, int i31, int i32, int i33, int i34, int i35) {
                    a0.l(TextInputLayout.this, i22, colorStateList, i20, view, i28, i29, i30, i31, i32, i33, i34, i35);
                }
            });
        }
        Integer errorBaseTextColor = styles.getErrorBaseTextColor();
        if (errorBaseTextColor != null) {
            int intValue4 = errorBaseTextColor.intValue();
            Integer errorErrorTextColor = styles.getErrorErrorTextColor();
            if (errorErrorTextColor != null) {
                i18 = errorErrorTextColor.intValue();
            } else {
                i18 = intValue4;
            }
            Integer errorFocusedTextColor = styles.getErrorFocusedTextColor();
            if (errorFocusedTextColor != null) {
                i19 = errorFocusedTextColor.intValue();
            } else {
                i19 = intValue4;
            }
            Integer errorDisabledTextColor = styles.getErrorDisabledTextColor();
            if (errorDisabledTextColor != null) {
                intValue4 = errorDisabledTextColor.intValue();
            }
            textInputLayout.setErrorTextColor(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{i18, i19, intValue4, i18}));
        }
        Integer labelBaseTextColor = styles.getLabelBaseTextColor();
        if (labelBaseTextColor != null) {
            int intValue5 = labelBaseTextColor.intValue();
            Integer labelFocusedTextColor = styles.getLabelFocusedTextColor();
            if (labelFocusedTextColor != null) {
                i15 = labelFocusedTextColor.intValue();
            } else {
                i15 = intValue5;
            }
            Integer labelDisabledTextColor = styles.getLabelDisabledTextColor();
            if (labelDisabledTextColor != null) {
                i16 = labelDisabledTextColor.intValue();
            } else {
                i16 = intValue5;
            }
            Integer labelErrorTextColor = styles.getLabelErrorTextColor();
            if (labelErrorTextColor != null) {
                i17 = labelErrorTextColor.intValue();
            } else {
                i17 = intValue5;
            }
            final ColorStateList colorStateList2 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{intValue5, i15, i16, intValue5});
            final ColorStateList colorStateList3 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{i17, i17, i17, i17});
            textInputLayout.setDefaultHintTextColor(colorStateList2);
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: iq.w
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i28, int i29, int i30, int i31, int i32, int i33, int i34, int i35) {
                    a0.m(TextInputLayout.this, colorStateList3, colorStateList2, view, i28, i29, i30, i31, i32, i33, i34, i35);
                }
            });
        }
        EditText editText9 = textInputLayout.getEditText();
        if (editText9 instanceof MaterialAutoCompleteTextView) {
            materialAutoCompleteTextView = (MaterialAutoCompleteTextView) editText9;
        } else {
            materialAutoCompleteTextView = null;
        }
        if (materialAutoCompleteTextView != null && (focusedBackgroundColorValue = styles.getFocusedBackgroundColorValue()) != null) {
            materialAutoCompleteTextView.setDropDownBackgroundDrawable(new ColorDrawable(focusedBackgroundColorValue.intValue()));
        }
        StyleElements.SizeSet inputTextBoxMargins = styles.getInputTextBoxMargins();
        if (inputTextBoxMargins != null) {
            lq.d.c(textInputLayout, inputTextBoxMargins);
        }
        Integer placeholderBaseTextColor = styles.getPlaceholderBaseTextColor();
        if (placeholderBaseTextColor != null) {
            int intValue6 = placeholderBaseTextColor.intValue();
            Integer placeholderFocusedTextColor = styles.getPlaceholderFocusedTextColor();
            if (placeholderFocusedTextColor != null) {
                i12 = placeholderFocusedTextColor.intValue();
            } else {
                i12 = intValue6;
            }
            Integer placeholderErrorTextColor = styles.getPlaceholderErrorTextColor();
            if (placeholderErrorTextColor != null) {
                i13 = placeholderErrorTextColor.intValue();
            } else {
                i13 = intValue6;
            }
            Integer placeholderDisabledTextColor = styles.getPlaceholderDisabledTextColor();
            if (placeholderDisabledTextColor != null) {
                i14 = placeholderDisabledTextColor.intValue();
            } else {
                i14 = intValue6;
            }
            final ColorStateList colorStateList4 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{intValue6, i12, i14, intValue6});
            final ColorStateList colorStateList5 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{i13, i13, i13, i13});
            textInputLayout.setPlaceholderTextColor(colorStateList4);
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: iq.x
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i28, int i29, int i30, int i31, int i32, int i33, int i34, int i35) {
                    a0.n(TextInputLayout.this, colorStateList5, colorStateList4, view, i28, i29, i30, i31, i32, i33, i34, i35);
                }
            });
        }
        EditText editText10 = textInputLayout.getEditText();
        if (editText10 != null) {
            editText10.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: iq.y
                @Override // android.view.View.OnFocusChangeListener
                public final void onFocusChange(View view, boolean z10) {
                    a0.o(TextInputLayout.this, objectRef, view, z10);
                }
            });
        }
        Integer baseMaskToggleColor = styles.getBaseMaskToggleColor();
        if (baseMaskToggleColor != null) {
            int intValue7 = baseMaskToggleColor.intValue();
            Integer focusedMaskToggleColor = styles.getFocusedMaskToggleColor();
            if (focusedMaskToggleColor != null) {
                i10 = focusedMaskToggleColor.intValue();
            } else {
                i10 = intValue7;
            }
            Integer disabledMaskToggleColor = styles.getDisabledMaskToggleColor();
            if (disabledMaskToggleColor != null) {
                i11 = disabledMaskToggleColor.intValue();
            } else {
                i11 = intValue7;
            }
            textInputLayout.setEndIconTintList(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}, new int[]{-16842914}}, new int[]{intValue7, i10, i11, intValue7}));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(TextInputLayout textInputLayout, int i10, ColorStateList colorStateList, int i11, View view, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            EditText editText = textInputLayout.getEditText();
            if (editText != null) {
                editText.setTextColor(i10);
            }
            j(textInputLayout, i10);
            return;
        }
        EditText editText2 = textInputLayout.getEditText();
        if (editText2 != null) {
            editText2.setTextColor(colorStateList);
        }
        j(textInputLayout, i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(TextInputLayout textInputLayout, ColorStateList colorStateList, ColorStateList colorStateList2, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setDefaultHintTextColor(colorStateList);
        } else {
            textInputLayout.setDefaultHintTextColor(colorStateList2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(TextInputLayout textInputLayout, ColorStateList colorStateList, ColorStateList colorStateList2, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setPlaceholderTextColor(colorStateList);
        } else {
            textInputLayout.setPlaceholderTextColor(colorStateList2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(TextInputLayout textInputLayout, final Ref.ObjectRef objectRef, View view, final boolean z10) {
        textInputLayout.post(new Runnable() { // from class: iq.z
            @Override // java.lang.Runnable
            public final void run() {
                a0.p(Ref.ObjectRef.this, z10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(Ref.ObjectRef objectRef, boolean z10) {
        Function1 function1 = (Function1) objectRef.element;
        if (function1 != null) {
            function1.invoke(Boolean.valueOf(z10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(TextInputLayout textInputLayout, int i10, int i11, int i12, boolean z10) {
        CharSequence error = textInputLayout.getError();
        if (error == null || !StringsKt.o1(error)) {
            i(textInputLayout, z10, i10, i11, i12);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(TextInputLayout textInputLayout, int i10, int i11, int i12, int i13, View view, int i14, int i15, int i16, int i17, int i18, int i19, int i20, int i21) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setBoxBackgroundColor(i10);
        } else {
            i(textInputLayout, textInputLayout.hasFocus(), i11, i12, i13);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(TextInputLayout textInputLayout, Typeface it) {
        Intrinsics.checkNotNullParameter(it, "it");
        textInputLayout.setTypeface(it);
        return Unit.f31988a;
    }
}
