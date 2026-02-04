package xu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import xu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements nu.b, c {

    /* renamed from: a  reason: collision with root package name */
    public static final d f53576a = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f53577d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Double invoke(List it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return CollectionsKt.D0(it);
        }
    }

    private d() {
    }

    public Double a(Object obj, Function1 function1) {
        return c.a.a(this, obj, function1);
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        return a(obj, a.f53577d);
    }
}
