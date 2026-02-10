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
    private final a f47896a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47897b;

    /* renamed from: c  reason: collision with root package name */
    private long f47898c;

    /* renamed from: d  reason: collision with root package name */
    private long f47899d;

    /* renamed from: e  reason: collision with root package name */
    private long f47900e;

    /* renamed from: f  reason: collision with root package name */
    private float f47901f;

    /* renamed from: g  reason: collision with root package name */
    private float f47902g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.p f47903a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47904b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47905c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47906d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47907e;

        public a(uc.p pVar) {
            this.f47903a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47907e) {
                this.f47907e = factory;
                this.f47904b.clear();
                this.f47906d.clear();
            }
        }
    }

    public j(Context context, uc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, uc.p pVar) {
        this.f47897b = factory;
        a aVar = new a(pVar);
        this.f47896a = aVar;
        aVar.a(factory);
        this.f47898c = -9223372036854775807L;
        this.f47899d = -9223372036854775807L;
        this.f47900e = -9223372036854775807L;
        this.f47901f = -3.4028235E38f;
        this.f47902g = -3.4028235E38f;
    }
}
