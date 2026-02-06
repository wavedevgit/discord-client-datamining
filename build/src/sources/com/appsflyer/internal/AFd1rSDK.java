package com.appsflyer.internal;

import java.security.MessageDigest;
import java.util.Arrays;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import kotlin.text.MatchGroup;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nStringExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StringExtensions.kt\ncom/appsflyer/internal/components/monitorsdk/helpers/StringExtensionsKt\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,102:1\n13004#2,3:103\n*S KotlinDebug\n*F\n+ 1 StringExtensions.kt\ncom/appsflyer/internal/components/monitorsdk/helpers/StringExtensionsKt\n*L\n44#1:103,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFd1rSDK {
    public static final String AFAdRevenueData(String str, String str2) {
        MessageDigest messageDigest = MessageDigest.getInstance(str2);
        byte[] bytes = str.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "");
        byte[] digest = messageDigest.digest(bytes);
        Intrinsics.checkNotNullExpressionValue(digest, "");
        String str3 = "";
        for (byte b10 : digest) {
            String format = String.format("%02x", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "");
            str3 = str3 + format;
        }
        return str3;
    }

    public static final Pair<Integer, Integer> getCurrencyIso4217Code(@NotNull String str) {
        Integer num;
        Integer num2;
        Integer num3;
        Integer num4;
        Integer num5;
        Integer num6;
        String a10;
        String a11;
        String a12;
        String a13;
        String a14;
        String a15;
        Intrinsics.checkNotNullParameter(str, "");
        MatchResult h10 = new Regex("(\\d+).(\\d+).(\\d+)-(\\d+).(\\d+).(\\d+)").h(str);
        if (h10 != null) {
            MatchGroup matchGroup = h10.d().get(1);
            if (matchGroup != null && (a15 = matchGroup.a()) != null) {
                num = StringsKt.toIntOrNull(a15);
            } else {
                num = null;
            }
            MatchGroup matchGroup2 = h10.d().get(2);
            if (matchGroup2 != null && (a14 = matchGroup2.a()) != null) {
                num2 = StringsKt.toIntOrNull(a14);
            } else {
                num2 = null;
            }
            MatchGroup matchGroup3 = h10.d().get(3);
            if (matchGroup3 != null && (a13 = matchGroup3.a()) != null) {
                num3 = StringsKt.toIntOrNull(a13);
            } else {
                num3 = null;
            }
            MatchGroup matchGroup4 = h10.d().get(4);
            if (matchGroup4 != null && (a12 = matchGroup4.a()) != null) {
                num4 = StringsKt.toIntOrNull(a12);
            } else {
                num4 = null;
            }
            MatchGroup matchGroup5 = h10.d().get(5);
            if (matchGroup5 != null && (a11 = matchGroup5.a()) != null) {
                num5 = StringsKt.toIntOrNull(a11);
            } else {
                num5 = null;
            }
            MatchGroup matchGroup6 = h10.d().get(6);
            if (matchGroup6 != null && (a10 = matchGroup6.a()) != null) {
                num6 = StringsKt.toIntOrNull(a10);
            } else {
                num6 = null;
            }
            Integer num7 = num6;
            if (getMonetizationNetwork(num, num2, num3, num4, num5, num6)) {
                Intrinsics.checkNotNull(num);
                Intrinsics.checkNotNull(num2);
                Intrinsics.checkNotNull(num3);
                Integer valueOf = Integer.valueOf((num.intValue() * 1000000) + (num2.intValue() * 1000) + num3.intValue());
                Intrinsics.checkNotNull(num4);
                Intrinsics.checkNotNull(num5);
                Intrinsics.checkNotNull(num7);
                return qr.v.a(valueOf, Integer.valueOf((num4.intValue() * 1000000) + (num5.intValue() * 1000) + num7.intValue()));
            }
        }
        return null;
    }

    public static final Pair<Integer, Integer> getMonetizationNetwork(@NotNull String str) {
        String a10;
        String a11;
        String a12;
        Intrinsics.checkNotNullParameter(str, "");
        MatchResult h10 = new Regex("^(\\d+).(\\+)$|^(\\d+).(\\d+).(\\+)$").h(str);
        if (h10 != null) {
            MatchGroup matchGroup = h10.d().get(1);
            Integer intOrNull = (matchGroup == null || (a12 = matchGroup.a()) == null) ? null : StringsKt.toIntOrNull(a12);
            MatchGroup matchGroup2 = h10.d().get(3);
            Integer intOrNull2 = (matchGroup2 == null || (a11 = matchGroup2.a()) == null) ? null : StringsKt.toIntOrNull(a11);
            MatchGroup matchGroup3 = h10.d().get(4);
            Integer intOrNull3 = (matchGroup3 == null || (a10 = matchGroup3.a()) == null) ? null : StringsKt.toIntOrNull(a10);
            if (intOrNull != null) {
                return qr.v.a(Integer.valueOf(intOrNull.intValue() * 1000000), Integer.valueOf(((intOrNull.intValue() + 1) * 1000000) - 1));
            }
            if (intOrNull2 != null && intOrNull3 != null) {
                return qr.v.a(Integer.valueOf((intOrNull2.intValue() * 1000000) + (intOrNull3.intValue() * 1000)), Integer.valueOf(((intOrNull2.intValue() * 1000000) + ((intOrNull3.intValue() + 1) * 1000)) - 1));
            }
        }
        return null;
    }

    @NotNull
    public static final String getRevenue(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        return "[Exception Manager]: " + str;
    }

    private static boolean getMonetizationNetwork(@NotNull Object... objArr) {
        Intrinsics.checkNotNullParameter(objArr, "");
        return !kotlin.collections.i.N(objArr, null);
    }
}
