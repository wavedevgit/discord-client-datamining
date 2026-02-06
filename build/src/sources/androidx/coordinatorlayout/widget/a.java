package androidx.coordinatorlayout.widget;

import androidx.collection.SimpleArrayMap;
import androidx.core.util.Pools$SimplePool;
import b2.d;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final d f3322a = new Pools$SimplePool(10);

    /* renamed from: b  reason: collision with root package name */
    private final SimpleArrayMap f3323b = new SimpleArrayMap();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayList f3324c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private final HashSet f3325d = new HashSet();

    private void e(Object obj, ArrayList arrayList, HashSet hashSet) {
        if (arrayList.contains(obj)) {
            return;
        }
        if (!hashSet.contains(obj)) {
            hashSet.add(obj);
            ArrayList arrayList2 = (ArrayList) this.f3323b.get(obj);
            if (arrayList2 != null) {
                int size = arrayList2.size();
                for (int i10 = 0; i10 < size; i10++) {
                    e(arrayList2.get(i10), arrayList, hashSet);
                }
            }
            hashSet.remove(obj);
            arrayList.add(obj);
            return;
        }
        throw new RuntimeException("This graph contains cyclic dependencies");
    }

    private ArrayList f() {
        ArrayList arrayList = (ArrayList) this.f3322a.acquire();
        if (arrayList == null) {
            return new ArrayList();
        }
        return arrayList;
    }

    private void l(ArrayList arrayList) {
        arrayList.clear();
        this.f3322a.release(arrayList);
    }

    public void a(Object obj, Object obj2) {
        if (this.f3323b.containsKey(obj) && this.f3323b.containsKey(obj2)) {
            ArrayList arrayList = (ArrayList) this.f3323b.get(obj);
            if (arrayList == null) {
                arrayList = f();
                this.f3323b.put(obj, arrayList);
            }
            arrayList.add(obj2);
            return;
        }
        throw new IllegalArgumentException("All nodes must be present in the graph before being added as an edge");
    }

    public void b(Object obj) {
        if (!this.f3323b.containsKey(obj)) {
            this.f3323b.put(obj, null);
        }
    }

    public void c() {
        int size = this.f3323b.size();
        for (int i10 = 0; i10 < size; i10++) {
            ArrayList arrayList = (ArrayList) this.f3323b.j(i10);
            if (arrayList != null) {
                l(arrayList);
            }
        }
        this.f3323b.clear();
    }

    public boolean d(Object obj) {
        return this.f3323b.containsKey(obj);
    }

    public List g(Object obj) {
        ArrayList h10 = h(obj);
        if (h10 == null) {
            return null;
        }
        return new ArrayList(h10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ArrayList h(Object obj) {
        return (ArrayList) this.f3323b.get(obj);
    }

    public List i(Object obj) {
        int size = this.f3323b.size();
        ArrayList arrayList = null;
        for (int i10 = 0; i10 < size; i10++) {
            ArrayList arrayList2 = (ArrayList) this.f3323b.j(i10);
            if (arrayList2 != null && arrayList2.contains(obj)) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(this.f3323b.f(i10));
            }
        }
        return arrayList;
    }

    public ArrayList j() {
        this.f3324c.clear();
        this.f3325d.clear();
        int size = this.f3323b.size();
        for (int i10 = 0; i10 < size; i10++) {
            e(this.f3323b.f(i10), this.f3324c, this.f3325d);
        }
        return this.f3324c;
    }

    public boolean k(Object obj) {
        int size = this.f3323b.size();
        for (int i10 = 0; i10 < size; i10++) {
            ArrayList arrayList = (ArrayList) this.f3323b.j(i10);
            if (arrayList != null && arrayList.contains(obj)) {
                return true;
            }
        }
        return false;
    }
}
