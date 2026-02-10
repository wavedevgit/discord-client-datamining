package at;

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
                b l10 = bVar.l();
                function1.invoke(l10);
                arrayList.add(l10.a().b());
            }
            b l11 = bVar.l();
            mainFormat.invoke(l11);
            bVar.a().a(new ct.c(l11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            ct.d a10 = bVar.a();
            b l10 = bVar.l();
            format.invoke(l10);
            Unit unit = Unit.f31765a;
            a10.a(new ct.t(onZero, l10.a().b()));
        }

        public static ct.f c(b bVar) {
            return new ct.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new ct.j(value));
        }
    }

    ct.d a();

    void b(String str, Function1 function1);

    void j(Function1[] function1Arr, Function1 function1);

    b l();
}
