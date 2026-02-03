package ct;

import dt.l0;
import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b0 {
    public static final Object a(Json json, DeserializationStrategy deserializer, InputStream stream) {
        Intrinsics.checkNotNullParameter(json, "<this>");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(stream, "stream");
        dt.a0 a0Var = new dt.a0(stream);
        try {
            return l0.a(json, deserializer, a0Var);
        } finally {
            a0Var.b();
        }
    }
}
