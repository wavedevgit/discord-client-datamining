package n4;

import android.os.Build;
import k4.n;
import kotlin.jvm.internal.Intrinsics;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends c {

    /* renamed from: b  reason: collision with root package name */
    private final int f39751b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o4.h tracker) {
        super(tracker);
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39751b = 7;
    }

    @Override // n4.c
    public int b() {
        return this.f39751b;
    }

    @Override // n4.c
    public boolean c(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (workSpec.f44935j.d() == n.CONNECTED) {
            return true;
        }
        return false;
    }

    @Override // n4.c
    /* renamed from: g */
    public boolean d(m4.c value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (Build.VERSION.SDK_INT >= 26) {
            if (!value.a() || !value.d()) {
                return true;
            }
            return false;
        } else if (!value.a()) {
            return true;
        } else {
            return false;
        }
    }
}
