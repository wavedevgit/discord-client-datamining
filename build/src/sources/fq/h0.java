package fq;

import android.view.View;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h0 {
    public static final ConstraintLayout b(f0 f0Var, m5 uiComponentHelper, List componentViews, List children, HorizontalStack config) {
        double d10;
        StyleElements.Axis axis;
        int[] iArr;
        StyleElements.Size gapValue;
        Double dp2;
        Intrinsics.checkNotNullParameter(f0Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(componentViews, "componentViews");
        Intrinsics.checkNotNullParameter(children, "children");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.h c10 = iq.h.c(uiComponentHelper.b());
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(c10.getRoot());
        List<View> list = children;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (View view : list) {
            view.setId(View.generateViewId());
            view.setSaveEnabled(false);
            c10.getRoot().addView(view);
            arrayList.add(Integer.valueOf(view.getId()));
        }
        final HorizontalStack.HorizontalStackComponentStyle styles = config.getStyles();
        if (styles != null && (gapValue = styles.getGapValue()) != null && (dp2 = gapValue.getDp()) != null) {
            d10 = dp2.doubleValue();
        } else {
            d10 = 16.0d;
        }
        int a10 = (int) rp.h.a(d10);
        if (styles == null || (axis = styles.getAxisValue()) == null) {
            axis = StyleElements.Axis.HORIZONTAL;
        }
        StyleElements.PositionType positionType = null;
        if (axis == StyleElements.Axis.HORIZONTAL) {
            ConstraintLayout root = c10.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            if (styles != null) {
                iArr = styles.getChildSizesValue();
            } else {
                iArr = null;
            }
            if (styles != null) {
                positionType = styles.getAlignmentValue();
            }
            a5.a(root, constraintSet, componentViews, arrayList, iArr, positionType, a10);
        } else {
            StyleElements.PositionType positionType2 = null;
            ConstraintLayout root2 = c10.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            if (styles != null) {
                positionType2 = styles.getAlignmentValue();
            }
            a5.b(root2, constraintSet, componentViews, arrayList, positionType2, a10);
        }
        if (styles != null) {
            uiComponentHelper.d(new Function0() { // from class: fq.g0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c11;
                    c11 = h0.c(iq.h.this, styles);
                    return c11;
                }
            });
        }
        constraintSet.c(c10.getRoot());
        ConstraintLayout root3 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
        return root3;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(iq.h hVar, HorizontalStack.HorizontalStackComponentStyle horizontalStackComponentStyle) {
        ConstraintLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        kq.q.c(root, horizontalStackComponentStyle);
        return Unit.f32056a;
    }
}
