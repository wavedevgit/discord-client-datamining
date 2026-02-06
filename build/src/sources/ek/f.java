package ek;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import qg.ie;
import qg.kk;
import qg.mk;
import qg.ok;
import qg.pk;
import qg.xj;
import qg.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21596a;

    /* renamed from: b  reason: collision with root package name */
    private final dk.d f21597b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21598c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21599d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f21600e;

    /* renamed from: f  reason: collision with root package name */
    private mk f21601f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context, dk.d dVar, xj xjVar) {
        this.f21596a = context;
        this.f21597b = dVar;
        this.f21600e = xjVar;
    }

    private static zk b(dk.d dVar, String str) {
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

    @Override // ek.o
    public final void a() {
        mk mkVar = this.f21601f;
        if (mkVar != null) {
            try {
                mkVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledTextDelegate", "Failed to release text recognizer ".concat(String.valueOf(this.f21597b.b())), e10);
            }
            this.f21601f = null;
        }
        this.f21598c = false;
    }

    @Override // ek.o
    public final dk.a c(zj.a aVar) {
        if (this.f21601f == null) {
            zzb();
        }
        mk mkVar = (mk) gf.q.l(this.f21601f);
        if (!this.f21598c) {
            try {
                mkVar.X0();
                this.f21598c = true;
            } catch (RemoteException e10) {
                throw new pj.a("Failed to init text recognizer ".concat(String.valueOf(this.f21597b.b())), 13, e10);
            }
        }
        try {
            return new dk.a(mkVar.W0(ak.d.b().a(aVar), new kk(aVar.g(), aVar.l(), aVar.h(), ak.b.a(aVar.k()), SystemClock.elapsedRealtime())), aVar.f());
        } catch (RemoteException e11) {
            throw new pj.a("Failed to run text recognizer ".concat(String.valueOf(this.f21597b.b())), 13, e11);
        }
    }

    @Override // ek.o
    public final void zzb() {
        mk p02;
        if (this.f21601f != null) {
            return;
        }
        try {
            if (this.f21597b.d()) {
                Log.d("DecoupledTextDelegate", "Start loading thick OCR module.");
                p02 = ok.e(DynamiteModule.e(this.f21596a, DynamiteModule.f13824c, this.f21597b.f()).d("com.google.mlkit.vision.text.bundled.common.BundledTextRecognizerCreator")).p0(sf.b.W0(this.f21596a), b(this.f21597b, null));
            } else {
                Log.d("DecoupledTextDelegate", "Start loading thin OCR module.");
                pk e10 = ok.e(DynamiteModule.e(this.f21596a, DynamiteModule.f13823b, this.f21597b.f()).d("com.google.android.gms.vision.text.mlkit.TextRecognizerCreator"));
                if (this.f21597b.h() == 1) {
                    p02 = e10.K(sf.b.W0(this.f21596a));
                } else {
                    p02 = e10.p0(sf.b.W0(this.f21596a), b(this.f21597b, null));
                }
            }
            this.f21601f = p02;
            a.b(this.f21600e, this.f21597b.d(), ie.NO_ERROR);
        } catch (RemoteException e11) {
            a.b(this.f21600e, this.f21597b.d(), ie.OPTIONAL_MODULE_INIT_ERROR);
            throw new pj.a("Failed to create text recognizer ".concat(String.valueOf(this.f21597b.b())), 13, e11);
        } catch (DynamiteModule.a e12) {
            a.b(this.f21600e, this.f21597b.d(), ie.OPTIONAL_MODULE_NOT_AVAILABLE);
            if (!this.f21597b.d()) {
                if (!this.f21599d) {
                    tj.l.e(this.f21596a, b.a(this.f21597b));
                    this.f21599d = true;
                }
                throw new pj.a("Waiting for the text optional module to be downloaded. Please wait.", 14);
            }
            throw new pj.a(String.format("Failed to load text module %s. %s", this.f21597b.b(), e12.getMessage()), 13, e12);
        }
    }
}
