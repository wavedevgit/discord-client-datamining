package le;

import android.content.Context;
import android.content.res.AssetManager;
import android.net.Uri;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends f {

    /* renamed from: e  reason: collision with root package name */
    private final AssetManager f36767e;

    /* renamed from: f  reason: collision with root package name */
    private Uri f36768f;

    /* renamed from: g  reason: collision with root package name */
    private InputStream f36769g;

    /* renamed from: h  reason: collision with root package name */
    private long f36770h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f36771i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends m {
        public a(Throwable th2, int i10) {
            super(th2, i10);
        }
    }

    public c(Context context) {
        super(false);
        this.f36767e = context.getAssets();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        int i10;
        try {
            Uri uri = aVar.f12943a;
            this.f36768f = uri;
            String str = (String) ne.a.e(uri.getPath());
            if (str.startsWith("/android_asset/")) {
                str = str.substring(15);
            } else if (str.startsWith("/")) {
                str = str.substring(1);
            }
            q(aVar);
            InputStream open = this.f36767e.open(str, 1);
            this.f36769g = open;
            if (open.skip(aVar.f12949g) >= aVar.f12949g) {
                long j10 = aVar.f12950h;
                if (j10 != -1) {
                    this.f36770h = j10;
                } else {
                    long available = this.f36769g.available();
                    this.f36770h = available;
                    if (available == 2147483647L) {
                        this.f36770h = -1L;
                    }
                }
                this.f36771i = true;
                r(aVar);
                return this.f36770h;
            }
            throw new a(null, 2008);
        } catch (a e10) {
            throw e10;
        } catch (IOException e11) {
            if (e11 instanceof FileNotFoundException) {
                i10 = 2005;
            } else {
                i10 = 2000;
            }
            throw new a(e11, i10);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f36768f = null;
        try {
            try {
                InputStream inputStream = this.f36769g;
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e10) {
                throw new a(e10, 2000);
            }
        } finally {
            this.f36769g = null;
            if (this.f36771i) {
                this.f36771i = false;
                p();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36768f;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f36770h;
        if (j10 == 0) {
            return -1;
        }
        if (j10 != -1) {
            try {
                i11 = (int) Math.min(j10, i11);
            } catch (IOException e10) {
                throw new a(e10, 2000);
            }
        }
        int read = ((InputStream) w0.j(this.f36769g)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        long j11 = this.f36770h;
        if (j11 != -1) {
            this.f36770h = j11 - read;
        }
        o(read);
        return read;
    }
}
