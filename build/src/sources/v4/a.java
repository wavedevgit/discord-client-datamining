package v4;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f52115a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static h f52116b;

    private a() {
    }

    public static final h a(Context context) {
        h hVar = f52116b;
        if (hVar == null) {
            return f52115a.b(context);
        }
        return hVar;
    }

    private final synchronized h b(Context context) {
        h hVar = f52116b;
        if (hVar != null) {
            return hVar;
        }
        context.getApplicationContext();
        h a10 = i.a(context);
        f52116b = a10;
        return a10;
    }
}
