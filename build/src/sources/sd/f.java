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
    public final long f49415a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f49416b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49417c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f49418d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49419e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f49420f;

    /* renamed from: g  reason: collision with root package name */
    public final long f49421g;

    /* renamed from: h  reason: collision with root package name */
    public final long f49422h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f49423i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f49423i = new a0(dataSource);
        this.f49416b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f49417c = i10;
        this.f49418d = format;
        this.f49419e = i11;
        this.f49420f = obj;
        this.f49421g = j10;
        this.f49422h = j11;
    }

    public final long a() {
        return this.f49423i.o();
    }

    public final long d() {
        return this.f49422h - this.f49421g;
    }

    public final Map e() {
        return this.f49423i.q();
    }

    public final Uri f() {
        return this.f49423i.p();
    }
}
