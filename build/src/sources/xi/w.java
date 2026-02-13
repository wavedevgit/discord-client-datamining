package xi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements ij.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f55431c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f55432a = f55431c;

    /* renamed from: b  reason: collision with root package name */
    private volatile ij.b f55433b;

    public w(ij.b bVar) {
        this.f55433b = bVar;
    }

    @Override // ij.b
    public Object get() {
        Object obj;
        Object obj2 = this.f55432a;
        Object obj3 = f55431c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f55432a;
                    if (obj == obj3) {
                        obj = this.f55433b.get();
                        this.f55432a = obj;
                        this.f55433b = null;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return obj;
        }
        return obj2;
    }
}
