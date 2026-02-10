package f9;

import aa.g;
import com.facebook.common.internal.Supplier;
import java.util.List;
import p8.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final p8.e f23611a;

    /* renamed from: b  reason: collision with root package name */
    private final f f23612b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f23613c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f23614a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f23615b;

        /* renamed from: c  reason: collision with root package name */
        private f f23616c;

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
        return this.f23611a;
    }

    public Supplier b() {
        return this.f23613c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f23612b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f23611a = aVar.f23614a != null ? p8.e.b(aVar.f23614a) : null;
        if (aVar.f23615b != null) {
            a10 = aVar.f23615b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f23613c = a10;
        this.f23612b = aVar.f23616c;
        a.c(aVar);
    }
}
