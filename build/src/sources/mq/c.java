package mq;

import android.content.Context;
import android.content.res.Resources;
import bq.n;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            context.getResources().getLayout(n.f7404c);
        } catch (Resources.NotFoundException unused) {
            ki.a.b(context);
        }
    }
}
