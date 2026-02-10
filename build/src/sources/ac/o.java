package ac;

import ac.d;
import android.util.Base64;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract o a();

        public abstract a b(String str);

        public abstract a c(byte[] bArr);

        public abstract a d(yb.e eVar);
    }

    public static a a() {
        return new d.b().d(yb.e.DEFAULT);
    }

    public abstract String b();

    public abstract byte[] c();

    public abstract yb.e d();

    public boolean e() {
        if (c() != null) {
            return true;
        }
        return false;
    }

    public o f(yb.e eVar) {
        return a().b(b()).d(eVar).c(c()).a();
    }

    public final String toString() {
        String encodeToString;
        String b10 = b();
        yb.e d10 = d();
        if (c() == null) {
            encodeToString = "";
        } else {
            encodeToString = Base64.encodeToString(c(), 2);
        }
        return String.format("TransportContext(%s, %s, %s)", b10, d10, encodeToString);
    }
}
