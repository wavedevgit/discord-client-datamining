package gt;

import ft.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final n2 f25302a = new n2();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f25303b = new g2("kotlin.String", e.i.f23483a);

    private n2() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public String deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.z();
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, String value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f25303b;
    }
}
