package s8;

import java.util.IdentityHashMap;
import java.util.Map;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: d  reason: collision with root package name */
    private static final Map f49326d = new IdentityHashMap();

    /* renamed from: a  reason: collision with root package name */
    private Object f49327a;

    /* renamed from: b  reason: collision with root package name */
    private int f49328b = 1;

    /* renamed from: c  reason: collision with root package name */
    private final c f49329c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        public a() {
            super("Null shared reference");
        }
    }

    public d(Object obj, c cVar, boolean z10) {
        this.f49327a = j.g(obj);
        this.f49329c = cVar;
        if (z10) {
            a(obj);
        }
    }

    private static void a(Object obj) {
        Map map = f49326d;
        synchronized (map) {
            try {
                Integer num = (Integer) map.get(obj);
                if (num == null) {
                    map.put(obj, 1);
                } else {
                    map.put(obj, Integer.valueOf(num.intValue() + 1));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private synchronized int c() {
        boolean z10;
        int i10;
        e();
        if (this.f49328b > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        i10 = this.f49328b - 1;
        this.f49328b = i10;
        return i10;
    }

    private void e() {
        if (h(this)) {
            return;
        }
        throw new a();
    }

    public static boolean h(d dVar) {
        if (dVar != null && dVar.g()) {
            return true;
        }
        return false;
    }

    private static void i(Object obj) {
        Map map = f49326d;
        synchronized (map) {
            try {
                Integer num = (Integer) map.get(obj);
                if (num == null) {
                    p8.a.O("SharedReference", "No entry in sLiveObjects for value of type %s", obj.getClass());
                } else if (num.intValue() == 1) {
                    map.remove(obj);
                } else {
                    map.put(obj, Integer.valueOf(num.intValue() - 1));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public synchronized void b() {
        e();
        this.f49328b++;
    }

    public void d() {
        Object obj;
        if (c() == 0) {
            synchronized (this) {
                obj = this.f49327a;
                this.f49327a = null;
            }
            if (obj != null) {
                c cVar = this.f49329c;
                if (cVar != null) {
                    cVar.release(obj);
                }
                i(obj);
            }
        }
    }

    public synchronized Object f() {
        return this.f49327a;
    }

    public synchronized boolean g() {
        boolean z10;
        if (this.f49328b > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }
}
