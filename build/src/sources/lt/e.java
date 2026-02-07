package lt;

import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a */
    private static final int f36697a;

    static {
        Object b10;
        int i10;
        try {
            Result.a aVar = Result.f32053e;
            String property = System.getProperty("kotlinx.serialization.json.pool.size");
            Intrinsics.checkNotNullExpressionValue(property, "getProperty(...)");
            b10 = Result.b(StringsKt.toIntOrNull(property));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        Integer num = (Integer) b10;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 2097152;
        }
        f36697a = i10;
    }

    public static final /* synthetic */ int a() {
        return f36697a;
    }
}
