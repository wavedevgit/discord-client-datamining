package dt;

import ct.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final o f20980a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20981b = new g2("kotlin.Char", e.c.f19836a);

    private o() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public Character deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return Character.valueOf(decoder.x());
    }

    public void b(Encoder encoder, char c10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.u(c10);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20981b;
    }

    @Override // at.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((Character) obj).charValue());
    }
}
