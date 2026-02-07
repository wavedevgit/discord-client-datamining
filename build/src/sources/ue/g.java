package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f51473o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f51474d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51475e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51476i;

    public g(f fVar) {
        this.f51475e = fVar.f51471a.booleanValue();
        this.f51476i = fVar.f51472b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f51474d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f51475e);
        bundle.putString("log_session_id", this.f51476i);
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
        if (o.a(null, null) && this.f51475e == gVar.f51475e && o.a(this.f51476i, gVar.f51476i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f51475e), this.f51476i);
    }
}
