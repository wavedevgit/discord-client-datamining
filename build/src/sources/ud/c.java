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
    public final long f51365a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51366b;

    /* renamed from: c  reason: collision with root package name */
    public final long f51367c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f51368d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51369e;

    /* renamed from: f  reason: collision with root package name */
    public final long f51370f;

    /* renamed from: g  reason: collision with root package name */
    public final long f51371g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51372h;

    /* renamed from: i  reason: collision with root package name */
    public final o f51373i;

    /* renamed from: j  reason: collision with root package name */
    public final l f51374j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f51375k;

    /* renamed from: l  reason: collision with root package name */
    public final h f51376l;

    /* renamed from: m  reason: collision with root package name */
    private final List f51377m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f51365a = j10;
        this.f51366b = j11;
        this.f51367c = j12;
        this.f51368d = z10;
        this.f51369e = j13;
        this.f51370f = j14;
        this.f51371g = j15;
        this.f51372h = j16;
        this.f51376l = hVar;
        this.f51373i = oVar;
        this.f51375k = uri;
        this.f51374j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f51377m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f43847d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f43848e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f51357c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f43849i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f43847d != i10) {
                    break;
                }
            } while (cVar.f43848e == i11);
            arrayList.add(new a(aVar.f51355a, aVar.f51356b, arrayList2, aVar.f51358d, aVar.f51359e, aVar.f51360f));
        } while (cVar.f43847d == i10);
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
            if (((pd.c) linkedList.peek()).f43847d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f51400a, d10.f51401b - j11, c(d10.f51402c, linkedList), d10.f51403d));
            }
            i10++;
        }
        long j12 = this.f51366b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f51365a, j10, this.f51367c, this.f51368d, this.f51369e, this.f51370f, this.f51371g, this.f51372h, this.f51376l, this.f51373i, this.f51374j, this.f51375k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f51377m.get(i10);
    }

    public final int e() {
        return this.f51377m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f51377m.size() - 1) {
            j10 = this.f51366b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f51377m.get(i10)).f51401b;
        } else {
            j10 = ((g) this.f51377m.get(i10 + 1)).f51401b;
            j11 = ((g) this.f51377m.get(i10)).f51401b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
