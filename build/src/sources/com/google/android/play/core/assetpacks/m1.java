package com.google.android.play.core.assetpacks;

import java.io.File;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m1 {

    /* renamed from: g  reason: collision with root package name */
    private static final th.k0 f16543g = new th.k0("ExtractChunkTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f16544a = new byte[8192];

    /* renamed from: b  reason: collision with root package name */
    private final n0 f16545b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f16546c;

    /* renamed from: d  reason: collision with root package name */
    private final o3 f16547d;

    /* renamed from: e  reason: collision with root package name */
    private final th.r f16548e;

    /* renamed from: f  reason: collision with root package name */
    private final th.r f16549f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m1(n0 n0Var, th.r rVar, th.r rVar2, b2 b2Var, o3 o3Var) {
        this.f16545b = n0Var;
        this.f16548e = rVar;
        this.f16549f = rVar2;
        this.f16546c = b2Var;
        this.f16547d = o3Var;
    }

    private final File b(l1 l1Var) {
        File C = this.f16545b.C(l1Var.f16672b, l1Var.f16509c, l1Var.f16510d, l1Var.f16512f);
        if (!C.exists()) {
            C.mkdirs();
        }
        return C;
    }

    /* JADX WARN: Can't wrap try/catch for region: R(18:1|(1:3)|4|5|(1:7)(2:110|111)|8|(2:10|(12:12|(2:14|(1:(2:17|(2:82|83))(2:84|85))(2:86|(10:88|(7:21|(4:22|(2:26|(1:35)(4:30|(1:32)|33|34))|36|(1:38)(1:62))|40|41|(1:43)|44|(2:46|(1:48)(2:49|(1:51)(3:52|(2:54|(1:56)(2:58|59))(1:61)|57))))|63|64|(2:76|77)|66|67|68|69|(2:71|72)(1:73))(2:89|90)))(2:91|(5:93|(4:94|(1:96)|97|(0)(1:104))|100|101|(1:103))(2:105|106))|19|(0)|63|64|(0)|66|67|68|69|(0)(0))(2:107|108))|109|(0)|63|64|(0)|66|67|68|69|(0)(0)|(1:(0))) */
    /* JADX WARN: Code restructure failed: missing block: B:100:0x02ce, code lost:
        com.google.android.play.core.assetpacks.m1.f16543g.e("Could not close file for chunk %s of slice %s of pack %s.", java.lang.Integer.valueOf(r21.f16514h), r21.f16512f, r21.f16672b);
     */
    /* JADX WARN: Removed duplicated region for block: B:103:0x02e7  */
    /* JADX WARN: Removed duplicated region for block: B:114:0x027a A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:124:? A[RETURN, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:51:0x0167 A[Catch: all -> 0x0073, TryCatch #3 {IOException -> 0x0310, blocks: (B:5:0x0020, B:89:0x0271, B:8:0x002b, B:10:0x0031, B:12:0x0037, B:14:0x0045, B:19:0x0050, B:51:0x0167, B:52:0x0170, B:54:0x017a, B:56:0x0180, B:58:0x0186, B:60:0x018c, B:62:0x01b0, B:63:0x01bc, B:64:0x01c0, B:65:0x01c7, B:67:0x01cd, B:69:0x01d3, B:71:0x01d9, B:72:0x01e9, B:74:0x01ef, B:76:0x01f5, B:77:0x0208, B:79:0x020e, B:80:0x021d, B:82:0x0223, B:88:0x0264, B:85:0x024b, B:86:0x0252, B:87:0x0253, B:22:0x0069, B:23:0x0072, B:26:0x0077, B:27:0x0090, B:28:0x0091, B:30:0x00b4, B:31:0x00c0, B:32:0x00c9, B:33:0x00ca, B:35:0x00e8, B:36:0x00fa, B:38:0x010d, B:39:0x0112, B:42:0x011c, B:44:0x0127, B:45:0x013c, B:46:0x0145, B:47:0x0146, B:48:0x0163), top: B:116:0x0020 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void a(com.google.android.play.core.assetpacks.l1 r21) {
        /*
            Method dump skipped, instructions count: 844
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.play.core.assetpacks.m1.a(com.google.android.play.core.assetpacks.l1):void");
    }
}
