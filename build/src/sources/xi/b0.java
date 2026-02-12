package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements ij.b {

    /* renamed from: c  reason: collision with root package name */
    private static final ij.a f54796c = new ij.a() { // from class: xi.z
        @Override // ij.a
        public final void a(ij.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final ij.b f54797d = new ij.b() { // from class: xi.a0
        @Override // ij.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private ij.a f54798a;

    /* renamed from: b  reason: collision with root package name */
    private volatile ij.b f54799b;

    private b0(ij.a aVar, ij.b bVar) {
        this.f54798a = aVar;
        this.f54799b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(ij.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f54796c, f54797d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ij.b bVar) {
        ij.a aVar;
        if (this.f54799b == f54797d) {
            synchronized (this) {
                aVar = this.f54798a;
                this.f54798a = null;
                this.f54799b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // ij.b
    public Object get() {
        return this.f54799b.get();
    }
}
