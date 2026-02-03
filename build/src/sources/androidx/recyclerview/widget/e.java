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
    private static final Comparator f4973a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(d dVar, d dVar2) {
            return dVar.f4976a - dVar2.f4976a;
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
        private final int[] f4974a;

        /* renamed from: b  reason: collision with root package name */
        private final int f4975b;

        c(int i10) {
            int[] iArr = new int[i10];
            this.f4974a = iArr;
            this.f4975b = iArr.length / 2;
        }

        int[] a() {
            return this.f4974a;
        }

        int b(int i10) {
            return this.f4974a[i10 + this.f4975b];
        }

        void c(int i10, int i11) {
            this.f4974a[i10 + this.f4975b] = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f4976a;

        /* renamed from: b  reason: collision with root package name */
        public final int f4977b;

        /* renamed from: c  reason: collision with root package name */
        public final int f4978c;

        d(int i10, int i11, int i12) {
            this.f4976a = i10;
            this.f4977b = i11;
            this.f4978c = i12;
        }

        int a() {
            return this.f4976a + this.f4978c;
        }

        int b() {
            return this.f4977b + this.f4978c;
        }
    }

    /* renamed from: androidx.recyclerview.widget.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0067e {

        /* renamed from: a  reason: collision with root package name */
        private final List f4979a;

        /* renamed from: b  reason: collision with root package name */
        private final int[] f4980b;

        /* renamed from: c  reason: collision with root package name */
        private final int[] f4981c;

        /* renamed from: d  reason: collision with root package name */
        private final b f4982d;

        /* renamed from: e  reason: collision with root package name */
        private final int f4983e;

        /* renamed from: f  reason: collision with root package name */
        private final int f4984f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f4985g;

        C0067e(b bVar, List list, int[] iArr, int[] iArr2, boolean z10) {
            this.f4979a = list;
            this.f4980b = iArr;
            this.f4981c = iArr2;
            Arrays.fill(iArr, 0);
            Arrays.fill(iArr2, 0);
            this.f4982d = bVar;
            this.f4983e = bVar.getOldListSize();
            this.f4984f = bVar.getNewListSize();
            this.f4985g = z10;
            a();
            e();
        }

        private void a() {
            d dVar;
            if (this.f4979a.isEmpty()) {
                dVar = null;
            } else {
                dVar = (d) this.f4979a.get(0);
            }
            if (dVar == null || dVar.f4976a != 0 || dVar.f4977b != 0) {
                this.f4979a.add(0, new d(0, 0, 0));
            }
            this.f4979a.add(new d(this.f4983e, this.f4984f, 0));
        }

        private void d(int i10) {
            int i11;
            int size = this.f4979a.size();
            int i12 = 0;
            for (int i13 = 0; i13 < size; i13++) {
                d dVar = (d) this.f4979a.get(i13);
                while (i12 < dVar.f4977b) {
                    if (this.f4981c[i12] == 0 && this.f4982d.areItemsTheSame(i10, i12)) {
                        if (this.f4982d.areContentsTheSame(i10, i12)) {
                            i11 = 8;
                        } else {
                            i11 = 4;
                        }
                        this.f4980b[i10] = (i12 << 4) | i11;
                        this.f4981c[i12] = (i10 << 4) | i11;
                        return;
                    }
                    i12++;
                }
                i12 = dVar.b();
            }
        }

        private void e() {
            int i10;
            for (d dVar : this.f4979a) {
                for (int i11 = 0; i11 < dVar.f4978c; i11++) {
                    int i12 = dVar.f4976a + i11;
                    int i13 = dVar.f4977b + i11;
                    if (this.f4982d.areContentsTheSame(i12, i13)) {
                        i10 = 1;
                    } else {
                        i10 = 2;
                    }
                    this.f4980b[i12] = (i13 << 4) | i10;
                    this.f4981c[i13] = (i12 << 4) | i10;
                }
            }
            if (this.f4985g) {
                f();
            }
        }

        private void f() {
            int i10 = 0;
            for (d dVar : this.f4979a) {
                while (i10 < dVar.f4976a) {
                    if (this.f4980b[i10] == 0) {
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
                    if (gVar.f4986a == i10 && gVar.f4988c == z10) {
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
                    gVar2.f4987b--;
                } else {
                    gVar2.f4987b++;
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
            int i11 = this.f4983e;
            ArrayDeque arrayDeque = new ArrayDeque();
            int i12 = this.f4983e;
            int i13 = this.f4984f;
            for (int size = this.f4979a.size() - 1; size >= 0; size--) {
                d dVar2 = (d) this.f4979a.get(size);
                int a10 = dVar2.a();
                int b10 = dVar2.b();
                while (true) {
                    if (i12 <= a10) {
                        break;
                    }
                    i12--;
                    int i14 = this.f4980b[i12];
                    if ((i14 & 12) != 0) {
                        int i15 = i14 >> 4;
                        g g10 = g(arrayDeque, i15, false);
                        if (g10 != null) {
                            int i16 = (i11 - g10.f4987b) - 1;
                            dVar.d(i12, i16);
                            if ((i14 & 4) != 0) {
                                dVar.c(i16, 1, this.f4982d.getChangePayload(i12, i15));
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
                    int i17 = this.f4981c[i13];
                    if ((i17 & 12) != 0) {
                        int i18 = i17 >> 4;
                        g g11 = g(arrayDeque, i18, true);
                        if (g11 == null) {
                            arrayDeque.add(new g(i13, i11 - i12, false));
                        } else {
                            dVar.d((i11 - g11.f4987b) - 1, i12);
                            if ((i17 & 4) != 0) {
                                dVar.c(i12, 1, this.f4982d.getChangePayload(i18, i13));
                            }
                        }
                    } else {
                        dVar.a(i12, 1);
                        i11++;
                    }
                }
                int i19 = dVar2.f4976a;
                int i20 = dVar2.f4977b;
                for (i10 = 0; i10 < dVar2.f4978c; i10++) {
                    if ((this.f4980b[i19] & 15) == 2) {
                        dVar.c(i19, 1, this.f4982d.getChangePayload(i19, i20));
                    }
                    i19++;
                    i20++;
                }
                i12 = dVar2.f4976a;
                i13 = dVar2.f4977b;
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
        int f4986a;

        /* renamed from: b  reason: collision with root package name */
        int f4987b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4988c;

        g(int i10, int i11, boolean z10) {
            this.f4986a = i10;
            this.f4987b = i11;
            this.f4988c = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {

        /* renamed from: a  reason: collision with root package name */
        int f4989a;

        /* renamed from: b  reason: collision with root package name */
        int f4990b;

        /* renamed from: c  reason: collision with root package name */
        int f4991c;

        /* renamed from: d  reason: collision with root package name */
        int f4992d;

        public h() {
        }

        int a() {
            return this.f4992d - this.f4991c;
        }

        int b() {
            return this.f4990b - this.f4989a;
        }

        public h(int i10, int i11, int i12, int i13) {
            this.f4989a = i10;
            this.f4990b = i11;
            this.f4991c = i12;
            this.f4992d = i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        public int f4993a;

        /* renamed from: b  reason: collision with root package name */
        public int f4994b;

        /* renamed from: c  reason: collision with root package name */
        public int f4995c;

        /* renamed from: d  reason: collision with root package name */
        public int f4996d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f4997e;

        i() {
        }

        int a() {
            return Math.min(this.f4995c - this.f4993a, this.f4996d - this.f4994b);
        }

        boolean b() {
            if (this.f4996d - this.f4994b != this.f4995c - this.f4993a) {
                return true;
            }
            return false;
        }

        boolean c() {
            if (this.f4996d - this.f4994b > this.f4995c - this.f4993a) {
                return true;
            }
            return false;
        }

        d d() {
            if (b()) {
                if (this.f4997e) {
                    return new d(this.f4993a, this.f4994b, a());
                }
                if (c()) {
                    return new d(this.f4993a, this.f4994b + 1, a());
                }
                return new d(this.f4993a + 1, this.f4994b, a());
            }
            int i10 = this.f4993a;
            return new d(i10, this.f4994b, this.f4995c - i10);
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
            int i16 = hVar.f4992d - ((hVar.f4990b - i11) - i15);
            if (i10 != 0 && i11 == b10) {
                i12 = i16 + 1;
            } else {
                i12 = i16;
            }
            while (i11 > hVar.f4989a && i16 > hVar.f4991c && bVar.areItemsTheSame(i11 - 1, i16 - 1)) {
                i11--;
                i16--;
            }
            cVar2.c(i15, i11);
            if (z10 && (i13 = b11 - i15) >= i14 && i13 <= i10 && cVar.b(i13) >= i11) {
                i iVar = new i();
                iVar.f4993a = i11;
                iVar.f4994b = i16;
                iVar.f4995c = b10;
                iVar.f4996d = i12;
                iVar.f4997e = true;
                return iVar;
            }
        }
        return null;
    }

    public static C0067e b(b bVar) {
        return c(bVar, true);
    }

    public static C0067e c(b bVar, boolean z10) {
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
                hVar.f4989a = hVar2.f4989a;
                hVar.f4991c = hVar2.f4991c;
                hVar.f4990b = e10.f4993a;
                hVar.f4992d = e10.f4994b;
                arrayList2.add(hVar);
                hVar2.f4990b = hVar2.f4990b;
                hVar2.f4992d = hVar2.f4992d;
                hVar2.f4989a = e10.f4995c;
                hVar2.f4991c = e10.f4996d;
                arrayList2.add(hVar2);
            } else {
                arrayList3.add(hVar2);
            }
        }
        Collections.sort(arrayList, f4973a);
        return new C0067e(bVar, arrayList, cVar.a(), cVar2.a(), z10);
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
            int i15 = (hVar.f4991c + (i11 - hVar.f4989a)) - i14;
            int i16 = (i10 != 0 && i11 == b10) ? i15 - 1 : i15;
            while (i11 < hVar.f4990b && i15 < hVar.f4992d && bVar.areItemsTheSame(i11, i15)) {
                i11++;
                i15++;
            }
            cVar.c(i14, i11);
            if (z10 && (i12 = b11 - i14) >= i13 + 1 && i12 <= i10 - 1 && cVar2.b(i12) <= i11) {
                i iVar = new i();
                iVar.f4993a = b10;
                iVar.f4994b = i16;
                iVar.f4995c = i11;
                iVar.f4996d = i15;
                iVar.f4997e = false;
                return iVar;
            }
        }
        return null;
    }

    private static i e(h hVar, b bVar, c cVar, c cVar2) {
        if (hVar.b() >= 1 && hVar.a() >= 1) {
            int b10 = ((hVar.b() + hVar.a()) + 1) / 2;
            cVar.c(1, hVar.f4989a);
            cVar2.c(1, hVar.f4990b);
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
