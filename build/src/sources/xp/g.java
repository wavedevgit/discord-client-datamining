package xp;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.imageview.ShapeableImageView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static final View b(e eVar, m5 uiComponentHelper) {
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Context a10 = uiComponentHelper.a();
        if (!eVar.a()) {
            return null;
        }
        final ShapeableImageView shapeableImageView = new ShapeableImageView(a10);
        shapeableImageView.setImageResource(vp.d.f51781b);
        shapeableImageView.setAdjustViewBounds(true);
        int dimension = (int) a10.getResources().getDimension(jp.k.f32305b);
        shapeableImageView.setPadding(dimension, shapeableImageView.getPaddingTop(), dimension, shapeableImageView.getPaddingBottom());
        uiComponentHelper.d(new Function0() { // from class: xp.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c10;
                c10 = g.c(ShapeableImageView.this);
                return c10;
            }
        });
        return shapeableImageView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(ShapeableImageView shapeableImageView) {
        ViewGroup.LayoutParams layoutParams = shapeableImageView.getLayoutParams();
        if (layoutParams != null) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            layoutParams2.G = 1.0f;
            ((ViewGroup.MarginLayoutParams) layoutParams2).width = -2;
            ((ViewGroup.MarginLayoutParams) layoutParams2).height = -2;
            shapeableImageView.setLayoutParams(layoutParams2);
            return Unit.f33282a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
    }
}
