package gf;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f26964a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f26965b;

        /* synthetic */ a(Object obj, w0 w0Var) {
            q.l(obj);
            this.f26965b = obj;
            this.f26964a = new ArrayList();
        }

        public a a(String str, Object obj) {
            q.l(str);
            String valueOf = String.valueOf(obj);
            this.f26964a.add(str + "=" + valueOf);
            return this;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder(100);
            sb2.append(this.f26965b.getClass().getSimpleName());
            sb2.append('{');
            int size = this.f26964a.size();
            for (int i10 = 0; i10 < size; i10++) {
                sb2.append((String) this.f26964a.get(i10));
                if (i10 < size - 1) {
                    sb2.append(", ");
                }
            }
            sb2.append('}');
            return sb2.toString();
        }
    }

    public static boolean a(Object obj, Object obj2) {
        if (obj == obj2) {
            return true;
        }
        if (obj != null && obj.equals(obj2)) {
            return true;
        }
        return false;
    }

    public static int b(Object... objArr) {
        return Arrays.hashCode(objArr);
    }

    public static a c(Object obj) {
        return new a(obj, null);
    }
}
