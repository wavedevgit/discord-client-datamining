package com.appsflyer.internal;

import android.content.Context;
import android.graphics.Color;
import android.graphics.ImageFormat;
import android.graphics.PointF;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Process;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.widget.ExpandableListView;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFc1iSDK extends HashMap<String, Object> {
    private static int $10 = 0;
    private static int $11 = 1;
    private static int areAllFieldsValid = 1;
    private static int getMediationNetwork;
    private static long getMonetizationNetwork;
    private static int getRevenue;
    private final Map<String, Object> AFAdRevenueData;
    private final Context getCurrencyIso4217Code;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class AFa1zSDK {
        static byte[] AFAdRevenueData(@NonNull byte[] bArr) {
            for (int i10 = 0; i10 < bArr.length; i10++) {
                bArr[i10] = (byte) (bArr[i10] ^ ((i10 % 2) + 42));
            }
            return bArr;
        }

        @NonNull
        static byte[] getMonetizationNetwork(@NonNull String str) {
            return str.getBytes(Charset.defaultCharset());
        }
    }

    static {
        AFAdRevenueData();
        PointF.length(0.0f, 0.0f);
        ExpandableListView.getPackedPositionChild(0L);
        ViewConfiguration.getZoomControlsTimeout();
        ViewConfiguration.getScrollDefaultDelay();
        View.MeasureSpec.makeMeasureSpec(0, 0);
        ImageFormat.getBitsPerPixel(0);
        ViewConfiguration.getFadingEdgeLength();
        SystemClock.currentThreadTimeMillis();
        KeyEvent.getModifierMetaStateMask();
        ViewConfiguration.getTouchSlop();
        ViewConfiguration.getScrollBarSize();
        TypedValue.complexToFraction(0, 0.0f, 0.0f);
        ViewConfiguration.getScrollFriction();
        Process.myPid();
        View.resolveSizeAndState(0, 0, 0);
        ExpandableListView.getPackedPositionChild(0L);
        ViewConfiguration.getFadingEdgeLength();
        ViewConfiguration.getTapTimeout();
        TextUtils.indexOf((CharSequence) "", '0', 0, 0);
        int i10 = areAllFieldsValid + 19;
        getRevenue = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return;
        }
        throw null;
    }

    public AFc1iSDK(Map<String, Object> map, Context context) {
        this.AFAdRevenueData = map;
        this.getCurrencyIso4217Code = context;
        put(getMediationNetwork(), getMonetizationNetwork());
    }

    static void AFAdRevenueData() {
        getMediationNetwork = -33994396;
        getMonetizationNetwork = 8254201675162375375L;
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r9 = r9;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(java.lang.String r9, int r10, int r11, int r12, boolean r13, java.lang.Object[] r14) {
        /*
            if (r9 == 0) goto L18
            int r0 = com.appsflyer.internal.AFc1iSDK.$10
            int r0 = r0 + 15
            int r1 = r0 % 128
            com.appsflyer.internal.AFc1iSDK.$11 = r1
            int r0 = r0 % 2
            if (r0 == 0) goto L13
            char[] r9 = r9.toCharArray()
            goto L18
        L13:
            r9.toCharArray()
            r9 = 0
            throw r9
        L18:
            char[] r9 = (char[]) r9
            com.appsflyer.internal.AFk1cSDK r0 = new com.appsflyer.internal.AFk1cSDK
            r0.<init>()
            char[] r1 = new char[r11]
            r2 = 0
            r0.getMonetizationNetwork = r2
        L24:
            int r3 = r0.getMonetizationNetwork
            if (r3 >= r11) goto L4b
            int r4 = com.appsflyer.internal.AFc1iSDK.$11
            int r4 = r4 + 45
            int r4 = r4 % 128
            com.appsflyer.internal.AFc1iSDK.$10 = r4
            char r4 = r9[r3]
            r0.AFAdRevenueData = r4
            int r4 = r4 + r12
            char r4 = (char) r4
            r1[r3] = r4
            int r5 = com.appsflyer.internal.AFc1iSDK.getMediationNetwork
            long r5 = (long) r5
            r7 = -1147347204026316506(0xf013cdcbfdf94926, double:-7.686475903053402E231)
            long r5 = r5 ^ r7
            int r5 = (int) r5
            int r4 = r4 - r5
            char r4 = (char) r4
            r1[r3] = r4
            int r3 = r3 + 1
            r0.getMonetizationNetwork = r3
            goto L24
        L4b:
            if (r10 <= 0) goto L6a
            int r9 = com.appsflyer.internal.AFc1iSDK.$11
            int r9 = r9 + 43
            int r9 = r9 % 128
            com.appsflyer.internal.AFc1iSDK.$10 = r9
            r0.getCurrencyIso4217Code = r10
            char[] r9 = new char[r11]
            java.lang.System.arraycopy(r1, r2, r9, r2, r11)
            int r10 = r0.getCurrencyIso4217Code
            int r12 = r11 - r10
            java.lang.System.arraycopy(r9, r2, r1, r12, r10)
            int r10 = r0.getCurrencyIso4217Code
            int r12 = r11 - r10
            java.lang.System.arraycopy(r9, r10, r1, r2, r12)
        L6a:
            if (r13 == 0) goto L82
            char[] r9 = new char[r11]
            r0.getMonetizationNetwork = r2
        L70:
            int r10 = r0.getMonetizationNetwork
            if (r10 >= r11) goto L81
            int r12 = r11 - r10
            int r12 = r12 + (-1)
            char r12 = r1[r12]
            r9[r10] = r12
            int r10 = r10 + 1
            r0.getMonetizationNetwork = r10
            goto L70
        L81:
            r1 = r9
        L82:
            java.lang.String r9 = new java.lang.String
            r9.<init>(r1)
            r14[r2] = r9
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFc1iSDK.a(java.lang.String, int, int, int, boolean, java.lang.Object[]):void");
    }

    private static void b(String str, int i10, Object[] objArr) {
        int i11;
        char[] cArr;
        int i12 = $10;
        $11 = (i12 + 27) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        char[] cArr2 = str;
        if (str != null) {
            int i13 = i12 + 97;
            $11 = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i13 % 2 == 0) {
                int i14 = 74 / 0;
                cArr = str.toCharArray();
            } else {
                cArr = str.toCharArray();
            }
            $11 = ($10 + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            cArr2 = cArr;
        }
        AFk1gSDK aFk1gSDK = new AFk1gSDK();
        char[] currencyIso4217Code = AFk1gSDK.getCurrencyIso4217Code(getMonetizationNetwork ^ 7975055078221964256L, cArr2, i10);
        aFk1gSDK.getCurrencyIso4217Code = 4;
        while (true) {
            int i15 = aFk1gSDK.getCurrencyIso4217Code;
            if (i15 < currencyIso4217Code.length) {
                $11 = ($10 + 23) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                aFk1gSDK.getMediationNetwork = i15 - 4;
                currencyIso4217Code[i15] = (char) ((currencyIso4217Code[i15] ^ currencyIso4217Code[i15 % 4]) ^ (i11 * (getMonetizationNetwork ^ 7975055078221964256L)));
                aFk1gSDK.getCurrencyIso4217Code = i15 + 1;
            } else {
                objArr[0] = new String(currencyIso4217Code, 4, currencyIso4217Code.length - 4);
                return;
            }
        }
    }

    private static StringBuilder getCurrencyIso4217Code(@NonNull String... strArr) {
        ArrayList arrayList = new ArrayList();
        int length = strArr.length;
        for (int i10 = 0; i10 < 3; i10++) {
            arrayList.add(Integer.valueOf(strArr[i10].length()));
        }
        Collections.sort(arrayList);
        int intValue = ((Integer) arrayList.get(0)).intValue();
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < intValue; i11++) {
            Integer num = null;
            for (int i12 = 0; i12 < 3; i12++) {
                getRevenue = (areAllFieldsValid + 57) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                int charAt = strArr[i12].charAt(i11);
                if (num == null) {
                    int i13 = areAllFieldsValid + 69;
                    getRevenue = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (i13 % 2 != 0) {
                        throw null;
                    }
                } else {
                    charAt ^= num.intValue();
                }
                num = Integer.valueOf(charAt);
            }
            sb2.append(Integer.toHexString(num.intValue()));
        }
        return sb2;
    }

    @NonNull
    private String getMediationNetwork() {
        try {
            String num = Integer.toString(Build.VERSION.SDK_INT);
            Map<String, Object> map = this.AFAdRevenueData;
            Object[] objArr = new Object[1];
            a("\n\ufff7\u0003\u0006\ufff7￼\ufff5\n\uffff\u0003\ufffb\t", ExpandableListView.getPackedPositionGroup(0L) + 4, 11 - ExpandableListView.getPackedPositionChild(0L), TextUtils.getCapsMode("", 0, 0) + 172, false, objArr);
            String obj = map.get(((String) objArr[0]).intern()).toString();
            Map<String, Object> map2 = this.AFAdRevenueData;
            Object[] objArr2 = new Object[1];
            a("\ufffa\u000b\ufffb�\u0007", 3 - View.MeasureSpec.makeMeasureSpec(0, 0), 5 - Color.blue(0), (TypedValue.complexToFraction(0, 0.0f, 0.0f) > 0.0f ? 1 : (TypedValue.complexToFraction(0, 0.0f, 0.0f) == 0.0f ? 0 : -1)) + 169, true, objArr2);
            String obj2 = map2.get(((String) objArr2[0]).intern()).toString();
            if (obj2 == null) {
                Object[] objArr3 = new Object[1];
                a("\u0003\u0002\ufff8\u0002\ufff5\u0006\ufff6\u0013", TextUtils.indexOf("", "") + 2, 8 - (ViewConfiguration.getTapTimeout() >> 16), 142 - Drawable.resolveOpacity(0, 0), true, objArr3);
                obj2 = ((String) objArr3[0]).intern();
            }
            StringBuilder sb2 = new StringBuilder(obj);
            sb2.reverse();
            StringBuilder currencyIso4217Code = getCurrencyIso4217Code(num, obj2, sb2.toString());
            int length = currencyIso4217Code.length();
            if (length > 4) {
                int i10 = areAllFieldsValid + 97;
                getRevenue = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                int i11 = i10 % 2;
                currencyIso4217Code.delete(4, length);
            } else {
                while (length < 4) {
                    getRevenue = (areAllFieldsValid + 89) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    length++;
                    currencyIso4217Code.append('1');
                }
            }
            Object[] objArr4 = new Object[1];
            b("퍵ƅ哆鈷팞뛏㫾", (ViewConfiguration.getZoomControlsTimeout() > 0L ? 1 : (ViewConfiguration.getZoomControlsTimeout() == 0L ? 0 : -1)), objArr4);
            currencyIso4217Code.insert(0, ((String) objArr4[0]).intern());
            return currencyIso4217Code.toString();
        } catch (Exception e10) {
            Object[] objArr5 = new Object[1];
            b("쬇\udc3a\uf4e9ꃕ쬧歲髒蔬\u17ed俣뾸ꋹ爆경퍙羱嵚鄵\uf01e᭰맗\uf642ᗂ㣆蓎\uda93䪂햘\ue706㿃湈\uf100쉈ᰌ茍蹄⺌䅐ꂮꮘ৬ꖘ쑧䢔", -((byte) KeyEvent.getModifierMetaStateMask()), objArr5);
            AFLogger.afErrorLogForExcManagerOnly(((String) objArr5[0]).intern(), e10);
            StringBuilder sb3 = new StringBuilder();
            Object[] objArr6 = new Object[1];
            b("╨鳵다턗┎⮻\udcd3\uf4f6鈴ེ吏팹鱵\uec3c镗\u0e60댽퇢똟檸埿뛊叁䤏檢騎ಅꑋॹ罂⡕肋ⰸ峎앆ￃ샰ƙ\ue6bf\uda0a\ue780\ue557艱㥐먊쩒", -((byte) KeyEvent.getModifierMetaStateMask()), objArr6);
            sb3.append(((String) objArr6[0]).intern());
            sb3.append(e10);
            AFLogger.afRDLog(sb3.toString());
            Object[] objArr7 = new Object[1];
            b("쁃w\uf497꜍쀨뜽骯芹᳆鎥뾴", Drawable.resolveOpacity(0, 0) + 1, objArr7);
            return ((String) objArr7[0]).intern();
        }
    }

    /* JADX WARN: Can't wrap try/catch for region: R(22:1|2|3|4|(2:5|6)|7|8|(5:9|10|11|(2:13|14)|15)|(2:17|(13:19|20|21|22|23|24|25|26|(3:28|(3:30|31|32)(1:34)|33)|35|36|37|(1:39)(1:41)))|50|20|21|22|23|24|25|26|(0)|35|36|37|(0)(0)) */
    /* JADX WARN: Can't wrap try/catch for region: R(27:1|2|3|4|5|6|7|8|9|10|11|(2:13|14)|15|(2:17|(13:19|20|21|22|23|24|25|26|(3:28|(3:30|31|32)(1:34)|33)|35|36|37|(1:39)(1:41)))|50|20|21|22|23|24|25|26|(0)|35|36|37|(0)(0)) */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x01bc, code lost:
        r21 = null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x02f7, code lost:
        r0 = e;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x030c, code lost:
        r0 = e;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x030f, code lost:
        r15 = new java.lang.Object[1];
        a("\u0005\u0015\f\u0001\ufff6ￒ\ufff6\u0014\u0005\u0007\u0012\u000f\u0012\u0012\u0005\uffc0", android.widget.ExpandableListView.getPackedPositionType(r18) + 10, 16 - (android.view.ViewConfiguration.getScrollBarFadeDuration() >> 16), android.view.KeyEvent.getDeadChar(0, 0) + 162, true, r15);
        com.appsflyer.AFLogger.afErrorLogForExcManagerOnly(((java.lang.String) r15[0]).intern(), r0);
        r3 = new java.lang.StringBuilder();
        r6 = new java.lang.Object[1];
        b("罹写䟍老缟\ue6d7⧺ꗠꎠ숖\u0cf7舯왤⅐恾彶\ue92c\u1c8e䌶㮮෮箦ꛨ᠙コ坢鈴\uf559卽뉻\udd6e퇔瘪醣〻께骹쳳ᎋ謏부⠢睃桁\ue04eݰ䩁䓄", (android.view.ViewConfiguration.getMinimumFlingVelocity() >> 16) + 1, r6);
        r3.append(((java.lang.String) r6[0]).intern());
        r3.append(r0);
        com.appsflyer.AFLogger.afRDLog(r3.toString());
        r0 = new java.lang.StringBuilder();
        r0.append(r5);
        r15 = new java.lang.Object[1];
        a("\u001bￜ\u001b\uffdd\uffdd\u000e\u0013\u001f\f\u0018\u0011ￛ\u001cￛ\u001cￜ", 9 - android.widget.ExpandableListView.getPackedPositionChild(r18), '@' - android.text.AndroidCharacter.getMirror(r20), android.view.KeyEvent.normalizeMetaState(0) + 151, false, r15);
        r0.append(((java.lang.String) r15[0]).intern());
        r0 = r0.toString();
     */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0198  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x01ca A[Catch: Exception -> 0x01b9, TRY_LEAVE, TryCatch #3 {Exception -> 0x01b9, blocks: (B:13:0x0161, B:17:0x01a0, B:21:0x01c0, B:23:0x01ca, B:27:0x01f0), top: B:55:0x0161 }] */
    /* JADX WARN: Removed duplicated region for block: B:33:0x02dc A[Catch: Exception -> 0x02f7, TRY_LEAVE, TryCatch #4 {Exception -> 0x02f7, blocks: (B:31:0x020e, B:33:0x02dc, B:36:0x02f0, B:39:0x02f9, B:40:0x02ff), top: B:57:0x020e }] */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0397 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:48:0x0398  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private java.lang.String getMonetizationNetwork() {
        /*
            Method dump skipped, instructions count: 921
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFc1iSDK.getMonetizationNetwork():java.lang.String");
    }
}
