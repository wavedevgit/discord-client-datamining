package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends n {

    /* renamed from: k  reason: collision with root package name */
    public final long f49537k;

    /* renamed from: l  reason: collision with root package name */
    public final long f49538l;

    /* renamed from: m  reason: collision with root package name */
    private c f49539m;

    /* renamed from: n  reason: collision with root package name */
    private int[] f49540n;

    public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j14);
        this.f49537k = j12;
        this.f49538l = j13;
    }

    public final int i(int i10) {
        return ((int[]) ne.a.i(this.f49540n))[i10];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final c j() {
        return (c) ne.a.i(this.f49539m);
    }

    public void k(c cVar) {
        this.f49539m = cVar;
        this.f49540n = cVar.a();
    }
}
