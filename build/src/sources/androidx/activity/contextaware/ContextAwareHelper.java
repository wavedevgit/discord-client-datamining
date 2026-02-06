package androidx.activity.contextaware;

import android.content.Context;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContextAwareHelper {

    /* renamed from: a  reason: collision with root package name */
    private final Set f1294a = new CopyOnWriteArraySet();

    /* renamed from: b  reason: collision with root package name */
    private volatile Context f1295b;

    public final void a(OnContextAvailableListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        Context context = this.f1295b;
        if (context != null) {
            listener.a(context);
        }
        this.f1294a.add(listener);
    }

    public final void b() {
        this.f1295b = null;
    }

    public final void c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f1295b = context;
        for (OnContextAvailableListener onContextAvailableListener : this.f1294a) {
            onContextAvailableListener.a(context);
        }
    }

    public final Context d() {
        return this.f1295b;
    }

    public final void e(OnContextAvailableListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.f1294a.remove(listener);
    }
}
