package tt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final k1 f50584a = new k1();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f50585b = j1.f50577a;

    private k1() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Void deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        throw new qt.n("'kotlin.Nothing' does not have instances");
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, Void value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        throw new qt.n("'kotlin.Nothing' cannot be serialized");
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f50585b;
    }
}
