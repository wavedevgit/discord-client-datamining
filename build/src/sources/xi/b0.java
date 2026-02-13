package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements ij.b {

    /* renamed from: c  reason: collision with root package name */
    private static final ij.a f55364c = new ij.a() { // from class: xi.z
        @Override // ij.a
        public final void a(ij.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final ij.b f55365d = new ij.b() { // from class: xi.a0
        @Override // ij.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private ij.a f55366a;

    /* renamed from: b  reason: collision with root package name */
    private volatile ij.b f55367b;

    private b0(ij.a aVar, ij.b bVar) {
        this.f55366a = aVar;
        this.f55367b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(ij.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f55364c, f55365d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ij.b bVar) {
        ij.a aVar;
        if (this.f55367b == f55365d) {
            synchronized (this) {
                aVar = this.f55366a;
                this.f55366a = null;
                this.f55367b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // ij.b
    public Object get() {
        return this.f55367b.get();
    }
}
