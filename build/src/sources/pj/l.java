package pj;

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
    private static final lg.i A;
    private static final lg.i B;

    /* renamed from: a  reason: collision with root package name */
    public static final com.google.android.gms.common.d[] f46020a = new com.google.android.gms.common.d[0];

    /* renamed from: b  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46021b;

    /* renamed from: c  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46022c;

    /* renamed from: d  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46023d;

    /* renamed from: e  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46024e;

    /* renamed from: f  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46025f;

    /* renamed from: g  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46026g;

    /* renamed from: h  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46027h;

    /* renamed from: i  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46028i;

    /* renamed from: j  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46029j;

    /* renamed from: k  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46030k;

    /* renamed from: l  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46031l;

    /* renamed from: m  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46032m;

    /* renamed from: n  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46033n;

    /* renamed from: o  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46034o;

    /* renamed from: p  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46035p;

    /* renamed from: q  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46036q;

    /* renamed from: r  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46037r;

    /* renamed from: s  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46038s;

    /* renamed from: t  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46039t;

    /* renamed from: u  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46040u;

    /* renamed from: v  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46041v;

    /* renamed from: w  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46042w;

    /* renamed from: x  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46043x;

    /* renamed from: y  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46044y;

    /* renamed from: z  reason: collision with root package name */
    public static final com.google.android.gms.common.d f46045z;

    static {
        com.google.android.gms.common.d dVar = new com.google.android.gms.common.d("vision.barcode", 1L);
        f46021b = dVar;
        com.google.android.gms.common.d dVar2 = new com.google.android.gms.common.d("vision.custom.ica", 1L);
        f46022c = dVar2;
        com.google.android.gms.common.d dVar3 = new com.google.android.gms.common.d("vision.face", 1L);
        f46023d = dVar3;
        com.google.android.gms.common.d dVar4 = new com.google.android.gms.common.d("vision.ica", 1L);
        f46024e = dVar4;
        com.google.android.gms.common.d dVar5 = new com.google.android.gms.common.d("vision.ocr", 1L);
        f46025f = dVar5;
        f46026g = new com.google.android.gms.common.d("mlkit.ocr.chinese", 1L);
        f46027h = new com.google.android.gms.common.d("mlkit.ocr.common", 1L);
        f46028i = new com.google.android.gms.common.d("mlkit.ocr.devanagari", 1L);
        f46029j = new com.google.android.gms.common.d("mlkit.ocr.japanese", 1L);
        f46030k = new com.google.android.gms.common.d("mlkit.ocr.korean", 1L);
        com.google.android.gms.common.d dVar6 = new com.google.android.gms.common.d("mlkit.langid", 1L);
        f46031l = dVar6;
        com.google.android.gms.common.d dVar7 = new com.google.android.gms.common.d("mlkit.nlclassifier", 1L);
        f46032m = dVar7;
        com.google.android.gms.common.d dVar8 = new com.google.android.gms.common.d("tflite_dynamite", 1L);
        f46033n = dVar8;
        com.google.android.gms.common.d dVar9 = new com.google.android.gms.common.d("mlkit.barcode.ui", 1L);
        f46034o = dVar9;
        com.google.android.gms.common.d dVar10 = new com.google.android.gms.common.d("mlkit.smartreply", 1L);
        f46035p = dVar10;
        f46036q = new com.google.android.gms.common.d("mlkit.image.caption", 1L);
        f46037r = new com.google.android.gms.common.d("mlkit.docscan.detect", 1L);
        f46038s = new com.google.android.gms.common.d("mlkit.docscan.crop", 1L);
        f46039t = new com.google.android.gms.common.d("mlkit.docscan.enhance", 1L);
        f46040u = new com.google.android.gms.common.d("mlkit.docscan.ui", 1L);
        f46041v = new com.google.android.gms.common.d("mlkit.docscan.stain", 1L);
        f46042w = new com.google.android.gms.common.d("mlkit.docscan.shadow", 1L);
        f46043x = new com.google.android.gms.common.d("mlkit.quality.aesthetic", 1L);
        f46044y = new com.google.android.gms.common.d("mlkit.quality.technical", 1L);
        f46045z = new com.google.android.gms.common.d("mlkit.segmentation.subject", 1L);
        lg.h hVar = new lg.h();
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
        lg.h hVar2 = new lg.h();
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
                DynamiteModule.d(context, DynamiteModule.f14870b, (String) it.next());
            }
            return true;
        } catch (DynamiteModule.a unused) {
            return false;
        }
    }

    public static boolean b(Context context, final com.google.android.gms.common.d[] dVarArr) {
        try {
            return ((lf.b) wg.m.a(lf.c.a(context).j(new ef.f() { // from class: pj.c0
                @Override // ef.f
                public final com.google.android.gms.common.d[] a() {
                    com.google.android.gms.common.d[] dVarArr2 = l.f46020a;
                    return dVarArr;
                }
            }).e(new wg.f() { // from class: pj.d0
                @Override // wg.f
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
        d(context, lg.f.h(str));
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
        lf.c.a(context).k(lf.f.d().a(new ef.f() { // from class: pj.a0
            @Override // ef.f
            public final com.google.android.gms.common.d[] a() {
                com.google.android.gms.common.d[] dVarArr2 = l.f46020a;
                return dVarArr;
            }
        }).b()).e(new wg.f() { // from class: pj.b0
            @Override // wg.f
            public final void onFailure(Exception exc) {
                Log.e("OptionalModuleUtils", "Failed to request modules install request", exc);
            }
        });
    }

    private static com.google.android.gms.common.d[] f(Map map, List list) {
        com.google.android.gms.common.d[] dVarArr = new com.google.android.gms.common.d[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            dVarArr[i10] = (com.google.android.gms.common.d) gf.q.l((com.google.android.gms.common.d) map.get(list.get(i10)));
        }
        return dVarArr;
    }
}
