package yp;

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
        final mp.f c10 = mp.f.c(uiComponentHelper.b());
        uiComponentHelper.d(new Function0() { // from class: yp.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = k0.c(mp.f.this, config);
                return c11;
            }
        });
        ImageView root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(mp.f fVar, CombinedStepImagePreview combinedStepImagePreview) {
        ImageView imageView = fVar.f39139b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        dq.g.b(imageView, combinedStepImagePreview.getStyles());
        return Unit.f33074a;
    }
}
