package me;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36905a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36906b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36907c;

    /* renamed from: d  reason: collision with root package name */
    private long f36908d;

    public b0(DataSource dataSource, l lVar) {
        this.f36905a = (DataSource) oe.a.e(dataSource);
        this.f36906b = (l) oe.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f36905a.b(aVar);
        this.f36908d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f13990h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f36907c = true;
        this.f36906b.b(aVar);
        return this.f36908d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f36905a.close();
        } finally {
            if (this.f36907c) {
                this.f36907c = false;
                this.f36906b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36905a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f36905a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36905a.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f36908d == 0) {
            return -1;
        }
        int read = this.f36905a.read(bArr, i10, i11);
        if (read > 0) {
            this.f36906b.write(bArr, i10, read);
            long j10 = this.f36908d;
            if (j10 != -1) {
                this.f36908d = j10 - read;
            }
        }
        return read;
    }
}
