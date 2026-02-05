package ff;

import android.content.Intent;
import android.os.Bundle;
import android.os.Looper;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f22948a = Collections.synchronizedMap(new u0.a());

    /* renamed from: b  reason: collision with root package name */
    private int f22949b = 0;

    /* renamed from: c  reason: collision with root package name */
    private Bundle f22950c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public final g a(String str, Class cls) {
        return (g) cls.cast(this.f22948a.get(str));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(String str, g gVar) {
        Map map = this.f22948a;
        if (!map.containsKey(str)) {
            map.put(str, gVar);
            if (this.f22949b > 0) {
                new hg.p(Looper.getMainLooper()).post(new h1(this, gVar, str));
                return;
            }
            return;
        }
        StringBuilder sb2 = new StringBuilder(String.valueOf(str).length() + 59);
        sb2.append("LifecycleCallback with tag ");
        sb2.append(str);
        sb2.append(" already added to this fragment.");
        throw new IllegalArgumentException(sb2.toString());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(Bundle bundle) {
        Bundle bundle2;
        this.f22949b = 1;
        this.f22950c = bundle;
        for (Map.Entry entry : this.f22948a.entrySet()) {
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
    public final void d() {
        this.f22949b = 2;
        for (g gVar : this.f22948a.values()) {
            gVar.j();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e() {
        this.f22949b = 3;
        for (g gVar : this.f22948a.values()) {
            gVar.h();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10, int i11, Intent intent) {
        for (g gVar : this.f22948a.values()) {
            gVar.e(i10, i11, intent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(Bundle bundle) {
        if (bundle != null) {
            for (Map.Entry entry : this.f22948a.entrySet()) {
                Bundle bundle2 = new Bundle();
                ((g) entry.getValue()).i(bundle2);
                bundle.putBundle((String) entry.getKey(), bundle2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h() {
        this.f22949b = 4;
        for (g gVar : this.f22948a.values()) {
            gVar.k();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void i() {
        this.f22949b = 5;
        for (g gVar : this.f22948a.values()) {
            gVar.g();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        for (g gVar : this.f22948a.values()) {
            gVar.a(str, fileDescriptor, printWriter, strArr);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ int k() {
        return this.f22949b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Bundle l() {
        return this.f22950c;
    }
}
