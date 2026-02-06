package zs;

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
                b q10 = bVar.q();
                function1.invoke(q10);
                arrayList.add(q10.a().b());
            }
            b q11 = bVar.q();
            mainFormat.invoke(q11);
            bVar.a().a(new bt.c(q11.a().b(), arrayList));
        }

        public static void b(b bVar, String onZero, Function1 format) {
            Intrinsics.checkNotNullParameter(onZero, "onZero");
            Intrinsics.checkNotNullParameter(format, "format");
            bt.d a10 = bVar.a();
            b q10 = bVar.q();
            format.invoke(q10);
            Unit unit = Unit.f32008a;
            a10.a(new bt.t(onZero, q10.a().b()));
        }

        public static bt.f c(b bVar) {
            return new bt.f(bVar.a().b().c());
        }

        public static void d(b bVar, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            bVar.a().a(new bt.j(value));
        }
    }

    bt.d a();

    void b(String str, Function1 function1);

    void k(Function1[] function1Arr, Function1 function1);

    b q();
}
