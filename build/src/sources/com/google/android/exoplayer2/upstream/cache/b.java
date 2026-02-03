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
    private final com.google.android.exoplayer2.upstream.cache.a f14027a;

    /* renamed from: b  reason: collision with root package name */
    private final long f14028b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14029c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14030d;

    /* renamed from: e  reason: collision with root package name */
    private long f14031e;

    /* renamed from: f  reason: collision with root package name */
    private File f14032f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f14033g;

    /* renamed from: h  reason: collision with root package name */
    private long f14034h;

    /* renamed from: i  reason: collision with root package name */
    private long f14035i;

    /* renamed from: j  reason: collision with root package name */
    private i f14036j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0178a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f14033g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f14033g);
            this.f14033g = null;
            this.f14032f = null;
            this.f14027a.h((File) w0.j(this.f14032f), this.f14034h);
        } catch (Throwable th2) {
            w0.n(this.f14033g);
            this.f14033g = null;
            this.f14032f = null;
            ((File) w0.j(this.f14032f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13982h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f14035i, this.f14031e);
        }
        this.f14032f = this.f14027a.a((String) w0.j(aVar.f13983i), aVar.f13981g + this.f14035i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f14032f);
        if (this.f14029c > 0) {
            i iVar = this.f14036j;
            if (iVar == null) {
                this.f14036j = new i(fileOutputStream, this.f14029c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f14033g = this.f14036j;
        } else {
            this.f14033g = fileOutputStream;
        }
        this.f14034h = 0L;
    }

    @Override // le.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        ne.a.e(aVar.f13983i);
        if (aVar.f13982h == -1 && aVar.d(2)) {
            this.f14030d = null;
            return;
        }
        this.f14030d = aVar;
        if (aVar.d(4)) {
            j10 = this.f14028b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f14031e = j10;
        this.f14035i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void close() {
        if (this.f14030d == null) {
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
        com.google.android.exoplayer2.upstream.a aVar = this.f14030d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f14034h == this.f14031e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f14031e - this.f14034h);
                    ((OutputStream) w0.j(this.f14033g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f14034h += j10;
                    this.f14035i += j10;
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
        this.f14027a = (com.google.android.exoplayer2.upstream.cache.a) ne.a.e(aVar);
        this.f14028b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f14029c = i10;
    }
}
