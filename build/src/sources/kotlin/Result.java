package kotlin;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Result implements Serializable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f32005e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Object f32006d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Serializable {

        /* renamed from: d  reason: collision with root package name */
        public final Throwable f32007d;

        public b(Throwable exception) {
            Intrinsics.checkNotNullParameter(exception, "exception");
            this.f32007d = exception;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof b) && Intrinsics.areEqual(this.f32007d, ((b) obj).f32007d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f32007d.hashCode();
        }

        public String toString() {
            return "Failure(" + this.f32007d + ')';
        }
    }

    private /* synthetic */ Result(Object obj) {
        this.f32006d = obj;
    }

    public static final /* synthetic */ Result a(Object obj) {
        return new Result(obj);
    }

    public static Object b(Object obj) {
        return obj;
    }

    public static boolean c(Object obj, Object obj2) {
        return (obj2 instanceof Result) && Intrinsics.areEqual(obj, ((Result) obj2).j());
    }

    public static final boolean d(Object obj, Object obj2) {
        return Intrinsics.areEqual(obj, obj2);
    }

    public static final Throwable e(Object obj) {
        if (obj instanceof b) {
            return ((b) obj).f32007d;
        }
        return null;
    }

    public static int f(Object obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }

    public static final boolean g(Object obj) {
        return obj instanceof b;
    }

    public static final boolean h(Object obj) {
        return !(obj instanceof b);
    }

    public static String i(Object obj) {
        if (obj instanceof b) {
            return ((b) obj).toString();
        }
        return "Success(" + obj + ')';
    }

    public boolean equals(Object obj) {
        return c(this.f32006d, obj);
    }

    public int hashCode() {
        return f(this.f32006d);
    }

    public final /* synthetic */ Object j() {
        return this.f32006d;
    }

    public String toString() {
        return i(this.f32006d);
    }
}
