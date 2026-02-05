package mi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final f0 f38605d = new f0();

    private f0() {
    }

    @Override // mi.i0
    public i0 h() {
        return n0.f38662d;
    }

    @Override // mi.i0, java.util.Comparator
    /* renamed from: j */
    public int compare(Comparable comparable, Comparable comparable2) {
        li.m.j(comparable);
        li.m.j(comparable2);
        return comparable.compareTo(comparable2);
    }

    public String toString() {
        return "Ordering.natural()";
    }
}
