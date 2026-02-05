package k4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private static final String f31591a;

    static {
        String i10 = m.i("InputMerger");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"InputMerger\")");
        f31591a = i10;
    }

    public static final i a(String className) {
        Intrinsics.checkNotNullParameter(className, "className");
        try {
            Object newInstance = Class.forName(className).getDeclaredConstructor(null).newInstance(null);
            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type androidx.work.InputMerger");
            return (i) newInstance;
        } catch (Exception e10) {
            m e11 = m.e();
            String str = f31591a;
            e11.d(str, "Trouble instantiating " + className, e10);
            return null;
        }
    }
}
