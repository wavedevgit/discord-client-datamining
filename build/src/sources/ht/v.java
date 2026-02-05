package ht;

import ft.k;
import jt.c0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final v f26988a = new v();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f26989b = ft.j.e("kotlinx.serialization.json.JsonNull", k.b.f23493a, new SerialDescriptor[0], null, 8, null);

    private v() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonNull deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        p.g(decoder);
        if (!decoder.D()) {
            decoder.j();
            return JsonNull.INSTANCE;
        }
        throw new c0("Expected 'null' literal");
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonNull value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.h(encoder);
        encoder.n();
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f26989b;
    }
}
