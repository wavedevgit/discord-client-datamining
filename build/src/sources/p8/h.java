package p8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f41516a;

        /* renamed from: b  reason: collision with root package name */
        private final C0585a f41517b;

        /* renamed from: c  reason: collision with root package name */
        private C0585a f41518c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f41519d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: p8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0585a {

            /* renamed from: a  reason: collision with root package name */
            String f41520a;

            /* renamed from: b  reason: collision with root package name */
            Object f41521b;

            /* renamed from: c  reason: collision with root package name */
            C0585a f41522c;

            private C0585a() {
            }
        }

        private C0585a d() {
            C0585a c0585a = new C0585a();
            this.f41518c.f41522c = c0585a;
            this.f41518c = c0585a;
            return c0585a;
        }

        private a e(String str, Object obj) {
            C0585a d10 = d();
            d10.f41521b = obj;
            d10.f41520a = (String) j.g(str);
            return this;
        }

        public a a(String str, int i10) {
            return e(str, String.valueOf(i10));
        }

        public a b(String str, Object obj) {
            return e(str, obj);
        }

        public a c(String str, boolean z10) {
            return e(str, String.valueOf(z10));
        }

        public String toString() {
            boolean z10 = this.f41519d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f41516a);
            sb2.append('{');
            String str = "";
            for (C0585a c0585a = this.f41517b.f41522c; c0585a != null; c0585a = c0585a.f41522c) {
                Object obj = c0585a.f41521b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0585a.f41520a;
                    if (str2 != null) {
                        sb2.append(str2);
                        sb2.append('=');
                    }
                    if (obj != null && obj.getClass().isArray()) {
                        String deepToString = Arrays.deepToString(new Object[]{obj});
                        sb2.append((CharSequence) deepToString, 1, deepToString.length() - 1);
                    } else {
                        sb2.append(obj);
                    }
                    str = ", ";
                }
            }
            sb2.append('}');
            return sb2.toString();
        }

        private a(String str) {
            C0585a c0585a = new C0585a();
            this.f41517b = c0585a;
            this.f41518c = c0585a;
            this.f41519d = false;
            this.f41516a = (String) j.g(str);
        }
    }

    public static boolean a(Object obj, Object obj2) {
        if (obj != obj2) {
            if (obj == null || !obj.equals(obj2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public static a b(Object obj) {
        return new a(obj.getClass().getSimpleName());
    }
}
