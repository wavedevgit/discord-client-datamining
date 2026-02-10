package zc;

import uc.l;
import uc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends u {

    /* renamed from: b  reason: collision with root package name */
    private final long f56351b;

    public c(l lVar, long j10) {
        super(lVar);
        boolean z10;
        if (lVar.getPosition() >= j10) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f56351b = j10;
    }

    @Override // uc.u, uc.l
    public long g() {
        return super.g() - this.f56351b;
    }

    @Override // uc.u, uc.l
    public long getLength() {
        return super.getLength() - this.f56351b;
    }

    @Override // uc.u, uc.l
    public long getPosition() {
        return super.getPosition() - this.f56351b;
    }
}
