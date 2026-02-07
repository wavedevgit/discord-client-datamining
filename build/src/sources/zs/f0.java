package zs;

import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 {

    /* renamed from: b  reason: collision with root package name */
    public static final a f56518b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final f0 f56519c = new f0(CollectionsKt.o("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"));

    /* renamed from: d  reason: collision with root package name */
    private static final f0 f56520d = new f0(CollectionsKt.o("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"));

    /* renamed from: a  reason: collision with root package name */
    private final List f56521a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final f0 a() {
            return f0.f56520d;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f56522d = new b();

        b() {
            super(1, String.class, "toString", "toString()Ljava/lang/String;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        public final String invoke(String p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return p02.toString();
        }
    }

    public f0(List names) {
        Intrinsics.checkNotNullParameter(names, "names");
        this.f56521a = names;
        if (names.size() == 12) {
            Iterator it = CollectionsKt.m(names).iterator();
            while (it.hasNext()) {
                int nextInt = ((kotlin.collections.m0) it).nextInt();
                if (((CharSequence) this.f56521a.get(nextInt)).length() > 0) {
                    for (int i10 = 0; i10 < nextInt; i10++) {
                        if (Intrinsics.areEqual(this.f56521a.get(nextInt), this.f56521a.get(i10))) {
                            throw new IllegalArgumentException(("Month names must be unique, but '" + ((String) this.f56521a.get(nextInt)) + "' was repeated").toString());
                        }
                    }
                } else {
                    throw new IllegalArgumentException("A month name can not be empty");
                }
            }
            return;
        }
        throw new IllegalArgumentException("Month names must contain exactly 12 elements");
    }

    public final List b() {
        return this.f56521a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof f0) && Intrinsics.areEqual(this.f56521a, ((f0) obj).f56521a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f56521a.hashCode();
    }

    public String toString() {
        return CollectionsKt.x0(this.f56521a, ", ", "MonthNames(", ")", 0, null, b.f56522d, 24, null);
    }
}
