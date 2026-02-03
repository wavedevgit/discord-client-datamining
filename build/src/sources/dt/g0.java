package dt;

import ct.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f20938a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20939b = new g2("kotlin.Float", e.C0263e.f19838a);

    private g0() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Float deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Float.valueOf(decoder.t());
    }

    public void b(Encoder encoder, float f10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.t(f10);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20939b;
    }

    @Override // at.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Number) obj).floatValue());
    }
}
