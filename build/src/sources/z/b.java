package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55080d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55081e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55082f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55083g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55084h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55085i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55086j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55087k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55080d = size;
            this.f55081e = i10;
            this.f55082f = i11;
            this.f55083g = z10;
            this.f55084h = size2;
            this.f55085i = i12;
            if (uVar != null) {
                this.f55086j = uVar;
                if (uVar2 != null) {
                    this.f55087k = uVar2;
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
        return this.f55087k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55081e;
    }

    @Override // z.u.c
    int e() {
        return this.f55082f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55080d.equals(cVar.j()) && this.f55081e == cVar.d() && this.f55082f == cVar.e() && this.f55083g == cVar.l()) {
                cVar.c();
                Size size = this.f55084h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55085i == cVar.f() && this.f55086j.equals(cVar.i()) && this.f55087k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55085i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55084h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55080d.hashCode() ^ 1000003) * 1000003) ^ this.f55081e) * 1000003) ^ this.f55082f) * 1000003;
        if (this.f55083g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55084h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55085i) * 1000003) ^ this.f55086j.hashCode()) * 1000003) ^ this.f55087k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55086j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55080d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55083g;
    }

    public String toString() {
        return "In{size=" + this.f55080d + ", inputFormat=" + this.f55081e + ", outputFormat=" + this.f55082f + ", virtualCamera=" + this.f55083g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55084h + ", postviewImageFormat=" + this.f55085i + ", requestEdge=" + this.f55086j + ", errorEdge=" + this.f55087k + "}";
    }
}
