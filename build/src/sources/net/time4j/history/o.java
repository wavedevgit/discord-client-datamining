package net.time4j.history;

import java.io.DataInput;
import java.io.DataOutput;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    static final o f40576d = new o(n.f40566d, Integer.MAX_VALUE);

    /* renamed from: e  reason: collision with root package name */
    private static final Comparator f40577e = new b();

    /* renamed from: a  reason: collision with root package name */
    private final List f40578a;

    /* renamed from: b  reason: collision with root package name */
    private final n f40579b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40580c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements Comparator {
        private b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(o oVar, o oVar2) {
            if (oVar.f40580c < oVar2.f40580c) {
                return -1;
            }
            if (oVar.f40580c > oVar2.f40580c) {
                return 1;
            }
            return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(n nVar, int i10) {
        this.f40578a = Collections.EMPTY_LIST;
        this.f40579b = nVar;
        this.f40580c = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static o e(DataInput dataInput) {
        int readInt = dataInput.readInt();
        if (readInt == 0) {
            n valueOf = n.valueOf(dataInput.readUTF());
            int readInt2 = dataInput.readInt();
            if (readInt2 == Integer.MAX_VALUE && valueOf == n.f40566d) {
                return f40576d;
            }
            return new o(valueOf, readInt2);
        }
        ArrayList arrayList = new ArrayList(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            arrayList.add(new o(n.valueOf(dataInput.readUTF()), dataInput.readInt()));
        }
        return new o(arrayList);
    }

    public o b(o oVar) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f40578a);
        if (arrayList.isEmpty()) {
            arrayList.add(this);
        }
        if (oVar.f40578a.isEmpty()) {
            arrayList.add(oVar);
        } else {
            arrayList.addAll(oVar.f40578a);
        }
        return new o(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(h hVar) {
        int a10 = hVar.e().a(hVar.g());
        int size = this.f40578a.size();
        int i10 = Integer.MIN_VALUE;
        for (int i11 = 0; i11 < size; i11++) {
            o oVar = (o) this.f40578a.get(i11);
            if (a10 >= i10 && a10 < oVar.f40580c) {
                return oVar.f40579b.a(this, hVar);
            }
            i10 = oVar.f40580c;
        }
        return this.f40579b.a(this, hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h d(j jVar, int i10) {
        return f(jVar, i10).d(jVar, i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f40578a.equals(oVar.f40578a) && this.f40579b == oVar.f40579b && this.f40580c == oVar.f40580c) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n f(j jVar, int i10) {
        int a10 = jVar.a(i10);
        int size = this.f40578a.size();
        int i11 = Integer.MIN_VALUE;
        n nVar = null;
        for (int i12 = 0; i12 < size; i12++) {
            o oVar = (o) this.f40578a.get(i12);
            if (a10 >= i11 && a10 < oVar.f40580c) {
                return oVar.f40579b;
            }
            i11 = oVar.f40580c;
            nVar = oVar.f40579b;
        }
        if (a10 == i11 && jVar == j.BYZANTINE && nVar == n.f40568i) {
            return nVar;
        }
        return this.f40579b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(DataOutput dataOutput) {
        int size = this.f40578a.size();
        dataOutput.writeInt(size);
        if (size == 0) {
            dataOutput.writeUTF(this.f40579b.name());
            dataOutput.writeInt(this.f40580c);
            return;
        }
        for (int i10 = 0; i10 < size; i10++) {
            o oVar = (o) this.f40578a.get(i10);
            dataOutput.writeUTF(oVar.f40579b.name());
            dataOutput.writeInt(oVar.f40580c);
        }
    }

    public int hashCode() {
        return (this.f40578a.hashCode() * 17) + (this.f40579b.hashCode() * 37) + this.f40580c;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (this.f40578a.isEmpty()) {
            sb2.append('[');
            sb2.append(this.f40579b);
            if (this.f40580c != Integer.MAX_VALUE) {
                sb2.append("->");
                sb2.append(this.f40580c);
            }
        } else {
            boolean z10 = true;
            for (o oVar : this.f40578a) {
                if (z10) {
                    sb2.append('[');
                    z10 = false;
                } else {
                    sb2.append(',');
                }
                sb2.append(oVar.f40579b);
                sb2.append("->");
                sb2.append(oVar.f40580c);
            }
        }
        sb2.append(']');
        return sb2.toString();
    }

    o(List list) {
        Collections.sort(list, f40577e);
        Iterator it = list.iterator();
        o oVar = null;
        while (it.hasNext()) {
            o oVar2 = (o) it.next();
            if (oVar == null || oVar2.f40580c != oVar.f40580c) {
                oVar = oVar2;
            } else if (oVar2.f40579b == oVar.f40579b) {
                it.remove();
            } else {
                throw new IllegalArgumentException("Multiple strategies with overlapping validity range: " + list);
            }
        }
        this.f40578a = Collections.unmodifiableList(list);
        this.f40579b = n.f40566d;
        this.f40580c = Integer.MAX_VALUE;
    }
}
