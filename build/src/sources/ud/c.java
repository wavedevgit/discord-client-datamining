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
    public final long f50220a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50221b;

    /* renamed from: c  reason: collision with root package name */
    public final long f50222c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f50223d;

    /* renamed from: e  reason: collision with root package name */
    public final long f50224e;

    /* renamed from: f  reason: collision with root package name */
    public final long f50225f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50226g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50227h;

    /* renamed from: i  reason: collision with root package name */
    public final o f50228i;

    /* renamed from: j  reason: collision with root package name */
    public final l f50229j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f50230k;

    /* renamed from: l  reason: collision with root package name */
    public final h f50231l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50232m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f50220a = j10;
        this.f50221b = j11;
        this.f50222c = j12;
        this.f50223d = z10;
        this.f50224e = j13;
        this.f50225f = j14;
        this.f50226g = j15;
        this.f50227h = j16;
        this.f50231l = hVar;
        this.f50228i = oVar;
        this.f50230k = uri;
        this.f50229j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f50232m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45114d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45115e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f50212c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45116i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45114d != i10) {
                    break;
                }
            } while (cVar.f45115e == i11);
            arrayList.add(new a(aVar.f50210a, aVar.f50211b, arrayList2, aVar.f50213d, aVar.f50214e, aVar.f50215f));
        } while (cVar.f45114d == i10);
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
            if (((pd.c) linkedList.peek()).f45114d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f50255a, d10.f50256b - j11, c(d10.f50257c, linkedList), d10.f50258d));
            }
            i10++;
        }
        long j12 = this.f50221b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f50220a, j10, this.f50222c, this.f50223d, this.f50224e, this.f50225f, this.f50226g, this.f50227h, this.f50231l, this.f50228i, this.f50229j, this.f50230k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f50232m.get(i10);
    }

    public final int e() {
        return this.f50232m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f50232m.size() - 1) {
            j10 = this.f50221b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f50232m.get(i10)).f50256b;
        } else {
            j10 = ((g) this.f50232m.get(i10 + 1)).f50256b;
            j11 = ((g) this.f50232m.get(i10)).f50256b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
