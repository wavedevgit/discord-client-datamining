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
        private File f20540a = null;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Context f20541b;

        a(Context context) {
            this.f20541b = context;
        }

        @Override // d6.d.c
        public File get() {
            if (this.f20540a == null) {
                this.f20540a = new File(this.f20541b.getCacheDir(), "volley");
            }
            return this.f20540a;
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
