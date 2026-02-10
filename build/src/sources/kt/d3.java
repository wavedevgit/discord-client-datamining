package kt;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d3 implements KSerializer {

    /* renamed from: b  reason: collision with root package name */
    public static final d3 f35129b = new d3();

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ o1 f35130a = new o1("kotlin.Unit", Unit.f31765a);

    private d3() {
    }

    public void a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        this.f35130a.deserialize(decoder);
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, Unit value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f35130a.serialize(encoder, value);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        a(decoder);
        return Unit.f31765a;
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f35130a.getDescriptor();
    }
}
