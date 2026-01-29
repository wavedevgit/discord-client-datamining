package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f26721d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f26722e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f26723i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f26724o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f26725p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f26721d = dVar;
        this.f26724o = map2;
        this.f26725p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f26723i = map4;
        this.f26722e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f26722e, j10, false, false);
        if (e10 < this.f26722e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f26721d.h(j10, this.f26723i, this.f26724o, this.f26725p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f26722e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f26722e.length;
    }
}
