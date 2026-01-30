package uq;

import java.net.URLEncoder;
import kotlin.text.Charsets;
import ku.b;
import lv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final a f50550a = new a();

    private a() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            return URLEncoder.encode(a10, Charsets.UTF_8.name());
        }
        return null;
    }
}
