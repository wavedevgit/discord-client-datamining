package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f50328o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f50329d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50330e;

    /* renamed from: i  reason: collision with root package name */
    private final String f50331i;

    public g(f fVar) {
        this.f50330e = fVar.f50326a.booleanValue();
        this.f50331i = fVar.f50327b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f50329d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f50330e);
        bundle.putString("log_session_id", this.f50331i);
        return bundle;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (o.a(null, null) && this.f50330e == gVar.f50330e && o.a(this.f50331i, gVar.f50331i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f50330e), this.f50331i);
    }
}
