package n5;

import android.graphics.PointF;
import java.util.ArrayList;
import java.util.List;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements s, a.b {

    /* renamed from: a  reason: collision with root package name */
    private final com.airbnb.lottie.n f36956a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36957b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f36958c;

    /* renamed from: d  reason: collision with root package name */
    private t5.o f36959d;

    public q(com.airbnb.lottie.n nVar, u5.b bVar, t5.n nVar2) {
        this.f36956a = nVar;
        this.f36957b = nVar2.c();
        o5.a a10 = nVar2.b().a();
        this.f36958c = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private static int d(int i10, int i11) {
        int i12 = i10 / i11;
        if ((i10 ^ i11) < 0 && i11 * i12 != i10) {
            return i12 - 1;
        }
        return i12;
    }

    private static int e(int i10, int i11) {
        return i10 - (d(i10, i11) * i11);
    }

    private t5.o i(t5.o oVar) {
        PointF c10;
        PointF b10;
        boolean z10;
        List a10 = oVar.a();
        boolean d10 = oVar.d();
        int i10 = 0;
        for (int size = a10.size() - 1; size >= 0; size--) {
            r5.a aVar = (r5.a) a10.get(size);
            r5.a aVar2 = (r5.a) a10.get(e(size - 1, a10.size()));
            if (size == 0 && !d10) {
                c10 = oVar.b();
            } else {
                c10 = aVar2.c();
            }
            if (size == 0 && !d10) {
                b10 = c10;
            } else {
                b10 = aVar2.b();
            }
            PointF a11 = aVar.a();
            if (!oVar.d() && (size == 0 || size == a10.size() - 1)) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (b10.equals(c10) && a11.equals(c10) && !z10) {
                i10 += 2;
            } else {
                i10++;
            }
        }
        t5.o oVar2 = this.f36959d;
        if (oVar2 == null || oVar2.a().size() != i10) {
            ArrayList arrayList = new ArrayList(i10);
            for (int i11 = 0; i11 < i10; i11++) {
                arrayList.add(new r5.a());
            }
            this.f36959d = new t5.o(new PointF(0.0f, 0.0f), false, arrayList);
        }
        this.f36959d.e(d10);
        return this.f36959d;
    }

    @Override // o5.a.b
    public void a() {
        this.f36956a.invalidateSelf();
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x009e, code lost:
        if (r7 != (r0.size() - 1)) goto L37;
     */
    @Override // n5.s
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public t5.o c(t5.o r19) {
        /*
            Method dump skipped, instructions count: 408
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: n5.q.c(t5.o):t5.o");
    }

    public o5.a g() {
        return this.f36958c;
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }
}
