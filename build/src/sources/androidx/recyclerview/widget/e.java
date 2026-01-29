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
    private static final Comparator f4960a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(d dVar, d dVar2) {
            return dVar.f4963a - dVar2.f4963a;
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
        private final int[] f4961a;

        /* renamed from: b  reason: collision with root package name */
        private final int f4962b;

        c(int i10) {
            int[] iArr = new int[i10];
            this.f4961a = iArr;
            this.f4962b = iArr.length / 2;
        }

        int[] a() {
            return this.f4961a;
        }

        int b(int i10) {
            return this.f4961a[i10 + this.f4962b];
        }

        void c(int i10, int i11) {
            this.f4961a[i10 + this.f4962b] = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f4963a;

        /* renamed from: b  reason: collision with root package name */
        public final int f4964b;

        /* renamed from: c  reason: collision with root package name */
        public final int f4965c;

        d(int i10, int i11, int i12) {
            this.f4963a = i10;
            this.f4964b = i11;
            this.f4965c = i12;
        }

        int a() {
            return this.f4963a + this.f4965c;
        }

        int b() {
            return this.f4964b + this.f4965c;
        }
    }

    /* renamed from: androidx.recyclerview.widget.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0065e {

        /* renamed from: a  reason: collision with root package name */
        private final List f4966a;

        /* renamed from: b  reason: collision with root package name */
        private final int[] f4967b;

        /* renamed from: c  reason: collision with root package name */
        private final int[] f4968c;

        /* renamed from: d  reason: collision with root package name */
        private final b f4969d;

        /* renamed from: e  reason: collision with root package name */
        private final int f4970e;

        /* renamed from: f  reason: collision with root package name */
        private final int f4971f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f4972g;

        C0065e(b bVar, List list, int[] iArr, int[] iArr2, boolean z10) {
            this.f4966a = list;
            this.f4967b = iArr;
            this.f4968c = iArr2;
            Arrays.fill(iArr, 0);
            Arrays.fill(iArr2, 0);
            this.f4969d = bVar;
            this.f4970e = bVar.getOldListSize();
            this.f4971f = bVar.getNewListSize();
            this.f4972g = z10;
            a();
            e();
        }

        private void a() {
            d dVar;
            if (this.f4966a.isEmpty()) {
                dVar = null;
            } else {
                dVar = (d) this.f4966a.get(0);
            }
            if (dVar == null || dVar.f4963a != 0 || dVar.f4964b != 0) {
                this.f4966a.add(0, new d(0, 0, 0));
            }
            this.f4966a.add(new d(this.f4970e, this.f4971f, 0));
        }

        private void d(int i10) {
            int i11;
            int size = this.f4966a.size();
            int i12 = 0;
            for (int i13 = 0; i13 < size; i13++) {
                d dVar = (d) this.f4966a.get(i13);
                while (i12 < dVar.f4964b) {
                    if (this.f4968c[i12] == 0 && this.f4969d.areItemsTheSame(i10, i12)) {
                        if (this.f4969d.areContentsTheSame(i10, i12)) {
                            i11 = 8;
                        } else {
                            i11 = 4;
                        }
                        this.f4967b[i10] = (i12 << 4) | i11;
                        this.f4968c[i12] = (i10 << 4) | i11;
                        return;
                    }
                    i12++;
                }
                i12 = dVar.b();
            }
        }

        private void e() {
            int i10;
            for (d dVar : this.f4966a) {
                for (int i11 = 0; i11 < dVar.f4965c; i11++) {
                    int i12 = dVar.f4963a + i11;
                    int i13 = dVar.f4964b + i11;
                    if (this.f4969d.areContentsTheSame(i12, i13)) {
                        i10 = 1;
                    } else {
                        i10 = 2;
                    }
                    this.f4967b[i12] = (i13 << 4) | i10;
                    this.f4968c[i13] = (i12 << 4) | i10;
                }
            }
            if (this.f4972g) {
                f();
            }
        }

        private void f() {
            int i10 = 0;
            for (d dVar : this.f4966a) {
                while (i10 < dVar.f4963a) {
                    if (this.f4967b[i10] == 0) {
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
                    if (gVar.f4973a == i10 && gVar.f4975c == z10) {
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
                    gVar2.f4974b--;
                } else {
                    gVar2.f4974b++;
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
            int i11 = this.f4970e;
            ArrayDeque arrayDeque = new ArrayDeque();
            int i12 = this.f4970e;
            int i13 = this.f4971f;
            for (int size = this.f4966a.size() - 1; size >= 0; size--) {
                d dVar2 = (d) this.f4966a.get(size);
                int a10 = dVar2.a();
                int b10 = dVar2.b();
                while (true) {
                    if (i12 <= a10) {
                        break;
                    }
                    i12--;
                    int i14 = this.f4967b[i12];
                    if ((i14 & 12) != 0) {
                        int i15 = i14 >> 4;
                        g g10 = g(arrayDeque, i15, false);
                        if (g10 != null) {
                            int i16 = (i11 - g10.f4974b) - 1;
                            dVar.d(i12, i16);
                            if ((i14 & 4) != 0) {
                                dVar.c(i16, 1, this.f4969d.getChangePayload(i12, i15));
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
                    int i17 = this.f4968c[i13];
                    if ((i17 & 12) != 0) {
                        int i18 = i17 >> 4;
                        g g11 = g(arrayDeque, i18, true);
                        if (g11 == null) {
                            arrayDeque.add(new g(i13, i11 - i12, false));
                        } else {
                            dVar.d((i11 - g11.f4974b) - 1, i12);
                            if ((i17 & 4) != 0) {
                                dVar.c(i12, 1, this.f4969d.getChangePayload(i18, i13));
                            }
                        }
                    } else {
                        dVar.a(i12, 1);
                        i11++;
                    }
                }
                int i19 = dVar2.f4963a;
                int i20 = dVar2.f4964b;
                for (i10 = 0; i10 < dVar2.f4965c; i10++) {
                    if ((this.f4967b[i19] & 15) == 2) {
                        dVar.c(i19, 1, this.f4969d.getChangePayload(i19, i20));
                    }
                    i19++;
                    i20++;
                }
                i12 = dVar2.f4963a;
                i13 = dVar2.f4964b;
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
        int f4973a;

        /* renamed from: b  reason: collision with root package name */
        int f4974b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4975c;

        g(int i10, int i11, boolean z10) {
            this.f4973a = i10;
            this.f4974b = i11;
            this.f4975c = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {

        /* renamed from: a  reason: collision with root package name */
        int f4976a;

        /* renamed from: b  reason: collision with root package name */
        int f4977b;

        /* renamed from: c  reason: collision with root package name */
        int f4978c;

        /* renamed from: d  reason: collision with root package name */
        int f4979d;

        public h() {
        }

        int a() {
            return this.f4979d - this.f4978c;
        }

        int b() {
            return this.f4977b - this.f4976a;
        }

        public h(int i10, int i11, int i12, int i13) {
            this.f4976a = i10;
            this.f4977b = i11;
            this.f4978c = i12;
            this.f4979d = i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        public int f4980a;

        /* renamed from: b  reason: collision with root package name */
        public int f4981b;

        /* renamed from: c  reason: collision with root package name */
        public int f4982c;

        /* renamed from: d  reason: collision with root package name */
        public int f4983d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f4984e;

        i() {
        }

        int a() {
            return Math.min(this.f4982c - this.f4980a, this.f4983d - this.f4981b);
        }

        boolean b() {
            if (this.f4983d - this.f4981b != this.f4982c - this.f4980a) {
                return true;
            }
            return false;
        }

        boolean c() {
            if (this.f4983d - this.f4981b > this.f4982c - this.f4980a) {
                return true;
            }
            return false;
        }

        d d() {
            if (b()) {
                if (this.f4984e) {
                    return new d(this.f4980a, this.f4981b, a());
                }
                if (c()) {
                    return new d(this.f4980a, this.f4981b + 1, a());
                }
                return new d(this.f4980a + 1, this.f4981b, a());
            }
            int i10 = this.f4980a;
            return new d(i10, this.f4981b, this.f4982c - i10);
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
            int i16 = hVar.f4979d - ((hVar.f4977b - i11) - i15);
            if (i10 != 0 && i11 == b10) {
                i12 = i16 + 1;
            } else {
                i12 = i16;
            }
            while (i11 > hVar.f4976a && i16 > hVar.f4978c && bVar.areItemsTheSame(i11 - 1, i16 - 1)) {
                i11--;
                i16--;
            }
            cVar2.c(i15, i11);
            if (z10 && (i13 = b11 - i15) >= i14 && i13 <= i10 && cVar.b(i13) >= i11) {
                i iVar = new i();
                iVar.f4980a = i11;
                iVar.f4981b = i16;
                iVar.f4982c = b10;
                iVar.f4983d = i12;
                iVar.f4984e = true;
                return iVar;
            }
        }
        return null;
    }

    public static C0065e b(b bVar) {
        return c(bVar, true);
    }

    public static C0065e c(b bVar, boolean z10) {
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
                hVar.f4976a = hVar2.f4976a;
                hVar.f4978c = hVar2.f4978c;
                hVar.f4977b = e10.f4980a;
                hVar.f4979d = e10.f4981b;
                arrayList2.add(hVar);
                hVar2.f4977b = hVar2.f4977b;
                hVar2.f4979d = hVar2.f4979d;
                hVar2.f4976a = e10.f4982c;
                hVar2.f4978c = e10.f4983d;
                arrayList2.add(hVar2);
            } else {
                arrayList3.add(hVar2);
            }
        }
        Collections.sort(arrayList, f4960a);
        return new C0065e(bVar, arrayList, cVar.a(), cVar2.a(), z10);
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
            int i15 = (hVar.f4978c + (i11 - hVar.f4976a)) - i14;
            int i16 = (i10 != 0 && i11 == b10) ? i15 - 1 : i15;
            while (i11 < hVar.f4977b && i15 < hVar.f4979d && bVar.areItemsTheSame(i11, i15)) {
                i11++;
                i15++;
            }
            cVar.c(i14, i11);
            if (z10 && (i12 = b11 - i14) >= i13 + 1 && i12 <= i10 - 1 && cVar2.b(i12) <= i11) {
                i iVar = new i();
                iVar.f4980a = b10;
                iVar.f4981b = i16;
                iVar.f4982c = i11;
                iVar.f4983d = i15;
                iVar.f4984e = false;
                return iVar;
            }
        }
        return null;
    }

    private static i e(h hVar, b bVar, c cVar, c cVar2) {
        if (hVar.b() >= 1 && hVar.a() >= 1) {
            int b10 = ((hVar.b() + hVar.a()) + 1) / 2;
            cVar.c(1, hVar.f4976a);
            cVar2.c(1, hVar.f4977b);
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
