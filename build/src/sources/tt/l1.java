package tt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f50587a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f50588b;

    public l1(KSerializer serializer) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        this.f50587a = serializer;
        this.f50588b = new j2(serializer.getDescriptor());
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (decoder.D()) {
            return decoder.G(this.f50587a);
        }
        return decoder.j();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l1.class == obj.getClass() && Intrinsics.areEqual(this.f50587a, ((l1) obj).f50587a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f50588b;
    }

    public int hashCode() {
        return this.f50587a.hashCode();
    }

    @Override // qt.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        if (obj != null) {
            encoder.v();
            encoder.B(this.f50587a, obj);
            return;
        }
        encoder.n();
    }
}
