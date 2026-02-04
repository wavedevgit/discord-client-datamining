package zs;

import ct.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import ts.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e f56134a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f56135b = ct.j.b("kotlinx.datetime.Instant", e.i.f19842a);

    private e() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ts.e deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return e.a.g(ts.e.Companion, decoder.z(), null, 2, null);
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ts.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f56135b;
    }
}
