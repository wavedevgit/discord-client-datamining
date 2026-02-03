package xb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f53488a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53489b;

    /* renamed from: c  reason: collision with root package name */
    private final e f53490c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53491d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Integer num, Object obj, e eVar, f fVar) {
        this.f53488a = num;
        if (obj != null) {
            this.f53489b = obj;
            if (eVar != null) {
                this.f53490c = eVar;
                this.f53491d = fVar;
                return;
            }
            throw new NullPointerException("Null priority");
        }
        throw new NullPointerException("Null payload");
    }

    @Override // xb.d
    public Integer a() {
        return this.f53488a;
    }

    @Override // xb.d
    public Object b() {
        return this.f53489b;
    }

    @Override // xb.d
    public e c() {
        return this.f53490c;
    }

    @Override // xb.d
    public f d() {
        return this.f53491d;
    }

    public boolean equals(Object obj) {
        f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            Integer num = this.f53488a;
            if (num != null ? num.equals(dVar.a()) : dVar.a() == null) {
                if (this.f53489b.equals(dVar.b()) && this.f53490c.equals(dVar.c()) && ((fVar = this.f53491d) != null ? fVar.equals(dVar.d()) : dVar.d() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f53488a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int hashCode2 = (((((hashCode ^ 1000003) * 1000003) ^ this.f53489b.hashCode()) * 1000003) ^ this.f53490c.hashCode()) * 1000003;
        f fVar = this.f53491d;
        if (fVar != null) {
            i10 = fVar.hashCode();
        }
        return hashCode2 ^ i10;
    }

    public String toString() {
        return "Event{code=" + this.f53488a + ", payload=" + this.f53489b + ", priority=" + this.f53490c + ", productData=" + this.f53491d + "}";
    }
}
