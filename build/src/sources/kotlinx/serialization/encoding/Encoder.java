package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import ys.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Encoder {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static CompositeEncoder a(Encoder encoder, SerialDescriptor descriptor, int i10) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return encoder.b(descriptor);
        }

        public static void b(Encoder encoder) {
        }

        public static void c(Encoder encoder, o serializer, Object obj) {
            Intrinsics.checkNotNullParameter(serializer, "serializer");
            if (serializer.getDescriptor().b()) {
                encoder.z(serializer, obj);
            } else if (obj == null) {
                encoder.n();
            } else {
                encoder.u();
                encoder.z(serializer, obj);
            }
        }

        public static void d(Encoder encoder, o serializer, Object obj) {
            Intrinsics.checkNotNullParameter(serializer, "serializer");
            serializer.serialize(encoder, obj);
        }
    }

    void A(int i10);

    void F(String str);

    et.b a();

    CompositeEncoder b(SerialDescriptor serialDescriptor);

    void f(double d10);

    void g(byte b10);

    CompositeEncoder h(SerialDescriptor serialDescriptor, int i10);

    void i(SerialDescriptor serialDescriptor, int i10);

    Encoder j(SerialDescriptor serialDescriptor);

    void k(long j10);

    void n();

    void p(short s10);

    void q(boolean z10);

    void s(float f10);

    void t(char c10);

    void u();

    void z(o oVar, Object obj);
}
