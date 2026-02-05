package ct;

import ft.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import ws.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final g f20024a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20025b = ft.j.b("kotlinx.datetime.LocalTime", e.i.f23483a);

    private g() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ws.i deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return i.a.b(ws.i.Companion, decoder.z(), null, 2, null);
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ws.i value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20025b;
    }
}
