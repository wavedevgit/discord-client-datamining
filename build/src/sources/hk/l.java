package hk;

import hk.s;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f26268b = true;

    /* renamed from: c  reason: collision with root package name */
    private static volatile l f26269c;

    /* renamed from: d  reason: collision with root package name */
    static final l f26270d = new l(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f26271a = Collections.EMPTY_MAP;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f26272a;

        /* renamed from: b  reason: collision with root package name */
        private final int f26273b;

        a(Object obj, int i10) {
            this.f26272a = obj;
            this.f26273b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f26272a != aVar.f26272a || this.f26273b != aVar.f26273b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f26272a) * 65535) + this.f26273b;
        }
    }

    l(boolean z10) {
    }

    public static l b() {
        l lVar;
        if (!f26268b) {
            return f26270d;
        }
        l lVar2 = f26269c;
        if (lVar2 == null) {
            synchronized (l.class) {
                try {
                    lVar = f26269c;
                    if (lVar == null) {
                        lVar = k.a();
                        f26269c = lVar;
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
        android.support.v4.media.session.b.a(this.f26271a.get(new a(i0Var, i10)));
        return null;
    }
}
