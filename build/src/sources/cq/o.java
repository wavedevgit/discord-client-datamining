package cq;

import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.LayerDrawable;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {
    private static final void h(TextInputLayout textInputLayout, int i10) {
        ViewGroup.MarginLayoutParams marginLayoutParams;
        GradientDrawable gradientDrawable = new GradientDrawable();
        int i11 = 0;
        gradientDrawable.setShape(0);
        gradientDrawable.setStroke(i10, textInputLayout.getBoxStrokeColor());
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gradientDrawable});
        int i12 = -i10;
        ViewGroup.LayoutParams layoutParams = textInputLayout.getLayoutParams();
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
        } else {
            marginLayoutParams = null;
        }
        if (marginLayoutParams != null) {
            i11 = marginLayoutParams.bottomMargin;
        }
        layerDrawable.setLayerInset(0, i12, i12, i12, i11);
        textInputLayout.setBackground(layerDrawable);
    }

    /* JADX WARN: Type inference failed for: r0v46, types: [T, cq.h] */
    public static final void i(final TextInputLayout textInputLayout, InputSelectComponentStyle styles) {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        final int i21;
        double d10;
        int i22;
        int i23;
        final int i24;
        final int i25;
        final int i26;
        double d11 = 0.0d;
        Double valueOf = Double.valueOf(0.0d);
        Intrinsics.checkNotNullParameter(textInputLayout, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            final int intValue = baseBackgroundColorValue.intValue();
            Integer focusedBackgroundColorValue = styles.getFocusedBackgroundColorValue();
            if (focusedBackgroundColorValue != null) {
                i24 = focusedBackgroundColorValue.intValue();
            } else {
                i24 = intValue;
            }
            Integer disabledBackgroundColorValue = styles.getDisabledBackgroundColorValue();
            if (disabledBackgroundColorValue != null) {
                i25 = disabledBackgroundColorValue.intValue();
            } else {
                i25 = intValue;
            }
            Integer errorBackgroundColorValue = styles.getErrorBackgroundColorValue();
            if (errorBackgroundColorValue != null) {
                i26 = errorBackgroundColorValue.intValue();
            } else {
                i26 = intValue;
            }
            textInputLayout.setBoxBackgroundMode(2);
            a0.i(textInputLayout, textInputLayout.hasFocus(), intValue, i24, i25);
            objectRef.element = new Function1() { // from class: cq.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n10;
                    n10 = o.n(TextInputLayout.this, intValue, i24, i25, ((Boolean) obj).booleanValue());
                    return n10;
                }
            };
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: cq.i
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i27, int i28, int i29, int i30, int i31, int i32, int i33, int i34) {
                    o.o(TextInputLayout.this, i26, intValue, i24, i25, view, i27, i28, i29, i30, i31, i32, i33, i34);
                }
            });
        }
        Integer baseBorderColorValue = styles.getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            int intValue2 = baseBorderColorValue.intValue();
            Integer focusedBorderColorValue = styles.getFocusedBorderColorValue();
            if (focusedBorderColorValue != null) {
                i22 = focusedBorderColorValue.intValue();
            } else {
                i22 = intValue2;
            }
            Integer disabledBorderColorValue = styles.getDisabledBorderColorValue();
            if (disabledBorderColorValue != null) {
                i23 = disabledBorderColorValue.intValue();
            } else {
                i23 = intValue2;
            }
            i10 = -16842910;
            textInputLayout.setBoxStrokeColorStateList(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}}, new int[]{intValue2, i22, i23}));
            Integer errorBorderColorValue = styles.getErrorBorderColorValue();
            if (errorBorderColorValue != null) {
                intValue2 = errorBorderColorValue.intValue();
            }
            textInputLayout.setBoxStrokeErrorColor(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842910}}, new int[]{intValue2, intValue2, intValue2}));
        } else {
            i10 = -16842910;
        }
        Double topBorderWidthValue = styles.getTopBorderWidthValue();
        if (topBorderWidthValue != null) {
            double doubleValue = topBorderWidthValue.doubleValue();
            textInputLayout.setBoxStrokeWidth((int) Math.ceil(jp.h.a(doubleValue)));
            textInputLayout.setBoxStrokeWidthFocused((int) Math.ceil(jp.h.a(doubleValue)));
        }
        if (textInputLayout.getBoxStrokeWidth() == 0) {
            Double bottomBorderWidthValue = styles.getBottomBorderWidthValue();
            if (bottomBorderWidthValue != null) {
                d10 = bottomBorderWidthValue.doubleValue();
            } else {
                d10 = 0.0d;
            }
            if (d10 > 0.0d) {
                Double bottomBorderWidthValue2 = styles.getBottomBorderWidthValue();
                if (bottomBorderWidthValue2 != null) {
                    d11 = jp.h.a(bottomBorderWidthValue2.doubleValue());
                }
                h(textInputLayout, (int) Math.ceil(d11));
            }
        }
        Integer chevronColor = styles.getChevronColor();
        if (chevronColor != null) {
            int intValue3 = chevronColor.intValue();
            textInputLayout.setEndIconTintList(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{-16842908}, new int[]{16843623}, new int[]{16842910}, new int[]{i10}}, new int[]{intValue3, intValue3, intValue3, intValue3, intValue3, intValue3}));
        }
        Double borderRadiusValue = styles.getBorderRadiusValue();
        if (borderRadiusValue != null) {
            double doubleValue2 = borderRadiusValue.doubleValue();
            textInputLayout.Z((float) jp.h.a(doubleValue2), (float) jp.h.a(doubleValue2), (float) jp.h.a(doubleValue2), (float) jp.h.a(doubleValue2));
        }
        StyleElements.SizeSet inputSelectBoxMargins = styles.getInputSelectBoxMargins();
        if (inputSelectBoxMargins != null) {
            fq.d.c(textInputLayout, inputSelectBoxMargins);
        }
        EditText editText = textInputLayout.getEditText();
        if (editText != null) {
            f0.n(editText, styles.getTextBasedStyle(), null, 2, null);
        }
        EditText editText2 = textInputLayout.getEditText();
        if (editText2 != null) {
            fq.d.c(editText2, new StyleElements.SizeSet(new StyleElements.DPSize(valueOf), new StyleElements.DPSize(valueOf), new StyleElements.DPSize(valueOf), new StyleElements.DPSize(valueOf)));
        }
        Integer baseTextColor = styles.getBaseTextColor();
        if (baseTextColor != null) {
            int intValue4 = baseTextColor.intValue();
            Integer valueFocusedTextColor = styles.getValueFocusedTextColor();
            if (valueFocusedTextColor != null) {
                i19 = valueFocusedTextColor.intValue();
            } else {
                i19 = intValue4;
            }
            Integer valueDisabledTextColor = styles.getValueDisabledTextColor();
            if (valueDisabledTextColor != null) {
                i20 = valueDisabledTextColor.intValue();
            } else {
                i20 = intValue4;
            }
            Integer valueErrorTextColor = styles.getValueErrorTextColor();
            if (valueErrorTextColor != null) {
                i21 = valueErrorTextColor.intValue();
            } else {
                i21 = intValue4;
            }
            final ColorStateList colorStateList = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{intValue4, i19, i20, intValue4});
            EditText editText3 = textInputLayout.getEditText();
            if (editText3 != null) {
                editText3.setTextColor(colorStateList);
            }
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: cq.j
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i27, int i28, int i29, int i30, int i31, int i32, int i33, int i34) {
                    o.p(TextInputLayout.this, i21, colorStateList, view, i27, i28, i29, i30, i31, i32, i33, i34);
                }
            });
        }
        Integer errorBaseTextColor = styles.getErrorBaseTextColor();
        if (errorBaseTextColor != null) {
            int intValue5 = errorBaseTextColor.intValue();
            Integer errorErrorTextColor = styles.getErrorErrorTextColor();
            if (errorErrorTextColor != null) {
                i17 = errorErrorTextColor.intValue();
            } else {
                i17 = intValue5;
            }
            Integer errorFocusedTextColor = styles.getErrorFocusedTextColor();
            if (errorFocusedTextColor != null) {
                i18 = errorFocusedTextColor.intValue();
            } else {
                i18 = intValue5;
            }
            Integer errorDisabledTextColor = styles.getErrorDisabledTextColor();
            if (errorDisabledTextColor != null) {
                intValue5 = errorDisabledTextColor.intValue();
            }
            textInputLayout.setErrorTextColor(new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{i17, i18, intValue5, i17}));
        }
        Integer labelBaseTextColor = styles.getLabelBaseTextColor();
        if (labelBaseTextColor != null) {
            int intValue6 = labelBaseTextColor.intValue();
            Integer labelFocusedTextColor = styles.getLabelFocusedTextColor();
            if (labelFocusedTextColor != null) {
                i14 = labelFocusedTextColor.intValue();
            } else {
                i14 = intValue6;
            }
            Integer labelDisabledTextColor = styles.getLabelDisabledTextColor();
            if (labelDisabledTextColor != null) {
                i15 = labelDisabledTextColor.intValue();
            } else {
                i15 = intValue6;
            }
            Integer labelErrorTextColor = styles.getLabelErrorTextColor();
            if (labelErrorTextColor != null) {
                i16 = labelErrorTextColor.intValue();
            } else {
                i16 = intValue6;
            }
            final ColorStateList colorStateList2 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{intValue6, i14, i15, intValue6});
            final ColorStateList colorStateList3 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{i16, i16, i16, i16});
            textInputLayout.setDefaultHintTextColor(colorStateList2);
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: cq.k
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i27, int i28, int i29, int i30, int i31, int i32, int i33, int i34) {
                    o.j(TextInputLayout.this, colorStateList3, colorStateList2, view, i27, i28, i29, i30, i31, i32, i33, i34);
                }
            });
        }
        Integer placeholderBaseTextColor = styles.getPlaceholderBaseTextColor();
        if (placeholderBaseTextColor != null) {
            int intValue7 = placeholderBaseTextColor.intValue();
            Integer placeholderFocusedTextColor = styles.getPlaceholderFocusedTextColor();
            if (placeholderFocusedTextColor != null) {
                i11 = placeholderFocusedTextColor.intValue();
            } else {
                i11 = intValue7;
            }
            Integer placeholderErrorTextColor = styles.getPlaceholderErrorTextColor();
            if (placeholderErrorTextColor != null) {
                i12 = placeholderErrorTextColor.intValue();
            } else {
                i12 = intValue7;
            }
            Integer placeholderDisabledTextColor = styles.getPlaceholderDisabledTextColor();
            if (placeholderDisabledTextColor != null) {
                i13 = placeholderDisabledTextColor.intValue();
            } else {
                i13 = intValue7;
            }
            final ColorStateList colorStateList4 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{intValue7, i11, i13, intValue7});
            final ColorStateList colorStateList5 = new ColorStateList(new int[][]{new int[]{16842914}, new int[]{16842908}, new int[]{i10}, new int[]{-16842914}}, new int[]{i12, i12, i12, i12});
            textInputLayout.setPlaceholderTextColor(colorStateList4);
            textInputLayout.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: cq.l
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i27, int i28, int i29, int i30, int i31, int i32, int i33, int i34) {
                    o.k(TextInputLayout.this, colorStateList5, colorStateList4, view, i27, i28, i29, i30, i31, i32, i33, i34);
                }
            });
        }
        EditText editText4 = textInputLayout.getEditText();
        if (editText4 != null) {
            editText4.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: cq.m
                @Override // android.view.View.OnFocusChangeListener
                public final void onFocusChange(View view, boolean z10) {
                    o.l(TextInputLayout.this, objectRef, view, z10);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(TextInputLayout textInputLayout, ColorStateList colorStateList, ColorStateList colorStateList2, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setDefaultHintTextColor(colorStateList);
        } else {
            textInputLayout.setDefaultHintTextColor(colorStateList2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(TextInputLayout textInputLayout, ColorStateList colorStateList, ColorStateList colorStateList2, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setPlaceholderTextColor(colorStateList);
        } else {
            textInputLayout.setPlaceholderTextColor(colorStateList2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(TextInputLayout textInputLayout, final Ref.ObjectRef objectRef, View view, final boolean z10) {
        textInputLayout.post(new Runnable() { // from class: cq.n
            @Override // java.lang.Runnable
            public final void run() {
                o.m(Ref.ObjectRef.this, z10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(Ref.ObjectRef objectRef, boolean z10) {
        Function1 function1 = (Function1) objectRef.element;
        if (function1 != null) {
            function1.invoke(Boolean.valueOf(z10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(TextInputLayout textInputLayout, int i10, int i11, int i12, boolean z10) {
        CharSequence error = textInputLayout.getError();
        if (error == null || !StringsKt.o1(error)) {
            a0.i(textInputLayout, z10, i10, i11, i12);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(TextInputLayout textInputLayout, int i10, int i11, int i12, int i13, View view, int i14, int i15, int i16, int i17, int i18, int i19, int i20, int i21) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            textInputLayout.setBoxBackgroundColor(i10);
        } else {
            a0.i(textInputLayout, textInputLayout.hasFocus(), i11, i12, i13);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(TextInputLayout textInputLayout, int i10, ColorStateList colorStateList, View view, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
        CharSequence error = textInputLayout.getError();
        if (error != null && StringsKt.o1(error)) {
            EditText editText = textInputLayout.getEditText();
            if (editText != null) {
                editText.setTextColor(i10);
                return;
            }
            return;
        }
        EditText editText2 = textInputLayout.getEditText();
        if (editText2 != null) {
            editText2.setTextColor(colorStateList);
        }
    }
}
