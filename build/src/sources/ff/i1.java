package ff;

import android.content.Intent;
import android.os.Bundle;
import android.os.Looper;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f23923a = Collections.synchronizedMap(new u0.a());

    /* renamed from: b  reason: collision with root package name */
    private int f23924b = 0;

    /* renamed from: c  reason: collision with root package name */
    private Bundle f23925c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public final g c(String str, Class cls) {
        return (g) cls.cast(this.f23923a.get(str));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(String str, g gVar) {
        if (!this.f23923a.containsKey(str)) {
            this.f23923a.put(str, gVar);
            if (this.f23924b > 0) {
                new hg.g(Looper.getMainLooper()).post(new h1(this, gVar, str));
                return;
            }
            return;
        }
        throw new IllegalArgumentException("LifecycleCallback with tag " + str + " already added to this fragment.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        for (g gVar : this.f23923a.values()) {
            gVar.a(str, fileDescriptor, printWriter, strArr);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10, int i11, Intent intent) {
        for (g gVar : this.f23923a.values()) {
            gVar.e(i10, i11, intent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(Bundle bundle) {
        Bundle bundle2;
        this.f23924b = 1;
        this.f23925c = bundle;
        for (Map.Entry entry : this.f23923a.entrySet()) {
            g gVar = (g) entry.getValue();
            if (bundle != null) {
                bundle2 = bundle.getBundle((String) entry.getKey());
            } else {
                bundle2 = null;
            }
            gVar.f(bundle2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h() {
        this.f23924b = 5;
        for (g gVar : this.f23923a.values()) {
            gVar.g();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void i() {
        this.f23924b = 3;
        for (g gVar : this.f23923a.values()) {
            gVar.h();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j(Bundle bundle) {
        if (bundle != null) {
            for (Map.Entry entry : this.f23923a.entrySet()) {
                Bundle bundle2 = new Bundle();
                ((g) entry.getValue()).i(bundle2);
                bundle.putBundle((String) entry.getKey(), bundle2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k() {
        this.f23924b = 2;
        for (g gVar : this.f23923a.values()) {
            gVar.j();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void l() {
        this.f23924b = 4;
        for (g gVar : this.f23923a.values()) {
            gVar.k();
        }
    }
}
