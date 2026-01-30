package le;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import android.os.Bundle;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.channels.FileChannel;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends f {

    /* renamed from: e  reason: collision with root package name */
    private final ContentResolver f37210e;

    /* renamed from: f  reason: collision with root package name */
    private Uri f37211f;

    /* renamed from: g  reason: collision with root package name */
    private AssetFileDescriptor f37212g;

    /* renamed from: h  reason: collision with root package name */
    private FileInputStream f37213h;

    /* renamed from: i  reason: collision with root package name */
    private long f37214i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f37215j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends m {
        public a(IOException iOException, int i10) {
            super(iOException, i10);
        }
    }

    public i(Context context) {
        super(false);
        this.f37210e = context.getContentResolver();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        AssetFileDescriptor openAssetFileDescriptor;
        int i10 = 2000;
        try {
            Uri normalizeScheme = aVar.f14346a.normalizeScheme();
            this.f37211f = normalizeScheme;
            q(aVar);
            if ("content".equals(normalizeScheme.getScheme())) {
                Bundle bundle = new Bundle();
                bundle.putBoolean("android.provider.extra.ACCEPT_ORIGINAL_MEDIA_FORMAT", true);
                openAssetFileDescriptor = this.f37210e.openTypedAssetFileDescriptor(normalizeScheme, "*/*", bundle);
            } else {
                openAssetFileDescriptor = this.f37210e.openAssetFileDescriptor(normalizeScheme, "r");
            }
            this.f37212g = openAssetFileDescriptor;
            if (openAssetFileDescriptor != null) {
                long length = openAssetFileDescriptor.getLength();
                FileInputStream fileInputStream = new FileInputStream(openAssetFileDescriptor.getFileDescriptor());
                this.f37213h = fileInputStream;
                int i11 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
                if (i11 != 0 && aVar.f14352g > length) {
                    throw new a(null, 2008);
                }
                long startOffset = openAssetFileDescriptor.getStartOffset();
                long skip = fileInputStream.skip(aVar.f14352g + startOffset) - startOffset;
                if (skip == aVar.f14352g) {
                    if (i11 == 0) {
                        FileChannel channel = fileInputStream.getChannel();
                        long size = channel.size();
                        if (size == 0) {
                            this.f37214i = -1L;
                        } else {
                            long position = size - channel.position();
                            this.f37214i = position;
                            if (position < 0) {
                                throw new a(null, 2008);
                            }
                        }
                    } else {
                        long j10 = length - skip;
                        this.f37214i = j10;
                        if (j10 < 0) {
                            throw new a(null, 2008);
                        }
                    }
                    long j11 = aVar.f14353h;
                    if (j11 != -1) {
                        long j12 = this.f37214i;
                        if (j12 != -1) {
                            j11 = Math.min(j12, j11);
                        }
                        this.f37214i = j11;
                    }
                    this.f37215j = true;
                    r(aVar);
                    long j13 = aVar.f14353h;
                    if (j13 != -1) {
                        return j13;
                    }
                    return this.f37214i;
                }
                throw new a(null, 2008);
            }
            throw new a(new IOException("Could not open file descriptor for: " + normalizeScheme), 2000);
        } catch (a e10) {
            throw e10;
        } catch (IOException e11) {
            if (e11 instanceof FileNotFoundException) {
                i10 = 2005;
            }
            throw new a(e11, i10);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f37211f = null;
        try {
            try {
                FileInputStream fileInputStream = this.f37213h;
                if (fileInputStream != null) {
                    fileInputStream.close();
                }
                this.f37213h = null;
                try {
                    try {
                        AssetFileDescriptor assetFileDescriptor = this.f37212g;
                        if (assetFileDescriptor != null) {
                            assetFileDescriptor.close();
                        }
                    } catch (IOException e10) {
                        throw new a(e10, 2000);
                    }
                } finally {
                    this.f37212g = null;
                    if (this.f37215j) {
                        this.f37215j = false;
                        p();
                    }
                }
            } catch (IOException e11) {
                throw new a(e11, 2000);
            }
        } catch (Throwable th2) {
            this.f37213h = null;
            try {
                try {
                    AssetFileDescriptor assetFileDescriptor2 = this.f37212g;
                    if (assetFileDescriptor2 != null) {
                        assetFileDescriptor2.close();
                    }
                    this.f37212g = null;
                    if (this.f37215j) {
                        this.f37215j = false;
                        p();
                    }
                    throw th2;
                } catch (IOException e12) {
                    throw new a(e12, 2000);
                }
            } finally {
                this.f37212g = null;
                if (this.f37215j) {
                    this.f37215j = false;
                    p();
                }
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37211f;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f37214i;
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
        int read = ((FileInputStream) w0.j(this.f37213h)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        long j11 = this.f37214i;
        if (j11 != -1) {
            this.f37214i = j11 - read;
        }
        o(read);
        return read;
    }
}
