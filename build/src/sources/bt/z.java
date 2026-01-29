package bt;

import ct.g0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonPrimitive;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final z f7840a = new z();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f7841b = zs.j.e("kotlinx.serialization.json.JsonPrimitive", e.i.f56091a, new SerialDescriptor[0], null, 8, null);

    private z() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonPrimitive deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        JsonElement g10 = p.d(decoder).g();
        if (g10 instanceof JsonPrimitive) {
            return (JsonPrimitive) g10;
        }
        throw g0.e(-1, "Unexpected JSON element, expected JsonPrimitive, had " + Reflection.getOrCreateKotlinClass(g10.getClass()), g10.toString());
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonPrimitive value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonNull) {
            encoder.h(v.f7832a, JsonNull.INSTANCE);
        } else {
            encoder.h(s.f7830a, (r) value);
        }
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f7841b;
    }
}
