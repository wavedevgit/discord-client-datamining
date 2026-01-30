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
    private final a f47213a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47214b;

    /* renamed from: c  reason: collision with root package name */
    private long f47215c;

    /* renamed from: d  reason: collision with root package name */
    private long f47216d;

    /* renamed from: e  reason: collision with root package name */
    private long f47217e;

    /* renamed from: f  reason: collision with root package name */
    private float f47218f;

    /* renamed from: g  reason: collision with root package name */
    private float f47219g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f47220a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47221b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47222c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47223d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47224e;

        public a(tc.p pVar) {
            this.f47220a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47224e) {
                this.f47224e = factory;
                this.f47221b.clear();
                this.f47223d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f47214b = factory;
        a aVar = new a(pVar);
        this.f47213a = aVar;
        aVar.a(factory);
        this.f47215c = -9223372036854775807L;
        this.f47216d = -9223372036854775807L;
        this.f47217e = -9223372036854775807L;
        this.f47218f = -3.4028235E38f;
        this.f47219g = -3.4028235E38f;
    }
}
