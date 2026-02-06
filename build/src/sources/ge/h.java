package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f24997d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f24998e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f24999i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f25000o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f25001p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f24997d = dVar;
        this.f25000o = map2;
        this.f25001p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f24999i = map4;
        this.f24998e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f24998e, j10, false, false);
        if (e10 < this.f24998e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f24997d.h(j10, this.f24999i, this.f25000o, this.f25001p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f24998e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f24998e.length;
    }
}
