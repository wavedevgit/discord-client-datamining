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
    public final long f49418a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f49419b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49420c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f49421d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49422e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f49423f;

    /* renamed from: g  reason: collision with root package name */
    public final long f49424g;

    /* renamed from: h  reason: collision with root package name */
    public final long f49425h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f49426i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f49426i = new a0(dataSource);
        this.f49419b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f49420c = i10;
        this.f49421d = format;
        this.f49422e = i11;
        this.f49423f = obj;
        this.f49424g = j10;
        this.f49425h = j11;
    }

    public final long a() {
        return this.f49426i.o();
    }

    public final long d() {
        return this.f49425h - this.f49424g;
    }

    public final Map e() {
        return this.f49426i.q();
    }

    public final Uri f() {
        return this.f49426i.p();
    }
}
