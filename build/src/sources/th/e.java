package th;

import android.os.Bundle;
import java.util.Date;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {
        public abstract e a();

        public abstract a b(Integer num);

        public abstract a c(Integer num);

        public abstract a d(String str);

        public abstract a e(Date date);

        public abstract a f(Integer num);
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.lang.Object, th.e$a] */
    public static a c() {
        return new Object();
    }

    public static e g(Bundle bundle) {
        Date date;
        if (!bundle.containsKey("user.status")) {
            return c().a();
        }
        a c10 = c();
        c10.f(h(bundle, "user.status"));
        c10.b(h(bundle, "age.range.lower"));
        c10.c(h(bundle, "age.range.upper"));
        String str = null;
        if (bundle.containsKey("most.recent.approval.date")) {
            date = new Date(bundle.getLong("most.recent.approval.date"));
        } else {
            date = null;
        }
        c10.e(date);
        if (bundle.containsKey("install.id")) {
            str = bundle.getString("install.id");
        }
        c10.d(str);
        return c10.a();
    }

    private static Integer h(Bundle bundle, String str) {
        if (bundle.containsKey(str)) {
            return Integer.valueOf(bundle.getInt(str));
        }
        return null;
    }

    public abstract Integer a();

    public abstract Integer b();

    public abstract String d();

    public abstract Date e();

    public abstract Integer f();
}
