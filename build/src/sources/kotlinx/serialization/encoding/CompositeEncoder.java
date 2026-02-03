package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import ys.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface CompositeEncoder {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static boolean a(CompositeEncoder compositeEncoder, SerialDescriptor descriptor, int i10) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return true;
        }
    }

    void B(SerialDescriptor serialDescriptor, int i10, o oVar, Object obj);

    void C(SerialDescriptor serialDescriptor, int i10, short s10);

    void D(SerialDescriptor serialDescriptor, int i10, double d10);

    void E(SerialDescriptor serialDescriptor, int i10, long j10);

    void c(SerialDescriptor serialDescriptor);

    Encoder e(SerialDescriptor serialDescriptor, int i10);

    void l(SerialDescriptor serialDescriptor, int i10, char c10);

    void m(SerialDescriptor serialDescriptor, int i10, o oVar, Object obj);

    void o(SerialDescriptor serialDescriptor, int i10, byte b10);

    void r(SerialDescriptor serialDescriptor, int i10, float f10);

    void v(SerialDescriptor serialDescriptor, int i10, int i11);

    void w(SerialDescriptor serialDescriptor, int i10, boolean z10);

    void x(SerialDescriptor serialDescriptor, int i10, String str);

    boolean y(SerialDescriptor serialDescriptor, int i10);
}
