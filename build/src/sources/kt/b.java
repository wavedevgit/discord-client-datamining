package kt;

import java.util.ArrayList;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b extends o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(b bVar, Function1[] otherFormats, Function1 mainFormat) {
            Intrinsics.checkNotNullParameter(otherFormats, "otherFormats");
            Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
            ArrayList arrayList = new ArrayList(otherFormats.length);
            for (Function1 function1 : otherFormats) {
                b g10 = bVar.g();
                function1.invoke(g10);
                arrayList.add(g10.a().b());
            }
            b g11 = bVar.g();
            mainFormat.invoke(g11);
            bVar.a().a(new mt.c(g11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            mt.d a10 = bVar.a();
            b g10 = bVar.g();
            format.invoke(g10);
            Unit unit = Unit.f31988a;
            a10.a(new mt.t(onZero, g10.a().b()));
        }

        public static mt.f c(b bVar) {
            return new mt.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new mt.j(value));
        }
    }

    mt.d a();

    void b(String str, Function1 function1);

    void e(Function1[] function1Arr, Function1 function1);

    b g();
}
