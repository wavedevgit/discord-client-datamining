package he;

import java.util.Collections;
import java.util.List;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: e  reason: collision with root package name */
    public static final b f26979e = new b();

    /* renamed from: d  reason: collision with root package name */
    private final List f26980d;

    public b(zd.b bVar) {
        this.f26980d = Collections.singletonList(bVar);
    }

    @Override // zd.g
    public int a(long j10) {
        if (j10 < 0) {
            return 0;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        if (j10 >= 0) {
            return this.f26980d;
        }
        return Collections.EMPTY_LIST;
    }

    @Override // zd.g
    public long e(int i10) {
        boolean z10;
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        return 0L;
    }

    @Override // zd.g
    public int f() {
        return 1;
    }

    private b() {
        this.f26980d = Collections.EMPTY_LIST;
    }
}
