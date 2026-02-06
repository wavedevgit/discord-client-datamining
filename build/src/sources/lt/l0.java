package lt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {
    public static final Object a(Json json, DeserializationStrategy deserializer, y reader) {
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(reader, "reader");
        t0 b10 = u0.b(json, reader, null, 4, null);
        try {
            Object G = new w0(json, e1.f36650i, b10, deserializer.getDescriptor(), null).G(deserializer);
            b10.v();
            return G;
        } finally {
            b10.V();
        }
    }

    public static final void b(Json json, z writer, ft.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(writer, "writer");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        new x0(writer, json, e1.f36650i, new kt.q[e1.d().size()]).v(serializer, obj);
    }
}
