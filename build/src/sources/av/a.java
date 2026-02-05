package av;

import av.c;
import cv.b;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements qu.b, c, cv.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f6002a = new a();

    /* renamed from: av.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0089a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0089a f6003d = new C0089a();

        C0089a() {
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

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        return a(b(obj), C0089a.f6003d);
    }
}
