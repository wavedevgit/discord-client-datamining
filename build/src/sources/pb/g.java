package pb;

import android.content.Context;
import com.facebook.soloader.e0;
import com.facebook.soloader.p;
import com.facebook.soloader.w;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45063a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45064b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45065c;

    public g(Context context, a aVar) {
        this.f45063a = context;
        this.f45064b = aVar;
        this.f45065c = aVar.c();
    }

    private boolean b() {
        String c10 = c();
        if (new File(c10).exists() && this.f45064b.a(c10)) {
            return true;
        }
        return false;
    }

    private String c() {
        return this.f45063a.getApplicationInfo().sourceDir;
    }

    private void d(e0[] e0VarArr) {
        for (int i10 = 0; i10 < e0VarArr.length; i10++) {
            e0 e0Var = e0VarArr[i10];
            if (e0Var instanceof w) {
                e0VarArr[i10] = ((w) e0Var).b(this.f45063a);
            }
        }
    }

    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        if (b()) {
            d(e0VarArr);
            return true;
        } else if (this.f45065c != this.f45064b.c()) {
            p.g("soloader.recovery.DetectDataAppMove", "Context was updated (perhaps by another thread)");
            return true;
        } else {
            return false;
        }
    }
}
