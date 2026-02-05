package li;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f36887a;

        /* renamed from: b  reason: collision with root package name */
        private final a f36888b;

        /* renamed from: c  reason: collision with root package name */
        private a f36889c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f36890d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36891e;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            String f36892a;

            /* renamed from: b  reason: collision with root package name */
            Object f36893b;

            /* renamed from: c  reason: collision with root package name */
            a f36894c;

            private a() {
            }
        }

        private a a() {
            a aVar = new a();
            this.f36889c.f36894c = aVar;
            this.f36889c = aVar;
            return aVar;
        }

        private b b(Object obj) {
            a().f36893b = obj;
            return this;
        }

        private static boolean d(Object obj) {
            if (obj instanceof CharSequence) {
                if (((CharSequence) obj).length() == 0) {
                    return true;
                }
                return false;
            } else if (obj instanceof Collection) {
                return ((Collection) obj).isEmpty();
            } else {
                if (obj instanceof Map) {
                    return ((Map) obj).isEmpty();
                }
                if (obj.getClass().isArray() && Array.getLength(obj) == 0) {
                    return true;
                }
                return false;
            }
        }

        public b c(Object obj) {
            return b(obj);
        }

        /* JADX WARN: Removed duplicated region for block: B:13:0x0033  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.String toString() {
            /*
                r7 = this;
                boolean r0 = r7.f36890d
                boolean r1 = r7.f36891e
                java.lang.StringBuilder r2 = new java.lang.StringBuilder
                r3 = 32
                r2.<init>(r3)
                java.lang.String r3 = r7.f36887a
                r2.append(r3)
                r3 = 123(0x7b, float:1.72E-43)
                r2.append(r3)
                li.h$b$a r3 = r7.f36888b
                li.h$b$a r3 = r3.f36894c
                java.lang.String r4 = ""
            L1b:
                if (r3 == 0) goto L61
                java.lang.Object r5 = r3.f36893b
                if (r5 != 0) goto L24
                if (r0 != 0) goto L5e
                goto L2c
            L24:
                if (r1 == 0) goto L2c
                boolean r6 = d(r5)
                if (r6 != 0) goto L5e
            L2c:
                r2.append(r4)
                java.lang.String r4 = r3.f36892a
                if (r4 == 0) goto L3b
                r2.append(r4)
                r4 = 61
                r2.append(r4)
            L3b:
                if (r5 == 0) goto L59
                java.lang.Class r4 = r5.getClass()
                boolean r4 = r4.isArray()
                if (r4 == 0) goto L59
                java.lang.Object[] r4 = new java.lang.Object[]{r5}
                java.lang.String r4 = java.util.Arrays.deepToString(r4)
                int r5 = r4.length()
                r6 = 1
                int r5 = r5 - r6
                r2.append(r4, r6, r5)
                goto L5c
            L59:
                r2.append(r5)
            L5c:
                java.lang.String r4 = ", "
            L5e:
                li.h$b$a r3 = r3.f36894c
                goto L1b
            L61:
                r0 = 125(0x7d, float:1.75E-43)
                r2.append(r0)
                java.lang.String r0 = r2.toString()
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: li.h.b.toString():java.lang.String");
        }

        private b(String str) {
            a aVar = new a();
            this.f36888b = aVar;
            this.f36889c = aVar;
            this.f36890d = false;
            this.f36891e = false;
            this.f36887a = (String) m.j(str);
        }
    }

    public static Object a(Object obj, Object obj2) {
        if (obj != null) {
            return obj;
        }
        if (obj2 != null) {
            return obj2;
        }
        throw new NullPointerException("Both parameters are null");
    }

    public static b b(Object obj) {
        return new b(obj.getClass().getSimpleName());
    }
}
