package d6;

import android.content.Context;
import com.android.volley.o;
import d6.d;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d.c {

        /* renamed from: a  reason: collision with root package name */
        private File f21488a = null;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Context f21489b;

        a(Context context) {
            this.f21489b = context;
        }

        @Override // d6.d.c
        public File get() {
            if (this.f21488a == null) {
                this.f21488a = new File(this.f21489b.getCacheDir(), "volley");
            }
            return this.f21488a;
        }
    }

    public static o a(Context context) {
        return c(context, null);
    }

    private static o b(Context context, com.android.volley.h hVar) {
        o oVar = new o(new d(new a(context.getApplicationContext())), hVar);
        oVar.h();
        return oVar;
    }

    public static o c(Context context, d6.a aVar) {
        b bVar;
        if (aVar == null) {
            bVar = new b(new h());
        } else {
            bVar = new b(aVar);
        }
        return b(context, bVar);
    }
}
