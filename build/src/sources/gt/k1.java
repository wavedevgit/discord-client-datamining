package gt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final k1 f25285a = new k1();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25286b = j1.f25278a;

    private k1() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Void deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        throw new dt.n("'kotlin.Nothing' does not have instances");
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, Void value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        throw new dt.n("'kotlin.Nothing' cannot be serialized");
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25286b;
    }
}
