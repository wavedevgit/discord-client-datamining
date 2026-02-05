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
    private final a f47682a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47683b;

    /* renamed from: c  reason: collision with root package name */
    private long f47684c;

    /* renamed from: d  reason: collision with root package name */
    private long f47685d;

    /* renamed from: e  reason: collision with root package name */
    private long f47686e;

    /* renamed from: f  reason: collision with root package name */
    private float f47687f;

    /* renamed from: g  reason: collision with root package name */
    private float f47688g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f47689a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47690b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47691c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47692d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47693e;

        public a(tc.p pVar) {
            this.f47689a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47693e) {
                this.f47693e = factory;
                this.f47690b.clear();
                this.f47692d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f47683b = factory;
        a aVar = new a(pVar);
        this.f47682a = aVar;
        aVar.a(factory);
        this.f47684c = -9223372036854775807L;
        this.f47685d = -9223372036854775807L;
        this.f47686e = -9223372036854775807L;
        this.f47687f = -3.4028235E38f;
        this.f47688g = -3.4028235E38f;
    }
}
