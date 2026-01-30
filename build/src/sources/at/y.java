package at;

import kotlin.jvm.internal.Intrinsics;
import kotlin.time.Duration;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final y f6909a = new y();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f6910b = new g2("kotlin.time.Duration", e.i.f56107a);

    private y() {
    }

    public long a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Duration.f36297e.d(decoder.z());
    }

    public void b(Encoder encoder, long j10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.F(Duration.K(j10));
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return Duration.h(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f6910b;
    }

    @Override // xs.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Duration) obj).O());
    }
}
