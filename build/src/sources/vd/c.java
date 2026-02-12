package vd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements qd.a {

    /* renamed from: a  reason: collision with root package name */
    public final long f51468a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51469b;

    /* renamed from: c  reason: collision with root package name */
    public final long f51470c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f51471d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51472e;

    /* renamed from: f  reason: collision with root package name */
    public final long f51473f;

    /* renamed from: g  reason: collision with root package name */
    public final long f51474g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51475h;

    /* renamed from: i  reason: collision with root package name */
    public final o f51476i;

    /* renamed from: j  reason: collision with root package name */
    public final l f51477j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f51478k;

    /* renamed from: l  reason: collision with root package name */
    public final h f51479l;

    /* renamed from: m  reason: collision with root package name */
    private final List f51480m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f51468a = j10;
        this.f51469b = j11;
        this.f51470c = j12;
        this.f51471d = z10;
        this.f51472e = j13;
        this.f51473f = j14;
        this.f51474g = j15;
        this.f51475h = j16;
        this.f51479l = hVar;
        this.f51476i = oVar;
        this.f51478k = uri;
        this.f51477j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f51480m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        qd.c cVar = (qd.c) linkedList.poll();
        int i10 = cVar.f44030d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f44031e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f51460c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f44032i));
                cVar = (qd.c) linkedList.poll();
                if (cVar.f44030d != i10) {
                    break;
                }
            } while (cVar.f44031e == i11);
            arrayList.add(new a(aVar.f51458a, aVar.f51459b, arrayList2, aVar.f51461d, aVar.f51462e, aVar.f51463f));
        } while (cVar.f44030d == i10);
        linkedList.addFirst(cVar);
        return arrayList;
    }

    @Override // qd.a
    /* renamed from: b */
    public final c a(List list) {
        long j10;
        LinkedList linkedList = new LinkedList(list);
        Collections.sort(linkedList);
        linkedList.add(new qd.c(-1, -1, -1));
        ArrayList arrayList = new ArrayList();
        long j11 = 0;
        int i10 = 0;
        while (true) {
            j10 = -9223372036854775807L;
            if (i10 >= e()) {
                break;
            }
            if (((qd.c) linkedList.peek()).f44030d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f51503a, d10.f51504b - j11, c(d10.f51505c, linkedList), d10.f51506d));
            }
            i10++;
        }
        long j12 = this.f51469b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f51468a, j10, this.f51470c, this.f51471d, this.f51472e, this.f51473f, this.f51474g, this.f51475h, this.f51479l, this.f51476i, this.f51477j, this.f51478k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f51480m.get(i10);
    }

    public final int e() {
        return this.f51480m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f51480m.size() - 1) {
            j10 = this.f51469b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f51480m.get(i10)).f51504b;
        } else {
            j10 = ((g) this.f51480m.get(i10 + 1)).f51504b;
            j11 = ((g) this.f51480m.get(i10)).f51504b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
