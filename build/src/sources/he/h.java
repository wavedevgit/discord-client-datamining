package he;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements ae.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f27174d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f27175e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f27176i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f27177o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f27178p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f27174d = dVar;
        this.f27177o = map2;
        this.f27178p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f27176i = map4;
        this.f27175e = dVar.j();
    }

    @Override // ae.g
    public int a(long j10) {
        int e10 = w0.e(this.f27175e, j10, false, false);
        if (e10 < this.f27175e.length) {
            return e10;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        return this.f27174d.h(j10, this.f27176i, this.f27177o, this.f27178p);
    }

    @Override // ae.g
    public long e(int i10) {
        return this.f27175e[i10];
    }

    @Override // ae.g
    public int f() {
        return this.f27175e.length;
    }
}
