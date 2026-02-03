package us;

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
                b i10 = bVar.i();
                function1.invoke(i10);
                arrayList.add(i10.a().b());
            }
            b i11 = bVar.i();
            mainFormat.invoke(i11);
            bVar.a().a(new ws.c(i11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            ws.d a10 = bVar.a();
            b i10 = bVar.i();
            format.invoke(i10);
            Unit unit = Unit.f32464a;
            a10.a(new ws.t(onZero, i10.a().b()));
        }

        public static ws.f c(b bVar) {
            return new ws.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new ws.j(value));
        }
    }

    ws.d a();

    void b(String str, Function1 function1);

    void f(Function1[] function1Arr, Function1 function1);

    b i();
}
