package kotlin;

import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f32557a;

    static {
        Result.a aVar = Result.f32553e;
        f32557a = Result.b(gs.b.f());
    }

    public static final Object b(as.a aVar, Object obj) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new b(aVar.a(), obj).d();
    }
}
