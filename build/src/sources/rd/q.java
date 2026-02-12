package rd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f46438a;

    /* renamed from: b  reason: collision with root package name */
    public final int f46439b;

    /* renamed from: c  reason: collision with root package name */
    public final int f46440c;

    /* renamed from: d  reason: collision with root package name */
    public final long f46441d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46442e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f46438a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f46439b, this.f46440c, this.f46441d, this.f46442e);
    }

    public boolean b() {
        if (this.f46439b != -1) {
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
        if (this.f46438a.equals(qVar.f46438a) && this.f46439b == qVar.f46439b && this.f46440c == qVar.f46440c && this.f46441d == qVar.f46441d && this.f46442e == qVar.f46442e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f46438a.hashCode()) * 31) + this.f46439b) * 31) + this.f46440c) * 31) + ((int) this.f46441d)) * 31) + this.f46442e;
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
        this.f46438a = qVar.f46438a;
        this.f46439b = qVar.f46439b;
        this.f46440c = qVar.f46440c;
        this.f46441d = qVar.f46441d;
        this.f46442e = qVar.f46442e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f46438a = obj;
        this.f46439b = i10;
        this.f46440c = i11;
        this.f46441d = j10;
        this.f46442e = i12;
    }
}
