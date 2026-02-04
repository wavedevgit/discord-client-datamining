package rj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f48827a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48828b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f48829c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f48830a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f48831b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f48832c;

        public b a() {
            return new b(this.f48830a, this.f48831b, this.f48832c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f48830a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f48830a = i11 | this.f48830a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f48827a = i10;
        this.f48828b = z10;
        this.f48829c = executor;
    }

    public final int a() {
        return this.f48827a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f48829c;
    }

    public final boolean d() {
        return this.f48828b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48827a == bVar.f48827a && this.f48828b == bVar.f48828b && o.a(this.f48829c, bVar.f48829c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f48827a), Boolean.valueOf(this.f48828b), this.f48829c, null);
    }
}
