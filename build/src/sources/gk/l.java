package gk;

import gk.s;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f25357b = true;

    /* renamed from: c  reason: collision with root package name */
    private static volatile l f25358c;

    /* renamed from: d  reason: collision with root package name */
    static final l f25359d = new l(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f25360a = Collections.EMPTY_MAP;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f25361a;

        /* renamed from: b  reason: collision with root package name */
        private final int f25362b;

        a(Object obj, int i10) {
            this.f25361a = obj;
            this.f25362b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f25361a != aVar.f25361a || this.f25362b != aVar.f25362b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f25361a) * 65535) + this.f25362b;
        }
    }

    l(boolean z10) {
    }

    public static l b() {
        l lVar;
        if (!f25357b) {
            return f25359d;
        }
        l lVar2 = f25358c;
        if (lVar2 == null) {
            synchronized (l.class) {
                try {
                    lVar = f25358c;
                    if (lVar == null) {
                        lVar = k.a();
                        f25358c = lVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return lVar;
        }
        return lVar2;
    }

    public s.c a(i0 i0Var, int i10) {
        android.support.v4.media.session.b.a(this.f25360a.get(new a(i0Var, i10)));
        return null;
    }
}
