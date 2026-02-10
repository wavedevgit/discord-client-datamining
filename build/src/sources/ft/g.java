package ft;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final g f23227a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f23228b = jt.j.b("kotlinx.datetime.LocalTime", e.i.f30484a);

    private g() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public zs.i deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return i.a.b(zs.i.Companion, decoder.z(), null, 2, null);
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, zs.i value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.E(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f23228b;
    }
}
