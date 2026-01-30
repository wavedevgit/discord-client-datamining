package eq;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.steps.ui.components.f;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import tp.s;
import xp.m5;
import xp.r4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static final View b(RemoteImage remoteImage, ConstraintLayout container, boolean z10) {
        Intrinsics.checkNotNullParameter(remoteImage, "<this>");
        Intrinsics.checkNotNullParameter(container, "container");
        Context context = container.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final m5 m5Var = new m5(context);
        View m10 = r4.m(f.k(remoteImage), m5Var, remoteImage);
        container.addView(m10);
        ViewGroup.LayoutParams layoutParams = m10.getLayoutParams();
        if (layoutParams != null) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            layoutParams2.f2422i = 0;
            layoutParams2.f2444t = 0;
            layoutParams2.f2448v = 0;
            if (z10) {
                layoutParams2.f2428l = 0;
            }
            m10.setLayoutParams(layoutParams2);
            s.b(container, new Function0() { // from class: eq.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d10;
                    d10 = b.d(m5.this);
                    return d10;
                }
            });
            return m10;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
    }

    public static /* synthetic */ View c(RemoteImage remoteImage, ConstraintLayout constraintLayout, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return b(remoteImage, constraintLayout, z10);
    }

    public static final Unit d(m5 m5Var) {
        m5Var.c();
        return Unit.f33298a;
    }
}
