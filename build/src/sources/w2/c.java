package w2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final Object f53324a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53325b;

    public c(Object obj, int i10) {
        super(null);
        this.f53324a = obj;
        this.f53325b = i10;
    }

    public final void a() {
        int i10;
        Object obj = this.f53324a;
        boolean z10 = false;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        if (i10 == this.f53325b) {
            z10 = true;
        }
        if (z10) {
            return;
        }
        throw new IllegalStateException("Data in DataStore was mutated but DataStore is only compatible with Immutable types.");
    }

    public final Object b() {
        return this.f53324a;
    }
}
