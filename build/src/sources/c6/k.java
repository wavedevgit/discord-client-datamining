package c6;

import android.content.Context;
import c6.d;
import com.android.volley.o;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d.c {

        /* renamed from: a  reason: collision with root package name */
        private File f8155a = null;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Context f8156b;

        a(Context context) {
            this.f8156b = context;
        }

        @Override // c6.d.c
        public File get() {
            if (this.f8155a == null) {
                this.f8155a = new File(this.f8156b.getCacheDir(), "volley");
            }
            return this.f8155a;
        }
    }

    public static o a(Context context) {
        return b(context, null);
    }

    public static o b(Context context, c6.a aVar) {
        b bVar;
        if (aVar == null) {
            bVar = new b(new h());
        } else {
            bVar = new b(aVar);
        }
        return c(context, bVar);
    }

    private static o c(Context context, com.android.volley.h hVar) {
        o oVar = new o(new d(new a(context.getApplicationContext())), hVar);
        oVar.h();
        return oVar;
    }
}
