package fi;

import android.content.Context;
import android.util.Log;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ei.f {

    /* renamed from: a  reason: collision with root package name */
    private final Context f25198a;

    /* renamed from: b  reason: collision with root package name */
    private final di.f f25199b;

    /* renamed from: c  reason: collision with root package name */
    private final g f25200c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f25201d;

    /* renamed from: e  reason: collision with root package name */
    private final di.t f25202e;

    public e(Context context, Executor executor, g gVar, di.f fVar, di.t tVar) {
        this.f25198a = context;
        this.f25199b = fVar;
        this.f25200c = gVar;
        this.f25201d = executor;
        this.f25202e = tVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void c(e eVar, List list, ei.d dVar) {
        Integer e10 = eVar.e(list);
        if (e10 == null) {
            return;
        }
        if (e10.intValue() == 0) {
            dVar.a();
        } else {
            dVar.b(e10.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void d(e eVar, ei.d dVar) {
        try {
            if (!di.a.e(f0.a(eVar.f25198a))) {
                Log.e("SplitCompat", "Emulating splits failed.");
                dVar.b(-12);
                return;
            }
            Log.i("SplitCompat", "Splits installed.");
            dVar.zza();
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error emulating splits.", e10);
            dVar.b(-12);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x006c, code lost:
        if (r7.exists() == false) goto L23;
     */
    /* JADX WARN: Removed duplicated region for block: B:98:0x014f A[Catch: Exception -> 0x014a, TRY_LEAVE, TryCatch #11 {Exception -> 0x014a, blocks: (B:3:0x0004, B:98:0x014f, B:5:0x0016, B:11:0x0021, B:12:0x002a, B:14:0x0031, B:52:0x00b5, B:61:0x00c7, B:60:0x00c4, B:62:0x00c8, B:63:0x00cd, B:65:0x00d9, B:67:0x00e1, B:69:0x00e9, B:70:0x00f7, B:72:0x00fb, B:76:0x010e, B:87:0x0137, B:77:0x0114, B:81:0x011d, B:83:0x0124, B:85:0x012b, B:86:0x0131), top: B:119:0x0004 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Integer e(java.util.List r13) {
        /*
            Method dump skipped, instructions count: 349
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: fi.e.e(java.util.List):java.lang.Integer");
    }

    @Override // ei.f
    public final void a(List list, ei.d dVar) {
        if (di.a.f()) {
            this.f25201d.execute(new d(this, list, dVar));
            return;
        }
        throw new IllegalStateException("Ingestion should only be called in SplitCompat mode.");
    }
}
