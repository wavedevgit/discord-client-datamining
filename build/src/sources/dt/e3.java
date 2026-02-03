package dt;

import ct.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f20930a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20931b = new g2("kotlin.uuid.Uuid", e.i.f19842a);

    private e3() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public is.a deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return is.a.f31044i.c(decoder.z());
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, is.a value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20931b;
    }
}
