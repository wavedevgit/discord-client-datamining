package kq;

import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.LayerDrawable;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35233a;

        static {
            int[] iArr = new int[p.values().length];
            try {
                iArr[p.f35228d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[p.f35229e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[p.f35230i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f35233a = iArr;
        }
    }

    public static final void a(ConstraintLayout constraintLayout, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle) {
        Intrinsics.checkNotNullParameter(constraintLayout, "<this>");
        if (clickableStackComponentStyle != null) {
            e(constraintLayout, clickableStackComponentStyle);
            constraintLayout.setBackground(g(clickableStackComponentStyle, p.f35229e));
        }
    }

    public static final void b(ConstraintLayout constraintLayout, ClickableStack.ClickableStackComponentStyle styles) {
        Intrinsics.checkNotNullParameter(constraintLayout, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        e(constraintLayout, styles);
        constraintLayout.setBackground(g(styles, p.f35228d));
        Double widthValue = styles.getWidthValue();
        if (widthValue != null) {
            int a10 = (int) rp.h.a(widthValue.doubleValue());
            ViewGroup.LayoutParams layoutParams = constraintLayout.getLayoutParams();
            if (layoutParams != null) {
                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
                layoutParams2.f2902v = -1;
                ((ViewGroup.MarginLayoutParams) layoutParams2).width = a10;
                constraintLayout.setLayoutParams(layoutParams2);
                return;
            }
            throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
        }
    }

    public static final void c(ConstraintLayout constraintLayout, HorizontalStack.HorizontalStackComponentStyle styles) {
        Intrinsics.checkNotNullParameter(constraintLayout, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        f(constraintLayout, styles);
        constraintLayout.setBackground(h(styles));
        Double widthValue = styles.getWidthValue();
        if (widthValue != null) {
            int a10 = (int) rp.h.a(widthValue.doubleValue());
            ViewGroup.LayoutParams layoutParams = constraintLayout.getLayoutParams();
            if (layoutParams != null) {
                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
                layoutParams2.f2902v = -1;
                ((ViewGroup.MarginLayoutParams) layoutParams2).width = a10;
                constraintLayout.setLayoutParams(layoutParams2);
                return;
            }
            throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
        }
    }

    public static final void d(ConstraintLayout constraintLayout, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle) {
        Intrinsics.checkNotNullParameter(constraintLayout, "<this>");
        if (clickableStackComponentStyle != null) {
            e(constraintLayout, clickableStackComponentStyle);
            constraintLayout.setBackground(g(clickableStackComponentStyle, p.f35230i));
        }
    }

    private static final void e(ConstraintLayout constraintLayout, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle) {
        int paddingLeft;
        int paddingTop;
        int paddingRight;
        int paddingBottom;
        Double dp2;
        Double dp3;
        Double dp4;
        Double dp5;
        StyleElements.SizeSet marginValue = clickableStackComponentStyle.getMarginValue();
        if (marginValue != null) {
            nq.d.c(constraintLayout, marginValue);
        }
        StyleElements.SizeSet paddingValue = clickableStackComponentStyle.getPaddingValue();
        if (paddingValue != null) {
            StyleElements.Size left = paddingValue.getLeft();
            if (left != null && (dp5 = left.getDp()) != null) {
                paddingLeft = (int) rp.h.a(dp5.doubleValue());
            } else {
                paddingLeft = constraintLayout.getPaddingLeft();
            }
            StyleElements.Size top = paddingValue.getTop();
            if (top != null && (dp4 = top.getDp()) != null) {
                paddingTop = (int) rp.h.a(dp4.doubleValue());
            } else {
                paddingTop = constraintLayout.getPaddingTop();
            }
            StyleElements.Size right = paddingValue.getRight();
            if (right != null && (dp3 = right.getDp()) != null) {
                paddingRight = (int) rp.h.a(dp3.doubleValue());
            } else {
                paddingRight = constraintLayout.getPaddingRight();
            }
            StyleElements.Size bottom = paddingValue.getBottom();
            if (bottom != null && (dp2 = bottom.getDp()) != null) {
                paddingBottom = (int) rp.h.a(dp2.doubleValue());
            } else {
                paddingBottom = constraintLayout.getPaddingBottom();
            }
            constraintLayout.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
        }
    }

    private static final void f(ConstraintLayout constraintLayout, HorizontalStack.HorizontalStackComponentStyle horizontalStackComponentStyle) {
        int paddingLeft;
        int paddingTop;
        int paddingRight;
        int paddingBottom;
        Double dp2;
        Double dp3;
        Double dp4;
        Double dp5;
        StyleElements.SizeSet marginValue = horizontalStackComponentStyle.getMarginValue();
        if (marginValue != null) {
            nq.d.c(constraintLayout, marginValue);
        }
        StyleElements.SizeSet paddingValue = horizontalStackComponentStyle.getPaddingValue();
        if (paddingValue != null) {
            StyleElements.Size left = paddingValue.getLeft();
            if (left != null && (dp5 = left.getDp()) != null) {
                paddingLeft = (int) rp.h.a(dp5.doubleValue());
            } else {
                paddingLeft = constraintLayout.getPaddingLeft();
            }
            StyleElements.Size top = paddingValue.getTop();
            if (top != null && (dp4 = top.getDp()) != null) {
                paddingTop = (int) rp.h.a(dp4.doubleValue());
            } else {
                paddingTop = constraintLayout.getPaddingTop();
            }
            StyleElements.Size right = paddingValue.getRight();
            if (right != null && (dp3 = right.getDp()) != null) {
                paddingRight = (int) rp.h.a(dp3.doubleValue());
            } else {
                paddingRight = constraintLayout.getPaddingRight();
            }
            StyleElements.Size bottom = paddingValue.getBottom();
            if (bottom != null && (dp2 = bottom.getDp()) != null) {
                paddingBottom = (int) rp.h.a(dp2.doubleValue());
            } else {
                paddingBottom = constraintLayout.getPaddingBottom();
            }
            constraintLayout.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
        }
    }

    private static final LayerDrawable g(ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle, p pVar) {
        double d10;
        double d11;
        double d12;
        int intValue;
        Integer baseBackgroundColorValue;
        int i10;
        int i11;
        int i12;
        StyleElements.Size right;
        Double dp2;
        StyleElements.Size left;
        Double dp3;
        StyleElements.Size bottom;
        Double dp4;
        StyleElements.Size top;
        Double dp5;
        Double dp6;
        StyleElements.Size right2;
        Double dp7;
        StyleElements.Size left2;
        Double dp8;
        StyleElements.Size bottom2;
        Double dp9;
        StyleElements.Size top2;
        Double dp10;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        StyleElements.SizeSet borderWidthValue = clickableStackComponentStyle.getBorderWidthValue();
        double d13 = 0.0d;
        if (borderWidthValue != null && (top2 = borderWidthValue.getTop()) != null && (dp10 = top2.getDp()) != null) {
            d10 = dp10.doubleValue();
        } else {
            d10 = 0.0d;
        }
        Double valueOf = Double.valueOf(d10);
        StyleElements.SizeSet borderWidthValue2 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue2 != null && (bottom2 = borderWidthValue2.getBottom()) != null && (dp9 = bottom2.getDp()) != null) {
            d11 = dp9.doubleValue();
        } else {
            d11 = 0.0d;
        }
        Double valueOf2 = Double.valueOf(d11);
        StyleElements.SizeSet borderWidthValue3 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue3 != null && (left2 = borderWidthValue3.getLeft()) != null && (dp8 = left2.getDp()) != null) {
            d12 = dp8.doubleValue();
        } else {
            d12 = 0.0d;
        }
        Double valueOf3 = Double.valueOf(d12);
        StyleElements.SizeSet borderWidthValue4 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue4 != null && (right2 = borderWidthValue4.getRight()) != null && (dp7 = right2.getDp()) != null) {
            d13 = dp7.doubleValue();
        }
        List<Number> o10 = CollectionsKt.o(valueOf, valueOf2, valueOf3, Double.valueOf(d13));
        ArrayList arrayList = new ArrayList(CollectionsKt.w(o10, 10));
        for (Number number : o10) {
            arrayList.add(Integer.valueOf((int) Math.ceil(rp.h.a(number.doubleValue()))));
        }
        int intValue2 = ((Number) CollectionsKt.E0(arrayList)).intValue();
        int[] iArr = a.f35233a;
        int i13 = iArr[pVar.ordinal()];
        if (i13 != 1) {
            if (i13 != 2) {
                if (i13 == 3) {
                    Integer disabledBorderColorValue = clickableStackComponentStyle.getDisabledBorderColorValue();
                    if (disabledBorderColorValue != null) {
                        intValue = disabledBorderColorValue.intValue();
                    }
                    intValue = 0;
                } else {
                    throw new qr.p();
                }
            } else {
                Integer activeBorderColorValue = clickableStackComponentStyle.getActiveBorderColorValue();
                if (activeBorderColorValue != null) {
                    intValue = activeBorderColorValue.intValue();
                }
                intValue = 0;
            }
        } else {
            Integer baseBorderColorValue = clickableStackComponentStyle.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                intValue = baseBorderColorValue.intValue();
            }
            intValue = 0;
        }
        gradientDrawable.setStroke(intValue2, intValue);
        StyleElements.Size borderRadiusValue = clickableStackComponentStyle.getBorderRadiusValue();
        if (borderRadiusValue != null && (dp6 = borderRadiusValue.getDp()) != null) {
            float a10 = (float) rp.h.a(dp6.doubleValue());
            Drawable mutate = gradientDrawable.mutate();
            Intrinsics.checkNotNull(mutate, "null cannot be cast to non-null type android.graphics.drawable.GradientDrawable");
            ((GradientDrawable) mutate).setCornerRadii(new float[]{a10, a10, a10, a10, a10, a10, a10, a10});
        }
        int i14 = iArr[pVar.ordinal()];
        if (i14 != 1) {
            if (i14 != 2) {
                if (i14 == 3) {
                    baseBackgroundColorValue = clickableStackComponentStyle.getDisabledBackgroundColorValue();
                } else {
                    throw new qr.p();
                }
            } else {
                baseBackgroundColorValue = clickableStackComponentStyle.getActiveBackgroundColorValue();
            }
        } else {
            baseBackgroundColorValue = clickableStackComponentStyle.getBaseBackgroundColorValue();
        }
        if (baseBackgroundColorValue != null) {
            gradientDrawable.setColor(new ColorStateList(new int[][]{new int[0]}, new int[]{baseBackgroundColorValue.intValue()}));
        }
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gradientDrawable});
        StyleElements.SizeSet borderWidthValue5 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue5 != null && (top = borderWidthValue5.getTop()) != null && (dp5 = top.getDp()) != null) {
            i10 = intValue2 - ((int) Math.ceil(rp.h.a(dp5.doubleValue())));
        } else {
            i10 = intValue2;
        }
        StyleElements.SizeSet borderWidthValue6 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue6 != null && (bottom = borderWidthValue6.getBottom()) != null && (dp4 = bottom.getDp()) != null) {
            i11 = intValue2 - ((int) Math.ceil(rp.h.a(dp4.doubleValue())));
        } else {
            i11 = intValue2;
        }
        StyleElements.SizeSet borderWidthValue7 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue7 != null && (left = borderWidthValue7.getLeft()) != null && (dp3 = left.getDp()) != null) {
            i12 = intValue2 - ((int) Math.ceil(rp.h.a(dp3.doubleValue())));
        } else {
            i12 = intValue2;
        }
        StyleElements.SizeSet borderWidthValue8 = clickableStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue8 != null && (right = borderWidthValue8.getRight()) != null && (dp2 = right.getDp()) != null) {
            intValue2 -= (int) Math.ceil(rp.h.a(dp2.doubleValue()));
        }
        layerDrawable.setLayerInset(0, -i12, -i10, -intValue2, -i11);
        return layerDrawable;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v1 */
    private static final LayerDrawable h(HorizontalStack.HorizontalStackComponentStyle horizontalStackComponentStyle) {
        Double d10;
        Double d11;
        Double d12;
        Double d13;
        Object obj;
        int i10;
        int i11;
        int i12;
        int i13;
        StyleElements.Size right;
        Double dp2;
        StyleElements.Size left;
        Double dp3;
        StyleElements.Size bottom;
        Double dp4;
        StyleElements.Size top;
        Double dp5;
        Double dp6;
        StyleElements.Size right2;
        StyleElements.Size left2;
        StyleElements.Size bottom2;
        StyleElements.Size top2;
        GradientDrawable gradientDrawable = new GradientDrawable();
        Number number = 0;
        gradientDrawable.setShape(0);
        StyleElements.SizeSet borderWidthValue = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue == null || (top2 = borderWidthValue.getTop()) == null || (d10 = top2.getDp()) == null) {
            d10 = number;
        }
        StyleElements.SizeSet borderWidthValue2 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue2 == null || (bottom2 = borderWidthValue2.getBottom()) == null || (d11 = bottom2.getDp()) == null) {
            d11 = number;
        }
        StyleElements.SizeSet borderWidthValue3 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue3 == null || (left2 = borderWidthValue3.getLeft()) == null || (d12 = left2.getDp()) == null) {
            d12 = number;
        }
        StyleElements.SizeSet borderWidthValue4 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue4 == null || (right2 = borderWidthValue4.getRight()) == null || (d13 = right2.getDp()) == null) {
            d13 = number;
        }
        Iterator it = CollectionsKt.o(d10, d11, d12, d13).iterator();
        if (!it.hasNext()) {
            obj = null;
        } else {
            Object next = it.next();
            if (!it.hasNext()) {
                obj = next;
            } else {
                double ceil = Math.ceil(rp.h.a(((Number) next).doubleValue()));
                do {
                    Object next2 = it.next();
                    double ceil2 = Math.ceil(rp.h.a(((Number) next2).doubleValue()));
                    if (Double.compare(ceil, ceil2) < 0) {
                        next = next2;
                        ceil = ceil2;
                    }
                } while (it.hasNext());
                obj = next;
            }
        }
        if (obj != null) {
            number = obj;
        }
        int intValue = ((Number) number).intValue();
        Integer baseBorderColorValue = horizontalStackComponentStyle.getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            i10 = baseBorderColorValue.intValue();
        } else {
            i10 = 0;
        }
        gradientDrawable.setStroke(intValue, i10);
        StyleElements.Size borderRadiusValue = horizontalStackComponentStyle.getBorderRadiusValue();
        if (borderRadiusValue != null && (dp6 = borderRadiusValue.getDp()) != null) {
            float a10 = (float) rp.h.a(dp6.doubleValue());
            Drawable mutate = gradientDrawable.mutate();
            Intrinsics.checkNotNull(mutate, "null cannot be cast to non-null type android.graphics.drawable.GradientDrawable");
            ((GradientDrawable) mutate).setCornerRadii(new float[]{a10, a10, a10, a10, a10, a10, a10, a10});
        }
        Integer baseBackgroundColorValue = horizontalStackComponentStyle.getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            gradientDrawable.setColor(new ColorStateList(new int[][]{new int[0]}, new int[]{baseBackgroundColorValue.intValue()}));
        }
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gradientDrawable});
        StyleElements.SizeSet borderWidthValue5 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue5 != null && (top = borderWidthValue5.getTop()) != null && (dp5 = top.getDp()) != null) {
            i11 = intValue - ((int) Math.ceil(rp.h.a(dp5.doubleValue())));
        } else {
            i11 = intValue;
        }
        StyleElements.SizeSet borderWidthValue6 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue6 != null && (bottom = borderWidthValue6.getBottom()) != null && (dp4 = bottom.getDp()) != null) {
            i12 = intValue - ((int) Math.ceil(rp.h.a(dp4.doubleValue())));
        } else {
            i12 = intValue;
        }
        StyleElements.SizeSet borderWidthValue7 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue7 != null && (left = borderWidthValue7.getLeft()) != null && (dp3 = left.getDp()) != null) {
            i13 = intValue - ((int) Math.ceil(rp.h.a(dp3.doubleValue())));
        } else {
            i13 = intValue;
        }
        StyleElements.SizeSet borderWidthValue8 = horizontalStackComponentStyle.getBorderWidthValue();
        if (borderWidthValue8 != null && (right = borderWidthValue8.getRight()) != null && (dp2 = right.getDp()) != null) {
            intValue -= (int) Math.ceil(rp.h.a(dp2.doubleValue()));
        }
        layerDrawable.setLayerInset(0, -i13, -i11, -intValue, -i12);
        return layerDrawable;
    }
}
