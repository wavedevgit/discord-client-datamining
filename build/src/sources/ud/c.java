package ud;

import android.net.Uri;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements pd.a {

    /* renamed from: a  reason: collision with root package name */
    public final long f51317a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51318b;

    /* renamed from: c  reason: collision with root package name */
    public final long f51319c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f51320d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51321e;

    /* renamed from: f  reason: collision with root package name */
    public final long f51322f;

    /* renamed from: g  reason: collision with root package name */
    public final long f51323g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51324h;

    /* renamed from: i  reason: collision with root package name */
    public final o f51325i;

    /* renamed from: j  reason: collision with root package name */
    public final l f51326j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f51327k;

    /* renamed from: l  reason: collision with root package name */
    public final h f51328l;

    /* renamed from: m  reason: collision with root package name */
    private final List f51329m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f51317a = j10;
        this.f51318b = j11;
        this.f51319c = j12;
        this.f51320d = z10;
        this.f51321e = j13;
        this.f51322f = j14;
        this.f51323g = j15;
        this.f51324h = j16;
        this.f51328l = hVar;
        this.f51325i = oVar;
        this.f51327k = uri;
        this.f51326j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f51329m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f43799d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f43800e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f51309c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f43801i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f43799d != i10) {
                    break;
                }
            } while (cVar.f43800e == i11);
            arrayList.add(new a(aVar.f51307a, aVar.f51308b, arrayList2, aVar.f51310d, aVar.f51311e, aVar.f51312f));
        } while (cVar.f43799d == i10);
        linkedList.addFirst(cVar);
        return arrayList;
    }

    @Override // pd.a
    /* renamed from: b */
    public final c a(List list) {
        long j10;
        LinkedList linkedList = new LinkedList(list);
        Collections.sort(linkedList);
        linkedList.add(new pd.c(-1, -1, -1));
        ArrayList arrayList = new ArrayList();
        long j11 = 0;
        int i10 = 0;
        while (true) {
            j10 = -9223372036854775807L;
            if (i10 >= e()) {
                break;
            }
            if (((pd.c) linkedList.peek()).f43799d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f51352a, d10.f51353b - j11, c(d10.f51354c, linkedList), d10.f51355d));
            }
            i10++;
        }
        long j12 = this.f51318b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f51317a, j10, this.f51319c, this.f51320d, this.f51321e, this.f51322f, this.f51323g, this.f51324h, this.f51328l, this.f51325i, this.f51326j, this.f51327k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f51329m.get(i10);
    }

    public final int e() {
        return this.f51329m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f51329m.size() - 1) {
            j10 = this.f51318b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f51329m.get(i10)).f51353b;
        } else {
            j10 = ((g) this.f51329m.get(i10 + 1)).f51353b;
            j11 = ((g) this.f51329m.get(i10)).f51353b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
