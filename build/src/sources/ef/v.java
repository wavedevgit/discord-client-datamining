package ef;

import android.os.Bundle;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    final int f21633a;

    /* renamed from: b  reason: collision with root package name */
    final zg.k f21634b = new zg.k();

    /* renamed from: c  reason: collision with root package name */
    final int f21635c;

    /* renamed from: d  reason: collision with root package name */
    final Bundle f21636d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(int i10, int i11, Bundle bundle) {
        this.f21633a = i10;
        this.f21635c = i11;
        this.f21636d = bundle;
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
        this.f21634b.b(wVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(Object obj) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String obj2 = toString();
            String valueOf = String.valueOf(obj);
            Log.d("MessengerIpcClient", "Finishing " + obj2 + " with " + valueOf);
        }
        this.f21634b.c(obj);
    }

    public final String toString() {
        return "Request { what=" + this.f21635c + " id=" + this.f21633a + " oneWay=" + b() + "}";
    }
}
