package gt;

import ft.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f25254a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25255b = new g2("kotlin.uuid.Uuid", e.i.f23483a);

    private e3() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ls.a deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return ls.a.f37194i.c(decoder.z());
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ls.a value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25255b;
    }
}
