package zc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.reactnativecommunity.clipboard.ClipboardModule;
import oe.h0;
import uc.k;
import uc.l;
import uc.m;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements k {

    /* renamed from: b  reason: collision with root package name */
    private m f56905b;

    /* renamed from: c  reason: collision with root package name */
    private int f56906c;

    /* renamed from: d  reason: collision with root package name */
    private int f56907d;

    /* renamed from: e  reason: collision with root package name */
    private int f56908e;

    /* renamed from: g  reason: collision with root package name */
    private nd.b f56910g;

    /* renamed from: h  reason: collision with root package name */
    private l f56911h;

    /* renamed from: i  reason: collision with root package name */
    private c f56912i;

    /* renamed from: j  reason: collision with root package name */
    private cd.k f56913j;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f56904a = new h0(6);

    /* renamed from: f  reason: collision with root package name */
    private long f56909f = -1;

    private void b(l lVar) {
        this.f56904a.Q(2);
        lVar.n(this.f56904a.e(), 0, 2);
        lVar.h(this.f56904a.N() - 2);
    }

    private void e() {
        g(new Metadata.b[0]);
        ((m) oe.a.e(this.f56905b)).q();
        this.f56905b.j(new z.b(-9223372036854775807L));
        this.f56906c = 6;
    }

    private static nd.b f(String str, long j10) {
        b a10;
        if (j10 == -1 || (a10 = e.a(str)) == null) {
            return null;
        }
        return a10.a(j10);
    }

    private void g(Metadata.b... bVarArr) {
        ((m) oe.a.e(this.f56905b)).c(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 4).c(new Format.b().M(ClipboardModule.MIMETYPE_JPEG).Z(new Metadata(bVarArr)).G());
    }

    private int i(l lVar) {
        this.f56904a.Q(2);
        lVar.n(this.f56904a.e(), 0, 2);
        return this.f56904a.N();
    }

    private void j(l lVar) {
        this.f56904a.Q(2);
        lVar.readFully(this.f56904a.e(), 0, 2);
        int N = this.f56904a.N();
        this.f56907d = N;
        if (N == 65498) {
            if (this.f56909f != -1) {
                this.f56906c = 4;
            } else {
                e();
            }
        } else if ((N < 65488 || N > 65497) && N != 65281) {
            this.f56906c = 1;
        }
    }

    private void k(l lVar) {
        String B;
        if (this.f56907d == 65505) {
            h0 h0Var = new h0(this.f56908e);
            lVar.readFully(h0Var.e(), 0, this.f56908e);
            if (this.f56910g == null && "http://ns.adobe.com/xap/1.0/".equals(h0Var.B()) && (B = h0Var.B()) != null) {
                nd.b f10 = f(B, lVar.getLength());
                this.f56910g = f10;
                if (f10 != null) {
                    this.f56909f = f10.f37736o;
                }
            }
        } else {
            lVar.k(this.f56908e);
        }
        this.f56906c = 0;
    }

    private void l(l lVar) {
        this.f56904a.Q(2);
        lVar.readFully(this.f56904a.e(), 0, 2);
        this.f56908e = this.f56904a.N() - 2;
        this.f56906c = 2;
    }

    private void m(l lVar) {
        if (!lVar.c(this.f56904a.e(), 0, 1, true)) {
            e();
            return;
        }
        lVar.e();
        if (this.f56913j == null) {
            this.f56913j = new cd.k();
        }
        c cVar = new c(lVar, this.f56909f);
        this.f56912i = cVar;
        if (this.f56913j.d(cVar)) {
            this.f56913j.c(new d(this.f56909f, (m) oe.a.e(this.f56905b)));
            n();
            return;
        }
        e();
    }

    private void n() {
        g((Metadata.b) oe.a.e(this.f56910g));
        this.f56906c = 5;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        if (j10 == 0) {
            this.f56906c = 0;
            this.f56913j = null;
        } else if (this.f56906c == 5) {
            ((cd.k) oe.a.e(this.f56913j)).a(j10, j11);
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f56905b = mVar;
    }

    @Override // uc.k
    public boolean d(l lVar) {
        if (i(lVar) != 65496) {
            return false;
        }
        int i10 = i(lVar);
        this.f56907d = i10;
        if (i10 == 65504) {
            b(lVar);
            this.f56907d = i(lVar);
        }
        if (this.f56907d != 65505) {
            return false;
        }
        lVar.h(2);
        this.f56904a.Q(6);
        lVar.n(this.f56904a.e(), 0, 6);
        if (this.f56904a.J() != 1165519206 || this.f56904a.N() != 0) {
            return false;
        }
        return true;
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        int i10 = this.f56906c;
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
                        if (this.f56912i == null || lVar != this.f56911h) {
                            this.f56911h = lVar;
                            this.f56912i = new c(lVar, this.f56909f);
                        }
                        int h10 = ((cd.k) oe.a.e(this.f56913j)).h(this.f56912i, yVar);
                        if (h10 == 1) {
                            yVar.f51283a += this.f56909f;
                        }
                        return h10;
                    }
                    long position = lVar.getPosition();
                    long j10 = this.f56909f;
                    if (position != j10) {
                        yVar.f51283a = j10;
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

    @Override // uc.k
    public void release() {
        cd.k kVar = this.f56913j;
        if (kVar != null) {
            kVar.release();
        }
    }
}
