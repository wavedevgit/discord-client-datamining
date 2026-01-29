package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {
    public static Object a(Class cls, String str, h... hVarArr) {
        return b(cls, "isIsolated", null, false, hVarArr);
    }

    private static Object b(Class cls, String str, Object obj, boolean z10, h... hVarArr) {
        int length = hVarArr.length;
        Class<?>[] clsArr = new Class[length];
        Object[] objArr = new Object[length];
        Object obj2 = null;
        if (hVarArr.length <= 0) {
            return cls.getDeclaredMethod(str, clsArr).invoke(null, objArr);
        }
        h hVar = hVarArr[0];
        obj2.getClass();
        throw null;
    }
}
