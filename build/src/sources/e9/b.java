package e9;

import com.facebook.common.internal.Supplier;
import java.util.List;
import o8.m;
import z9.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final o8.e f21373a;

    /* renamed from: b  reason: collision with root package name */
    private final f f21374b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f21375c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f21376a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f21377b;

        /* renamed from: c  reason: collision with root package name */
        private f f21378c;

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
        return this.f21373a;
    }

    public Supplier b() {
        return this.f21375c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f21374b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f21373a = aVar.f21376a != null ? o8.e.b(aVar.f21376a) : null;
        if (aVar.f21377b != null) {
            a10 = aVar.f21377b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f21375c = a10;
        this.f21374b = aVar.f21378c;
        a.c(aVar);
    }
}
