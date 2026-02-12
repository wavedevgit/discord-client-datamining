package wj;

import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l {
    private static final ng.i A;
    private static final ng.i B;

    /* renamed from: a  reason: collision with root package name */
    public static final com.google.android.gms.common.d[] f52798a = new com.google.android.gms.common.d[0];

    /* renamed from: b  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52799b;

    /* renamed from: c  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52800c;

    /* renamed from: d  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52801d;

    /* renamed from: e  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52802e;

    /* renamed from: f  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52803f;

    /* renamed from: g  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52804g;

    /* renamed from: h  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52805h;

    /* renamed from: i  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52806i;

    /* renamed from: j  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52807j;

    /* renamed from: k  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52808k;

    /* renamed from: l  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52809l;

    /* renamed from: m  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52810m;

    /* renamed from: n  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52811n;

    /* renamed from: o  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52812o;

    /* renamed from: p  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52813p;

    /* renamed from: q  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52814q;

    /* renamed from: r  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52815r;

    /* renamed from: s  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52816s;

    /* renamed from: t  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52817t;

    /* renamed from: u  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52818u;

    /* renamed from: v  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52819v;

    /* renamed from: w  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52820w;

    /* renamed from: x  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52821x;

    /* renamed from: y  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52822y;

    /* renamed from: z  reason: collision with root package name */
    public static final com.google.android.gms.common.d f52823z;

    static {
        com.google.android.gms.common.d dVar = new com.google.android.gms.common.d("vision.barcode", 1L);
        f52799b = dVar;
        com.google.android.gms.common.d dVar2 = new com.google.android.gms.common.d("vision.custom.ica", 1L);
        f52800c = dVar2;
        com.google.android.gms.common.d dVar3 = new com.google.android.gms.common.d("vision.face", 1L);
        f52801d = dVar3;
        com.google.android.gms.common.d dVar4 = new com.google.android.gms.common.d("vision.ica", 1L);
        f52802e = dVar4;
        com.google.android.gms.common.d dVar5 = new com.google.android.gms.common.d("vision.ocr", 1L);
        f52803f = dVar5;
        f52804g = new com.google.android.gms.common.d("mlkit.ocr.chinese", 1L);
        f52805h = new com.google.android.gms.common.d("mlkit.ocr.common", 1L);
        f52806i = new com.google.android.gms.common.d("mlkit.ocr.devanagari", 1L);
        f52807j = new com.google.android.gms.common.d("mlkit.ocr.japanese", 1L);
        f52808k = new com.google.android.gms.common.d("mlkit.ocr.korean", 1L);
        com.google.android.gms.common.d dVar6 = new com.google.android.gms.common.d("mlkit.langid", 1L);
        f52809l = dVar6;
        com.google.android.gms.common.d dVar7 = new com.google.android.gms.common.d("mlkit.nlclassifier", 1L);
        f52810m = dVar7;
        com.google.android.gms.common.d dVar8 = new com.google.android.gms.common.d("tflite_dynamite", 1L);
        f52811n = dVar8;
        com.google.android.gms.common.d dVar9 = new com.google.android.gms.common.d("mlkit.barcode.ui", 1L);
        f52812o = dVar9;
        com.google.android.gms.common.d dVar10 = new com.google.android.gms.common.d("mlkit.smartreply", 1L);
        f52813p = dVar10;
        f52814q = new com.google.android.gms.common.d("mlkit.image.caption", 1L);
        f52815r = new com.google.android.gms.common.d("mlkit.docscan.detect", 1L);
        f52816s = new com.google.android.gms.common.d("mlkit.docscan.crop", 1L);
        f52817t = new com.google.android.gms.common.d("mlkit.docscan.enhance", 1L);
        f52818u = new com.google.android.gms.common.d("mlkit.docscan.ui", 1L);
        f52819v = new com.google.android.gms.common.d("mlkit.docscan.stain", 1L);
        f52820w = new com.google.android.gms.common.d("mlkit.docscan.shadow", 1L);
        f52821x = new com.google.android.gms.common.d("mlkit.quality.aesthetic", 1L);
        f52822y = new com.google.android.gms.common.d("mlkit.quality.technical", 1L);
        f52823z = new com.google.android.gms.common.d("mlkit.segmentation.subject", 1L);
        ng.h hVar = new ng.h();
        hVar.a("barcode", dVar);
        hVar.a("custom_ica", dVar2);
        hVar.a("face", dVar3);
        hVar.a("ica", dVar4);
        hVar.a("ocr", dVar5);
        hVar.a("langid", dVar6);
        hVar.a("nlclassifier", dVar7);
        hVar.a("tflite_dynamite", dVar8);
        hVar.a("barcode_ui", dVar9);
        hVar.a("smart_reply", dVar10);
        A = hVar.b();
        ng.h hVar2 = new ng.h();
        hVar2.a("com.google.android.gms.vision.barcode", dVar);
        hVar2.a("com.google.android.gms.vision.custom.ica", dVar2);
        hVar2.a("com.google.android.gms.vision.face", dVar3);
        hVar2.a("com.google.android.gms.vision.ica", dVar4);
        hVar2.a("com.google.android.gms.vision.ocr", dVar5);
        hVar2.a("com.google.android.gms.mlkit.langid", dVar6);
        hVar2.a("com.google.android.gms.mlkit.nlclassifier", dVar7);
        hVar2.a("com.google.android.gms.tflite_dynamite", dVar8);
        hVar2.a("com.google.android.gms.mlkit_smartreply", dVar10);
        B = hVar2.b();
    }

    public static boolean a(Context context, List list) {
        if (com.google.android.gms.common.g.f().a(context) >= 221500000) {
            return b(context, f(B, list));
        }
        try {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                DynamiteModule.e(context, DynamiteModule.f14541b, (String) it.next());
            }
            return true;
        } catch (DynamiteModule.a unused) {
            return false;
        }
    }

    public static boolean b(Context context, final com.google.android.gms.common.d[] dVarArr) {
        try {
            return ((mf.b) zg.m.a(mf.c.a(context).e(new ff.f() { // from class: wj.c0
                @Override // ff.f
                public final com.google.android.gms.common.d[] a() {
                    com.google.android.gms.common.d[] dVarArr2 = l.f52798a;
                    return dVarArr;
                }
            }).e(new zg.f() { // from class: wj.d0
                @Override // zg.f
                public final void onFailure(Exception exc) {
                    Log.e("OptionalModuleUtils", "Failed to check feature availability", exc);
                }
            }))).b();
        } catch (InterruptedException | ExecutionException e10) {
            Log.e("OptionalModuleUtils", "Failed to complete the task of features availability check", e10);
            return false;
        }
    }

    public static void c(Context context, String str) {
        d(context, ng.f.i(str));
    }

    public static void d(Context context, List list) {
        if (com.google.android.gms.common.g.f().a(context) >= 221500000) {
            e(context, f(A, list));
            return;
        }
        Intent intent = new Intent();
        intent.setClassName("com.google.android.gms", "com.google.android.gms.vision.DependencyBroadcastReceiverProxy");
        intent.setAction("com.google.android.gms.vision.DEPENDENCY");
        intent.putExtra("com.google.android.gms.vision.DEPENDENCIES", TextUtils.join(",", list));
        intent.putExtra("requester_app_package", context.getApplicationInfo().packageName);
        context.sendBroadcast(intent);
    }

    public static void e(Context context, final com.google.android.gms.common.d[] dVarArr) {
        mf.c.a(context).i(mf.f.d().a(new ff.f() { // from class: wj.a0
            @Override // ff.f
            public final com.google.android.gms.common.d[] a() {
                com.google.android.gms.common.d[] dVarArr2 = l.f52798a;
                return dVarArr;
            }
        }).b()).e(new zg.f() { // from class: wj.b0
            @Override // zg.f
            public final void onFailure(Exception exc) {
                Log.e("OptionalModuleUtils", "Failed to request modules install request", exc);
            }
        });
    }

    private static com.google.android.gms.common.d[] f(Map map, List list) {
        com.google.android.gms.common.d[] dVarArr = new com.google.android.gms.common.d[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            dVarArr[i10] = (com.google.android.gms.common.d) hf.q.l((com.google.android.gms.common.d) map.get(list.get(i10)));
        }
        return dVarArr;
    }
}
