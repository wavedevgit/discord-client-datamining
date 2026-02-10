package he;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements ae.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f25956d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f25957e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f25958i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f25959o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f25960p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f25956d = dVar;
        this.f25959o = map2;
        this.f25960p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f25958i = map4;
        this.f25957e = dVar.j();
    }

    @Override // ae.g
    public int a(long j10) {
        int e10 = w0.e(this.f25957e, j10, false, false);
        if (e10 < this.f25957e.length) {
            return e10;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        return this.f25956d.h(j10, this.f25958i, this.f25959o, this.f25960p);
    }

    @Override // ae.g
    public long e(int i10) {
        return this.f25957e[i10];
    }

    @Override // ae.g
    public int f() {
        return this.f25957e.length;
    }
}
