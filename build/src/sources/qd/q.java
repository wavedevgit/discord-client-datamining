package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47769a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47770b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47771c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47772d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47773e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47769a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47770b, this.f47771c, this.f47772d, this.f47773e);
    }

    public boolean b() {
        if (this.f47770b != -1) {
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
        if (this.f47769a.equals(qVar.f47769a) && this.f47770b == qVar.f47770b && this.f47771c == qVar.f47771c && this.f47772d == qVar.f47772d && this.f47773e == qVar.f47773e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47769a.hashCode()) * 31) + this.f47770b) * 31) + this.f47771c) * 31) + ((int) this.f47772d)) * 31) + this.f47773e;
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
        this.f47769a = qVar.f47769a;
        this.f47770b = qVar.f47770b;
        this.f47771c = qVar.f47771c;
        this.f47772d = qVar.f47772d;
        this.f47773e = qVar.f47773e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47769a = obj;
        this.f47770b = i10;
        this.f47771c = i11;
        this.f47772d = j10;
        this.f47773e = i12;
    }
}
