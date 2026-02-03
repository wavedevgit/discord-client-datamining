package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f20964a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f20965b;

    public l1(KSerializer serializer) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        this.f20964a = serializer;
        this.f20965b = new j2(serializer.getDescriptor());
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (decoder.D()) {
            return decoder.G(this.f20964a);
        }
        return decoder.j();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l1.class == obj.getClass() && Intrinsics.areEqual(this.f20964a, ((l1) obj).f20964a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f20965b;
    }

    public int hashCode() {
        return this.f20964a.hashCode();
    }

    @Override // at.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        if (obj != null) {
            encoder.v();
            encoder.h(this.f20964a, obj);
            return;
        }
        encoder.n();
    }
}
