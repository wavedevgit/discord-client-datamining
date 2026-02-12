package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55851d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55852e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55853f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55854g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55855h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55856i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55857j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55858k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55851d = size;
            this.f55852e = i10;
            this.f55853f = i11;
            this.f55854g = z10;
            this.f55855h = size2;
            this.f55856i = i12;
            if (uVar != null) {
                this.f55857j = uVar;
                if (uVar2 != null) {
                    this.f55858k = uVar2;
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
        return this.f55858k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55852e;
    }

    @Override // z.u.c
    int e() {
        return this.f55853f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55851d.equals(cVar.j()) && this.f55852e == cVar.d() && this.f55853f == cVar.e() && this.f55854g == cVar.l()) {
                cVar.c();
                Size size = this.f55855h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55856i == cVar.f() && this.f55857j.equals(cVar.i()) && this.f55858k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55856i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55855h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55851d.hashCode() ^ 1000003) * 1000003) ^ this.f55852e) * 1000003) ^ this.f55853f) * 1000003;
        if (this.f55854g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55855h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55856i) * 1000003) ^ this.f55857j.hashCode()) * 1000003) ^ this.f55858k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55857j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55851d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55854g;
    }

    public String toString() {
        return "In{size=" + this.f55851d + ", inputFormat=" + this.f55852e + ", outputFormat=" + this.f55853f + ", virtualCamera=" + this.f55854g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55855h + ", postviewImageFormat=" + this.f55856i + ", requestEdge=" + this.f55857j + ", errorEdge=" + this.f55858k + "}";
    }
}
