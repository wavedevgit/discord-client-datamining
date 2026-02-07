package gf;

import android.os.Bundle;
import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class x implements a.d {

    /* renamed from: e  reason: collision with root package name */
    public static final x f25204e = a().a();

    /* renamed from: d  reason: collision with root package name */
    private final String f25205d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f25206a;

        /* synthetic */ a(z zVar) {
        }

        public x a() {
            return new x(this.f25206a, null);
        }

        public a b(String str) {
            this.f25206a = str;
            return this;
        }
    }

    /* synthetic */ x(String str, a0 a0Var) {
        this.f25205d = str;
    }

    public static a a() {
        return new a(null);
    }

    public final Bundle b() {
        Bundle bundle = new Bundle();
        String str = this.f25205d;
        if (str != null) {
            bundle.putString("api", str);
        }
        return bundle;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        return o.a(this.f25205d, ((x) obj).f25205d);
    }

    public final int hashCode() {
        return o.b(this.f25205d);
    }
}
