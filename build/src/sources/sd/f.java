package sd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.i;
import java.util.Map;
import le.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements i.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f48954a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f48955b;

    /* renamed from: c  reason: collision with root package name */
    public final int f48956c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f48957d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48958e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f48959f;

    /* renamed from: g  reason: collision with root package name */
    public final long f48960g;

    /* renamed from: h  reason: collision with root package name */
    public final long f48961h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f48962i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f48962i = new a0(dataSource);
        this.f48955b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f48956c = i10;
        this.f48957d = format;
        this.f48958e = i11;
        this.f48959f = obj;
        this.f48960g = j10;
        this.f48961h = j11;
    }

    public final long a() {
        return this.f48962i.o();
    }

    public final long d() {
        return this.f48961h - this.f48960g;
    }

    public final Map e() {
        return this.f48962i.q();
    }

    public final Uri f() {
        return this.f48962i.p();
    }
}
