package zj;

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
    private boolean f56496a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f56497b;

    /* renamed from: c  reason: collision with root package name */
    private final og.i f56498c;

    /* renamed from: d  reason: collision with root package name */
    private final nk f56499d;

    /* renamed from: e  reason: collision with root package name */
    private og.k f56500e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, wj.b bVar, nk nkVar) {
        og.i iVar = new og.i();
        this.f56498c = iVar;
        this.f56497b = context;
        iVar.f40946d = bVar.a();
        this.f56499d = nkVar;
    }

    @Override // zj.l
    public final boolean a() {
        if (this.f56500e == null) {
            try {
                og.k i10 = og.m.e(DynamiteModule.e(this.f56497b, DynamiteModule.f13963b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.barcode.ChimeraNativeBarcodeDetectorCreator")).i(tf.b.W0(this.f56497b), this.f56498c);
                this.f56500e = i10;
                if (i10 == null && !this.f56496a) {
                    Log.d("LegacyBarcodeScanner", "Request optional module download.");
                    uj.l.c(this.f56497b, "barcode");
                    this.f56496a = true;
                    b.e(this.f56499d, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new qj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
                }
                b.e(this.f56499d, xe.NO_ERROR);
                return false;
            } catch (RemoteException e10) {
                throw new qj.a("Failed to create legacy barcode detector.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new qj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
        return false;
    }

    @Override // zj.l
    public final List c(ak.a aVar) {
        zh[] Y0;
        if (this.f56500e == null) {
            a();
        }
        og.k kVar = this.f56500e;
        if (kVar != null) {
            og.k kVar2 = (og.k) q.l(kVar);
            og.o oVar = new og.o(aVar.l(), aVar.h(), 0, 0L, bk.b.a(aVar.k()));
            try {
                int g10 = aVar.g();
                if (g10 != -1) {
                    if (g10 != 17) {
                        if (g10 != 35) {
                            if (g10 == 842094169) {
                                Y0 = kVar2.X0(tf.b.W0(bk.c.f().d(aVar, false)), oVar);
                            } else {
                                throw new qj.a("Unsupported image format: " + aVar.g(), 3);
                            }
                        } else {
                            Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                            oVar.f41204d = planeArr[0].getRowStride();
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
                    arrayList.add(new xj.a(new o(zhVar), aVar.f()));
                }
                return arrayList;
            } catch (RemoteException e10) {
                throw new qj.a("Failed to detect with legacy barcode detector", 13, e10);
            }
        }
        throw new qj.a("Error initializing the legacy barcode scanner.", 14);
    }

    @Override // zj.l
    public final void zzb() {
        og.k kVar = this.f56500e;
        if (kVar != null) {
            try {
                kVar.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyBarcodeScanner", "Failed to release legacy barcode detector.", e10);
            }
            this.f56500e = null;
        }
    }
}
