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
    public final long f50164a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50165b;

    /* renamed from: c  reason: collision with root package name */
    public final long f50166c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f50167d;

    /* renamed from: e  reason: collision with root package name */
    public final long f50168e;

    /* renamed from: f  reason: collision with root package name */
    public final long f50169f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50170g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50171h;

    /* renamed from: i  reason: collision with root package name */
    public final o f50172i;

    /* renamed from: j  reason: collision with root package name */
    public final l f50173j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f50174k;

    /* renamed from: l  reason: collision with root package name */
    public final h f50175l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50176m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f50164a = j10;
        this.f50165b = j11;
        this.f50166c = j12;
        this.f50167d = z10;
        this.f50168e = j13;
        this.f50169f = j14;
        this.f50170g = j15;
        this.f50171h = j16;
        this.f50175l = hVar;
        this.f50172i = oVar;
        this.f50174k = uri;
        this.f50173j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f50176m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        pd.c cVar = (pd.c) linkedList.poll();
        int i10 = cVar.f45040d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f45041e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f50156c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f45042i));
                cVar = (pd.c) linkedList.poll();
                if (cVar.f45040d != i10) {
                    break;
                }
            } while (cVar.f45041e == i11);
            arrayList.add(new a(aVar.f50154a, aVar.f50155b, arrayList2, aVar.f50157d, aVar.f50158e, aVar.f50159f));
        } while (cVar.f45040d == i10);
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
            if (((pd.c) linkedList.peek()).f45040d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f50199a, d10.f50200b - j11, c(d10.f50201c, linkedList), d10.f50202d));
            }
            i10++;
        }
        long j12 = this.f50165b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f50164a, j10, this.f50166c, this.f50167d, this.f50168e, this.f50169f, this.f50170g, this.f50171h, this.f50175l, this.f50172i, this.f50173j, this.f50174k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f50176m.get(i10);
    }

    public final int e() {
        return this.f50176m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f50176m.size() - 1) {
            j10 = this.f50165b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f50176m.get(i10)).f50200b;
        } else {
            j10 = ((g) this.f50176m.get(i10 + 1)).f50200b;
            j11 = ((g) this.f50176m.get(i10)).f50200b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
