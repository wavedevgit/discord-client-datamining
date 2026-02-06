package ie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k implements zd.g {

    /* renamed from: d  reason: collision with root package name */
    private final List f26711d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f26712e;

    /* renamed from: i  reason: collision with root package name */
    private final long[] f26713i;

    public k(List list) {
        this.f26711d = Collections.unmodifiableList(new ArrayList(list));
        this.f26712e = new long[list.size() * 2];
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            int i11 = i10 * 2;
            long[] jArr = this.f26712e;
            jArr[i11] = eVar.f26682b;
            jArr[i11 + 1] = eVar.f26683c;
        }
        long[] jArr2 = this.f26712e;
        long[] copyOf = Arrays.copyOf(jArr2, jArr2.length);
        this.f26713i = copyOf;
        Arrays.sort(copyOf);
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f26713i, j10, false, false);
        if (e10 < this.f26713i.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (int i10 = 0; i10 < this.f26711d.size(); i10++) {
            long[] jArr = this.f26712e;
            int i11 = i10 * 2;
            if (jArr[i11] <= j10 && j10 < jArr[i11 + 1]) {
                e eVar = (e) this.f26711d.get(i10);
                zd.b bVar = eVar.f26681a;
                if (bVar.f56194p == -3.4028235E38f) {
                    arrayList2.add(eVar);
                } else {
                    arrayList.add(bVar);
                }
            }
        }
        Collections.sort(arrayList2, new Comparator() { // from class: ie.j
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Long.compare(((e) obj).f26682b, ((e) obj2).f26682b);
                return compare;
            }
        });
        for (int i12 = 0; i12 < arrayList2.size(); i12++) {
            arrayList.add(((e) arrayList2.get(i12)).f26681a.b().h((-1) - i12, 1).a());
        }
        return arrayList;
    }

    @Override // zd.g
    public long e(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (i10 < this.f26713i.length) {
            z11 = true;
        }
        ne.a.a(z11);
        return this.f26713i[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f26713i.length;
    }
}
