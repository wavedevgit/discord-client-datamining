package dt;

import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final y2 f21044a = new y2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f21045b = n0.a("kotlin.UInt", bt.a.C(IntCompanionObject.INSTANCE));

    private y2() {
    }

    public int a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return lr.z.d(decoder.q(getDescriptor()).h());
    }

    public void b(Encoder encoder, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.k(getDescriptor()).A(i10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return lr.z.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f21045b;
    }

    @Override // at.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((lr.z) obj).h());
    }
}
