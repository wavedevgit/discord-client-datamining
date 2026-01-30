package w0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class i0 implements a0 {

    /* renamed from: a  reason: collision with root package name */
    public static final i0 f52022a = new i0();

    private i0() {
    }

    @Override // w0.a0
    public boolean a(Object obj, Object obj2) {
        return Intrinsics.areEqual(obj, obj2);
    }

    public String toString() {
        return "StructuralEqualityPolicy";
    }
}
