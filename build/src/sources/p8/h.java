package p8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f41515a;

        /* renamed from: b  reason: collision with root package name */
        private final C0585a f41516b;

        /* renamed from: c  reason: collision with root package name */
        private C0585a f41517c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f41518d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: p8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0585a {

            /* renamed from: a  reason: collision with root package name */
            String f41519a;

            /* renamed from: b  reason: collision with root package name */
            Object f41520b;

            /* renamed from: c  reason: collision with root package name */
            C0585a f41521c;

            private C0585a() {
            }
        }

        private C0585a d() {
            C0585a c0585a = new C0585a();
            this.f41517c.f41521c = c0585a;
            this.f41517c = c0585a;
            return c0585a;
        }

        private a e(String str, Object obj) {
            C0585a d10 = d();
            d10.f41520b = obj;
            d10.f41519a = (String) j.g(str);
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
            boolean z10 = this.f41518d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f41515a);
            sb2.append('{');
            String str = "";
            for (C0585a c0585a = this.f41516b.f41521c; c0585a != null; c0585a = c0585a.f41521c) {
                Object obj = c0585a.f41520b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0585a.f41519a;
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
            this.f41516b = c0585a;
            this.f41517c = c0585a;
            this.f41518d = false;
            this.f41515a = (String) j.g(str);
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
