package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f50256o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f50257d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50258e;

    /* renamed from: i  reason: collision with root package name */
    private final String f50259i;

    public g(f fVar) {
        this.f50258e = fVar.f50254a.booleanValue();
        this.f50259i = fVar.f50255b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f50257d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f50258e);
        bundle.putString("log_session_id", this.f50259i);
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
        if (o.a(null, null) && this.f50258e == gVar.f50258e && o.a(this.f50259i, gVar.f50259i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f50258e), this.f50259i);
    }
}
