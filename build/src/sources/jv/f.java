package jv;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.StringTokenizer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final Map f31316a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        /* JADX INFO: Access modifiers changed from: private */
        public static a d(jv.a aVar, String str, int[] iArr, boolean z10) {
            Iterator it = aVar.G().iterator();
            if (!it.hasNext()) {
                return null;
            }
            android.support.v4.media.session.b.a(it.next());
            if (!z10) {
                throw null;
            }
            throw null;
        }

        public abstract boolean b();

        public abstract String c();
    }

    public f(Map map) {
        this.f31316a = map;
    }

    private static int[] b(String str) {
        try {
            if (!str.isEmpty()) {
                StringTokenizer stringTokenizer = new StringTokenizer(str, ".");
                int countTokens = stringTokenizer.countTokens();
                int[] iArr = new int[countTokens];
                for (int i10 = 0; i10 < countTokens; i10++) {
                    iArr[i10] = Integer.parseInt(stringTokenizer.nextToken());
                }
                return iArr;
            }
            throw new IllegalArgumentException("Version string is empty");
        } catch (RuntimeException e10) {
            throw new IllegalArgumentException("Unable to parse HTTP flags version string: `" + str + "`", e10);
        }
    }

    public static f c(c cVar, String str, String str2, boolean z10) {
        hv.a a10 = hv.a.a("Cronet ResolvedFlags#resolve");
        try {
            int[] b10 = b(str2);
            HashMap hashMap = new HashMap();
            for (Map.Entry entry : cVar.G().entrySet()) {
                try {
                    a.d((jv.a) entry.getValue(), str, b10, z10);
                } catch (RuntimeException e10) {
                    throw new IllegalArgumentException("Unable to resolve HTTP flag `" + ((String) entry.getKey()) + "`", e10);
                }
            }
            f fVar = new f(hashMap);
            if (a10 != null) {
                a10.close();
            }
            return fVar;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public Map a() {
        return Collections.unmodifiableMap(this.f31316a);
    }
}
