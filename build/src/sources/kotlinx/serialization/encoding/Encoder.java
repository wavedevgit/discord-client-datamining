package kotlinx.serialization.encoding;

import at.o;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
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
                encoder.h(serializer, obj);
            } else if (obj == null) {
                encoder.n();
            } else {
                encoder.v();
                encoder.h(serializer, obj);
            }
        }

        public static void d(Encoder encoder, o serializer, Object obj) {
            Intrinsics.checkNotNullParameter(serializer, "serializer");
            serializer.serialize(encoder, obj);
        }
    }

    void A(int i10);

    void F(String str);

    gt.b a();

    CompositeEncoder b(SerialDescriptor serialDescriptor);

    void f(double d10);

    void g(byte b10);

    void h(o oVar, Object obj);

    CompositeEncoder i(SerialDescriptor serialDescriptor, int i10);

    void j(SerialDescriptor serialDescriptor, int i10);

    Encoder k(SerialDescriptor serialDescriptor);

    void l(long j10);

    void n();

    void p(short s10);

    void q(boolean z10);

    void t(float f10);

    void u(char c10);

    void v();
}
