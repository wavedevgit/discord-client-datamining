package lt;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f36744a = kotlin.collections.x0.i(gt.a.I(qr.z.f48064e).getDescriptor(), gt.a.J(qr.b0.f48016e).getDescriptor(), gt.a.H(qr.x.f48059e).getDescriptor(), gt.a.K(qr.e0.f48027e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, kt.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f36744a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
