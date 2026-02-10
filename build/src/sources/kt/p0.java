package kt;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p0 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final p0 f35197a = new p0();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f35198b = new g2("kotlin.Int", e.f.f30481a);

    private p0() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Integer deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Integer.valueOf(decoder.h());
    }

    public void b(Encoder encoder, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.A(i10);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f35198b;
    }

    @Override // gt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Number) obj).intValue());
    }
}
