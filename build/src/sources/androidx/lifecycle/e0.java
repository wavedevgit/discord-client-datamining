package androidx.lifecycle;

import android.os.Bundle;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.viewmodel.CreationExtras;
import androidx.savedstate.SavedStateRegistry;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    public static final CreationExtras.c f4481a;

    /* renamed from: b  reason: collision with root package name */
    public static final CreationExtras.c f4482b;

    /* renamed from: c  reason: collision with root package name */
    public static final CreationExtras.c f4483c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements ViewModelProvider.Factory {
        a() {
        }

        @Override // androidx.lifecycle.ViewModelProvider.Factory
        public n0 b(KClass modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return new i0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements CreationExtras.c {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements CreationExtras.c {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d implements CreationExtras.c {
    }

    static {
        CreationExtras.a aVar = CreationExtras.f4529b;
        f4481a = new b();
        f4482b = new c();
        f4483c = new d();
    }

    public static final b0 a(CreationExtras creationExtras) {
        Intrinsics.checkNotNullParameter(creationExtras, "<this>");
        u3.f fVar = (u3.f) creationExtras.a(f4481a);
        if (fVar != null) {
            q0 q0Var = (q0) creationExtras.a(f4482b);
            if (q0Var != null) {
                Bundle bundle = (Bundle) creationExtras.a(f4483c);
                String str = (String) creationExtras.a(ViewModelProvider.f4445c);
                if (str != null) {
                    return b(fVar, q0Var, str, bundle);
                }
                throw new IllegalArgumentException("CreationExtras must have a value by `VIEW_MODEL_KEY`");
            }
            throw new IllegalArgumentException("CreationExtras must have a value by `VIEW_MODEL_STORE_OWNER_KEY`");
        }
        throw new IllegalArgumentException("CreationExtras must have a value by `SAVED_STATE_REGISTRY_OWNER_KEY`");
    }

    private static final b0 b(u3.f fVar, q0 q0Var, String str, Bundle bundle) {
        h0 d10 = d(fVar);
        i0 e10 = e(q0Var);
        b0 b0Var = (b0) e10.e().get(str);
        if (b0Var == null) {
            b0 a10 = b0.f4461c.a(d10.c(str), bundle);
            e10.e().put(str, a10);
            return a10;
        }
        return b0Var;
    }

    public static final void c(u3.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        Lifecycle.State b10 = fVar.getLifecycle().b();
        if (b10 != Lifecycle.State.f4393e && b10 != Lifecycle.State.f4394i) {
            throw new IllegalArgumentException("Failed requirement.");
        }
        if (fVar.getSavedStateRegistry().b("androidx.lifecycle.internal.SavedStateHandlesProvider") == null) {
            h0 h0Var = new h0(fVar.getSavedStateRegistry(), (q0) fVar);
            fVar.getSavedStateRegistry().c("androidx.lifecycle.internal.SavedStateHandlesProvider", h0Var);
            fVar.getLifecycle().a(new c0(h0Var));
        }
    }

    public static final h0 d(u3.f fVar) {
        h0 h0Var;
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        SavedStateRegistry.b b10 = fVar.getSavedStateRegistry().b("androidx.lifecycle.internal.SavedStateHandlesProvider");
        if (b10 instanceof h0) {
            h0Var = (h0) b10;
        } else {
            h0Var = null;
        }
        if (h0Var != null) {
            return h0Var;
        }
        throw new IllegalStateException("enableSavedStateHandles() wasn't called prior to createSavedStateHandle() call");
    }

    public static final i0 e(q0 q0Var) {
        Intrinsics.checkNotNullParameter(q0Var, "<this>");
        return (i0) ViewModelProvider.b.c(ViewModelProvider.f4444b, q0Var, new a(), null, 4, null).b("androidx.lifecycle.internal.SavedStateHandlesVM", Reflection.getOrCreateKotlinClass(i0.class));
    }
}
