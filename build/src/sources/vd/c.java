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
    public final long f51467a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51468b;

    /* renamed from: c  reason: collision with root package name */
    public final long f51469c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f51470d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51471e;

    /* renamed from: f  reason: collision with root package name */
    public final long f51472f;

    /* renamed from: g  reason: collision with root package name */
    public final long f51473g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51474h;

    /* renamed from: i  reason: collision with root package name */
    public final o f51475i;

    /* renamed from: j  reason: collision with root package name */
    public final l f51476j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f51477k;

    /* renamed from: l  reason: collision with root package name */
    public final h f51478l;

    /* renamed from: m  reason: collision with root package name */
    private final List f51479m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f51467a = j10;
        this.f51468b = j11;
        this.f51469c = j12;
        this.f51470d = z10;
        this.f51471e = j13;
        this.f51472f = j14;
        this.f51473g = j15;
        this.f51474h = j16;
        this.f51478l = hVar;
        this.f51475i = oVar;
        this.f51477k = uri;
        this.f51476j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f51479m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        qd.c cVar = (qd.c) linkedList.poll();
        int i10 = cVar.f44029d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f44030e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f51459c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f44031i));
                cVar = (qd.c) linkedList.poll();
                if (cVar.f44029d != i10) {
                    break;
                }
            } while (cVar.f44030e == i11);
            arrayList.add(new a(aVar.f51457a, aVar.f51458b, arrayList2, aVar.f51460d, aVar.f51461e, aVar.f51462f));
        } while (cVar.f44029d == i10);
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
            if (((qd.c) linkedList.peek()).f44029d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f51502a, d10.f51503b - j11, c(d10.f51504c, linkedList), d10.f51505d));
            }
            i10++;
        }
        long j12 = this.f51468b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f51467a, j10, this.f51469c, this.f51470d, this.f51471e, this.f51472f, this.f51473g, this.f51474h, this.f51478l, this.f51475i, this.f51476j, this.f51477k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f51479m.get(i10);
    }

    public final int e() {
        return this.f51479m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f51479m.size() - 1) {
            j10 = this.f51468b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f51479m.get(i10)).f51503b;
        } else {
            j10 = ((g) this.f51479m.get(i10 + 1)).f51503b;
            j11 = ((g) this.f51479m.get(i10)).f51503b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
