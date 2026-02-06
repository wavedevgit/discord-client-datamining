package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m {

    /* renamed from: h  reason: collision with root package name */
    public static int f35680h;

    /* renamed from: c  reason: collision with root package name */
    p f35683c;

    /* renamed from: d  reason: collision with root package name */
    p f35684d;

    /* renamed from: f  reason: collision with root package name */
    int f35686f;

    /* renamed from: g  reason: collision with root package name */
    int f35687g;

    /* renamed from: a  reason: collision with root package name */
    public int f35681a = 0;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35682b = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f35685e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(p pVar, int i10) {
        this.f35683c = null;
        this.f35684d = null;
        int i11 = f35680h;
        this.f35686f = i11;
        f35680h = i11 + 1;
        this.f35683c = pVar;
        this.f35684d = pVar;
        this.f35687g = i10;
    }

    private long c(f fVar, long j10) {
        p pVar = fVar.f35656d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f35663k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f35663k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f35656d != pVar) {
                    j11 = Math.min(j11, c(fVar2, fVar2.f35658f + j10));
                }
            }
        }
        if (fVar == pVar.f35713i) {
            long j12 = j10 - pVar.j();
            return Math.min(Math.min(j11, c(pVar.f35712h, j12)), j12 - pVar.f35712h.f35658f);
        }
        return j11;
    }

    private long d(f fVar, long j10) {
        p pVar = fVar.f35656d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f35663k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f35663k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f35656d != pVar) {
                    j11 = Math.max(j11, d(fVar2, fVar2.f35658f + j10));
                }
            }
        }
        if (fVar == pVar.f35712h) {
            long j12 = j10 + pVar.j();
            return Math.max(Math.max(j11, d(pVar.f35713i, j12)), j12 - pVar.f35713i.f35658f);
        }
        return j11;
    }

    public void a(p pVar) {
        this.f35685e.add(pVar);
        this.f35684d = pVar;
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
        p pVar5 = this.f35683c;
        long j11 = 0;
        if (pVar5 instanceof c) {
            if (((c) pVar5).f35710f != i10) {
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
            pVar = constraintWidgetContainer.f2703e;
        } else {
            pVar = constraintWidgetContainer.f2705f;
        }
        f fVar3 = pVar.f35712h;
        if (i10 == 0) {
            pVar2 = constraintWidgetContainer.f2703e;
        } else {
            pVar2 = constraintWidgetContainer.f2705f;
        }
        f fVar4 = pVar2.f35713i;
        boolean contains = pVar5.f35712h.f35664l.contains(fVar3);
        boolean contains2 = this.f35683c.f35713i.f35664l.contains(fVar4);
        long j12 = this.f35683c.j();
        if (contains && contains2) {
            long d10 = d(this.f35683c.f35712h, 0L);
            long c10 = c(this.f35683c.f35713i, 0L);
            long j13 = d10 - j12;
            p pVar6 = this.f35683c;
            int i12 = pVar6.f35713i.f35658f;
            if (j13 >= (-i12)) {
                j13 += i12;
            }
            int i13 = pVar6.f35712h.f35658f;
            long j14 = ((-c10) - j12) - i13;
            if (j14 >= i13) {
                j14 -= i13;
            }
            float q10 = pVar6.f35706b.q(i10);
            if (q10 > 0.0f) {
                j11 = (((float) j14) / q10) + (((float) j13) / (1.0f - q10));
            }
            float f10 = (float) j11;
            long j15 = (f10 * q10) + 0.5f + j12 + (f10 * (1.0f - q10)) + 0.5f;
            j10 = pVar4.f35712h.f35658f + j15;
            i11 = this.f35683c.f35713i.f35658f;
        } else if (contains) {
            return Math.max(d(this.f35683c.f35712h, fVar2.f35658f), this.f35683c.f35712h.f35658f + j12);
        } else if (contains2) {
            return Math.max(-c(this.f35683c.f35713i, fVar.f35658f), (-this.f35683c.f35713i.f35658f) + j12);
        } else {
            j10 = pVar3.f35712h.f35658f + this.f35683c.j();
            i11 = this.f35683c.f35713i.f35658f;
        }
        return j10 - i11;
    }
}
