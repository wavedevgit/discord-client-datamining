package qi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final n0 f45386d = new n0();

    private n0() {
    }

    @Override // qi.i0
    public i0 h() {
        return i0.b();
    }

    @Override // qi.i0, java.util.Comparator
    /* renamed from: j */
    public int compare(Comparable comparable, Comparable comparable2) {
        pi.m.j(comparable);
        if (comparable == comparable2) {
            return 0;
        }
        return comparable2.compareTo(comparable);
    }

    public String toString() {
        return "Ordering.natural().reverse()";
    }
}
