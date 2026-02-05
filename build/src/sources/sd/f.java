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
    public final long f49564a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f49565b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49566c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f49567d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49568e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f49569f;

    /* renamed from: g  reason: collision with root package name */
    public final long f49570g;

    /* renamed from: h  reason: collision with root package name */
    public final long f49571h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f49572i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f49572i = new a0(dataSource);
        this.f49565b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f49566c = i10;
        this.f49567d = format;
        this.f49568e = i11;
        this.f49569f = obj;
        this.f49570g = j10;
        this.f49571h = j11;
    }

    public final long a() {
        return this.f49572i.o();
    }

    public final long d() {
        return this.f49571h - this.f49570g;
    }

    public final Map e() {
        return this.f49572i.q();
    }

    public final Uri f() {
        return this.f49572i.p();
    }
}
