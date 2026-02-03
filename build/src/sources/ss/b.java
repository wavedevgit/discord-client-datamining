package ss;

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
                b j10 = bVar.j();
                function1.invoke(j10);
                arrayList.add(j10.a().b());
            }
            b j11 = bVar.j();
            mainFormat.invoke(j11);
            bVar.a().a(new us.c(j11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            us.d a10 = bVar.a();
            b j10 = bVar.j();
            format.invoke(j10);
            Unit unit = Unit.f33074a;
            a10.a(new us.t(onZero, j10.a().b()));
        }

        public static us.f c(b bVar) {
            return new us.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new us.j(value));
        }
    }

    us.d a();

    void b(String str, Function1 function1);

    void f(Function1[] function1Arr, Function1 function1);

    b j();
}
