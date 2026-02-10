package hk;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import rg.ie;
import rg.kk;
import rg.mk;
import rg.ok;
import rg.pk;
import rg.xj;
import rg.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27384a;

    /* renamed from: b  reason: collision with root package name */
    private final gk.d f27385b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27386c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f27387d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f27388e;

    /* renamed from: f  reason: collision with root package name */
    private mk f27389f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context, gk.d dVar, xj xjVar) {
        this.f27384a = context;
        this.f27385b = dVar;
        this.f27388e = xjVar;
    }

    private static zk b(gk.d dVar, String str) {
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

    @Override // hk.o
    public final void a() {
        mk mkVar = this.f27389f;
        if (mkVar != null) {
            try {
                mkVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledTextDelegate", "Failed to release text recognizer ".concat(String.valueOf(this.f27385b.b())), e10);
            }
            this.f27389f = null;
        }
        this.f27386c = false;
    }

    @Override // hk.o
    public final gk.a c(ck.a aVar) {
        if (this.f27389f == null) {
            zzb();
        }
        mk mkVar = (mk) hf.q.l(this.f27389f);
        if (!this.f27386c) {
            try {
                mkVar.X0();
                this.f27386c = true;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to init text recognizer ".concat(String.valueOf(this.f27385b.b())), 13, e10);
            }
        }
        try {
            return new gk.a(mkVar.W0(dk.d.b().a(aVar), new kk(aVar.g(), aVar.l(), aVar.h(), dk.b.a(aVar.k()), SystemClock.elapsedRealtime())), aVar.f());
        } catch (RemoteException e11) {
            throw new sj.a("Failed to run text recognizer ".concat(String.valueOf(this.f27385b.b())), 13, e11);
        }
    }

    @Override // hk.o
    public final void zzb() {
        mk i02;
        if (this.f27389f != null) {
            return;
        }
        try {
            if (this.f27385b.d()) {
                Log.d("DecoupledTextDelegate", "Start loading thick OCR module.");
                i02 = ok.e(DynamiteModule.e(this.f27384a, DynamiteModule.f14541c, this.f27385b.f()).d("com.google.mlkit.vision.text.bundled.common.BundledTextRecognizerCreator")).i0(tf.b.W0(this.f27384a), b(this.f27385b, null));
            } else {
                Log.d("DecoupledTextDelegate", "Start loading thin OCR module.");
                pk e10 = ok.e(DynamiteModule.e(this.f27384a, DynamiteModule.f14540b, this.f27385b.f()).d("com.google.android.gms.vision.text.mlkit.TextRecognizerCreator"));
                if (this.f27385b.h() == 1) {
                    i02 = e10.r0(tf.b.W0(this.f27384a));
                } else {
                    i02 = e10.i0(tf.b.W0(this.f27384a), b(this.f27385b, null));
                }
            }
            this.f27389f = i02;
            a.b(this.f27388e, this.f27385b.d(), ie.NO_ERROR);
        } catch (RemoteException e11) {
            a.b(this.f27388e, this.f27385b.d(), ie.OPTIONAL_MODULE_INIT_ERROR);
            throw new sj.a("Failed to create text recognizer ".concat(String.valueOf(this.f27385b.b())), 13, e11);
        } catch (DynamiteModule.a e12) {
            a.b(this.f27388e, this.f27385b.d(), ie.OPTIONAL_MODULE_NOT_AVAILABLE);
            if (!this.f27385b.d()) {
                if (!this.f27387d) {
                    wj.l.e(this.f27384a, b.a(this.f27385b));
                    this.f27387d = true;
                }
                throw new sj.a("Waiting for the text optional module to be downloaded. Please wait.", 14);
            }
            throw new sj.a(String.format("Failed to load text module %s. %s", this.f27385b.b(), e12.getMessage()), 13, e12);
        }
    }
}
