package jk;

import java.util.Collections;
import java.util.Map;
import jk.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: b  reason: collision with root package name */
    private static boolean f31107b = true;

    /* renamed from: c  reason: collision with root package name */
    private static volatile l f31108c;

    /* renamed from: d  reason: collision with root package name */
    static final l f31109d = new l(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f31110a = Collections.EMPTY_MAP;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f31111a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31112b;

        a(Object obj, int i10) {
            this.f31111a = obj;
            this.f31112b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f31111a != aVar.f31111a || this.f31112b != aVar.f31112b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f31111a) * 65535) + this.f31112b;
        }
    }

    l(boolean z10) {
    }

    public static l b() {
        l lVar;
        if (!f31107b) {
            return f31109d;
        }
        l lVar2 = f31108c;
        if (lVar2 == null) {
            synchronized (l.class) {
                try {
                    lVar = f31108c;
                    if (lVar == null) {
                        lVar = k.a();
                        f31108c = lVar;
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
        android.support.v4.media.session.b.a(this.f31110a.get(new a(i0Var, i10)));
        return null;
    }
}
