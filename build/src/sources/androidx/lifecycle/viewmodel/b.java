package androidx.lifecycle.viewmodel;

import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.n0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import m3.f;
import m3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelStore f4986a;

    /* renamed from: b  reason: collision with root package name */
    private final ViewModelProvider.Factory f4987b;

    /* renamed from: c  reason: collision with root package name */
    private final CreationExtras f4988c;

    /* renamed from: d  reason: collision with root package name */
    private final f f4989d;

    public b(ViewModelStore store, ViewModelProvider.Factory factory, CreationExtras defaultExtras) {
        Intrinsics.checkNotNullParameter(store, "store");
        Intrinsics.checkNotNullParameter(factory, "factory");
        Intrinsics.checkNotNullParameter(defaultExtras, "defaultExtras");
        this.f4986a = store;
        this.f4987b = factory;
        this.f4988c = defaultExtras;
        this.f4989d = new f();
    }

    public static /* synthetic */ n0 e(b bVar, KClass kClass, String str, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str = h.f36894a.c(kClass);
        }
        return bVar.d(kClass, str);
    }

    public final n0 d(KClass modelClass, String key) {
        n0 b10;
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f4989d) {
            try {
                b10 = this.f4986a.b(key);
                if (modelClass.isInstance(b10)) {
                    if (this.f4987b instanceof ViewModelProvider.d) {
                        Intrinsics.checkNotNull(b10);
                        ((ViewModelProvider.d) this.f4987b).d(b10);
                    }
                    Intrinsics.checkNotNull(b10, "null cannot be cast to non-null type T of androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel");
                } else {
                    a aVar = new a(this.f4988c);
                    aVar.c(ViewModelProvider.f4899c, key);
                    b10 = l3.b.a(this.f4987b, modelClass, aVar);
                    this.f4986a.d(key, b10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return b10;
    }
}
