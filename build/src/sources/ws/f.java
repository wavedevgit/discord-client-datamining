package ws;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import qs.f;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final f f52771a = new f();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f52772b = zs.j.b("kotlinx.datetime.LocalDate", e.i.f56107a);

    private f() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public qs.f deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return f.a.b(qs.f.Companion, decoder.z(), null, 2, null);
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, qs.f value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f52772b;
    }
}
