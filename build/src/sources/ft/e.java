package ft;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e f23223a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f23224b = jt.j.b("kotlinx.datetime.Instant", e.i.f30484a);

    private e() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public zs.e deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return e.a.g(zs.e.Companion, decoder.z(), null, 2, null);
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, zs.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.E(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f23224b;
    }
}
