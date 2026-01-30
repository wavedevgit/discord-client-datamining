package ws;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import qs.e;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e f52769a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f52770b = zs.j.b("kotlinx.datetime.Instant", e.i.f56107a);

    private e() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public qs.e deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return e.a.g(qs.e.Companion, decoder.z(), null, 2, null);
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, qs.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f52770b;
    }
}
