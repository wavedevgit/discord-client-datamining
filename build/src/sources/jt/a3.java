package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final a3 f31014a = new a3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f31015b = n0.a("kotlin.ULong", gt.a.C(LongCompanionObject.INSTANCE));

    private a3() {
    }

    public long a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return qr.b0.d(decoder.q(getDescriptor()).l());
    }

    public void b(Encoder encoder, long j10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        encoder.j(getDescriptor()).k(j10);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        return qr.b0.a(a(decoder));
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f31015b;
    }

    @Override // ft.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        b(encoder, ((qr.b0) obj).h());
    }
}
