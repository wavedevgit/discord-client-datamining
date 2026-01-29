package bt;

import ct.c0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonNull;
import zs.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final v f7832a = new v();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f7833b = zs.j.e("kotlinx.serialization.json.JsonNull", k.b.f56101a, new SerialDescriptor[0], null, 8, null);

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

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonNull value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.h(encoder);
        encoder.o();
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f7833b;
    }
}
