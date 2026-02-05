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
        private File f7416a = null;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Context f7417b;

        a(Context context) {
            this.f7417b = context;
        }

        @Override // c6.d.c
        public File get() {
            if (this.f7416a == null) {
                this.f7416a = new File(this.f7417b.getCacheDir(), "volley");
            }
            return this.f7416a;
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
