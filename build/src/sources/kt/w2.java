package kt;

import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final w2 f35233a = new w2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f35234b = n0.a("kotlin.UByte", ht.a.x(ByteCompanionObject.INSTANCE));

    private w2() {
    }

    public byte a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return rr.x.d(decoder.q(getDescriptor()).H());
    }

    public void b(Encoder encoder, byte b10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.l(getDescriptor()).g(b10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return rr.x.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f35234b;
    }

    @Override // gt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((rr.x) obj).h());
    }
}
