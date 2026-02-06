package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.w;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f4143b = true;

    /* renamed from: d  reason: collision with root package name */
    private static volatile o f4145d;

    /* renamed from: a  reason: collision with root package name */
    private final Map f4147a = Collections.EMPTY_MAP;

    /* renamed from: c  reason: collision with root package name */
    private static final Class f4144c = c();

    /* renamed from: e  reason: collision with root package name */
    static final o f4146e = new o(true);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f4148a;

        /* renamed from: b  reason: collision with root package name */
        private final int f4149b;

        a(Object obj, int i10) {
            this.f4148a = obj;
            this.f4149b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f4148a != aVar.f4148a || this.f4149b != aVar.f4149b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f4148a) * 65535) + this.f4149b;
        }
    }

    o(boolean z10) {
    }

    public static o b() {
        o oVar;
        o oVar2 = f4145d;
        if (oVar2 == null) {
            synchronized (o.class) {
                try {
                    oVar = f4145d;
                    if (oVar == null) {
                        if (f4143b) {
                            oVar = n.a();
                        } else {
                            oVar = f4146e;
                        }
                        f4145d = oVar;
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
        android.support.v4.media.session.b.a(this.f4147a.get(new a(o0Var, i10)));
        return null;
    }
}
