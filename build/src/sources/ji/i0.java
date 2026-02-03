package ji;

import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i0 implements Comparator {
    public static i0 a(Comparator comparator) {
        if (comparator instanceof i0) {
            return (i0) comparator;
        }
        return new l(comparator);
    }

    public static i0 b() {
        return f0.f31643d;
    }

    public i0 c(ii.f fVar) {
        return new g(fVar, this);
    }

    @Override // java.util.Comparator
    public abstract int compare(Object obj, Object obj2);

    public i0 h() {
        return new o0(this);
    }
}
