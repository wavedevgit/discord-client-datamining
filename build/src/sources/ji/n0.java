package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final n0 f31904d = new n0();

    private n0() {
    }

    @Override // ji.i0
    public i0 g() {
        return i0.b();
    }

    @Override // ji.i0, java.util.Comparator
    /* renamed from: h */
    public int compare(Comparable comparable, Comparable comparable2) {
        ii.m.j(comparable);
        if (comparable == comparable2) {
            return 0;
        }
        return comparable2.compareTo(comparable);
    }

    public String toString() {
        return "Ordering.natural().reverse()";
    }
}
