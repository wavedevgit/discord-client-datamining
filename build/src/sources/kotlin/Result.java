package kotlin;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Result implements Serializable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f31984e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Object f31985d;

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
        public final Throwable f31986d;

        public b(Throwable exception) {
            Intrinsics.checkNotNullParameter(exception, "exception");
            this.f31986d = exception;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof b) && Intrinsics.areEqual(this.f31986d, ((b) obj).f31986d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f31986d.hashCode();
        }

        public String toString() {
            return "Failure(" + this.f31986d + ')';
        }
    }

    private /* synthetic */ Result(Object obj) {
        this.f31985d = obj;
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
            return ((b) obj).f31986d;
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
        return c(this.f31985d, obj);
    }

    public int hashCode() {
        return f(this.f31985d);
    }

    public final /* synthetic */ Object j() {
        return this.f31985d;
    }

    public String toString() {
        return i(this.f31985d);
    }
}
