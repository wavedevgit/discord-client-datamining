package iv;

import android.os.Build;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class w {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends w {
        @Override // iv.w
        Object b(Method method, Class cls, Object obj, Object[] objArr) {
            if (Build.VERSION.SDK_INT >= 26) {
                return n.a(method, cls, obj, objArr);
            }
            throw new UnsupportedOperationException("Calling default methods on API 24 and 25 is not supported");
        }

        @Override // iv.w
        boolean c(Method method) {
            return method.isDefault();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class b extends w {
        @Override // iv.w
        String a(Method method, int i10) {
            Parameter parameter = method.getParameters()[i10];
            if (parameter.isNamePresent()) {
                return "parameter '" + parameter.getName() + '\'';
            }
            return super.a(method, i10);
        }

        @Override // iv.w
        Object b(Method method, Class cls, Object obj, Object[] objArr) {
            return n.a(method, cls, obj, objArr);
        }

        @Override // iv.w
        boolean c(Method method) {
            return method.isDefault();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String a(Method method, int i10) {
        return "parameter #" + (i10 + 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object b(Method method, Class cls, Object obj, Object[] objArr) {
        throw new AssertionError();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(Method method) {
        return false;
    }
}
