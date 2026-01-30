package kotlin;

import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f33299a;

    static {
        Result.a aVar = Result.f33295e;
        f33299a = Result.b(or.b.f());
    }

    public static final Object b(ir.a aVar, Object obj) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new b(aVar.a(), obj).e();
    }
}
