package ct;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f21433a = kotlin.collections.x0.i(ys.a.x(ir.z.f31123e).getDescriptor(), ys.a.y(ir.b0.f31075e).getDescriptor(), ys.a.w(ir.x.f31118e).getDescriptor(), ys.a.z(ir.e0.f31086e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, bt.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f21433a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
