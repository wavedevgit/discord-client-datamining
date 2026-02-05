package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import s5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements m, j {

    /* renamed from: d  reason: collision with root package name */
    private final String f39207d;

    /* renamed from: f  reason: collision with root package name */
    private final s5.j f39209f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39204a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Path f39205b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f39206c = new Path();

    /* renamed from: e  reason: collision with root package name */
    private final List f39208e = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39210a;

        static {
            int[] iArr = new int[j.a.values().length];
            f39210a = iArr;
            try {
                iArr[j.a.MERGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39210a[j.a.ADD.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39210a[j.a.SUBTRACT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39210a[j.a.INTERSECT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39210a[j.a.EXCLUDE_INTERSECTIONS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public l(s5.j jVar) {
        this.f39207d = jVar.c();
        this.f39209f = jVar;
    }

    private void a() {
        for (int i10 = 0; i10 < this.f39208e.size(); i10++) {
            this.f39206c.addPath(((m) this.f39208e.get(i10)).r());
        }
    }

    private void c(Path.Op op2) {
        this.f39205b.reset();
        this.f39204a.reset();
        for (int size = this.f39208e.size() - 1; size >= 1; size--) {
            m mVar = (m) this.f39208e.get(size);
            if (mVar instanceof d) {
                d dVar = (d) mVar;
                List k10 = dVar.k();
                for (int size2 = k10.size() - 1; size2 >= 0; size2--) {
                    Path r10 = ((m) k10.get(size2)).r();
                    r10.transform(dVar.l());
                    this.f39205b.addPath(r10);
                }
            } else {
                this.f39205b.addPath(mVar.r());
            }
        }
        m mVar2 = (m) this.f39208e.get(0);
        if (mVar2 instanceof d) {
            d dVar2 = (d) mVar2;
            List k11 = dVar2.k();
            for (int i10 = 0; i10 < k11.size(); i10++) {
                Path r11 = ((m) k11.get(i10)).r();
                r11.transform(dVar2.l());
                this.f39204a.addPath(r11);
            }
        } else {
            this.f39204a.set(mVar2.r());
        }
        this.f39206c.op(this.f39204a, this.f39205b, op2);
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < this.f39208e.size(); i10++) {
            ((m) this.f39208e.get(i10)).b(list, list2);
        }
    }

    @Override // n5.j
    public void f(ListIterator listIterator) {
        while (listIterator.hasPrevious() && listIterator.previous() != this) {
        }
        while (listIterator.hasPrevious()) {
            c cVar = (c) listIterator.previous();
            if (cVar instanceof m) {
                this.f39208e.add((m) cVar);
                listIterator.remove();
            }
        }
    }

    @Override // n5.m
    public Path r() {
        this.f39206c.reset();
        if (this.f39209f.d()) {
            return this.f39206c;
        }
        int i10 = a.f39210a[this.f39209f.b().ordinal()];
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
        return this.f39206c;
    }
}
