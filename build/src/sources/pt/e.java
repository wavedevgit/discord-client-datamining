package pt;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import st.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e f43756a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f43757b = st.j.b("kotlinx.datetime.Instant", e.i.f48937a);

    private e() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public jt.e deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return e.a.g(jt.e.Companion, decoder.z(), null, 2, null);
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, jt.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f43757b;
    }
}
