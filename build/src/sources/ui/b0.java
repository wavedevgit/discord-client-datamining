package ui;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 implements fj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final fj.a f51539c = new fj.a() { // from class: ui.z
        @Override // fj.a
        public final void a(fj.b bVar) {
            b0.b(bVar);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final fj.b f51540d = new fj.b() { // from class: ui.a0
        @Override // fj.b
        public final Object get() {
            return b0.a();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private fj.a f51541a;

    /* renamed from: b  reason: collision with root package name */
    private volatile fj.b f51542b;

    private b0(fj.a aVar, fj.b bVar) {
        this.f51541a = aVar;
        this.f51542b = bVar;
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    public static /* synthetic */ void b(fj.b bVar) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 c() {
        return new b0(f51539c, f51540d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(fj.b bVar) {
        fj.a aVar;
        if (this.f51542b == f51540d) {
            synchronized (this) {
                aVar = this.f51541a;
                this.f51541a = null;
                this.f51542b = bVar;
            }
            aVar.a(bVar);
            return;
        }
        throw new IllegalStateException("provide() can be called only once.");
    }

    @Override // fj.b
    public Object get() {
        return this.f51542b.get();
    }
}
