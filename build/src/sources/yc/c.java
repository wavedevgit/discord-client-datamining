package yc;

import tc.l;
import tc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends u {

    /* renamed from: b  reason: collision with root package name */
    private final long f54244b;

    public c(l lVar, long j10) {
        super(lVar);
        boolean z10;
        if (lVar.getPosition() >= j10) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f54244b = j10;
    }

    @Override // tc.u, tc.l
    public long g() {
        return super.g() - this.f54244b;
    }

    @Override // tc.u, tc.l
    public long getLength() {
        return super.getLength() - this.f54244b;
    }

    @Override // tc.u, tc.l
    public long getPosition() {
        return super.getPosition() - this.f54244b;
    }
}
