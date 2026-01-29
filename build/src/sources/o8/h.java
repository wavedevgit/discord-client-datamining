package o8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f42476a;

        /* renamed from: b  reason: collision with root package name */
        private final C0531a f42477b;

        /* renamed from: c  reason: collision with root package name */
        private C0531a f42478c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42479d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: o8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0531a {

            /* renamed from: a  reason: collision with root package name */
            String f42480a;

            /* renamed from: b  reason: collision with root package name */
            Object f42481b;

            /* renamed from: c  reason: collision with root package name */
            C0531a f42482c;

            private C0531a() {
            }
        }

        private C0531a d() {
            C0531a c0531a = new C0531a();
            this.f42478c.f42482c = c0531a;
            this.f42478c = c0531a;
            return c0531a;
        }

        private a e(String str, Object obj) {
            C0531a d10 = d();
            d10.f42481b = obj;
            d10.f42480a = (String) j.g(str);
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
            boolean z10 = this.f42479d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f42476a);
            sb2.append('{');
            String str = "";
            for (C0531a c0531a = this.f42477b.f42482c; c0531a != null; c0531a = c0531a.f42482c) {
                Object obj = c0531a.f42481b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0531a.f42480a;
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
            this.f42477b = c0531a;
            this.f42478c = c0531a;
            this.f42479d = false;
            this.f42476a = (String) j.g(str);
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
