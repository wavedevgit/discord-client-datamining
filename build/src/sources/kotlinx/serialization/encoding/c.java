package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static int a(c cVar, SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return -1;
        }

        public static boolean b(c cVar) {
            return false;
        }

        public static /* synthetic */ Object c(c cVar, SerialDescriptor serialDescriptor, int i10, DeserializationStrategy deserializationStrategy, Object obj, int i11, Object obj2) {
            if (obj2 == null) {
                if ((i11 & 8) != 0) {
                    obj = null;
                }
                return cVar.y(serialDescriptor, i10, deserializationStrategy, obj);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: decodeSerializableElement");
        }
    }

    char A(SerialDescriptor serialDescriptor, int i10);

    byte B(SerialDescriptor serialDescriptor, int i10);

    boolean C(SerialDescriptor serialDescriptor, int i10);

    short E(SerialDescriptor serialDescriptor, int i10);

    double F(SerialDescriptor serialDescriptor, int i10);

    gt.b a();

    void c(SerialDescriptor serialDescriptor);

    long f(SerialDescriptor serialDescriptor, int i10);

    int i(SerialDescriptor serialDescriptor, int i10);

    int k(SerialDescriptor serialDescriptor);

    String m(SerialDescriptor serialDescriptor, int i10);

    Object n(SerialDescriptor serialDescriptor, int i10, DeserializationStrategy deserializationStrategy, Object obj);

    int o(SerialDescriptor serialDescriptor);

    boolean p();

    Decoder r(SerialDescriptor serialDescriptor, int i10);

    float u(SerialDescriptor serialDescriptor, int i10);

    Object y(SerialDescriptor serialDescriptor, int i10, DeserializationStrategy deserializationStrategy, Object obj);
}
