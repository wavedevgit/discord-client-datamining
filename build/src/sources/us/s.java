package us;

import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s {

    /* renamed from: b  reason: collision with root package name */
    public static final a f50989b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final s f50990c = new s(CollectionsKt.o("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));

    /* renamed from: d  reason: collision with root package name */
    private static final s f50991d = new s(CollectionsKt.o("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"));

    /* renamed from: a  reason: collision with root package name */
    private final List f50992a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final s a() {
            return s.f50991d;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f50993d = new b();

        b() {
            super(1, String.class, "toString", "toString()Ljava/lang/String;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        public final String invoke(String p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return p02.toString();
        }
    }

    public s(List names) {
        Intrinsics.checkNotNullParameter(names, "names");
        this.f50992a = names;
        if (names.size() == 7) {
            Iterator it = CollectionsKt.m(names).iterator();
            while (it.hasNext()) {
                int nextInt = ((kotlin.collections.m0) it).nextInt();
                if (((CharSequence) this.f50992a.get(nextInt)).length() > 0) {
                    for (int i10 = 0; i10 < nextInt; i10++) {
                        if (Intrinsics.areEqual(this.f50992a.get(nextInt), this.f50992a.get(i10))) {
                            throw new IllegalArgumentException(("Day-of-week names must be unique, but '" + ((String) this.f50992a.get(nextInt)) + "' was repeated").toString());
                        }
                    }
                } else {
                    throw new IllegalArgumentException("A day-of-week name can not be empty");
                }
            }
            return;
        }
        throw new IllegalArgumentException("Day of week names must contain exactly 7 elements");
    }

    public final List b() {
        return this.f50992a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof s) && Intrinsics.areEqual(this.f50992a, ((s) obj).f50992a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f50992a.hashCode();
    }

    public String toString() {
        return CollectionsKt.x0(this.f50992a, ", ", "DayOfWeekNames(", ")", 0, null, b.f50993d, 24, null);
    }
}
