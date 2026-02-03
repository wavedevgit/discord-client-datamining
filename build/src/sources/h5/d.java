package h5;

import android.content.Context;
import android.util.DisplayMetrics;
import h5.c;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27533a;

    public d(Context context) {
        this.f27533a = context;
    }

    @Override // h5.j
    public Object a(Continuation continuation) {
        DisplayMetrics displayMetrics = this.f27533a.getResources().getDisplayMetrics();
        c.a a10 = a.a(Math.max(displayMetrics.widthPixels, displayMetrics.heightPixels));
        return new i(a10, a10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof d) && Intrinsics.areEqual(this.f27533a, ((d) obj).f27533a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f27533a.hashCode();
    }
}
