package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements fj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f51606c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f51607a = f51606c;

    /* renamed from: b  reason: collision with root package name */
    private volatile fj.b f51608b;

    public w(fj.b bVar) {
        this.f51608b = bVar;
    }

    @Override // fj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f51607a;
        Object obj3 = f51606c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f51607a;
                    if (obj == obj3) {
                        obj = this.f51608b.get();
                        this.f51607a = obj;
                        this.f51608b = null;
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
