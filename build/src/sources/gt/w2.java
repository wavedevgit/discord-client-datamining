package gt;

import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final w2 f25354a = new w2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25355b = n0.a("kotlin.UByte", et.a.x(ByteCompanionObject.INSTANCE));

    private w2() {
    }

    public byte a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return or.x.d(decoder.q(getDescriptor()).H());
    }

    public void b(Encoder encoder, byte b10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.j(getDescriptor()).g(b10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return or.x.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25355b;
    }

    @Override // dt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((or.x) obj).h());
    }
}
