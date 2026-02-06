package e9;

import com.facebook.common.internal.Supplier;
import java.util.List;
import o8.m;
import z9.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final o8.e f21378a;

    /* renamed from: b  reason: collision with root package name */
    private final f f21379b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f21380c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f21381a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f21382b;

        /* renamed from: c  reason: collision with root package name */
        private f f21383c;

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
        return this.f21378a;
    }

    public Supplier b() {
        return this.f21380c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f21379b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f21378a = aVar.f21381a != null ? o8.e.b(aVar.f21381a) : null;
        if (aVar.f21382b != null) {
            a10 = aVar.f21382b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f21380c = a10;
        this.f21379b = aVar.f21383c;
        a.c(aVar);
    }
}
