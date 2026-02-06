package sd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.j;
import java.util.Map;
import le.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements j.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f49885a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f49886b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49887c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f49888d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49889e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f49890f;

    /* renamed from: g  reason: collision with root package name */
    public final long f49891g;

    /* renamed from: h  reason: collision with root package name */
    public final long f49892h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f49893i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f49893i = new a0(dataSource);
        this.f49886b = (com.google.android.exoplayer2.upstream.a) ne.a.e(aVar);
        this.f49887c = i10;
        this.f49888d = format;
        this.f49889e = i11;
        this.f49890f = obj;
        this.f49891g = j10;
        this.f49892h = j11;
    }

    public final long a() {
        return this.f49893i.o();
    }

    public final long d() {
        return this.f49892h - this.f49891g;
    }

    public final Map e() {
        return this.f49893i.q();
    }

    public final Uri f() {
        return this.f49893i.p();
    }
}
