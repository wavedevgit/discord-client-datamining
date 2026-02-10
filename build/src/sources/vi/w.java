package vi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements gj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f52466c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f52467a = f52466c;

    /* renamed from: b  reason: collision with root package name */
    private volatile gj.b f52468b;

    public w(gj.b bVar) {
        this.f52468b = bVar;
    }

    @Override // gj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f52467a;
        Object obj3 = f52466c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f52467a;
                    if (obj == obj3) {
                        obj = this.f52468b.get();
                        this.f52467a = obj;
                        this.f52468b = null;
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
