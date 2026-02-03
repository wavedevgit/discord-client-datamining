package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f26832d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f26833e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f26834i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f26835o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f26836p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f26832d = dVar;
        this.f26835o = map2;
        this.f26836p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f26834i = map4;
        this.f26833e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f26833e, j10, false, false);
        if (e10 < this.f26833e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f26832d.h(j10, this.f26834i, this.f26835o, this.f26836p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f26833e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f26833e.length;
    }
}
