package pb;

import android.content.Context;
import com.facebook.soloader.e0;
import com.facebook.soloader.p;
import com.facebook.soloader.v;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45055a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45056b;

    public b(Context context, a aVar) {
        this.f45055a = context;
        this.f45056b = aVar;
    }

    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        String str = this.f45055a.getApplicationInfo().sourceDir;
        if (new File(str).exists()) {
            p.g("soloader.recovery.CheckBaseApkExists", "Base apk exists: " + str);
            return false;
        }
        StringBuilder sb2 = new StringBuilder("Base apk does not exist: ");
        sb2.append(str);
        sb2.append(". ");
        this.f45056b.b(sb2);
        throw new v(sb2.toString(), unsatisfiedLinkError);
    }
}
