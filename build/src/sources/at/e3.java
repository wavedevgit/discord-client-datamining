package at;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f6800a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f6801b = new g2("kotlin.uuid.Uuid", e.i.f56107a);

    private e3() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public fs.a deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return fs.a.f25527i.c(decoder.z());
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, fs.a value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f6801b;
    }
}
