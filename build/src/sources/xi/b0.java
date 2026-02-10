package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements ij.b {

    /* renamed from: c  reason: collision with root package name */
    private static final ij.a f54795c = new ij.a() { // from class: xi.z
        @Override // ij.a
        public final void a(ij.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final ij.b f54796d = new ij.b() { // from class: xi.a0
        @Override // ij.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private ij.a f54797a;

    /* renamed from: b  reason: collision with root package name */
    private volatile ij.b f54798b;

    private b0(ij.a aVar, ij.b bVar) {
        this.f54797a = aVar;
        this.f54798b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(ij.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f54795c, f54796d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ij.b bVar) {
        ij.a aVar;
        if (this.f54798b == f54796d) {
            synchronized (this) {
                aVar = this.f54797a;
                this.f54797a = null;
                this.f54798b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // ij.b
    public Object get() {
        return this.f54798b.get();
    }
}
