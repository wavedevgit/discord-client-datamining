package rs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: b  reason: collision with root package name */
    public static final b f49296b = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private static final c f49297c = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f49298a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends c {

        /* renamed from: a  reason: collision with root package name */
        public final Throwable f49299a;

        public a(Throwable th2) {
            this.f49299a = th2;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof a) && Intrinsics.areEqual(this.f49299a, ((a) obj).f49299a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            Throwable th2 = this.f49299a;
            if (th2 != null) {
                return th2.hashCode();
            }
            return 0;
        }

        @Override // rs.k.c
        public String toString() {
            return "Closed(" + this.f49299a + ')';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Object a(Throwable th2) {
            return k.c(new a(th2));
        }

        public final Object b() {
            return k.c(k.f49297c);
        }

        public final Object c(Object obj) {
            return k.c(obj);
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {
        public String toString() {
            return "Failed";
        }
    }

    private /* synthetic */ k(Object obj) {
        this.f49298a = obj;
    }

    public static final /* synthetic */ k b(Object obj) {
        return new k(obj);
    }

    public static boolean d(Object obj, Object obj2) {
        if (!(obj2 instanceof k) || !Intrinsics.areEqual(obj, ((k) obj2).k())) {
            return false;
        }
        return true;
    }

    public static final Throwable e(Object obj) {
        a aVar;
        if (obj instanceof a) {
            aVar = (a) obj;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return null;
        }
        return aVar.f49299a;
    }

    public static final Object f(Object obj) {
        if (!(obj instanceof c)) {
            return obj;
        }
        return null;
    }

    public static int g(Object obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }

    public static final boolean h(Object obj) {
        return obj instanceof a;
    }

    public static final boolean i(Object obj) {
        return !(obj instanceof c);
    }

    public static String j(Object obj) {
        if (obj instanceof a) {
            return ((a) obj).toString();
        }
        return "Value(" + obj + ')';
    }

    public boolean equals(Object obj) {
        return d(this.f49298a, obj);
    }

    public int hashCode() {
        return g(this.f49298a);
    }

    public final /* synthetic */ Object k() {
        return this.f49298a;
    }

    public String toString() {
        return j(this.f49298a);
    }

    public static Object c(Object obj) {
        return obj;
    }
}
