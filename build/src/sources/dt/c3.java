package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.ShortCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final c3 f20919a = new c3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20920b = n0.a("kotlin.UShort", bt.a.E(ShortCompanionObject.INSTANCE));

    private c3() {
    }

    public short a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return lr.e0.d(decoder.q(getDescriptor()).s());
    }

    public void b(Encoder encoder, short s10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.k(getDescriptor()).p(s10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return lr.e0.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20920b;
    }

    @Override // at.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((lr.e0) obj).h());
    }
}
