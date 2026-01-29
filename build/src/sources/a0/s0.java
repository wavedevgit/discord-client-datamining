package a0;

import java.util.Collection;
import java.util.Collections;
import java.util.EnumSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class s0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f270a = Collections.unmodifiableSet(EnumSet.of(q.PASSIVE_FOCUSED, q.PASSIVE_NOT_FOCUSED, q.LOCKED_FOCUSED, q.LOCKED_NOT_FOCUSED));

    /* renamed from: b  reason: collision with root package name */
    private static final Set f271b = Collections.unmodifiableSet(EnumSet.of(s.CONVERGED, s.UNKNOWN));

    /* renamed from: c  reason: collision with root package name */
    private static final Set f272c;

    /* renamed from: d  reason: collision with root package name */
    private static final Set f273d;

    static {
        o oVar = o.CONVERGED;
        o oVar2 = o.FLASH_REQUIRED;
        o oVar3 = o.UNKNOWN;
        Set unmodifiableSet = Collections.unmodifiableSet(EnumSet.of(oVar, oVar2, oVar3));
        f272c = unmodifiableSet;
        EnumSet copyOf = EnumSet.copyOf((Collection) unmodifiableSet);
        copyOf.remove(oVar2);
        copyOf.remove(oVar3);
        f273d = Collections.unmodifiableSet(copyOf);
    }

    public static boolean a(u uVar, boolean z10) {
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        if (uVar.j() != p.OFF && uVar.j() != p.UNKNOWN && !f270a.contains(uVar.h())) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (uVar.g() == n.OFF) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z10 ? !(z12 || f272c.contains(uVar.k())) : !(z12 || f273d.contains(uVar.k()))) {
            z13 = false;
        } else {
            z13 = true;
        }
        if (uVar.e() == r.OFF || f271b.contains(uVar.i())) {
            z14 = true;
        } else {
            z14 = false;
        }
        x.y0.a("ConvergenceUtils", "checkCaptureResult, AE=" + uVar.k() + " AF =" + uVar.h() + " AWB=" + uVar.i());
        if (z11 && z13 && z14) {
            return true;
        }
        return false;
    }
}
