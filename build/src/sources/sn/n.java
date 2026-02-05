package sn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {
    public xn.a a(yq.a realCameraStatsManager) {
        Intrinsics.checkNotNullParameter(realCameraStatsManager, "realCameraStatsManager");
        Object obj = realCameraStatsManager.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        return (xn.a) obj;
    }

    public final MutableSharedFlow b() {
        return ps.c0.b(0, 0, null, 7, null);
    }

    public final MutableSharedFlow c() {
        return ps.c0.b(0, 0, null, 7, null);
    }
}
