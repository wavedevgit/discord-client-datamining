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
    private final KClass f4640d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f4641e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f4642i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f4643o;

    /* renamed from: p  reason: collision with root package name */
    private n0 f4644p;

    public p0(KClass viewModelClass, Function0 storeProducer, Function0 factoryProducer, Function0 extrasProducer) {
        Intrinsics.checkNotNullParameter(viewModelClass, "viewModelClass");
        Intrinsics.checkNotNullParameter(storeProducer, "storeProducer");
        Intrinsics.checkNotNullParameter(factoryProducer, "factoryProducer");
        Intrinsics.checkNotNullParameter(extrasProducer, "extrasProducer");
        this.f4640d = viewModelClass;
        this.f4641e = storeProducer;
        this.f4642i = factoryProducer;
        this.f4643o = extrasProducer;
    }

    @Override // kotlin.Lazy
    /* renamed from: a */
    public n0 getValue() {
        n0 n0Var = this.f4644p;
        if (n0Var == null) {
            n0 c10 = ViewModelProvider.f4569b.a((ViewModelStore) this.f4641e.invoke(), (ViewModelProvider.Factory) this.f4642i.invoke(), (CreationExtras) this.f4643o.invoke()).c(this.f4640d);
            this.f4644p = c10;
            return c10;
        }
        return n0Var;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f4644p != null) {
            return true;
        }
        return false;
    }
}
