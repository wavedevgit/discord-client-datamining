package gf;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f25174a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f25175b;

        /* synthetic */ a(Object obj, byte[] bArr) {
            q.l(obj);
            this.f25175b = obj;
            this.f25174a = new ArrayList();
        }

        public a a(String str, Object obj) {
            q.l(str);
            int length = str.length();
            String valueOf = String.valueOf(obj);
            StringBuilder sb2 = new StringBuilder(length + 1 + valueOf.length());
            sb2.append(str);
            sb2.append("=");
            sb2.append(valueOf);
            this.f25174a.add(sb2.toString());
            return this;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder(100);
            sb2.append(this.f25175b.getClass().getSimpleName());
            sb2.append('{');
            List list = this.f25174a;
            int size = list.size();
            for (int i10 = 0; i10 < size; i10++) {
                sb2.append((String) list.get(i10));
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
