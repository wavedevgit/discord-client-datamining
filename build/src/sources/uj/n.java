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
    private static final i1 f50315h = i1.h("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f50316a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50317b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50318c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f50319d;

    /* renamed from: e  reason: collision with root package name */
    private final rj.b f50320e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f50321f;

    /* renamed from: g  reason: collision with root package name */
    private cm f50322g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, rj.b bVar, nk nkVar) {
        this.f50319d = context;
        this.f50320e = bVar;
        this.f50321f = nkVar;
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
        if (this.f50322g != null) {
            return this.f50317b;
        }
        if (b(this.f50319d)) {
            this.f50317b = true;
            try {
                this.f50322g = d(DynamiteModule.f14871c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new lj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new lj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f50317b = false;
            if (!pj.l.a(this.f50319d, f50315h)) {
                if (!this.f50318c) {
                    pj.l.d(this.f50319d, i1.h("barcode", "tflite_dynamite"));
                    this.f50318c = true;
                }
                b.e(this.f50321f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new lj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f50322g = d(DynamiteModule.f14870b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f50321f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new lj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f50321f, xe.NO_ERROR);
        return this.f50317b;
    }

    @Override // uj.l
    public final List c(vj.a aVar) {
        if (this.f50322g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f50322g);
        if (!this.f50316a) {
            try {
                cmVar.T0();
                this.f50316a = true;
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
        fm e10 = em.e(DynamiteModule.d(this.f50319d, bVar, str).c(str2));
        rj.b bVar2 = this.f50320e;
        sf.a S0 = sf.b.S0(this.f50319d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f50320e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.A(S0, new ul(a10, z10));
    }

    @Override // uj.l
    public final void zzb() {
        cm cmVar = this.f50322g;
        if (cmVar != null) {
            try {
                cmVar.U0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f50322g = null;
            this.f50316a = false;
        }
    }
}
