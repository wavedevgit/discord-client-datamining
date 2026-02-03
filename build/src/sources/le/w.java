package le;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.Resources;
import android.net.Uri;
import android.text.TextUtils;
import java.io.EOFException;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.channels.FileChannel;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w extends f {

    /* renamed from: e  reason: collision with root package name */
    private final Resources f36851e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36852f;

    /* renamed from: g  reason: collision with root package name */
    private Uri f36853g;

    /* renamed from: h  reason: collision with root package name */
    private AssetFileDescriptor f36854h;

    /* renamed from: i  reason: collision with root package name */
    private InputStream f36855i;

    /* renamed from: j  reason: collision with root package name */
    private long f36856j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36857k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends m {
        public a(String str, Throwable th2, int i10) {
            super(str, th2, i10);
        }
    }

    public w(Context context) {
        super(false);
        this.f36851e = context.getResources();
        this.f36852f = context.getPackageName();
    }

    public static Uri buildRawResourceUri(int i10) {
        return Uri.parse("rawresource:///" + i10);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        int parseInt;
        String str;
        Uri normalizeScheme = aVar.f12943a.normalizeScheme();
        this.f36853g = normalizeScheme;
        if (!TextUtils.equals("rawresource", normalizeScheme.getScheme()) && (!TextUtils.equals("android.resource", normalizeScheme.getScheme()) || normalizeScheme.getPathSegments().size() != 1 || !((String) ne.a.e(normalizeScheme.getLastPathSegment())).matches("\\d+"))) {
            if (TextUtils.equals("android.resource", normalizeScheme.getScheme())) {
                String str2 = (String) ne.a.e(normalizeScheme.getPath());
                if (str2.startsWith("/")) {
                    str2 = str2.substring(1);
                }
                String host = normalizeScheme.getHost();
                StringBuilder sb2 = new StringBuilder();
                if (TextUtils.isEmpty(host)) {
                    str = "";
                } else {
                    str = host + ":";
                }
                sb2.append(str);
                sb2.append(str2);
                parseInt = this.f36851e.getIdentifier(sb2.toString(), "raw", this.f36852f);
                if (parseInt == 0) {
                    throw new a("Resource not found.", null, 2005);
                }
            } else {
                throw new a("Unsupported URI scheme (" + normalizeScheme.getScheme() + "). Only rawresource and android.resource are supported.", null, 1004);
            }
        } else {
            try {
                parseInt = Integer.parseInt((String) ne.a.e(normalizeScheme.getLastPathSegment()));
            } catch (NumberFormatException unused) {
                throw new a("Resource identifier must be an integer.", null, 1004);
            }
        }
        q(aVar);
        try {
            AssetFileDescriptor openRawResourceFd = this.f36851e.openRawResourceFd(parseInt);
            this.f36854h = openRawResourceFd;
            if (openRawResourceFd != null) {
                long length = openRawResourceFd.getLength();
                FileInputStream fileInputStream = new FileInputStream(openRawResourceFd.getFileDescriptor());
                this.f36855i = fileInputStream;
                int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
                if (i10 != 0) {
                    try {
                        if (aVar.f12949g > length) {
                            throw new a(null, null, 2008);
                        }
                    } catch (a e10) {
                        throw e10;
                    } catch (IOException e11) {
                        throw new a(null, e11, 2000);
                    }
                }
                long startOffset = openRawResourceFd.getStartOffset();
                long skip = fileInputStream.skip(aVar.f12949g + startOffset) - startOffset;
                if (skip == aVar.f12949g) {
                    if (i10 == 0) {
                        FileChannel channel = fileInputStream.getChannel();
                        if (channel.size() == 0) {
                            this.f36856j = -1L;
                        } else {
                            long size = channel.size() - channel.position();
                            this.f36856j = size;
                            if (size < 0) {
                                throw new a(null, null, 2008);
                            }
                        }
                    } else {
                        long j10 = length - skip;
                        this.f36856j = j10;
                        if (j10 < 0) {
                            throw new m(2008);
                        }
                    }
                    long j11 = aVar.f12950h;
                    if (j11 != -1) {
                        long j12 = this.f36856j;
                        if (j12 != -1) {
                            j11 = Math.min(j12, j11);
                        }
                        this.f36856j = j11;
                    }
                    this.f36857k = true;
                    r(aVar);
                    long j13 = aVar.f12950h;
                    if (j13 != -1) {
                        return j13;
                    }
                    return this.f36856j;
                }
                throw new a(null, null, 2008);
            }
            throw new a("Resource is compressed: " + normalizeScheme, null, 2000);
        } catch (Resources.NotFoundException e12) {
            throw new a(null, e12, 2005);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f36853g = null;
        try {
            try {
                InputStream inputStream = this.f36855i;
                if (inputStream != null) {
                    inputStream.close();
                }
                this.f36855i = null;
                try {
                    try {
                        AssetFileDescriptor assetFileDescriptor = this.f36854h;
                        if (assetFileDescriptor != null) {
                            assetFileDescriptor.close();
                        }
                    } catch (IOException e10) {
                        throw new a(null, e10, 2000);
                    }
                } finally {
                    this.f36854h = null;
                    if (this.f36857k) {
                        this.f36857k = false;
                        p();
                    }
                }
            } catch (IOException e11) {
                throw new a(null, e11, 2000);
            }
        } catch (Throwable th2) {
            this.f36855i = null;
            try {
                try {
                    AssetFileDescriptor assetFileDescriptor2 = this.f36854h;
                    if (assetFileDescriptor2 != null) {
                        assetFileDescriptor2.close();
                    }
                    this.f36854h = null;
                    if (this.f36857k) {
                        this.f36857k = false;
                        p();
                    }
                    throw th2;
                } catch (IOException e12) {
                    throw new a(null, e12, 2000);
                }
            } finally {
                this.f36854h = null;
                if (this.f36857k) {
                    this.f36857k = false;
                    p();
                }
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36853g;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f36856j;
        if (j10 == 0) {
            return -1;
        }
        if (j10 != -1) {
            try {
                i11 = (int) Math.min(j10, i11);
            } catch (IOException e10) {
                throw new a(null, e10, 2000);
            }
        }
        int read = ((InputStream) w0.j(this.f36855i)).read(bArr, i10, i11);
        if (read == -1) {
            if (this.f36856j == -1) {
                return -1;
            }
            throw new a("End of stream reached having not read sufficient data.", new EOFException(), 2000);
        }
        long j11 = this.f36856j;
        if (j11 != -1) {
            this.f36856j = j11 - read;
        }
        o(read);
        return read;
    }
}
