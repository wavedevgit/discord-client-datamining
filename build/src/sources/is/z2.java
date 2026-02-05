package is;

import java.lang.ref.SoftReference;
import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends b implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        private final Function0 f30382e;

        /* renamed from: i  reason: collision with root package name */
        private volatile SoftReference f30383i;

        public a(Object obj, Function0 function0) {
            if (function0 == null) {
                d(0);
            }
            this.f30383i = null;
            this.f30382e = function0;
            if (obj != null) {
                this.f30383i = new SoftReference(a(obj));
            }
        }

        private static /* synthetic */ void d(int i10) {
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "initializer", "kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal", "<init>"));
        }

        @Override // is.z2.b, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object obj;
            SoftReference softReference = this.f30383i;
            if (softReference != null && (obj = softReference.get()) != null) {
                return c(obj);
            }
            Object invoke = this.f30382e.invoke();
            this.f30383i = new SoftReference(a(invoke));
            return invoke;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class b {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f30384d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a {
            a() {
            }
        }

        protected Object a(Object obj) {
            if (obj == null) {
                return f30384d;
            }
            return obj;
        }

        public final Object b(Object obj, Object obj2) {
            return invoke();
        }

        protected Object c(Object obj) {
            if (obj == f30384d) {
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
