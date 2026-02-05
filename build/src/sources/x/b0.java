package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f53323a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53324b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53325c;

    /* renamed from: d  reason: collision with root package name */
    private final long f53326d;

    b0(a aVar) {
        this.f53323a = Collections.unmodifiableList(aVar.f53327a);
        this.f53324b = Collections.unmodifiableList(aVar.f53328b);
        this.f53325c = Collections.unmodifiableList(aVar.f53329c);
        this.f53326d = aVar.f53330d;
    }

    public long a() {
        return this.f53326d;
    }

    public List b() {
        return this.f53324b;
    }

    public List c() {
        return this.f53323a;
    }

    public List d() {
        return this.f53325c;
    }

    public boolean e() {
        if (this.f53326d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f53327a;

        /* renamed from: b  reason: collision with root package name */
        final List f53328b;

        /* renamed from: c  reason: collision with root package name */
        final List f53329c;

        /* renamed from: d  reason: collision with root package name */
        long f53330d;

        public a(b1 b1Var, int i10) {
            this.f53327a = new ArrayList();
            this.f53328b = new ArrayList();
            this.f53329c = new ArrayList();
            this.f53330d = 5000L;
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
                this.f53327a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f53328b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f53329c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f53327a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f53328b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f53329c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f53327a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f53328b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f53329c = arrayList3;
            this.f53330d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f53330d = b0Var.a();
        }
    }
}
