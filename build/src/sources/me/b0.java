package me;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36337a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36338b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36339c;

    /* renamed from: d  reason: collision with root package name */
    private long f36340d;

    public b0(DataSource dataSource, l lVar) {
        this.f36337a = (DataSource) oe.a.e(dataSource);
        this.f36338b = (l) oe.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f36337a.b(aVar);
        this.f36340d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f13990h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f36339c = true;
        this.f36338b.b(aVar);
        return this.f36340d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f36337a.close();
        } finally {
            if (this.f36339c) {
                this.f36339c = false;
                this.f36338b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36337a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f36337a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36337a.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f36340d == 0) {
            return -1;
        }
        int read = this.f36337a.read(bArr, i10, i11);
        if (read > 0) {
            this.f36338b.write(bArr, i10, read);
            long j10 = this.f36340d;
            if (j10 != -1) {
                this.f36340d = j10 - read;
            }
        }
        return read;
    }
}
