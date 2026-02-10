package com.google.android.exoplayer2.upstream.cache;

import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import kotlin.jvm.internal.LongCompanionObject;
import me.l;
import oe.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f13457a;

    /* renamed from: b  reason: collision with root package name */
    private final long f13458b;

    /* renamed from: c  reason: collision with root package name */
    private final int f13459c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13460d;

    /* renamed from: e  reason: collision with root package name */
    private long f13461e;

    /* renamed from: f  reason: collision with root package name */
    private File f13462f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f13463g;

    /* renamed from: h  reason: collision with root package name */
    private long f13464h;

    /* renamed from: i  reason: collision with root package name */
    private long f13465i;

    /* renamed from: j  reason: collision with root package name */
    private i f13466j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0195a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f13463g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f13463g);
            this.f13463g = null;
            this.f13462f = null;
            this.f13457a.g((File) w0.j(this.f13462f), this.f13464h);
        } catch (Throwable th2) {
            w0.n(this.f13463g);
            this.f13463g = null;
            this.f13462f = null;
            ((File) w0.j(this.f13462f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13412h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f13465i, this.f13461e);
        }
        this.f13462f = this.f13457a.a((String) w0.j(aVar.f13413i), aVar.f13411g + this.f13465i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f13462f);
        if (this.f13459c > 0) {
            i iVar = this.f13466j;
            if (iVar == null) {
                this.f13466j = new i(fileOutputStream, this.f13459c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f13463g = this.f13466j;
        } else {
            this.f13463g = fileOutputStream;
        }
        this.f13464h = 0L;
    }

    @Override // me.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        oe.a.e(aVar.f13413i);
        if (aVar.f13412h == -1 && aVar.d(2)) {
            this.f13460d = null;
            return;
        }
        this.f13460d = aVar;
        if (aVar.d(4)) {
            j10 = this.f13458b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f13461e = j10;
        this.f13465i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // me.l
    public void close() {
        if (this.f13460d == null) {
            return;
        }
        try {
            a();
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // me.l
    public void write(byte[] bArr, int i10, int i11) {
        com.google.android.exoplayer2.upstream.a aVar = this.f13460d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f13464h == this.f13461e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f13461e - this.f13464h);
                    ((OutputStream) w0.j(this.f13463g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f13464h += j10;
                    this.f13465i += j10;
                } catch (IOException e10) {
                    throw new a(e10);
                }
            }
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10, int i10) {
        oe.a.h(j10 > 0 || j10 == -1, "fragmentSize must be positive or C.LENGTH_UNSET.");
        int i11 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
        if (i11 != 0 && j10 < 2097152) {
            y.i("CacheDataSink", "fragmentSize is below the minimum recommended value of 2097152. This may cause poor cache performance.");
        }
        this.f13457a = (com.google.android.exoplayer2.upstream.cache.a) oe.a.e(aVar);
        this.f13458b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f13459c = i10;
    }
}
