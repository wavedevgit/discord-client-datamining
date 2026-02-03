package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f46541a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f46542b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f46543c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f46544d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f46545e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f46546f;

    /* renamed from: g  reason: collision with root package name */
    private final List f46547g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f46541a = str;
            if (cls != null) {
                this.f46542b = cls;
                if (i2Var != null) {
                    this.f46543c = i2Var;
                    if (x2Var != null) {
                        this.f46544d = x2Var;
                        this.f46545e = size;
                        this.f46546f = m2Var;
                        this.f46547g = list;
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
        return this.f46547g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f46543c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f46546f;
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
            if (this.f46541a.equals(kVar.h()) && this.f46542b.equals(kVar.i()) && this.f46543c.equals(kVar.d()) && this.f46544d.equals(kVar.g()) && ((size = this.f46545e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f46546f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f46547g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f46545e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f46544d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f46541a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f46541a.hashCode() ^ 1000003) * 1000003) ^ this.f46542b.hashCode()) * 1000003) ^ this.f46543c.hashCode()) * 1000003) ^ this.f46544d.hashCode()) * 1000003;
        Size size = this.f46545e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f46546f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f46547g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f46542b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f46541a + ", useCaseType=" + this.f46542b + ", sessionConfig=" + this.f46543c + ", useCaseConfig=" + this.f46544d + ", surfaceResolution=" + this.f46545e + ", streamSpec=" + this.f46546f + ", captureTypes=" + this.f46547g + "}";
    }
}
