package xj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import mg.nk;
import mg.xe;
import mg.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p implements l {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53919a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f53920b;

    /* renamed from: c  reason: collision with root package name */
    private final mg.i f53921c;

    /* renamed from: d  reason: collision with root package name */
    private final nk f53922d;

    /* renamed from: e  reason: collision with root package name */
    private mg.k f53923e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, uj.b bVar, nk nkVar) {
        mg.i iVar = new mg.i();
        this.f53921c = iVar;
        this.f53920b = context;
        iVar.f37710d = bVar.a();
        this.f53922d = nkVar;
    }

    @Override // xj.l
    public final boolean a() {
        if (this.f53923e == null) {
            try {
                mg.k l02 = mg.m.e(DynamiteModule.d(this.f53920b, DynamiteModule.f13860b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.barcode.ChimeraNativeBarcodeDetectorCreator")).l0(sf.b.W0(this.f53920b), this.f53921c);
                this.f53923e = l02;
                if (l02 == null && !this.f53919a) {
                    Log.d("LegacyBarcodeScanner", "Request optional module download.");
                    sj.l.c(this.f53920b, "barcode");
                    this.f53919a = true;
                    b.e(this.f53922d, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new oj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
                }
                b.e(this.f53922d, xe.NO_ERROR);
                return false;
            } catch (RemoteException e10) {
                throw new oj.a("Failed to create legacy barcode detector.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new oj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
        return false;
    }

    @Override // xj.l
    public final List c(yj.a aVar) {
        zh[] Y0;
        if (this.f53923e == null) {
            a();
        }
        mg.k kVar = this.f53923e;
        if (kVar != null) {
            mg.k kVar2 = (mg.k) q.l(kVar);
            mg.o oVar = new mg.o(aVar.l(), aVar.h(), 0, 0L, zj.b.a(aVar.k()));
            try {
                int g10 = aVar.g();
                if (g10 != -1) {
                    if (g10 != 17) {
                        if (g10 != 35) {
                            if (g10 == 842094169) {
                                Y0 = kVar2.X0(sf.b.W0(zj.c.f().d(aVar, false)), oVar);
                            } else {
                                throw new oj.a("Unsupported image format: " + aVar.g(), 3);
                            }
                        } else {
                            Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                            oVar.f37968d = planeArr[0].getRowStride();
                            Y0 = kVar2.X0(sf.b.W0(planeArr[0].getBuffer()), oVar);
                        }
                    } else {
                        Y0 = kVar2.X0(sf.b.W0(aVar.e()), oVar);
                    }
                } else {
                    Y0 = kVar2.Y0(sf.b.W0(aVar.d()), oVar);
                }
                ArrayList arrayList = new ArrayList();
                for (zh zhVar : Y0) {
                    arrayList.add(new vj.a(new o(zhVar), aVar.f()));
                }
                return arrayList;
            } catch (RemoteException e10) {
                throw new oj.a("Failed to detect with legacy barcode detector", 13, e10);
            }
        }
        throw new oj.a("Error initializing the legacy barcode scanner.", 14);
    }

    @Override // xj.l
    public final void zzb() {
        mg.k kVar = this.f53923e;
        if (kVar != null) {
            try {
                kVar.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyBarcodeScanner", "Failed to release legacy barcode detector.", e10);
            }
            this.f53923e = null;
        }
    }
}
