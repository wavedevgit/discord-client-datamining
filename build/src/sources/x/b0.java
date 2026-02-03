package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f53061a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53062b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53063c;

    /* renamed from: d  reason: collision with root package name */
    private final long f53064d;

    b0(a aVar) {
        this.f53061a = Collections.unmodifiableList(aVar.f53065a);
        this.f53062b = Collections.unmodifiableList(aVar.f53066b);
        this.f53063c = Collections.unmodifiableList(aVar.f53067c);
        this.f53064d = aVar.f53068d;
    }

    public long a() {
        return this.f53064d;
    }

    public List b() {
        return this.f53062b;
    }

    public List c() {
        return this.f53061a;
    }

    public List d() {
        return this.f53063c;
    }

    public boolean e() {
        if (this.f53064d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f53065a;

        /* renamed from: b  reason: collision with root package name */
        final List f53066b;

        /* renamed from: c  reason: collision with root package name */
        final List f53067c;

        /* renamed from: d  reason: collision with root package name */
        long f53068d;

        public a(b1 b1Var, int i10) {
            this.f53065a = new ArrayList();
            this.f53066b = new ArrayList();
            this.f53067c = new ArrayList();
            this.f53068d = 5000L;
            a(b1Var, i10);
        }

        public a a(b1 b1Var, int i10) {
            boolean z10;
            boolean z11 = false;
            if (b1Var != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.b(z10, "Point cannot be null.");
            if (i10 >= 1 && i10 <= 7) {
                z11 = true;
            }
            b2.e.b(z11, "Invalid metering mode " + i10);
            if ((i10 & 1) != 0) {
                this.f53065a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f53066b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f53067c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f53065a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f53066b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f53067c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f53065a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f53066b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f53067c = arrayList3;
            this.f53068d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f53068d = b0Var.a();
        }
    }
}
