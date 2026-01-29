package com.google.android.exoplayer2.upstream.cache;

import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import kotlin.jvm.internal.LongCompanionObject;
import le.l;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f14398a;

    /* renamed from: b  reason: collision with root package name */
    private final long f14399b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14400c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14401d;

    /* renamed from: e  reason: collision with root package name */
    private long f14402e;

    /* renamed from: f  reason: collision with root package name */
    private File f14403f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f14404g;

    /* renamed from: h  reason: collision with root package name */
    private long f14405h;

    /* renamed from: i  reason: collision with root package name */
    private long f14406i;

    /* renamed from: j  reason: collision with root package name */
    private i f14407j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0173a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f14404g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f14404g);
            this.f14404g = null;
            this.f14403f = null;
            this.f14398a.h((File) w0.j(this.f14403f), this.f14405h);
        } catch (Throwable th2) {
            w0.n(this.f14404g);
            this.f14404g = null;
            this.f14403f = null;
            ((File) w0.j(this.f14403f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f14353h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f14406i, this.f14402e);
        }
        this.f14403f = this.f14398a.a((String) w0.j(aVar.f14354i), aVar.f14352g + this.f14406i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f14403f);
        if (this.f14400c > 0) {
            i iVar = this.f14407j;
            if (iVar == null) {
                this.f14407j = new i(fileOutputStream, this.f14400c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f14404g = this.f14407j;
        } else {
            this.f14404g = fileOutputStream;
        }
        this.f14405h = 0L;
    }

    @Override // le.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        ne.a.e(aVar.f14354i);
        if (aVar.f14353h == -1 && aVar.d(2)) {
            this.f14401d = null;
            return;
        }
        this.f14401d = aVar;
        if (aVar.d(4)) {
            j10 = this.f14399b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f14402e = j10;
        this.f14406i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void close() {
        if (this.f14401d == null) {
            return;
        }
        try {
            a();
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void write(byte[] bArr, int i10, int i11) {
        com.google.android.exoplayer2.upstream.a aVar = this.f14401d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f14405h == this.f14402e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f14402e - this.f14405h);
                    ((OutputStream) w0.j(this.f14404g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f14405h += j10;
                    this.f14406i += j10;
                } catch (IOException e10) {
                    throw new a(e10);
                }
            }
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10, int i10) {
        ne.a.h(j10 > 0 || j10 == -1, "fragmentSize must be positive or C.LENGTH_UNSET.");
        int i11 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
        if (i11 != 0 && j10 < 2097152) {
            y.i("CacheDataSink", "fragmentSize is below the minimum recommended value of 2097152. This may cause poor cache performance.");
        }
        this.f14398a = (com.google.android.exoplayer2.upstream.cache.a) ne.a.e(aVar);
        this.f14399b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f14400c = i10;
    }
}
