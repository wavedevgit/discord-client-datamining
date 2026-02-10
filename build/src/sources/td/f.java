package td;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.j;
import java.util.Map;
import me.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements j.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f48706a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f48707b;

    /* renamed from: c  reason: collision with root package name */
    public final int f48708c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f48709d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48710e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f48711f;

    /* renamed from: g  reason: collision with root package name */
    public final long f48712g;

    /* renamed from: h  reason: collision with root package name */
    public final long f48713h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f48714i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f48714i = new a0(dataSource);
        this.f48707b = (com.google.android.exoplayer2.upstream.a) oe.a.e(aVar);
        this.f48708c = i10;
        this.f48709d = format;
        this.f48710e = i11;
        this.f48711f = obj;
        this.f48712g = j10;
        this.f48713h = j11;
    }

    public final long b() {
        return this.f48714i.o();
    }

    public final long d() {
        return this.f48713h - this.f48712g;
    }

    public final Map e() {
        return this.f48714i.q();
    }

    public final Uri f() {
        return this.f48714i.p();
    }
}
