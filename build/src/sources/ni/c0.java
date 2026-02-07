package ni;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f40772a;

        a(int i10) {
            this.f40772a = i10;
        }

        @Override // ni.c0.e
        Map c() {
            return j0.c(this.f40772a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Comparator f40773a;

        b(Comparator comparator) {
            this.f40773a = comparator;
        }

        @Override // ni.c0.e
        Map c() {
            return new TreeMap(this.f40773a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements mi.r, Serializable {

        /* renamed from: d  reason: collision with root package name */
        private final int f40774d;

        c(int i10) {
            this.f40774d = h.b(i10, "expectedValuesPerKey");
        }

        @Override // mi.r
        /* renamed from: a */
        public List get() {
            return new ArrayList(this.f40774d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d extends c0 {
        d() {
            super(null);
        }

        public abstract x e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class e {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a extends d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ int f40775a;

            a(int i10) {
                this.f40775a = i10;
            }

            @Override // ni.c0.d
            public x e() {
                return d0.b(e.this.c(), new c(this.f40775a));
            }
        }

        e() {
        }

        public d a() {
            return b(2);
        }

        public d b(int i10) {
            h.b(i10, "expectedValuesPerKey");
            return new a(i10);
        }

        abstract Map c();
    }

    /* synthetic */ c0(a aVar) {
        this();
    }

    public static e a() {
        return b(8);
    }

    public static e b(int i10) {
        h.b(i10, "expectedKeys");
        return new a(i10);
    }

    public static e c() {
        return d(i0.b());
    }

    public static e d(Comparator comparator) {
        mi.m.j(comparator);
        return new b(comparator);
    }

    private c0() {
    }
}
