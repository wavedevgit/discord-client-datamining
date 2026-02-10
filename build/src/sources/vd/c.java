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
    public final long f52225a;

    /* renamed from: b  reason: collision with root package name */
    public final long f52226b;

    /* renamed from: c  reason: collision with root package name */
    public final long f52227c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f52228d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52229e;

    /* renamed from: f  reason: collision with root package name */
    public final long f52230f;

    /* renamed from: g  reason: collision with root package name */
    public final long f52231g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52232h;

    /* renamed from: i  reason: collision with root package name */
    public final o f52233i;

    /* renamed from: j  reason: collision with root package name */
    public final l f52234j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f52235k;

    /* renamed from: l  reason: collision with root package name */
    public final h f52236l;

    /* renamed from: m  reason: collision with root package name */
    private final List f52237m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f52225a = j10;
        this.f52226b = j11;
        this.f52227c = j12;
        this.f52228d = z10;
        this.f52229e = j13;
        this.f52230f = j14;
        this.f52231g = j15;
        this.f52232h = j16;
        this.f52236l = hVar;
        this.f52233i = oVar;
        this.f52235k = uri;
        this.f52234j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f52237m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        qd.c cVar = (qd.c) linkedList.poll();
        int i10 = cVar.f45361d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45362e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f52217c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45363i));
                cVar = (qd.c) linkedList.poll();
                if (cVar.f45361d != i10) {
                    break;
                }
            } while (cVar.f45362e == i11);
            arrayList.add(new a(aVar.f52215a, aVar.f52216b, arrayList2, aVar.f52218d, aVar.f52219e, aVar.f52220f));
        } while (cVar.f45361d == i10);
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
            if (((qd.c) linkedList.peek()).f45361d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f52260a, d10.f52261b - j11, c(d10.f52262c, linkedList), d10.f52263d));
            }
            i10++;
        }
        long j12 = this.f52226b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f52225a, j10, this.f52227c, this.f52228d, this.f52229e, this.f52230f, this.f52231g, this.f52232h, this.f52236l, this.f52233i, this.f52234j, this.f52235k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f52237m.get(i10);
    }

    public final int e() {
        return this.f52237m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f52237m.size() - 1) {
            j10 = this.f52226b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f52237m.get(i10)).f52261b;
        } else {
            j10 = ((g) this.f52237m.get(i10 + 1)).f52261b;
            j11 = ((g) this.f52237m.get(i10)).f52261b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
