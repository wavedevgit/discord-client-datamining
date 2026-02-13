package rd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47006a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47007b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47008c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47009d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47010e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47006a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47007b, this.f47008c, this.f47009d, this.f47010e);
    }

    public boolean b() {
        if (this.f47007b != -1) {
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
        if (this.f47006a.equals(qVar.f47006a) && this.f47007b == qVar.f47007b && this.f47008c == qVar.f47008c && this.f47009d == qVar.f47009d && this.f47010e == qVar.f47010e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47006a.hashCode()) * 31) + this.f47007b) * 31) + this.f47008c) * 31) + ((int) this.f47009d)) * 31) + this.f47010e;
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
        this.f47006a = qVar.f47006a;
        this.f47007b = qVar.f47007b;
        this.f47008c = qVar.f47008c;
        this.f47009d = qVar.f47009d;
        this.f47010e = qVar.f47010e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47006a = obj;
        this.f47007b = i10;
        this.f47008c = i11;
        this.f47009d = j10;
        this.f47010e = i12;
    }
}
