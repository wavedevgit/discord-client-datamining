package ma;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f36194a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashMap f36195b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private int f36196c = 0;

    public m(b0 b0Var) {
        this.f36194a = b0Var;
    }

    private int g(Object obj) {
        if (obj == null) {
            return 0;
        }
        return this.f36194a.a(obj);
    }

    public synchronized boolean a(Object obj) {
        return this.f36195b.containsKey(obj);
    }

    public synchronized Object b(Object obj) {
        return this.f36195b.get(obj);
    }

    public synchronized int c() {
        return this.f36195b.size();
    }

    public synchronized Object d() {
        Object next;
        if (this.f36195b.isEmpty()) {
            next = null;
        } else {
            next = this.f36195b.keySet().iterator().next();
        }
        return next;
    }

    public synchronized ArrayList e(p8.k kVar) {
        ArrayList arrayList;
        try {
            arrayList = new ArrayList(this.f36195b.entrySet().size());
            for (Map.Entry entry : this.f36195b.entrySet()) {
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
        return this.f36196c;
    }

    public synchronized Object h(Object obj, Object obj2) {
        Object remove;
        remove = this.f36195b.remove(obj);
        this.f36196c -= g(remove);
        this.f36195b.put(obj, obj2);
        this.f36196c += g(obj2);
        return remove;
    }

    public synchronized Object i(Object obj) {
        Object remove;
        remove = this.f36195b.remove(obj);
        this.f36196c -= g(remove);
        return remove;
    }

    public synchronized ArrayList j(p8.k kVar) {
        ArrayList arrayList;
        try {
            arrayList = new ArrayList();
            Iterator it = this.f36195b.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                if (kVar != null && !kVar.apply(entry.getKey())) {
                }
                arrayList.add(entry.getValue());
                this.f36196c -= g(entry.getValue());
                it.remove();
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return arrayList;
    }

    public synchronized void k() {
        if (this.f36195b.isEmpty()) {
            this.f36196c = 0;
        }
    }
}
