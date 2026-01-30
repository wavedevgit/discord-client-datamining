package ws;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import qs.k;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final j f52783a = new j();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f52784b = zs.j.b("kotlinx.datetime.UtcOffset", e.i.f56107a);

    private j() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public k deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return k.a.b(k.Companion, decoder.z(), null, 2, null);
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, k value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f52784b;
    }
}
