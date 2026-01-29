package ak;

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
    private final Context f663a;

    /* renamed from: b  reason: collision with root package name */
    private final zj.d f664b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f665c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f666d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f667e;

    /* renamed from: f  reason: collision with root package name */
    private mk f668f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context, zj.d dVar, xj xjVar) {
        this.f663a = context;
        this.f664b = dVar;
        this.f667e = xjVar;
    }

    private static zk b(zj.d dVar, String str) {
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

    @Override // ak.o
    public final void a() {
        mk mkVar = this.f668f;
        if (mkVar != null) {
            try {
                mkVar.U0();
            } catch (RemoteException e10) {
                Log.e("DecoupledTextDelegate", "Failed to release text recognizer ".concat(String.valueOf(this.f664b.b())), e10);
            }
            this.f668f = null;
        }
        this.f665c = false;
    }

    @Override // ak.o
    public final zj.a c(vj.a aVar) {
        if (this.f668f == null) {
            zzb();
        }
        mk mkVar = (mk) gf.q.l(this.f668f);
        if (!this.f665c) {
            try {
                mkVar.T0();
                this.f665c = true;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to init text recognizer ".concat(String.valueOf(this.f664b.b())), 13, e10);
            }
        }
        try {
            return new zj.a(mkVar.S0(wj.d.b().a(aVar), new kk(aVar.g(), aVar.l(), aVar.h(), wj.b.a(aVar.k()), SystemClock.elapsedRealtime())), aVar.f());
        } catch (RemoteException e11) {
            throw new lj.a("Failed to run text recognizer ".concat(String.valueOf(this.f664b.b())), 13, e11);
        }
    }

    @Override // ak.o
    public final void zzb() {
        mk B;
        if (this.f668f != null) {
            return;
        }
        try {
            if (this.f664b.d()) {
                Log.d("DecoupledTextDelegate", "Start loading thick OCR module.");
                B = ok.e(DynamiteModule.d(this.f663a, DynamiteModule.f14871c, this.f664b.f()).c("com.google.mlkit.vision.text.bundled.common.BundledTextRecognizerCreator")).B(sf.b.S0(this.f663a), b(this.f664b, null));
            } else {
                Log.d("DecoupledTextDelegate", "Start loading thin OCR module.");
                pk e10 = ok.e(DynamiteModule.d(this.f663a, DynamiteModule.f14870b, this.f664b.f()).c("com.google.android.gms.vision.text.mlkit.TextRecognizerCreator"));
                if (this.f664b.h() == 1) {
                    B = e10.H(sf.b.S0(this.f663a));
                } else {
                    B = e10.B(sf.b.S0(this.f663a), b(this.f664b, null));
                }
            }
            this.f668f = B;
            a.b(this.f667e, this.f664b.d(), ie.NO_ERROR);
        } catch (RemoteException e11) {
            a.b(this.f667e, this.f664b.d(), ie.OPTIONAL_MODULE_INIT_ERROR);
            throw new lj.a("Failed to create text recognizer ".concat(String.valueOf(this.f664b.b())), 13, e11);
        } catch (DynamiteModule.a e12) {
            a.b(this.f667e, this.f664b.d(), ie.OPTIONAL_MODULE_NOT_AVAILABLE);
            if (!this.f664b.d()) {
                if (!this.f666d) {
                    pj.l.e(this.f663a, b.a(this.f664b));
                    this.f666d = true;
                }
                throw new lj.a("Waiting for the text optional module to be downloaded. Please wait.", 14);
            }
            throw new lj.a(String.format("Failed to load text module %s. %s", this.f664b.b(), e12.getMessage()), 13, e12);
        }
    }
}
