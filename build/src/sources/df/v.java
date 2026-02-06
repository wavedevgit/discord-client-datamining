package df;

import android.os.Bundle;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    final int f20744a;

    /* renamed from: b  reason: collision with root package name */
    final yg.k f20745b = new yg.k();

    /* renamed from: c  reason: collision with root package name */
    final int f20746c;

    /* renamed from: d  reason: collision with root package name */
    final Bundle f20747d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(int i10, int i11, Bundle bundle) {
        this.f20744a = i10;
        this.f20746c = i11;
        this.f20747d = bundle;
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
        this.f20745b.b(wVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(Object obj) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String obj2 = toString();
            String valueOf = String.valueOf(obj);
            Log.d("MessengerIpcClient", "Finishing " + obj2 + " with " + valueOf);
        }
        this.f20745b.c(obj);
    }

    public final String toString() {
        return "Request { what=" + this.f20746c + " id=" + this.f20744a + " oneWay=" + b() + "}";
    }
}
