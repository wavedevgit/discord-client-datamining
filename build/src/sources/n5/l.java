package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import s5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements m, j {

    /* renamed from: d  reason: collision with root package name */
    private final String f39708d;

    /* renamed from: f  reason: collision with root package name */
    private final s5.j f39710f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39705a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Path f39706b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f39707c = new Path();

    /* renamed from: e  reason: collision with root package name */
    private final List f39709e = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39711a;

        static {
            int[] iArr = new int[j.a.values().length];
            f39711a = iArr;
            try {
                iArr[j.a.MERGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39711a[j.a.ADD.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39711a[j.a.SUBTRACT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39711a[j.a.INTERSECT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39711a[j.a.EXCLUDE_INTERSECTIONS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public l(s5.j jVar) {
        this.f39708d = jVar.c();
        this.f39710f = jVar;
    }

    private void a() {
        for (int i10 = 0; i10 < this.f39709e.size(); i10++) {
            this.f39707c.addPath(((m) this.f39709e.get(i10)).q());
        }
    }

    private void c(Path.Op op2) {
        this.f39706b.reset();
        this.f39705a.reset();
        for (int size = this.f39709e.size() - 1; size >= 1; size--) {
            m mVar = (m) this.f39709e.get(size);
            if (mVar instanceof d) {
                d dVar = (d) mVar;
                List k10 = dVar.k();
                for (int size2 = k10.size() - 1; size2 >= 0; size2--) {
                    Path q10 = ((m) k10.get(size2)).q();
                    q10.transform(dVar.l());
                    this.f39706b.addPath(q10);
                }
            } else {
                this.f39706b.addPath(mVar.q());
            }
        }
        m mVar2 = (m) this.f39709e.get(0);
        if (mVar2 instanceof d) {
            d dVar2 = (d) mVar2;
            List k11 = dVar2.k();
            for (int i10 = 0; i10 < k11.size(); i10++) {
                Path q11 = ((m) k11.get(i10)).q();
                q11.transform(dVar2.l());
                this.f39705a.addPath(q11);
            }
        } else {
            this.f39705a.set(mVar2.q());
        }
        this.f39707c.op(this.f39705a, this.f39706b, op2);
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < this.f39709e.size(); i10++) {
            ((m) this.f39709e.get(i10)).b(list, list2);
        }
    }

    @Override // n5.j
    public void f(ListIterator listIterator) {
        while (listIterator.hasPrevious() && listIterator.previous() != this) {
        }
        while (listIterator.hasPrevious()) {
            c cVar = (c) listIterator.previous();
            if (cVar instanceof m) {
                this.f39709e.add((m) cVar);
                listIterator.remove();
            }
        }
    }

    @Override // n5.m
    public Path q() {
        this.f39707c.reset();
        if (this.f39710f.d()) {
            return this.f39707c;
        }
        int i10 = a.f39711a[this.f39710f.b().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            c(Path.Op.XOR);
                        }
                    } else {
                        c(Path.Op.INTERSECT);
                    }
                } else {
                    c(Path.Op.REVERSE_DIFFERENCE);
                }
            } else {
                c(Path.Op.UNION);
            }
        } else {
            a();
        }
        return this.f39707c;
    }
}
