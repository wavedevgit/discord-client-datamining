package dk;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import pg.ie;
import pg.kk;
import pg.mk;
import pg.ok;
import pg.pk;
import pg.xj;
import pg.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f20849a;

    /* renamed from: b  reason: collision with root package name */
    private final ck.d f20850b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20851c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f20852d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f20853e;

    /* renamed from: f  reason: collision with root package name */
    private mk f20854f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context, ck.d dVar, xj xjVar) {
        this.f20849a = context;
        this.f20850b = dVar;
        this.f20853e = xjVar;
    }

    private static zk b(ck.d dVar, String str) {
        int i10;
        String c10 = dVar.c();
        String i11 = dVar.i();
        switch (dVar.h()) {
            case 1:
                i10 = 2;
                break;
            case 2:
                i10 = 3;
                break;
            case 3:
                i10 = 4;
                break;
            case 4:
                i10 = 5;
                break;
            case 5:
                i10 = 6;
                break;
            case 6:
                i10 = 7;
                break;
            case 7:
                i10 = 8;
                break;
            case 8:
                i10 = 9;
                break;
            default:
                i10 = 1;
                break;
        }
        return new zk(c10, i11, str, true, i10 - 1, dVar.g(), false);
    }

    @Override // dk.o
    public final void a() {
        mk mkVar = this.f20854f;
        if (mkVar != null) {
            try {
                mkVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledTextDelegate", "Failed to release text recognizer ".concat(String.valueOf(this.f20850b.b())), e10);
            }
            this.f20854f = null;
        }
        this.f20851c = false;
    }

    @Override // dk.o
    public final ck.a c(yj.a aVar) {
        if (this.f20854f == null) {
            zzb();
        }
        mk mkVar = (mk) gf.q.l(this.f20854f);
        if (!this.f20851c) {
            try {
                mkVar.X0();
                this.f20851c = true;
            } catch (RemoteException e10) {
                throw new oj.a("Failed to init text recognizer ".concat(String.valueOf(this.f20850b.b())), 13, e10);
            }
        }
        try {
            return new ck.a(mkVar.W0(zj.d.b().a(aVar), new kk(aVar.g(), aVar.l(), aVar.h(), zj.b.a(aVar.k()), SystemClock.elapsedRealtime())), aVar.f());
        } catch (RemoteException e11) {
            throw new oj.a("Failed to run text recognizer ".concat(String.valueOf(this.f20850b.b())), 13, e11);
        }
    }

    @Override // dk.o
    public final void zzb() {
        mk B;
        if (this.f20854f != null) {
            return;
        }
        try {
            if (this.f20850b.d()) {
                Log.d("DecoupledTextDelegate", "Start loading thick OCR module.");
                B = ok.e(DynamiteModule.d(this.f20849a, DynamiteModule.f13861c, this.f20850b.f()).c("com.google.mlkit.vision.text.bundled.common.BundledTextRecognizerCreator")).B(sf.b.W0(this.f20849a), b(this.f20850b, null));
            } else {
                Log.d("DecoupledTextDelegate", "Start loading thin OCR module.");
                pk e10 = ok.e(DynamiteModule.d(this.f20849a, DynamiteModule.f13860b, this.f20850b.f()).c("com.google.android.gms.vision.text.mlkit.TextRecognizerCreator"));
                if (this.f20850b.h() == 1) {
                    B = e10.I(sf.b.W0(this.f20849a));
                } else {
                    B = e10.B(sf.b.W0(this.f20849a), b(this.f20850b, null));
                }
            }
            this.f20854f = B;
            a.b(this.f20853e, this.f20850b.d(), ie.NO_ERROR);
        } catch (RemoteException e11) {
            a.b(this.f20853e, this.f20850b.d(), ie.OPTIONAL_MODULE_INIT_ERROR);
            throw new oj.a("Failed to create text recognizer ".concat(String.valueOf(this.f20850b.b())), 13, e11);
        } catch (DynamiteModule.a e12) {
            a.b(this.f20853e, this.f20850b.d(), ie.OPTIONAL_MODULE_NOT_AVAILABLE);
            if (!this.f20850b.d()) {
                if (!this.f20852d) {
                    sj.l.e(this.f20849a, b.a(this.f20850b));
                    this.f20852d = true;
                }
                throw new oj.a("Waiting for the text optional module to be downloaded. Please wait.", 14);
            }
            throw new oj.a(String.format("Failed to load text module %s. %s", this.f20850b.b(), e12.getMessage()), 13, e12);
        }
    }
}
