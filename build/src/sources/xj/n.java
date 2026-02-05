package xj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import mg.cm;
import mg.em;
import mg.fm;
import mg.i1;
import mg.lm;
import mg.nk;
import mg.sl;
import mg.ul;
import mg.xe;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements l {

    /* renamed from: h  reason: collision with root package name */
    private static final i1 f53910h = i1.h("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f53911a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53912b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f53913c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f53914d;

    /* renamed from: e  reason: collision with root package name */
    private final uj.b f53915e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f53916f;

    /* renamed from: g  reason: collision with root package name */
    private cm f53917g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, uj.b bVar, nk nkVar) {
        this.f53914d = context;
        this.f53915e = bVar;
        this.f53916f = nkVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.barcode") > 0) {
            return true;
        }
        return false;
    }

    @Override // xj.l
    public final boolean a() {
        if (this.f53917g != null) {
            return this.f53912b;
        }
        if (b(this.f53914d)) {
            this.f53912b = true;
            try {
                this.f53917g = d(DynamiteModule.f13861c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new oj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new oj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f53912b = false;
            if (!sj.l.a(this.f53914d, f53910h)) {
                if (!this.f53913c) {
                    sj.l.d(this.f53914d, i1.h("barcode", "tflite_dynamite"));
                    this.f53913c = true;
                }
                b.e(this.f53916f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new oj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f53917g = d(DynamiteModule.f13860b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f53916f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new oj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f53916f, xe.NO_ERROR);
        return this.f53912b;
    }

    @Override // xj.l
    public final List c(yj.a aVar) {
        if (this.f53917g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f53917g);
        if (!this.f53911a) {
            try {
                cmVar.X0();
                this.f53911a = true;
            } catch (RemoteException e10) {
                throw new oj.a("Failed to init barcode scanner.", 13, e10);
            }
        }
        int l10 = aVar.l();
        if (aVar.g() == 35) {
            l10 = ((Image.Plane[]) q.l(aVar.j()))[0].getRowStride();
        }
        try {
            List<sl> W0 = cmVar.W0(zj.d.b().a(aVar), new lm(aVar.g(), l10, aVar.h(), zj.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (sl slVar : W0) {
                arrayList.add(new vj.a(new m(slVar), aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e11) {
            throw new oj.a("Failed to run barcode scanner.", 13, e11);
        }
    }

    final cm d(DynamiteModule.b bVar, String str, String str2) {
        boolean z10;
        fm e10 = em.e(DynamiteModule.d(this.f53914d, bVar, str).c(str2));
        uj.b bVar2 = this.f53915e;
        sf.a W0 = sf.b.W0(this.f53914d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f53915e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.A(W0, new ul(a10, z10));
    }

    @Override // xj.l
    public final void zzb() {
        cm cmVar = this.f53917g;
        if (cmVar != null) {
            try {
                cmVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f53917g = null;
            this.f53911a = false;
        }
    }
}
