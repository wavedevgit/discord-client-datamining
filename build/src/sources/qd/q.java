package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47705a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47706b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47707c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47708d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47709e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47705a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47706b, this.f47707c, this.f47708d, this.f47709e);
    }

    public boolean b() {
        if (this.f47706b != -1) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (this.f47705a.equals(qVar.f47705a) && this.f47706b == qVar.f47706b && this.f47707c == qVar.f47707c && this.f47708d == qVar.f47708d && this.f47709e == qVar.f47709e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47705a.hashCode()) * 31) + this.f47706b) * 31) + this.f47707c) * 31) + ((int) this.f47708d)) * 31) + this.f47709e;
    }

    public q(Object obj, long j10) {
        this(obj, -1, -1, j10, -1);
    }

    public q(Object obj, long j10, int i10) {
        this(obj, -1, -1, j10, i10);
    }

    public q(Object obj, int i10, int i11, long j10) {
        this(obj, i10, i11, j10, -1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(q qVar) {
        this.f47705a = qVar.f47705a;
        this.f47706b = qVar.f47706b;
        this.f47707c = qVar.f47707c;
        this.f47708d = qVar.f47708d;
        this.f47709e = qVar.f47709e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47705a = obj;
        this.f47706b = i10;
        this.f47707c = i11;
        this.f47708d = j10;
        this.f47709e = i12;
    }
}
