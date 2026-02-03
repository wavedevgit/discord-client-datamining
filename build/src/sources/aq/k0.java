package aq;

import android.widget.ImageView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k0 {
    public static final ImageView b(i0 i0Var, m5 uiComponentHelper, final CombinedStepImagePreview config) {
        Intrinsics.checkNotNullParameter(i0Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final op.f c10 = op.f.c(uiComponentHelper.b());
        uiComponentHelper.d(new Function0() { // from class: aq.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = k0.c(op.f.this, config);
                return c11;
            }
        });
        ImageView root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(op.f fVar, CombinedStepImagePreview combinedStepImagePreview) {
        ImageView imageView = fVar.f44403b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        fq.g.b(imageView, combinedStepImagePreview.getStyles());
        return Unit.f32464a;
    }
}
