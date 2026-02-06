package io.sentry.android.core.internal.util;

import android.content.ContentProvider;
import io.sentry.android.core.x0;
import io.sentry.i2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final x0 f27192a;

    public l() {
        this(new x0(i2.e()));
    }

    public void a(ContentProvider contentProvider) {
        int d10 = this.f27192a.d();
        if (d10 >= 26 && d10 <= 28) {
            String callingPackage = contentProvider.getCallingPackage();
            String packageName = contentProvider.getContext().getPackageName();
            if (callingPackage == null || !callingPackage.equals(packageName)) {
                throw new SecurityException("Provider does not allow for granting of Uri permissions");
            }
        }
    }

    public l(x0 x0Var) {
        this.f27192a = x0Var;
    }
}
