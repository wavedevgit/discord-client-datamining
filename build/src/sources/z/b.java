package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55347d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55348e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55349f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55350g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55351h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55352i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55353j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55354k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55347d = size;
            this.f55348e = i10;
            this.f55349f = i11;
            this.f55350g = z10;
            this.f55351h = size2;
            this.f55352i = i12;
            if (uVar != null) {
                this.f55353j = uVar;
                if (uVar2 != null) {
                    this.f55354k = uVar2;
                    return;
                }
                throw new NullPointerException("Null errorEdge");
            }
            throw new NullPointerException("Null requestEdge");
        }
        throw new NullPointerException("Null size");
    }

    @Override // z.u.c
    j0.u b() {
        return this.f55354k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55348e;
    }

    @Override // z.u.c
    int e() {
        return this.f55349f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55347d.equals(cVar.j()) && this.f55348e == cVar.d() && this.f55349f == cVar.e() && this.f55350g == cVar.l()) {
                cVar.c();
                Size size = this.f55351h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55352i == cVar.f() && this.f55353j.equals(cVar.i()) && this.f55354k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55352i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55351h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55347d.hashCode() ^ 1000003) * 1000003) ^ this.f55348e) * 1000003) ^ this.f55349f) * 1000003;
        if (this.f55350g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55351h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55352i) * 1000003) ^ this.f55353j.hashCode()) * 1000003) ^ this.f55354k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55353j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55347d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55350g;
    }

    public String toString() {
        return "In{size=" + this.f55347d + ", inputFormat=" + this.f55348e + ", outputFormat=" + this.f55349f + ", virtualCamera=" + this.f55350g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55351h + ", postviewImageFormat=" + this.f55352i + ", requestEdge=" + this.f55353j + ", errorEdge=" + this.f55354k + "}";
    }
}
