package ge;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final d f25045d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f25046e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f25047i;

    /* renamed from: o  reason: collision with root package name */
    private final Map f25048o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f25049p;

    public h(d dVar, Map map, Map map2, Map map3) {
        Map map4;
        this.f25045d = dVar;
        this.f25048o = map2;
        this.f25049p = map3;
        if (map != null) {
            map4 = Collections.unmodifiableMap(map);
        } else {
            map4 = Collections.EMPTY_MAP;
        }
        this.f25047i = map4;
        this.f25046e = dVar.j();
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f25046e, j10, false, false);
        if (e10 < this.f25046e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        return this.f25045d.h(j10, this.f25047i, this.f25048o, this.f25049p);
    }

    @Override // zd.g
    public long e(int i10) {
        return this.f25046e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f25046e.length;
    }
}
