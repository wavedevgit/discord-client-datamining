package yv;

import java.util.List;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import yv.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements su.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final i f55694a = new i();

    private i() {
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        Object b10;
        List c10 = cw.a.c(obj);
        try {
            Result.a aVar = Result.f32053e;
            Object obj3 = c10.get(0);
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
            Object obj4 = c10.get(1);
            Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type kotlin.String");
            Object obj5 = c10.get(2);
            Intrinsics.checkNotNull(obj5, "null cannot be cast to non-null type kotlin.String");
            j jVar = new j((String) obj3, (String) obj4, (String) obj5);
            k.a aVar2 = k.f55698d;
            Object obj6 = c10.get(3);
            Intrinsics.checkNotNull(obj6, "null cannot be cast to non-null type kotlin.String");
            b10 = Result.b(aVar2.a((String) obj6, jVar).invoke());
        } catch (Throwable th2) {
            Result.a aVar3 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) != null) {
            return null;
        }
        return b10;
    }
}
