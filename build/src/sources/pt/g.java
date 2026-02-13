package pt;

import jt.i;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import st.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final g f43760a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f43761b = st.j.b("kotlinx.datetime.LocalTime", e.i.f48937a);

    private g() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public jt.i deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return i.a.b(jt.i.Companion, decoder.z(), null, 2, null);
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, jt.i value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f43761b;
    }
}
