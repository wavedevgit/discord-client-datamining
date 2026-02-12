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
    private final a f46351a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f46352b;

    /* renamed from: c  reason: collision with root package name */
    private long f46353c;

    /* renamed from: d  reason: collision with root package name */
    private long f46354d;

    /* renamed from: e  reason: collision with root package name */
    private long f46355e;

    /* renamed from: f  reason: collision with root package name */
    private float f46356f;

    /* renamed from: g  reason: collision with root package name */
    private float f46357g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.p f46358a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f46359b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f46360c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f46361d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f46362e;

        public a(uc.p pVar) {
            this.f46358a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f46362e) {
                this.f46362e = factory;
                this.f46359b.clear();
                this.f46361d.clear();
            }
        }
    }

    public j(Context context, uc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, uc.p pVar) {
        this.f46352b = factory;
        a aVar = new a(pVar);
        this.f46351a = aVar;
        aVar.a(factory);
        this.f46353c = -9223372036854775807L;
        this.f46354d = -9223372036854775807L;
        this.f46355e = -9223372036854775807L;
        this.f46356f = -3.4028235E38f;
        this.f46357g = -3.4028235E38f;
    }
}
