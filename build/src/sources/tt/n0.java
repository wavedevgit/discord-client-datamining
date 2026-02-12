package tt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import tt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class n0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements h0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ KSerializer f50031a;

        a(KSerializer kSerializer) {
            this.f50031a = kSerializer;
        }

        @Override // tt.h0
        public KSerializer[] childSerializers() {
            return new KSerializer[]{this.f50031a};
        }

        @Override // kotlinx.serialization.DeserializationStrategy
        public Object deserialize(Decoder decoder) {
            Intrinsics.checkNotNullParameter(decoder, "decoder");
            throw new IllegalStateException("unsupported");
        }

        @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
        public SerialDescriptor getDescriptor() {
            throw new IllegalStateException("unsupported");
        }

        @Override // qt.o
        public void serialize(Encoder encoder, Object obj) {
            Intrinsics.checkNotNullParameter(encoder, "encoder");
            throw new IllegalStateException("unsupported");
        }

        @Override // tt.h0
        public KSerializer[] typeParametersSerializers() {
            return h0.a.a(this);
        }
    }

    public static final SerialDescriptor a(String name, KSerializer primitiveSerializer) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(primitiveSerializer, "primitiveSerializer");
        return new m0(name, new a(primitiveSerializer));
    }
}
