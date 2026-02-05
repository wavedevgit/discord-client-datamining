package androidx.lifecycle;

import android.app.Application;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a extends n0 {

    /* renamed from: b  reason: collision with root package name */
    private final Application f4582b;

    public a(Application application) {
        Intrinsics.checkNotNullParameter(application, "application");
        this.f4582b = application;
    }
}
