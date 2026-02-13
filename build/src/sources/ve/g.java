package ve;

import android.os.Bundle;
import ff.a;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f52144o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f52145d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52146e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52147i;

    public g(f fVar) {
        this.f52146e = fVar.f52142a.booleanValue();
        this.f52147i = fVar.f52143b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f52145d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f52146e);
        bundle.putString("log_session_id", this.f52147i);
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
        if (o.a(null, null) && this.f52146e == gVar.f52146e && o.a(this.f52147i, gVar.f52147i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f52146e), this.f52147i);
    }
}
