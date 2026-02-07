package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f31075a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f31076b;

    public l1(KSerializer serializer) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        this.f31075a = serializer;
        this.f31076b = new j2(serializer.getDescriptor());
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (decoder.D()) {
            return decoder.G(this.f31075a);
        }
        return decoder.j();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l1.class == obj.getClass() && Intrinsics.areEqual(this.f31075a, ((l1) obj).f31075a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f31076b;
    }

    public int hashCode() {
        return this.f31075a.hashCode();
    }

    @Override // ft.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        if (obj != null) {
            encoder.w();
            encoder.v(this.f31075a, obj);
            return;
        }
        encoder.n();
    }
}
