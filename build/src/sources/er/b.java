package er;

import cw.c;
import java.util.List;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        private static String a(b bVar, String str, String str2, Function2 function2) {
            Double p10;
            if (!new Regex("%[\\d|.]*[f]").i(str) || (p10 = StringsKt.p(str2)) == null) {
                return null;
            }
            return (String) function2.invoke(str, Double.valueOf(p10.doubleValue()));
        }

        public static String b(b bVar, Object obj, Object obj2, Function2 formatFloatingPoint) {
            Object b10;
            Intrinsics.checkNotNullParameter(formatFloatingPoint, "formatFloatingPoint");
            List c10 = cw.a.c(obj);
            String valueOf = String.valueOf(CollectionsKt.firstOrNull(c10));
            String valueOf2 = String.valueOf(c.b(c10));
            try {
                Result.a aVar = Result.f32053e;
                b10 = Result.b(a(bVar, valueOf, valueOf2, formatFloatingPoint));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32053e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            if (Result.e(b10) == null) {
                return (String) b10;
            }
            return null;
        }
    }
}
