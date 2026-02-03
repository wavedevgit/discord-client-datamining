package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f50917a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f50918b;

    /* renamed from: c  reason: collision with root package name */
    a f50919c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f50920a;

        /* renamed from: b  reason: collision with root package name */
        int f50921b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f50922c;

        /* renamed from: d  reason: collision with root package name */
        a f50923d;

        public String toString() {
            return "LinkedEntry(key: " + this.f50921b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f50920a = aVar;
            this.f50921b = i10;
            this.f50922c = linkedList;
            this.f50923d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f50922c.isEmpty()) {
            d(aVar);
            this.f50917a.remove(aVar.f50921b);
        }
    }

    private void c(a aVar) {
        if (this.f50918b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f50918b;
        if (aVar2 == null) {
            this.f50918b = aVar;
            this.f50919c = aVar;
            return;
        }
        aVar.f50923d = aVar2;
        aVar2.f50920a = aVar;
        this.f50918b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f50920a;
            a aVar3 = aVar.f50923d;
            if (aVar2 != null) {
                aVar2.f50923d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f50920a = aVar2;
            }
            aVar.f50920a = null;
            aVar.f50923d = null;
            if (aVar == this.f50918b) {
                this.f50918b = aVar3;
            }
            if (aVar == this.f50919c) {
                this.f50919c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f50917a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f50922c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f50917a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f50917a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f50922c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f50919c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f50922c.pollLast();
        b(aVar);
        return pollLast;
    }
}
