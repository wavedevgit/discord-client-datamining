package androidx.savedstate;

import android.os.Bundle;
import androidx.savedstate.SavedStateRegistryController;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import u3.f;
import v3.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SavedStateRegistryController {

    /* renamed from: c  reason: collision with root package name */
    public static final a f5047c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b f5048a;

    /* renamed from: b  reason: collision with root package name */
    private final SavedStateRegistry f5049b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(f fVar) {
            fVar.getLifecycle().a(new androidx.savedstate.a(fVar));
            return Unit.f33282a;
        }

        public final SavedStateRegistryController b(final f owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            return new SavedStateRegistryController(new b(owner, new Function0() { // from class: u3.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c10;
                    c10 = SavedStateRegistryController.a.c(f.this);
                    return c10;
                }
            }), null);
        }

        private a() {
        }
    }

    public /* synthetic */ SavedStateRegistryController(b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar);
    }

    public static final SavedStateRegistryController a(f fVar) {
        return f5047c.b(fVar);
    }

    public final SavedStateRegistry b() {
        return this.f5049b;
    }

    public final void c() {
        this.f5048a.f();
    }

    public final void d(Bundle bundle) {
        this.f5048a.h(bundle);
    }

    public final void e(Bundle outBundle) {
        Intrinsics.checkNotNullParameter(outBundle, "outBundle");
        this.f5048a.i(outBundle);
    }

    private SavedStateRegistryController(b bVar) {
        this.f5048a = bVar;
        this.f5049b = new SavedStateRegistry(bVar);
    }
}
