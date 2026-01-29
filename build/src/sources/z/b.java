package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55064d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55065e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55066f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55067g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55068h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55069i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55070j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55071k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55064d = size;
            this.f55065e = i10;
            this.f55066f = i11;
            this.f55067g = z10;
            this.f55068h = size2;
            this.f55069i = i12;
            if (uVar != null) {
                this.f55070j = uVar;
                if (uVar2 != null) {
                    this.f55071k = uVar2;
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
        return this.f55071k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55065e;
    }

    @Override // z.u.c
    int e() {
        return this.f55066f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55064d.equals(cVar.j()) && this.f55065e == cVar.d() && this.f55066f == cVar.e() && this.f55067g == cVar.l()) {
                cVar.c();
                Size size = this.f55068h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55069i == cVar.f() && this.f55070j.equals(cVar.i()) && this.f55071k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55069i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55068h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55064d.hashCode() ^ 1000003) * 1000003) ^ this.f55065e) * 1000003) ^ this.f55066f) * 1000003;
        if (this.f55067g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55068h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55069i) * 1000003) ^ this.f55070j.hashCode()) * 1000003) ^ this.f55071k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55070j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55064d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55067g;
    }

    public String toString() {
        return "In{size=" + this.f55064d + ", inputFormat=" + this.f55065e + ", outputFormat=" + this.f55066f + ", virtualCamera=" + this.f55067g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55068h + ", postviewImageFormat=" + this.f55069i + ", requestEdge=" + this.f55070j + ", errorEdge=" + this.f55071k + "}";
    }
}
