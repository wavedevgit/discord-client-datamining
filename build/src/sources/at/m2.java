package at;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final m2 f6842a = new m2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f6843b = new g2("kotlin.Short", e.h.f56106a);

    private m2() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Short deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Short.valueOf(decoder.s());
    }

    public void b(Encoder encoder, short s10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.q(s10);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f6843b;
    }

    @Override // xs.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Number) obj).shortValue());
    }
}
