package ht;

import ft.e;
import jt.g0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonPrimitive;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final z f26996a = new z();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f26997b = ft.j.e("kotlinx.serialization.json.JsonPrimitive", e.i.f23483a, new SerialDescriptor[0], null, 8, null);

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

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonPrimitive value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonNull) {
            encoder.y(v.f26988a, JsonNull.INSTANCE);
        } else {
            encoder.y(s.f26986a, (r) value);
        }
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f26997b;
    }
}
