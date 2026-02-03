package androidx.lifecycle;

import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.viewmodel.CreationExtras;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p0 implements Lazy {

    /* renamed from: d  reason: collision with root package name */
    private final KClass f4559d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f4560e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f4561i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f4562o;

    /* renamed from: p  reason: collision with root package name */
    private n0 f4563p;

    public p0(KClass viewModelClass, Function0 storeProducer, Function0 factoryProducer, Function0 extrasProducer) {
        Intrinsics.checkNotNullParameter(viewModelClass, "viewModelClass");
        Intrinsics.checkNotNullParameter(storeProducer, "storeProducer");
        Intrinsics.checkNotNullParameter(factoryProducer, "factoryProducer");
        Intrinsics.checkNotNullParameter(extrasProducer, "extrasProducer");
        this.f4559d = viewModelClass;
        this.f4560e = storeProducer;
        this.f4561i = factoryProducer;
        this.f4562o = extrasProducer;
    }

    @Override // kotlin.Lazy
    /* renamed from: a */
    public n0 getValue() {
        n0 n0Var = this.f4563p;
        if (n0Var == null) {
            n0 c10 = ViewModelProvider.f4488b.a((ViewModelStore) this.f4560e.invoke(), (ViewModelProvider.Factory) this.f4561i.invoke(), (CreationExtras) this.f4562o.invoke()).c(this.f4559d);
            this.f4563p = c10;
            return c10;
        }
        return n0Var;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f4563p != null) {
            return true;
        }
        return false;
    }
}
