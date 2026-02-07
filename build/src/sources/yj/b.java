package yj;

import android.util.SparseArray;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import ng.ck;
import ng.f1;
import ng.kf;
import ng.lf;
import ng.mk;
import ng.nk;
import ng.pf;
import ng.qk;
import ng.tj;
import ng.uj;
import ng.we;
import ng.wj;
import ng.xe;
import ng.ye;
import ng.ze;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final SparseArray f55429a;

    /* renamed from: b  reason: collision with root package name */
    private static final SparseArray f55430b;

    /* renamed from: c  reason: collision with root package name */
    static final AtomicReference f55431c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f55432d;

    static {
        SparseArray sparseArray = new SparseArray();
        f55429a = sparseArray;
        SparseArray sparseArray2 = new SparseArray();
        f55430b = sparseArray2;
        f55431c = new AtomicReference();
        sparseArray.put(-1, kf.FORMAT_UNKNOWN);
        sparseArray.put(1, kf.FORMAT_CODE_128);
        sparseArray.put(2, kf.FORMAT_CODE_39);
        sparseArray.put(4, kf.FORMAT_CODE_93);
        sparseArray.put(8, kf.FORMAT_CODABAR);
        sparseArray.put(16, kf.FORMAT_DATA_MATRIX);
        sparseArray.put(32, kf.FORMAT_EAN_13);
        sparseArray.put(64, kf.FORMAT_EAN_8);
        sparseArray.put(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, kf.FORMAT_ITF);
        sparseArray.put(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, kf.FORMAT_QR_CODE);
        sparseArray.put(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, kf.FORMAT_UPC_A);
        sparseArray.put(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, kf.FORMAT_UPC_E);
        sparseArray.put(RecyclerView.ItemAnimator.FLAG_MOVED, kf.FORMAT_PDF417);
        sparseArray.put(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, kf.FORMAT_AZTEC);
        sparseArray2.put(0, lf.TYPE_UNKNOWN);
        sparseArray2.put(1, lf.TYPE_CONTACT_INFO);
        sparseArray2.put(2, lf.TYPE_EMAIL);
        sparseArray2.put(3, lf.TYPE_ISBN);
        sparseArray2.put(4, lf.TYPE_PHONE);
        sparseArray2.put(5, lf.TYPE_PRODUCT);
        sparseArray2.put(6, lf.TYPE_SMS);
        sparseArray2.put(7, lf.TYPE_TEXT);
        sparseArray2.put(8, lf.TYPE_URL);
        sparseArray2.put(9, lf.TYPE_WIFI);
        sparseArray2.put(10, lf.TYPE_GEO);
        sparseArray2.put(11, lf.TYPE_CALENDAR_EVENT);
        sparseArray2.put(12, lf.TYPE_DRIVER_LICENSE);
        HashMap hashMap = new HashMap();
        f55432d = hashMap;
        hashMap.put(1, tj.CODE_128);
        hashMap.put(2, tj.CODE_39);
        hashMap.put(4, tj.CODE_93);
        hashMap.put(8, tj.CODABAR);
        hashMap.put(16, tj.DATA_MATRIX);
        hashMap.put(32, tj.EAN_13);
        hashMap.put(64, tj.EAN_8);
        hashMap.put(Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT), tj.ITF);
        hashMap.put(Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER), tj.QR_CODE);
        hashMap.put(Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING), tj.UPC_A);
        hashMap.put(Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET), tj.UPC_E);
        hashMap.put(Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_MOVED), tj.PDF417);
        hashMap.put(Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT), tj.AZTEC);
    }

    public static kf a(int i10) {
        kf kfVar = (kf) f55429a.get(i10);
        if (kfVar == null) {
            return kf.FORMAT_UNKNOWN;
        }
        return kfVar;
    }

    public static lf b(int i10) {
        lf lfVar = (lf) f55430b.get(i10);
        if (lfVar == null) {
            return lf.TYPE_UNKNOWN;
        }
        return lfVar;
    }

    public static wj c(vj.b bVar) {
        int a10 = bVar.a();
        f1 f1Var = new f1();
        if (a10 == 0) {
            f1Var.f(f55432d.values());
        } else {
            for (Map.Entry entry : f55432d.entrySet()) {
                if ((((Integer) entry.getKey()).intValue() & a10) != 0) {
                    f1Var.e((tj) entry.getValue());
                }
            }
        }
        uj ujVar = new uj();
        ujVar.b(f1Var.g());
        return ujVar.c();
    }

    public static String d() {
        if (true != f()) {
            return "play-services-mlkit-barcode-scanning";
        }
        return "barcode-scanning";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(nk nkVar, final xe xeVar) {
        nkVar.f(new mk() { // from class: yj.a
            @Override // ng.mk
            public final ck zza() {
                we weVar;
                ze zeVar = new ze();
                if (b.f()) {
                    weVar = we.TYPE_THICK;
                } else {
                    weVar = we.TYPE_THIN;
                }
                xe xeVar2 = xe.this;
                zeVar.e(weVar);
                pf pfVar = new pf();
                pfVar.b(xeVar2);
                zeVar.h(pfVar.c());
                return qk.e(zeVar);
            }
        }, ye.ON_DEVICE_BARCODE_LOAD);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean f() {
        AtomicReference atomicReference = f55431c;
        if (atomicReference.get() != null) {
            return ((Boolean) atomicReference.get()).booleanValue();
        }
        boolean b10 = n.b(tj.i.c().b());
        atomicReference.set(Boolean.valueOf(b10));
        return b10;
    }
}
