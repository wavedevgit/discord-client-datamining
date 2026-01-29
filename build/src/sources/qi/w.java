package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements bj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f47465c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f47466a = f47465c;

    /* renamed from: b  reason: collision with root package name */
    private volatile bj.b f47467b;

    public w(bj.b bVar) {
        this.f47467b = bVar;
    }

    @Override // bj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f47466a;
        Object obj3 = f47465c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f47466a;
                    if (obj == obj3) {
                        obj = this.f47467b.get();
                        this.f47466a = obj;
                        this.f47467b = null;
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
