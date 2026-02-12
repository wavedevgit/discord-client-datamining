package qi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final f0 f45330d = new f0();

    private f0() {
    }

    @Override // qi.i0
    public i0 h() {
        return n0.f45387d;
    }

    @Override // qi.i0, java.util.Comparator
    /* renamed from: j */
    public int compare(Comparable comparable, Comparable comparable2) {
        pi.m.j(comparable);
        pi.m.j(comparable2);
        return comparable.compareTo(comparable2);
    }

    public String toString() {
        return "Ordering.natural()";
    }
}
