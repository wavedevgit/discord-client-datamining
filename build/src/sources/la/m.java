package la;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f37021a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashMap f37022b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private int f37023c = 0;

    public m(b0 b0Var) {
        this.f37021a = b0Var;
    }

    private int g(Object obj) {
        if (obj == null) {
            return 0;
        }
        return this.f37021a.a(obj);
    }

    public synchronized boolean a(Object obj) {
        return this.f37022b.containsKey(obj);
    }

    public synchronized Object b(Object obj) {
        return this.f37022b.get(obj);
    }

    public synchronized int c() {
        return this.f37022b.size();
    }

    public synchronized Object d() {
        Object next;
        if (this.f37022b.isEmpty()) {
            next = null;
        } else {
            next = this.f37022b.keySet().iterator().next();
        }
        return next;
    }

    public synchronized ArrayList e(o8.k kVar) {
        ArrayList arrayList;
        try {
            arrayList = new ArrayList(this.f37022b.entrySet().size());
            for (Map.Entry entry : this.f37022b.entrySet()) {
                if (kVar != null && !kVar.apply(entry.getKey())) {
                }
                arrayList.add(entry);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return arrayList;
    }

    public synchronized int f() {
        return this.f37023c;
    }

    public synchronized Object h(Object obj, Object obj2) {
        Object remove;
        remove = this.f37022b.remove(obj);
        this.f37023c -= g(remove);
        this.f37022b.put(obj, obj2);
        this.f37023c += g(obj2);
        return remove;
    }

    public synchronized Object i(Object obj) {
        Object remove;
        remove = this.f37022b.remove(obj);
        this.f37023c -= g(remove);
        return remove;
    }

    public synchronized ArrayList j(o8.k kVar) {
        ArrayList arrayList;
        try {
            arrayList = new ArrayList();
            Iterator it = this.f37022b.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                if (kVar != null && !kVar.apply(entry.getKey())) {
                }
                arrayList.add(entry.getValue());
                this.f37023c -= g(entry.getValue());
                it.remove();
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return arrayList;
    }

    public synchronized void k() {
        if (this.f37022b.isEmpty()) {
            this.f37023c = 0;
        }
    }
}
