package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface CompositeEncoder {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static boolean a(CompositeEncoder compositeEncoder, SerialDescriptor descriptor, int i10) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return true;
        }
    }

    boolean A(SerialDescriptor serialDescriptor, int i10);

    void C(SerialDescriptor serialDescriptor, int i10, short s10);

    void D(SerialDescriptor serialDescriptor, int i10, double d10);

    void E(SerialDescriptor serialDescriptor, int i10, long j10);

    void c(SerialDescriptor serialDescriptor);

    Encoder e(SerialDescriptor serialDescriptor, int i10);

    void j(SerialDescriptor serialDescriptor, int i10, o oVar, Object obj);

    void n(SerialDescriptor serialDescriptor, int i10, char c10);

    void p(SerialDescriptor serialDescriptor, int i10, byte b10);

    void s(SerialDescriptor serialDescriptor, int i10, float f10);

    void w(SerialDescriptor serialDescriptor, int i10, int i11);

    void x(SerialDescriptor serialDescriptor, int i10, boolean z10);

    void y(SerialDescriptor serialDescriptor, int i10, String str);

    void z(SerialDescriptor serialDescriptor, int i10, o oVar, Object obj);
}
