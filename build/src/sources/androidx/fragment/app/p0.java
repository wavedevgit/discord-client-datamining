package androidx.fragment.app;

import androidx.lifecycle.ViewModelProvider;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f4342d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Fragment fragment) {
            super(0);
            this.f4342d = fragment;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelProvider.Factory invoke() {
            return this.f4342d.getDefaultViewModelProviderFactory();
        }
    }

    public static final /* synthetic */ androidx.lifecycle.q0 a(Lazy lazy) {
        return c(lazy);
    }

    public static final Lazy b(Fragment fragment, KClass kClass, Function0 function0, Function0 function02, Function0 function03) {
        if (function03 == null) {
            function03 = new a(fragment);
        }
        return new androidx.lifecycle.p0(kClass, function0, function03, function02);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final androidx.lifecycle.q0 c(Lazy lazy) {
        return (androidx.lifecycle.q0) lazy.getValue();
    }
}
