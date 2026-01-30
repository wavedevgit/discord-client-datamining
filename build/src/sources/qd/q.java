package qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    public final Object f47300a;

    /* renamed from: b  reason: collision with root package name */
    public final int f47301b;

    /* renamed from: c  reason: collision with root package name */
    public final int f47302c;

    /* renamed from: d  reason: collision with root package name */
    public final long f47303d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47304e;

    public q(Object obj) {
        this(obj, -1L);
    }

    public q a(Object obj) {
        if (this.f47300a.equals(obj)) {
            return this;
        }
        return new q(obj, this.f47301b, this.f47302c, this.f47303d, this.f47304e);
    }

    public boolean b() {
        if (this.f47301b != -1) {
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
        if (this.f47300a.equals(qVar.f47300a) && this.f47301b == qVar.f47301b && this.f47302c == qVar.f47302c && this.f47303d == qVar.f47303d && this.f47304e == qVar.f47304e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f47300a.hashCode()) * 31) + this.f47301b) * 31) + this.f47302c) * 31) + ((int) this.f47303d)) * 31) + this.f47304e;
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
        this.f47300a = qVar.f47300a;
        this.f47301b = qVar.f47301b;
        this.f47302c = qVar.f47302c;
        this.f47303d = qVar.f47303d;
        this.f47304e = qVar.f47304e;
    }

    private q(Object obj, int i10, int i11, long j10, int i12) {
        this.f47300a = obj;
        this.f47301b = i10;
        this.f47302c = i11;
        this.f47303d = j10;
        this.f47304e = i12;
    }
}
