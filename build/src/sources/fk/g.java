package fk;

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
    private final Context f22678a;

    /* renamed from: b  reason: collision with root package name */
    private final oe f22679b = new oe(null);

    /* renamed from: c  reason: collision with root package name */
    private boolean f22680c;

    /* renamed from: d  reason: collision with root package name */
    private g6 f22681d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this.f22678a = context;
    }

    @Override // fk.o
    public final void a() {
        g6 g6Var = this.f22681d;
        if (g6Var != null) {
            try {
                g6Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyTextDelegate", "Failed to release legacy text recognizer.", e10);
            }
            this.f22681d = null;
        }
    }

    @Override // fk.o
    public final ek.a c(ak.a aVar) {
        Bitmap e10;
        int i10;
        if (this.f22681d == null) {
            zzb();
        }
        if (this.f22681d != null) {
            if (aVar.g() == -1) {
                e10 = aVar.d();
                i10 = bk.b.a(aVar.k());
            } else {
                e10 = bk.c.f().e(aVar);
                i10 = 0;
            }
            int i11 = i10;
            try {
                return m.a(((g6) hf.q.l(this.f22681d)).X0(tf.b.W0(e10), new c2(aVar.l(), aVar.h(), 0, 0L, i11)), aVar.f());
            } catch (RemoteException e11) {
                throw new qj.a("Failed to run legacy text recognizer.", 13, e11);
            }
        }
        throw new qj.a("Waiting for the text recognition module to be downloaded. Please wait.", 14);
    }

    @Override // fk.o
    public final void zzb() {
        if (this.f22681d == null) {
            try {
                g6 W = i8.e(DynamiteModule.e(this.f22678a, DynamiteModule.f13963b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.text.ChimeraNativeTextRecognizerCreator")).W(tf.b.W0(this.f22678a), this.f22679b);
                this.f22681d = W;
                if (W == null && !this.f22680c) {
                    Log.d("LegacyTextDelegate", "Request OCR optional module download.");
                    uj.l.c(this.f22678a, "ocr");
                    this.f22680c = true;
                }
            } catch (RemoteException e10) {
                throw new qj.a("Failed to create legacy text recognizer.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new qj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
    }
}
