package xi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements ij.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f54862c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f54863a = f54862c;

    /* renamed from: b  reason: collision with root package name */
    private volatile ij.b f54864b;

    public w(ij.b bVar) {
        this.f54864b = bVar;
    }

    @Override // ij.b
    public Object get() {
        Object obj;
        Object obj2 = this.f54863a;
        Object obj3 = f54862c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f54863a;
                    if (obj == obj3) {
                        obj = this.f54864b.get();
                        this.f54863a = obj;
                        this.f54864b = null;
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
