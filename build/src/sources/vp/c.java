package vp;

import android.content.Context;
import android.content.res.Resources;
import kotlin.jvm.internal.Intrinsics;
import kp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            context.getResources().getLayout(n.f36277c);
        } catch (Resources.NotFoundException unused) {
            di.a.b(context);
        }
    }
}
