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
    public final long f51276a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51277b;

    /* renamed from: c  reason: collision with root package name */
    public final long f51278c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f51279d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51280e;

    /* renamed from: f  reason: collision with root package name */
    public final long f51281f;

    /* renamed from: g  reason: collision with root package name */
    public final long f51282g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51283h;

    /* renamed from: i  reason: collision with root package name */
    public final o f51284i;

    /* renamed from: j  reason: collision with root package name */
    public final l f51285j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f51286k;

    /* renamed from: l  reason: collision with root package name */
    public final h f51287l;

    /* renamed from: m  reason: collision with root package name */
    private final List f51288m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f51276a = j10;
        this.f51277b = j11;
        this.f51278c = j12;
        this.f51279d = z10;
        this.f51280e = j13;
        this.f51281f = j14;
        this.f51282g = j15;
        this.f51283h = j16;
        this.f51287l = hVar;
        this.f51284i = oVar;
        this.f51286k = uri;
        this.f51285j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f51288m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45002d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45003e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f51268c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45004i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45002d != i10) {
                    break;
                }
            } while (cVar.f45003e == i11);
            arrayList.add(new a(aVar.f51266a, aVar.f51267b, arrayList2, aVar.f51269d, aVar.f51270e, aVar.f51271f));
        } while (cVar.f45002d == i10);
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
            if (((pd.c) linkedList.peek()).f45002d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f51311a, d10.f51312b - j11, c(d10.f51313c, linkedList), d10.f51314d));
            }
            i10++;
        }
        long j12 = this.f51277b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f51276a, j10, this.f51278c, this.f51279d, this.f51280e, this.f51281f, this.f51282g, this.f51283h, this.f51287l, this.f51284i, this.f51285j, this.f51286k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f51288m.get(i10);
    }

    public final int e() {
        return this.f51288m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f51288m.size() - 1) {
            j10 = this.f51277b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f51288m.get(i10)).f51312b;
        } else {
            j10 = ((g) this.f51288m.get(i10 + 1)).f51312b;
            j11 = ((g) this.f51288m.get(i10)).f51312b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
