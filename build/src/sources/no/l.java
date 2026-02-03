package no;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.view.Window;
import kotlin.jvm.internal.Intrinsics;
import v4.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final Activity f42221a;

    public l(Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        this.f42221a = activity;
    }

    public final Application a() {
        Application application = this.f42221a.getApplication();
        Intrinsics.checkNotNullExpressionValue(application, "getApplication(...)");
        return application;
    }

    public final Context b() {
        Context applicationContext = this.f42221a.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        return applicationContext;
    }

    public final v4.h c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new h.a(context).j(true).k(null).d();
    }

    public final Window d() {
        Window window = this.f42221a.getWindow();
        Intrinsics.checkNotNullExpressionValue(window, "getWindow(...)");
        return window;
    }
}
