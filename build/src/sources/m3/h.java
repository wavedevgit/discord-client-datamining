package m3;

import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.n0;
import androidx.lifecycle.q0;
import androidx.lifecycle.viewmodel.CreationExtras;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    public static final h f37264a = new h();

    private h() {
    }

    public final CreationExtras a(q0 owner) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        if (owner instanceof androidx.lifecycle.h) {
            return ((androidx.lifecycle.h) owner).getDefaultViewModelCreationExtras();
        }
        return CreationExtras.b.f4656c;
    }

    public final ViewModelProvider.Factory b(q0 owner) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        if (owner instanceof androidx.lifecycle.h) {
            return ((androidx.lifecycle.h) owner).getDefaultViewModelProviderFactory();
        }
        return d.f37258b;
    }

    public final String c(KClass modelClass) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        String a10 = a.a(modelClass);
        if (a10 != null) {
            return "androidx.lifecycle.ViewModelProvider.DefaultKey:" + a10;
        }
        throw new IllegalArgumentException("Local and anonymous classes can not be ViewModels");
    }

    public final n0 d() {
        throw new UnsupportedOperationException("`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.");
    }
}
