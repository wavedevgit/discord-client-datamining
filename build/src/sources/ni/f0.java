package ni;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final f0 f40816d = new f0();

    private f0() {
    }

    @Override // ni.i0
    public i0 g() {
        return n0.f40873d;
    }

    @Override // ni.i0, java.util.Comparator
    /* renamed from: k */
    public int compare(Comparable comparable, Comparable comparable2) {
        mi.m.j(comparable);
        mi.m.j(comparable2);
        return comparable.compareTo(comparable2);
    }

    public String toString() {
        return "Ordering.natural()";
    }
}
