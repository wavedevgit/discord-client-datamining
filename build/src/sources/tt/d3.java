package tt;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d3 implements KSerializer {

    /* renamed from: b  reason: collision with root package name */
    public static final d3 f50549b = new d3();

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ o1 f50550a = new o1("kotlin.Unit", Unit.f32556a);

    private d3() {
    }

    public void a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        this.f50550a.deserialize(decoder);
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, Unit value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f50550a.serialize(encoder, value);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        a(decoder);
        return Unit.f32556a;
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f50550a.getDescriptor();
    }
}
