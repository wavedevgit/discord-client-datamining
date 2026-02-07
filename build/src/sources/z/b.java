package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55715d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55716e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55717f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55718g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55719h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55720i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55721j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55722k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55715d = size;
            this.f55716e = i10;
            this.f55717f = i11;
            this.f55718g = z10;
            this.f55719h = size2;
            this.f55720i = i12;
            if (uVar != null) {
                this.f55721j = uVar;
                if (uVar2 != null) {
                    this.f55722k = uVar2;
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
        return this.f55722k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55716e;
    }

    @Override // z.u.c
    int e() {
        return this.f55717f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55715d.equals(cVar.j()) && this.f55716e == cVar.d() && this.f55717f == cVar.e() && this.f55718g == cVar.l()) {
                cVar.c();
                Size size = this.f55719h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55720i == cVar.f() && this.f55721j.equals(cVar.i()) && this.f55722k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55720i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55719h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55715d.hashCode() ^ 1000003) * 1000003) ^ this.f55716e) * 1000003) ^ this.f55717f) * 1000003;
        if (this.f55718g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55719h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55720i) * 1000003) ^ this.f55721j.hashCode()) * 1000003) ^ this.f55722k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55721j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55715d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55718g;
    }

    public String toString() {
        return "In{size=" + this.f55715d + ", inputFormat=" + this.f55716e + ", outputFormat=" + this.f55717f + ", virtualCamera=" + this.f55718g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55719h + ", postviewImageFormat=" + this.f55720i + ", requestEdge=" + this.f55721j + ", errorEdge=" + this.f55722k + "}";
    }
}
