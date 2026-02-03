package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements bj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f47886c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f47887a = f47886c;

    /* renamed from: b  reason: collision with root package name */
    private volatile bj.b f47888b;

    public w(bj.b bVar) {
        this.f47888b = bVar;
    }

    @Override // bj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f47887a;
        Object obj3 = f47886c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f47887a;
                    if (obj == obj3) {
                        obj = this.f47888b.get();
                        this.f47887a = obj;
                        this.f47888b = null;
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
