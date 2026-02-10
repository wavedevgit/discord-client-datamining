package p8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f43057a;

        /* renamed from: b  reason: collision with root package name */
        private final C0609a f43058b;

        /* renamed from: c  reason: collision with root package name */
        private C0609a f43059c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f43060d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: p8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0609a {

            /* renamed from: a  reason: collision with root package name */
            String f43061a;

            /* renamed from: b  reason: collision with root package name */
            Object f43062b;

            /* renamed from: c  reason: collision with root package name */
            C0609a f43063c;

            private C0609a() {
            }
        }

        private C0609a d() {
            C0609a c0609a = new C0609a();
            this.f43059c.f43063c = c0609a;
            this.f43059c = c0609a;
            return c0609a;
        }

        private a e(String str, Object obj) {
            C0609a d10 = d();
            d10.f43062b = obj;
            d10.f43061a = (String) j.g(str);
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
            boolean z10 = this.f43060d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f43057a);
            sb2.append('{');
            String str = "";
            for (C0609a c0609a = this.f43058b.f43063c; c0609a != null; c0609a = c0609a.f43063c) {
                Object obj = c0609a.f43062b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0609a.f43061a;
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
            C0609a c0609a = new C0609a();
            this.f43058b = c0609a;
            this.f43059c = c0609a;
            this.f43060d = false;
            this.f43057a = (String) j.g(str);
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
