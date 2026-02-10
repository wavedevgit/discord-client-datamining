package f9;

import aa.g;
import com.facebook.common.internal.Supplier;
import java.util.List;
import p8.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final p8.e f22486a;

    /* renamed from: b  reason: collision with root package name */
    private final f f22487b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f22488c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f22489a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f22490b;

        /* renamed from: c  reason: collision with root package name */
        private f f22491c;

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
        return this.f22486a;
    }

    public Supplier b() {
        return this.f22488c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f22487b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f22486a = aVar.f22489a != null ? p8.e.b(aVar.f22489a) : null;
        if (aVar.f22490b != null) {
            a10 = aVar.f22490b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f22488c = a10;
        this.f22487b = aVar.f22491c;
        a.c(aVar);
    }
}
