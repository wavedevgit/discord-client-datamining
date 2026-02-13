package vt;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f52551a = kotlin.collections.x0.i(rt.a.w(as.z.f6102e).getDescriptor(), rt.a.x(as.b0.f6054e).getDescriptor(), rt.a.v(as.x.f6097e).getDescriptor(), rt.a.y(as.e0.f6065e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, ut.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f52551a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
