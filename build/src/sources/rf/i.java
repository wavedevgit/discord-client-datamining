package rf;

import android.content.Context;
import android.os.Looper;
import ef.a;
import ff.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends a.AbstractC0279a {
    @Override // ef.a.AbstractC0279a
    public final /* bridge */ /* synthetic */ a.f b(Context context, Looper looper, gf.d commonSettings, Object obj, ff.d connectedListener, k connectionFailedListener) {
        a.d.C0280a apiOptions = (a.d.C0280a) obj;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(commonSettings, "commonSettings");
        Intrinsics.checkNotNullParameter(apiOptions, "apiOptions");
        Intrinsics.checkNotNullParameter(connectedListener, "connectedListener");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
        return new e(context, looper, commonSettings, connectedListener, connectionFailedListener);
    }
}
