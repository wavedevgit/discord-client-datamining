package gt;

import ft.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final x f25356a = new x();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25357b = new g2("kotlin.Double", e.d.f23478a);

    private x() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Double deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Double.valueOf(decoder.v());
    }

    public void b(Encoder encoder, double d10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.f(d10);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25357b;
    }

    @Override // dt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Number) obj).doubleValue());
    }
}
