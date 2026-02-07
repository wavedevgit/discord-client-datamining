package io.sentry.android.core;

import android.app.Activity;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f1 {

    /* renamed from: b  reason: collision with root package name */
    private static final f1 f27088b = new f1();

    /* renamed from: a  reason: collision with root package name */
    private WeakReference f27089a;

    private f1() {
    }

    public static f1 c() {
        return f27088b;
    }

    public void a(Activity activity) {
        WeakReference weakReference = this.f27089a;
        if (weakReference != null && weakReference.get() != activity) {
            return;
        }
        this.f27089a = null;
    }

    public Activity b() {
        WeakReference weakReference = this.f27089a;
        if (weakReference != null) {
            return (Activity) weakReference.get();
        }
        return null;
    }

    public void d(Activity activity) {
        WeakReference weakReference = this.f27089a;
        if (weakReference != null && weakReference.get() == activity) {
            return;
        }
        this.f27089a = new WeakReference(activity);
    }
}
