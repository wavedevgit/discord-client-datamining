package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.io.IOException;
import le.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    public static final k f14138a = new k();

    /* renamed from: b  reason: collision with root package name */
    public static final DataSource.Factory f14139b = new DataSource.Factory() { // from class: le.v
        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public final DataSource createDataSource() {
            return com.google.android.exoplayer2.upstream.k.o();
        }
    };

    private k() {
    }

    public static /* synthetic */ k o() {
        return new k();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(a aVar) {
        throw new IOException("PlaceholderDataSource cannot be opened");
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return null;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        throw new UnsupportedOperationException();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
    }
}
