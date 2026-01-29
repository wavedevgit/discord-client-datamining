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
    private final a f47197a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47198b;

    /* renamed from: c  reason: collision with root package name */
    private long f47199c;

    /* renamed from: d  reason: collision with root package name */
    private long f47200d;

    /* renamed from: e  reason: collision with root package name */
    private long f47201e;

    /* renamed from: f  reason: collision with root package name */
    private float f47202f;

    /* renamed from: g  reason: collision with root package name */
    private float f47203g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f47204a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47205b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47206c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47207d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47208e;

        public a(tc.p pVar) {
            this.f47204a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47208e) {
                this.f47208e = factory;
                this.f47205b.clear();
                this.f47207d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f47198b = factory;
        a aVar = new a(pVar);
        this.f47197a = aVar;
        aVar.a(factory);
        this.f47199c = -9223372036854775807L;
        this.f47200d = -9223372036854775807L;
        this.f47201e = -9223372036854775807L;
        this.f47202f = -3.4028235E38f;
        this.f47203g = -3.4028235E38f;
    }
}
