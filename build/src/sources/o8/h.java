package o8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f41597a;

        /* renamed from: b  reason: collision with root package name */
        private final C0556a f41598b;

        /* renamed from: c  reason: collision with root package name */
        private C0556a f41599c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f41600d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: o8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0556a {

            /* renamed from: a  reason: collision with root package name */
            String f41601a;

            /* renamed from: b  reason: collision with root package name */
            Object f41602b;

            /* renamed from: c  reason: collision with root package name */
            C0556a f41603c;

            private C0556a() {
            }
        }

        private C0556a d() {
            C0556a c0556a = new C0556a();
            this.f41599c.f41603c = c0556a;
            this.f41599c = c0556a;
            return c0556a;
        }

        private a e(String str, Object obj) {
            C0556a d10 = d();
            d10.f41602b = obj;
            d10.f41601a = (String) j.g(str);
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
            boolean z10 = this.f41600d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f41597a);
            sb2.append('{');
            String str = "";
            for (C0556a c0556a = this.f41598b.f41603c; c0556a != null; c0556a = c0556a.f41603c) {
                Object obj = c0556a.f41602b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0556a.f41601a;
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
            C0556a c0556a = new C0556a();
            this.f41598b = c0556a;
            this.f41599c = c0556a;
            this.f41600d = false;
            this.f41597a = (String) j.g(str);
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
