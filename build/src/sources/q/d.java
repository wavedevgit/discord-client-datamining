package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f46691a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f46692b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f46693c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f46694d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f46695e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f46696f;

    /* renamed from: g  reason: collision with root package name */
    private final List f46697g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f46691a = str;
            if (cls != null) {
                this.f46692b = cls;
                if (i2Var != null) {
                    this.f46693c = i2Var;
                    if (x2Var != null) {
                        this.f46694d = x2Var;
                        this.f46695e = size;
                        this.f46696f = m2Var;
                        this.f46697g = list;
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
        return this.f46697g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f46693c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f46696f;
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
            if (this.f46691a.equals(kVar.h()) && this.f46692b.equals(kVar.i()) && this.f46693c.equals(kVar.d()) && this.f46694d.equals(kVar.g()) && ((size = this.f46695e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f46696f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f46697g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f46695e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f46694d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f46691a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f46691a.hashCode() ^ 1000003) * 1000003) ^ this.f46692b.hashCode()) * 1000003) ^ this.f46693c.hashCode()) * 1000003) ^ this.f46694d.hashCode()) * 1000003;
        Size size = this.f46695e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f46696f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f46697g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f46692b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f46691a + ", useCaseType=" + this.f46692b + ", sessionConfig=" + this.f46693c + ", useCaseConfig=" + this.f46694d + ", surfaceResolution=" + this.f46695e + ", streamSpec=" + this.f46696f + ", captureTypes=" + this.f46697g + "}";
    }
}
