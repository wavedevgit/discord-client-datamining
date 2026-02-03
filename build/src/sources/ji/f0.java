package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final f0 f31643d = new f0();

    private f0() {
    }

    @Override // ji.i0
    public i0 h() {
        return n0.f31700d;
    }

    @Override // ji.i0, java.util.Comparator
    /* renamed from: l */
    public int compare(Comparable comparable, Comparable comparable2) {
        ii.m.j(comparable);
        ii.m.j(comparable2);
        return comparable.compareTo(comparable2);
    }

    public String toString() {
        return "Ordering.natural()";
    }
}
