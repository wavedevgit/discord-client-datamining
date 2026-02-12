package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f43275a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f43276b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f43277c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f43278d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f43279e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f43280f;

    /* renamed from: g  reason: collision with root package name */
    private final List f43281g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f43275a = str;
            if (cls != null) {
                this.f43276b = cls;
                if (i2Var != null) {
                    this.f43277c = i2Var;
                    if (x2Var != null) {
                        this.f43278d = x2Var;
                        this.f43279e = size;
                        this.f43280f = m2Var;
                        this.f43281g = list;
                        return;
                    }
                    throw new NullPointerException("Null useCaseConfig");
                }
                throw new NullPointerException("Null sessionConfig");
            }
            throw new NullPointerException("Null useCaseType");
        }
        throw new NullPointerException("Null useCaseId");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public List c() {
        return this.f43281g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f43277c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f43280f;
    }

    public boolean equals(Object obj) {
        Size size;
        a0.m2 m2Var;
        List list;
        if (obj == this) {
            return true;
        }
        if (obj instanceof m0.k) {
            m0.k kVar = (m0.k) obj;
            if (this.f43275a.equals(kVar.h()) && this.f43276b.equals(kVar.i()) && this.f43277c.equals(kVar.d()) && this.f43278d.equals(kVar.g()) && ((size = this.f43279e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f43280f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f43281g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f43279e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f43278d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f43275a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f43275a.hashCode() ^ 1000003) * 1000003) ^ this.f43276b.hashCode()) * 1000003) ^ this.f43277c.hashCode()) * 1000003) ^ this.f43278d.hashCode()) * 1000003;
        Size size = this.f43279e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f43280f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f43281g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f43276b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f43275a + ", useCaseType=" + this.f43276b + ", sessionConfig=" + this.f43277c + ", useCaseConfig=" + this.f43278d + ", surfaceResolution=" + this.f43279e + ", streamSpec=" + this.f43280f + ", captureTypes=" + this.f43281g + "}";
    }
}
