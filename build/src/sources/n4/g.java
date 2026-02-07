package n4;

import android.os.Build;
import k4.n;
import kotlin.jvm.internal.Intrinsics;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends c {

    /* renamed from: b  reason: collision with root package name */
    private final int f38523b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(o4.h tracker) {
        super(tracker);
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f38523b = 7;
    }

    @Override // n4.c
    public int b() {
        return this.f38523b;
    }

    @Override // n4.c
    public boolean c(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        n d10 = workSpec.f43742j.d();
        if (d10 != n.UNMETERED) {
            if (Build.VERSION.SDK_INT < 30 || d10 != n.TEMPORARILY_UNMETERED) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // n4.c
    /* renamed from: g */
    public boolean d(m4.c value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (value.a() && !value.b()) {
            return false;
        }
        return true;
    }
}
