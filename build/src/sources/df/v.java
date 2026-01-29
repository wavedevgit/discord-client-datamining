package df;

import android.os.Bundle;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    final int f22138a;

    /* renamed from: b  reason: collision with root package name */
    final wg.k f22139b = new wg.k();

    /* renamed from: c  reason: collision with root package name */
    final int f22140c;

    /* renamed from: d  reason: collision with root package name */
    final Bundle f22141d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(int i10, int i11, Bundle bundle) {
        this.f22138a = i10;
        this.f22140c = i11;
        this.f22141d = bundle;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void a(Bundle bundle);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(w wVar) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String obj = toString();
            String obj2 = wVar.toString();
            Log.d("MessengerIpcClient", "Failing " + obj + " with " + obj2);
        }
        this.f22139b.b(wVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(Object obj) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String obj2 = toString();
            String valueOf = String.valueOf(obj);
            Log.d("MessengerIpcClient", "Finishing " + obj2 + " with " + valueOf);
        }
        this.f22139b.c(obj);
    }

    public final String toString() {
        return "Request { what=" + this.f22140c + " id=" + this.f22138a + " oneWay=" + b() + "}";
    }
}
