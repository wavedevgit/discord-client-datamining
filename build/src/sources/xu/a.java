package xu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import xu.c;
import zu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements nu.b, c, zu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f53576a = new a();

    /* renamed from: xu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0727a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0727a f53577d = new C0727a();

        C0727a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Double invoke(List it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Double.valueOf(CollectionsKt.Y0(it));
        }
    }

    private a() {
    }

    public Double a(Object obj, Function1 function1) {
        return c.a.a(this, obj, function1);
    }

    public List b(Object obj) {
        return b.a.b(this, obj);
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        return a(b(obj), C0727a.f53577d);
    }
}
