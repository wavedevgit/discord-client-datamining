package gt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.ShortCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final c3 f25243a = new c3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25244b = n0.a("kotlin.UShort", et.a.D(ShortCompanionObject.INSTANCE));

    private c3() {
    }

    public short a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return or.e0.d(decoder.q(getDescriptor()).s());
    }

    public void b(Encoder encoder, short s10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.j(getDescriptor()).p(s10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return or.e0.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25244b;
    }

    @Override // dt.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((or.e0) obj).h());
    }
}
