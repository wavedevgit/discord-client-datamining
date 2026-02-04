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
    public final long f50504a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50505b;

    /* renamed from: c  reason: collision with root package name */
    public final long f50506c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f50507d;

    /* renamed from: e  reason: collision with root package name */
    public final long f50508e;

    /* renamed from: f  reason: collision with root package name */
    public final long f50509f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50510g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50511h;

    /* renamed from: i  reason: collision with root package name */
    public final o f50512i;

    /* renamed from: j  reason: collision with root package name */
    public final l f50513j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f50514k;

    /* renamed from: l  reason: collision with root package name */
    public final h f50515l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50516m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f50504a = j10;
        this.f50505b = j11;
        this.f50506c = j12;
        this.f50507d = z10;
        this.f50508e = j13;
        this.f50509f = j14;
        this.f50510g = j15;
        this.f50511h = j16;
        this.f50515l = hVar;
        this.f50512i = oVar;
        this.f50514k = uri;
        this.f50513j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f50516m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45072d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45073e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f50496c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45074i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45072d != i10) {
                    break;
                }
            } while (cVar.f45073e == i11);
            arrayList.add(new a(aVar.f50494a, aVar.f50495b, arrayList2, aVar.f50497d, aVar.f50498e, aVar.f50499f));
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
                arrayList.add(new g(d10.f50539a, d10.f50540b - j11, c(d10.f50541c, linkedList), d10.f50542d));
            }
            i10++;
        }
        long j12 = this.f50505b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f50504a, j10, this.f50506c, this.f50507d, this.f50508e, this.f50509f, this.f50510g, this.f50511h, this.f50515l, this.f50512i, this.f50513j, this.f50514k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f50516m.get(i10);
    }

    public final int e() {
        return this.f50516m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f50516m.size() - 1) {
            j10 = this.f50505b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f50516m.get(i10)).f50540b;
        } else {
            j10 = ((g) this.f50516m.get(i10 + 1)).f50540b;
            j11 = ((g) this.f50516m.get(i10)).f50540b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
