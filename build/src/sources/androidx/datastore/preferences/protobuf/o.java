package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.w;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f3840b = true;

    /* renamed from: d  reason: collision with root package name */
    private static volatile o f3842d;

    /* renamed from: a  reason: collision with root package name */
    private final Map f3844a = Collections.EMPTY_MAP;

    /* renamed from: c  reason: collision with root package name */
    private static final Class f3841c = c();

    /* renamed from: e  reason: collision with root package name */
    static final o f3843e = new o(true);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f3845a;

        /* renamed from: b  reason: collision with root package name */
        private final int f3846b;

        a(Object obj, int i10) {
            this.f3845a = obj;
            this.f3846b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f3845a != aVar.f3845a || this.f3846b != aVar.f3846b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f3845a) * 65535) + this.f3846b;
        }
    }

    o(boolean z10) {
    }

    public static o b() {
        o oVar;
        o oVar2 = f3842d;
        if (oVar2 == null) {
            synchronized (o.class) {
                try {
                    oVar = f3842d;
                    if (oVar == null) {
                        if (f3840b) {
                            oVar = n.a();
                        } else {
                            oVar = f3843e;
                        }
                        f3842d = oVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return oVar;
        }
        return oVar2;
    }

    static Class c() {
        try {
            return Class.forName("androidx.datastore.preferences.protobuf.Extension");
        } catch (ClassNotFoundException unused) {
            return null;
        }
    }

    public w.c a(o0 o0Var, int i10) {
        android.support.v4.media.session.b.a(this.f3844a.get(new a(o0Var, i10)));
        return null;
    }
}
