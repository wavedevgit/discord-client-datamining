package com.appsflyer.internal;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AFi1hSDK {
    private static final byte[] $$a = null;
    private static final int $$b = 0;
    private static int $10 = 0;
    private static int $11 = 1;
    private static int $12 = 0;
    private static int $13 = 1;
    public static final Map AFLogger;
    private static long afDebugLog;
    private static int afErrorLog;
    private static byte afErrorLogForExcManagerOnly;
    private static long afInfoLog;

    /* renamed from: d  reason: collision with root package name */
    public static final Map f8892d;

    /* renamed from: e  reason: collision with root package name */
    private static Object f8893e;
    private static int force;

    /* renamed from: i  reason: collision with root package name */
    private static Object f8894i;
    private static byte[] unregisterClient;

    /* renamed from: v  reason: collision with root package name */
    private static long f8895v;

    /* renamed from: w  reason: collision with root package name */
    private static byte[] f8896w;

    /* JADX WARN: Code restructure failed: missing block: B:5:0x001c, code lost:
        if (r8 == null) goto L13;
     */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0041  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0047  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:18:0x0050 -> B:13:0x003c). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.String $$c(short r6, byte r7, short r8) {
        /*
            int r0 = com.appsflyer.internal.AFi1hSDK.$13
            int r0 = r0 + 123
            int r1 = r0 % 128
            com.appsflyer.internal.AFi1hSDK.$12 = r1
            int r0 = r0 % 2
            r1 = 0
            if (r0 == 0) goto L21
            r0 = 83
            int r7 = r0 >>> r7
            int r6 = r6 + 38
            r0 = 1355(0x54b, float:1.899E-42)
            int r0 = r0 % r8
            byte[] r8 = com.appsflyer.internal.AFi1hSDK.$$a
            byte[] r2 = new byte[r7]
            int r7 = r7 + 19
            if (r8 != 0) goto L1f
            goto L33
        L1f:
            r3 = r1
            goto L3c
        L21:
            int r0 = 49 - r7
            int r6 = r6 + 33
            int r8 = 1152 - r8
            byte[] r2 = com.appsflyer.internal.AFi1hSDK.$$a
            byte[] r0 = new byte[r0]
            int r7 = 48 - r7
            if (r2 != 0) goto L37
            r5 = r0
            r0 = r8
            r8 = r2
            r2 = r5
        L33:
            r4 = r1
            r3 = r2
            r2 = r0
            goto L50
        L37:
            r3 = r0
            r0 = r8
            r8 = r2
            r2 = r3
            goto L1f
        L3c:
            byte r4 = (byte) r6
            r2[r3] = r4
            if (r3 != r7) goto L47
            java.lang.String r6 = new java.lang.String
            r6.<init>(r2, r1)
            return r6
        L47:
            int r3 = r3 + 1
            r4 = r8[r0]
            r5 = r2
            r2 = r6
            r6 = r4
            r4 = r3
            r3 = r5
        L50:
            int r0 = r0 + 1
            int r2 = r2 + r6
            int r6 = r2 + (-3)
            int r2 = com.appsflyer.internal.AFi1hSDK.$13
            int r2 = r2 + 15
            int r2 = r2 % 128
            com.appsflyer.internal.AFi1hSDK.$12 = r2
            r2 = r3
            r3 = r4
            goto L3c
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFi1hSDK.$$c(short, byte, short):java.lang.String");
    }

    /* JADX WARN: Can't wrap try/catch for region: R(42:908|909|(9:892|893|894|895|896|897|898|899|900)|19|(44:21|22|23|24|25|26|27|28|29|(36:31|32|33|(33:877|878|36|(1:38)(1:(1:873)(28:874|875|876|40|(3:42|(3:44|45|46)|51)(3:869|870|871)|52|(1:868)(3:55|56|57)|58|59|60|61|62|63|64|65|(1:67)(1:862)|68|(1:72)(1:861)|73|74|(1:76)(1:859)|77|78|(1:80)(1:858)|81|82|(2:86|(6:88|(36:90|91|92|93|(5:810|(9:812|813|814|815|816|817|818|819|(1:821))(2:837|838)|822|823|824)(1:95)|(17:714|715|716|717|718|719|720|721|722|723|724|725|726|727|(9:(1:730)(1:(1:784)(1:(1:786)(1:787)))|731|(2:(4:734|(3:736|737|738)(1:745)|739|740)(2:746|747)|741)|748|749|(3:751|752|753)(2:(4:758|759|760|761)(1:(3:763|764|765)(9:766|767|768|769|770|771|772|773|774))|756)|754|755|756)|788|789)(1:97)|98|99|100|101|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|120|121|122|123|124|125|126|(25:127|128|129|(1:131)|132|133|134|135|136|137|138|139|140|141|142|143|(13:633|634|635|636|637|638|639|640|641|642|643|644|645)(18:145|146|147|148|149|150|151|152|153|154|155|156|157|158|159|160|161|162)|163|164|(29:166|167|168|(1:170)(1:436)|(1:172)(1:435)|173|174|175|176|178|179|(8:383|384|385|386|387|388|389|390)(1:181)|182|183|184|(8:186|187|188|189|190|191|(2:193|194)(0)|195)|378|379|195|196|197|198|199|200|201|202|203|204|(4:206|207|(8:209|210|211|212|213|214|215|216)(1:354)|217)(3:358|359|360))(52:440|441|442|443|444|445|447|448|449|450|451|452|453|454|455|456|457|458|459|460|461|462|463|464|465|466|(2:467|(5:469|470|471|472|(3:474|475|476)(1:477))(2:572|573))|478|479|480|481|482|483|484|485|486|487|488|489|490|491|492|493|494|495|496|(4:498|499|500|501)|506|507|508|(2:510|511)|512)|(13:219|220|221|222|223|224|225|226|227|228|229|(2:231|232)|233)(5:328|329|330|331|332)|(20:269|270|271|272|273|274|275|276|277|278|279|280|281|282|283|284|285|286|287|288)(1:235)|265|266|267))(1:844)|255|256|257|244)(5:845|846|847|848|849))|854))|39|40|(0)(0)|52|(0)|868|58|59|60|61|62|63|64|65|(0)(0)|68|(13:70|72|73|74|(0)(0)|77|78|(0)(0)|81|82|(3:84|86|(0)(0))|855|856)|861|73|74|(0)(0)|77|78|(0)(0)|81|82|(0)|855|856)|35|36|(0)(0)|39|40|(0)(0)|52|(0)|868|58|59|60|61|62|63|64|65|(0)(0)|68|(0)|861|73|74|(0)(0)|77|78|(0)(0)|81|82|(0)|855|856)|883|(0)|35|36|(0)(0)|39|40|(0)(0)|52|(0)|868|58|59|60|61|62|63|64|65|(0)(0)|68|(0)|861|73|74|(0)(0)|77|78|(0)(0)|81|82|(0)|855|856)|891|886|(0)|883|(0)|35|36|(0)(0)|39|40|(0)(0)|52|(0)|868|58|59|60|61|62|63|64|65|(0)(0)|68|(0)|861|73|74|(0)(0)|77|78|(0)(0)|81|82|(0)|855|856) */
    /* JADX WARN: Code restructure failed: missing block: B:112:0x05b9, code lost:
        r6 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:113:0x05bc, code lost:
        r37 = 7;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x01ab, code lost:
        if (r8 != null) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:639:0x1c02, code lost:
        r3 = r43;
        r7 = r66;
        r23 = 4;
        r0 = r67.getDeclaredConstructor(java.lang.Object.class, java.lang.Boolean.TYPE);
        r0.setAccessible(true);
     */
    /* JADX WARN: Code restructure failed: missing block: B:640:0x1c1c, code lost:
        if (r42 != false) goto L263;
     */
    /* JADX WARN: Code restructure failed: missing block: B:641:0x1c1e, code lost:
        com.appsflyer.internal.AFi1hSDK.$10 = (com.appsflyer.internal.AFi1hSDK.$11 + 87) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        r2 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:642:0x1c29, code lost:
        r2 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:643:0x1c2b, code lost:
        com.appsflyer.internal.AFi1hSDK.f8894i = r0.newInstance(r1, java.lang.Boolean.valueOf(r2));
     */
    /* JADX WARN: Code restructure failed: missing block: B:644:0x1c39, code lost:
        r7.close();
     */
    /* JADX WARN: Code restructure failed: missing block: B:645:0x1c3c, code lost:
        r2 = r37;
        r1 = r69;
        r9 = true;
        r22 = 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:646:0x1c48, code lost:
        r0 = th;
     */
    /* JADX WARN: Code restructure failed: missing block: B:647:0x1c49, code lost:
        r1 = r69;
     */
    /* JADX WARN: Removed duplicated region for block: B:103:0x059d  */
    /* JADX WARN: Removed duplicated region for block: B:104:0x05a0  */
    /* JADX WARN: Removed duplicated region for block: B:1070:0x1fc1 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:108:0x05a8  */
    /* JADX WARN: Removed duplicated region for block: B:109:0x05b4  */
    /* JADX WARN: Removed duplicated region for block: B:116:0x05c4  */
    /* JADX WARN: Removed duplicated region for block: B:120:0x05dc A[Catch: Exception -> 0x1fe8, TRY_ENTER, TRY_LEAVE, TryCatch #128 {Exception -> 0x1fe8, blocks: (B:8:0x0163, B:10:0x0173, B:63:0x03eb, B:75:0x04ad, B:85:0x04fe, B:87:0x054d, B:89:0x0552, B:101:0x0597, B:105:0x05a2, B:110:0x05b6, B:120:0x05dc, B:809:0x1f20, B:811:0x1f24, B:825:0x1fa5, B:813:0x1f31, B:814:0x1f3a, B:826:0x1fc1, B:828:0x1fc9, B:69:0x03fa, B:55:0x038f, B:816:0x1f55, B:817:0x1f7c, B:71:0x0486, B:70:0x040f, B:57:0x03ba, B:77:0x04c1), top: B:1038:0x0163 }] */
    /* JADX WARN: Removed duplicated region for block: B:142:0x063e A[Catch: all -> 0x063f, TryCatch #125 {all -> 0x063f, blocks: (B:148:0x065d, B:140:0x0638, B:142:0x063e, B:146:0x0656, B:149:0x068d, B:150:0x06ad), top: B:1041:0x05f2 }] */
    /* JADX WARN: Removed duplicated region for block: B:146:0x0656 A[Catch: all -> 0x063f, TryCatch #125 {all -> 0x063f, blocks: (B:148:0x065d, B:140:0x0638, B:142:0x063e, B:146:0x0656, B:149:0x068d, B:150:0x06ad), top: B:1041:0x05f2 }] */
    /* JADX WARN: Removed duplicated region for block: B:264:0x0a92 A[Catch: all -> 0x080c, TryCatch #133 {all -> 0x080c, blocks: (B:181:0x07bf, B:185:0x0829, B:189:0x0845, B:184:0x081d, B:188:0x0832, B:190:0x0853, B:235:0x0a05, B:237:0x0a0b, B:238:0x0a0c, B:269:0x0aaa, B:273:0x0ab3, B:276:0x0b16, B:262:0x0a8c, B:264:0x0a92, B:265:0x0a93, B:220:0x0949, B:193:0x0865, B:203:0x08aa, B:224:0x09c8, B:212:0x08fd), top: B:1006:0x07bf, inners: #29 }] */
    /* JADX WARN: Removed duplicated region for block: B:265:0x0a93 A[Catch: all -> 0x080c, TryCatch #133 {all -> 0x080c, blocks: (B:181:0x07bf, B:185:0x0829, B:189:0x0845, B:184:0x081d, B:188:0x0832, B:190:0x0853, B:235:0x0a05, B:237:0x0a0b, B:238:0x0a0c, B:269:0x0aaa, B:273:0x0ab3, B:276:0x0b16, B:262:0x0a8c, B:264:0x0a92, B:265:0x0a93, B:220:0x0949, B:193:0x0865, B:203:0x08aa, B:224:0x09c8, B:212:0x08fd), top: B:1006:0x07bf, inners: #29 }] */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0233  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x02d3  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x0385  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x038b  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x03dd  */
    /* JADX WARN: Removed duplicated region for block: B:69:0x03fa A[Catch: Exception -> 0x1fe8, TRY_ENTER, TRY_LEAVE, TryCatch #128 {Exception -> 0x1fe8, blocks: (B:8:0x0163, B:10:0x0173, B:63:0x03eb, B:75:0x04ad, B:85:0x04fe, B:87:0x054d, B:89:0x0552, B:101:0x0597, B:105:0x05a2, B:110:0x05b6, B:120:0x05dc, B:809:0x1f20, B:811:0x1f24, B:825:0x1fa5, B:813:0x1f31, B:814:0x1f3a, B:826:0x1fc1, B:828:0x1fc9, B:69:0x03fa, B:55:0x038f, B:816:0x1f55, B:817:0x1f7c, B:71:0x0486, B:70:0x040f, B:57:0x03ba, B:77:0x04c1), top: B:1038:0x0163 }] */
    /* JADX WARN: Removed duplicated region for block: B:717:0x1d6e A[Catch: all -> 0x1ce5, TryCatch #108 {all -> 0x1ce5, blocks: (B:676:0x1cde, B:678:0x1ce4, B:681:0x1ce8, B:715:0x1d68, B:717:0x1d6e, B:718:0x1d6f, B:736:0x1ddb, B:738:0x1de1, B:739:0x1de2, B:752:0x1e33, B:754:0x1e39, B:755:0x1e3a, B:771:0x1e7d, B:773:0x1e83, B:774:0x1e84, B:780:0x1e9c, B:782:0x1ea2, B:783:0x1ea3, B:286:0x0bc4, B:532:0x1732, B:508:0x1551, B:287:0x0bed), top: B:964:0x0bc4 }] */
    /* JADX WARN: Removed duplicated region for block: B:718:0x1d6f A[Catch: all -> 0x1ce5, TryCatch #108 {all -> 0x1ce5, blocks: (B:676:0x1cde, B:678:0x1ce4, B:681:0x1ce8, B:715:0x1d68, B:717:0x1d6e, B:718:0x1d6f, B:736:0x1ddb, B:738:0x1de1, B:739:0x1de2, B:752:0x1e33, B:754:0x1e39, B:755:0x1e3a, B:771:0x1e7d, B:773:0x1e83, B:774:0x1e84, B:780:0x1e9c, B:782:0x1ea2, B:783:0x1ea3, B:286:0x0bc4, B:532:0x1732, B:508:0x1551, B:287:0x0bed), top: B:964:0x0bc4 }] */
    /* JADX WARN: Removed duplicated region for block: B:738:0x1de1 A[Catch: all -> 0x1ce5, TryCatch #108 {all -> 0x1ce5, blocks: (B:676:0x1cde, B:678:0x1ce4, B:681:0x1ce8, B:715:0x1d68, B:717:0x1d6e, B:718:0x1d6f, B:736:0x1ddb, B:738:0x1de1, B:739:0x1de2, B:752:0x1e33, B:754:0x1e39, B:755:0x1e3a, B:771:0x1e7d, B:773:0x1e83, B:774:0x1e84, B:780:0x1e9c, B:782:0x1ea2, B:783:0x1ea3, B:286:0x0bc4, B:532:0x1732, B:508:0x1551, B:287:0x0bed), top: B:964:0x0bc4 }] */
    /* JADX WARN: Removed duplicated region for block: B:739:0x1de2 A[Catch: all -> 0x1ce5, TryCatch #108 {all -> 0x1ce5, blocks: (B:676:0x1cde, B:678:0x1ce4, B:681:0x1ce8, B:715:0x1d68, B:717:0x1d6e, B:718:0x1d6f, B:736:0x1ddb, B:738:0x1de1, B:739:0x1de2, B:752:0x1e33, B:754:0x1e39, B:755:0x1e3a, B:771:0x1e7d, B:773:0x1e83, B:774:0x1e84, B:780:0x1e9c, B:782:0x1ea2, B:783:0x1ea3, B:286:0x0bc4, B:532:0x1732, B:508:0x1551, B:287:0x0bed), top: B:964:0x0bc4 }] */
    /* JADX WARN: Removed duplicated region for block: B:74:0x04ab A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:809:0x1f20 A[Catch: Exception -> 0x1fe8, TRY_ENTER, TryCatch #128 {Exception -> 0x1fe8, blocks: (B:8:0x0163, B:10:0x0173, B:63:0x03eb, B:75:0x04ad, B:85:0x04fe, B:87:0x054d, B:89:0x0552, B:101:0x0597, B:105:0x05a2, B:110:0x05b6, B:120:0x05dc, B:809:0x1f20, B:811:0x1f24, B:825:0x1fa5, B:813:0x1f31, B:814:0x1f3a, B:826:0x1fc1, B:828:0x1fc9, B:69:0x03fa, B:55:0x038f, B:816:0x1f55, B:817:0x1f7c, B:71:0x0486, B:70:0x040f, B:57:0x03ba, B:77:0x04c1), top: B:1038:0x0163 }] */
    /* JADX WARN: Removed duplicated region for block: B:92:0x057b  */
    /* JADX WARN: Removed duplicated region for block: B:931:0x1c02 A[EDGE_INSN: B:931:0x1c02->B:639:0x1c02 ?: BREAK  , EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:93:0x057e  */
    /* JADX WARN: Removed duplicated region for block: B:948:0x0305 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:97:0x058e  */
    /* JADX WARN: Removed duplicated region for block: B:998:0x1a8f A[EXC_TOP_SPLITTER, SYNTHETIC] */
    static {
        /*
            Method dump skipped, instructions count: 8224
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFi1hSDK.<clinit>():void");
    }

    private AFi1hSDK() {
    }

    public static int getCurrencyIso4217Code(int i10) {
        Object obj;
        int i11 = $11;
        int i12 = i11 + 73;
        $10 = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i12 % 2 != 0) {
            obj = f8894i;
            int i13 = 67 / 0;
        } else {
            obj = f8894i;
        }
        $10 = (i11 + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            int i14 = $$b;
            byte[] bArr = $$a;
            int intValue = ((Integer) Class.forName($$c((byte) i14, bArr[4], (short) (i14 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING)), true, (ClassLoader) f8893e).getMethod($$c(bArr[487], bArr[637], bArr[7]), Integer.TYPE).invoke(obj, Integer.valueOf(i10))).intValue();
            int i15 = $10 + 25;
            $11 = i15 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i15 % 2 != 0) {
                return intValue;
            }
            throw null;
        } catch (Throwable th2) {
            Throwable cause = th2.getCause();
            if (cause != null) {
                throw cause;
            }
            throw th2;
        }
    }

    private static void getMediationNetwork(int i10, int i11) {
        $11 = ($10 + 121) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    static void init$0() {
        int i10;
        int i11 = $11;
        int i12 = (i11 ^ 7) + ((i11 & 7) << 1);
        $10 = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i12 % 2 != 0) {
            byte[] bArr = new byte[1166];
            System.arraycopy("@ÛÛ¡\u0010ù\u0011\u0000ýþÍ<\u000eò\u0012û\u0004ý\u0013¾\u0018/\u0000\u0006\u0006øþ\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\u0015\b&Ë6òô\n\u000b\u0003\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010\u0010ù\u0011\u0000ýþÍ6\u0012\u0003Á\u0016%\u0014ø\u0010ö\u000e\bÞ\u0017\röÿ\u0006\u0015\u0000\u0003ö\f\tÐ2\u0003ÿ\u0000ý\u0001\u0016ø\t\u0002\u0010ù\u0011\u0000ýþÍ6\u0012\u0003Á\u00162\u0003Ú(\u0006ö\u0002\u000e\n\u0001\u0012Ø(þ\u000eøû\u000eØ2\u0003ÿ\u0000ý\u0001\u0016ø\t\u0002\u0001\u0012Õ&\u0006ü\u0011Ô(\f\u0001\u0012Ò/ø\u0004á!\u0005\b\u0000â(\f\u0001\u0012Ò!\u0005\b\u0000â(\f8\u0000\u0016ðÑ8\u0000\u0016ðÑú\u0018îÐ>\tÂ\u001b&\u0006üú\u0018îÐ>\tÂIü\u0006÷\b\fú\u0018îÐAø\u0010üÊ()ý\u0004ô\u000b\u0001\u0012ß%\u0000\u0004ø\u0010\u0005\b\u000fø\u0004ý\u0007\u0001\u0005\b\u0000\u0010ù\u0011\u0000ýþÍD\u0007¾\u00176÷\u0006ûÃ5ò\u0010\u0004ù\t\u0002ô\n\u0017í\b\t\u0001\u0010ì\u001eú\u000eôî\tí\u000bú\u0018îÐ>\tÂ\u001e\tù6î\u0005\u000e\u0007ø\t\u0002\u0015\u0000\u0003ö\f\tã\u0018\u0007ûë\u001f\u0006\u0003\u0000\rú\u0018îÐ>\tÂ\u001b&\u0006üí)\u0002ÿ\b\u0002â$\u0001öÿ\u000f\f\u0006\u0007õî\u0006ð\u000b5\u0015\u0003õ\u0012\u0002¿7\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ5\u0004\u0004\u0003Ó\u00022\u0003Ö\u00070Ï\u000bý\b.Í\u0001\u0012á\u0016\u0011ÿ\t\u0000ô\u0005ú\u0018îÐCú\u0012½*\u0000ý\u0001\u0012ß\u0014\u0016÷ú\u0018îÐ>\tÂ\u00176ô\u0003\u0002\u0010ö\u0002è(\u0005\b\u0002â$\u0001öÿ\u000fú\u0018îÐ>\tÂ\u001e(\u0005\b\u0002â$\u0001öÿ\u000fú\u0018îÐ>\tÂ\u0019 \u0016ðë(\u0005\b\u0002â$\u0001öÿ\u000föÿ\u0006å2ú\u0003\u0010ú\u0018îÐ>\tÂ\u0017:þôß4\u0003ò\u001bÓ(\u0005\b\u0002â$\u0001öÿ\u000f\u0014\u0003ò\u001bí\u000f\u0004\f\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010¿>\b\tô\u0010ÿö\u000eÅ\u0016\b(ÉBæô\n\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010¿>\b\tô\u0010ÿö\u000eÅ\u0016\b&Ë6òô\n\u000b\u0003\u0001\u0012Ü\u001b\u0002\bû\u0016ø\t\u0002ã\u001a\u0012\u0006û\u0006üû\u0001\nöÿ\u0006õ\u0012á\u0016ÿ\u0006î\"\u0001\u0010î\u0007ï\u000bþú\u000eô\u0001\u0012Õ\u0001ú\u0018îÐ>\tÂ\u001b&\u0006üâ$\u0011ó\u0012ú\n\u0007þ\u0006\tøø\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u0019$\u0016Ñ&\u0006ü\u0006õ\u0006ã$\u0016\u0001\u0012Ð$\u0014ÿ\u0000\f\u0002ôî\u0014\u0016÷\u0004\nü\u0012ô\u0001\u0012Ò,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ú\u0018îÐJ\u0002ø\u0006ÅOò\nÁ/\u0012\nÜ(\u0005\b\u0002â$\u0001öÿ\u000f\u0001\u0012Ý\u001a\u0016ÿÔ,\t\u0001\nú\u0018îÐJ\u0002ø\u0006ÅOò\nÁ/\u0012\nØ,\t\u0001\n\u0001\u0012â\u0019\u0014îú\u0018îÐ>\tÂ\u0017:þôß4\u0003ò\u001bÙ)\u0002ÿ\b\u0002â$\u0001öÿ\u000fþÖ:þôß4\u0003ò\u001bú\u0018îÐ>\tÂ\u0018,\u0006\u0007õÿ\u0004\rü\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u001e(â\u001b\u000b\u0005\u0006\nÎ$\u0016Î,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ú\u0018îÐCþ\tÂ\u0017:þôà6ô\u0003\u0002\u0010ú\u0018îÐAø\u0010üÊ\u0018,ø\u0015\u0003Ü&õ\u0006\u0004\u0010þò\u0012\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u0017\"\u0015õâ$\u0016Î,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ô\u0016÷ç \r\u0004ö\u0016ø\u0010òê ü\u0013ò\u0014\nÎ(\fö\u0001\u0014þ\u0006úÿ\u0011ö\u0016ø\u0010òê ü\u0013ò\u0014\nÚ\u0014\u0016÷à*ü\u000bû\f\t\u0002\u0001\u0012Ò/\u0001\u0006\u0002\u0002ú\f\tã(úøî\u000bë\u000b\u0006õ\u0006â,ø\u0015\u0003\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\u0015\b&Ë:îô\nÜH5\u0015\u0003õ\u0012\u0002¿7\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\b2Ó\u0003\u00072þ\u0004Ô\u0004\b\u0001\u00031Ñ\u00070Ìî\nì\u000bI\u0004´Iþ\u000e\u0003ù\u0002\u0005\u000b\u000b°Oü\u0004\u0011¸\u0001\u0012á\u0016\u0014ò\f\nó\bþ&ñ\u0016\u0014ò\f\nóâ \u0016ð".getBytes("ISO-8859-1"), 0, bArr, 0, 1166);
            $$a = bArr;
            i10 = 72;
        } else {
            byte[] bArr2 = new byte[1166];
            System.arraycopy("@ÛÛ¡\u0010ù\u0011\u0000ýþÍ<\u000eò\u0012û\u0004ý\u0013¾\u0018/\u0000\u0006\u0006øþ\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\u0015\b&Ë6òô\n\u000b\u0003\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010\u0010ù\u0011\u0000ýþÍ6\u0012\u0003Á\u0016%\u0014ø\u0010ö\u000e\bÞ\u0017\röÿ\u0006\u0015\u0000\u0003ö\f\tÐ2\u0003ÿ\u0000ý\u0001\u0016ø\t\u0002\u0010ù\u0011\u0000ýþÍ6\u0012\u0003Á\u00162\u0003Ú(\u0006ö\u0002\u000e\n\u0001\u0012Ø(þ\u000eøû\u000eØ2\u0003ÿ\u0000ý\u0001\u0016ø\t\u0002\u0001\u0012Õ&\u0006ü\u0011Ô(\f\u0001\u0012Ò/ø\u0004á!\u0005\b\u0000â(\f\u0001\u0012Ò!\u0005\b\u0000â(\f8\u0000\u0016ðÑ8\u0000\u0016ðÑú\u0018îÐ>\tÂ\u001b&\u0006üú\u0018îÐ>\tÂIü\u0006÷\b\fú\u0018îÐAø\u0010üÊ()ý\u0004ô\u000b\u0001\u0012ß%\u0000\u0004ø\u0010\u0005\b\u000fø\u0004ý\u0007\u0001\u0005\b\u0000\u0010ù\u0011\u0000ýþÍD\u0007¾\u00176÷\u0006ûÃ5ò\u0010\u0004ù\t\u0002ô\n\u0017í\b\t\u0001\u0010ì\u001eú\u000eôî\tí\u000bú\u0018îÐ>\tÂ\u001e\tù6î\u0005\u000e\u0007ø\t\u0002\u0015\u0000\u0003ö\f\tã\u0018\u0007ûë\u001f\u0006\u0003\u0000\rú\u0018îÐ>\tÂ\u001b&\u0006üí)\u0002ÿ\b\u0002â$\u0001öÿ\u000f\f\u0006\u0007õî\u0006ð\u000b5\u0015\u0003õ\u0012\u0002¿7\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ5\u0004\u0004\u0003Ó\u00022\u0003Ö\u00070Ï\u000bý\b.Í\u0001\u0012á\u0016\u0011ÿ\t\u0000ô\u0005ú\u0018îÐCú\u0012½*\u0000ý\u0001\u0012ß\u0014\u0016÷ú\u0018îÐ>\tÂ\u00176ô\u0003\u0002\u0010ö\u0002è(\u0005\b\u0002â$\u0001öÿ\u000fú\u0018îÐ>\tÂ\u001e(\u0005\b\u0002â$\u0001öÿ\u000fú\u0018îÐ>\tÂ\u0019 \u0016ðë(\u0005\b\u0002â$\u0001öÿ\u000föÿ\u0006å2ú\u0003\u0010ú\u0018îÐ>\tÂ\u0017:þôß4\u0003ò\u001bÓ(\u0005\b\u0002â$\u0001öÿ\u000f\u0014\u0003ò\u001bí\u000f\u0004\f\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010¿>\b\tô\u0010ÿö\u000eÅ\u0016\b(ÉBæô\n\u000f\u0001Ä6\u0012\u0003\u0006ö\t\u0010ï\u0010¿>\b\tô\u0010ÿö\u000eÅ\u0016\b&Ë6òô\n\u000b\u0003\u0001\u0012Ü\u001b\u0002\bû\u0016ø\t\u0002ã\u001a\u0012\u0006û\u0006üû\u0001\nöÿ\u0006õ\u0012á\u0016ÿ\u0006î\"\u0001\u0010î\u0007ï\u000bþú\u000eô\u0001\u0012Õ\u0001ú\u0018îÐ>\tÂ\u001b&\u0006üâ$\u0011ó\u0012ú\n\u0007þ\u0006\tøø\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u0019$\u0016Ñ&\u0006ü\u0006õ\u0006ã$\u0016\u0001\u0012Ð$\u0014ÿ\u0000\f\u0002ôî\u0014\u0016÷\u0004\nü\u0012ô\u0001\u0012Ò,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ú\u0018îÐJ\u0002ø\u0006ÅOò\nÁ/\u0012\nÜ(\u0005\b\u0002â$\u0001öÿ\u000f\u0001\u0012Ý\u001a\u0016ÿÔ,\t\u0001\nú\u0018îÐJ\u0002ø\u0006ÅOò\nÁ/\u0012\nØ,\t\u0001\n\u0001\u0012â\u0019\u0014îú\u0018îÐ>\tÂ\u0017:þôß4\u0003ò\u001bÙ)\u0002ÿ\b\u0002â$\u0001öÿ\u000fþÖ:þôß4\u0003ò\u001bú\u0018îÐ>\tÂ\u0018,\u0006\u0007õÿ\u0004\rü\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u001e(â\u001b\u000b\u0005\u0006\nÎ$\u0016Î,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ú\u0018îÐCþ\tÂ\u0017:þôà6ô\u0003\u0002\u0010ú\u0018îÐAø\u0010üÊ\u0018,ø\u0015\u0003Ü&õ\u0006\u0004\u0010þò\u0012\u0000\u000e\rö\u0005ÆH\tý\u0004ô\u000bÄ\u0017\"\u0015õâ$\u0016Î,ø\u0015\u0003Ü&õ\u0006\u0004\u0010ô\u0016÷ç \r\u0004ö\u0016ø\u0010òê ü\u0013ò\u0014\nÎ(\fö\u0001\u0014þ\u0006úÿ\u0011ö\u0016ø\u0010òê ü\u0013ò\u0014\nÚ\u0014\u0016÷à*ü\u000bû\f\t\u0002\u0001\u0012Ò/\u0001\u0006\u0002\u0002ú\f\tã(úøî\u000bë\u000b\u0006õ\u0006â,ø\u0015\u0003\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\u0015\b&Ë:îô\nÜH5\u0015\u0003õ\u0012\u0002¿7\u000f\u0001Å5\u0012\u0003\u0006ö\t\u0010ï\u0010À=\b\tô\u0010ÿö\u000eÆ\b2Ó\u0003\u00072þ\u0004Ô\u0004\b\u0001\u00031Ñ\u00070Ìî\nì\u000bI\u0004´Iþ\u000e\u0003ù\u0002\u0005\u000b\u000b°Oü\u0004\u0011¸\u0001\u0012á\u0016\u0014ò\f\nó\bþ&ñ\u0016\u0014ò\f\nóâ \u0016ð".getBytes("ISO-8859-1"), 0, bArr2, 0, 1166);
            $$a = bArr2;
            i10 = 66;
        }
        $$b = i10;
        $11 = ($10 + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    public static int getCurrencyIso4217Code(Object obj) {
        System.currentTimeMillis();
        System.currentTimeMillis();
        Object obj2 = f8894i;
        $11 = ($10 + 65) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            int i10 = $$b;
            byte[] bArr = $$a;
            int intValue = ((Integer) Class.forName($$c((byte) i10, bArr[4], (short) (i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING)), true, (ClassLoader) f8893e).getMethod($$c(bArr[487], bArr[637], bArr[7]), Object.class).invoke(obj2, obj)).intValue();
            int i11 = $10 + 55;
            $11 = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                return intValue;
            }
            throw null;
        } catch (Throwable th2) {
            Throwable cause = th2.getCause();
            if (cause != null) {
                throw cause;
            }
            throw th2;
        }
    }

    public static Object getCurrencyIso4217Code(char c10, int i10, int i11) {
        int i12 = ($10 + 107) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Object obj = f8894i;
        int i13 = ((i12 & 71) + (i12 | 71)) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        $10 = i13;
        $11 = (i13 + 71) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            Object[] objArr = {Character.valueOf(c10), Integer.valueOf(i10), Integer.valueOf(i11)};
            int i14 = $$b;
            byte[] bArr = $$a;
            Class<?> cls = Class.forName($$c((byte) i14, bArr[4], (short) (i14 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING)), true, (ClassLoader) f8893e);
            String $$c = $$c((byte) (i14 + 4), (byte) (-bArr[815]), bArr[35]);
            Class cls2 = Character.TYPE;
            Class cls3 = Integer.TYPE;
            Object invoke = cls.getMethod($$c, cls2, cls3, cls3).invoke(obj, objArr);
            int i15 = $11 + 119;
            $10 = i15 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i15 % 2 == 0) {
                return invoke;
            }
            throw null;
        } catch (Throwable th2) {
            Throwable cause = th2.getCause();
            if (cause != null) {
                throw cause;
            }
            throw th2;
        }
    }
}
