package ve;

import android.os.Bundle;
import ff.a;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements a.d {

    /* renamed from: o  reason: collision with root package name */
    public static final g f52333o = new g(new f());

    /* renamed from: d  reason: collision with root package name */
    private final String f52334d = null;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52335e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52336i;

    public g(f fVar) {
        this.f52335e = fVar.f52331a.booleanValue();
        this.f52336i = fVar.f52332b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ String b(g gVar) {
        String str = gVar.f52334d;
        return null;
    }

    public final Bundle a() {
        Bundle bundle = new Bundle();
        bundle.putString("consumer_package", null);
        bundle.putBoolean("force_save_dialog", this.f52335e);
        bundle.putString("log_session_id", this.f52336i);
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
        if (o.a(null, null) && this.f52335e == gVar.f52335e && o.a(this.f52336i, gVar.f52336i)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(null, Boolean.valueOf(this.f52335e), this.f52336i);
    }
}
