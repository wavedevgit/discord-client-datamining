package dt;

import java.lang.annotation.Annotation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e0 {
    public static final KSerializer a(String serialName, Enum[] values, String[] names, Annotation[][] entryAnnotations, Annotation[] annotationArr) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(values, "values");
        Intrinsics.checkNotNullParameter(names, "names");
        Intrinsics.checkNotNullParameter(entryAnnotations, "entryAnnotations");
        b0 b0Var = new b0(serialName, values.length);
        if (annotationArr != null) {
            for (Annotation annotation : annotationArr) {
                b0Var.w(annotation);
            }
        }
        int length = values.length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            Enum r42 = values[i10];
            int i12 = i11 + 1;
            String str = (String) kotlin.collections.i.c0(names, i11);
            if (str == null) {
                str = r42.name();
            }
            a2.p(b0Var, str, false, 2, null);
            Annotation[] annotationArr2 = (Annotation[]) kotlin.collections.i.c0(entryAnnotations, i11);
            if (annotationArr2 != null) {
                for (Annotation annotation2 : annotationArr2) {
                    b0Var.v(annotation2);
                }
            }
            i10++;
            i11 = i12;
        }
        return new d0(serialName, values, b0Var);
    }

    public static final KSerializer b(String serialName, Enum[] values) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(values, "values");
        return new d0(serialName, values);
    }
}
