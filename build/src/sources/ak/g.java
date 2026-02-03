package ak;

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
    private final Context f669a;

    /* renamed from: b  reason: collision with root package name */
    private final oe f670b = new oe(null);

    /* renamed from: c  reason: collision with root package name */
    private boolean f671c;

    /* renamed from: d  reason: collision with root package name */
    private g6 f672d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this.f669a = context;
    }

    @Override // ak.o
    public final void a() {
        g6 g6Var = this.f672d;
        if (g6Var != null) {
            try {
                g6Var.S0();
            } catch (RemoteException e10) {
                Log.e("LegacyTextDelegate", "Failed to release legacy text recognizer.", e10);
            }
            this.f672d = null;
        }
    }

    @Override // ak.o
    public final zj.a c(vj.a aVar) {
        Bitmap e10;
        int i10;
        if (this.f672d == null) {
            zzb();
        }
        if (this.f672d != null) {
            if (aVar.g() == -1) {
                e10 = aVar.d();
                i10 = wj.b.a(aVar.k());
            } else {
                e10 = wj.c.f().e(aVar);
                i10 = 0;
            }
            int i11 = i10;
            try {
                return m.a(((g6) gf.q.l(this.f672d)).T0(sf.b.S0(e10), new c2(aVar.l(), aVar.h(), 0, 0L, i11)), aVar.f());
            } catch (RemoteException e11) {
                throw new lj.a("Failed to run legacy text recognizer.", 13, e11);
            }
        }
        throw new lj.a("Waiting for the text recognition module to be downloaded. Please wait.", 14);
    }

    @Override // ak.o
    public final void zzb() {
        if (this.f672d == null) {
            try {
                g6 o02 = i8.e(DynamiteModule.d(this.f669a, DynamiteModule.f14499b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.text.ChimeraNativeTextRecognizerCreator")).o0(sf.b.S0(this.f669a), this.f670b);
                this.f672d = o02;
                if (o02 == null && !this.f671c) {
                    Log.d("LegacyTextDelegate", "Request OCR optional module download.");
                    pj.l.c(this.f669a, "ocr");
                    this.f671c = true;
                }
            } catch (RemoteException e10) {
                throw new lj.a("Failed to create legacy text recognizer.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new lj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
    }
}
