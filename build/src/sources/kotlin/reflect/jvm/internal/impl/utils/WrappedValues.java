package kotlin.reflect.jvm.internal.impl.utils;

import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class WrappedValues {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f35295a = new a();
    public static volatile boolean throwWrappedProcessCanceledException = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class WrappedProcessCanceledException extends RuntimeException {
        public WrappedProcessCanceledException(Throwable th2) {
            super("Rethrow stored exception", th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a {
        a() {
        }

        public String toString() {
            return "NULL_VALUE";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Throwable f35296a;

        /* synthetic */ b(Throwable th2, a aVar) {
            this(th2);
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 1 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 1 ? 3 : 2];
            if (i10 != 1) {
                objArr[0] = "throwable";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/utils/WrappedValues$ThrowableWrapper";
            }
            if (i10 != 1) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/utils/WrappedValues$ThrowableWrapper";
            } else {
                objArr[1] = "getThrowable";
            }
            if (i10 != 1) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 == 1) {
                throw new IllegalStateException(format);
            }
        }

        public Throwable b() {
            Throwable th2 = this.f35296a;
            if (th2 == null) {
                a(1);
            }
            return th2;
        }

        public String toString() {
            return this.f35296a.toString();
        }

        private b(Throwable th2) {
            if (th2 == null) {
                a(0);
            }
            this.f35296a = th2;
        }
    }

    private static /* synthetic */ void a(int i10) {
        String str = (i10 == 1 || i10 == 2) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 1 || i10 == 2) ? 2 : 3];
        if (i10 == 1 || i10 == 2) {
            objArr[0] = "kotlin/reflect/jvm/internal/impl/utils/WrappedValues";
        } else if (i10 != 3) {
            objArr[0] = "value";
        } else {
            objArr[0] = "throwable";
        }
        if (i10 == 1 || i10 == 2) {
            objArr[1] = "escapeNull";
        } else {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/utils/WrappedValues";
        }
        if (i10 != 1 && i10 != 2) {
            if (i10 == 3) {
                objArr[2] = "escapeThrowable";
            } else if (i10 != 4) {
                objArr[2] = "unescapeNull";
            } else {
                objArr[2] = "unescapeExceptionOrNull";
            }
        }
        String format = String.format(str, objArr);
        if (i10 != 1 && i10 != 2) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    @NotNull
    public static <V> Object escapeNull(V v10) {
        if (v10 == null && (v10 = (V) f35295a) == null) {
            a(1);
        }
        return v10;
    }

    @NotNull
    public static Object escapeThrowable(@NotNull Throwable th2) {
        if (th2 == null) {
            a(3);
        }
        return new b(th2, null);
    }

    public static <V> V unescapeExceptionOrNull(@NotNull Object obj) {
        if (obj == null) {
            a(4);
        }
        return (V) unescapeNull(unescapeThrowable(obj));
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static <V> V unescapeNull(@NotNull Object obj) {
        if (obj == 0) {
            a(0);
        }
        if (obj == f35295a) {
            return null;
        }
        return obj;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static <V> V unescapeThrowable(Object obj) {
        if (obj instanceof b) {
            Throwable b10 = ((b) obj).b();
            if (throwWrappedProcessCanceledException && ExceptionUtilsKt.isProcessCanceledException(b10)) {
                throw new WrappedProcessCanceledException(b10);
            }
            throw ExceptionUtilsKt.rethrow(b10);
        }
        return obj;
    }
}
