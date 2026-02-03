package e9;

import com.facebook.common.internal.Supplier;
import java.util.List;
import o8.m;
import z9.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final o8.e f22682a;

    /* renamed from: b  reason: collision with root package name */
    private final f f22683b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f22684c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private List f22685a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f22686b;

        /* renamed from: c  reason: collision with root package name */
        private f f22687c;

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
        return this.f22682a;
    }

    public Supplier b() {
        return this.f22684c;
    }

    public g c() {
        return null;
    }

    public f d() {
        return this.f22683b;
    }

    private b(a aVar) {
        Supplier a10;
        this.f22682a = aVar.f22685a != null ? o8.e.b(aVar.f22685a) : null;
        if (aVar.f22686b != null) {
            a10 = aVar.f22686b;
        } else {
            a10 = m.a(Boolean.FALSE);
        }
        this.f22684c = a10;
        this.f22683b = aVar.f22687c;
        a.c(aVar);
    }
}
