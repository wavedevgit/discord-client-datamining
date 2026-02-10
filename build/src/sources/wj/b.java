package wj;

import hf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f53760a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53761b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f53762c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53763a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f53764b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f53765c;

        public b a() {
            return new b(this.f53763a, this.f53764b, this.f53765c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f53763a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f53763a = i11 | this.f53763a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f53760a = i10;
        this.f53761b = z10;
        this.f53762c = executor;
    }

    public final int a() {
        return this.f53760a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f53762c;
    }

    public final boolean d() {
        return this.f53761b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f53760a == bVar.f53760a && this.f53761b == bVar.f53761b && o.a(this.f53762c, bVar.f53762c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f53760a), Boolean.valueOf(this.f53761b), this.f53762c, null);
    }
}
