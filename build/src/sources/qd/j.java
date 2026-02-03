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
    private final a f47618a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47619b;

    /* renamed from: c  reason: collision with root package name */
    private long f47620c;

    /* renamed from: d  reason: collision with root package name */
    private long f47621d;

    /* renamed from: e  reason: collision with root package name */
    private long f47622e;

    /* renamed from: f  reason: collision with root package name */
    private float f47623f;

    /* renamed from: g  reason: collision with root package name */
    private float f47624g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f47625a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47626b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47627c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47628d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47629e;

        public a(tc.p pVar) {
            this.f47625a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47629e) {
                this.f47629e = factory;
                this.f47626b.clear();
                this.f47628d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f47619b = factory;
        a aVar = new a(pVar);
        this.f47618a = aVar;
        aVar.a(factory);
        this.f47620c = -9223372036854775807L;
        this.f47621d = -9223372036854775807L;
        this.f47622e = -9223372036854775807L;
        this.f47623f = -3.4028235E38f;
        this.f47624g = -3.4028235E38f;
    }
}
