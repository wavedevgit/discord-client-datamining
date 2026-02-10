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
    private final Object f40636d = new Object();

    /* renamed from: e  reason: collision with root package name */
    private final Map f40637e = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private Set f40638i = Collections.EMPTY_SET;

    /* renamed from: o  reason: collision with root package name */
    private List f40639o = Collections.EMPTY_LIST;

    public Set D0() {
        Set set;
        synchronized (this.f40636d) {
            set = this.f40638i;
        }
        return set;
    }

    public void b(Object obj) {
        synchronized (this.f40636d) {
            try {
                ArrayList arrayList = new ArrayList(this.f40639o);
                arrayList.add(obj);
                this.f40639o = Collections.unmodifiableList(arrayList);
                Integer num = (Integer) this.f40637e.get(obj);
                if (num == null) {
                    HashSet hashSet = new HashSet(this.f40638i);
                    hashSet.add(obj);
                    this.f40638i = Collections.unmodifiableSet(hashSet);
                }
                Map map = this.f40637e;
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
        synchronized (this.f40636d) {
            try {
                if (this.f40637e.containsKey(obj)) {
                    i10 = ((Integer) this.f40637e.get(obj)).intValue();
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
        synchronized (this.f40636d) {
            try {
                Integer num = (Integer) this.f40637e.get(obj);
                if (num == null) {
                    return;
                }
                ArrayList arrayList = new ArrayList(this.f40639o);
                arrayList.remove(obj);
                this.f40639o = Collections.unmodifiableList(arrayList);
                if (num.intValue() == 1) {
                    this.f40637e.remove(obj);
                    HashSet hashSet = new HashSet(this.f40638i);
                    hashSet.remove(obj);
                    this.f40638i = Collections.unmodifiableSet(hashSet);
                } else {
                    this.f40637e.put(obj, Integer.valueOf(num.intValue() - 1));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        Iterator it;
        synchronized (this.f40636d) {
            it = this.f40639o.iterator();
        }
        return it;
    }
}
