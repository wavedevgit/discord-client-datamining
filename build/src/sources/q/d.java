package q;

import android.util.Size;
import java.util.List;
import q.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends m0.k {

    /* renamed from: a  reason: collision with root package name */
    private final String f46755a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f46756b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.i2 f46757c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.x2 f46758d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f46759e;

    /* renamed from: f  reason: collision with root package name */
    private final a0.m2 f46760f;

    /* renamed from: g  reason: collision with root package name */
    private final List f46761g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, a0.i2 i2Var, a0.x2 x2Var, Size size, a0.m2 m2Var, List list) {
        if (str != null) {
            this.f46755a = str;
            if (cls != null) {
                this.f46756b = cls;
                if (i2Var != null) {
                    this.f46757c = i2Var;
                    if (x2Var != null) {
                        this.f46758d = x2Var;
                        this.f46759e = size;
                        this.f46760f = m2Var;
                        this.f46761g = list;
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
        return this.f46761g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.i2 d() {
        return this.f46757c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.m2 e() {
        return this.f46760f;
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
            if (this.f46755a.equals(kVar.h()) && this.f46756b.equals(kVar.i()) && this.f46757c.equals(kVar.d()) && this.f46758d.equals(kVar.g()) && ((size = this.f46759e) != null ? size.equals(kVar.f()) : kVar.f() == null) && ((m2Var = this.f46760f) != null ? m2Var.equals(kVar.e()) : kVar.e() == null) && ((list = this.f46761g) != null ? list.equals(kVar.c()) : kVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Size f() {
        return this.f46759e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public a0.x2 g() {
        return this.f46758d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public String h() {
        return this.f46755a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = (((((((this.f46755a.hashCode() ^ 1000003) * 1000003) ^ this.f46756b.hashCode()) * 1000003) ^ this.f46757c.hashCode()) * 1000003) ^ this.f46758d.hashCode()) * 1000003;
        Size size = this.f46759e;
        int i10 = 0;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        int i11 = (hashCode3 ^ hashCode) * 1000003;
        a0.m2 m2Var = this.f46760f;
        if (m2Var == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = m2Var.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        List list = this.f46761g;
        if (list != null) {
            i10 = list.hashCode();
        }
        return i12 ^ i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.m0.k
    public Class i() {
        return this.f46756b;
    }

    public String toString() {
        return "UseCaseInfo{useCaseId=" + this.f46755a + ", useCaseType=" + this.f46756b + ", sessionConfig=" + this.f46757c + ", useCaseConfig=" + this.f46758d + ", surfaceResolution=" + this.f46759e + ", streamSpec=" + this.f46760f + ", captureTypes=" + this.f46761g + "}";
    }
}
