package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a1 {
    public static final z0 a(Json json, String source) {
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(source, "source");
        if (!json.e().a()) {
            return new z0(source);
        }
        return new b1(source);
    }
}
