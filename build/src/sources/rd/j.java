package rd;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.b;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements r.a {

    /* renamed from: a  reason: collision with root package name */
    private final a f46919a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f46920b;

    /* renamed from: c  reason: collision with root package name */
    private long f46921c;

    /* renamed from: d  reason: collision with root package name */
    private long f46922d;

    /* renamed from: e  reason: collision with root package name */
    private long f46923e;

    /* renamed from: f  reason: collision with root package name */
    private float f46924f;

    /* renamed from: g  reason: collision with root package name */
    private float f46925g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.p f46926a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f46927b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f46928c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f46929d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f46930e;

        public a(uc.p pVar) {
            this.f46926a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f46930e) {
                this.f46930e = factory;
                this.f46927b.clear();
                this.f46929d.clear();
            }
        }
    }

    public j(Context context, uc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, uc.p pVar) {
        this.f46920b = factory;
        a aVar = new a(pVar);
        this.f46919a = aVar;
        aVar.a(factory);
        this.f46921c = -9223372036854775807L;
        this.f46922d = -9223372036854775807L;
        this.f46923e = -9223372036854775807L;
        this.f46924f = -3.4028235E38f;
        this.f46925g = -3.4028235E38f;
    }
}
