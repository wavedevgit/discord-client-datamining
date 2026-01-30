package at;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d3 implements KSerializer {

    /* renamed from: b  reason: collision with root package name */
    public static final d3 f6796b = new d3();

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ o1 f6797a = new o1("kotlin.Unit", Unit.f33298a);

    private d3() {
    }

    public void a(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        this.f6797a.deserialize(decoder);
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, Unit value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f6797a.serialize(encoder, value);
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public /* bridge */ /* synthetic */ Object deserialize(Decoder decoder) {
        a(decoder);
        return Unit.f33298a;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f6797a.getDescriptor();
    }
}
