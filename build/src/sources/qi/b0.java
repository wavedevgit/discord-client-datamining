package qi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements bj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final bj.a f47398c = new bj.a() { // from class: qi.z
        @Override // bj.a
        public final void a(bj.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final bj.b f47399d = new bj.b() { // from class: qi.a0
        @Override // bj.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private bj.a f47400a;

    /* renamed from: b  reason: collision with root package name */
    private volatile bj.b f47401b;

    private b0(bj.a aVar, bj.b bVar) {
        this.f47400a = aVar;
        this.f47401b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(bj.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f47398c, f47399d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(bj.b bVar) {
        bj.a aVar;
        if (this.f47401b == f47399d) {
            synchronized (this) {
                aVar = this.f47400a;
                this.f47400a = null;
                this.f47401b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // bj.b
    public Object get() {
        return this.f47401b.get();
    }
}
