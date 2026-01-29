package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47284a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47285b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47286c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47287d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47288e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47284a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47285b, this.f47286c, this.f47287d, this.f47288e);
    }

    public boolean b() {
        if (this.f47285b != -1) {
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
        if (this.f47284a.equals(qVar.f47284a) && this.f47285b == qVar.f47285b && this.f47286c == qVar.f47286c && this.f47287d == qVar.f47287d && this.f47288e == qVar.f47288e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47284a.hashCode()) * 31) + this.f47285b) * 31) + this.f47286c) * 31) + ((int) this.f47287d)) * 31) + this.f47288e;
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
        this.f47284a = qVar.f47284a;
        this.f47285b = qVar.f47285b;
        this.f47286c = qVar.f47286c;
        this.f47287d = qVar.f47287d;
        this.f47288e = qVar.f47288e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47284a = obj;
        this.f47285b = i10;
        this.f47286c = i11;
        this.f47287d = j10;
        this.f47288e = i12;
    }
}
