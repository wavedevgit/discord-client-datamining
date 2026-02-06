package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w implements fj.b {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f51558c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f51559a = f51558c;

    /* renamed from: b  reason: collision with root package name */
    private volatile fj.b f51560b;

    public w(fj.b bVar) {
        this.f51560b = bVar;
    }

    @Override // fj.b
    public Object get() {
        Object obj;
        Object obj2 = this.f51559a;
        Object obj3 = f51558c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f51559a;
                    if (obj == obj3) {
                        obj = this.f51560b.get();
                        this.f51559a = obj;
                        this.f51560b = null;
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
