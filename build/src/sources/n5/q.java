package n5;

import android.graphics.PointF;
import java.util.ArrayList;
import java.util.List;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements s, a.b {

    /* renamed from: a  reason: collision with root package name */
    private final com.airbnb.lottie.n f39873a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39874b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f39875c;

    /* renamed from: d  reason: collision with root package name */
    private s5.o f39876d;

    public q(com.airbnb.lottie.n nVar, t5.b bVar, s5.n nVar2) {
        this.f39873a = nVar;
        this.f39874b = nVar2.c();
        o5.a a10 = nVar2.b().a();
        this.f39875c = a10;
        bVar.i(a10);
        a10.a(this);
    }

    private static int c(int i10, int i11) {
        int i12 = i10 / i11;
        if ((i10 ^ i11) < 0 && i11 * i12 != i10) {
            return i12 - 1;
        }
        return i12;
    }

    private static int d(int i10, int i11) {
        return i10 - (c(i10, i11) * i11);
    }

    private s5.o i(s5.o oVar) {
        PointF c10;
        PointF b10;
        boolean z10;
        List a10 = oVar.a();
        boolean d10 = oVar.d();
        int i10 = 0;
        for (int size = a10.size() - 1; size >= 0; size--) {
            q5.a aVar = (q5.a) a10.get(size);
            q5.a aVar2 = (q5.a) a10.get(d(size - 1, a10.size()));
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
        s5.o oVar2 = this.f39876d;
        if (oVar2 == null || oVar2.a().size() != i10) {
            ArrayList arrayList = new ArrayList(i10);
            for (int i11 = 0; i11 < i10; i11++) {
                arrayList.add(new q5.a());
            }
            this.f39876d = new s5.o(new PointF(0.0f, 0.0f), false, arrayList);
        }
        this.f39876d.e(d10);
        return this.f39876d;
    }

    @Override // o5.a.b
    public void a() {
        this.f39873a.invalidateSelf();
    }

    public o5.a f() {
        return this.f39875c;
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x009e, code lost:
        if (r7 != (r0.size() - 1)) goto L37;
     */
    @Override // n5.s
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public s5.o h(s5.o r19) {
        /*
            Method dump skipped, instructions count: 408
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: n5.q.h(s5.o):s5.o");
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }
}
