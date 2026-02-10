package rd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47983a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47984b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47985c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47986d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47987e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47983a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47984b, this.f47985c, this.f47986d, this.f47987e);
    }

    public boolean b() {
        if (this.f47984b != -1) {
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
        if (this.f47983a.equals(qVar.f47983a) && this.f47984b == qVar.f47984b && this.f47985c == qVar.f47985c && this.f47986d == qVar.f47986d && this.f47987e == qVar.f47987e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47983a.hashCode()) * 31) + this.f47984b) * 31) + this.f47985c) * 31) + ((int) this.f47986d)) * 31) + this.f47987e;
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
        this.f47983a = qVar.f47983a;
        this.f47984b = qVar.f47984b;
        this.f47985c = qVar.f47985c;
        this.f47986d = qVar.f47986d;
        this.f47987e = qVar.f47987e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47983a = obj;
        this.f47984b = i10;
        this.f47985c = i11;
        this.f47986d = j10;
        this.f47987e = i12;
    }
}
