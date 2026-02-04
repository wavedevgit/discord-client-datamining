package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f50612o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f50613d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50614e;

    /* renamed from: i  reason: collision with root package name */
    private final String f50615i;

    public g(f fVar) {
        this.f50614e = fVar.f50610a.booleanValue();
        this.f50615i = fVar.f50611b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f50613d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f50614e);
        bundle.putString("log_session_id", this.f50615i);
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
        if (o.a(null, null) && this.f50614e == gVar.f50614e && o.a(this.f50615i, gVar.f50615i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f50614e), this.f50615i);
    }
}
