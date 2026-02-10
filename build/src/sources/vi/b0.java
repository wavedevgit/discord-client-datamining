package vi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements gj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final gj.a f52399c = new gj.a() { // from class: vi.z
        @Override // gj.a
        public final void a(gj.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final gj.b f52400d = new gj.b() { // from class: vi.a0
        @Override // gj.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private gj.a f52401a;

    /* renamed from: b  reason: collision with root package name */
    private volatile gj.b f52402b;

    private b0(gj.a aVar, gj.b bVar) {
        this.f52401a = aVar;
        this.f52402b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(gj.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f52399c, f52400d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(gj.b bVar) {
        gj.a aVar;
        if (this.f52402b == f52400d) {
            synchronized (this) {
                aVar = this.f52401a;
                this.f52401a = null;
                this.f52402b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // gj.b
    public Object get() {
        return this.f52402b.get();
    }
}
