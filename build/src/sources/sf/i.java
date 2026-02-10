package sf;

import android.content.Context;
import android.os.Looper;
import ff.a;
import gf.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends a.AbstractC0331a {
    @Override // ff.a.AbstractC0331a
    public final /* bridge */ /* synthetic */ a.f b(Context context, Looper looper, hf.d commonSettings, Object obj, gf.d connectedListener, k connectionFailedListener) {
        a.d.C0332a apiOptions = (a.d.C0332a) obj;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(commonSettings, "commonSettings");
        Intrinsics.checkNotNullParameter(apiOptions, "apiOptions");
        Intrinsics.checkNotNullParameter(connectedListener, "connectedListener");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
        return new e(context, looper, commonSettings, connectedListener, connectionFailedListener);
    }
}
