package yb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f56052a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56053b;

    /* renamed from: c  reason: collision with root package name */
    private final e f56054c;

    /* renamed from: d  reason: collision with root package name */
    private final f f56055d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Integer num, Object obj, e eVar, f fVar) {
        this.f56052a = num;
        if (obj != null) {
            this.f56053b = obj;
            if (eVar != null) {
                this.f56054c = eVar;
                this.f56055d = fVar;
                return;
            }
            throw new NullPointerException("Null priority");
        }
        throw new NullPointerException("Null payload");
    }

    @Override // yb.d
    public Integer a() {
        return this.f56052a;
    }

    @Override // yb.d
    public Object b() {
        return this.f56053b;
    }

    @Override // yb.d
    public e c() {
        return this.f56054c;
    }

    @Override // yb.d
    public f d() {
        return this.f56055d;
    }

    public boolean equals(Object obj) {
        f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            Integer num = this.f56052a;
            if (num != null ? num.equals(dVar.a()) : dVar.a() == null) {
                if (this.f56053b.equals(dVar.b()) && this.f56054c.equals(dVar.c()) && ((fVar = this.f56055d) != null ? fVar.equals(dVar.d()) : dVar.d() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f56052a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int hashCode2 = (((((hashCode ^ 1000003) * 1000003) ^ this.f56053b.hashCode()) * 1000003) ^ this.f56054c.hashCode()) * 1000003;
        f fVar = this.f56055d;
        if (fVar != null) {
            i10 = fVar.hashCode();
        }
        return hashCode2 ^ i10;
    }

    public String toString() {
        return "Event{code=" + this.f56052a + ", payload=" + this.f56053b + ", priority=" + this.f56054c + ", productData=" + this.f56055d + "}";
    }
}
