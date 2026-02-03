package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55350d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55351e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55352f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55353g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55354h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55355i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55356j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55357k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55350d = size;
            this.f55351e = i10;
            this.f55352f = i11;
            this.f55353g = z10;
            this.f55354h = size2;
            this.f55355i = i12;
            if (uVar != null) {
                this.f55356j = uVar;
                if (uVar2 != null) {
                    this.f55357k = uVar2;
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
        return this.f55357k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55351e;
    }

    @Override // z.u.c
    int e() {
        return this.f55352f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55350d.equals(cVar.j()) && this.f55351e == cVar.d() && this.f55352f == cVar.e() && this.f55353g == cVar.l()) {
                cVar.c();
                Size size = this.f55354h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55355i == cVar.f() && this.f55356j.equals(cVar.i()) && this.f55357k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55355i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55354h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55350d.hashCode() ^ 1000003) * 1000003) ^ this.f55351e) * 1000003) ^ this.f55352f) * 1000003;
        if (this.f55353g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55354h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55355i) * 1000003) ^ this.f55356j.hashCode()) * 1000003) ^ this.f55357k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55356j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55350d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55353g;
    }

    public String toString() {
        return "In{size=" + this.f55350d + ", inputFormat=" + this.f55351e + ", outputFormat=" + this.f55352f + ", virtualCamera=" + this.f55353g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55354h + ", postviewImageFormat=" + this.f55355i + ", requestEdge=" + this.f55356j + ", errorEdge=" + this.f55357k + "}";
    }
}
