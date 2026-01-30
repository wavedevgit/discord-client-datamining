package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f50272o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f50273d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50274e;

    /* renamed from: i  reason: collision with root package name */
    private final String f50275i;

    public g(f fVar) {
        this.f50274e = fVar.f50270a.booleanValue();
        this.f50275i = fVar.f50271b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f50273d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f50274e);
        bundle.putString("log_session_id", this.f50275i);
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
        if (o.a(null, null) && this.f50274e == gVar.f50274e && o.a(this.f50275i, gVar.f50275i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f50274e), this.f50275i);
    }
}
