package rs;

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
                b k10 = bVar.k();
                function1.invoke(k10);
                arrayList.add(k10.a().b());
            }
            b k11 = bVar.k();
            mainFormat.invoke(k11);
            bVar.a().a(new ts.c(k11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            ts.d a10 = bVar.a();
            b k10 = bVar.k();
            format.invoke(k10);
            Unit unit = Unit.f33282a;
            a10.a(new ts.t(onZero, k10.a().b()));
        }

        public static ts.f c(b bVar) {
            return new ts.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new ts.j(value));
        }
    }

    ts.d a();

    void b(String str, Function1 function1);

    void g(Function1[] function1Arr, Function1 function1);

    b k();
}
