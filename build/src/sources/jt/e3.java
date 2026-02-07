package jt;

import ht.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f31041a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f31042b = new g2("kotlin.uuid.Uuid", e.i.f26526a);

    private e3() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ns.a deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return ns.a.f41198i.c(decoder.z());
    }

    @Override // ft.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ns.a value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f31042b;
    }
}
