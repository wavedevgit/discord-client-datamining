package fe;

import ae.g;
import java.util.Collections;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements g {

    /* renamed from: d  reason: collision with root package name */
    private final List f22593d;

    /* renamed from: e  reason: collision with root package name */
    private final List f22594e;

    public d(List list, List list2) {
        this.f22593d = list;
        this.f22594e = list2;
    }

    @Override // ae.g
    public int a(long j10) {
        int d10 = w0.d(this.f22594e, Long.valueOf(j10), false, false);
        if (d10 < this.f22594e.size()) {
            return d10;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        int f10 = w0.f(this.f22594e, Long.valueOf(j10), true, false);
        if (f10 == -1) {
            return Collections.EMPTY_LIST;
        }
        return (List) this.f22593d.get(f10);
    }

    @Override // ae.g
    public long e(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        if (i10 < this.f22594e.size()) {
            z11 = true;
        }
        oe.a.a(z11);
        return ((Long) this.f22594e.get(i10)).longValue();
    }

    @Override // ae.g
    public int f() {
        return this.f22594e.size();
    }
}
