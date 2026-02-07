package ni;

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
        return f0.f40816d;
    }

    public i0 c(mi.f fVar) {
        return new g(fVar, this);
    }

    @Override // java.util.Comparator
    public abstract int compare(Object obj, Object obj2);

    public i0 g() {
        return new o0(this);
    }
}
