package hk;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import rg.c2;
import rg.g6;
import rg.i8;
import rg.oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27391a;

    /* renamed from: b  reason: collision with root package name */
    private final oe f27392b = new oe(null);

    /* renamed from: c  reason: collision with root package name */
    private boolean f27393c;

    /* renamed from: d  reason: collision with root package name */
    private g6 f27394d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this.f27391a = context;
    }

    @Override // hk.o
    public final void a() {
        g6 g6Var = this.f27394d;
        if (g6Var != null) {
            try {
                g6Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyTextDelegate", "Failed to release legacy text recognizer.", e10);
            }
            this.f27394d = null;
        }
    }

    @Override // hk.o
    public final gk.a c(ck.a aVar) {
        Bitmap e10;
        int i10;
        if (this.f27394d == null) {
            zzb();
        }
        if (this.f27394d != null) {
            if (aVar.g() == -1) {
                e10 = aVar.d();
                i10 = dk.b.a(aVar.k());
            } else {
                e10 = dk.c.f().e(aVar);
                i10 = 0;
            }
            int i11 = i10;
            try {
                return m.a(((g6) hf.q.l(this.f27394d)).X0(tf.b.W0(e10), new c2(aVar.l(), aVar.h(), 0, 0L, i11)), aVar.f());
            } catch (RemoteException e11) {
                throw new sj.a("Failed to run legacy text recognizer.", 13, e11);
            }
        }
        throw new sj.a("Waiting for the text recognition module to be downloaded. Please wait.", 14);
    }

    @Override // hk.o
    public final void zzb() {
        if (this.f27394d == null) {
            try {
                g6 X = i8.e(DynamiteModule.e(this.f27391a, DynamiteModule.f14541b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.text.ChimeraNativeTextRecognizerCreator")).X(tf.b.W0(this.f27391a), this.f27392b);
                this.f27394d = X;
                if (X == null && !this.f27393c) {
                    Log.d("LegacyTextDelegate", "Request OCR optional module download.");
                    wj.l.c(this.f27391a, "ocr");
                    this.f27393c = true;
                }
            } catch (RemoteException e10) {
                throw new sj.a("Failed to create legacy text recognizer.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new sj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
    }
}
