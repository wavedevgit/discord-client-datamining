package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import t5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements m, j {

    /* renamed from: d  reason: collision with root package name */
    private final String f36911d;

    /* renamed from: f  reason: collision with root package name */
    private final t5.j f36913f;

    /* renamed from: a  reason: collision with root package name */
    private final Path f36908a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Path f36909b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f36910c = new Path();

    /* renamed from: e  reason: collision with root package name */
    private final List f36912e = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36914a;

        static {
            int[] iArr = new int[j.a.values().length];
            f36914a = iArr;
            try {
                iArr[j.a.MERGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36914a[j.a.ADD.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36914a[j.a.SUBTRACT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f36914a[j.a.INTERSECT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f36914a[j.a.EXCLUDE_INTERSECTIONS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public l(t5.j jVar) {
        this.f36911d = jVar.c();
        this.f36913f = jVar;
    }

    private void a() {
        for (int i10 = 0; i10 < this.f36912e.size(); i10++) {
            this.f36910c.addPath(((m) this.f36912e.get(i10)).t());
        }
    }

    private void d(Path.Op op2) {
        this.f36909b.reset();
        this.f36908a.reset();
        for (int size = this.f36912e.size() - 1; size >= 1; size--) {
            m mVar = (m) this.f36912e.get(size);
            if (mVar instanceof d) {
                d dVar = (d) mVar;
                List k10 = dVar.k();
                for (int size2 = k10.size() - 1; size2 >= 0; size2--) {
                    Path t10 = ((m) k10.get(size2)).t();
                    t10.transform(dVar.l());
                    this.f36909b.addPath(t10);
                }
            } else {
                this.f36909b.addPath(mVar.t());
            }
        }
        m mVar2 = (m) this.f36912e.get(0);
        if (mVar2 instanceof d) {
            d dVar2 = (d) mVar2;
            List k11 = dVar2.k();
            for (int i10 = 0; i10 < k11.size(); i10++) {
                Path t11 = ((m) k11.get(i10)).t();
                t11.transform(dVar2.l());
                this.f36908a.addPath(t11);
            }
        } else {
            this.f36908a.set(mVar2.t());
        }
        this.f36910c.op(this.f36908a, this.f36909b, op2);
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < this.f36912e.size(); i10++) {
            ((m) this.f36912e.get(i10)).b(list, list2);
        }
    }

    @Override // n5.j
    public void g(ListIterator listIterator) {
        while (listIterator.hasPrevious() && listIterator.previous() != this) {
        }
        while (listIterator.hasPrevious()) {
            c cVar = (c) listIterator.previous();
            if (cVar instanceof m) {
                this.f36912e.add((m) cVar);
                listIterator.remove();
            }
        }
    }

    @Override // n5.m
    public Path t() {
        this.f36910c.reset();
        if (this.f36913f.d()) {
            return this.f36910c;
        }
        int i10 = a.f36914a[this.f36913f.b().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            d(Path.Op.XOR);
                        }
                    } else {
                        d(Path.Op.INTERSECT);
                    }
                } else {
                    d(Path.Op.REVERSE_DIFFERENCE);
                }
            } else {
                d(Path.Op.UNION);
            }
        } else {
            a();
        }
        return this.f36910c;
    }
}
