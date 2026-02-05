package androidx.recyclerview.widget;

import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final Comparator f5085a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(d dVar, d dVar2) {
            return dVar.f5088a - dVar2.f5088a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public abstract boolean areContentsTheSame(int i10, int i11);

        public abstract boolean areItemsTheSame(int i10, int i11);

        public Object getChangePayload(int i10, int i11) {
            return null;
        }

        public abstract int getNewListSize();

        public abstract int getOldListSize();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final int[] f5086a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5087b;

        c(int i10) {
            int[] iArr = new int[i10];
            this.f5086a = iArr;
            this.f5087b = iArr.length / 2;
        }

        int[] a() {
            return this.f5086a;
        }

        int b(int i10) {
            return this.f5086a[i10 + this.f5087b];
        }

        void c(int i10, int i11) {
            this.f5086a[i10 + this.f5087b] = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f5088a;

        /* renamed from: b  reason: collision with root package name */
        public final int f5089b;

        /* renamed from: c  reason: collision with root package name */
        public final int f5090c;

        d(int i10, int i11, int i12) {
            this.f5088a = i10;
            this.f5089b = i11;
            this.f5090c = i12;
        }

        int a() {
            return this.f5088a + this.f5090c;
        }

        int b() {
            return this.f5089b + this.f5090c;
        }
    }

    /* renamed from: androidx.recyclerview.widget.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0068e {

        /* renamed from: a  reason: collision with root package name */
        private final List f5091a;

        /* renamed from: b  reason: collision with root package name */
        private final int[] f5092b;

        /* renamed from: c  reason: collision with root package name */
        private final int[] f5093c;

        /* renamed from: d  reason: collision with root package name */
        private final b f5094d;

        /* renamed from: e  reason: collision with root package name */
        private final int f5095e;

        /* renamed from: f  reason: collision with root package name */
        private final int f5096f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f5097g;

        C0068e(b bVar, List list, int[] iArr, int[] iArr2, boolean z10) {
            this.f5091a = list;
            this.f5092b = iArr;
            this.f5093c = iArr2;
            Arrays.fill(iArr, 0);
            Arrays.fill(iArr2, 0);
            this.f5094d = bVar;
            this.f5095e = bVar.getOldListSize();
            this.f5096f = bVar.getNewListSize();
            this.f5097g = z10;
            a();
            e();
        }

        private void a() {
            d dVar;
            if (this.f5091a.isEmpty()) {
                dVar = null;
            } else {
                dVar = (d) this.f5091a.get(0);
            }
            if (dVar == null || dVar.f5088a != 0 || dVar.f5089b != 0) {
                this.f5091a.add(0, new d(0, 0, 0));
            }
            this.f5091a.add(new d(this.f5095e, this.f5096f, 0));
        }

        private void d(int i10) {
            int i11;
            int size = this.f5091a.size();
            int i12 = 0;
            for (int i13 = 0; i13 < size; i13++) {
                d dVar = (d) this.f5091a.get(i13);
                while (i12 < dVar.f5089b) {
                    if (this.f5093c[i12] == 0 && this.f5094d.areItemsTheSame(i10, i12)) {
                        if (this.f5094d.areContentsTheSame(i10, i12)) {
                            i11 = 8;
                        } else {
                            i11 = 4;
                        }
                        this.f5092b[i10] = (i12 << 4) | i11;
                        this.f5093c[i12] = (i10 << 4) | i11;
                        return;
                    }
                    i12++;
                }
                i12 = dVar.b();
            }
        }

        private void e() {
            int i10;
            for (d dVar : this.f5091a) {
                for (int i11 = 0; i11 < dVar.f5090c; i11++) {
                    int i12 = dVar.f5088a + i11;
                    int i13 = dVar.f5089b + i11;
                    if (this.f5094d.areContentsTheSame(i12, i13)) {
                        i10 = 1;
                    } else {
                        i10 = 2;
                    }
                    this.f5092b[i12] = (i13 << 4) | i10;
                    this.f5093c[i13] = (i12 << 4) | i10;
                }
            }
            if (this.f5097g) {
                f();
            }
        }

        private void f() {
            int i10 = 0;
            for (d dVar : this.f5091a) {
                while (i10 < dVar.f5088a) {
                    if (this.f5092b[i10] == 0) {
                        d(i10);
                    }
                    i10++;
                }
                i10 = dVar.a();
            }
        }

        private static g g(Collection collection, int i10, boolean z10) {
            g gVar;
            Iterator it = collection.iterator();
            while (true) {
                if (it.hasNext()) {
                    gVar = (g) it.next();
                    if (gVar.f5098a == i10 && gVar.f5100c == z10) {
                        it.remove();
                        break;
                    }
                } else {
                    gVar = null;
                    break;
                }
            }
            while (it.hasNext()) {
                g gVar2 = (g) it.next();
                if (z10) {
                    gVar2.f5099b--;
                } else {
                    gVar2.f5099b++;
                }
            }
            return gVar;
        }

        public void b(m mVar) {
            androidx.recyclerview.widget.d dVar;
            int i10;
            if (mVar instanceof androidx.recyclerview.widget.d) {
                dVar = (androidx.recyclerview.widget.d) mVar;
            } else {
                dVar = new androidx.recyclerview.widget.d(mVar);
            }
            int i11 = this.f5095e;
            ArrayDeque arrayDeque = new ArrayDeque();
            int i12 = this.f5095e;
            int i13 = this.f5096f;
            for (int size = this.f5091a.size() - 1; size >= 0; size--) {
                d dVar2 = (d) this.f5091a.get(size);
                int a10 = dVar2.a();
                int b10 = dVar2.b();
                while (true) {
                    if (i12 <= a10) {
                        break;
                    }
                    i12--;
                    int i14 = this.f5092b[i12];
                    if ((i14 & 12) != 0) {
                        int i15 = i14 >> 4;
                        g g10 = g(arrayDeque, i15, false);
                        if (g10 != null) {
                            int i16 = (i11 - g10.f5099b) - 1;
                            dVar.d(i12, i16);
                            if ((i14 & 4) != 0) {
                                dVar.c(i16, 1, this.f5094d.getChangePayload(i12, i15));
                            }
                        } else {
                            arrayDeque.add(new g(i12, (i11 - i12) - 1, true));
                        }
                    } else {
                        dVar.b(i12, 1);
                        i11--;
                    }
                }
                while (i13 > b10) {
                    i13--;
                    int i17 = this.f5093c[i13];
                    if ((i17 & 12) != 0) {
                        int i18 = i17 >> 4;
                        g g11 = g(arrayDeque, i18, true);
                        if (g11 == null) {
                            arrayDeque.add(new g(i13, i11 - i12, false));
                        } else {
                            dVar.d((i11 - g11.f5099b) - 1, i12);
                            if ((i17 & 4) != 0) {
                                dVar.c(i12, 1, this.f5094d.getChangePayload(i18, i13));
                            }
                        }
                    } else {
                        dVar.a(i12, 1);
                        i11++;
                    }
                }
                int i19 = dVar2.f5088a;
                int i20 = dVar2.f5089b;
                for (i10 = 0; i10 < dVar2.f5090c; i10++) {
                    if ((this.f5092b[i19] & 15) == 2) {
                        dVar.c(i19, 1, this.f5094d.getChangePayload(i19, i20));
                    }
                    i19++;
                    i20++;
                }
                i12 = dVar2.f5088a;
                i13 = dVar2.f5089b;
            }
            dVar.e();
        }

        public void c(RecyclerView.Adapter adapter) {
            b(new androidx.recyclerview.widget.a(adapter));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
        public abstract boolean a(Object obj, Object obj2);

        public abstract boolean b(Object obj, Object obj2);

        public Object c(Object obj, Object obj2) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: a  reason: collision with root package name */
        int f5098a;

        /* renamed from: b  reason: collision with root package name */
        int f5099b;

        /* renamed from: c  reason: collision with root package name */
        boolean f5100c;

        g(int i10, int i11, boolean z10) {
            this.f5098a = i10;
            this.f5099b = i11;
            this.f5100c = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {

        /* renamed from: a  reason: collision with root package name */
        int f5101a;

        /* renamed from: b  reason: collision with root package name */
        int f5102b;

        /* renamed from: c  reason: collision with root package name */
        int f5103c;

        /* renamed from: d  reason: collision with root package name */
        int f5104d;

        public h() {
        }

        int a() {
            return this.f5104d - this.f5103c;
        }

        int b() {
            return this.f5102b - this.f5101a;
        }

        public h(int i10, int i11, int i12, int i13) {
            this.f5101a = i10;
            this.f5102b = i11;
            this.f5103c = i12;
            this.f5104d = i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        public int f5105a;

        /* renamed from: b  reason: collision with root package name */
        public int f5106b;

        /* renamed from: c  reason: collision with root package name */
        public int f5107c;

        /* renamed from: d  reason: collision with root package name */
        public int f5108d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f5109e;

        i() {
        }

        int a() {
            return Math.min(this.f5107c - this.f5105a, this.f5108d - this.f5106b);
        }

        boolean b() {
            if (this.f5108d - this.f5106b != this.f5107c - this.f5105a) {
                return true;
            }
            return false;
        }

        boolean c() {
            if (this.f5108d - this.f5106b > this.f5107c - this.f5105a) {
                return true;
            }
            return false;
        }

        d d() {
            if (b()) {
                if (this.f5109e) {
                    return new d(this.f5105a, this.f5106b, a());
                }
                if (c()) {
                    return new d(this.f5105a, this.f5106b + 1, a());
                }
                return new d(this.f5105a + 1, this.f5106b, a());
            }
            int i10 = this.f5105a;
            return new d(i10, this.f5106b, this.f5107c - i10);
        }
    }

    private static i a(h hVar, b bVar, c cVar, c cVar2, int i10) {
        boolean z10;
        int b10;
        int i11;
        int i12;
        int i13;
        if ((hVar.b() - hVar.a()) % 2 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        int b11 = hVar.b() - hVar.a();
        int i14 = -i10;
        for (int i15 = i14; i15 <= i10; i15 += 2) {
            if (i15 != i14 && (i15 == i10 || cVar2.b(i15 + 1) >= cVar2.b(i15 - 1))) {
                b10 = cVar2.b(i15 - 1);
                i11 = b10 - 1;
            } else {
                b10 = cVar2.b(i15 + 1);
                i11 = b10;
            }
            int i16 = hVar.f5104d - ((hVar.f5102b - i11) - i15);
            if (i10 != 0 && i11 == b10) {
                i12 = i16 + 1;
            } else {
                i12 = i16;
            }
            while (i11 > hVar.f5101a && i16 > hVar.f5103c && bVar.areItemsTheSame(i11 - 1, i16 - 1)) {
                i11--;
                i16--;
            }
            cVar2.c(i15, i11);
            if (z10 && (i13 = b11 - i15) >= i14 && i13 <= i10 && cVar.b(i13) >= i11) {
                i iVar = new i();
                iVar.f5105a = i11;
                iVar.f5106b = i16;
                iVar.f5107c = b10;
                iVar.f5108d = i12;
                iVar.f5109e = true;
                return iVar;
            }
        }
        return null;
    }

    public static C0068e b(b bVar) {
        return c(bVar, true);
    }

    public static C0068e c(b bVar, boolean z10) {
        h hVar;
        int oldListSize = bVar.getOldListSize();
        int newListSize = bVar.getNewListSize();
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        arrayList2.add(new h(0, oldListSize, 0, newListSize));
        int i10 = ((((oldListSize + newListSize) + 1) / 2) * 2) + 1;
        c cVar = new c(i10);
        c cVar2 = new c(i10);
        ArrayList arrayList3 = new ArrayList();
        while (!arrayList2.isEmpty()) {
            h hVar2 = (h) arrayList2.remove(arrayList2.size() - 1);
            i e10 = e(hVar2, bVar, cVar, cVar2);
            if (e10 != null) {
                if (e10.a() > 0) {
                    arrayList.add(e10.d());
                }
                if (arrayList3.isEmpty()) {
                    hVar = new h();
                } else {
                    hVar = (h) arrayList3.remove(arrayList3.size() - 1);
                }
                hVar.f5101a = hVar2.f5101a;
                hVar.f5103c = hVar2.f5103c;
                hVar.f5102b = e10.f5105a;
                hVar.f5104d = e10.f5106b;
                arrayList2.add(hVar);
                hVar2.f5102b = hVar2.f5102b;
                hVar2.f5104d = hVar2.f5104d;
                hVar2.f5101a = e10.f5107c;
                hVar2.f5103c = e10.f5108d;
                arrayList2.add(hVar2);
            } else {
                arrayList3.add(hVar2);
            }
        }
        Collections.sort(arrayList, f5085a);
        return new C0068e(bVar, arrayList, cVar.a(), cVar2.a(), z10);
    }

    private static i d(h hVar, b bVar, c cVar, c cVar2, int i10) {
        int b10;
        int i11;
        int i12;
        boolean z10 = true;
        if (Math.abs(hVar.b() - hVar.a()) % 2 != 1) {
            z10 = false;
        }
        int b11 = hVar.b() - hVar.a();
        int i13 = -i10;
        for (int i14 = i13; i14 <= i10; i14 += 2) {
            if (i14 != i13 && (i14 == i10 || cVar.b(i14 + 1) <= cVar.b(i14 - 1))) {
                b10 = cVar.b(i14 - 1);
                i11 = b10 + 1;
            } else {
                b10 = cVar.b(i14 + 1);
                i11 = b10;
            }
            int i15 = (hVar.f5103c + (i11 - hVar.f5101a)) - i14;
            int i16 = (i10 != 0 && i11 == b10) ? i15 - 1 : i15;
            while (i11 < hVar.f5102b && i15 < hVar.f5104d && bVar.areItemsTheSame(i11, i15)) {
                i11++;
                i15++;
            }
            cVar.c(i14, i11);
            if (z10 && (i12 = b11 - i14) >= i13 + 1 && i12 <= i10 - 1 && cVar2.b(i12) <= i11) {
                i iVar = new i();
                iVar.f5105a = b10;
                iVar.f5106b = i16;
                iVar.f5107c = i11;
                iVar.f5108d = i15;
                iVar.f5109e = false;
                return iVar;
            }
        }
        return null;
    }

    private static i e(h hVar, b bVar, c cVar, c cVar2) {
        if (hVar.b() >= 1 && hVar.a() >= 1) {
            int b10 = ((hVar.b() + hVar.a()) + 1) / 2;
            cVar.c(1, hVar.f5101a);
            cVar2.c(1, hVar.f5102b);
            for (int i10 = 0; i10 < b10; i10++) {
                i d10 = d(hVar, bVar, cVar, cVar2, i10);
                if (d10 != null) {
                    return d10;
                }
                i a10 = a(hVar, bVar, cVar, cVar2, i10);
                if (a10 != null) {
                    return a10;
                }
            }
        }
        return null;
    }
}
