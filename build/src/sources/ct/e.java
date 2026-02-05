package ct;

import ft.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import ws.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e f20020a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20021b = ft.j.b("kotlinx.datetime.Instant", e.i.f23483a);

    private e() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ws.e deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return e.a.g(ws.e.Companion, decoder.z(), null, 2, null);
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ws.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20021b;
    }
}
