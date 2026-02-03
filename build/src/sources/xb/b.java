package xb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f53213a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Integer num) {
        this.f53213a = num;
    }

    @Override // xb.f
    public Integer a() {
        return this.f53213a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        Integer num = this.f53213a;
        Integer a10 = ((f) obj).a();
        if (num == null) {
            if (a10 == null) {
                return true;
            }
            return false;
        }
        return num.equals(a10);
    }

    public int hashCode() {
        int hashCode;
        Integer num = this.f53213a;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        return hashCode ^ 1000003;
    }

    public String toString() {
        return "ProductData{productId=" + this.f53213a + "}";
    }
}
