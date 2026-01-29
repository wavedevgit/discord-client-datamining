package ff;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: d  reason: collision with root package name */
    protected final h f25104d;

    /* JADX INFO: Access modifiers changed from: protected */
    public g(h hVar) {
        this.f25104d = hVar;
    }

    public static h c(Activity activity) {
        return d(new f(activity));
    }

    protected static h d(f fVar) {
        if (fVar.d()) {
            return j1.x(fVar.b());
        }
        if (fVar.c()) {
            return g1.a(fVar.a());
        }
        throw new IllegalArgumentException("Can't get fragment for unexpected activity.");
    }

    public Activity b() {
        Activity g10 = this.f25104d.g();
        gf.q.l(g10);
        return g10;
    }

    public abstract void e(int i10, int i11, Intent intent);

    public void g() {
    }

    public void h() {
    }

    public void j() {
    }

    public void k() {
    }

    public void f(Bundle bundle) {
    }

    public void i(Bundle bundle) {
    }

    public void a(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
    }
}
