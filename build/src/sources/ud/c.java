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
    public final long f50507a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50508b;

    /* renamed from: c  reason: collision with root package name */
    public final long f50509c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f50510d;

    /* renamed from: e  reason: collision with root package name */
    public final long f50511e;

    /* renamed from: f  reason: collision with root package name */
    public final long f50512f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50513g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50514h;

    /* renamed from: i  reason: collision with root package name */
    public final o f50515i;

    /* renamed from: j  reason: collision with root package name */
    public final l f50516j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f50517k;

    /* renamed from: l  reason: collision with root package name */
    public final h f50518l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50519m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f50507a = j10;
        this.f50508b = j11;
        this.f50509c = j12;
        this.f50510d = z10;
        this.f50511e = j13;
        this.f50512f = j14;
        this.f50513g = j15;
        this.f50514h = j16;
        this.f50518l = hVar;
        this.f50515i = oVar;
        this.f50517k = uri;
        this.f50516j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f50519m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45072d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45073e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f50499c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45074i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45072d != i10) {
                    break;
                }
            } while (cVar.f45073e == i11);
            arrayList.add(new a(aVar.f50497a, aVar.f50498b, arrayList2, aVar.f50500d, aVar.f50501e, aVar.f50502f));
        } while (cVar.f45072d == i10);
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
            if (((pd.c) linkedList.peek()).f45072d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f50542a, d10.f50543b - j11, c(d10.f50544c, linkedList), d10.f50545d));
            }
            i10++;
        }
        long j12 = this.f50508b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f50507a, j10, this.f50509c, this.f50510d, this.f50511e, this.f50512f, this.f50513g, this.f50514h, this.f50518l, this.f50515i, this.f50516j, this.f50517k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f50519m.get(i10);
    }

    public final int e() {
        return this.f50519m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f50519m.size() - 1) {
            j10 = this.f50508b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f50519m.get(i10)).f50543b;
        } else {
            j10 = ((g) this.f50519m.get(i10 + 1)).f50543b;
            j11 = ((g) this.f50519m.get(i10)).f50543b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
