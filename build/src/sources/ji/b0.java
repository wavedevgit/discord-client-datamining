package ji;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.Collection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends c0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(Object obj, Field field, Class cls) {
        super(obj, field, Array.newInstance(cls, 0).getClass());
    }

    private final Class f() {
        return b().getType().getComponentType();
    }

    public final void d(Collection collection) {
        int length;
        Object[] objArr = (Object[]) a();
        if (objArr == null) {
            length = 0;
        } else {
            length = objArr.length;
        }
        Object[] objArr2 = (Object[]) Array.newInstance(f(), collection.size() + length);
        if (objArr != null) {
            System.arraycopy(objArr, 0, objArr2, 0, objArr.length);
        }
        for (Object obj : collection) {
            objArr2[length] = obj;
            length++;
        }
        c(objArr2);
    }

    public final void e(Collection collection) {
        int length;
        Object[] objArr = (Object[]) a();
        int i10 = 0;
        if (objArr == null) {
            length = 0;
        } else {
            length = objArr.length;
        }
        Object[] objArr2 = (Object[]) Array.newInstance(f(), length + collection.size());
        if (objArr != null) {
            System.arraycopy(objArr, 0, objArr2, collection.size(), objArr.length);
        }
        for (Object obj : collection) {
            objArr2[i10] = obj;
            i10++;
        }
        c(objArr2);
    }
}
