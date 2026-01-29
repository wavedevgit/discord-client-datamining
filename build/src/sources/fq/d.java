package fq;

import android.content.Context;
import android.graphics.Typeface;
import android.text.SpannableString;
import android.text.style.AbsoluteSizeSpan;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import ir.p;
import jp.h;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import xp.p5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final void a(View view, StyleElements.Size size) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            if (size instanceof StyleElements.DPSize) {
                Double dp2 = ((StyleElements.DPSize) size).getDp();
                if (dp2 != null) {
                    layoutParams.height = (int) h.a(dp2.doubleValue());
                } else {
                    return;
                }
            } else if (size instanceof StyleElements.Size.PercentSize) {
                ViewParent parent = view.getParent();
                if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                    ((ConstraintLayout.LayoutParams) layoutParams).W = (float) ((StyleElements.Size.PercentSize) size).getPercent();
                } else if (parent instanceof View) {
                    layoutParams.height = (int) (((StyleElements.Size.PercentSize) size).getPercent() * ((View) parent).getHeight());
                }
            } else if (size != null) {
                throw new p();
            }
            view.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public static final void b(View view, StyleElements.Size size) {
        View view2;
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            ViewParent parent = view.getParent();
            ViewGroup.LayoutParams layoutParams2 = null;
            if (parent instanceof View) {
                view2 = (View) parent;
            } else {
                view2 = null;
            }
            if (size instanceof StyleElements.DPSize) {
                Double dp2 = ((StyleElements.DPSize) size).getDp();
                if (dp2 != null) {
                    int a10 = (int) h.a(dp2.doubleValue());
                    if (view2 != null) {
                        layoutParams2 = view2.getLayoutParams();
                    }
                    int i10 = Integer.MAX_VALUE;
                    if ((layoutParams2 == null || layoutParams2.width != -2) && view2 != null) {
                        i10 = view2.getWidth();
                    }
                    layoutParams.width = kotlin.ranges.d.i(a10, i10);
                } else {
                    return;
                }
            } else if (size instanceof StyleElements.Size.PercentSize) {
                if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                    ((ConstraintLayout.LayoutParams) layoutParams).V = (float) ((StyleElements.Size.PercentSize) size).getPercent();
                } else if (view2 != null) {
                    layoutParams.width = (int) (((StyleElements.Size.PercentSize) size).getPercent() * view2.getWidth());
                }
            } else if (size != null) {
                throw new p();
            }
            view.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public static final void c(View view, StyleElements.SizeSet margins) {
        int i10;
        int i11;
        int i12;
        int i13;
        Double dp2;
        Double dp3;
        Double dp4;
        Double dp5;
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(margins, "margins");
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                StyleElements.Size left = margins.getLeft();
                if (left != null && (dp5 = left.getDp()) != null) {
                    i10 = (int) h.a(dp5.doubleValue());
                } else {
                    i10 = marginLayoutParams.leftMargin;
                }
                marginLayoutParams.leftMargin = i10;
                StyleElements.Size right = margins.getRight();
                if (right != null && (dp4 = right.getDp()) != null) {
                    i11 = (int) h.a(dp4.doubleValue());
                } else {
                    i11 = marginLayoutParams.rightMargin;
                }
                marginLayoutParams.rightMargin = i11;
                StyleElements.Size top = margins.getTop();
                if (top != null && (dp3 = top.getDp()) != null) {
                    i12 = (int) h.a(dp3.doubleValue());
                } else {
                    i12 = marginLayoutParams.topMargin;
                }
                marginLayoutParams.topMargin = i12;
                StyleElements.Size bottom = margins.getBottom();
                if (bottom != null && (dp2 = bottom.getDp()) != null) {
                    i13 = (int) h.a(dp2.doubleValue());
                } else {
                    i13 = marginLayoutParams.bottomMargin;
                }
                marginLayoutParams.bottomMargin = i13;
            }
            view.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public static final void d(TextInputLayout textInputLayout, String str, TextBasedComponentStyle textBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(textInputLayout, "<this>");
        if (str != null && !StringsKt.k0(str)) {
            textInputLayout.setError(str);
            if (textBasedComponentStyle != null) {
                SpannableString spannableString = new SpannableString(textInputLayout.getError());
                String fontNameValue = textBasedComponentStyle.getFontNameValue();
                if (fontNameValue != null) {
                    Context context = textInputLayout.getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    Typeface a10 = p5.a(context, fontNameValue);
                    if (a10 != null) {
                        spannableString.setSpan(new c(a10), 0, spannableString.length(), 33);
                    }
                }
                Double fontSizeValue = textBasedComponentStyle.getFontSizeValue();
                if (fontSizeValue != null) {
                    spannableString.setSpan(new AbsoluteSizeSpan((int) h.a(fontSizeValue.doubleValue())), 0, spannableString.length(), 33);
                }
                textInputLayout.setError(spannableString);
                return;
            }
            return;
        }
        textInputLayout.setErrorEnabled(false);
    }

    public static final void e(View view, StyleElements.SizeSet padding) {
        int paddingLeft;
        int paddingTop;
        int paddingRight;
        int paddingBottom;
        Double dp2;
        Double dp3;
        Double dp4;
        Double dp5;
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(padding, "padding");
        StyleElements.Size left = padding.getLeft();
        if (left != null && (dp5 = left.getDp()) != null) {
            paddingLeft = (int) h.a(dp5.doubleValue());
        } else {
            paddingLeft = view.getPaddingLeft();
        }
        StyleElements.Size top = padding.getTop();
        if (top != null && (dp4 = top.getDp()) != null) {
            paddingTop = (int) h.a(dp4.doubleValue());
        } else {
            paddingTop = view.getPaddingTop();
        }
        StyleElements.Size right = padding.getRight();
        if (right != null && (dp3 = right.getDp()) != null) {
            paddingRight = (int) h.a(dp3.doubleValue());
        } else {
            paddingRight = view.getPaddingRight();
        }
        StyleElements.Size bottom = padding.getBottom();
        if (bottom != null && (dp2 = bottom.getDp()) != null) {
            paddingBottom = (int) h.a(dp2.doubleValue());
        } else {
            paddingBottom = view.getPaddingBottom();
        }
        view.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
    }
}
