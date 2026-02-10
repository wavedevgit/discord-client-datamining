package fk;

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
    private final Context f22672a;

    /* renamed from: b  reason: collision with root package name */
    private final ek.d f22673b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22674c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f22675d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f22676e;

    /* renamed from: f  reason: collision with root package name */
    private mk f22677f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context, ek.d dVar, xj xjVar) {
        this.f22672a = context;
        this.f22673b = dVar;
        this.f22676e = xjVar;
    }

    private static zk b(ek.d dVar, String str) {
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

    @Override // fk.o
    public final void a() {
        mk mkVar = this.f22677f;
        if (mkVar != null) {
            try {
                mkVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledTextDelegate", "Failed to release text recognizer ".concat(String.valueOf(this.f22673b.b())), e10);
            }
            this.f22677f = null;
        }
        this.f22674c = false;
    }

    @Override // fk.o
    public final ek.a c(ak.a aVar) {
        if (this.f22677f == null) {
            zzb();
        }
        mk mkVar = (mk) hf.q.l(this.f22677f);
        if (!this.f22674c) {
            try {
                mkVar.X0();
                this.f22674c = true;
            } catch (RemoteException e10) {
                throw new qj.a("Failed to init text recognizer ".concat(String.valueOf(this.f22673b.b())), 13, e10);
            }
        }
        try {
            return new ek.a(mkVar.W0(bk.d.b().a(aVar), new kk(aVar.g(), aVar.l(), aVar.h(), bk.b.a(aVar.k()), SystemClock.elapsedRealtime())), aVar.f());
        } catch (RemoteException e11) {
            throw new qj.a("Failed to run text recognizer ".concat(String.valueOf(this.f22673b.b())), 13, e11);
        }
    }

    @Override // fk.o
    public final void zzb() {
        mk h02;
        if (this.f22677f != null) {
            return;
        }
        try {
            if (this.f22673b.d()) {
                Log.d("DecoupledTextDelegate", "Start loading thick OCR module.");
                h02 = ok.e(DynamiteModule.e(this.f22672a, DynamiteModule.f13964c, this.f22673b.f()).d("com.google.mlkit.vision.text.bundled.common.BundledTextRecognizerCreator")).h0(tf.b.W0(this.f22672a), b(this.f22673b, null));
            } else {
                Log.d("DecoupledTextDelegate", "Start loading thin OCR module.");
                pk e10 = ok.e(DynamiteModule.e(this.f22672a, DynamiteModule.f13963b, this.f22673b.f()).d("com.google.android.gms.vision.text.mlkit.TextRecognizerCreator"));
                if (this.f22673b.h() == 1) {
                    h02 = e10.r0(tf.b.W0(this.f22672a));
                } else {
                    h02 = e10.h0(tf.b.W0(this.f22672a), b(this.f22673b, null));
                }
            }
            this.f22677f = h02;
            a.b(this.f22676e, this.f22673b.d(), ie.NO_ERROR);
        } catch (RemoteException e11) {
            a.b(this.f22676e, this.f22673b.d(), ie.OPTIONAL_MODULE_INIT_ERROR);
            throw new qj.a("Failed to create text recognizer ".concat(String.valueOf(this.f22673b.b())), 13, e11);
        } catch (DynamiteModule.a e12) {
            a.b(this.f22676e, this.f22673b.d(), ie.OPTIONAL_MODULE_NOT_AVAILABLE);
            if (!this.f22673b.d()) {
                if (!this.f22675d) {
                    uj.l.e(this.f22672a, b.a(this.f22673b));
                    this.f22675d = true;
                }
                throw new qj.a("Waiting for the text optional module to be downloaded. Please wait.", 14);
            }
            throw new qj.a(String.format("Failed to load text module %s. %s", this.f22673b.b(), e12.getMessage()), 13, e12);
        }
    }
}
