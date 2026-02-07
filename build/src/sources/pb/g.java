package pb;

import android.content.Context;
import com.facebook.soloader.e0;
import com.facebook.soloader.p;
import com.facebook.soloader.w;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f43838a;

    /* renamed from: b  reason: collision with root package name */
    private final a f43839b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43840c;

    public g(Context context, a aVar) {
        this.f43838a = context;
        this.f43839b = aVar;
        this.f43840c = aVar.c();
    }

    private boolean b() {
        String c10 = c();
        if (new File(c10).exists() && this.f43839b.a(c10)) {
            return true;
        }
        return false;
    }

    private String c() {
        return this.f43838a.getApplicationInfo().sourceDir;
    }

    private void d(e0[] e0VarArr) {
        for (int i10 = 0; i10 < e0VarArr.length; i10++) {
            e0 e0Var = e0VarArr[i10];
            if (e0Var instanceof w) {
                e0VarArr[i10] = ((w) e0Var).b(this.f43838a);
            }
        }
    }

    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        if (b()) {
            d(e0VarArr);
            return true;
        } else if (this.f43840c != this.f43839b.c()) {
            p.g("soloader.recovery.DetectDataAppMove", "Context was updated (perhaps by another thread)");
            return true;
        } else {
            return false;
        }
    }
}
