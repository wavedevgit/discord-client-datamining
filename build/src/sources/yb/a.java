package yb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f55552a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55553b;

    /* renamed from: c  reason: collision with root package name */
    private final e f55554c;

    /* renamed from: d  reason: collision with root package name */
    private final f f55555d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Integer num, Object obj, e eVar, f fVar) {
        this.f55552a = num;
        if (obj != null) {
            this.f55553b = obj;
            if (eVar != null) {
                this.f55554c = eVar;
                this.f55555d = fVar;
                return;
            }
            throw new NullPointerException("Null priority");
        }
        throw new NullPointerException("Null payload");
    }

    @Override // yb.d
    public Integer a() {
        return this.f55552a;
    }

    @Override // yb.d
    public Object b() {
        return this.f55553b;
    }

    @Override // yb.d
    public e c() {
        return this.f55554c;
    }

    @Override // yb.d
    public f d() {
        return this.f55555d;
    }

    public boolean equals(Object obj) {
        f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            Integer num = this.f55552a;
            if (num != null ? num.equals(dVar.a()) : dVar.a() == null) {
                if (this.f55553b.equals(dVar.b()) && this.f55554c.equals(dVar.c()) && ((fVar = this.f55555d) != null ? fVar.equals(dVar.d()) : dVar.d() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f55552a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int hashCode2 = (((((hashCode ^ 1000003) * 1000003) ^ this.f55553b.hashCode()) * 1000003) ^ this.f55554c.hashCode()) * 1000003;
        f fVar = this.f55555d;
        if (fVar != null) {
            i10 = fVar.hashCode();
        }
        return hashCode2 ^ i10;
    }

    public String toString() {
        return "Event{code=" + this.f55552a + ", payload=" + this.f55553b + ", priority=" + this.f55554c + ", productData=" + this.f55555d + "}";
    }
}
