package je;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k implements ae.g {

    /* renamed from: d  reason: collision with root package name */
    private final List f31532d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f31533e;

    /* renamed from: i  reason: collision with root package name */
    private final long[] f31534i;

    public k(List list) {
        this.f31532d = Collections.unmodifiableList(new ArrayList(list));
        this.f31533e = new long[list.size() * 2];
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            int i11 = i10 * 2;
            long[] jArr = this.f31533e;
            jArr[i11] = eVar.f31503b;
            jArr[i11 + 1] = eVar.f31504c;
        }
        long[] jArr2 = this.f31533e;
        long[] copyOf = Arrays.copyOf(jArr2, jArr2.length);
        this.f31534i = copyOf;
        Arrays.sort(copyOf);
    }

    @Override // ae.g
    public int a(long j10) {
        int e10 = w0.e(this.f31534i, j10, false, false);
        if (e10 < this.f31534i.length) {
            return e10;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (int i10 = 0; i10 < this.f31532d.size(); i10++) {
            long[] jArr = this.f31533e;
            int i11 = i10 * 2;
            if (jArr[i11] <= j10 && j10 < jArr[i11 + 1]) {
                e eVar = (e) this.f31532d.get(i10);
                ae.b bVar = eVar.f31502a;
                if (bVar.f710p == -3.4028235E38f) {
                    arrayList2.add(eVar);
                } else {
                    arrayList.add(bVar);
                }
            }
        }
        Collections.sort(arrayList2, new Comparator() { // from class: je.j
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Long.compare(((e) obj).f31503b, ((e) obj2).f31503b);
                return compare;
            }
        });
        for (int i12 = 0; i12 < arrayList2.size(); i12++) {
            arrayList.add(((e) arrayList2.get(i12)).f31502a.b().h((-1) - i12, 1).a());
        }
        return arrayList;
    }

    @Override // ae.g
    public long e(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        if (i10 < this.f31534i.length) {
            z11 = true;
        }
        oe.a.a(z11);
        return this.f31534i[i10];
    }

    @Override // ae.g
    public int f() {
        return this.f31534i.length;
    }
}
