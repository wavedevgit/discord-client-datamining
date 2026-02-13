package oe;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f39531d = new Object();

    /* renamed from: e  reason: collision with root package name */
    private final Map f39532e = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private Set f39533i = Collections.EMPTY_SET;

    /* renamed from: o  reason: collision with root package name */
    private List f39534o = Collections.EMPTY_LIST;

    public void b(Object obj) {
        synchronized (this.f39531d) {
            try {
                ArrayList arrayList = new ArrayList(this.f39534o);
                arrayList.add(obj);
                this.f39534o = Collections.unmodifiableList(arrayList);
                Integer num = (Integer) this.f39532e.get(obj);
                if (num == null) {
                    HashSet hashSet = new HashSet(this.f39533i);
                    hashSet.add(obj);
                    this.f39533i = Collections.unmodifiableSet(hashSet);
                }
                Map map = this.f39532e;
                int i10 = 1;
                if (num != null) {
                    i10 = 1 + num.intValue();
                }
                map.put(obj, Integer.valueOf(i10));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public int c(Object obj) {
        int i10;
        synchronized (this.f39531d) {
            try {
                if (this.f39532e.containsKey(obj)) {
                    i10 = ((Integer) this.f39532e.get(obj)).intValue();
                } else {
                    i10 = 0;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return i10;
    }

    public void d(Object obj) {
        synchronized (this.f39531d) {
            try {
                Integer num = (Integer) this.f39532e.get(obj);
                if (num == null) {
                    return;
                }
                ArrayList arrayList = new ArrayList(this.f39534o);
                arrayList.remove(obj);
                this.f39534o = Collections.unmodifiableList(arrayList);
                if (num.intValue() == 1) {
                    this.f39532e.remove(obj);
                    HashSet hashSet = new HashSet(this.f39533i);
                    hashSet.remove(obj);
                    this.f39533i = Collections.unmodifiableSet(hashSet);
                } else {
                    this.f39532e.put(obj, Integer.valueOf(num.intValue() - 1));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        Iterator it;
        synchronized (this.f39531d) {
            it = this.f39534o.iterator();
        }
        return it;
    }

    public Set z0() {
        Set set;
        synchronized (this.f39531d) {
            set = this.f39533i;
        }
        return set;
    }
}
