package iq;

import android.content.Context;
import android.graphics.Color;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f30099a;

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
            f30099a = iArr;
        }
    }

    public static final void b(ImageView imageView, CombinedStepImagePreview.CombinedStepImagePreviewComponentStyle combinedStepImagePreviewComponentStyle) {
        StyleElements.Size size;
        AttributeStyles.RemoteImageJustifyStyle justify;
        StyleElements.Position base;
        StyleElements.PositionType base2;
        float f10;
        StyleElements.SizeSet marginValue;
        Intrinsics.checkNotNullParameter(imageView, "<this>");
        if (combinedStepImagePreviewComponentStyle != null && (marginValue = combinedStepImagePreviewComponentStyle.getMarginValue()) != null) {
            lq.d.c(imageView, marginValue);
        }
        StyleElements.Size size2 = null;
        if (combinedStepImagePreviewComponentStyle != null) {
            size = combinedStepImagePreviewComponentStyle.getWidthValue();
        } else {
            size = null;
        }
        lq.d.b(imageView, size);
        if (combinedStepImagePreviewComponentStyle != null) {
            size2 = combinedStepImagePreviewComponentStyle.getHeightValue();
        }
        lq.d.a(imageView, size2);
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (combinedStepImagePreviewComponentStyle != null && (justify = combinedStepImagePreviewComponentStyle.getJustify()) != null && (base = justify.getBase()) != null && (base2 = base.getBase()) != null && (layoutParams instanceof ConstraintLayout.LayoutParams)) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            int i10 = a.f30099a[base2.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        f10 = 1.0f;
                    } else {
                        throw new or.p();
                    }
                } else {
                    f10 = 0.5f;
                }
            } else {
                f10 = 0.0f;
            }
            layoutParams2.G = f10;
        }
        imageView.setLayoutParams(layoutParams);
    }

    public static final void c(final ThemeableLottieAnimationView themeableLottieAnimationView, final LocalImageComponentStyle localImageComponentStyle, final String[] originalStrokeColors, final String[] originalFillColors, final String[] originalBackgroundColors) {
        Intrinsics.checkNotNullParameter(themeableLottieAnimationView, "<this>");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(originalBackgroundColors, "originalBackgroundColors");
        if (themeableLottieAnimationView.isLaidOut()) {
            d(themeableLottieAnimationView, localImageComponentStyle, originalStrokeColors, originalFillColors, originalBackgroundColors);
        } else {
            zp.s.b(themeableLottieAnimationView, new Function0() { // from class: iq.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e10;
                    e10 = g.e(ThemeableLottieAnimationView.this, localImageComponentStyle, originalStrokeColors, originalFillColors, originalBackgroundColors);
                    return e10;
                }
            });
        }
    }

    private static final void d(ThemeableLottieAnimationView themeableLottieAnimationView, LocalImageComponentStyle localImageComponentStyle, String[] strArr, String[] strArr2, String[] strArr3) {
        Integer num;
        Integer num2;
        Integer num3;
        StyleElements.Size size;
        AttributeStyles.LocalImageJustifyStyle justify;
        StyleElements.Position base;
        StyleElements.PositionType base2;
        float f10;
        StyleElements.SizeSet marginValue;
        StyleElements.Size size2 = null;
        if (localImageComponentStyle != null) {
            num = localImageComponentStyle.getStrokeColorValue();
        } else {
            num = null;
        }
        if (localImageComponentStyle != null) {
            num2 = localImageComponentStyle.getFillColorValue();
        } else {
            num2 = null;
        }
        if (localImageComponentStyle != null) {
            num3 = localImageComponentStyle.getBackgroundColorValue();
        } else {
            num3 = null;
        }
        g(themeableLottieAnimationView, num, num2, num3, strArr, strArr2, strArr3);
        if (localImageComponentStyle != null && (marginValue = localImageComponentStyle.getMarginValue()) != null) {
            lq.d.c(themeableLottieAnimationView, marginValue);
        }
        if (localImageComponentStyle != null) {
            size = localImageComponentStyle.getWidthValue();
        } else {
            size = null;
        }
        lq.d.b(themeableLottieAnimationView, size);
        if (localImageComponentStyle != null) {
            size2 = localImageComponentStyle.getHeightValue();
        }
        lq.d.a(themeableLottieAnimationView, size2);
        ViewGroup.LayoutParams layoutParams = themeableLottieAnimationView.getLayoutParams();
        if (localImageComponentStyle != null && (justify = localImageComponentStyle.getJustify()) != null && (base = justify.getBase()) != null && (base2 = base.getBase()) != null && (layoutParams instanceof ConstraintLayout.LayoutParams)) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            int i10 = a.f30099a[base2.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        f10 = 1.0f;
                    } else {
                        throw new or.p();
                    }
                } else {
                    f10 = 0.5f;
                }
            } else {
                f10 = 0.0f;
            }
            layoutParams2.G = f10;
        }
        themeableLottieAnimationView.setLayoutParams(layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(ThemeableLottieAnimationView themeableLottieAnimationView, LocalImageComponentStyle localImageComponentStyle, String[] strArr, String[] strArr2, String[] strArr3) {
        d(themeableLottieAnimationView, localImageComponentStyle, strArr, strArr2, strArr3);
        return Unit.f31988a;
    }

    public static final void f(ImageView imageView, RemoteImage component) {
        Intrinsics.checkNotNullParameter(imageView, "<this>");
        Intrinsics.checkNotNullParameter(component, "component");
        StyleElements.SizeSet margin = component.getMargin();
        if (margin != null) {
            lq.d.c(imageView, margin);
        }
        lq.d.b(imageView, component.getWidth());
        lq.d.a(imageView, component.getHeight());
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        StyleElements.PositionType justification = component.getJustification();
        float f10 = 0.0f;
        if (justification != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
                int i10 = a.f30099a[justification.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            f10 = 1.0f;
                        } else {
                            throw new or.p();
                        }
                    } else {
                        f10 = 0.5f;
                    }
                }
                layoutParams2.G = f10;
            }
        } else if (layoutParams instanceof ConstraintLayout.LayoutParams) {
            ConstraintLayout.LayoutParams layoutParams3 = (ConstraintLayout.LayoutParams) layoutParams;
            Context context = imageView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            if (pp.s.b(context, hp.a.f26766b, null, false, false, 14, null)) {
                f10 = 0.5f;
            }
            layoutParams3.G = f10;
        }
        imageView.setLayoutParams(layoutParams);
    }

    public static final void g(ThemeableLottieAnimationView themeableLottieAnimationView, Integer num, Integer num2, Integer num3, String[] originalStrokeColors, String[] originalFillColors, String[] originalBackgroundColors) {
        Intrinsics.checkNotNullParameter(themeableLottieAnimationView, "<this>");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(originalBackgroundColors, "originalBackgroundColors");
        if (num != null) {
            int intValue = num.intValue();
            for (String str : originalStrokeColors) {
                themeableLottieAnimationView.I(Color.parseColor(str), intValue);
            }
        }
        if (num2 != null) {
            int intValue2 = num2.intValue();
            for (String str2 : originalFillColors) {
                themeableLottieAnimationView.I(Color.parseColor(str2), intValue2);
            }
        }
        if (num3 != null) {
            int intValue3 = num3.intValue();
            for (String str3 : originalBackgroundColors) {
                themeableLottieAnimationView.I(Color.parseColor(str3), intValue3);
            }
        }
    }
}
