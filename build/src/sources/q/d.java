package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f43274a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f43275b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f43276c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f43277d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f43278e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f43279f;

    /* renamed from: g  reason: collision with root package name */
    private final List f43280g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f43274a = str;
            if (cls != null) {
                this.f43275b = cls;
                if (i2Var != null) {
                    this.f43276c = i2Var;
                    if (x2Var != null) {
                        this.f43277d = x2Var;
                        this.f43278e = size;
                        this.f43279f = m2Var;
                        this.f43280g = list;
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
        return this.f43280g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f43276c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f43279f;
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
            if (this.f43274a.equals(kVar.h()) && this.f43275b.equals(kVar.i()) && this.f43276c.equals(kVar.d()) && this.f43277d.equals(kVar.g()) && ((size = this.f43278e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f43279f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f43280g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f43278e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f43277d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f43274a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f43274a.hashCode() ^ 1000003) * 1000003) ^ this.f43275b.hashCode()) * 1000003) ^ this.f43276c.hashCode()) * 1000003) ^ this.f43277d.hashCode()) * 1000003;
        Size size = this.f43278e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f43279f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f43280g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f43275b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f43274a + ", useCaseType=" + this.f43275b + ", sessionConfig=" + this.f43276c + ", useCaseConfig=" + this.f43277d + ", surfaceResolution=" + this.f43278e + ", streamSpec=" + this.f43279f + ", captureTypes=" + this.f43280g + "}";
    }
}
