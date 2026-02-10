package kt;

import jt.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f35133a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f35134b = new g2("kotlin.uuid.Uuid", e.i.f30484a);

    private e3() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public os.a deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return os.a.f42726i.c(decoder.z());
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, os.a value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.E(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f35134b;
    }
}
