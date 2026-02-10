package lt;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonPrimitive;
import mt.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final z f36661a = new z();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f36662b = jt.j.e("kotlinx.serialization.json.JsonPrimitive", e.i.f30484a, new SerialDescriptor[0], null, 8, null);

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

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonPrimitive value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonNull) {
            encoder.h(v.f36653a, JsonNull.INSTANCE);
        } else {
            encoder.h(s.f36651a, (r) value);
        }
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f36662b;
    }
}
