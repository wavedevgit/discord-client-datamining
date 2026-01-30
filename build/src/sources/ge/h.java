package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f26737d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f26738e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f26739i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f26740o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f26741p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f26737d = dVar;
        this.f26740o = map2;
        this.f26741p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f26739i = map4;
        this.f26738e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f26738e, j10, false, false);
        if (e10 < this.f26738e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f26737d.h(j10, this.f26739i, this.f26740o, this.f26741p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f26738e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f26738e.length;
    }
}
