package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m {

    /* renamed from: h  reason: collision with root package name */
    public static int f36761h;

    /* renamed from: c  reason: collision with root package name */
    p f36764c;

    /* renamed from: d  reason: collision with root package name */
    p f36765d;

    /* renamed from: f  reason: collision with root package name */
    int f36767f;

    /* renamed from: g  reason: collision with root package name */
    int f36768g;

    /* renamed from: a  reason: collision with root package name */
    public int f36762a = 0;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36763b = false;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f36766e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(p pVar, int i10) {
        this.f36764c = null;
        this.f36765d = null;
        int i11 = f36761h;
        this.f36767f = i11;
        f36761h = i11 + 1;
        this.f36764c = pVar;
        this.f36765d = pVar;
        this.f36768g = i10;
    }

    private long c(f fVar, long j10) {
        p pVar = fVar.f36737d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36744k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36744k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36737d != pVar) {
                    j11 = Math.min(j11, c(fVar2, fVar2.f36739f + j10));
                }
            }
        }
        if (fVar == pVar.f36794i) {
            long j12 = j10 - pVar.j();
            return Math.min(Math.min(j11, c(pVar.f36793h, j12)), j12 - pVar.f36793h.f36739f);
        }
        return j11;
    }

    private long d(f fVar, long j10) {
        p pVar = fVar.f36737d;
        if (pVar instanceof k) {
            return j10;
        }
        int size = fVar.f36744k.size();
        long j11 = j10;
        for (int i10 = 0; i10 < size; i10++) {
            d dVar = (d) fVar.f36744k.get(i10);
            if (dVar instanceof f) {
                f fVar2 = (f) dVar;
                if (fVar2.f36737d != pVar) {
                    j11 = Math.max(j11, d(fVar2, fVar2.f36739f + j10));
                }
            }
        }
        if (fVar == pVar.f36793h) {
            long j12 = j10 + pVar.j();
            return Math.max(Math.max(j11, d(pVar.f36794i, j12)), j12 - pVar.f36794i.f36739f);
        }
        return j11;
    }

    public void a(p pVar) {
        this.f36766e.add(pVar);
        this.f36765d = pVar;
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
        p pVar5 = this.f36764c;
        long j11 = 0;
        if (pVar5 instanceof c) {
            if (((c) pVar5).f36791f != i10) {
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
            pVar = constraintWidgetContainer.f2249e;
        } else {
            pVar = constraintWidgetContainer.f2251f;
        }
        f fVar3 = pVar.f36793h;
        if (i10 == 0) {
            pVar2 = constraintWidgetContainer.f2249e;
        } else {
            pVar2 = constraintWidgetContainer.f2251f;
        }
        f fVar4 = pVar2.f36794i;
        boolean contains = pVar5.f36793h.f36745l.contains(fVar3);
        boolean contains2 = this.f36764c.f36794i.f36745l.contains(fVar4);
        long j12 = this.f36764c.j();
        if (contains && contains2) {
            long d10 = d(this.f36764c.f36793h, 0L);
            long c10 = c(this.f36764c.f36794i, 0L);
            long j13 = d10 - j12;
            p pVar6 = this.f36764c;
            int i12 = pVar6.f36794i.f36739f;
            if (j13 >= (-i12)) {
                j13 += i12;
            }
            int i13 = pVar6.f36793h.f36739f;
            long j14 = ((-c10) - j12) - i13;
            if (j14 >= i13) {
                j14 -= i13;
            }
            float q10 = pVar6.f36787b.q(i10);
            if (q10 > 0.0f) {
                j11 = (((float) j14) / q10) + (((float) j13) / (1.0f - q10));
            }
            float f10 = (float) j11;
            long j15 = (f10 * q10) + 0.5f + j12 + (f10 * (1.0f - q10)) + 0.5f;
            j10 = pVar4.f36793h.f36739f + j15;
            i11 = this.f36764c.f36794i.f36739f;
        } else if (contains) {
            return Math.max(d(this.f36764c.f36793h, fVar2.f36739f), this.f36764c.f36793h.f36739f + j12);
        } else if (contains2) {
            return Math.max(-c(this.f36764c.f36794i, fVar.f36739f), (-this.f36764c.f36794i.f36739f) + j12);
        } else {
            j10 = pVar3.f36793h.f36739f + this.f36764c.j();
            i11 = this.f36764c.f36794i.f36739f;
        }
        return j10 - i11;
    }
}
