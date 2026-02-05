package androidx.core.app;

import android.app.ActivityOptions;
import android.content.Context;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends d {

        /* renamed from: a  reason: collision with root package name */
        private final ActivityOptions f3195a;

        a(ActivityOptions activityOptions) {
            this.f3195a = activityOptions;
        }

        @Override // androidx.core.app.d
        public Bundle b() {
            return this.f3195a.toBundle();
        }
    }

    protected d() {
    }

    public static d a(Context context, int i10, int i11) {
        return new a(ActivityOptions.makeCustomAnimation(context, i10, i11));
    }

    public abstract Bundle b();
}
