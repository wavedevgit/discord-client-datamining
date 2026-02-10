package tt;

import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final y2 f50098a = new y2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f50099b = n0.a("kotlin.UInt", rt.a.F(IntCompanionObject.INSTANCE));

    private y2() {
    }

    public int a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return as.z.d(decoder.q(getDescriptor()).h());
    }

    public void b(Encoder encoder, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.j(getDescriptor()).A(i10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return as.z.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f50099b;
    }

    @Override // qt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((as.z) obj).h());
    }
}
