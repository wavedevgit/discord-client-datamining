package ve;

import android.os.Bundle;
import ff.a;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f51576o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f51577d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51578e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51579i;

    public g(f fVar) {
        this.f51578e = fVar.f51574a.booleanValue();
        this.f51579i = fVar.f51575b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f51577d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f51578e);
        bundle.putString("log_session_id", this.f51579i);
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
        if (o.a(null, null) && this.f51578e == gVar.f51578e && o.a(this.f51579i, gVar.f51579i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f51578e), this.f51579i);
    }
}
