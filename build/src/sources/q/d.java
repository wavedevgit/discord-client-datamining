package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f44606a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f44607b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f44608c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f44609d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f44610e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f44611f;

    /* renamed from: g  reason: collision with root package name */
    private final List f44612g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f44606a = str;
            if (cls != null) {
                this.f44607b = cls;
                if (i2Var != null) {
                    this.f44608c = i2Var;
                    if (x2Var != null) {
                        this.f44609d = x2Var;
                        this.f44610e = size;
                        this.f44611f = m2Var;
                        this.f44612g = list;
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
        return this.f44612g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f44608c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f44611f;
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
            if (this.f44606a.equals(kVar.h()) && this.f44607b.equals(kVar.i()) && this.f44608c.equals(kVar.d()) && this.f44609d.equals(kVar.g()) && ((size = this.f44610e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f44611f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f44612g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f44610e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f44609d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f44606a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f44606a.hashCode() ^ 1000003) * 1000003) ^ this.f44607b.hashCode()) * 1000003) ^ this.f44608c.hashCode()) * 1000003) ^ this.f44609d.hashCode()) * 1000003;
        Size size = this.f44610e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f44611f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f44612g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f44607b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f44606a + ", useCaseType=" + this.f44607b + ", sessionConfig=" + this.f44608c + ", useCaseConfig=" + this.f44609d + ", surfaceResolution=" + this.f44610e + ", streamSpec=" + this.f44611f + ", captureTypes=" + this.f44612g + "}";
    }
}
