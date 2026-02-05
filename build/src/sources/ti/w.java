package ti;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements ej.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f50750c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f50751a = f50750c;

    /* renamed from: b  reason: collision with root package name */
    private volatile ej.b f50752b;

    public w(ej.b bVar) {
        this.f50752b = bVar;
    }

    @Override // ej.b
    public Object get() {
        Object obj;
        Object obj2 = this.f50751a;
        Object obj3 = f50750c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f50751a;
                    if (obj == obj3) {
                        obj = this.f50752b.get();
                        this.f50751a = obj;
                        this.f50752b = null;
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
