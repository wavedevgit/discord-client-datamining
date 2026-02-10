package ls;

import java.lang.ref.SoftReference;
import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends b implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        private final Function0 f36615e;

        /* renamed from: i  reason: collision with root package name */
        private volatile SoftReference f36616i;

        public a(Object obj, Function0 function0) {
            if (function0 == null) {
                d(0);
            }
            this.f36616i = null;
            this.f36615e = function0;
            if (obj != null) {
                this.f36616i = new SoftReference(a(obj));
            }
        }

        private static /* synthetic */ void d(int i10) {
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "initializer", "kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal", "<init>"));
        }

        @Override // ls.z2.b, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object obj;
            SoftReference softReference = this.f36616i;
            if (softReference != null && (obj = softReference.get()) != null) {
                return c(obj);
            }
            Object invoke = this.f36615e.invoke();
            this.f36616i = new SoftReference(a(invoke));
            return invoke;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class b {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f36617d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a {
            a() {
            }
        }

        protected Object a(Object obj) {
            if (obj == null) {
                return f36617d;
            }
            return obj;
        }

        public final Object b(Object obj, Object obj2) {
            return invoke();
        }

        protected Object c(Object obj) {
            if (obj == f36617d) {
                return null;
            }
            return obj;
        }

        public abstract Object invoke();
    }

    private static /* synthetic */ void a(int i10) {
        throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "initializer", "kotlin/reflect/jvm/internal/ReflectProperties", "lazySoft"));
    }

    public static a b(Object obj, Function0 function0) {
        if (function0 == null) {
            a(0);
        }
        return new a(obj, function0);
    }

    public static a c(Function0 function0) {
        if (function0 == null) {
            a(1);
        }
        return b(null, function0);
    }
}
