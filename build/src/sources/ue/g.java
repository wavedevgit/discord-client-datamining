package ue;

import android.os.Bundle;
import ef.a;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f51425o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f51426d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51427e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51428i;

    public g(f fVar) {
        this.f51427e = fVar.f51423a.booleanValue();
        this.f51428i = fVar.f51424b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f51426d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f51427e);
        bundle.putString("log_session_id", this.f51428i);
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
        if (o.a(null, null) && this.f51427e == gVar.f51427e && o.a(this.f51428i, gVar.f51428i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f51427e), this.f51428i);
    }
}
