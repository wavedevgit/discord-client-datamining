package ct;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class u0 {
    public static final t0 a(Json json, y reader, char[] buffer) {
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(reader, "reader");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (!json.e().a()) {
            return new t0(reader, buffer);
        }
        return new v0(reader, buffer);
    }

    public static /* synthetic */ t0 b(Json json, y yVar, char[] cArr, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            cArr = j.f21357c.d();
        }
        return a(json, yVar, cArr);
    }
}
