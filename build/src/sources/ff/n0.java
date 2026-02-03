package ff;

import android.os.SystemClock;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    private final e f23931a;

    /* renamed from: b  reason: collision with root package name */
    private final int f23932b;

    /* renamed from: c  reason: collision with root package name */
    private final b f23933c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23934d;

    /* renamed from: e  reason: collision with root package name */
    private final long f23935e;

    n0(e eVar, int i10, b bVar, long j10, long j11, String str, String str2) {
        this.f23931a = eVar;
        this.f23932b = i10;
        this.f23933c = bVar;
        this.f23934d = j10;
        this.f23935e = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 a(e eVar, int i10, b bVar) {
        boolean z10;
        long j10;
        if (eVar.e()) {
            gf.s a10 = gf.r.b().a();
            if (a10 != null) {
                if (a10.d()) {
                    z10 = a10.e();
                    e0 t10 = eVar.t(bVar);
                    if (t10 != null) {
                        if (t10.v() instanceof gf.c) {
                            gf.c cVar = (gf.c) t10.v();
                            if (cVar.I() && !cVar.c()) {
                                gf.e b10 = b(t10, cVar, i10);
                                if (b10 != null) {
                                    t10.G();
                                    z10 = b10.f();
                                } else {
                                    return null;
                                }
                            }
                        } else {
                            return null;
                        }
                    }
                } else {
                    return null;
                }
            } else {
                z10 = true;
            }
            long j11 = 0;
            if (z10) {
                j10 = System.currentTimeMillis();
            } else {
                j10 = 0;
            }
            if (z10) {
                j11 = SystemClock.elapsedRealtime();
            }
            return new n0(eVar, i10, bVar, j10, j11, null, null);
        }
        return null;
    }

    private static gf.e b(e0 e0Var, gf.c cVar, int i10) {
        int[] c10;
        int[] d10;
        gf.e G = cVar.G();
        if (G == null || !G.e() || ((c10 = G.c()) != null ? !com.google.android.gms.common.util.b.a(c10, i10) : !((d10 = G.d()) == null || !com.google.android.gms.common.util.b.a(d10, i10))) || e0Var.t() >= G.b()) {
            return null;
        }
        return G;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        e0 t10;
        boolean z10;
        int i10;
        int i11;
        int i12;
        int b10;
        long j10;
        long j11;
        if (this.f23931a.e()) {
            gf.s a10 = gf.r.b().a();
            if ((a10 == null || a10.d()) && (t10 = this.f23931a.t(this.f23933c)) != null && (t10.v() instanceof gf.c)) {
                gf.c cVar = (gf.c) t10.v();
                boolean z11 = true;
                int i13 = 0;
                if (this.f23934d > 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int y10 = cVar.y();
                int i14 = 100;
                if (a10 != null) {
                    z10 &= a10.e();
                    int b11 = a10.b();
                    int c10 = a10.c();
                    i10 = a10.f();
                    if (cVar.I() && !cVar.c()) {
                        gf.e b12 = b(t10, cVar, this.f23932b);
                        if (b12 != null) {
                            if (!b12.f() || this.f23934d <= 0) {
                                z11 = false;
                            }
                            c10 = b12.b();
                            z10 = z11;
                        } else {
                            return;
                        }
                    }
                    i12 = b11;
                    i11 = c10;
                } else {
                    i10 = 0;
                    i11 = 100;
                    i12 = 5000;
                }
                e eVar = this.f23931a;
                int i15 = -1;
                if (task.p()) {
                    b10 = 0;
                } else {
                    if (!task.n()) {
                        Exception k10 = task.k();
                        if (k10 instanceof ef.b) {
                            Status a11 = ((ef.b) k10).a();
                            i14 = a11.d();
                            com.google.android.gms.common.b b13 = a11.b();
                            if (b13 != null) {
                                b10 = b13.b();
                                i13 = i14;
                            }
                        } else {
                            i13 = 101;
                            b10 = -1;
                        }
                    }
                    i13 = i14;
                    b10 = -1;
                }
                if (z10) {
                    long j12 = this.f23934d;
                    long j13 = this.f23935e;
                    long currentTimeMillis = System.currentTimeMillis();
                    i15 = (int) (SystemClock.elapsedRealtime() - j13);
                    j11 = currentTimeMillis;
                    j10 = j12;
                } else {
                    j10 = 0;
                    j11 = 0;
                }
                eVar.C(new gf.n(this.f23932b, i13, b10, j10, j11, null, null, y10, i15), i10, i12, i11);
            }
        }
    }
}
