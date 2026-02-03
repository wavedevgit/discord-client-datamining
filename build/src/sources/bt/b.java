package bt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b implements KSerializer {
    /* JADX INFO: Access modifiers changed from: private */
    public final Object b(kotlinx.serialization.encoding.c cVar) {
        return c.a.c(cVar, getDescriptor(), 1, ys.h.a(this, cVar, cVar.m(getDescriptor(), 0)), null, 8, null);
    }

    public DeserializationStrategy c(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.a().e(e(), str);
    }

    public ys.o d(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return encoder.a().f(e(), value);
    }

    /* JADX WARN: Type inference failed for: r3v2, types: [T, java.lang.String] */
    @Override // kotlinx.serialization.DeserializationStrategy
    public final Object deserialize(Decoder decoder) {
        Object obj;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        if (b10.p()) {
            obj = b(b10);
        } else {
            Object obj2 = null;
            while (true) {
                int o10 = b10.o(getDescriptor());
                if (o10 != -1) {
                    if (o10 != 0) {
                        if (o10 != 1) {
                            StringBuilder sb2 = new StringBuilder();
                            sb2.append("Invalid index in polymorphic deserialization of ");
                            String str = (String) objectRef.element;
                            if (str == null) {
                                str = "unknown class";
                            }
                            sb2.append(str);
                            sb2.append("\n Expected 0, 1 or DECODE_DONE(-1), but found ");
                            sb2.append(o10);
                            throw new ys.n(sb2.toString());
                        }
                        T t10 = objectRef.element;
                        if (t10 != 0) {
                            objectRef.element = t10;
                            obj2 = c.a.c(b10, getDescriptor(), o10, ys.h.a(this, b10, (String) t10), null, 8, null);
                        } else {
                            throw new IllegalArgumentException("Cannot read polymorphic value before its type token");
                        }
                    } else {
                        objectRef.element = b10.m(getDescriptor(), o10);
                    }
                } else if (obj2 != null) {
                    Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type T of kotlinx.serialization.internal.AbstractPolymorphicSerializer");
                    obj = obj2;
                } else {
                    throw new IllegalArgumentException(("Polymorphic value has not been read for class " + ((String) objectRef.element)).toString());
                }
            }
        }
        b10.c(descriptor);
        return obj;
    }

    public abstract KClass e();

    @Override // ys.o
    public final void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        ys.o b10 = ys.h.b(this, encoder, value);
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b11 = encoder.b(descriptor);
        b11.x(getDescriptor(), 0, b10.getDescriptor().h());
        SerialDescriptor descriptor2 = getDescriptor();
        Intrinsics.checkNotNull(b10, "null cannot be cast to non-null type kotlinx.serialization.SerializationStrategy<T of kotlinx.serialization.internal.Platform_commonKt.cast>");
        b11.m(descriptor2, 1, b10, value);
        b11.c(descriptor);
    }
}
