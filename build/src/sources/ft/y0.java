package ft;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f24810a = kotlin.collections.x0.i(bt.a.I(lr.z.f37140e).getDescriptor(), bt.a.J(lr.b0.f37092e).getDescriptor(), bt.a.H(lr.x.f37135e).getDescriptor(), bt.a.K(lr.e0.f37103e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, et.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f24810a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
