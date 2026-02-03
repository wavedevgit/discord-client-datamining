package dq;

import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.Button;
import android.widget.ProgressBar;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.BaseButtonComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f22084a;

        static {
            int[] iArr = new int[StyleElements.PositionType.values().length];
            try {
                iArr[StyleElements.PositionType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StyleElements.PositionType.CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StyleElements.PositionType.END.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f22084a = iArr;
        }
    }

    private static final GradientDrawable b(BaseButtonComponentStyle baseButtonComponentStyle, boolean z10, boolean z11) {
        int i10;
        int i11;
        int i12;
        int i13;
        int intValue;
        int intValue2;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        Double borderWidthValue = baseButtonComponentStyle.getBorderWidthValue();
        if (borderWidthValue != null) {
            i10 = (int) kp.h.a(borderWidthValue.doubleValue());
        } else {
            i10 = 0;
        }
        Integer baseBorderColorValue = baseButtonComponentStyle.getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            i11 = baseBorderColorValue.intValue();
        } else {
            i11 = 0;
        }
        Integer activeTextColorValue = baseButtonComponentStyle.getActiveTextColorValue();
        if (activeTextColorValue != null) {
            i12 = activeTextColorValue.intValue();
        } else {
            i12 = i11;
        }
        Integer disabledTextColorValue = baseButtonComponentStyle.getDisabledTextColorValue();
        if (disabledTextColorValue != null) {
            i13 = disabledTextColorValue.intValue();
        } else {
            i13 = i11;
        }
        gradientDrawable.setStroke(i10, new ColorStateList(new int[][]{new int[]{16843518}, new int[]{-16842910}, new int[0]}, new int[]{i12, i13, i11}));
        Double borderRadiusValue = baseButtonComponentStyle.getBorderRadiusValue();
        if (borderRadiusValue != null) {
            float a10 = (float) kp.h.a(borderRadiusValue.doubleValue());
            Drawable mutate = gradientDrawable.mutate();
            Intrinsics.checkNotNull(mutate, "null cannot be cast to non-null type android.graphics.drawable.GradientDrawable");
            ((GradientDrawable) mutate).setCornerRadii(new float[]{a10, a10, a10, a10, a10, a10, a10, a10});
        }
        Integer baseBackgroundColorValue = baseButtonComponentStyle.getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            Integer activeBackgroundColorValue = baseButtonComponentStyle.getActiveBackgroundColorValue();
            if (activeBackgroundColorValue != null) {
                intValue = activeBackgroundColorValue.intValue();
            } else {
                intValue = baseBackgroundColorValue.intValue();
            }
            Integer disabledBackgroundColorValue = baseButtonComponentStyle.getDisabledBackgroundColorValue();
            if (disabledBackgroundColorValue != null) {
                intValue2 = disabledBackgroundColorValue.intValue();
            } else {
                intValue2 = baseBackgroundColorValue.intValue();
            }
            new ColorStateList(new int[][]{new int[]{16843518}, new int[]{-16842910}, new int[0]}, new int[]{intValue, intValue2, baseBackgroundColorValue.intValue()});
            gradientDrawable.setColor(new ColorStateList(new int[][]{new int[]{16843518}, new int[]{-16842910}, new int[0]}, new int[]{intValue, intValue2, baseBackgroundColorValue.intValue()}));
        }
        return gradientDrawable;
    }

    public static final void c(final Button button, final BaseButtonComponentStyle styles, final boolean z10, final boolean z11) {
        Intrinsics.checkNotNullParameter(button, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        if (button.isLaidOut()) {
            e(styles, button, z10, z11);
        } else {
            up.s.b(button, new Function0() { // from class: dq.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit g10;
                    g10 = e.g(BaseButtonComponentStyle.this, button, z10, z11);
                    return g10;
                }
            });
        }
    }

    public static final void d(ButtonWithLoadingIndicator buttonWithLoadingIndicator, BaseButtonComponentStyle styles) {
        Intrinsics.checkNotNullParameter(buttonWithLoadingIndicator, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        f(buttonWithLoadingIndicator.getButton(), styles, false, false, 6, null);
        Integer activeTextColorValue = styles.getActiveTextColorValue();
        if (activeTextColorValue != null) {
            buttonWithLoadingIndicator.getProgressBar().setIndeterminateTintList(new ColorStateList(new int[][]{new int[0]}, new int[]{activeTextColorValue.intValue()}));
        }
    }

    private static final void e(BaseButtonComponentStyle baseButtonComponentStyle, Button button, boolean z10, boolean z11) {
        View view;
        ViewGroup.MarginLayoutParams marginLayoutParams;
        int i10;
        int paddingLeft;
        int paddingTop;
        int paddingRight;
        int paddingBottom;
        Double dp2;
        Double dp3;
        Double dp4;
        Double dp5;
        int i11;
        int i12;
        Integer baseTextColorValue = baseButtonComponentStyle.getBaseTextColorValue();
        int i13 = 0;
        if (baseTextColorValue != null) {
            int intValue = baseTextColorValue.intValue();
            Integer activeTextColorValue = baseButtonComponentStyle.getActiveTextColorValue();
            if (activeTextColorValue != null) {
                i11 = activeTextColorValue.intValue();
            } else {
                i11 = intValue;
            }
            Integer disabledTextColorValue = baseButtonComponentStyle.getDisabledTextColorValue();
            if (disabledTextColorValue != null) {
                i12 = disabledTextColorValue.intValue();
            } else {
                i12 = intValue;
            }
            button.setTextColor(new ColorStateList(new int[][]{new int[]{16843518}, new int[]{-16842910}, new int[0]}, new int[]{i11, i12, intValue}));
        }
        Double fontSizeValue = baseButtonComponentStyle.getFontSizeValue();
        if (fontSizeValue != null) {
            button.setTextSize((float) fontSizeValue.doubleValue());
        }
        Double letterSpacingValue = baseButtonComponentStyle.getLetterSpacingValue();
        if (letterSpacingValue != null) {
            button.setLetterSpacing((float) (letterSpacingValue.doubleValue() / button.getTextSize()));
        }
        String fontNameValue = baseButtonComponentStyle.getFontNameValue();
        StyleElements.FontWeight fontWeightValue = baseButtonComponentStyle.getFontWeightValue();
        if (fontWeightValue == null) {
            fontWeightValue = StyleElements.FontWeight.NORMAL;
        }
        f0.j(button, fontNameValue, fontWeightValue, null, 4, null);
        Double lineHeightValue = baseButtonComponentStyle.getLineHeightValue();
        if (lineHeightValue != null) {
            double doubleValue = lineHeightValue.doubleValue();
            if (Build.VERSION.SDK_INT >= 28) {
                button.setLineHeight((int) kp.h.a(doubleValue));
            }
        }
        button.setBackground(b(baseButtonComponentStyle, button.isEnabled(), z10));
        ViewGroup.MarginLayoutParams marginLayoutParams2 = null;
        button.setBackgroundTintList(null);
        float f10 = 0.0f;
        button.setElevation(0.0f);
        button.setStateListAnimator(null);
        button.setAllCaps(false);
        ViewParent parent = button.getParent();
        if (parent instanceof ButtonWithLoadingIndicator) {
            view = (View) parent;
        } else {
            view = button;
        }
        StyleElements.SizeSet marginValue = baseButtonComponentStyle.getMarginValue();
        if (marginValue != null) {
            gq.d.c(button, marginValue);
            if (view instanceof ButtonWithLoadingIndicator) {
                ButtonWithLoadingIndicator buttonWithLoadingIndicator = (ButtonWithLoadingIndicator) view;
                ProgressBar progressBar = buttonWithLoadingIndicator.getProgressBar();
                StyleElements.Size left = marginValue.getLeft();
                if (left != null && (dp5 = left.getDp()) != null) {
                    paddingLeft = (int) kp.h.a(dp5.doubleValue());
                } else {
                    paddingLeft = buttonWithLoadingIndicator.getProgressBar().getPaddingLeft();
                }
                StyleElements.Size top = marginValue.getTop();
                if (top != null && (dp4 = top.getDp()) != null) {
                    paddingTop = (int) kp.h.a(dp4.doubleValue());
                } else {
                    paddingTop = buttonWithLoadingIndicator.getProgressBar().getPaddingTop();
                }
                StyleElements.Size right = marginValue.getRight();
                if (right != null && (dp3 = right.getDp()) != null) {
                    paddingRight = (int) kp.h.a(dp3.doubleValue());
                } else {
                    paddingRight = buttonWithLoadingIndicator.getProgressBar().getPaddingRight();
                }
                StyleElements.Size bottom = marginValue.getBottom();
                if (bottom != null && (dp2 = bottom.getDp()) != null) {
                    paddingBottom = (int) kp.h.a(dp2.doubleValue());
                } else {
                    paddingBottom = buttonWithLoadingIndicator.getProgressBar().getPaddingBottom();
                }
                progressBar.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
            }
        }
        StyleElements.SizeSet paddingValue = baseButtonComponentStyle.getPaddingValue();
        if (paddingValue != null) {
            gq.d.e(button, paddingValue);
        }
        int measuredWidth = view.getMeasuredWidth();
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            Double widthValue = baseButtonComponentStyle.getWidthValue();
            if (widthValue != null) {
                double doubleValue2 = widthValue.doubleValue();
                if (z11) {
                    layoutParams.width = kotlin.ranges.d.i((int) kp.h.a(doubleValue2), measuredWidth);
                }
            }
            Double heightValue = baseButtonComponentStyle.getHeightValue();
            if (heightValue != null) {
                double doubleValue3 = heightValue.doubleValue();
                if (z11) {
                    layoutParams.height = (int) kp.h.a(doubleValue3);
                }
            }
            if (view instanceof ButtonWithLoadingIndicator) {
                int i14 = layoutParams.height;
                ViewGroup.LayoutParams layoutParams2 = button.getLayoutParams();
                if (layoutParams2 instanceof ViewGroup.MarginLayoutParams) {
                    marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams2;
                } else {
                    marginLayoutParams = null;
                }
                if (marginLayoutParams != null) {
                    i10 = marginLayoutParams.topMargin;
                } else {
                    i10 = 0;
                }
                int i15 = i14 + i10;
                ViewGroup.LayoutParams layoutParams3 = button.getLayoutParams();
                if (layoutParams3 instanceof ViewGroup.MarginLayoutParams) {
                    marginLayoutParams2 = (ViewGroup.MarginLayoutParams) layoutParams3;
                }
                if (marginLayoutParams2 != null) {
                    i13 = marginLayoutParams2.bottomMargin;
                }
                layoutParams.height = i15 + i13;
            }
            StyleElements.PositionType justificationValue = baseButtonComponentStyle.getJustificationValue();
            if (justificationValue != null && (layoutParams instanceof ConstraintLayout.LayoutParams)) {
                ConstraintLayout.LayoutParams layoutParams4 = (ConstraintLayout.LayoutParams) layoutParams;
                int i16 = a.f22084a[justificationValue.ordinal()];
                if (i16 != 1) {
                    if (i16 != 2) {
                        if (i16 == 3) {
                            f10 = 1.0f;
                        } else {
                            throw new jr.p();
                        }
                    } else {
                        f10 = 0.5f;
                    }
                }
                layoutParams4.G = f10;
            }
            view.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public static /* synthetic */ void f(Button button, BaseButtonComponentStyle baseButtonComponentStyle, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        if ((i10 & 4) != 0) {
            z11 = true;
        }
        c(button, baseButtonComponentStyle, z10, z11);
    }

    public static final Unit g(BaseButtonComponentStyle baseButtonComponentStyle, Button button, boolean z10, boolean z11) {
        e(baseButtonComponentStyle, button, z10, z11);
        return Unit.f33074a;
    }
}
