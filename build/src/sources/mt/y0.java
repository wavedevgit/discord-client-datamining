package mt;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f37622a = kotlin.collections.x0.i(ht.a.I(rr.z.f49230e).getDescriptor(), ht.a.J(rr.b0.f49182e).getDescriptor(), ht.a.H(rr.x.f49225e).getDescriptor(), ht.a.K(rr.e0.f49193e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, lt.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f37622a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
