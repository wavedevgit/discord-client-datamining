package ek;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import qg.c2;
import qg.g6;
import qg.i8;
import qg.oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21602a;

    /* renamed from: b  reason: collision with root package name */
    private final oe f21603b = new oe(null);

    /* renamed from: c  reason: collision with root package name */
    private boolean f21604c;

    /* renamed from: d  reason: collision with root package name */
    private g6 f21605d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Context context) {
        this.f21602a = context;
    }

    @Override // ek.o
    public final void a() {
        g6 g6Var = this.f21605d;
        if (g6Var != null) {
            try {
                g6Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyTextDelegate", "Failed to release legacy text recognizer.", e10);
            }
            this.f21605d = null;
        }
    }

    @Override // ek.o
    public final dk.a c(zj.a aVar) {
        Bitmap e10;
        int i10;
        if (this.f21605d == null) {
            zzb();
        }
        if (this.f21605d != null) {
            if (aVar.g() == -1) {
                e10 = aVar.d();
                i10 = ak.b.a(aVar.k());
            } else {
                e10 = ak.c.f().e(aVar);
                i10 = 0;
            }
            int i11 = i10;
            try {
                return m.a(((g6) gf.q.l(this.f21605d)).X0(sf.b.W0(e10), new c2(aVar.l(), aVar.h(), 0, 0L, i11)), aVar.f());
            } catch (RemoteException e11) {
                throw new pj.a("Failed to run legacy text recognizer.", 13, e11);
            }
        }
        throw new pj.a("Waiting for the text recognition module to be downloaded. Please wait.", 14);
    }

    @Override // ek.o
    public final void zzb() {
        if (this.f21605d == null) {
            try {
                g6 I0 = i8.e(DynamiteModule.e(this.f21602a, DynamiteModule.f13823b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.text.ChimeraNativeTextRecognizerCreator")).I0(sf.b.W0(this.f21602a), this.f21603b);
                this.f21605d = I0;
                if (I0 == null && !this.f21604c) {
                    Log.d("LegacyTextDelegate", "Request OCR optional module download.");
                    tj.l.c(this.f21602a, "ocr");
                    this.f21604c = true;
                }
            } catch (RemoteException e10) {
                throw new pj.a("Failed to create legacy text recognizer.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new pj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
    }
}
