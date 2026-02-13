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
    static final o f38143d = new o(n.f38133d, Integer.MAX_VALUE);

    /* renamed from: e  reason: collision with root package name */
    private static final Comparator f38144e = new b();

    /* renamed from: a  reason: collision with root package name */
    private final List f38145a;

    /* renamed from: b  reason: collision with root package name */
    private final n f38146b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38147c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements Comparator {
        private b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(o oVar, o oVar2) {
            if (oVar.f38147c < oVar2.f38147c) {
                return -1;
            }
            if (oVar.f38147c > oVar2.f38147c) {
                return 1;
            }
            return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(n nVar, int i10) {
        this.f38145a = Collections.EMPTY_LIST;
        this.f38146b = nVar;
        this.f38147c = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static o e(DataInput dataInput) {
        int readInt = dataInput.readInt();
        if (readInt == 0) {
            n valueOf = n.valueOf(dataInput.readUTF());
            int readInt2 = dataInput.readInt();
            if (readInt2 == Integer.MAX_VALUE && valueOf == n.f38133d) {
                return f38143d;
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
        arrayList.addAll(this.f38145a);
        if (arrayList.isEmpty()) {
            arrayList.add(this);
        }
        if (oVar.f38145a.isEmpty()) {
            arrayList.add(oVar);
        } else {
            arrayList.addAll(oVar.f38145a);
        }
        return new o(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(h hVar) {
        int a10 = hVar.e().a(hVar.g());
        int size = this.f38145a.size();
        int i10 = Integer.MIN_VALUE;
        for (int i11 = 0; i11 < size; i11++) {
            o oVar = (o) this.f38145a.get(i11);
            if (a10 >= i10 && a10 < oVar.f38147c) {
                return oVar.f38146b.a(this, hVar);
            }
            i10 = oVar.f38147c;
        }
        return this.f38146b.a(this, hVar);
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
            if (this.f38145a.equals(oVar.f38145a) && this.f38146b == oVar.f38146b && this.f38147c == oVar.f38147c) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n f(j jVar, int i10) {
        int a10 = jVar.a(i10);
        int size = this.f38145a.size();
        int i11 = Integer.MIN_VALUE;
        n nVar = null;
        for (int i12 = 0; i12 < size; i12++) {
            o oVar = (o) this.f38145a.get(i12);
            if (a10 >= i11 && a10 < oVar.f38147c) {
                return oVar.f38146b;
            }
            i11 = oVar.f38147c;
            nVar = oVar.f38146b;
        }
        if (a10 == i11 && jVar == j.BYZANTINE && nVar == n.f38135i) {
            return nVar;
        }
        return this.f38146b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(DataOutput dataOutput) {
        int size = this.f38145a.size();
        dataOutput.writeInt(size);
        if (size == 0) {
            dataOutput.writeUTF(this.f38146b.name());
            dataOutput.writeInt(this.f38147c);
            return;
        }
        for (int i10 = 0; i10 < size; i10++) {
            o oVar = (o) this.f38145a.get(i10);
            dataOutput.writeUTF(oVar.f38146b.name());
            dataOutput.writeInt(oVar.f38147c);
        }
    }

    public int hashCode() {
        return (this.f38145a.hashCode() * 17) + (this.f38146b.hashCode() * 37) + this.f38147c;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (this.f38145a.isEmpty()) {
            sb2.append('[');
            sb2.append(this.f38146b);
            if (this.f38147c != Integer.MAX_VALUE) {
                sb2.append("->");
                sb2.append(this.f38147c);
            }
        } else {
            boolean z10 = true;
            for (o oVar : this.f38145a) {
                if (z10) {
                    sb2.append('[');
                    z10 = false;
                } else {
                    sb2.append(',');
                }
                sb2.append(oVar.f38146b);
                sb2.append("->");
                sb2.append(oVar.f38147c);
            }
        }
        sb2.append(']');
        return sb2.toString();
    }

    o(List list) {
        Collections.sort(list, f38144e);
        Iterator it = list.iterator();
        o oVar = null;
        while (it.hasNext()) {
            o oVar2 = (o) it.next();
            if (oVar == null || oVar2.f38147c != oVar.f38147c) {
                oVar = oVar2;
            } else if (oVar2.f38146b == oVar.f38146b) {
                it.remove();
            } else {
                throw new IllegalArgumentException("Multiple strategies with overlapping validity range: " + list);
            }
        }
        this.f38145a = Collections.unmodifiableList(list);
        this.f38146b = n.f38133d;
        this.f38147c = Integer.MAX_VALUE;
    }
}
