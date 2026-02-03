package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m {

    /* renamed from: h  reason: collision with root package name */
    public static int f36360h;

    /* renamed from: c  reason: collision with root package name */
    p f36363c;

    /* renamed from: d  reason: collision with root package name */
    p f36364d;

    /* renamed from: f  reason: collision with root package name */
    int f36366f;

    /* renamed from: g  reason: collision with root package name */
    int f36367g;

    /* renamed from: a  reason: collision with root package name */
    public int f36361a = 0;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36362b = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36365e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(p pVar, int i10) {
        this.f36363c = null;
        this.f36364d = null;
        int i11 = f36360h;
        this.f36366f = i11;
        f36360h = i11 + 1;
        this.f36363c = pVar;
        this.f36364d = pVar;
        this.f36367g = i10;
    }

    private long c(f fVar, long j10) {
        p pVar = fVar.f36336d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36343k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36343k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36336d != pVar) {
                    j11 = Math.min(j11, c(fVar2, fVar2.f36338f + j10));
                }
            }
        }
        if (fVar == pVar.f36393i) {
            long j12 = j10 - pVar.j();
            return Math.min(Math.min(j11, c(pVar.f36392h, j12)), j12 - pVar.f36392h.f36338f);
        }
        return j11;
    }

    private long d(f fVar, long j10) {
        p pVar = fVar.f36336d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36343k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36343k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36336d != pVar) {
                    j11 = Math.max(j11, d(fVar2, fVar2.f36338f + j10));
                }
            }
        }
        if (fVar == pVar.f36392h) {
            long j12 = j10 + pVar.j();
            return Math.max(Math.max(j11, d(pVar.f36393i, j12)), j12 - pVar.f36393i.f36338f);
        }
        return j11;
    }

    public void a(p pVar) {
        this.f36365e.add(pVar);
        this.f36364d = pVar;
    }

    public long b(ConstraintWidgetContainer constraintWidgetContainer, int i10) {
        p pVar;
        p pVar2;
        p pVar3;
        long j10;
        int i11;
        f fVar;
        f fVar2;
        p pVar4;
        p pVar5 = this.f36363c;
        long j11 = 0;
        if (pVar5 instanceof c) {
            if (((c) pVar5).f36390f != i10) {
                return 0L;
            }
        } else if (i10 == 0) {
            if (!(pVar5 instanceof l)) {
                return 0L;
            }
        } else if (!(pVar5 instanceof n)) {
            return 0L;
        }
        if (i10 == 0) {
            pVar = constraintWidgetContainer.f2262e;
        } else {
            pVar = constraintWidgetContainer.f2264f;
        }
        f fVar3 = pVar.f36392h;
        if (i10 == 0) {
            pVar2 = constraintWidgetContainer.f2262e;
        } else {
            pVar2 = constraintWidgetContainer.f2264f;
        }
        f fVar4 = pVar2.f36393i;
        boolean contains = pVar5.f36392h.f36344l.contains(fVar3);
        boolean contains2 = this.f36363c.f36393i.f36344l.contains(fVar4);
        long j12 = this.f36363c.j();
        if (contains && contains2) {
            long d10 = d(this.f36363c.f36392h, 0L);
            long c10 = c(this.f36363c.f36393i, 0L);
            long j13 = d10 - j12;
            p pVar6 = this.f36363c;
            int i12 = pVar6.f36393i.f36338f;
            if (j13 >= (-i12)) {
                j13 += i12;
            }
            int i13 = pVar6.f36392h.f36338f;
            long j14 = ((-c10) - j12) - i13;
            if (j14 >= i13) {
                j14 -= i13;
            }
            float q10 = pVar6.f36386b.q(i10);
            if (q10 > 0.0f) {
                j11 = (((float) j14) / q10) + (((float) j13) / (1.0f - q10));
            }
            float f10 = (float) j11;
            long j15 = (f10 * q10) + 0.5f + j12 + (f10 * (1.0f - q10)) + 0.5f;
            j10 = pVar4.f36392h.f36338f + j15;
            i11 = this.f36363c.f36393i.f36338f;
        } else if (contains) {
            return Math.max(d(this.f36363c.f36392h, fVar2.f36338f), this.f36363c.f36392h.f36338f + j12);
        } else if (contains2) {
            return Math.max(-c(this.f36363c.f36393i, fVar.f36338f), (-this.f36363c.f36393i.f36338f) + j12);
        } else {
            j10 = pVar3.f36392h.f36338f + this.f36363c.j();
            i11 = this.f36363c.f36393i.f36338f;
        }
        return j10 - i11;
    }
}
