package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f43843a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f43844b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f43845c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f43846d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f43847e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f43848f;

    /* renamed from: g  reason: collision with root package name */
    private final List f43849g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f43843a = str;
            if (cls != null) {
                this.f43844b = cls;
                if (i2Var != null) {
                    this.f43845c = i2Var;
                    if (x2Var != null) {
                        this.f43846d = x2Var;
                        this.f43847e = size;
                        this.f43848f = m2Var;
                        this.f43849g = list;
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
        return this.f43849g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f43845c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f43848f;
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
            if (this.f43843a.equals(kVar.h()) && this.f43844b.equals(kVar.i()) && this.f43845c.equals(kVar.d()) && this.f43846d.equals(kVar.g()) && ((size = this.f43847e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f43848f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f43849g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f43847e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f43846d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f43843a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f43843a.hashCode() ^ 1000003) * 1000003) ^ this.f43844b.hashCode()) * 1000003) ^ this.f43845c.hashCode()) * 1000003) ^ this.f43846d.hashCode()) * 1000003;
        Size size = this.f43847e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f43848f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f43849g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f43844b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f43843a + ", useCaseType=" + this.f43844b + ", sessionConfig=" + this.f43845c + ", useCaseConfig=" + this.f43846d + ", surfaceResolution=" + this.f43847e + ", streamSpec=" + this.f43848f + ", captureTypes=" + this.f43849g + "}";
    }
}
