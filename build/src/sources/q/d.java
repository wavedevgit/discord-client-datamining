package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f45851a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f45852b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f45853c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f45854d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f45855e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f45856f;

    /* renamed from: g  reason: collision with root package name */
    private final List f45857g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f45851a = str;
            if (cls != null) {
                this.f45852b = cls;
                if (i2Var != null) {
                    this.f45853c = i2Var;
                    if (x2Var != null) {
                        this.f45854d = x2Var;
                        this.f45855e = size;
                        this.f45856f = m2Var;
                        this.f45857g = list;
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
        return this.f45857g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f45853c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f45856f;
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
            if (this.f45851a.equals(kVar.h()) && this.f45852b.equals(kVar.i()) && this.f45853c.equals(kVar.d()) && this.f45854d.equals(kVar.g()) && ((size = this.f45855e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f45856f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f45857g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f45855e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f45854d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f45851a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f45851a.hashCode() ^ 1000003) * 1000003) ^ this.f45852b.hashCode()) * 1000003) ^ this.f45853c.hashCode()) * 1000003) ^ this.f45854d.hashCode()) * 1000003;
        Size size = this.f45855e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f45856f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f45857g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f45852b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f45851a + ", useCaseType=" + this.f45852b + ", sessionConfig=" + this.f45853c + ", useCaseConfig=" + this.f45854d + ", surfaceResolution=" + this.f45855e + ", streamSpec=" + this.f45856f + ", captureTypes=" + this.f45857g + "}";
    }
}
