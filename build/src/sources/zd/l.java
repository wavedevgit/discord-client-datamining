package zd;

import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends qc.g implements g {

    /* renamed from: o  reason: collision with root package name */
    private g f56234o;

    /* renamed from: p  reason: collision with root package name */
    private long f56235p;

    @Override // zd.g
    public int a(long j10) {
        return ((g) ne.a.e(this.f56234o)).a(j10 - this.f56235p);
    }

    @Override // zd.g
    public List d(long j10) {
        return ((g) ne.a.e(this.f56234o)).d(j10 - this.f56235p);
    }

    @Override // zd.g
    public long e(int i10) {
        return ((g) ne.a.e(this.f56234o)).e(i10) + this.f56235p;
    }

    @Override // zd.g
    public int f() {
        return ((g) ne.a.e(this.f56234o)).f();
    }

    @Override // qc.a
    public void h() {
        super.h();
        this.f56234o = null;
    }

    public void u(long j10, g gVar, long j11) {
        this.f46617e = j10;
        this.f56234o = gVar;
        if (j11 != LongCompanionObject.MAX_VALUE) {
            j10 = j11;
        }
        this.f56235p = j10;
    }
}
