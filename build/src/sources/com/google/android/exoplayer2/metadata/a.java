package com.google.android.exoplayer2.metadata;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.f;
import com.google.android.exoplayer2.w1;
import gd.b;
import gd.c;
import gd.d;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;
import lc.x;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f implements Handler.Callback {
    private final b A;
    private final d B;
    private final Handler C;
    private final c D;
    private final boolean E;
    private gd.a F;
    private boolean G;
    private boolean H;
    private long I;
    private Metadata J;
    private long K;

    public a(d dVar, Looper looper) {
        this(dVar, looper, b.f25976a);
    }

    private void a0(Metadata metadata, List list) {
        for (int i10 = 0; i10 < metadata.e(); i10++) {
            Format F = metadata.d(i10).F();
            if (F != null && this.A.a(F)) {
                gd.a b10 = this.A.b(F);
                byte[] bArr = (byte[]) ne.a.e(metadata.d(i10).j2());
                this.D.h();
                this.D.u(bArr.length);
                ((ByteBuffer) w0.j(this.D.f47497i)).put(bArr);
                this.D.v();
                Metadata a10 = b10.a(this.D);
                if (a10 != null) {
                    a0(a10, list);
                }
            } else {
                list.add(metadata.d(i10));
            }
        }
    }

    private long b0(long j10) {
        boolean z10;
        boolean z11 = false;
        if (j10 != -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.K != -9223372036854775807L) {
            z11 = true;
        }
        ne.a.g(z11);
        return j10 - this.K;
    }

    private void c0(Metadata metadata) {
        Handler handler = this.C;
        if (handler != null) {
            handler.obtainMessage(0, metadata).sendToTarget();
        } else {
            d0(metadata);
        }
    }

    private void d0(Metadata metadata) {
        this.B.onMetadata(metadata);
    }

    private boolean e0(long j10) {
        boolean z10;
        Metadata metadata = this.J;
        if (metadata != null && (this.E || metadata.f12276e <= b0(j10))) {
            c0(this.J);
            this.J = null;
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.G && this.J == null) {
            this.H = true;
        }
        return z10;
    }

    private void f0() {
        if (!this.G && this.J == null) {
            this.D.h();
            x J = J();
            int X = X(J, this.D, 0);
            if (X == -4) {
                if (this.D.o()) {
                    this.G = true;
                    return;
                }
                c cVar = this.D;
                cVar.f25977t = this.I;
                cVar.v();
                Metadata a10 = ((gd.a) w0.j(this.F)).a(this.D);
                if (a10 != null) {
                    ArrayList arrayList = new ArrayList(a10.e());
                    a0(a10, arrayList);
                    if (!arrayList.isEmpty()) {
                        this.J = new Metadata(b0(this.D.f47499p), arrayList);
                    }
                }
            } else if (X == -5) {
                this.I = ((Format) ne.a.e(J.f36709b)).A;
            }
        }
    }

    @Override // com.google.android.exoplayer2.f
    protected void O() {
        this.J = null;
        this.F = null;
        this.K = -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.f
    protected void Q(long j10, boolean z10) {
        this.J = null;
        this.G = false;
        this.H = false;
    }

    @Override // com.google.android.exoplayer2.f
    protected void W(Format[] formatArr, long j10, long j11) {
        this.F = this.A.b(formatArr[0]);
        Metadata metadata = this.J;
        if (metadata != null) {
            this.J = metadata.c((metadata.f12276e + this.K) - j11);
        }
        this.K = j11;
    }

    @Override // com.google.android.exoplayer2.w1
    public int a(Format format) {
        int i10;
        if (this.A.a(format)) {
            if (format.R == 0) {
                i10 = 4;
            } else {
                i10 = 2;
            }
            return w1.b(i10);
        }
        return w1.b(0);
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean d() {
        return this.H;
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public String getName() {
        return "MetadataRenderer";
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (message.what == 0) {
            d0((Metadata) message.obj);
            return true;
        }
        throw new IllegalStateException();
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean isReady() {
        return true;
    }

    @Override // com.google.android.exoplayer2.v1
    public void y(long j10, long j11) {
        boolean z10 = true;
        while (z10) {
            f0();
            z10 = e0(j10);
        }
    }

    public a(d dVar, Looper looper, b bVar) {
        this(dVar, looper, bVar, false);
    }

    public a(d dVar, Looper looper, b bVar, boolean z10) {
        super(5);
        this.B = (d) ne.a.e(dVar);
        this.C = looper == null ? null : w0.v(looper, this);
        this.A = (b) ne.a.e(bVar);
        this.E = z10;
        this.D = new c();
        this.K = -9223372036854775807L;
    }
}
