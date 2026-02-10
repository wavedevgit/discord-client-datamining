package ve;

import android.os.Bundle;
import ff.a;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f51575o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f51576d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51577e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51578i;

    public g(f fVar) {
        this.f51577e = fVar.f51573a.booleanValue();
        this.f51578i = fVar.f51574b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f51576d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f51577e);
        bundle.putString("log_session_id", this.f51578i);
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
        if (o.a(null, null) && this.f51577e == gVar.f51577e && o.a(this.f51578i, gVar.f51578i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f51577e), this.f51578i);
    }
}
