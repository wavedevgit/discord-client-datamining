package bk;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import hf.q;
import java.util.ArrayList;
import java.util.List;
import og.nk;
import og.xe;
import og.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p implements l {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7250a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f7251b;

    /* renamed from: c  reason: collision with root package name */
    private final og.i f7252c;

    /* renamed from: d  reason: collision with root package name */
    private final nk f7253d;

    /* renamed from: e  reason: collision with root package name */
    private og.k f7254e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, yj.b bVar, nk nkVar) {
        og.i iVar = new og.i();
        this.f7252c = iVar;
        this.f7251b = context;
        iVar.f39841d = bVar.a();
        this.f7253d = nkVar;
    }

    @Override // bk.l
    public final boolean a() {
        if (this.f7254e == null) {
            try {
                og.k k10 = og.m.e(DynamiteModule.e(this.f7251b, DynamiteModule.f14541b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.barcode.ChimeraNativeBarcodeDetectorCreator")).k(tf.b.W0(this.f7251b), this.f7252c);
                this.f7254e = k10;
                if (k10 == null && !this.f7250a) {
                    Log.d("LegacyBarcodeScanner", "Request optional module download.");
                    wj.l.c(this.f7251b, "barcode");
                    this.f7250a = true;
                    b.e(this.f7253d, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new sj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
                }
                b.e(this.f7253d, xe.NO_ERROR);
                return false;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to create legacy barcode detector.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new sj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
        return false;
    }

    @Override // bk.l
    public final List c(ck.a aVar) {
        zh[] Y0;
        if (this.f7254e == null) {
            a();
        }
        og.k kVar = this.f7254e;
        if (kVar != null) {
            og.k kVar2 = (og.k) q.l(kVar);
            og.o oVar = new og.o(aVar.l(), aVar.h(), 0, 0L, dk.b.a(aVar.k()));
            try {
                int g10 = aVar.g();
                if (g10 != -1) {
                    if (g10 != 17) {
                        if (g10 != 35) {
                            if (g10 == 842094169) {
                                Y0 = kVar2.X0(tf.b.W0(dk.c.f().d(aVar, false)), oVar);
                            } else {
                                throw new sj.a("Unsupported image format: " + aVar.g(), 3);
                            }
                        } else {
                            Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                            oVar.f40099d = planeArr[0].getRowStride();
                            Y0 = kVar2.X0(tf.b.W0(planeArr[0].getBuffer()), oVar);
                        }
                    } else {
                        Y0 = kVar2.X0(tf.b.W0(aVar.e()), oVar);
                    }
                } else {
                    Y0 = kVar2.Y0(tf.b.W0(aVar.d()), oVar);
                }
                ArrayList arrayList = new ArrayList();
                for (zh zhVar : Y0) {
                    arrayList.add(new zj.a(new o(zhVar), aVar.f()));
                }
                return arrayList;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to detect with legacy barcode detector", 13, e10);
            }
        }
        throw new sj.a("Error initializing the legacy barcode scanner.", 14);
    }

    @Override // bk.l
    public final void zzb() {
        og.k kVar = this.f7254e;
        if (kVar != null) {
            try {
                kVar.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyBarcodeScanner", "Failed to release legacy barcode detector.", e10);
            }
            this.f7254e = null;
        }
    }
}
