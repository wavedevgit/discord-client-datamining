package at;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final j f6821a = new j();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f6822b = new g2("kotlin.Byte", e.b.f56100a);

    private j() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Byte deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Byte.valueOf(decoder.H());
    }

    public void b(Encoder encoder, byte b10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.g(b10);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f6822b;
    }

    @Override // xs.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Number) obj).byteValue());
    }
}
