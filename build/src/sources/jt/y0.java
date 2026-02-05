package jt;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f31408a = kotlin.collections.x0.i(et.a.I(or.z.f44252e).getDescriptor(), et.a.J(or.b0.f44204e).getDescriptor(), et.a.H(or.x.f44247e).getDescriptor(), et.a.K(or.e0.f44215e).getDescriptor());

    public static final boolean a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && Intrinsics.areEqual(serialDescriptor, ht.h.p())) {
            return true;
        }
        return false;
    }

    public static final boolean b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor.isInline() && f31408a.contains(serialDescriptor)) {
            return true;
        }
        return false;
    }
}
