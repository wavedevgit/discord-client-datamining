package a0;

import a0.r0;
import android.util.Size;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface i1 extends e2 {

    /* renamed from: j  reason: collision with root package name */
    public static final r0.a f84j = r0.a.a("camerax.core.imageOutput.targetAspectRatio", x.a.class);

    /* renamed from: k  reason: collision with root package name */
    public static final r0.a f85k;

    /* renamed from: l  reason: collision with root package name */
    public static final r0.a f86l;

    /* renamed from: m  reason: collision with root package name */
    public static final r0.a f87m;

    /* renamed from: n  reason: collision with root package name */
    public static final r0.a f88n;

    /* renamed from: o  reason: collision with root package name */
    public static final r0.a f89o;

    /* renamed from: p  reason: collision with root package name */
    public static final r0.a f90p;

    /* renamed from: q  reason: collision with root package name */
    public static final r0.a f91q;

    /* renamed from: r  reason: collision with root package name */
    public static final r0.a f92r;

    /* renamed from: s  reason: collision with root package name */
    public static final r0.a f93s;

    static {
        Class cls = Integer.TYPE;
        f85k = r0.a.a("camerax.core.imageOutput.targetRotation", cls);
        f86l = r0.a.a("camerax.core.imageOutput.appTargetRotation", cls);
        f87m = r0.a.a("camerax.core.imageOutput.mirrorMode", cls);
        f88n = r0.a.a("camerax.core.imageOutput.targetResolution", Size.class);
        f89o = r0.a.a("camerax.core.imageOutput.defaultResolution", Size.class);
        f90p = r0.a.a("camerax.core.imageOutput.maxResolution", Size.class);
        f91q = r0.a.a("camerax.core.imageOutput.supportedResolutions", List.class);
        f92r = r0.a.a("camerax.core.imageOutput.resolutionSelector", m0.c.class);
        f93s = r0.a.a("camerax.core.imageOutput.customOrderedResolutions", List.class);
    }

    static void T(i1 i1Var) {
        boolean z10;
        boolean v10 = i1Var.v();
        if (i1Var.J(null) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (v10 && z10) {
            throw new IllegalArgumentException("Cannot use both setTargetResolution and setTargetAspectRatio on the same config.");
        }
        if (i1Var.o(null) != null) {
            if (v10 || z10) {
                throw new IllegalArgumentException("Cannot use setTargetResolution or setTargetAspectRatio with setResolutionSelector on the same config.");
            }
        }
    }

    default List D(List list) {
        List list2 = (List) e(f93s, list);
        if (list2 != null) {
            return new ArrayList(list2);
        }
        return null;
    }

    default Size F(Size size) {
        return (Size) e(f89o, size);
    }

    default Size J(Size size) {
        return (Size) e(f88n, size);
    }

    default int U(int i10) {
        return ((Integer) e(f87m, Integer.valueOf(i10))).intValue();
    }

    default Size i(Size size) {
        return (Size) e(f90p, size);
    }

    default List l(List list) {
        return (List) e(f91q, list);
    }

    default m0.c m() {
        return (m0.c) a(f92r);
    }

    default m0.c o(m0.c cVar) {
        return (m0.c) e(f92r, cVar);
    }

    default int p(int i10) {
        return ((Integer) e(f86l, Integer.valueOf(i10))).intValue();
    }

    default boolean v() {
        return h(f84j);
    }

    default int x() {
        return ((Integer) a(f84j)).intValue();
    }

    default int z(int i10) {
        return ((Integer) e(f85k, Integer.valueOf(i10))).intValue();
    }
}
