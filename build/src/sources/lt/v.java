package lt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class v {
    public static final m a(z sb2, Json json) {
        Intrinsics.checkNotNullParameter(sb2, "sb");
        Intrinsics.checkNotNullParameter(json, "json");
        if (json.e().m()) {
            return new u(sb2, json);
        }
        return new m(sb2);
    }
}
