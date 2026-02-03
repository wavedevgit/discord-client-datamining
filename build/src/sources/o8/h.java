package o8;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f42620a;

        /* renamed from: b  reason: collision with root package name */
        private final C0539a f42621b;

        /* renamed from: c  reason: collision with root package name */
        private C0539a f42622c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42623d;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: o8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0539a {

            /* renamed from: a  reason: collision with root package name */
            String f42624a;

            /* renamed from: b  reason: collision with root package name */
            Object f42625b;

            /* renamed from: c  reason: collision with root package name */
            C0539a f42626c;

            private C0539a() {
            }
        }

        private C0539a d() {
            C0539a c0539a = new C0539a();
            this.f42622c.f42626c = c0539a;
            this.f42622c = c0539a;
            return c0539a;
        }

        private a e(String str, Object obj) {
            C0539a d10 = d();
            d10.f42625b = obj;
            d10.f42624a = (String) j.g(str);
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
            boolean z10 = this.f42623d;
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(this.f42620a);
            sb2.append('{');
            String str = "";
            for (C0539a c0539a = this.f42621b.f42626c; c0539a != null; c0539a = c0539a.f42626c) {
                Object obj = c0539a.f42625b;
                if (!z10 || obj != null) {
                    sb2.append(str);
                    String str2 = c0539a.f42624a;
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
            C0539a c0539a = new C0539a();
            this.f42621b = c0539a;
            this.f42622c = c0539a;
            this.f42623d = false;
            this.f42620a = (String) j.g(str);
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
