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
    public final long f49275a = LoadEventInfo.a();

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f49276b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49277c;

    /* renamed from: d  reason: collision with root package name */
    public final Format f49278d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49279e;

    /* renamed from: f  reason: collision with root package name */
    public final Object f49280f;

    /* renamed from: g  reason: collision with root package name */
    public final long f49281g;

    /* renamed from: h  reason: collision with root package name */
    public final long f49282h;

    /* renamed from: i  reason: collision with root package name */
    protected final a0 f49283i;

    public f(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, long j10, long j11) {
        this.f49283i = new a0(dataSource);
        this.f49276b = (com.google.android.exoplayer2.upstream.a) oe.a.e(aVar);
        this.f49277c = i10;
        this.f49278d = format;
        this.f49279e = i11;
        this.f49280f = obj;
        this.f49281g = j10;
        this.f49282h = j11;
    }

    public final long b() {
        return this.f49283i.o();
    }

    public final long d() {
        return this.f49282h - this.f49281g;
    }

    public final Map e() {
        return this.f49283i.q();
    }

    public final Uri f() {
        return this.f49283i.p();
    }
}
