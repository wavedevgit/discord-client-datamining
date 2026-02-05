package dk;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import pg.c2;
import pg.g6;
import pg.i8;
import pg.oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f20855a;

    /* renamed from: b  reason: collision with root package name */
    private final oe f20856b = new oe(null);

    /* renamed from: c  reason: collision with root package name */
    private boolean f20857c;

    /* renamed from: d  reason: collision with root package name */
    private g6 f20858d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this.f20855a = context;
    }

    @Override // dk.o
    public final void a() {
        g6 g6Var = this.f20858d;
        if (g6Var != null) {
            try {
                g6Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyTextDelegate", "Failed to release legacy text recognizer.", e10);
            }
            this.f20858d = null;
        }
    }

    @Override // dk.o
    public final ck.a c(yj.a aVar) {
        Bitmap e10;
        int i10;
        if (this.f20858d == null) {
            zzb();
        }
        if (this.f20858d != null) {
            if (aVar.g() == -1) {
                e10 = aVar.d();
                i10 = zj.b.a(aVar.k());
            } else {
                e10 = zj.c.f().e(aVar);
                i10 = 0;
            }
            int i11 = i10;
            try {
                return m.a(((g6) gf.q.l(this.f20858d)).X0(sf.b.W0(e10), new c2(aVar.l(), aVar.h(), 0, 0L, i11)), aVar.f());
            } catch (RemoteException e11) {
                throw new oj.a("Failed to run legacy text recognizer.", 13, e11);
            }
        }
        throw new oj.a("Waiting for the text recognition module to be downloaded. Please wait.", 14);
    }

    @Override // dk.o
    public final void zzb() {
        if (this.f20858d == null) {
            try {
                g6 w02 = i8.e(DynamiteModule.d(this.f20855a, DynamiteModule.f13860b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.text.ChimeraNativeTextRecognizerCreator")).w0(sf.b.W0(this.f20855a), this.f20856b);
                this.f20858d = w02;
                if (w02 == null && !this.f20857c) {
                    Log.d("LegacyTextDelegate", "Request OCR optional module download.");
                    sj.l.c(this.f20855a, "ocr");
                    this.f20857c = true;
                }
            } catch (RemoteException e10) {
                throw new oj.a("Failed to create legacy text recognizer.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new oj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
    }
}
