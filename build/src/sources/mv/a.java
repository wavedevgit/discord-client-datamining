package mv;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import mv.c;
import ov.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements cv.b, c, ov.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f36665a = new a();

    /* renamed from: mv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0520a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0520a f36666d = new C0520a();

        C0520a() {
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

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        return a(b(obj), C0520a.f36666d);
    }
}
