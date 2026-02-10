package je;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements ae.g {

    /* renamed from: d  reason: collision with root package name */
    private final List f30111d;

    public b(List list) {
        this.f30111d = Collections.unmodifiableList(list);
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
            return this.f30111d;
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
}
