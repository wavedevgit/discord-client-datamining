package androidx.core.app;

import android.content.res.Configuration;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f3234a;

    /* renamed from: b  reason: collision with root package name */
    private Configuration f3235b;

    public v(boolean z10) {
        this.f3234a = z10;
    }

    public final boolean a() {
        return this.f3234a;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public v(boolean z10, Configuration newConfig) {
        this(z10);
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        this.f3235b = newConfig;
    }
}
