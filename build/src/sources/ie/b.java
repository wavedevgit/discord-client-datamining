package ie;

import ae.g;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: e  reason: collision with root package name */
    public static final b f26811e = new b();

    /* renamed from: d  reason: collision with root package name */
    private final List f26812d;

    public b(ae.b bVar) {
        this.f26812d = Collections.singletonList(bVar);
    }

    @Override // ae.g
    public int a(long j10) {
        if (j10 < 0) {
            return 0;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        if (j10 >= 0) {
            return this.f26812d;
        }
        return Collections.EMPTY_LIST;
    }

    @Override // ae.g
    public long e(int i10) {
        boolean z10;
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        return 0L;
    }

    @Override // ae.g
    public int f() {
        return 1;
    }

    private b() {
        this.f26812d = Collections.EMPTY_LIST;
    }
}
