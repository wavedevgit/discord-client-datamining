package kotlin;

import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f31766a;

    static {
        Result.a aVar = Result.f31762e;
        f31766a = Result.b(xr.b.f());
    }

    public static final Object b(rr.a aVar, Object obj) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new b(aVar.a(), obj).d();
    }
}
