package ws;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import qs.i;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final g f52773a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f52774b = zs.j.b("kotlinx.datetime.LocalTime", e.i.f56107a);

    private g() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public qs.i deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return i.a.b(qs.i.Companion, decoder.z(), null, 2, null);
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, qs.i value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f52774b;
    }
}
