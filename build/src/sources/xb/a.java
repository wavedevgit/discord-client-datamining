package xb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f54617a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54618b;

    /* renamed from: c  reason: collision with root package name */
    private final e f54619c;

    /* renamed from: d  reason: collision with root package name */
    private final f f54620d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Integer num, Object obj, e eVar, f fVar) {
        this.f54617a = num;
        if (obj != null) {
            this.f54618b = obj;
            if (eVar != null) {
                this.f54619c = eVar;
                this.f54620d = fVar;
                return;
            }
            throw new NullPointerException("Null priority");
        }
        throw new NullPointerException("Null payload");
    }

    @Override // xb.d
    public Integer a() {
        return this.f54617a;
    }

    @Override // xb.d
    public Object b() {
        return this.f54618b;
    }

    @Override // xb.d
    public e c() {
        return this.f54619c;
    }

    @Override // xb.d
    public f d() {
        return this.f54620d;
    }

    public boolean equals(Object obj) {
        f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            Integer num = this.f54617a;
            if (num != null ? num.equals(dVar.a()) : dVar.a() == null) {
                if (this.f54618b.equals(dVar.b()) && this.f54619c.equals(dVar.c()) && ((fVar = this.f54620d) != null ? fVar.equals(dVar.d()) : dVar.d() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f54617a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int hashCode2 = (((((hashCode ^ 1000003) * 1000003) ^ this.f54618b.hashCode()) * 1000003) ^ this.f54619c.hashCode()) * 1000003;
        f fVar = this.f54620d;
        if (fVar != null) {
            i10 = fVar.hashCode();
        }
        return hashCode2 ^ i10;
    }

    public String toString() {
        return "Event{code=" + this.f54617a + ", payload=" + this.f54618b + ", priority=" + this.f54619c + ", productData=" + this.f54620d + "}";
    }
}
