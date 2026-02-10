package rd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f46437a;

    /* renamed from: b  reason: collision with root package name */
    public final int f46438b;

    /* renamed from: c  reason: collision with root package name */
    public final int f46439c;

    /* renamed from: d  reason: collision with root package name */
    public final long f46440d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46441e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f46437a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f46438b, this.f46439c, this.f46440d, this.f46441e);
    }

    public boolean b() {
        if (this.f46438b != -1) {
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
        if (this.f46437a.equals(qVar.f46437a) && this.f46438b == qVar.f46438b && this.f46439c == qVar.f46439c && this.f46440d == qVar.f46440d && this.f46441e == qVar.f46441e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f46437a.hashCode()) * 31) + this.f46438b) * 31) + this.f46439c) * 31) + ((int) this.f46440d)) * 31) + this.f46441e;
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
        this.f46437a = qVar.f46437a;
        this.f46438b = qVar.f46438b;
        this.f46439c = qVar.f46439c;
        this.f46440d = qVar.f46440d;
        this.f46441e = qVar.f46441e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f46437a = obj;
        this.f46438b = i10;
        this.f46439c = i11;
        this.f46440d = j10;
        this.f46441e = i12;
    }
}
