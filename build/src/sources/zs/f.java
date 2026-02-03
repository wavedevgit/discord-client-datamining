package zs;

import ct.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import ts.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final f f56139a = new f();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f56140b = ct.j.b("kotlinx.datetime.LocalDate", e.i.f19842a);

    private f() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ts.f deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return f.a.b(ts.f.Companion, decoder.z(), null, 2, null);
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ts.f value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f56140b;
    }
}
