package uj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f51429a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51430b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f51431c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f51432a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f51433b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f51434c;

        public b a() {
            return new b(this.f51432a, this.f51433b, this.f51434c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f51432a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f51432a = i11 | this.f51432a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f51429a = i10;
        this.f51430b = z10;
        this.f51431c = executor;
    }

    public final int a() {
        return this.f51429a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f51431c;
    }

    public final boolean d() {
        return this.f51430b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51429a == bVar.f51429a && this.f51430b == bVar.f51430b && o.a(this.f51431c, bVar.f51431c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f51429a), Boolean.valueOf(this.f51430b), this.f51431c, null);
    }
}
