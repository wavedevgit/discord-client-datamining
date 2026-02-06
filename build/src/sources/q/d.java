package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f45803a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f45804b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f45805c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f45806d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f45807e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f45808f;

    /* renamed from: g  reason: collision with root package name */
    private final List f45809g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f45803a = str;
            if (cls != null) {
                this.f45804b = cls;
                if (i2Var != null) {
                    this.f45805c = i2Var;
                    if (x2Var != null) {
                        this.f45806d = x2Var;
                        this.f45807e = size;
                        this.f45808f = m2Var;
                        this.f45809g = list;
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
        return this.f45809g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f45805c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f45808f;
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
            if (this.f45803a.equals(kVar.h()) && this.f45804b.equals(kVar.i()) && this.f45805c.equals(kVar.d()) && this.f45806d.equals(kVar.g()) && ((size = this.f45807e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f45808f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f45809g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f45807e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f45806d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f45803a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f45803a.hashCode() ^ 1000003) * 1000003) ^ this.f45804b.hashCode()) * 1000003) ^ this.f45805c.hashCode()) * 1000003) ^ this.f45806d.hashCode()) * 1000003;
        Size size = this.f45807e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f45808f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f45809g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f45804b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f45803a + ", useCaseType=" + this.f45804b + ", sessionConfig=" + this.f45805c + ", useCaseConfig=" + this.f45806d + ", surfaceResolution=" + this.f45807e + ", streamSpec=" + this.f45808f + ", captureTypes=" + this.f45809g + "}";
    }
}
