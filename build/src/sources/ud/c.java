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
    public final long f50148a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50149b;

    /* renamed from: c  reason: collision with root package name */
    public final long f50150c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f50151d;

    /* renamed from: e  reason: collision with root package name */
    public final long f50152e;

    /* renamed from: f  reason: collision with root package name */
    public final long f50153f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50154g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50155h;

    /* renamed from: i  reason: collision with root package name */
    public final o f50156i;

    /* renamed from: j  reason: collision with root package name */
    public final l f50157j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f50158k;

    /* renamed from: l  reason: collision with root package name */
    public final h f50159l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50160m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f50148a = j10;
        this.f50149b = j11;
        this.f50150c = j12;
        this.f50151d = z10;
        this.f50152e = j13;
        this.f50153f = j14;
        this.f50154g = j15;
        this.f50155h = j16;
        this.f50159l = hVar;
        this.f50156i = oVar;
        this.f50158k = uri;
        this.f50157j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f50160m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45024d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45025e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f50140c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45026i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45024d != i10) {
                    break;
                }
            } while (cVar.f45025e == i11);
            arrayList.add(new a(aVar.f50138a, aVar.f50139b, arrayList2, aVar.f50141d, aVar.f50142e, aVar.f50143f));
        } while (cVar.f45024d == i10);
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
            if (((pd.c) linkedList.peek()).f45024d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f50183a, d10.f50184b - j11, c(d10.f50185c, linkedList), d10.f50186d));
            }
            i10++;
        }
        long j12 = this.f50149b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f50148a, j10, this.f50150c, this.f50151d, this.f50152e, this.f50153f, this.f50154g, this.f50155h, this.f50159l, this.f50156i, this.f50157j, this.f50158k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f50160m.get(i10);
    }

    public final int e() {
        return this.f50160m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f50160m.size() - 1) {
            j10 = this.f50149b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f50160m.get(i10)).f50184b;
        } else {
            j10 = ((g) this.f50160m.get(i10 + 1)).f50184b;
            j11 = ((g) this.f50160m.get(i10)).f50184b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
