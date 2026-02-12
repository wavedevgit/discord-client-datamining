package bk;

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
    private static final i1 f7241h = i1.i("com.google.android.gms.vision.barcode", "com.google.android.gms.tflite_dynamite");

    /* renamed from: a  reason: collision with root package name */
    private boolean f7242a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f7243b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7244c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f7245d;

    /* renamed from: e  reason: collision with root package name */
    private final yj.b f7246e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f7247f;

    /* renamed from: g  reason: collision with root package name */
    private cm f7248g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, yj.b bVar, nk nkVar) {
        this.f7245d = context;
        this.f7246e = bVar;
        this.f7247f = nkVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.barcode") > 0) {
            return true;
        }
        return false;
    }

    @Override // bk.l
    public final boolean a() {
        if (this.f7248g != null) {
            return this.f7243b;
        }
        if (b(this.f7245d)) {
            this.f7243b = true;
            try {
                this.f7248g = d(DynamiteModule.f14542c, "com.google.mlkit.dynamite.barcode", "com.google.mlkit.vision.barcode.bundled.internal.ThickBarcodeScannerCreator");
            } catch (RemoteException e10) {
                throw new sj.a("Failed to create thick barcode scanner.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new sj.a("Failed to load the bundled barcode module.", 13, e11);
            }
        } else {
            this.f7243b = false;
            if (!wj.l.a(this.f7245d, f7241h)) {
                if (!this.f7244c) {
                    wj.l.d(this.f7245d, i1.i("barcode", "tflite_dynamite"));
                    this.f7244c = true;
                }
                b.e(this.f7247f, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                throw new sj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
            }
            try {
                this.f7248g = d(DynamiteModule.f14541b, "com.google.android.gms.vision.barcode", "com.google.android.gms.vision.barcode.mlkit.BarcodeScannerCreator");
            } catch (RemoteException | DynamiteModule.a e12) {
                b.e(this.f7247f, xe.OPTIONAL_MODULE_INIT_ERROR);
                throw new sj.a("Failed to create thin barcode scanner.", 13, e12);
            }
        }
        b.e(this.f7247f, xe.NO_ERROR);
        return this.f7243b;
    }

    @Override // bk.l
    public final List c(ck.a aVar) {
        if (this.f7248g == null) {
            a();
        }
        cm cmVar = (cm) q.l(this.f7248g);
        if (!this.f7242a) {
            try {
                cmVar.X0();
                this.f7242a = true;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to init barcode scanner.", 13, e10);
            }
        }
        int l10 = aVar.l();
        if (aVar.g() == 35) {
            l10 = ((Image.Plane[]) q.l(aVar.j()))[0].getRowStride();
        }
        try {
            List<sl> W0 = cmVar.W0(dk.d.b().a(aVar), new lm(aVar.g(), l10, aVar.h(), dk.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (sl slVar : W0) {
                arrayList.add(new zj.a(new m(slVar), aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e11) {
            throw new sj.a("Failed to run barcode scanner.", 13, e11);
        }
    }

    final cm d(DynamiteModule.b bVar, String str, String str2) {
        boolean z10;
        fm e10 = em.e(DynamiteModule.e(this.f7245d, bVar, str).d(str2));
        yj.b bVar2 = this.f7246e;
        tf.a W0 = tf.b.W0(this.f7245d);
        int a10 = bVar2.a();
        if (!bVar2.d()) {
            this.f7246e.b();
            z10 = false;
        } else {
            z10 = true;
        }
        return e10.s0(W0, new ul(a10, z10));
    }

    @Override // bk.l
    public final void zzb() {
        cm cmVar = this.f7248g;
        if (cmVar != null) {
            try {
                cmVar.Y0();
            } catch (RemoteException e10) {
                Log.e("DecoupledBarcodeScanner", "Failed to release barcode scanner.", e10);
            }
            this.f7248g = null;
            this.f7242a = false;
        }
    }
}
