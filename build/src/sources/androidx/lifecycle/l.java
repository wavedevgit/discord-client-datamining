package androidx.lifecycle;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    public static final l f4518a = new l();

    /* renamed from: b  reason: collision with root package name */
    private static final AtomicBoolean f4519b = new AtomicBoolean(false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends f {
        @Override // androidx.lifecycle.f, android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(@NotNull Activity activity, Bundle bundle) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            a0.f4471e.c(activity);
        }
    }

    private l() {
    }

    public static final void a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (f4519b.getAndSet(true)) {
            return;
        }
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNull(applicationContext, "null cannot be cast to non-null type android.app.Application");
        ((Application) applicationContext).registerActivityLifecycleCallbacks(new a());
    }
}
