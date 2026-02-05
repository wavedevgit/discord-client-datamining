package o8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f42326a;

        /* renamed from: b  reason: collision with root package name */
        private final C0547a f42327b;

        /* renamed from: c  reason: collision with root package name */
        private C0547a f42328c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42329d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: o8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0547a {

            /* renamed from: a  reason: collision with root package name */
            String f42330a;

            /* renamed from: b  reason: collision with root package name */
            Object f42331b;

            /* renamed from: c  reason: collision with root package name */
            C0547a f42332c;

            private C0547a() {
            }
        }

        private C0547a d() {
            C0547a c0547a = new C0547a();
            this.f42328c.f42332c = c0547a;
            this.f42328c = c0547a;
            return c0547a;
        }

        private a e(String str, Object obj) {
            C0547a d10 = d();
            d10.f42331b = obj;
            d10.f42330a = (String) j.g(str);
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
            boolean z10 = this.f42329d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f42326a);
            sb2.append('{');
            String str = "";
            for (C0547a c0547a = this.f42327b.f42332c; c0547a != null; c0547a = c0547a.f42332c) {
                Object obj = c0547a.f42331b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0547a.f42330a;
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
            C0547a c0547a = new C0547a();
            this.f42327b = c0547a;
            this.f42328c = c0547a;
            this.f42329d = false;
            this.f42326a = (String) j.g(str);
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
