package fq;

import android.content.Context;
import android.graphics.drawable.Drawable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import kotlin.jvm.internal.Intrinsics;
import kp.s;
import kp.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final Drawable a(StepStyle stepStyle, Context context) {
        Integer g10;
        Intrinsics.checkNotNullParameter(stepStyle, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        String backgroundImageName = stepStyle.getBackgroundImageName();
        if (backgroundImageName == null || (g10 = s.g(context, backgroundImageName, t.f36312e)) == null) {
            return null;
        }
        return androidx.core.content.a.e(context, g10.intValue());
    }
}
