package gt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f25288a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f25289b;

    public l1(KSerializer serializer) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        this.f25288a = serializer;
        this.f25289b = new j2(serializer.getDescriptor());
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (decoder.D()) {
            return decoder.G(this.f25288a);
        }
        return decoder.j();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l1.class == obj.getClass() && Intrinsics.areEqual(this.f25288a, ((l1) obj).f25288a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f25289b;
    }

    public int hashCode() {
        return this.f25288a.hashCode();
    }

    @Override // dt.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        if (obj != null) {
            encoder.u();
            encoder.y(this.f25288a, obj);
            return;
        }
        encoder.n();
    }
}
