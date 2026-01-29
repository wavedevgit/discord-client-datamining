package a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends e1 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Object obj) {
        if (obj != null) {
            this.f29a = obj;
            return;
        }
        throw new NullPointerException("Null value");
    }

    @Override // a0.e1
    public Object b() {
        return this.f29a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e1) {
            return this.f29a.equals(((e1) obj).b());
        }
        return false;
    }

    public int hashCode() {
        return this.f29a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "Identifier{value=" + this.f29a + "}";
    }
}
