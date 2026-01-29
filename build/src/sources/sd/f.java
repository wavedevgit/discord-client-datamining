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
    public final long f48938a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f48939b;

    /* renamed from: c  reason: collision with root package name */
    public final int f48940c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f48941d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48942e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f48943f;

    /* renamed from: g  reason: collision with root package name */
    public final long f48944g;

    /* renamed from: h  reason: collision with root package name */
    public final long f48945h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f48946i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f48946i = new a0(dataSource);
        this.f48939b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f48940c = i10;
        this.f48941d = format;
        this.f48942e = i11;
        this.f48943f = obj;
        this.f48944g = j10;
        this.f48945h = j11;
    }

    public final long a() {
        return this.f48946i.o();
    }

    public final long d() {
        return this.f48945h - this.f48944g;
    }

    public final Map e() {
        return this.f48946i.q();
    }

    public final Uri f() {
        return this.f48946i.p();
    }
}
