package us;

import java.lang.ref.SoftReference;
import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends b implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        private final Function0 f51789e;

        /* renamed from: i  reason: collision with root package name */
        private volatile SoftReference f51790i;

        public a(Object obj, Function0 function0) {
            if (function0 == null) {
                d(0);
            }
            this.f51790i = null;
            this.f51789e = function0;
            if (obj != null) {
                this.f51790i = new SoftReference(a(obj));
            }
        }

        private static /* synthetic */ void d(int i10) {
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "initializer", "kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal", "<init>"));
        }

        @Override // us.z2.b, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object obj;
            SoftReference softReference = this.f51790i;
            if (softReference != null && (obj = softReference.get()) != null) {
                return c(obj);
            }
            Object invoke = this.f51789e.invoke();
            this.f51790i = new SoftReference(a(invoke));
            return invoke;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class b {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f51791d = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a {
            a() {
            }
        }

        protected Object a(Object obj) {
            if (obj == null) {
                return f51791d;
            }
            return obj;
        }

        public final Object b(Object obj, Object obj2) {
            return invoke();
        }

        protected Object c(Object obj) {
            if (obj == f51791d) {
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
