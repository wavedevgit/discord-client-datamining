package m3;

import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.n0;
import androidx.lifecycle.viewmodel.CreationExtras;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements ViewModelProvider.Factory {

    /* renamed from: b  reason: collision with root package name */
    public static final d f37596b = new d();

    private d() {
    }

    @Override // androidx.lifecycle.ViewModelProvider.Factory
    public n0 b(KClass modelClass, CreationExtras extras) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Intrinsics.checkNotNullParameter(extras, "extras");
        return e.f37597a.a(yr.a.b(modelClass));
    }
}
