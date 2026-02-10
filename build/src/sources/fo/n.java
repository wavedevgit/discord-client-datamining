package fo;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {
    public ko.a a(kr.a realCameraStatsManager) {
        Intrinsics.checkNotNullParameter(realCameraStatsManager, "realCameraStatsManager");
        Object obj = realCameraStatsManager.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        return (ko.a) obj;
    }

    public final MutableSharedFlow b() {
        return bt.c0.b(0, 0, null, 7, null);
    }

    public final MutableSharedFlow c() {
        return bt.c0.b(0, 0, null, 7, null);
    }
}
