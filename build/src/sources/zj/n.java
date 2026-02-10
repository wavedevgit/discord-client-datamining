package zj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import hf.q;
import java.util.ArrayList;
import java.util.List;
import og.cm;
import og.em;
import og.fm;
import og.i1;
import og.lm;
import og.nk;
import og.sl;
import og.ul;
import og.xe;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements l {

    /* renamed from: h  reason: collision with root package name */
    private static final i1 f56487h = i1.h("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f56488a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f56489b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56490c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f56491d;

    /* renamed from: e  reason: collision with root package name */
    private final wj.b f56492e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f56493f;

    /* renamed from: g  reason: collision with root package name */
    private cm f56494g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, wj.b bVar, nk nkVar) {
        this.f56491d = context;
        this.f56492e = bVar;
        this.f56493f = nkVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.barcode") > 0) {
            return true;
        }
        return false;
    }

    @Override // zj.l
    public final boolean a() {
        if (this.f56494g != null) {
            return this.f56489b;
        }
        if (b(this.f56491d)) {
            this.f56489b = true;
            try {
                this.f56494g = d(DynamiteModule.f13964c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new qj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new qj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f56489b = false;
            if (!uj.l.a(this.f56491d, f56487h)) {
                if (!this.f56490c) {
                    uj.l.d(this.f56491d, i1.h("barcode", "tflite_dynamite"));
                    this.f56490c = true;
                }
                b.e(this.f56493f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new qj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f56494g = d(DynamiteModule.f13963b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f56493f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new qj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f56493f, xe.NO_ERROR);
        return this.f56489b;
    }

    @Override // zj.l
    public final List c(ak.a aVar) {
        if (this.f56494g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f56494g);
        if (!this.f56488a) {
            try {
                cmVar.X0();
                this.f56488a = true;
            } catch (RemoteException e10) {
                throw new qj.a("Failed to init barcode scanner.", 13, e10);
            }
        }
        int l10 = aVar.l();
        if (aVar.g() == 35) {
            l10 = ((Image.Plane[]) q.l(aVar.j()))[0].getRowStride();
        }
        try {
            List<sl> W0 = cmVar.W0(bk.d.b().a(aVar), new lm(aVar.g(), l10, aVar.h(), bk.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (sl slVar : W0) {
                arrayList.add(new xj.a(new m(slVar), aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e11) {
            throw new qj.a("Failed to run barcode scanner.", 13, e11);
        }
    }

    final cm d(DynamiteModule.b bVar, String str, String str2) {
        boolean z10;
        fm e10 = em.e(DynamiteModule.e(this.f56491d, bVar, str).d(str2));
        wj.b bVar2 = this.f56492e;
        tf.a W0 = tf.b.W0(this.f56491d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f56492e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.s0(W0, new ul(a10, z10));
    }

    @Override // zj.l
    public final void zzb() {
        cm cmVar = this.f56494g;
        if (cmVar != null) {
            try {
                cmVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f56494g = null;
            this.f56488a = false;
        }
    }
}
