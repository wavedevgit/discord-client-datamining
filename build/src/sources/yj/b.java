package yj;

import hf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f55582a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55583b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f55584c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f55585a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f55586b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f55587c;

        public b a() {
            return new b(this.f55585a, this.f55586b, this.f55587c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f55585a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f55585a = i11 | this.f55585a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f55582a = i10;
        this.f55583b = z10;
        this.f55584c = executor;
    }

    public final int a() {
        return this.f55582a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f55584c;
    }

    public final boolean d() {
        return this.f55583b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f55582a == bVar.f55582a && this.f55583b == bVar.f55583b && o.a(this.f55584c, bVar.f55584c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f55582a), Boolean.valueOf(this.f55583b), this.f55584c, null);
    }
}
