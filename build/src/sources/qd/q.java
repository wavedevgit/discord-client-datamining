package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f46865a;

    /* renamed from: b  reason: collision with root package name */
    public final int f46866b;

    /* renamed from: c  reason: collision with root package name */
    public final int f46867c;

    /* renamed from: d  reason: collision with root package name */
    public final long f46868d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46869e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f46865a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f46866b, this.f46867c, this.f46868d, this.f46869e);
    }

    public boolean b() {
        if (this.f46866b != -1) {
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
        if (this.f46865a.equals(qVar.f46865a) && this.f46866b == qVar.f46866b && this.f46867c == qVar.f46867c && this.f46868d == qVar.f46868d && this.f46869e == qVar.f46869e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f46865a.hashCode()) * 31) + this.f46866b) * 31) + this.f46867c) * 31) + ((int) this.f46868d)) * 31) + this.f46869e;
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
        this.f46865a = qVar.f46865a;
        this.f46866b = qVar.f46866b;
        this.f46867c = qVar.f46867c;
        this.f46868d = qVar.f46868d;
        this.f46869e = qVar.f46869e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f46865a = obj;
        this.f46866b = i10;
        this.f46867c = i11;
        this.f46868d = j10;
        this.f46869e = i12;
    }
}
