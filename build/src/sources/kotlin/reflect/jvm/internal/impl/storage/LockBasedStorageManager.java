package kotlin.reflect.jvm.internal.impl.storage;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.utils.ExceptionUtilsKt;
import kotlin.reflect.jvm.internal.impl.utils.WrappedValues;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LockBasedStorageManager implements StorageManager {

    /* renamed from: a  reason: collision with root package name */
    protected final SimpleLock f34969a;

    /* renamed from: b  reason: collision with root package name */
    private final ExceptionHandlingStrategy f34970b;

    /* renamed from: c  reason: collision with root package name */
    private final String f34971c;

    /* renamed from: d  reason: collision with root package name */
    private static final String f34968d = StringsKt.g1(LockBasedStorageManager.class.getCanonicalName(), ".", "");
    public static final StorageManager NO_LOCKS = new a("NO_LOCKS", ExceptionHandlingStrategy.THROW, EmptySimpleLock.INSTANCE);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ExceptionHandlingStrategy {
        public static final ExceptionHandlingStrategy THROW = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements ExceptionHandlingStrategy {
            a() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "throwable", "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$ExceptionHandlingStrategy$1", "handleException"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.ExceptionHandlingStrategy
            public RuntimeException handleException(Throwable th2) {
                if (th2 == null) {
                    a(0);
                }
                throw ExceptionUtilsKt.rethrow(th2);
            }
        }

        @NotNull
        RuntimeException handleException(@NotNull Throwable th2);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a extends LockBasedStorageManager {
        a(String str, ExceptionHandlingStrategy exceptionHandlingStrategy, SimpleLock simpleLock) {
            super(str, exceptionHandlingStrategy, simpleLock, null);
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 1 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 1 ? 3 : 2];
            if (i10 != 1) {
                objArr[0] = "source";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$1";
            }
            if (i10 != 1) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$1";
            } else {
                objArr[1] = "recursionDetectedDefault";
            }
            if (i10 != 1) {
                objArr[2] = "recursionDetectedDefault";
            }
            String format = String.format(str, objArr);
            if (i10 == 1) {
                throw new IllegalStateException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager
        protected n e(String str, Object obj) {
            if (str == null) {
                a(0);
            }
            n a10 = n.a();
            if (a10 == null) {
                a(1);
            }
            return a10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b extends i {

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f34972o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(LockBasedStorageManager lockBasedStorageManager, Function0 function0, Object obj) {
            super(lockBasedStorageManager, function0);
            this.f34972o = obj;
        }

        private static /* synthetic */ void a(int i10) {
            throw new IllegalStateException(String.format("@NotNull method %s.%s must not return null", "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$4", "recursionDetected"));
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g
        protected n c(boolean z10) {
            n d10 = n.d(this.f34972o);
            if (d10 == null) {
                a(0);
            }
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class c extends j {

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function1 f34974p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Function1 f34975q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(LockBasedStorageManager lockBasedStorageManager, Function0 function0, Function1 function1, Function1 function12) {
            super(lockBasedStorageManager, function0);
            this.f34974p = function1;
            this.f34975q = function12;
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 2 ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
            Object[] objArr = new Object[i10 != 2 ? 2 : 3];
            if (i10 != 2) {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$5";
            } else {
                objArr[0] = "value";
            }
            if (i10 != 2) {
                objArr[1] = "recursionDetected";
            } else {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$5";
            }
            if (i10 == 2) {
                objArr[2] = "doPostCompute";
            }
            String format = String.format(str, objArr);
            if (i10 == 2) {
                throw new IllegalArgumentException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g
        protected n c(boolean z10) {
            Function1 function1 = this.f34974p;
            if (function1 == null) {
                n c10 = super.c(z10);
                if (c10 == null) {
                    a(0);
                }
                return c10;
            }
            n d10 = n.d(function1.invoke(Boolean.valueOf(z10)));
            if (d10 == null) {
                a(1);
            }
            return d10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.h
        protected void d(Object obj) {
            if (obj == null) {
                a(2);
            }
            this.f34975q.invoke(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d extends e implements CacheWithNotNullValues {
        /* synthetic */ d(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap, a aVar) {
            this(lockBasedStorageManager, concurrentMap);
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 3 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 3 ? 3 : 2];
            if (i10 == 1) {
                objArr[0] = "map";
            } else if (i10 == 2) {
                objArr[0] = "computation";
            } else if (i10 != 3) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$CacheWithNotNullValuesBasedOnMemoizedFunction";
            }
            if (i10 != 3) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$CacheWithNotNullValuesBasedOnMemoizedFunction";
            } else {
                objArr[1] = "computeIfAbsent";
            }
            if (i10 == 2) {
                objArr[2] = "computeIfAbsent";
            } else if (i10 != 3) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 == 3) {
                throw new IllegalStateException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.e, kotlin.reflect.jvm.internal.impl.storage.CacheWithNotNullValues
        public Object computeIfAbsent(Object obj, Function0 function0) {
            if (function0 == null) {
                a(2);
            }
            Object computeIfAbsent = super.computeIfAbsent(obj, function0);
            if (computeIfAbsent == null) {
                a(3);
            }
            return computeIfAbsent;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private d(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap) {
            super(lockBasedStorageManager, concurrentMap, null);
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (concurrentMap == null) {
                a(1);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends k implements CacheWithNullableValues {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements Function1 {
            a() {
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public Object invoke(f fVar) {
                return fVar.f34978b.invoke();
            }
        }

        /* synthetic */ e(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap, a aVar) {
            this(lockBasedStorageManager, concurrentMap);
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "map";
            } else if (i10 != 2) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "computation";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$CacheWithNullableValuesBasedOnMemoizedFunction";
            if (i10 != 2) {
                objArr[2] = "<init>";
            } else {
                objArr[2] = "computeIfAbsent";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        public Object computeIfAbsent(Object obj, Function0 function0) {
            if (function0 == null) {
                a(2);
            }
            return invoke(new f(obj, function0));
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private e(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap) {
            super(lockBasedStorageManager, concurrentMap, new a());
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (concurrentMap == null) {
                a(1);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f {

        /* renamed from: a  reason: collision with root package name */
        private final Object f34977a;

        /* renamed from: b  reason: collision with root package name */
        private final Function0 f34978b;

        public f(Object obj, Function0 function0) {
            this.f34977a = obj;
            this.f34978b = function0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && getClass() == obj.getClass() && this.f34977a.equals(((f) obj).f34977a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f34977a.hashCode();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class g implements NullableLazyValue {

        /* renamed from: d  reason: collision with root package name */
        private final LockBasedStorageManager f34979d;

        /* renamed from: e  reason: collision with root package name */
        private final Function0 f34980e;

        /* renamed from: i  reason: collision with root package name */
        private volatile Object f34981i;

        public g(LockBasedStorageManager lockBasedStorageManager, Function0 function0) {
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (function0 == null) {
                a(1);
            }
            this.f34981i = m.NOT_COMPUTED;
            this.f34979d = lockBasedStorageManager;
            this.f34980e = function0;
        }

        private static /* synthetic */ void a(int i10) {
            String str = (i10 == 2 || i10 == 3) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
            Object[] objArr = new Object[(i10 == 2 || i10 == 3) ? 2 : 3];
            if (i10 == 1) {
                objArr[0] = "computable";
            } else if (i10 == 2 || i10 == 3) {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValue";
            } else {
                objArr[0] = "storageManager";
            }
            if (i10 == 2) {
                objArr[1] = "recursionDetected";
            } else if (i10 != 3) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValue";
            } else {
                objArr[1] = "renderDebugInformation";
            }
            if (i10 != 2 && i10 != 3) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 != 2 && i10 != 3) {
                throw new IllegalArgumentException(format);
            }
            throw new IllegalStateException(format);
        }

        protected void b(Object obj) {
        }

        protected n c(boolean z10) {
            n e10 = this.f34979d.e("in a lazy value", null);
            if (e10 == null) {
                a(2);
            }
            return e10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object invoke;
            Object obj = this.f34981i;
            if (!(obj instanceof m)) {
                return WrappedValues.unescapeThrowable(obj);
            }
            this.f34979d.f34969a.lock();
            try {
                Object obj2 = this.f34981i;
                if (!(obj2 instanceof m)) {
                    invoke = WrappedValues.unescapeThrowable(obj2);
                } else {
                    m mVar = m.COMPUTING;
                    if (obj2 == mVar) {
                        this.f34981i = m.RECURSION_WAS_DETECTED;
                        n c10 = c(true);
                        if (!c10.c()) {
                            invoke = c10.b();
                        }
                    }
                    if (obj2 == m.RECURSION_WAS_DETECTED) {
                        n c11 = c(false);
                        if (!c11.c()) {
                            invoke = c11.b();
                        }
                    }
                    this.f34981i = mVar;
                    invoke = this.f34980e.invoke();
                    b(invoke);
                    this.f34981i = invoke;
                }
                return invoke;
            } finally {
                this.f34979d.f34969a.unlock();
            }
        }

        public boolean isComputed() {
            if (this.f34981i != m.NOT_COMPUTED && this.f34981i != m.COMPUTING) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static abstract class h extends g {

        /* renamed from: o  reason: collision with root package name */
        private volatile kotlin.reflect.jvm.internal.impl.storage.a f34982o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(LockBasedStorageManager lockBasedStorageManager, Function0 function0) {
            super(lockBasedStorageManager, function0);
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (function0 == null) {
                a(1);
            }
            this.f34982o = null;
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 != 1) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "computable";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValueWithPostCompute";
            objArr[2] = "<init>";
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g
        protected final void b(Object obj) {
            this.f34982o = new kotlin.reflect.jvm.internal.impl.storage.a(obj);
            try {
                d(obj);
            } finally {
                this.f34982o = null;
            }
        }

        protected abstract void d(Object obj);

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g, kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue, kotlin.jvm.functions.Function0
        public Object invoke() {
            kotlin.reflect.jvm.internal.impl.storage.a aVar = this.f34982o;
            if (aVar != null && aVar.b()) {
                return aVar.a();
            }
            return super.invoke();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class i extends g implements NotNullLazyValue {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(LockBasedStorageManager lockBasedStorageManager, Function0 function0) {
            super(lockBasedStorageManager, function0);
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (function0 == null) {
                a(1);
            }
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 2 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 2 ? 3 : 2];
            if (i10 == 1) {
                objArr[0] = "computable";
            } else if (i10 != 2) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedNotNullLazyValue";
            }
            if (i10 != 2) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedNotNullLazyValue";
            } else {
                objArr[1] = "invoke";
            }
            if (i10 != 2) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 == 2) {
                throw new IllegalStateException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g, kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object invoke = super.invoke();
            if (invoke == null) {
                a(2);
            }
            return invoke;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static abstract class j extends h implements NotNullLazyValue {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(LockBasedStorageManager lockBasedStorageManager, Function0 function0) {
            super(lockBasedStorageManager, function0);
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (function0 == null) {
                a(1);
            }
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 2 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 2 ? 3 : 2];
            if (i10 == 1) {
                objArr[0] = "computable";
            } else if (i10 != 2) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedNotNullLazyValueWithPostCompute";
            }
            if (i10 != 2) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedNotNullLazyValueWithPostCompute";
            } else {
                objArr[1] = "invoke";
            }
            if (i10 != 2) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 == 2) {
                throw new IllegalStateException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.h, kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.g, kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue, kotlin.jvm.functions.Function0
        public Object invoke() {
            Object invoke = super.invoke();
            if (invoke == null) {
                a(2);
            }
            return invoke;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class k implements MemoizedFunctionToNullable {

        /* renamed from: d  reason: collision with root package name */
        private final LockBasedStorageManager f34983d;

        /* renamed from: e  reason: collision with root package name */
        private final ConcurrentMap f34984e;

        /* renamed from: i  reason: collision with root package name */
        private final Function1 f34985i;

        public k(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap, Function1 function1) {
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (concurrentMap == null) {
                a(1);
            }
            if (function1 == null) {
                a(2);
            }
            this.f34983d = lockBasedStorageManager;
            this.f34984e = concurrentMap;
            this.f34985i = function1;
        }

        private static /* synthetic */ void a(int i10) {
            String str = (i10 == 3 || i10 == 4) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
            Object[] objArr = new Object[(i10 == 3 || i10 == 4) ? 2 : 3];
            if (i10 == 1) {
                objArr[0] = "map";
            } else if (i10 == 2) {
                objArr[0] = "compute";
            } else if (i10 == 3 || i10 == 4) {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunction";
            } else {
                objArr[0] = "storageManager";
            }
            if (i10 == 3) {
                objArr[1] = "recursionDetected";
            } else if (i10 != 4) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunction";
            } else {
                objArr[1] = "raceCondition";
            }
            if (i10 != 3 && i10 != 4) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 != 3 && i10 != 4) {
                throw new IllegalArgumentException(format);
            }
            throw new IllegalStateException(format);
        }

        private AssertionError b(Object obj, Object obj2) {
            return (AssertionError) LockBasedStorageManager.f(new AssertionError("Inconsistent key detected. " + m.COMPUTING + " is expected, was: " + obj2 + ", most probably race condition detected on input " + obj + " under " + this.f34983d));
        }

        private AssertionError c(Object obj, Object obj2) {
            AssertionError assertionError = (AssertionError) LockBasedStorageManager.f(new AssertionError("Race condition detected on input " + obj + ". Old value is " + obj2 + " under " + this.f34983d));
            if (assertionError == null) {
                a(4);
            }
            return assertionError;
        }

        private AssertionError e(Object obj, Throwable th2) {
            return (AssertionError) LockBasedStorageManager.f(new AssertionError("Unable to remove " + obj + " under " + this.f34983d, th2));
        }

        protected n d(Object obj, boolean z10) {
            n e10 = this.f34983d.e("", obj);
            if (e10 == null) {
                a(3);
            }
            return e10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable, kotlin.jvm.functions.Function1
        public Object invoke(Object obj) {
            Object unescapeExceptionOrNull;
            Object obj2 = this.f34984e.get(obj);
            if (obj2 != null && obj2 != m.COMPUTING) {
                return WrappedValues.unescapeExceptionOrNull(obj2);
            }
            this.f34983d.f34969a.lock();
            try {
                Object obj3 = this.f34984e.get(obj);
                m mVar = m.COMPUTING;
                if (obj3 == mVar) {
                    obj3 = m.RECURSION_WAS_DETECTED;
                    n d10 = d(obj, true);
                    if (!d10.c()) {
                        unescapeExceptionOrNull = d10.b();
                        return unescapeExceptionOrNull;
                    }
                }
                if (obj3 == m.RECURSION_WAS_DETECTED) {
                    n d11 = d(obj, false);
                    if (!d11.c()) {
                        unescapeExceptionOrNull = d11.b();
                        return unescapeExceptionOrNull;
                    }
                }
                if (obj3 != null) {
                    unescapeExceptionOrNull = WrappedValues.unescapeExceptionOrNull(obj3);
                    return unescapeExceptionOrNull;
                }
                this.f34984e.put(obj, mVar);
                Object invoke = this.f34985i.invoke(obj);
                Object put = this.f34984e.put(obj, WrappedValues.escapeNull(invoke));
                if (put == mVar) {
                    return invoke;
                }
                throw c(obj, put);
            } finally {
                this.f34983d.f34969a.unlock();
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable
        public boolean isComputed(Object obj) {
            Object obj2 = this.f34984e.get(obj);
            if (obj2 != null && obj2 != m.COMPUTING) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class l extends k implements MemoizedFunctionToNotNull {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(LockBasedStorageManager lockBasedStorageManager, ConcurrentMap concurrentMap, Function1 function1) {
            super(lockBasedStorageManager, concurrentMap, function1);
            if (lockBasedStorageManager == null) {
                a(0);
            }
            if (concurrentMap == null) {
                a(1);
            }
            if (function1 == null) {
                a(2);
            }
        }

        private static /* synthetic */ void a(int i10) {
            String str = i10 != 3 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
            Object[] objArr = new Object[i10 != 3 ? 3 : 2];
            if (i10 == 1) {
                objArr[0] = "map";
            } else if (i10 == 2) {
                objArr[0] = "compute";
            } else if (i10 != 3) {
                objArr[0] = "storageManager";
            } else {
                objArr[0] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull";
            }
            if (i10 != 3) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull";
            } else {
                objArr[1] = "invoke";
            }
            if (i10 != 3) {
                objArr[2] = "<init>";
            }
            String format = String.format(str, objArr);
            if (i10 == 3) {
                throw new IllegalStateException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.k, kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable, kotlin.jvm.functions.Function1
        public Object invoke(Object obj) {
            Object invoke = super.invoke(obj);
            if (invoke == null) {
                a(3);
            }
            return invoke;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum m {
        NOT_COMPUTED,
        COMPUTING,
        RECURSION_WAS_DETECTED
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class n {

        /* renamed from: a  reason: collision with root package name */
        private final Object f34990a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f34991b;

        private n(Object obj, boolean z10) {
            this.f34990a = obj;
            this.f34991b = z10;
        }

        public static n a() {
            return new n(null, true);
        }

        public static n d(Object obj) {
            return new n(obj, false);
        }

        public Object b() {
            return this.f34990a;
        }

        public boolean c() {
            return this.f34991b;
        }

        public String toString() {
            if (c()) {
                return "FALL_THROUGH";
            }
            return String.valueOf(this.f34990a);
        }
    }

    /* synthetic */ LockBasedStorageManager(String str, ExceptionHandlingStrategy exceptionHandlingStrategy, SimpleLock simpleLock, a aVar) {
        this(str, exceptionHandlingStrategy, simpleLock);
    }

    /* JADX WARN: Removed duplicated region for block: B:45:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x008a  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x008d  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x0092  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0095  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x009a  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x009f  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00a4  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00a9  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00ae  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x00b3  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x00b6  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x00b9  */
    /* JADX WARN: Removed duplicated region for block: B:58:0x00be  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ void a(int r13) {
        /*
            Method dump skipped, instructions count: 354
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager.a(int):void");
    }

    static /* synthetic */ ExceptionHandlingStrategy b(LockBasedStorageManager lockBasedStorageManager) {
        return lockBasedStorageManager.f34970b;
    }

    private static ConcurrentMap d() {
        return new ConcurrentHashMap(3, 1.0f, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Throwable f(Throwable th2) {
        if (th2 == null) {
            a(36);
        }
        StackTraceElement[] stackTrace = th2.getStackTrace();
        int length = stackTrace.length;
        int i10 = 0;
        while (true) {
            if (i10 < length) {
                if (!stackTrace[i10].getClassName().startsWith(f34968d)) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        List subList = Arrays.asList(stackTrace).subList(i10, length);
        th2.setStackTrace((StackTraceElement[]) subList.toArray(new StackTraceElement[subList.size()]));
        return th2;
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    public <T> T compute(@NotNull Function0<? extends T> function0) {
        if (function0 == null) {
            a(34);
        }
        this.f34969a.lock();
        try {
            return (T) function0.invoke();
        } finally {
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <K, V> CacheWithNotNullValues<K, V> createCacheWithNotNullValues() {
        return new d(this, d(), null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <K, V> CacheWithNullableValues<K, V> createCacheWithNullableValues() {
        return new e(this, d(), null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <T> NotNullLazyValue<T> createLazyValue(@NotNull Function0<? extends T> function0) {
        if (function0 == null) {
            a(23);
        }
        return new i(this, function0);
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <T> NotNullLazyValue<T> createLazyValueWithPostCompute(@NotNull Function0<? extends T> function0, Function1<? super Boolean, ? extends T> function1, @NotNull Function1<? super T, Unit> function12) {
        if (function0 == null) {
            a(28);
        }
        if (function12 == null) {
            a(29);
        }
        return new c(this, function0, function1, function12);
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <K, V> MemoizedFunctionToNotNull<K, V> createMemoizedFunction(@NotNull Function1<? super K, ? extends V> function1) {
        if (function1 == null) {
            a(9);
        }
        MemoizedFunctionToNotNull<K, V> createMemoizedFunction = createMemoizedFunction(function1, d());
        if (createMemoizedFunction == null) {
            a(10);
        }
        return createMemoizedFunction;
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <K, V> MemoizedFunctionToNullable<K, V> createMemoizedFunctionWithNullableValues(@NotNull Function1<? super K, ? extends V> function1) {
        if (function1 == null) {
            a(19);
        }
        MemoizedFunctionToNullable<K, V> createMemoizedFunctionWithNullableValues = createMemoizedFunctionWithNullableValues(function1, d());
        if (createMemoizedFunctionWithNullableValues == null) {
            a(20);
        }
        return createMemoizedFunctionWithNullableValues;
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <T> NullableLazyValue<T> createNullableLazyValue(@NotNull Function0<? extends T> function0) {
        if (function0 == null) {
            a(30);
        }
        return new g(this, function0);
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.StorageManager
    @NotNull
    public <T> NotNullLazyValue<T> createRecursionTolerantLazyValue(@NotNull Function0<? extends T> function0, @NotNull T t10) {
        if (function0 == null) {
            a(26);
        }
        if (t10 == null) {
            a(27);
        }
        return new b(this, function0, t10);
    }

    protected n e(String str, Object obj) {
        String str2;
        if (str == null) {
            a(35);
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Recursion detected ");
        sb2.append(str);
        if (obj == null) {
            str2 = "";
        } else {
            str2 = "on input: " + obj;
        }
        sb2.append(str2);
        sb2.append(" under ");
        sb2.append(this);
        throw ((AssertionError) f(new AssertionError(sb2.toString())));
    }

    public String toString() {
        return getClass().getSimpleName() + "@" + Integer.toHexString(hashCode()) + " (" + this.f34971c + ")";
    }

    private LockBasedStorageManager(String str, ExceptionHandlingStrategy exceptionHandlingStrategy, SimpleLock simpleLock) {
        if (str == null) {
            a(4);
        }
        if (exceptionHandlingStrategy == null) {
            a(5);
        }
        if (simpleLock == null) {
            a(6);
        }
        this.f34969a = simpleLock;
        this.f34970b = exceptionHandlingStrategy;
        this.f34971c = str;
    }

    @NotNull
    public <K, V> MemoizedFunctionToNotNull<K, V> createMemoizedFunction(@NotNull Function1<? super K, ? extends V> function1, @NotNull ConcurrentMap<K, Object> concurrentMap) {
        if (function1 == null) {
            a(14);
        }
        if (concurrentMap == null) {
            a(15);
        }
        return new l(this, concurrentMap, function1);
    }

    @NotNull
    public <K, V> MemoizedFunctionToNullable<K, V> createMemoizedFunctionWithNullableValues(@NotNull Function1<? super K, ? extends V> function1, @NotNull ConcurrentMap<K, Object> concurrentMap) {
        if (function1 == null) {
            a(21);
        }
        if (concurrentMap == null) {
            a(22);
        }
        return new k(this, concurrentMap, function1);
    }

    public LockBasedStorageManager(String str) {
        this(str, (Runnable) null, (Function1<InterruptedException, Unit>) null);
    }

    public LockBasedStorageManager(String str, Runnable runnable, Function1<InterruptedException, Unit> function1) {
        this(str, ExceptionHandlingStrategy.THROW, SimpleLock.Companion.simpleLock(runnable, function1));
    }
}
