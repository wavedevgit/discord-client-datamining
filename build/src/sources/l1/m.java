package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m {

    /* renamed from: h  reason: collision with root package name */
    public static int f36287h;

    /* renamed from: c  reason: collision with root package name */
    p f36290c;

    /* renamed from: d  reason: collision with root package name */
    p f36291d;

    /* renamed from: f  reason: collision with root package name */
    int f36293f;

    /* renamed from: g  reason: collision with root package name */
    int f36294g;

    /* renamed from: a  reason: collision with root package name */
    public int f36288a = 0;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36289b = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36292e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(p pVar, int i10) {
        this.f36290c = null;
        this.f36291d = null;
        int i11 = f36287h;
        this.f36293f = i11;
        f36287h = i11 + 1;
        this.f36290c = pVar;
        this.f36291d = pVar;
        this.f36294g = i10;
    }

    private long c(f fVar, long j10) {
        p pVar = fVar.f36263d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36270k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36270k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36263d != pVar) {
                    j11 = Math.min(j11, c(fVar2, fVar2.f36265f + j10));
                }
            }
        }
        if (fVar == pVar.f36320i) {
            long j12 = j10 - pVar.j();
            return Math.min(Math.min(j11, c(pVar.f36319h, j12)), j12 - pVar.f36319h.f36265f);
        }
        return j11;
    }

    private long d(f fVar, long j10) {
        p pVar = fVar.f36263d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36270k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36270k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36263d != pVar) {
                    j11 = Math.max(j11, d(fVar2, fVar2.f36265f + j10));
                }
            }
        }
        if (fVar == pVar.f36319h) {
            long j12 = j10 + pVar.j();
            return Math.max(Math.max(j11, d(pVar.f36320i, j12)), j12 - pVar.f36320i.f36265f);
        }
        return j11;
    }

    public void a(p pVar) {
        this.f36292e.add(pVar);
        this.f36291d = pVar;
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
        p pVar5 = this.f36290c;
        long j11 = 0;
        if (pVar5 instanceof c) {
            if (((c) pVar5).f36317f != i10) {
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
            pVar = constraintWidgetContainer.f2374e;
        } else {
            pVar = constraintWidgetContainer.f2376f;
        }
        f fVar3 = pVar.f36319h;
        if (i10 == 0) {
            pVar2 = constraintWidgetContainer.f2374e;
        } else {
            pVar2 = constraintWidgetContainer.f2376f;
        }
        f fVar4 = pVar2.f36320i;
        boolean contains = pVar5.f36319h.f36271l.contains(fVar3);
        boolean contains2 = this.f36290c.f36320i.f36271l.contains(fVar4);
        long j12 = this.f36290c.j();
        if (contains && contains2) {
            long d10 = d(this.f36290c.f36319h, 0L);
            long c10 = c(this.f36290c.f36320i, 0L);
            long j13 = d10 - j12;
            p pVar6 = this.f36290c;
            int i12 = pVar6.f36320i.f36265f;
            if (j13 >= (-i12)) {
                j13 += i12;
            }
            int i13 = pVar6.f36319h.f36265f;
            long j14 = ((-c10) - j12) - i13;
            if (j14 >= i13) {
                j14 -= i13;
            }
            float q10 = pVar6.f36313b.q(i10);
            if (q10 > 0.0f) {
                j11 = (((float) j14) / q10) + (((float) j13) / (1.0f - q10));
            }
            float f10 = (float) j11;
            long j15 = (f10 * q10) + 0.5f + j12 + (f10 * (1.0f - q10)) + 0.5f;
            j10 = pVar4.f36319h.f36265f + j15;
            i11 = this.f36290c.f36320i.f36265f;
        } else if (contains) {
            return Math.max(d(this.f36290c.f36319h, fVar2.f36265f), this.f36290c.f36319h.f36265f + j12);
        } else if (contains2) {
            return Math.max(-c(this.f36290c.f36320i, fVar.f36265f), (-this.f36290c.f36320i.f36265f) + j12);
        } else {
            j10 = pVar3.f36319h.f36265f + this.f36290c.j();
            i11 = this.f36290c.f36320i.f36265f;
        }
        return j10 - i11;
    }
}
