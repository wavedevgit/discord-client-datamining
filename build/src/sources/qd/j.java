package qd;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.b;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements r.a {

    /* renamed from: a  reason: collision with root package name */
    private final a f46730a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f46731b;

    /* renamed from: c  reason: collision with root package name */
    private long f46732c;

    /* renamed from: d  reason: collision with root package name */
    private long f46733d;

    /* renamed from: e  reason: collision with root package name */
    private long f46734e;

    /* renamed from: f  reason: collision with root package name */
    private float f46735f;

    /* renamed from: g  reason: collision with root package name */
    private float f46736g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f46737a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f46738b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f46739c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f46740d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f46741e;

        public a(tc.p pVar) {
            this.f46737a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f46741e) {
                this.f46741e = factory;
                this.f46738b.clear();
                this.f46740d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f46731b = factory;
        a aVar = new a(pVar);
        this.f46730a = aVar;
        aVar.a(factory);
        this.f46732c = -9223372036854775807L;
        this.f46733d = -9223372036854775807L;
        this.f46734e = -9223372036854775807L;
        this.f46735f = -3.4028235E38f;
        this.f46736g = -3.4028235E38f;
    }
}
