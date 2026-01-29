package lu;

import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: lu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0484a {
        public static Boolean a(a aVar, Object obj) {
            Double p10;
            if (obj instanceof Boolean) {
                return (Boolean) obj;
            }
            boolean z10 = false;
            if (obj instanceof Number) {
                if (((Number) obj).longValue() > 0) {
                    z10 = true;
                }
                return Boolean.valueOf(z10);
            } else if (!(obj instanceof String) || (p10 = StringsKt.p((String) obj)) == null) {
                return null;
            } else {
                if (((long) p10.doubleValue()) > 0) {
                    z10 = true;
                }
                return Boolean.valueOf(z10);
            }
        }
    }

    Boolean c(Object obj);
}
