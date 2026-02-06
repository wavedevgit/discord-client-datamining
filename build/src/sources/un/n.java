package un;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {
    public zn.a a(ar.a realCameraStatsManager) {
        Intrinsics.checkNotNullParameter(realCameraStatsManager, "realCameraStatsManager");
        Object obj = realCameraStatsManager.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        return (zn.a) obj;
    }

    public final MutableSharedFlow b() {
        return rs.c0.b(0, 0, null, 7, null);
    }

    public final MutableSharedFlow c() {
        return rs.c0.b(0, 0, null, 7, null);
    }
}
