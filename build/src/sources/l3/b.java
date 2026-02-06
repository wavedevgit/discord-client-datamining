package l3;

import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.n0;
import androidx.lifecycle.viewmodel.CreationExtras;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    public static final n0 a(ViewModelProvider.Factory factory, KClass modelClass, CreationExtras extras) {
        Intrinsics.checkNotNullParameter(factory, "factory");
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Intrinsics.checkNotNullParameter(extras, "extras");
        try {
            try {
                return factory.b(modelClass, extras);
            } catch (AbstractMethodError unused) {
                return factory.c(ds.a.b(modelClass));
            }
        } catch (AbstractMethodError unused2) {
            return factory.a(ds.a.b(modelClass), extras);
        }
    }
}
