package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f54282a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54283b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54284c;

    /* renamed from: d  reason: collision with root package name */
    private final long f54285d;

    b0(a aVar) {
        this.f54282a = Collections.unmodifiableList(aVar.f54286a);
        this.f54283b = Collections.unmodifiableList(aVar.f54287b);
        this.f54284c = Collections.unmodifiableList(aVar.f54288c);
        this.f54285d = aVar.f54289d;
    }

    public long a() {
        return this.f54285d;
    }

    public List b() {
        return this.f54283b;
    }

    public List c() {
        return this.f54282a;
    }

    public List d() {
        return this.f54284c;
    }

    public boolean e() {
        if (this.f54285d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f54286a;

        /* renamed from: b  reason: collision with root package name */
        final List f54287b;

        /* renamed from: c  reason: collision with root package name */
        final List f54288c;

        /* renamed from: d  reason: collision with root package name */
        long f54289d;

        public a(b1 b1Var, int i10) {
            this.f54286a = new ArrayList();
            this.f54287b = new ArrayList();
            this.f54288c = new ArrayList();
            this.f54289d = 5000L;
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
                this.f54286a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f54287b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f54288c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f54286a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f54287b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f54288c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f54286a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f54287b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f54288c = arrayList3;
            this.f54289d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f54289d = b0Var.a();
        }
    }
}
