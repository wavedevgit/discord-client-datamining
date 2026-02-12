package f9;

import aa.g;
import com.facebook.common.internal.Supplier;
import java.util.List;
import p8.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final p8.e f23612a;

    /* renamed from: b  reason: collision with root package name */
    private final f f23613b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f23614c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f23615a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f23616b;

        /* renamed from: c  reason: collision with root package name */
        private f f23617c;

        static /* bridge */ /* synthetic */ g c(a aVar) {
            aVar.getClass();
            return null;
        }

        public b e() {
            return new b(this);
        }
    }

    public static a e() {
        return new a();
    }

    public p8.e a() {
        return this.f23612a;
    }

    public Supplier b() {
        return this.f23614c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f23613b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f23612a = aVar.f23615a != null ? p8.e.b(aVar.f23615a) : null;
        if (aVar.f23616b != null) {
            a10 = aVar.f23616b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f23614c = a10;
        this.f23613b = aVar.f23617c;
        a.c(aVar);
    }
}
