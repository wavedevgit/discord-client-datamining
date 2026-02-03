package yc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.reactnativecommunity.clipboard.ClipboardModule;
import ne.h0;
import tc.k;
import tc.l;
import tc.m;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements k {

    /* renamed from: b  reason: collision with root package name */
    private m f54229b;

    /* renamed from: c  reason: collision with root package name */
    private int f54230c;

    /* renamed from: d  reason: collision with root package name */
    private int f54231d;

    /* renamed from: e  reason: collision with root package name */
    private int f54232e;

    /* renamed from: g  reason: collision with root package name */
    private md.b f54234g;

    /* renamed from: h  reason: collision with root package name */
    private l f54235h;

    /* renamed from: i  reason: collision with root package name */
    private c f54236i;

    /* renamed from: j  reason: collision with root package name */
    private bd.k f54237j;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f54228a = new h0(6);

    /* renamed from: f  reason: collision with root package name */
    private long f54233f = -1;

    private void b(l lVar) {
        this.f54228a.Q(2);
        lVar.n(this.f54228a.e(), 0, 2);
        lVar.h(this.f54228a.N() - 2);
    }

    private void e() {
        h(new Metadata.b[0]);
        ((m) ne.a.e(this.f54229b)).s();
        this.f54229b.q(new z.b(-9223372036854775807L));
        this.f54230c = 6;
    }

    private static md.b g(String str, long j10) {
        b a10;
        if (j10 == -1 || (a10 = e.a(str)) == null) {
            return null;
        }
        return a10.a(j10);
    }

    private void h(Metadata.b... bVarArr) {
        ((m) ne.a.e(this.f54229b)).c(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 4).b(new Format.b().M(ClipboardModule.MIMETYPE_JPEG).Z(new Metadata(bVarArr)).G());
    }

    private int i(l lVar) {
        this.f54228a.Q(2);
        lVar.n(this.f54228a.e(), 0, 2);
        return this.f54228a.N();
    }

    private void j(l lVar) {
        this.f54228a.Q(2);
        lVar.readFully(this.f54228a.e(), 0, 2);
        int N = this.f54228a.N();
        this.f54231d = N;
        if (N == 65498) {
            if (this.f54233f != -1) {
                this.f54230c = 4;
            } else {
                e();
            }
        } else if ((N < 65488 || N > 65497) && N != 65281) {
            this.f54230c = 1;
        }
    }

    private void k(l lVar) {
        String B;
        if (this.f54231d == 65505) {
            h0 h0Var = new h0(this.f54232e);
            lVar.readFully(h0Var.e(), 0, this.f54232e);
            if (this.f54234g == null && "http://ns.adobe.com/xap/1.0/".equals(h0Var.B()) && (B = h0Var.B()) != null) {
                md.b g10 = g(B, lVar.getLength());
                this.f54234g = g10;
                if (g10 != null) {
                    this.f54233f = g10.f38015o;
                }
            }
        } else {
            lVar.k(this.f54232e);
        }
        this.f54230c = 0;
    }

    private void l(l lVar) {
        this.f54228a.Q(2);
        lVar.readFully(this.f54228a.e(), 0, 2);
        this.f54232e = this.f54228a.N() - 2;
        this.f54230c = 2;
    }

    private void m(l lVar) {
        if (!lVar.c(this.f54228a.e(), 0, 1, true)) {
            e();
            return;
        }
        lVar.e();
        if (this.f54237j == null) {
            this.f54237j = new bd.k();
        }
        c cVar = new c(lVar, this.f54233f);
        this.f54236i = cVar;
        if (this.f54237j.f(cVar)) {
            this.f54237j.c(new d(this.f54233f, (m) ne.a.e(this.f54229b)));
            n();
            return;
        }
        e();
    }

    private void n() {
        h((Metadata.b) ne.a.e(this.f54234g));
        this.f54230c = 5;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        if (j10 == 0) {
            this.f54230c = 0;
            this.f54237j = null;
        } else if (this.f54230c == 5) {
            ((bd.k) ne.a.e(this.f54237j)).a(j10, j11);
        }
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f54229b = mVar;
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        int i10 = this.f54230c;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            if (i10 == 6) {
                                return -1;
                            }
                            throw new IllegalStateException();
                        }
                        if (this.f54236i == null || lVar != this.f54235h) {
                            this.f54235h = lVar;
                            this.f54236i = new c(lVar, this.f54233f);
                        }
                        int d10 = ((bd.k) ne.a.e(this.f54237j)).d(this.f54236i, yVar);
                        if (d10 == 1) {
                            yVar.f49790a += this.f54233f;
                        }
                        return d10;
                    }
                    long position = lVar.getPosition();
                    long j10 = this.f54233f;
                    if (position != j10) {
                        yVar.f49790a = j10;
                        return 1;
                    }
                    m(lVar);
                    return 0;
                }
                k(lVar);
                return 0;
            }
            l(lVar);
            return 0;
        }
        j(lVar);
        return 0;
    }

    @Override // tc.k
    public boolean f(l lVar) {
        if (i(lVar) != 65496) {
            return false;
        }
        int i10 = i(lVar);
        this.f54231d = i10;
        if (i10 == 65504) {
            b(lVar);
            this.f54231d = i(lVar);
        }
        if (this.f54231d != 65505) {
            return false;
        }
        lVar.h(2);
        this.f54228a.Q(6);
        lVar.n(this.f54228a.e(), 0, 6);
        if (this.f54228a.J() != 1165519206 || this.f54228a.N() != 0) {
            return false;
        }
        return true;
    }

    @Override // tc.k
    public void release() {
        bd.k kVar = this.f54237j;
        if (kVar != null) {
            kVar.release();
        }
    }
}
