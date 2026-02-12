package yb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f55484a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55485b;

    /* renamed from: c  reason: collision with root package name */
    private final e f55486c;

    /* renamed from: d  reason: collision with root package name */
    private final f f55487d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Integer num, Object obj, e eVar, f fVar) {
        this.f55484a = num;
        if (obj != null) {
            this.f55485b = obj;
            if (eVar != null) {
                this.f55486c = eVar;
                this.f55487d = fVar;
                return;
            }
            throw new NullPointerException("Null priority");
        }
        throw new NullPointerException("Null payload");
    }

    @Override // yb.d
    public Integer a() {
        return this.f55484a;
    }

    @Override // yb.d
    public Object b() {
        return this.f55485b;
    }

    @Override // yb.d
    public e c() {
        return this.f55486c;
    }

    @Override // yb.d
    public f d() {
        return this.f55487d;
    }

    public boolean equals(Object obj) {
        f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            Integer num = this.f55484a;
            if (num != null ? num.equals(dVar.a()) : dVar.a() == null) {
                if (this.f55485b.equals(dVar.b()) && this.f55486c.equals(dVar.c()) && ((fVar = this.f55487d) != null ? fVar.equals(dVar.d()) : dVar.d() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f55484a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int hashCode2 = (((((hashCode ^ 1000003) * 1000003) ^ this.f55485b.hashCode()) * 1000003) ^ this.f55486c.hashCode()) * 1000003;
        f fVar = this.f55487d;
        if (fVar != null) {
            i10 = fVar.hashCode();
        }
        return hashCode2 ^ i10;
    }

    public String toString() {
        return "Event{code=" + this.f55484a + ", payload=" + this.f55485b + ", priority=" + this.f55486c + ", productData=" + this.f55487d + "}";
    }
}
