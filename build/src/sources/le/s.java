package le;

import android.net.Uri;
import android.system.ErrnoException;
import android.system.OsConstants;
import android.text.TextUtils;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s extends f {

    /* renamed from: e  reason: collision with root package name */
    private RandomAccessFile f36845e;

    /* renamed from: f  reason: collision with root package name */
    private Uri f36846f;

    /* renamed from: g  reason: collision with root package name */
    private long f36847g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36848h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        /* JADX INFO: Access modifiers changed from: private */
        public static boolean b(Throwable th2) {
            if ((th2 instanceof ErrnoException) && ((ErrnoException) th2).errno == OsConstants.EACCES) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends m {
        public b(Throwable th2, int i10) {
            super(th2, i10);
        }

        public b(String str, Throwable th2, int i10) {
            super(str, th2, i10);
        }
    }

    public s() {
        super(false);
    }

    private static RandomAccessFile s(Uri uri) {
        int i10 = 2006;
        try {
            return new RandomAccessFile((String) ne.a.e(uri.getPath()), "r");
        } catch (FileNotFoundException e10) {
            if (TextUtils.isEmpty(uri.getQuery()) && TextUtils.isEmpty(uri.getFragment())) {
                throw new b(e10, (w0.f40197a < 21 || !a.b(e10.getCause())) ? 2005 : 2005);
            }
            throw new b(String.format("uri has query and/or fragment, which are not supported. Did you call Uri.parse() on a string containing '?' or '#'? Use Uri.fromFile(new File(path)) to avoid this. path=%s,query=%s,fragment=%s", uri.getPath(), uri.getQuery(), uri.getFragment()), e10, 1004);
        } catch (SecurityException e11) {
            throw new b(e11, 2006);
        } catch (RuntimeException e12) {
            throw new b(e12, 2000);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        Uri uri = aVar.f12943a;
        this.f36846f = uri;
        q(aVar);
        RandomAccessFile s10 = s(uri);
        this.f36845e = s10;
        try {
            s10.seek(aVar.f12949g);
            long j10 = aVar.f12950h;
            if (j10 == -1) {
                j10 = this.f36845e.length() - aVar.f12949g;
            }
            this.f36847g = j10;
            if (j10 >= 0) {
                this.f36848h = true;
                r(aVar);
                return this.f36847g;
            }
            throw new b(null, null, 2008);
        } catch (IOException e10) {
            throw new b(e10, 2000);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f36846f = null;
        try {
            try {
                RandomAccessFile randomAccessFile = this.f36845e;
                if (randomAccessFile != null) {
                    randomAccessFile.close();
                }
            } catch (IOException e10) {
                throw new b(e10, 2000);
            }
        } finally {
            this.f36845e = null;
            if (this.f36848h) {
                this.f36848h = false;
                p();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36846f;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36847g == 0) {
            return -1;
        }
        try {
            int read = ((RandomAccessFile) w0.j(this.f36845e)).read(bArr, i10, (int) Math.min(this.f36847g, i11));
            if (read > 0) {
                this.f36847g -= read;
                o(read);
            }
            return read;
        } catch (IOException e10) {
            throw new b(e10, 2000);
        }
    }
}
