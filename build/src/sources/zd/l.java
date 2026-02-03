package zd;

import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends qc.g implements g {

    /* renamed from: o  reason: collision with root package name */
    private g f55917o;

    /* renamed from: p  reason: collision with root package name */
    private long f55918p;

    @Override // zd.g
    public int a(long j10) {
        return ((g) ne.a.e(this.f55917o)).a(j10 - this.f55918p);
    }

    @Override // zd.g
    public List d(long j10) {
        return ((g) ne.a.e(this.f55917o)).d(j10 - this.f55918p);
    }

    @Override // zd.g
    public long e(int i10) {
        return ((g) ne.a.e(this.f55917o)).e(i10) + this.f55918p;
    }

    @Override // zd.g
    public int f() {
        return ((g) ne.a.e(this.f55917o)).f();
    }

    @Override // qc.a
    public void h() {
        super.h();
        this.f55917o = null;
    }

    public void u(long j10, g gVar, long j11) {
        this.f47505e = j10;
        this.f55917o = gVar;
        if (j11 != LongCompanionObject.MAX_VALUE) {
            j10 = j11;
        }
        this.f55918p = j10;
    }
}
