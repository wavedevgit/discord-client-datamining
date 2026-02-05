package zm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class x {
    public static final void a(a aVar, o worker, KType workerType, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(workerType, "workerType");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        aVar.b(new p(workerType, key), worker, key, handler);
    }
}
