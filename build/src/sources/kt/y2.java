package kt;

import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final y2 f35247a = new y2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f35248b = n0.a("kotlin.UInt", ht.a.B(IntCompanionObject.INSTANCE));

    private y2() {
    }

    public int a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return rr.z.d(decoder.q(getDescriptor()).h());
    }

    public void b(Encoder encoder, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.l(getDescriptor()).A(i10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return rr.z.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f35248b;
    }

    @Override // gt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((rr.z) obj).h());
    }
}
