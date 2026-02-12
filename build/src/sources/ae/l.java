package ae;

import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends rc.g implements g {

    /* renamed from: o  reason: collision with root package name */
    private g f750o;

    /* renamed from: p  reason: collision with root package name */
    private long f751p;

    @Override // ae.g
    public int a(long j10) {
        return ((g) oe.a.e(this.f750o)).a(j10 - this.f751p);
    }

    @Override // ae.g
    public List d(long j10) {
        return ((g) oe.a.e(this.f750o)).d(j10 - this.f751p);
    }

    @Override // ae.g
    public long e(int i10) {
        return ((g) oe.a.e(this.f750o)).e(i10) + this.f751p;
    }

    @Override // ae.g
    public int f() {
        return ((g) oe.a.e(this.f750o)).f();
    }

    @Override // rc.a
    public void h() {
        super.h();
        this.f750o = null;
    }

    public void u(long j10, g gVar, long j11) {
        this.f46238e = j10;
        this.f750o = gVar;
        if (j11 != LongCompanionObject.MAX_VALUE) {
            j10 = j11;
        }
        this.f751p = j10;
    }
}
