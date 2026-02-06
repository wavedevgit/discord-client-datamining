package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f46817a;

    /* renamed from: b  reason: collision with root package name */
    public final int f46818b;

    /* renamed from: c  reason: collision with root package name */
    public final int f46819c;

    /* renamed from: d  reason: collision with root package name */
    public final long f46820d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46821e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f46817a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f46818b, this.f46819c, this.f46820d, this.f46821e);
    }

    public boolean b() {
        if (this.f46818b != -1) {
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
        if (this.f46817a.equals(qVar.f46817a) && this.f46818b == qVar.f46818b && this.f46819c == qVar.f46819c && this.f46820d == qVar.f46820d && this.f46821e == qVar.f46821e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f46817a.hashCode()) * 31) + this.f46818b) * 31) + this.f46819c) * 31) + ((int) this.f46820d)) * 31) + this.f46821e;
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
        this.f46817a = qVar.f46817a;
        this.f46818b = qVar.f46818b;
        this.f46819c = qVar.f46819c;
        this.f46820d = qVar.f46820d;
        this.f46821e = qVar.f46821e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f46817a = obj;
        this.f46818b = i10;
        this.f46819c = i11;
        this.f46820d = j10;
        this.f46821e = i12;
    }
}
