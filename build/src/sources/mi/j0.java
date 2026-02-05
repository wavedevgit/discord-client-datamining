package mi;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object[] a(Object[] objArr, int i10, int i11, Object[] objArr2) {
        return Arrays.copyOfRange(objArr, i10, i11, objArr2.getClass());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object[] b(Object[] objArr, int i10) {
        return (Object[]) Array.newInstance(objArr.getClass().getComponentType(), i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map c(int i10) {
        return j.v(i10);
    }
}
