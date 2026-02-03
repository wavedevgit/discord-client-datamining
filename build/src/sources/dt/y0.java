package dt;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f22492a = kotlin.collections.x0.i(zs.a.x(jr.z.f32202e).getDescriptor(), zs.a.y(jr.b0.f32154e).getDescriptor(), zs.a.w(jr.x.f32197e).getDescriptor(), zs.a.z(jr.e0.f32165e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, ct.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f22492a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
