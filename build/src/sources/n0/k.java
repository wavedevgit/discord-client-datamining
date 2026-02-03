package n0;

import a0.q;
import a0.q2;
import a0.r;
import a0.s;
import a0.t;
import a0.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements u {

    /* renamed from: a  reason: collision with root package name */
    private final u f39560a;

    /* renamed from: b  reason: collision with root package name */
    private final q2 f39561b;

    /* renamed from: c  reason: collision with root package name */
    private final long f39562c;

    public k(q2 q2Var, u uVar) {
        this(uVar, q2Var, -1L);
    }

    @Override // a0.u
    public long a() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.a();
        }
        long j10 = this.f39562c;
        if (j10 != -1) {
            return j10;
        }
        throw new IllegalStateException("No timestamp is available.");
    }

    @Override // a0.u
    public q2 c() {
        return this.f39561b;
    }

    @Override // a0.u
    public t d() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.d();
        }
        return t.UNKNOWN;
    }

    @Override // a0.u
    public r e() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.e();
        }
        return r.UNKNOWN;
    }

    @Override // a0.u
    public a0.n g() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.g();
        }
        return a0.n.UNKNOWN;
    }

    @Override // a0.u
    public q h() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.h();
        }
        return q.UNKNOWN;
    }

    @Override // a0.u
    public s i() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.i();
        }
        return s.UNKNOWN;
    }

    @Override // a0.u
    public a0.p j() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.j();
        }
        return a0.p.UNKNOWN;
    }

    @Override // a0.u
    public a0.o k() {
        u uVar = this.f39560a;
        if (uVar != null) {
            return uVar.k();
        }
        return a0.o.UNKNOWN;
    }

    public k(q2 q2Var, long j10) {
        this(null, q2Var, j10);
    }

    private k(u uVar, q2 q2Var, long j10) {
        this.f39560a = uVar;
        this.f39561b = q2Var;
        this.f39562c = j10;
    }
}
