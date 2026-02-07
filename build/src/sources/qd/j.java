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
    private final a f46778a;

    /* renamed from: b  reason: collision with root package name */
    private DataSource.Factory f46779b;

    /* renamed from: c  reason: collision with root package name */
    private long f46780c;

    /* renamed from: d  reason: collision with root package name */
    private long f46781d;

    /* renamed from: e  reason: collision with root package name */
    private long f46782e;

    /* renamed from: f  reason: collision with root package name */
    private float f46783f;

    /* renamed from: g  reason: collision with root package name */
    private float f46784g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.p f46785a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f46786b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private final Set f46787c = new HashSet();

        /* renamed from: d  reason: collision with root package name */
        private final Map f46788d = new HashMap();

        /* renamed from: e  reason: collision with root package name */
        private DataSource.Factory f46789e;

        public a(tc.p pVar) {
            this.f46785a = pVar;
        }

        public void a(DataSource.Factory factory) {
            if (factory != this.f46789e) {
                this.f46789e = factory;
                this.f46786b.clear();
                this.f46788d.clear();
            }
        }
    }

    public j(Context context, tc.p pVar) {
        this(new b.a(context), pVar);
    }

    public j(DataSource.Factory factory, tc.p pVar) {
        this.f46779b = factory;
        a aVar = new a(pVar);
        this.f46778a = aVar;
        aVar.a(factory);
        this.f46780c = -9223372036854775807L;
        this.f46781d = -9223372036854775807L;
        this.f46782e = -9223372036854775807L;
        this.f46783f = -3.4028235E38f;
        this.f46784g = -3.4028235E38f;
    }
}
