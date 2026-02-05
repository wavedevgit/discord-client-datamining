package ti;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements ej.b {

    /* renamed from: c  reason: collision with root package name */
    private static final ej.a f50683c = new ej.a() { // from class: ti.z
        @Override // ej.a
        public final void a(ej.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final ej.b f50684d = new ej.b() { // from class: ti.a0
        @Override // ej.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private ej.a f50685a;

    /* renamed from: b  reason: collision with root package name */
    private volatile ej.b f50686b;

    private b0(ej.a aVar, ej.b bVar) {
        this.f50685a = aVar;
        this.f50686b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(ej.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f50683c, f50684d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ej.b bVar) {
        ej.a aVar;
        if (this.f50686b == f50684d) {
            synchronized (this) {
                aVar = this.f50685a;
                this.f50685a = null;
                this.f50686b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // ej.b
    public Object get() {
        return this.f50686b.get();
    }
}
