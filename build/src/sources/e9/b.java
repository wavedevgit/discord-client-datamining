package e9;

import com.facebook.common.internal.Supplier;
import java.util.List;
import o8.m;
import z9.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final o8.e f22650a;

    /* renamed from: b  reason: collision with root package name */
    private final f f22651b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f22652c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f22653a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f22654b;

        /* renamed from: c  reason: collision with root package name */
        private f f22655c;

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

    public o8.e a() {
        return this.f22650a;
    }

    public Supplier b() {
        return this.f22652c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f22651b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f22650a = aVar.f22653a != null ? o8.e.b(aVar.f22653a) : null;
        if (aVar.f22654b != null) {
            a10 = aVar.f22654b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f22652c = a10;
        this.f22651b = aVar.f22655c;
        a.c(aVar);
    }
}
