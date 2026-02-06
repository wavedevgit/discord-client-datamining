package tu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
import tu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b extends tu.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static List a(b bVar, Comparable comparable, Comparable comparable2) {
            boolean z10 = comparable instanceof Number;
            if (z10 && (comparable2 instanceof Number)) {
                return CollectionsKt.o(Double.valueOf(((Number) comparable).doubleValue()), Double.valueOf(((Number) comparable2).doubleValue()));
            }
            if ((comparable instanceof String) && (comparable2 instanceof Number)) {
                return CollectionsKt.o(StringsKt.p((String) comparable), Double.valueOf(((Number) comparable2).doubleValue()));
            }
            if (z10 && (comparable2 instanceof String)) {
                return CollectionsKt.o(Double.valueOf(((Number) comparable).doubleValue()), StringsKt.p((String) comparable2));
            }
            if (!(comparable instanceof Boolean) && !(comparable2 instanceof Boolean)) {
                return bVar.d(comparable, comparable2);
            }
            return CollectionsKt.o(bVar.c(comparable), bVar.c(comparable2));
        }

        public static List b(b bVar, Comparable comparable, Comparable comparable2) {
            if (comparable != null && comparable2 != null && comparable.getClass() == comparable2.getClass()) {
                return CollectionsKt.o(comparable, comparable2);
            }
            if (comparable == null && comparable2 == null) {
                return CollectionsKt.o((Void) comparable, (Void) comparable2);
            }
            return null;
        }

        public static Boolean c(b bVar, Object obj) {
            return a.C0672a.a(bVar, obj);
        }
    }

    List d(Comparable comparable, Comparable comparable2);

    List g(Comparable comparable, Comparable comparable2);
}
