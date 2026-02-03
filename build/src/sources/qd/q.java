package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47555a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47556b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47557c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47558d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47559e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47555a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47556b, this.f47557c, this.f47558d, this.f47559e);
    }

    public boolean b() {
        if (this.f47556b != -1) {
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
        if (this.f47555a.equals(qVar.f47555a) && this.f47556b == qVar.f47556b && this.f47557c == qVar.f47557c && this.f47558d == qVar.f47558d && this.f47559e == qVar.f47559e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47555a.hashCode()) * 31) + this.f47556b) * 31) + this.f47557c) * 31) + ((int) this.f47558d)) * 31) + this.f47559e;
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
        this.f47555a = qVar.f47555a;
        this.f47556b = qVar.f47556b;
        this.f47557c = qVar.f47557c;
        this.f47558d = qVar.f47558d;
        this.f47559e = qVar.f47559e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47555a = obj;
        this.f47556b = i10;
        this.f47557c = i11;
        this.f47558d = j10;
        this.f47559e = i12;
    }
}
