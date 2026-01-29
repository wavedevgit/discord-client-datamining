package bt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.JsonElement;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {
    public static final JsonElement a(x xVar, String key, Boolean bool) {
        Intrinsics.checkNotNullParameter(xVar, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        return xVar.b(key, h.b(bool));
    }

    public static final JsonElement b(x xVar, String key, Number number) {
        Intrinsics.checkNotNullParameter(xVar, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        return xVar.b(key, h.c(number));
    }

    public static final JsonElement c(x xVar, String key, String str) {
        Intrinsics.checkNotNullParameter(xVar, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        return xVar.b(key, h.d(str));
    }
}
