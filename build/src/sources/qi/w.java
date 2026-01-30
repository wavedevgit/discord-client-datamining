package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements bj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f47481c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f47482a = f47481c;

    /* renamed from: b  reason: collision with root package name */
    private volatile bj.b f47483b;

    public w(bj.b bVar) {
        this.f47483b = bVar;
    }

    @Override // bj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f47482a;
        Object obj3 = f47481c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f47482a;
                    if (obj == obj3) {
                        obj = this.f47483b.get();
                        this.f47482a = obj;
                        this.f47483b = null;
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
