package rj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f48303a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48304b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f48305c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f48306a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f48307b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f48308c;

        public b a() {
            return new b(this.f48306a, this.f48307b, this.f48308c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f48306a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f48306a = i11 | this.f48306a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f48303a = i10;
        this.f48304b = z10;
        this.f48305c = executor;
    }

    public final int a() {
        return this.f48303a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f48305c;
    }

    public final boolean d() {
        return this.f48304b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48303a == bVar.f48303a && this.f48304b == bVar.f48304b && o.a(this.f48305c, bVar.f48305c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f48303a), Boolean.valueOf(this.f48304b), this.f48305c, null);
    }
}
