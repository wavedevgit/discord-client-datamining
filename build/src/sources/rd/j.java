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
    private final a f46350a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f46351b;

    /* renamed from: c  reason: collision with root package name */
    private long f46352c;

    /* renamed from: d  reason: collision with root package name */
    private long f46353d;

    /* renamed from: e  reason: collision with root package name */
    private long f46354e;

    /* renamed from: f  reason: collision with root package name */
    private float f46355f;

    /* renamed from: g  reason: collision with root package name */
    private float f46356g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.p f46357a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f46358b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f46359c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f46360d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f46361e;

        public a(uc.p pVar) {
            this.f46357a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f46361e) {
                this.f46361e = factory;
                this.f46358b.clear();
                this.f46360d.clear();
            }
        }
    }

    public j(Context context, uc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, uc.p pVar) {
        this.f46351b = factory;
        a aVar = new a(pVar);
        this.f46350a = aVar;
        aVar.a(factory);
        this.f46352c = -9223372036854775807L;
        this.f46353d = -9223372036854775807L;
        this.f46354e = -9223372036854775807L;
        this.f46355f = -3.4028235E38f;
        this.f46356g = -3.4028235E38f;
    }
}
