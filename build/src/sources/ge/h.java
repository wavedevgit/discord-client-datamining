package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f26045d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f26046e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f26047i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f26048o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f26049p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f26045d = dVar;
        this.f26048o = map2;
        this.f26049p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f26047i = map4;
        this.f26046e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f26046e, j10, false, false);
        if (e10 < this.f26046e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f26045d.h(j10, this.f26047i, this.f26048o, this.f26049p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f26046e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f26046e.length;
    }
}
