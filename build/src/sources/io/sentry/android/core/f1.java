package io.sentry.android.core;

import android.app.Activity;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f1 {

    /* renamed from: b  reason: collision with root package name */
    private static final f1 f27288b = new f1();

    /* renamed from: a  reason: collision with root package name */
    private WeakReference f27289a;

    private f1() {
    }

    public static f1 c() {
        return f27288b;
    }

    public void a(Activity activity) {
        WeakReference weakReference = this.f27289a;
        if (weakReference != null && weakReference.get() != activity) {
            return;
        }
        this.f27289a = null;
    }

    public Activity b() {
        WeakReference weakReference = this.f27289a;
        if (weakReference != null) {
            return (Activity) weakReference.get();
        }
        return null;
    }

    public void d(Activity activity) {
        WeakReference weakReference = this.f27289a;
        if (weakReference != null && weakReference.get() == activity) {
            return;
        }
        this.f27289a = new WeakReference(activity);
    }
}
