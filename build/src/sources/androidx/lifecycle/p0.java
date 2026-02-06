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
    private final KClass f4969d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f4970e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f4971i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f4972o;

    /* renamed from: p  reason: collision with root package name */
    private n0 f4973p;

    public p0(KClass viewModelClass, Function0 storeProducer, Function0 factoryProducer, Function0 extrasProducer) {
        Intrinsics.checkNotNullParameter(viewModelClass, "viewModelClass");
        Intrinsics.checkNotNullParameter(storeProducer, "storeProducer");
        Intrinsics.checkNotNullParameter(factoryProducer, "factoryProducer");
        Intrinsics.checkNotNullParameter(extrasProducer, "extrasProducer");
        this.f4969d = viewModelClass;
        this.f4970e = storeProducer;
        this.f4971i = factoryProducer;
        this.f4972o = extrasProducer;
    }

    @Override // kotlin.Lazy
    /* renamed from: a */
    public n0 getValue() {
        n0 n0Var = this.f4973p;
        if (n0Var == null) {
            n0 c10 = ViewModelProvider.f4898b.a((ViewModelStore) this.f4970e.invoke(), (ViewModelProvider.Factory) this.f4971i.invoke(), (CreationExtras) this.f4972o.invoke()).c(this.f4969d);
            this.f4973p = c10;
            return c10;
        }
        return n0Var;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f4973p != null) {
            return true;
        }
        return false;
    }
}
