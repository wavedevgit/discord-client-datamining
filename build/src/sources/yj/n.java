package yj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import ng.cm;
import ng.em;
import ng.fm;
import ng.i1;
import ng.lm;
import ng.nk;
import ng.sl;
import ng.ul;
import ng.xe;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements l {

    /* renamed from: h  reason: collision with root package name */
    private static final i1 f55414h = i1.h("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f55415a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f55416b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55417c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f55418d;

    /* renamed from: e  reason: collision with root package name */
    private final vj.b f55419e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f55420f;

    /* renamed from: g  reason: collision with root package name */
    private cm f55421g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, vj.b bVar, nk nkVar) {
        this.f55418d = context;
        this.f55419e = bVar;
        this.f55420f = nkVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.barcode") > 0) {
            return true;
        }
        return false;
    }

    @Override // yj.l
    public final boolean a() {
        if (this.f55421g != null) {
            return this.f55416b;
        }
        if (b(this.f55418d)) {
            this.f55416b = true;
            try {
                this.f55421g = d(DynamiteModule.f13824c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new pj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new pj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f55416b = false;
            if (!tj.l.a(this.f55418d, f55414h)) {
                if (!this.f55417c) {
                    tj.l.d(this.f55418d, i1.h("barcode", "tflite_dynamite"));
                    this.f55417c = true;
                }
                b.e(this.f55420f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new pj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f55421g = d(DynamiteModule.f13823b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f55420f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new pj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f55420f, xe.NO_ERROR);
        return this.f55416b;
    }

    @Override // yj.l
    public final List c(zj.a aVar) {
        if (this.f55421g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f55421g);
        if (!this.f55415a) {
            try {
                cmVar.X0();
                this.f55415a = true;
            } catch (RemoteException e10) {
                throw new pj.a("Failed to init barcode scanner.", 13, e10);
            }
        }
        int l10 = aVar.l();
        if (aVar.g() == 35) {
            l10 = ((Image.Plane[]) q.l(aVar.j()))[0].getRowStride();
        }
        try {
            List<sl> W0 = cmVar.W0(ak.d.b().a(aVar), new lm(aVar.g(), l10, aVar.h(), ak.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (sl slVar : W0) {
                arrayList.add(new wj.a(new m(slVar), aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e11) {
            throw new pj.a("Failed to run barcode scanner.", 13, e11);
        }
    }

    final cm d(DynamiteModule.b bVar, String str, String str2) {
        boolean z10;
        fm e10 = em.e(DynamiteModule.e(this.f55418d, bVar, str).d(str2));
        vj.b bVar2 = this.f55419e;
        sf.a W0 = sf.b.W0(this.f55418d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f55419e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.E0(W0, new ul(a10, z10));
    }

    @Override // yj.l
    public final void zzb() {
        cm cmVar = this.f55421g;
        if (cmVar != null) {
            try {
                cmVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f55421g = null;
            this.f55415a = false;
        }
    }
}
