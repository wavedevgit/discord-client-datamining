package aq;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z {
    public static final View a(y yVar, m5 uiComponentHelper, List componentViews, List children, Footer config) {
        int i10;
        Double dp2;
        int i11;
        int i12;
        int i13;
        int i14;
        Double dp3;
        Double dp4;
        Double dp5;
        Double dp6;
        Intrinsics.checkNotNullParameter(yVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(componentViews, "componentViews");
        Intrinsics.checkNotNullParameter(children, "children");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        dq.g c10 = dq.g.c(LayoutInflater.from(a10));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        Integer backgroundColor = config.getBackgroundColor();
        if (backgroundColor != null) {
            c10.f20778c.setBackgroundColor(backgroundColor.intValue());
        }
        StyleElements.SizeSet padding = config.getPadding();
        if (padding != null) {
            int dimensionPixelOffset = a10.getResources().getDimensionPixelOffset(mp.k.f38967b);
            StyleElements.Size left = padding.getLeft();
            if (left != null && (dp6 = left.getDp()) != null) {
                i11 = (int) mp.h.a(dp6.doubleValue());
            } else {
                i11 = 0;
            }
            int d10 = kotlin.ranges.d.d(i11, dimensionPixelOffset);
            StyleElements.Size right = padding.getRight();
            if (right != null && (dp5 = right.getDp()) != null) {
                i12 = (int) mp.h.a(dp5.doubleValue());
            } else {
                i12 = 0;
            }
            int d11 = kotlin.ranges.d.d(i12, dimensionPixelOffset);
            ConstraintLayout constraintLayout = c10.f20779d;
            StyleElements.Size top = padding.getTop();
            if (top != null && (dp4 = top.getDp()) != null) {
                i13 = (int) mp.h.a(dp4.doubleValue());
            } else {
                i13 = 0;
            }
            StyleElements.Size bottom = padding.getBottom();
            if (bottom != null && (dp3 = bottom.getDp()) != null) {
                i14 = (int) mp.h.a(dp3.doubleValue());
            } else {
                i14 = 0;
            }
            constraintLayout.setPadding(d10, i13, d11, i14);
        }
        StyleElements.SizeSet borderWidth = config.getBorderWidth();
        if (borderWidth != null) {
            View hairline = c10.f20781f;
            Intrinsics.checkNotNullExpressionValue(hairline, "hairline");
            ViewGroup.LayoutParams layoutParams = hairline.getLayoutParams();
            if (layoutParams != null) {
                StyleElements.Size top2 = borderWidth.getTop();
                if (top2 != null && (dp2 = top2.getDp()) != null) {
                    i10 = (int) mp.h.a(dp2.doubleValue());
                } else {
                    i10 = 0;
                }
                layoutParams.height = i10;
                hairline.setLayoutParams(layoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        } else {
            View hairline2 = c10.f20781f;
            Intrinsics.checkNotNullExpressionValue(hairline2, "hairline");
            ViewGroup.LayoutParams layoutParams2 = hairline2.getLayoutParams();
            if (layoutParams2 != null) {
                layoutParams2.height = (int) mp.h.a(1.0d);
                hairline2.setLayoutParams(layoutParams2);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(c10.f20779d);
        ConstraintLayout footerContainerInner = c10.f20779d;
        Intrinsics.checkNotNullExpressionValue(footerContainerInner, "footerContainerInner");
        List<View> list = children;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (View view : list) {
            view.setId(View.generateViewId());
            view.setSaveEnabled(false);
            footerContainerInner.addView(view);
            arrayList.add(Integer.valueOf(view.getId()));
        }
        a5.b(footerContainerInner, constraintSet, componentViews, arrayList, StyleElements.PositionType.CENTER, 0);
        constraintSet.c(c10.f20779d);
        LinearLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }
}
