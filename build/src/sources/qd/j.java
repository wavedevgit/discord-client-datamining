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
    private final a f47468a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f47469b;

    /* renamed from: c  reason: collision with root package name */
    private long f47470c;

    /* renamed from: d  reason: collision with root package name */
    private long f47471d;

    /* renamed from: e  reason: collision with root package name */
    private long f47472e;

    /* renamed from: f  reason: collision with root package name */
    private float f47473f;

    /* renamed from: g  reason: collision with root package name */
    private float f47474g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f47475a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f47476b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f47477c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f47478d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f47479e;

        public a(tc.p pVar) {
            this.f47475a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f47479e) {
                this.f47479e = factory;
                this.f47476b.clear();
                this.f47478d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f47469b = factory;
        a aVar = new a(pVar);
        this.f47468a = aVar;
        aVar.a(factory);
        this.f47470c = -9223372036854775807L;
        this.f47471d = -9223372036854775807L;
        this.f47472e = -9223372036854775807L;
        this.f47473f = -3.4028235E38f;
        this.f47474g = -3.4028235E38f;
    }
}
