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
    public final long f50774a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f50775b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50776c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f50777d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50778e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f50779f;

    /* renamed from: g  reason: collision with root package name */
    public final long f50780g;

    /* renamed from: h  reason: collision with root package name */
    public final long f50781h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f50782i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f50782i = new a0(dataSource);
        this.f50775b = (com.google.android.exoplayer2.upstream.a) oe.a.e(aVar);
        this.f50776c = i10;
        this.f50777d = format;
        this.f50778e = i11;
        this.f50779f = obj;
        this.f50780g = j10;
        this.f50781h = j11;
    }

    public final long b() {
        return this.f50782i.o();
    }

    public final long d() {
        return this.f50781h - this.f50780g;
    }

    public final Map e() {
        return this.f50782i.q();
    }

    public final Uri f() {
        return this.f50782i.p();
    }
}
