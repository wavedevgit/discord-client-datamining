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
    public final long f52036a;

    /* renamed from: b  reason: collision with root package name */
    public final long f52037b;

    /* renamed from: c  reason: collision with root package name */
    public final long f52038c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f52039d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52040e;

    /* renamed from: f  reason: collision with root package name */
    public final long f52041f;

    /* renamed from: g  reason: collision with root package name */
    public final long f52042g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52043h;

    /* renamed from: i  reason: collision with root package name */
    public final o f52044i;

    /* renamed from: j  reason: collision with root package name */
    public final l f52045j;

    /* renamed from: k  reason: collision with root package name */
    public final Uri f52046k;

    /* renamed from: l  reason: collision with root package name */
    public final h f52047l;

    /* renamed from: m  reason: collision with root package name */
    private final List f52048m;

    public c(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        List list2;
        this.f52036a = j10;
        this.f52037b = j11;
        this.f52038c = j12;
        this.f52039d = z10;
        this.f52040e = j13;
        this.f52041f = j14;
        this.f52042g = j15;
        this.f52043h = j16;
        this.f52047l = hVar;
        this.f52044i = oVar;
        this.f52046k = uri;
        this.f52045j = lVar;
        if (list == null) {
            list2 = Collections.EMPTY_LIST;
        } else {
            list2 = list;
        }
        this.f52048m = list2;
    }

    private static ArrayList c(List list, LinkedList linkedList) {
        qd.c cVar = (qd.c) linkedList.poll();
        int i10 = cVar.f44598d;
        ArrayList arrayList = new ArrayList();
        do {
            int i11 = cVar.f44599e;
            a aVar = (a) list.get(i11);
            List list2 = aVar.f52028c;
            ArrayList arrayList2 = new ArrayList();
            do {
                arrayList2.add((j) list2.get(cVar.f44600i));
                cVar = (qd.c) linkedList.poll();
                if (cVar.f44598d != i10) {
                    break;
                }
            } while (cVar.f44599e == i11);
            arrayList.add(new a(aVar.f52026a, aVar.f52027b, arrayList2, aVar.f52029d, aVar.f52030e, aVar.f52031f));
        } while (cVar.f44598d == i10);
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
            if (((qd.c) linkedList.peek()).f44598d != i10) {
                long f10 = f(i10);
                if (f10 != -9223372036854775807L) {
                    j11 += f10;
                }
            } else {
                g d10 = d(i10);
                arrayList.add(new g(d10.f52071a, d10.f52072b - j11, c(d10.f52073c, linkedList), d10.f52074d));
            }
            i10++;
        }
        long j12 = this.f52037b;
        if (j12 != -9223372036854775807L) {
            j10 = j12 - j11;
        }
        return new c(this.f52036a, j10, this.f52038c, this.f52039d, this.f52040e, this.f52041f, this.f52042g, this.f52043h, this.f52047l, this.f52044i, this.f52045j, this.f52046k, arrayList);
    }

    public final g d(int i10) {
        return (g) this.f52048m.get(i10);
    }

    public final int e() {
        return this.f52048m.size();
    }

    public final long f(int i10) {
        long j10;
        long j11;
        if (i10 == this.f52048m.size() - 1) {
            j10 = this.f52037b;
            if (j10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            j11 = ((g) this.f52048m.get(i10)).f52072b;
        } else {
            j10 = ((g) this.f52048m.get(i10 + 1)).f52072b;
            j11 = ((g) this.f52048m.get(i10)).f52072b;
        }
        return j10 - j11;
    }

    public final long g(int i10) {
        return w0.K0(f(i10));
    }
}
