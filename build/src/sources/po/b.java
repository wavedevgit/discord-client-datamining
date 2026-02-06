package po;

import android.content.Context;
import br.h;
import jo.c4;
import un.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f45088a;

    /* renamed from: b  reason: collision with root package name */
    private final h f45089b;

    public b(h hVar, h hVar2) {
        this.f45088a = hVar;
        this.f45089b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f45088a.get(), (f0) this.f45089b.get(), eVar);
    }
}
