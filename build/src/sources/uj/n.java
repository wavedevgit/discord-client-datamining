package uj;

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
    private static final i1 f50387h = i1.h("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f50388a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50389b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50390c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f50391d;

    /* renamed from: e  reason: collision with root package name */
    private final rj.b f50392e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f50393f;

    /* renamed from: g  reason: collision with root package name */
    private cm f50394g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, rj.b bVar, nk nkVar) {
        this.f50391d = context;
        this.f50392e = bVar;
        this.f50393f = nkVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.barcode") > 0) {
            return true;
        }
        return false;
    }

    @Override // uj.l
    public final boolean a() {
        if (this.f50394g != null) {
            return this.f50389b;
        }
        if (b(this.f50391d)) {
            this.f50389b = true;
            try {
                this.f50394g = d(DynamiteModule.f14500c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new lj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new lj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f50389b = false;
            if (!pj.l.a(this.f50391d, f50387h)) {
                if (!this.f50390c) {
                    pj.l.d(this.f50391d, i1.h("barcode", "tflite_dynamite"));
                    this.f50390c = true;
                }
                b.e(this.f50393f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new lj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f50394g = d(DynamiteModule.f14499b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f50393f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new lj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f50393f, xe.NO_ERROR);
        return this.f50389b;
    }

    @Override // uj.l
    public final List c(vj.a aVar) {
        if (this.f50394g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f50394g);
        if (!this.f50388a) {
            try {
                cmVar.T0();
                this.f50388a = true;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to init barcode scanner.", 13, e10);
            }
        }
        int l10 = aVar.l();
        if (aVar.g() == 35) {
            l10 = ((Image.Plane[]) q.l(aVar.j()))[0].getRowStride();
        }
        try {
            List<sl> S0 = cmVar.S0(wj.d.b().a(aVar), new lm(aVar.g(), l10, aVar.h(), wj.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (sl slVar : S0) {
                arrayList.add(new sj.a(new m(slVar), aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e11) {
            throw new lj.a("Failed to run barcode scanner.", 13, e11);
        }
    }

    final cm d(DynamiteModule.b bVar, String str, String str2) {
        boolean z10;
        fm e10 = em.e(DynamiteModule.d(this.f50391d, bVar, str).c(str2));
        rj.b bVar2 = this.f50392e;
        sf.a S0 = sf.b.S0(this.f50391d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f50392e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.A(S0, new ul(a10, z10));
    }

    @Override // uj.l
    public final void zzb() {
        cm cmVar = this.f50394g;
        if (cmVar != null) {
            try {
                cmVar.U0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f50394g = null;
            this.f50388a = false;
        }
    }
}
