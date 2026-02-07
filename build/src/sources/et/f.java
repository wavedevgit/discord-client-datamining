package et;

import ht.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import ys.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final f f22119a = new f();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f22120b = ht.j.b("kotlinx.datetime.LocalDate", e.i.f26526a);

    private f() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public ys.f deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return f.a.b(ys.f.Companion, decoder.z(), null, 2, null);
    }

    @Override // ft.o
    /* renamed from: b */
    public void serialize(Encoder encoder, ys.f value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.F(value.toString());
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f22120b;
    }
}
