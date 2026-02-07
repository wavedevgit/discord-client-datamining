package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f52344a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f52345b;

    /* renamed from: c  reason: collision with root package name */
    a f52346c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f52347a;

        /* renamed from: b  reason: collision with root package name */
        int f52348b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f52349c;

        /* renamed from: d  reason: collision with root package name */
        a f52350d;

        public String toString() {
            return "LinkedEntry(key: " + this.f52348b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f52347a = aVar;
            this.f52348b = i10;
            this.f52349c = linkedList;
            this.f52350d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f52349c.isEmpty()) {
            d(aVar);
            this.f52344a.remove(aVar.f52348b);
        }
    }

    private void c(a aVar) {
        if (this.f52345b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f52345b;
        if (aVar2 == null) {
            this.f52345b = aVar;
            this.f52346c = aVar;
            return;
        }
        aVar.f52350d = aVar2;
        aVar2.f52347a = aVar;
        this.f52345b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f52347a;
            a aVar3 = aVar.f52350d;
            if (aVar2 != null) {
                aVar2.f52350d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f52347a = aVar2;
            }
            aVar.f52347a = null;
            aVar.f52350d = null;
            if (aVar == this.f52345b) {
                this.f52345b = aVar3;
            }
            if (aVar == this.f52346c) {
                this.f52346c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f52344a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f52349c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f52344a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f52344a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f52349c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f52346c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f52349c.pollLast();
        b(aVar);
        return pollLast;
    }
}
