package o8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f42492a;

        /* renamed from: b  reason: collision with root package name */
        private final C0531a f42493b;

        /* renamed from: c  reason: collision with root package name */
        private C0531a f42494c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42495d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: o8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0531a {

            /* renamed from: a  reason: collision with root package name */
            String f42496a;

            /* renamed from: b  reason: collision with root package name */
            Object f42497b;

            /* renamed from: c  reason: collision with root package name */
            C0531a f42498c;

            private C0531a() {
            }
        }

        private C0531a d() {
            C0531a c0531a = new C0531a();
            this.f42494c.f42498c = c0531a;
            this.f42494c = c0531a;
            return c0531a;
        }

        private a e(String str, Object obj) {
            C0531a d10 = d();
            d10.f42497b = obj;
            d10.f42496a = (String) j.g(str);
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
            boolean z10 = this.f42495d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f42492a);
            sb2.append('{');
            String str = "";
            for (C0531a c0531a = this.f42493b.f42498c; c0531a != null; c0531a = c0531a.f42498c) {
                Object obj = c0531a.f42497b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0531a.f42496a;
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
            C0531a c0531a = new C0531a();
            this.f42493b = c0531a;
            this.f42494c = c0531a;
            this.f42495d = false;
            this.f42492a = (String) j.g(str);
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
