package cq;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.n0;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void b(ViewGroup viewGroup, StepStyle stepStyle, View innerView, Rect rect) {
        int d10;
        StyleElements.SizeSet modalPaddingValue;
        Integer num;
        Integer num2;
        Integer num3;
        Integer num4;
        int paddingLeft;
        int paddingTop;
        int paddingRight;
        int paddingBottom;
        Double dp2;
        Double dp3;
        int i10;
        Double dp4;
        int i11;
        Double dp5;
        int i12;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(viewGroup, "<this>");
        Intrinsics.checkNotNullParameter(innerView, "innerView");
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = viewGroup.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = jp.s.d(context, yg.b.f54354o, null, false, 6, null);
        }
        viewGroup.setBackgroundTintList(ColorStateList.valueOf(d10));
        if (stepStyle != null) {
            Context context2 = viewGroup.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            Drawable a10 = eq.c.a(stepStyle, context2);
            if (a10 != null) {
                e(viewGroup, a10);
            }
        }
        StyleElements.Size size = null;
        if (stepStyle != null && (modalPaddingValue = stepStyle.getModalPaddingValue()) != null) {
            StyleElements.Size left = modalPaddingValue.getLeft();
            int i13 = 0;
            if (left != null && (dp5 = left.getDp()) != null) {
                int a11 = (int) jp.h.a(dp5.doubleValue());
                if (rect != null) {
                    i12 = rect.left;
                } else {
                    i12 = 0;
                }
                num = Integer.valueOf(a11 - i12);
            } else {
                num = null;
            }
            StyleElements.Size top = modalPaddingValue.getTop();
            if (top != null && (dp4 = top.getDp()) != null) {
                int a12 = (int) jp.h.a(dp4.doubleValue());
                if (rect != null) {
                    i11 = rect.top;
                } else {
                    i11 = 0;
                }
                num2 = Integer.valueOf(a12 - i11);
            } else {
                num2 = null;
            }
            StyleElements.Size right = modalPaddingValue.getRight();
            if (right != null && (dp3 = right.getDp()) != null) {
                int a13 = (int) jp.h.a(dp3.doubleValue());
                if (rect != null) {
                    i10 = rect.right;
                } else {
                    i10 = 0;
                }
                num3 = Integer.valueOf(a13 - i10);
            } else {
                num3 = null;
            }
            StyleElements.Size bottom = modalPaddingValue.getBottom();
            if (bottom != null && (dp2 = bottom.getDp()) != null) {
                int a14 = (int) jp.h.a(dp2.doubleValue());
                if (rect != null) {
                    i13 = rect.bottom;
                }
                num4 = Integer.valueOf(a14 - i13);
            } else {
                num4 = null;
            }
            if (num != null) {
                paddingLeft = num.intValue();
            } else {
                paddingLeft = viewGroup.getPaddingLeft();
            }
            if (num2 != null) {
                paddingTop = num2.intValue();
            } else {
                paddingTop = viewGroup.getPaddingTop();
            }
            if (num3 != null) {
                paddingRight = num3.intValue();
            } else {
                paddingRight = viewGroup.getPaddingRight();
            }
            if (num4 != null) {
                paddingBottom = num4.intValue();
            } else {
                paddingBottom = viewGroup.getPaddingBottom();
            }
            innerView.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
        }
        if (stepStyle != null) {
            size = stepStyle.getModalBorderRadiusValue();
        }
        viewGroup.setBackground(d(size));
    }

    public static /* synthetic */ void c(ViewGroup viewGroup, StepStyle stepStyle, View view, Rect rect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            view = viewGroup;
        }
        if ((i10 & 4) != 0) {
            rect = null;
        }
        b(viewGroup, stepStyle, view, rect);
    }

    private static final GradientDrawable d(StyleElements.Size size) {
        double d10;
        Double dp2;
        GradientDrawable gradientDrawable = new GradientDrawable();
        if (size != null && (dp2 = size.getDp()) != null) {
            d10 = dp2.doubleValue();
        } else {
            d10 = 12.0d;
        }
        float a10 = (float) jp.h.a(d10);
        gradientDrawable.setCornerRadii(new float[]{a10, a10, a10, a10, 0.0f, 0.0f, 0.0f, 0.0f});
        gradientDrawable.setColor(ColorStateList.valueOf(-1));
        return gradientDrawable;
    }

    private static final void e(ViewGroup viewGroup, Drawable drawable) {
        Sequence F = kotlin.sequences.k.F(n0.a(viewGroup), new Function1() { // from class: cq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean f10;
                f10 = c.f((View) obj);
                return Boolean.valueOf(f10);
            }
        });
        if (kotlin.sequences.k.y(F)) {
            ((View) kotlin.sequences.k.J(F)).setBackground(drawable);
            return;
        }
        Context context = viewGroup.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        View aVar = new a(context);
        aVar.setBackground(drawable);
        viewGroup.addView(aVar, 0);
        ViewGroup.LayoutParams layoutParams = aVar.getLayoutParams();
        if (layoutParams != null) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            ((ViewGroup.MarginLayoutParams) layoutParams2).height = 0;
            layoutParams2.f2444t = viewGroup.getId();
            layoutParams2.f2448v = viewGroup.getId();
            layoutParams2.f2422i = viewGroup.getId();
            layoutParams2.f2428l = viewGroup.getId();
            aVar.setLayoutParams(layoutParams2);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it instanceof a;
    }
}
