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
    private final ContentResolver f36161e;

    /* renamed from: f  reason: collision with root package name */
    private Uri f36162f;

    /* renamed from: g  reason: collision with root package name */
    private AssetFileDescriptor f36163g;

    /* renamed from: h  reason: collision with root package name */
    private FileInputStream f36164h;

    /* renamed from: i  reason: collision with root package name */
    private long f36165i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f36166j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends m {
        public a(IOException iOException, int i10) {
            super(iOException, i10);
        }
    }

    public i(Context context) {
        super(false);
        this.f36161e = context.getContentResolver();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        AssetFileDescriptor openAssetFileDescriptor;
        int i10 = 2000;
        try {
            Uri normalizeScheme = aVar.f13265a.normalizeScheme();
            this.f36162f = normalizeScheme;
            q(aVar);
            if ("content".equals(normalizeScheme.getScheme())) {
                Bundle bundle = new Bundle();
                bundle.putBoolean("android.provider.extra.ACCEPT_ORIGINAL_MEDIA_FORMAT", true);
                openAssetFileDescriptor = this.f36161e.openTypedAssetFileDescriptor(normalizeScheme, "*/*", bundle);
            } else {
                openAssetFileDescriptor = this.f36161e.openAssetFileDescriptor(normalizeScheme, "r");
            }
            this.f36163g = openAssetFileDescriptor;
            if (openAssetFileDescriptor != null) {
                long length = openAssetFileDescriptor.getLength();
                FileInputStream fileInputStream = new FileInputStream(openAssetFileDescriptor.getFileDescriptor());
                this.f36164h = fileInputStream;
                int i11 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
                if (i11 != 0 && aVar.f13271g > length) {
                    throw new a(null, 2008);
                }
                long startOffset = openAssetFileDescriptor.getStartOffset();
                long skip = fileInputStream.skip(aVar.f13271g + startOffset) - startOffset;
                if (skip == aVar.f13271g) {
                    if (i11 == 0) {
                        FileChannel channel = fileInputStream.getChannel();
                        long size = channel.size();
                        if (size == 0) {
                            this.f36165i = -1L;
                        } else {
                            long position = size - channel.position();
                            this.f36165i = position;
                            if (position < 0) {
                                throw new a(null, 2008);
                            }
                        }
                    } else {
                        long j10 = length - skip;
                        this.f36165i = j10;
                        if (j10 < 0) {
                            throw new a(null, 2008);
                        }
                    }
                    long j11 = aVar.f13272h;
                    if (j11 != -1) {
                        long j12 = this.f36165i;
                        if (j12 != -1) {
                            j11 = Math.min(j12, j11);
                        }
                        this.f36165i = j11;
                    }
                    this.f36166j = true;
                    r(aVar);
                    long j13 = aVar.f13272h;
                    if (j13 != -1) {
                        return j13;
                    }
                    return this.f36165i;
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
        this.f36162f = null;
        try {
            try {
                FileInputStream fileInputStream = this.f36164h;
                if (fileInputStream != null) {
                    fileInputStream.close();
                }
                this.f36164h = null;
                try {
                    try {
                        AssetFileDescriptor assetFileDescriptor = this.f36163g;
                        if (assetFileDescriptor != null) {
                            assetFileDescriptor.close();
                        }
                    } catch (IOException e10) {
                        throw new a(e10, 2000);
                    }
                } finally {
                    this.f36163g = null;
                    if (this.f36166j) {
                        this.f36166j = false;
                        p();
                    }
                }
            } catch (IOException e11) {
                throw new a(e11, 2000);
            }
        } catch (Throwable th2) {
            this.f36164h = null;
            try {
                try {
                    AssetFileDescriptor assetFileDescriptor2 = this.f36163g;
                    if (assetFileDescriptor2 != null) {
                        assetFileDescriptor2.close();
                    }
                    this.f36163g = null;
                    if (this.f36166j) {
                        this.f36166j = false;
                        p();
                    }
                    throw th2;
                } catch (IOException e12) {
                    throw new a(e12, 2000);
                }
            } finally {
                this.f36163g = null;
                if (this.f36166j) {
                    this.f36166j = false;
                    p();
                }
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36162f;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f36165i;
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
        int read = ((FileInputStream) w0.j(this.f36164h)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        long j11 = this.f36165i;
        if (j11 != -1) {
            this.f36165i = j11 - read;
        }
        o(read);
        return read;
    }
}
